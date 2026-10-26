/*
    podcasts.selfdriven.institute — deploy factory

    Idempotent pipeline (safe to re-run; existing resources are reused, code is updated):

         1  Zip lambda folder
       2-3  IAM role check → create
       4-6  Lambda check → create | update code → update config
       7-8  HTTP API check → quick-create ($default route + auto-deploy stage) + invoke permission
      9-10  ACM cert check → request → describe → Route 53 validation records (or print) → poll
     11-12  API GW custom domain check → create, API mapping check → create
        13  Route 53 alias record (or print CNAME when the zone isn't in Route 53)

    The zip is uploaded directly (ZipFile) — no deploy bucket needed at ~3 MB.
*/

var entityos = require('entityos');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

module.exports =
{
    VERSION: '1.0.0',

    init: function (param)
    {
        // ── Config ──────────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-get-config',
            code: function ()
            {
                const settings = entityos.get({ scope: '_settings' });

                let accessID = _.get(settings, 'infrastructure.aws.access.id');
                let accessSecretKey = _.get(settings, 'infrastructure.aws.access.secret');

                if (accessID == 'prompt' || accessSecretKey == 'prompt')
                {
                    const prompt = require('prompt-sync')();
                    if (accessID == 'prompt')
                    {
                        const _accessID = prompt('AWS Access ID: ');
                        _.set(settings, 'infrastructure.aws.access.id', _accessID);
                    }
                    if (accessSecretKey == 'prompt')
                    {
                        const _accessSecretKey = prompt('AWS Access Secret Key: ', { echo: '*' });
                        _.set(settings, 'infrastructure.aws.access.secret', _accessSecretKey);
                    }
                }

                const config = { region: _.get(settings, 'deploy.region', 'ap-southeast-2') };

                // 'default-chain' (or blank) → use AWS_PROFILE / environment / SSO credentials
                accessID = _.get(settings, 'infrastructure.aws.access.id');
                if (accessID && accessID !== 'default-chain')
                {
                    process.env.AWS_ACCESS_KEY_ID = accessID;
                    process.env.AWS_SECRET_ACCESS_KEY = _.get(settings, 'infrastructure.aws.access.secret');

                    config.credentials =
                    {
                        accessKeyId:     accessID,
                        secretAccessKey: _.get(settings, 'infrastructure.aws.access.secret')
                    };
                }

                return config;
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-get-deploy-settings',
            code: function ()
            {
                const settings = entityos.get({ scope: '_settings' });

                return {
                    region:             _.get(settings, 'deploy.region', 'ap-southeast-2'),
                    lambdaFolder:       path.resolve(__dirname, _.get(settings, 'deploy.lambdaFolder', '../lambda')),
                    lambdaZipName:      _.get(settings, 'deploy.lambdaZipName', 'selfdriven-institute-podcasts-lambda.zip'),
                    functionName:       _.get(settings, 'deploy.functionName', 'selfdriven-institute-podcasts'),
                    roleName:           _.get(settings, 'deploy.roleName', 'selfdriven-institute-podcasts-lambda-role'),
                    apiName:            _.get(settings, 'deploy.apiName', 'selfdriven-institute-podcasts-api'),
                    customDomain:       _.get(settings, 'deploy.customDomain', 'podcasts.selfdriven.institute'),
                    route53Zone:        _.get(settings, 'deploy.route53Zone', 'selfdriven.institute'),
                    memorySize:         _.get(settings, 'deploy.memorySize', 512),
                    timeout:            _.get(settings, 'deploy.timeout', 20),
                    acmPollMaxAttempts: _.get(settings, 'deploy.acmPollMaxAttempts', 40),
                    acmPollIntervalMs:  _.get(settings, 'deploy.acmPollIntervalMs', 15000),
                    environment:
                    {
                        SITE_URL:      'https://' + _.get(settings, 'deploy.customDomain', 'podcasts.selfdriven.institute'),
                        REPO_OWNER:    _.get(settings, 'podcasts.github.owner', 'selfdriven-foundation'),
                        REPO_NAME:     _.get(settings, 'podcasts.github.repo', 'selfdriven-institute'),
                        REPO_BRANCH:   _.get(settings, 'podcasts.github.branch', 'main'),
                        REPO_PATH:     _.get(settings, 'podcasts.github.path', 'resources/podcasts'),
                        GITHUB_TOKEN:  _.get(settings, 'podcasts.github.token', ''),
                        CACHE_SECONDS: String(_.get(settings, 'podcasts.cacheSeconds', 600)),
                        CHUNK_BYTES:   String(_.get(settings, 'podcasts.chunkBytes', 3670016))
                    }
                };
            }
        });

        // ── Entry ───────────────────────────────────────────────────

        entityos.add(
        {
            name: 'app-process-aws-podcasts-deploy',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const settings = entityos.get({ scope: '_settings' });

                console.log('\n── podcasts deploy ─────────────────');
                console.log('Region:  ', deploy.region);
                console.log('Function:', deploy.functionName);
                console.log('Domain:  ', deploy.customDomain);
                console.log('────────────────────────────────────\n');

                if (_.get(settings, 'podcasts.github.token') == 'prompt')
                {
                    const prompt = require('prompt-sync')();
                    _.set(settings, 'podcasts.github.token', prompt('GitHub token (blank for none): ', { echo: '*' }));
                }

                if (!fs.existsSync(path.join(deploy.lambdaFolder, 'node_modules', 'entityos')))
                {
                    entityos.invoke('util-end', 'Run "npm install --omit=dev" in ' + deploy.lambdaFolder + ' first', '400');
                    return;
                }

                entityos.invoke('util-aws-podcasts-deploy-zip');
            }
        });

        // ── 1. Zip ──────────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-zip',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const zipPath = path.join(__dirname, deploy.lambdaZipName);

                console.log('[1/13] Zipping lambda folder:', deploy.lambdaFolder, '→', zipPath);

                const archiver = require('archiver');
                const output = fs.createWriteStream(zipPath);
                const archive = archiver('zip', { zlib: { level: 9 } });

                output.on('close', function ()
                {
                    console.log('  ✓ Zip created:', archive.pointer(), 'bytes');
                    entityos.set({ scope: 'podcasts-deploy', context: 'zipPath', value: zipPath });
                    entityos.invoke('util-aws-podcasts-deploy-iam-role-check');
                });

                archive.on('error', function (err)
                {
                    entityos.invoke('util-end', 'Zip error: ' + err.message, '500');
                });

                archive.pipe(output);
                archive.glob('**/*',
                {
                    cwd: deploy.lambdaFolder,
                    ignore: ['node_modules/lambda-local/**', 'events/**', '*.zip', 'package-lock.json']
                });
                archive.finalize();
            }
        });

        // ── 2-3. IAM role ───────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-iam-role-check',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const { IAMClient, GetRoleCommand } = require('@aws-sdk/client-iam');
                const iam = new IAMClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[2/13] Checking IAM role:', deploy.roleName);

                iam.send(new GetRoleCommand({ RoleName: deploy.roleName }))
                .then(function (response)
                {
                    console.log('  ✓ Role exists:', response.Role.Arn);
                    entityos.set({ scope: 'podcasts-deploy', context: 'roleARN', value: response.Role.Arn });
                    entityos.invoke('util-aws-podcasts-deploy-lambda-check');
                })
                .catch(function (err)
                {
                    if (err.name === 'NoSuchEntityException')
                    {
                        console.log('  → Role not found — will create');
                        entityos.invoke('util-aws-podcasts-deploy-iam-role-create');
                    }
                    else
                    {
                        entityos.invoke('util-end', 'GetRole error: ' + err.message, '500');
                    }
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-iam-role-create',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const { IAMClient, CreateRoleCommand, AttachRolePolicyCommand } = require('@aws-sdk/client-iam');
                const iam = new IAMClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[3/13] Creating IAM role:', deploy.roleName);

                const assumeRolePolicy =
                {
                    Version: '2012-10-17',
                    Statement: [{ Effect: 'Allow', Principal: { Service: 'lambda.amazonaws.com' }, Action: 'sts:AssumeRole' }]
                };

                iam.send(new CreateRoleCommand(
                {
                    RoleName: deploy.roleName,
                    AssumeRolePolicyDocument: JSON.stringify(assumeRolePolicy),
                    Description: deploy.functionName + ' Lambda execution role',
                    Tags: [{ Key: 'Project', Value: 'selfdriven-institute-podcasts' }]
                }))
                .then(function (response)
                {
                    entityos.set({ scope: 'podcasts-deploy', context: 'roleARN', value: response.Role.Arn });

                    return iam.send(new AttachRolePolicyCommand(
                    {
                        RoleName: deploy.roleName,
                        PolicyArn: 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'
                    }));
                })
                .then(function ()
                {
                    console.log('  ✓ Role created, basic execution attached — waiting 10s for IAM propagation');
                    setTimeout(function () { entityos.invoke('util-aws-podcasts-deploy-lambda-check'); }, 10000);
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'IAM role create error: ' + err.message, '500');
                });
            }
        });

        // ── 4-6. Lambda ─────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-lambda-check',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const { LambdaClient, GetFunctionCommand } = require('@aws-sdk/client-lambda');
                const lambda = new LambdaClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[4/13] Checking Lambda function:', deploy.functionName);

                lambda.send(new GetFunctionCommand({ FunctionName: deploy.functionName }))
                .then(function (response)
                {
                    console.log('  ✓ Function exists:', response.Configuration.FunctionArn);
                    entityos.set({ scope: 'podcasts-deploy', context: 'functionARN', value: response.Configuration.FunctionArn });
                    entityos.invoke('util-aws-podcasts-deploy-lambda-update');
                })
                .catch(function (err)
                {
                    if (err.name === 'ResourceNotFoundException')
                    {
                        console.log('  → Function not found — will create');
                        entityos.invoke('util-aws-podcasts-deploy-lambda-create');
                    }
                    else
                    {
                        entityos.invoke('util-end', 'GetFunction error: ' + err.message, '500');
                    }
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-lambda-create',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const roleARN = entityos.get({ scope: 'podcasts-deploy', context: 'roleARN' });
                const zipPath = entityos.get({ scope: 'podcasts-deploy', context: 'zipPath' });

                const { LambdaClient, CreateFunctionCommand, waitUntilFunctionActiveV2 } = require('@aws-sdk/client-lambda');
                const lambda = new LambdaClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[5/13] Creating Lambda function:', deploy.functionName);

                lambda.send(new CreateFunctionCommand(
                {
                    FunctionName:  deploy.functionName,
                    Runtime:       'nodejs22.x',
                    Architectures: ['arm64'],
                    Handler:       'index.handler',
                    Role:          roleARN,
                    Code:          { ZipFile: fs.readFileSync(zipPath) },
                    MemorySize:    deploy.memorySize,
                    Timeout:       deploy.timeout,
                    Environment:   { Variables: deploy.environment },
                    Description:   'podcasts.selfdriven.institute',
                    Tags:          { Project: 'selfdriven-institute-podcasts' }
                }))
                .then(function (response)
                {
                    entityos.set({ scope: 'podcasts-deploy', context: 'functionARN', value: response.FunctionArn });
                    console.log('  → Waiting for function to become Active');
                    return waitUntilFunctionActiveV2({ client: lambda, maxWaitTime: 120 }, { FunctionName: deploy.functionName });
                })
                .then(function ()
                {
                    console.log('  ✓ Function created:', entityos.get({ scope: 'podcasts-deploy', context: 'functionARN' }));
                    entityos.invoke('util-aws-podcasts-deploy-apigw-check');
                })
                .catch(function (err)
                {
                    if (err.name === 'InvalidParameterValueException' && /role/i.test(err.message))
                    {
                        // New role not yet assumable — IAM propagation; retry once more
                        console.log('  → Role not yet assumable — retrying in 10s');
                        setTimeout(function () { entityos.invoke('util-aws-podcasts-deploy-lambda-create'); }, 10000);
                    }
                    else
                    {
                        entityos.invoke('util-end', 'CreateFunction error: ' + err.message, '500');
                    }
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-lambda-update',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const zipPath = entityos.get({ scope: 'podcasts-deploy', context: 'zipPath' });

                const { LambdaClient, UpdateFunctionCodeCommand, UpdateFunctionConfigurationCommand, waitUntilFunctionUpdatedV2 } = require('@aws-sdk/client-lambda');
                const lambda = new LambdaClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[5/13] Updating Lambda code:', deploy.functionName);

                lambda.send(new UpdateFunctionCodeCommand(
                {
                    FunctionName: deploy.functionName,
                    ZipFile:      fs.readFileSync(zipPath)
                }))
                .then(function ()
                {
                    return waitUntilFunctionUpdatedV2({ client: lambda, maxWaitTime: 120 }, { FunctionName: deploy.functionName });
                })
                .then(function ()
                {
                    console.log('  ✓ Code updated');
                    console.log('[6/13] Updating Lambda configuration');

                    return lambda.send(new UpdateFunctionConfigurationCommand(
                    {
                        FunctionName: deploy.functionName,
                        MemorySize:   deploy.memorySize,
                        Timeout:      deploy.timeout,
                        Environment:  { Variables: deploy.environment }
                    }));
                })
                .then(function ()
                {
                    return waitUntilFunctionUpdatedV2({ client: lambda, maxWaitTime: 120 }, { FunctionName: deploy.functionName });
                })
                .then(function ()
                {
                    console.log('  ✓ Configuration updated');
                    entityos.invoke('util-aws-podcasts-deploy-apigw-check');
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'Lambda update error: ' + err.message, '500');
                });
            }
        });

        // ── 7-8. HTTP API ───────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-apigw-check',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const { ApiGatewayV2Client, GetApisCommand } = require('@aws-sdk/client-apigatewayv2');
                const apigw = new ApiGatewayV2Client(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[7/13] Checking HTTP API:', deploy.apiName);

                apigw.send(new GetApisCommand({ MaxResults: '500' }))
                .then(function (response)
                {
                    const existing = _.find(response.Items, function (api) { return api.Name === deploy.apiName; });

                    if (existing)
                    {
                        console.log('  ✓ API exists:', existing.ApiId);
                        entityos.set({ scope: 'podcasts-deploy', context: 'apiId', value: existing.ApiId });
                        entityos.invoke('util-aws-podcasts-deploy-acm-check');
                    }
                    else
                    {
                        console.log('  → API not found — will create');
                        entityos.invoke('util-aws-podcasts-deploy-apigw-create');
                    }
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'GetApis error: ' + err.message, '500');
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-apigw-create',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const functionARN = entityos.get({ scope: 'podcasts-deploy', context: 'functionARN' });
                const accountId = functionARN.split(':')[4];

                const { ApiGatewayV2Client, CreateApiCommand } = require('@aws-sdk/client-apigatewayv2');
                const { LambdaClient, AddPermissionCommand } = require('@aws-sdk/client-lambda');
                const apigw = new ApiGatewayV2Client(entityos.invoke('util-aws-podcasts-deploy-get-config'));
                const lambda = new LambdaClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[8/13] Creating HTTP API (quick create → $default route, auto-deploy)');

                apigw.send(new CreateApiCommand(
                {
                    Name:         deploy.apiName,
                    ProtocolType: 'HTTP',
                    Target:       functionARN,
                    Tags:         { Project: 'selfdriven-institute-podcasts' }
                }))
                .then(function (response)
                {
                    entityos.set({ scope: 'podcasts-deploy', context: 'apiId', value: response.ApiId });
                    console.log('  ✓ API created:', response.ApiId);

                    return lambda.send(new AddPermissionCommand(
                    {
                        FunctionName: deploy.functionName,
                        StatementId:  'apigw-invoke-' + response.ApiId,
                        Action:       'lambda:InvokeFunction',
                        Principal:    'apigateway.amazonaws.com',
                        SourceArn:    'arn:aws:execute-api:' + deploy.region + ':' + accountId + ':' + response.ApiId + '/*'
                    }));
                })
                .then(function ()
                {
                    console.log('  ✓ Invoke permission granted');
                    entityos.invoke('util-aws-podcasts-deploy-acm-check');
                })
                .catch(function (err)
                {
                    if (err.name === 'ResourceConflictException')
                    {
                        console.log('  ✓ Invoke permission already present');
                        entityos.invoke('util-aws-podcasts-deploy-acm-check');
                    }
                    else
                    {
                        entityos.invoke('util-end', 'HTTP API create error: ' + err.message, '500');
                    }
                });
            }
        });

        // ── 9-10. ACM certificate ───────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-acm-check',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const { ACMClient, ListCertificatesCommand } = require('@aws-sdk/client-acm');
                const acm = new ACMClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[9/13] Checking ACM certificate:', deploy.customDomain);

                acm.send(new ListCertificatesCommand({ CertificateStatuses: ['ISSUED', 'PENDING_VALIDATION'] }))
                .then(function (response)
                {
                    const existing = _.find(response.CertificateSummaryList, function (cert)
                    {
                        return cert.DomainName === deploy.customDomain;
                    });

                    if (existing)
                    {
                        entityos.set({ scope: 'podcasts-deploy', context: 'certARN', value: existing.CertificateArn });

                        if (existing.Status === 'ISSUED')
                        {
                            console.log('  ✓ Certificate issued:', existing.CertificateArn);
                            entityos.invoke('util-aws-podcasts-deploy-apigw-domain-check');
                        }
                        else
                        {
                            console.log('  → Certificate pending validation');
                            entityos.invoke('util-aws-podcasts-deploy-acm-describe');
                        }
                    }
                    else
                    {
                        entityos.invoke('util-aws-podcasts-deploy-acm-request');
                    }
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'ListCertificates error: ' + err.message, '500');
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-acm-request',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const { ACMClient, RequestCertificateCommand } = require('@aws-sdk/client-acm');
                const acm = new ACMClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[10/13] Requesting ACM certificate (DNS validation)');

                acm.send(new RequestCertificateCommand(
                {
                    DomainName:       deploy.customDomain,
                    ValidationMethod: 'DNS',
                    Tags:             [{ Key: 'Project', Value: 'selfdriven-institute-podcasts' }]
                }))
                .then(function (response)
                {
                    console.log('  ✓ Requested:', response.CertificateArn);
                    entityos.set({ scope: 'podcasts-deploy', context: 'certARN', value: response.CertificateArn });
                    setTimeout(function () { entityos.invoke('util-aws-podcasts-deploy-acm-describe'); }, 5000);
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'RequestCertificate error: ' + err.message, '500');
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-acm-describe',
            code: function ()
            {
                const certARN = entityos.get({ scope: 'podcasts-deploy', context: 'certARN' });
                const { ACMClient, DescribeCertificateCommand } = require('@aws-sdk/client-acm');
                const acm = new ACMClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                acm.send(new DescribeCertificateCommand({ CertificateArn: certARN }))
                .then(function (response)
                {
                    const cert = response.Certificate;
                    const validationRecords = _.compact(_.map(_.get(cert, 'DomainValidationOptions', []), function (option)
                    {
                        const record = _.get(option, 'ResourceRecord');
                        return record ? { name: record.Name, value: record.Value, type: record.Type } : undefined;
                    }));

                    if (validationRecords.length === 0)
                    {
                        setTimeout(function () { entityos.invoke('util-aws-podcasts-deploy-acm-describe'); }, 5000);
                        return;
                    }

                    entityos.set({ scope: 'podcasts-deploy', context: 'validationRecords', value: validationRecords });

                    if (cert.Status === 'ISSUED')
                    {
                        entityos.invoke('util-aws-podcasts-deploy-apigw-domain-check');
                    }
                    else
                    {
                        entityos.invoke('util-aws-podcasts-deploy-acm-dns-validate');
                    }
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'DescribeCertificate error: ' + err.message, '500');
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-acm-dns-validate',
            code: function ()
            {
                entityos.invoke('util-aws-podcasts-deploy-route53-zone-get', { next: 'util-aws-podcasts-deploy-acm-dns-validate-write' });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-acm-dns-validate-write',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const zoneId = entityos.get({ scope: 'podcasts-deploy', context: 'zoneId' });
                const validationRecords = entityos.get({ scope: 'podcasts-deploy', context: 'validationRecords' });

                entityos.set({ scope: 'podcasts-deploy', context: 'pollAttempt', value: 0 });

                if (zoneId == undefined)
                {
                    console.log('\n  Add this DNS record at your DNS provider to validate the certificate:');
                    _.each(validationRecords, function (record)
                    {
                        console.log('    ' + record.name + '  ' + record.type + '  ' + record.value);
                    });
                    console.log('  Polling until issued (Ctrl-C and re-run later is fine)\n');
                    entityos.invoke('util-aws-podcasts-deploy-acm-poll');
                    return;
                }

                const { Route53Client, ChangeResourceRecordSetsCommand } = require('@aws-sdk/client-route-53');
                const route53 = new Route53Client(_.assign({}, entityos.invoke('util-aws-podcasts-deploy-get-config'), { region: 'us-east-1' }));

                route53.send(new ChangeResourceRecordSetsCommand(
                {
                    HostedZoneId: zoneId,
                    ChangeBatch:
                    {
                        Comment: 'ACM validation for ' + deploy.customDomain,
                        Changes: _.map(validationRecords, function (record)
                        {
                            return {
                                Action: 'UPSERT',
                                ResourceRecordSet: { Name: record.name, Type: record.type, TTL: 300, ResourceRecords: [{ Value: record.value }] }
                            };
                        })
                    }
                }))
                .then(function (response)
                {
                    console.log('  ✓ Validation records written to Route 53, ChangeId:', response.ChangeInfo.Id);
                    entityos.invoke('util-aws-podcasts-deploy-acm-poll');
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'Route 53 validation write error: ' + err.message, '500');
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-acm-poll',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const certARN = entityos.get({ scope: 'podcasts-deploy', context: 'certARN' });
                const attempt = entityos.get({ scope: 'podcasts-deploy', context: 'pollAttempt' }) || 0;

                const { ACMClient, DescribeCertificateCommand } = require('@aws-sdk/client-acm');
                const acm = new ACMClient(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[10/13] Polling ACM — attempt', (attempt + 1) + '/' + deploy.acmPollMaxAttempts);

                acm.send(new DescribeCertificateCommand({ CertificateArn: certARN }))
                .then(function (response)
                {
                    const status = response.Certificate.Status;
                    console.log('  Status:', status);

                    if (status === 'ISSUED')
                    {
                        entityos.invoke('util-aws-podcasts-deploy-apigw-domain-check');
                    }
                    else if (status === 'FAILED')
                    {
                        entityos.invoke('util-end', 'Certificate FAILED: ' + _.get(response, 'Certificate.FailureReason', 'unknown'), '500');
                    }
                    else if (attempt + 1 >= deploy.acmPollMaxAttempts)
                    {
                        entityos.invoke('util-end', 'Certificate still ' + status + ' after ' + deploy.acmPollMaxAttempts + ' attempts. Re-run once the DNS record has propagated.', '408');
                    }
                    else
                    {
                        entityos.set({ scope: 'podcasts-deploy', context: 'pollAttempt', value: attempt + 1 });
                        setTimeout(function () { entityos.invoke('util-aws-podcasts-deploy-acm-poll'); }, deploy.acmPollIntervalMs);
                    }
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'ACM poll error: ' + err.message, '500');
                });
            }
        });

        // ── 11-12. Custom domain + mapping ──────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-apigw-domain-check',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const { ApiGatewayV2Client, GetDomainNameCommand } = require('@aws-sdk/client-apigatewayv2');
                const apigw = new ApiGatewayV2Client(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[11/13] Checking API Gateway custom domain:', deploy.customDomain);

                apigw.send(new GetDomainNameCommand({ DomainName: deploy.customDomain }))
                .then(function (response)
                {
                    console.log('  ✓ Custom domain exists');
                    entityos.set({ scope: 'podcasts-deploy', context: 'apiGwDomain', value: _.get(response, 'DomainNameConfigurations[0].ApiGatewayDomainName') });
                    entityos.set({ scope: 'podcasts-deploy', context: 'apiGwZoneId', value: _.get(response, 'DomainNameConfigurations[0].HostedZoneId') });
                    entityos.invoke('util-aws-podcasts-deploy-apigw-mapping-check');
                })
                .catch(function (err)
                {
                    if (err.name === 'NotFoundException')
                    {
                        console.log('  → Custom domain not found — will create');
                        entityos.invoke('util-aws-podcasts-deploy-apigw-domain-create');
                    }
                    else
                    {
                        entityos.invoke('util-end', 'GetDomainName error: ' + err.message, '500');
                    }
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-apigw-domain-create',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const certARN = entityos.get({ scope: 'podcasts-deploy', context: 'certARN' });

                const { ApiGatewayV2Client, CreateDomainNameCommand } = require('@aws-sdk/client-apigatewayv2');
                const apigw = new ApiGatewayV2Client(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                apigw.send(new CreateDomainNameCommand(
                {
                    DomainName: deploy.customDomain,
                    DomainNameConfigurations: [{ CertificateArn: certARN, EndpointType: 'REGIONAL', SecurityPolicy: 'TLS_1_2' }],
                    Tags: { Project: 'selfdriven-institute-podcasts' }
                }))
                .then(function (response)
                {
                    console.log('  ✓ Custom domain created');
                    entityos.set({ scope: 'podcasts-deploy', context: 'apiGwDomain', value: _.get(response, 'DomainNameConfigurations[0].ApiGatewayDomainName') });
                    entityos.set({ scope: 'podcasts-deploy', context: 'apiGwZoneId', value: _.get(response, 'DomainNameConfigurations[0].HostedZoneId') });
                    entityos.invoke('util-aws-podcasts-deploy-apigw-mapping-check');
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'CreateDomainName error: ' + err.message, '500');
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-apigw-mapping-check',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const apiId = entityos.get({ scope: 'podcasts-deploy', context: 'apiId' });

                const { ApiGatewayV2Client, GetApiMappingsCommand, CreateApiMappingCommand } = require('@aws-sdk/client-apigatewayv2');
                const apigw = new ApiGatewayV2Client(entityos.invoke('util-aws-podcasts-deploy-get-config'));

                console.log('[12/13] Checking API mapping:', deploy.customDomain, '→', apiId);

                apigw.send(new GetApiMappingsCommand({ DomainName: deploy.customDomain }))
                .then(function (response)
                {
                    const existing = _.find(response.Items, function (mapping) { return mapping.ApiId === apiId && !mapping.ApiMappingKey; });

                    if (existing)
                    {
                        console.log('  ✓ Mapping exists');
                        return undefined;
                    }

                    return apigw.send(new CreateApiMappingCommand({ DomainName: deploy.customDomain, ApiId: apiId, Stage: '$default' }))
                    .then(function () { console.log('  ✓ Mapping created'); });
                })
                .then(function ()
                {
                    entityos.invoke('util-aws-podcasts-deploy-route53-zone-get', { next: 'util-aws-podcasts-deploy-route53-record' });
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'API mapping error: ' + err.message, '500');
                });
            }
        });

        // ── 13. Route 53 ────────────────────────────────────────────

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-route53-zone-get',
            code: function (param)
            {
                const next = _.get(param, 'next');
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const cachedZoneId = entityos.get({ scope: 'podcasts-deploy', context: 'zoneId' });
                const zoneChecked = entityos.get({ scope: 'podcasts-deploy', context: 'zoneChecked' });

                if (zoneChecked) { entityos.invoke(next); return; }

                const { Route53Client, ListHostedZonesByNameCommand } = require('@aws-sdk/client-route-53');
                const route53 = new Route53Client(_.assign({}, entityos.invoke('util-aws-podcasts-deploy-get-config'), { region: 'us-east-1' }));
                const zoneName = _.trimEnd(deploy.route53Zone, '.') + '.';

                route53.send(new ListHostedZonesByNameCommand({ DNSName: zoneName, MaxItems: 1 }))
                .then(function (response)
                {
                    const zone = _.find(response.HostedZones, function (hostedZone) { return hostedZone.Name === zoneName && !_.get(hostedZone, 'Config.PrivateZone'); });

                    entityos.set({ scope: 'podcasts-deploy', context: 'zoneChecked', value: true });

                    if (zone)
                    {
                        entityos.set({ scope: 'podcasts-deploy', context: 'zoneId', value: zone.Id.replace('/hostedzone/', '') });
                        console.log('  ✓ Route 53 zone found:', zoneName);
                    }
                    else
                    {
                        console.log('  → ' + zoneName + ' is not in Route 53 — DNS records will be printed for manual entry');
                        entityos.set({ scope: 'podcasts-deploy', context: 'dnsManual', value: true });
                    }

                    entityos.invoke(next);
                })
                .catch(function (err)
                {
                    // No Route 53 access is not fatal — fall back to manual DNS
                    console.log('  → Route 53 lookup failed (' + err.name + ') — DNS records will be printed for manual entry');
                    entityos.set({ scope: 'podcasts-deploy', context: 'zoneChecked', value: true });
                    entityos.set({ scope: 'podcasts-deploy', context: 'dnsManual', value: true });
                    entityos.invoke(next);
                });
            }
        });

        entityos.add(
        {
            name: 'util-aws-podcasts-deploy-route53-record',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const zoneId = entityos.get({ scope: 'podcasts-deploy', context: 'zoneId' });
                const apiGwDomain = entityos.get({ scope: 'podcasts-deploy', context: 'apiGwDomain' });
                const apiGwZoneId = entityos.get({ scope: 'podcasts-deploy', context: 'apiGwZoneId' });

                console.log('[13/13] DNS for', deploy.customDomain);

                if (zoneId == undefined)
                {
                    entityos.invoke('app-process-aws-podcasts-deploy-done');
                    return;
                }

                const { Route53Client, ChangeResourceRecordSetsCommand } = require('@aws-sdk/client-route-53');
                const route53 = new Route53Client(_.assign({}, entityos.invoke('util-aws-podcasts-deploy-get-config'), { region: 'us-east-1' }));

                const aliasRecord = function (type)
                {
                    return {
                        Action: 'UPSERT',
                        ResourceRecordSet:
                        {
                            Name: deploy.customDomain,
                            Type: type,
                            AliasTarget: { DNSName: apiGwDomain, HostedZoneId: apiGwZoneId, EvaluateTargetHealth: false }
                        }
                    };
                };

                route53.send(new ChangeResourceRecordSetsCommand(
                {
                    HostedZoneId: zoneId,
                    ChangeBatch: { Comment: 'podcasts.selfdriven.institute → API Gateway', Changes: [aliasRecord('A'), aliasRecord('AAAA')] }
                }))
                .then(function ()
                {
                    console.log('  ✓ A/AAAA alias records upserted');
                    entityos.invoke('app-process-aws-podcasts-deploy-done');
                })
                .catch(function (err)
                {
                    entityos.invoke('util-end', 'Route 53 alias error: ' + err.message, '500');
                });
            }
        });

        // ── Done ────────────────────────────────────────────────────

        entityos.add(
        {
            name: 'app-process-aws-podcasts-deploy-done',
            code: function ()
            {
                const deploy = entityos.invoke('util-aws-podcasts-deploy-get-deploy-settings');
                const apiId = entityos.get({ scope: 'podcasts-deploy', context: 'apiId' });
                const apiGwDomain = entityos.get({ scope: 'podcasts-deploy', context: 'apiGwDomain' });
                const dnsManual = entityos.get({ scope: 'podcasts-deploy', context: 'dnsManual' });

                const responseData =
                {
                    status:      'deployed',
                    functionARN: entityos.get({ scope: 'podcasts-deploy', context: 'functionARN' }),
                    apiId:       apiId,
                    apiEndpoint: 'https://' + apiId + '.execute-api.' + deploy.region + '.amazonaws.com',
                    url:         'https://' + deploy.customDomain
                };

                console.log('\n── podcasts deployed ───────────────');
                console.log('API endpoint:', responseData.apiEndpoint);
                console.log('URL:         ', responseData.url);

                if (dnsManual)
                {
                    responseData.dns = { name: deploy.customDomain, type: 'CNAME', value: apiGwDomain };
                    console.log('\nAdd at your DNS provider:');
                    console.log('  ' + deploy.customDomain + '  CNAME  ' + apiGwDomain);
                }

                console.log('────────────────────────────────────\n');

                entityos.invoke('util-end', responseData, '200');
            }
        });
    }
};
