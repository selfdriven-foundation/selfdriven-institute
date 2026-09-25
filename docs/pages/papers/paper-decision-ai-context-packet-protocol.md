---
layout: selfdriven
title: Context Packet Protocol - DecisionAI - Research - selfdrivenAI
permalink: /paper/decision-ai-context-packet-protocol
---

# Context Packet Protocol

**A Portable Protocol for Verified Context and Distributed Decision Intelligence**
The Context Packet Protocol defines a portable, cryptographically verifiable representation of **bounded decision context**.

A Context Packet carries the minimum structured context required by a human, AI agent, application or machine to evaluate a particular situation or perform an authorised action.

Rather than distributing large prompts, entire knowledge bases or unrestricted autonomous agents, the protocol enables large Generative Verified Context Graphs to compile smaller **Decision VCGs** into independently verifiable network objects.

A Context Packet can carry:

- purpose;
- subject;
- assertions;
- relationships;
- evidence;
- provenance;
- authority;
- capabilities;
- constraints;
- validity conditions;
- delegation;
- revocation information;
- cryptographic integrity.

The intended architecture is:

```text
Large Generative VCG
        ↓
Context Compiler
        ↓
Decision VCG
        ↓
Context Packet
        ↓
selfdriven.network
        ↓
Local Decision Intelligence
        ↓
Action
        ↓
Context Receipt
        ↓
VCG
```

The central design principle is:

> **Transmit the minimum verifiable context required for a purpose, rather than transmitting the maximum available intelligence.**

<audio controls preload="metadata" style="width: 100%;">
  <source src="https://raw.githubusercontent.com/selfdriven-foundation/selfdriven-institute/main/resources/podcasts/The_Context_Packet_for_Verifiable_AI_Decisions.m4a" type="audio/mp4">
  Your browser does not support the audio element. <a href="https://github.com/selfdriven-foundation/selfdriven-institute/blob/main/resources/podcasts/The_Context_Packet_for_Verifiable_AI_Decisions.m4a">Listen to the podcast</a>.
</audio>

[Slides: The Context Packet (PDF)](https://github.com/selfdriven-foundation/selfdriven-institute/blob/main/resources/slides/The_Context_Packet.pdf)


## 1. Design Goals

Context Packet Protocol v0.1 has nine primary goals.

```text
1. Small
2. Verifiable
3. Purpose-bound
4. Content-addressable
5. Machine-readable
6. Human-inspectable
7. Transport-independent
8. Federated
9. Extensible
```

It intentionally does **not** specify:

- one universal AI model;
- one universal blockchain;
- one universal identity system;
- one global trust authority;
- one central Context Graph;
- one mandatory transport network.

The protocol describes the object exchanged between these systems.



## 2. Core Model

A Context Packet can be thought of as:

```text
CP =
{
    Identity,
    Purpose,
    Context,
    Evidence,
    Governance,
    Validity,
    Provenance,
    Proof
}
```

More formally:

```text
Context Packet
    │
    ├── Envelope
    │
    ├── Purpose
    │
    ├── Subject
    │
    ├── Graph
    │
    ├── Evidence
    │
    ├── Authority
    │
    ├── Constraints
    │
    ├── Capabilities
    │
    ├── Validity
    │
    ├── Provenance
    │
    └── Proof
```



## 3. Protocol Namespace

A v0.1 packet SHOULD identify the protocol using:

```json
{
  "protocol": "selfdriven.context/0.1"
}
```

A URI form MAY alternatively be used:

```text
https://selfdriven.network/protocol/context/0.1
```

Future versions might use:

```text
selfdriven:context:0.2
selfdriven:context:1
```



## 4. Basic Packet

A minimal Context Packet:

```json
{
  "protocol": "selfdriven.context/0.1",

  "type": "decision",

  "id": "ctx:uEi...",

  "issuer": "did:example:issuer",

  "created": "2026-09-24T02:00:00Z",

  "purpose": {
    "action": "evaluate",
    "target": "asset:pump-p204"
  },

  "subject": "asset:pump-p204",

  "assertions": [],

  "evidence": [],

  "constraints": [],

  "proof": {}
}
```



## 5. Required Fields

A conforming v0.1 packet SHOULD contain:

```text
protocol
type
id
issuer
created
purpose
subject
```

For consequential decisions, it SHOULD additionally contain:

```text
evidence
validity
proof
```



## 6. Packet Types

Initial packet types are:

```text
observation
assertion
decision
policy
capability
delegation
revocation
query
response
receipt
```

Additional types MAY be registered later.



## 7. Decision Packet

The most important v0.1 type is:

```json
"type": "decision"
```

A Decision Packet represents context compiled for a bounded decision.

Example:

```json
{
  "type": "decision",

  "purpose": {
    "action": "determine-operating-status",
    "target": "asset:pump-p204"
  }
}
```

It does not necessarily contain the decision itself.

It contains the context within which that decision should be made.



## 8. Context Graph Representation

Graph relationships SHOULD be explicit.

A simple form is:

```json
{
  "graph": [
    {
      "subject": "asset:pump-p204",
      "predicate": "hasTemperature",
      "object": {
        "value": 84.2,
        "unit": "C"
      }
    },
    {
      "subject": "asset:pump-p204",
      "predicate": "governedBy",
      "object": "policy:pump-safe-operation-v4"
    }
  ]
}
```

Conceptually:

```text
pump-p204
    │
    ├── hasTemperature ──► 84.2 C
    │
    └── governedBy ──────► policy-v4
```



## 9. Assertions

Assertions SHOULD be independently identifiable.

```json
{
  "assertions": [
    {
      "id": "assertion:1",
      "predicate": "safeOperatingTemperature",
      "subject": "asset:pump-p204",
      "value": true
    }
  ]
}
```

An assertion MAY be:

```text
generated
observed
derived
verified
endorsed
disputed
revoked
```

Example:

```json
{
  "id": "assertion:1",
  "status": "verified"
}
```



## 10. Separate Generation From Verification

The protocol MUST NOT assume that AI-generated content is verified.

For example:

```json
{
  "id": "assertion:27",

  "origin": {
    "type": "generated",
    "by": "ai:model-x"
  },

  "verification": {
    "status": "unverified"
  }
}
```

A later verifier may produce:

```json
{
  "verification": {
    "status": "verified",
    "by": "did:example:engineer"
  }
}
```

This distinction is fundamental.

```text
GENERATED
    ≠
VERIFIED
```



## 11. Evidence

Evidence can be embedded:

```json
{
  "evidence": [
    {
      "id": "evidence:temperature",
      "type": "observation",
      "value": 84.2,
      "unit": "C",
      "observedAt": "2026-09-24T01:59:52Z",
      "issuer": "did:device:sensor-29"
    }
  ]
}
```

Or referenced:

```json
{
  "id": "evidence:temperature",

  "ref": "vcg://plant/p204/observation/82721",

  "digest": {
    "algorithm": "sha256",
    "value": "..."
  }
}
```



## 12. Evidence Relationships

Assertions SHOULD identify the evidence supporting them.

```json
{
  "id": "assertion:1",

  "supportedBy": [
    "evidence:temperature",
    "policy:pump-operating-limit"
  ]
}
```

This produces:

```text
Assertion
    │
    ├── supportedBy ─► Observation
    │
    └── supportedBy ─► Engineering Rule
```



## 13. Purpose

Purpose SHOULD be explicit.

```json
{
  "purpose": {
    "action": "determine-operating-status",
    "target": "asset:pump-p204"
  }
}
```

Additional purpose constraints MAY include:

```json
{
  "purpose": {
    "action": "authorise",
    "target": "transaction:7842",
    "for": "treasury-payment"
  }
}
```

Purpose allows the graph compiler to answer:

> Which context matters?



## 14. Subject

Every packet SHOULD identify its primary subject.

```json
{
  "subject": "asset:pump-p204"
}
```

Multiple subjects MAY be represented:

```json
{
  "subjects": [
    "account:A",
    "account:B",
    "transaction:X"
  ]
}
```



## 15. Issuer

The issuer identifies the party responsible for producing the packet.

```json
{
  "issuer": "did:example:engineering-system"
}
```

An issuer may be:

```text
human
organisation
agent
machine
device
service
community
VCG
```



## 16. Recipient

A packet MAY identify an intended recipient.

```json
{
  "recipient": "did:example:controller-42"
}
```

Or multiple recipients:

```json
{
  "recipients": [
    "did:example:controller-42",
    "did:example:operator-12"
  ]
}
```

Recipients may also be resolved through routing rules.



## 17. Validity

Time-bound validity:

```json
{
  "validity": {
    "notBefore": "2026-09-24T02:00:00Z",
    "notAfter": "2026-09-24T06:00:00Z"
  }
}
```

Context-dependent validity MAY also exist.

```json
{
  "validity": {
    "conditions": [
      {
        "subject": "asset:pump-p204",
        "predicate": "pressureLessThan",
        "value": 12,
        "unit": "MPa"
      }
    ]
  }
}
```



## 18. State-Bound Packets

Packets SHOULD optionally identify the state against which they were generated.

```json
{
  "state": {
    "subject": "asset:pump-p204",
    "version": "4981"
  }
}
```

A recipient MAY reject the packet if:

```text
current-state != packet-state
```

This prevents a valid but stale packet from being applied to a changed environment.



## 19. Constraints

Constraints represent boundaries on reasoning or action.

```json
{
  "constraints": [
    {
      "type": "maximum",
      "property": "pressure",
      "value": 12,
      "unit": "MPa"
    }
  ]
}
```

Or:

```json
{
  "constraints": [
    {
      "type": "prohibit",
      "action": "restart",
      "unless": "inspection:completed"
    }
  ]
}
```



## 20. Capabilities

A packet MAY carry an explicit capability.

```json
{
  "capabilities": [
    {
      "action": "reduce-pressure",
      "subject": "asset:pump-p204",
      "maximumChange": "15%"
    }
  ]
}
```

A capability should mean:

> The holder is authorised to perform this action under these conditions.

It does not mean:

> The holder has unrestricted access to the subject.



## 21. Delegation

Authority SHOULD be delegable.

```json
{
  "delegation": {
    "delegator": "did:org:plant-owner",

    "delegate": "did:agent:operations-ai",

    "scope": {
      "subject": "asset:pump-p204",

      "actions": [
        "reduce-pressure",
        "stop"
      ]
    },

    "expires": "2026-09-25T00:00:00Z"
  }
}
```



## 22. Delegation Chains

Delegation may form a chain:

```text
Organisation
      ↓
Operations Team
      ↓
Agent
      ↓
Machine
```

Each link SHOULD be independently verifiable.

```json
{
  "delegationChain": [
    "delegation:A",
    "delegation:B",
    "delegation:C"
  ]
}
```



## 23. Revocation

A packet MAY identify a revocation source.

```json
{
  "revocation": {
    "ref": "vcg://authority/revocations/context"
  }
}
```

Possible packet status values include:

```text
active
expired
revoked
superseded
unknown
```



## 24. Supersession

Context generally SHOULD be replaced rather than mutated retrospectively.

```json
{
  "previous": "ctx:abc123"
}
```

The previous packet can indicate:

```json
{
  "supersededBy": "ctx:def456"
}
```

This preserves historical decision context.



## 25. Content Addressing

Context Packets SHOULD support content-derived identifiers.

Conceptually:

```text
canonical packet
      ↓
SHA-256
      ↓
digest
      ↓
Context ID
```

For example:

```text
ctx:zQm...
```

The exact multibase/multihash representation can be standardised separately.



## 26. Canonical JSON

JSON packets need deterministic serialisation before hashing or signing.

RFC 8785 defines the JSON Canonicalization Scheme, producing an invariant JSON representation suitable for cryptographic hashing and signing.

For the JSON profile:

```text
Context Packet
      ↓
RFC 8785 JCS
      ↓
UTF-8 bytes
      ↓
hash/sign
```

v0.1 therefore recommends:

```text
encoding:
application/context+json

canonicalisation:
RFC 8785
```



## 27. Binary Encoding

High-throughput implementations MAY use CBOR.

RFC 8949 defines CBOR and deterministic encoding requirements that are useful where identical logical objects need repeatable binary representations.

Suggested media type:

```text
application/context+cbor
```

Conceptually:

```text
JSON
 └── human/debug friendly

CBOR
 └── network/device efficient
```

Both MUST represent the same logical graph.



## 28. Packet Digest

A digest SHOULD be calculated over the canonical packet excluding its proof.

Pseudo-process:

```text
unsignedPacket =
    packet minus proof

canonical =
    canonicalise(unsignedPacket)

digest =
    SHA256(canonical)
```

Then:

```text
packet.id = encode(digest)
```



## 29. Signature

A simple proof form:

```json
{
  "proof": {
    "type": "Ed25519",
    "verificationMethod": "did:example:issuer#key-1",
    "signature": "..."
  }
}
```

The protocol should not mandate a single algorithm in v0.1.

Implementations SHOULD support algorithm agility.



## 30. COSE Profile

CBOR deployments SHOULD consider COSE.

RFC 9052 defines CBOR Object Signing and Encryption, including `COSE_Sign1` for a single-signer object.

A compact deployment could therefore use:

```text
Context Packet
     ↓
Deterministic CBOR
     ↓
COSE_Sign1
     ↓
selfdriven.network
```

This profile could be particularly suitable for:

- IoT;
- embedded devices;
- industrial systems;
- edge computing.



## 31. Encryption

Signing provides authenticity and integrity.

It does not provide confidentiality.

Sensitive Context Packets SHOULD therefore be encrypted for authorised recipients.

Conceptually:

```text
Packet
 ↓
Sign
 ↓
Encrypt
 ↓
Transport
```

Or according to the chosen cryptographic profile:

```text
Encrypt + Authenticate
```

Recipient-specific encryption MAY use:

```text
public-key encryption
shared-key encryption
COSE
JWE
HPKE
```

The base protocol does not mandate one mechanism.



## 32. Identity Profiles

Context Packet Protocol should permit several identity profiles.

### Profile A — Public-Key Identity

```text
key:ed25519:...
```

Simplest deployment.

### Profile B — DID

```text
did:web:...
did:key:...
did:webs:...
```

### Profile C — KERI

```text
KERI AID
```

KERI can provide self-certifying identifiers and cryptographically verifiable key-event histories. Trust Over IP published KERI specification version 1.1 on 21 January 2026.



## 33. Why KERI Fits Well

KERI is particularly interesting for Context Packets because identity remains stable while control keys can rotate.

KERI is designed around self-certifying identifiers, key-event logs, key rotation and cryptographic verification of authorship.

Conceptually:

```text
Context Packet
      │
      ├── issuer ─► KERI AID
      │
      └── proof ──► current authorised signing key
```

The receiving node can verify not simply:

> Does this signature match this key?

but:

> Is this key currently authorised for this persistent identifier?



## 34. ACDC Profile

Authentic Chained Data Containers are an especially close conceptual fit.

The current Trust Over IP ACDC 1.1 specification describes granular, provenanced proof-of-authorship using linked data containers, providing verifiable chains of authorship.

An advanced Context Packet profile could therefore represent:

```text
Context Packet
      =
ACDC Container
      +
Decision VCG Semantics
```

Or:

```text
ACDC
   ├── issuer
   ├── chained provenance
   ├── cryptographic authenticity
   │
   └── Context Packet payload
          ├── purpose
          ├── graph
          ├── evidence
          ├── constraints
          └── capability
```

This should be explored rather than creating unnecessary competing cryptographic machinery.



## 35. ACDC/KERI Optional Profile

The protocol should remain layered.

```text
Context Packet Semantics
          │
          ├── Basic crypto profile
          │
          ├── DID profile
          │
          └── KERI/ACDC profile
```

This allows simple systems to begin easily while highly assured systems adopt stronger provenance models.



## 36. Context Packet ID

A possible URI form:

```text
ctx:<multibase-digest>
```

Example:

```text
ctx:zQmT7...
```

Dereferencing MAY occur through:

```text
https://...
vcg://...
selfdriven://...
ipfs://...
```

The ID itself SHOULD remain independent of storage location.



## 37. Graph References

A packet can reference external graph objects.

```json
{
  "ref": "vcg://engineering/standard/pressure-vessel-17"
}
```

A reference SHOULD ideally include a digest:

```json
{
  "ref": "vcg://engineering/standard/pressure-vessel-17",
  "digest": "sha256:..."
}
```

Thus:

```text
location
+
integrity
```

remain distinct.



## 38. Immutable and Mutable References

The protocol SHOULD distinguish:

```text
immutable reference

from

latest-state reference
```

For example:

```text
vcg://policy/safety/v4
```

versus:

```text
vcg://policy/safety/latest
```

Consequential Decision Packets SHOULD normally bind to immutable versions.



## 39. Context Compiler

A Context Compiler produces Decision VCGs and Context Packets.

Input:

```text
Purpose
Recipient
Subject
Trust Policy
Permissions
Current State
Available VCGs
```

Process:

```text
discover
 ↓
rank relevance
 ↓
resolve evidence
 ↓
evaluate trust
 ↓
apply governance
 ↓
minimise
 ↓
canonicalise
 ↓
hash
 ↓
sign
```

Output:

```text
Context Packet
```



## 40. Context Minimisation

The compiler SHOULD follow:

> Include everything required for correct interpretation; exclude everything that does not materially contribute to the purpose.

This reduces:

```text
privacy exposure
token consumption
bandwidth
attack surface
ambiguity
cognitive load
```

A packet SHOULD link outward where embedding the entire supporting context is unnecessary.



## 41. Privacy

A packet may intentionally contain:

```json
{
  "assertion": {
    "ageRequirementSatisfied": true
  }
}
```

instead of:

```json
{
  "dateOfBirth": "..."
}
```

Decision VCGs therefore provide an opportunity for **semantic minimisation**, not merely field-level minimisation.



## 42. Disclosure Levels

Evidence MAY support selective disclosure.

Conceptually:

```text
Evidence
  │
  ├── Full Evidence
  │
  ├── Derived Claim
  │
  └── Cryptographic Proof
```

For example:

```text
person income > threshold

without disclosing

person exact income
```

This may later integrate with:

- selective-disclosure credentials;
- zero-knowledge proofs;
- ACDCs;
- anonymous credentials.



## 43. Replay Resistance

A valid old packet MUST NOT necessarily remain executable.

Packets supporting actions SHOULD carry one or more:

```text
nonce
sequence number
state version
expiry
single-use identifier
challenge
```

Example:

```json
{
  "replay": {
    "nonce": "2934fd...",
    "singleUse": true
  }
}
```



## 44. Sequence

Continuous streams MAY use:

```json
{
  "sequence": 281
}
```

and:

```json
{
  "previous": "ctx:..."
}
```

This permits a receiver to detect:

```text
missing context
reordering
replay
forks
```



## 45. Context Chains

Packets MAY form chains.

```text
CTX-001
   ↓
CTX-002
   ↓
CTX-003
```

Each packet references its predecessor.

This makes contextual changes explicit.



## 46. Context DAGs

More complex processes may form DAGs rather than chains.

```text
CTX-A ─────┐
           ├──► CTX-D
CTX-B ─────┤
           │
CTX-C ─────┘
```

A packet could declare:

```json
{
  "parents": [
    "ctx:A",
    "ctx:B",
    "ctx:C"
  ]
}
```

This is useful when multiple authorities contribute context.



## 47. Context Receipts

An action resulting from a Context Packet SHOULD be capable of producing a Context Receipt.

```json
{
  "protocol": "selfdriven.context/0.1",

  "type": "receipt",

  "for": "ctx:decision-123",

  "actor": "did:machine:p204",

  "action": {
    "type": "reduce-pressure",
    "amount": "10%"
  },

  "result": "success",

  "created": "2026-09-24T02:04:31Z",

  "proof": {}
}
```



## 48. Outcome Evidence

Receipts may include observations.

```json
{
  "outcome": {
    "pressureBefore": 11.7,
    "pressureAfter": 10.4,
    "unit": "MPa"
  }
}
```

This produces:

```text
Context Packet
      ↓
Decision
      ↓
Action
      ↓
Receipt
      ↓
Observation
      ↓
VCG
```



## 49. Queries

A node can request context using a Query Packet.

```json
{
  "type": "query",

  "issuer": "did:agent:local-controller",

  "purpose": {
    "action": "determine",
    "question": "may-operate"
  },

  "subject": "asset:pump-p204",

  "requirements": {
    "verification": "verified",
    "maximumAgeSeconds": 60
  }
}
```



## 50. Responses

The response may simply reference a Decision Packet.

```json
{
  "type": "response",

  "for": "ctx-query:123",

  "context": "ctx-decision:456"
}
```



## 51. Insufficient Context

A node SHOULD be able to explicitly state:

```text
INSUFFICIENT_CONTEXT
```

Example:

```json
{
  "type": "response",

  "status": "insufficient-context",

  "required": [
    "latest-temperature",
    "maintenance-status"
  ]
}
```

This is preferable to fabricating missing information.



## 52. Conflict

The protocol MUST permit contradictory assertions.

```json
{
  "assertions": [
    {
      "id": "A",
      "value": true
    },
    {
      "id": "B",
      "value": false,
      "conflictsWith": "A"
    }
  ]
}
```

The graph SHOULD preserve disagreement.

Decision policy determines how disagreement is resolved.



## 53. Confidence

Model confidence MAY be included:

```json
{
  "confidence": 0.91
}
```

But confidence MUST NOT be interpreted as verification.

```text
confidence
    ≠
authority
    ≠
evidence
    ≠
truth
```



## 54. Trust Policy

A recipient MAY maintain a local Trust Policy.

Example:

```json
{
  "minimumEvidence": 2,

  "acceptedIssuers": [
    "did:org:manufacturer",
    "did:org:regulator"
  ],

  "maximumContextAge": 300
}
```

Thus trust remains locally controlled.



## 55. Verification Pipeline

A receiver SHOULD process a packet approximately as follows:

```text
RECEIVE
   ↓
Parse
   ↓
Protocol supported?
   ↓
Canonical form valid?
   ↓
Digest matches ID?
   ↓
Signature valid?
   ↓
Issuer current?
   ↓
Delegation valid?
   ↓
Revoked?
   ↓
Expired?
   ↓
State still applicable?
   ↓
Evidence sufficient?
   ↓
Local policy satisfied?
   ↓
ACCEPT CONTEXT
```



## 56. Context Firewall

This verification pipeline can form a **Context Firewall**.

```text
External Intelligence
        ↓
Context Packet
        ↓
┌─────────────────────┐
│   Context Firewall  │
│                     │
│ Signature           │
│ Authority           │
│ Evidence            │
│ Freshness           │
│ Purpose             │
│ Capability          │
│ Local policy        │
└──────────┬──────────┘
           ↓
       Decision AI
```

The AI generating the packet is therefore outside the final trust boundary.



## 57. Local Decision Principle

A strong security principle for the protocol is:

> **Remote intelligence may propose context; local policy controls authority.**

A remote model might be dramatically more intelligent than the receiving node.

It still does not receive automatic authority.



## 58. Transport Independence

Context Packets can move over:

```text
HTTP
HTTPS
WebSocket
MQTT
NATS
Kafka
DIDComm
QUIC
email
Bluetooth
USB
QR
offline storage
selfdriven.network
```

Transport is intentionally separate from packet semantics.



## 59. HTTP Profile

A simple HTTP API could use:

```http
POST /context
Content-Type: application/context+json
```

Response:

```http
HTTP/1.1 202 Accepted
```

Query:

```http
POST /context/query
```



## 60. Pub/Sub Profile

The network SHOULD support pub/sub.

Example topic:

```text
context/engineering/plant-4/pump-p204
```

Or semantically:

```text
vcg/engineering/assets/pump-p204
```

Subscribers receive packets relevant to their responsibilities.



## 61. Topic Scope

Topics SHOULD broadly describe context domains rather than specific recipients.

```text
vcg/cybersecurity/aws/cloudfront
vcg/community/project/123
vcg/healthcare/medication
vcg/engineering/facility/4
```

Access control determines who can receive their contents.



## 62. Discovery

A node may advertise:

```text
supported packet version
supported signature suites
supported compression
supported identity profiles
available VCG domains
```

Example:

```json
{
  "contextProtocol": [
    "0.1"
  ],

  "encodings": [
    "json",
    "cbor"
  ],

  "identity": [
    "did",
    "keri"
  ]
}
```



## 63. selfdriven.network Role

Within this architecture, selfdriven.network does not need to become the central source of truth.

Its role can remain:

```text
STORE
COMPUTE
CONNECT
ROUTE
SYNC
DISCOVER
```

The Context Packets remain independently verifiable.

Thus a node can receive a packet from an untrusted transport while still verifying its authenticity.



## 64. selfdriven.nexus Role

selfdriven.nexus provides the broader VCG environment.

```text
selfdriven.nexus

Large VCG
   ↓
Generative AI
   ↓
Context Compiler
   ↓
Decision VCG
```

selfdriven.network then provides:

```text
Decision VCG
   ↓
Context Packet
   ↓
Distribution
```



## 65. Reference Architecture

```text
┌───────────────────────────────────┐
│         GENERATIVE AI             │
└────────────────┬──────────────────┘
                 │
                 ▼
┌───────────────────────────────────┐
│        selfdriven.nexus           │
│                                   │
│   Verified Context Graphs         │
└────────────────┬──────────────────┘
                 │
                 ▼
┌───────────────────────────────────┐
│        Context Compiler           │
│                                   │
│ Relevance                         │
│ Verification                      │
│ Governance                        │
│ Minimisation                      │
└────────────────┬──────────────────┘
                 │
                 ▼
        ┌────────────────┐
        │ Context Packet │
        └───────┬────────┘
                │
                ▼
┌───────────────────────────────────┐
│       selfdriven.network          │
└───────┬──────────┬─────────┬─────┘
        │          │         │
        ▼          ▼         ▼
      HUMAN       AGENT    MACHINE
        │          │         │
        └──────────┼─────────┘
                   ▼
              DECISION
                   ↓
                ACTION
                   ↓
           Context Receipt
                   ↓
            selfdriven.nexus
```



## 66. Node.js Reference Implementation

A minimal implementation can use Node's built-in cryptography.

The following simplified example deliberately avoids external crypto libraries.

```javascript
const crypto = require('crypto');
```

Generate a signing key:

```javascript
const keys = crypto.generateKeyPairSync('ed25519');

const publicKey = keys.publicKey;
const privateKey = keys.privateKey;
```



## 67. Canonicalisation

A production implementation should use a fully compliant RFC 8785 implementation.

For the conceptual prototype:

```javascript
function canonicalise(value)
{
	if (Array.isArray(value))
	{
		return '[' +
			value
				.map(canonicalise)
				.join(',') +
			']';
	}

	if (
		value !== null &&
		typeof value === 'object'
	)
	{
		return '{' +
			Object.keys(value)
				.sort()
				.map(function (key)
				{
					return JSON.stringify(key) +
						':' +
						canonicalise(value[key]);
				})
				.join(',') +
			'}';
	}

	return JSON.stringify(value);
}
```

For interoperability this should ultimately be replaced by strict RFC 8785 JCS.



## 68. SHA-256 Digest

```javascript
function digest(value)
{
	const canonical =
		canonicalise(value);

	return crypto
		.createHash('sha256')
		.update(canonical)
		.digest('base64url');
}
```



## 69. Remove Proof

The proof MUST NOT recursively sign itself.

```javascript
function unsigned(packet)
{
	const copy =
		JSON.parse(
			JSON.stringify(packet)
		);

	delete copy.proof;

	return copy;
}
```



## 70. Packet ID

```javascript
function setID(packet)
{
	const value =
		digest(
			unsigned(packet)
		);

	packet.id =
		'ctx:' + value;

	return packet;
}
```



## 71. Sign Packet

```javascript
function sign(packet, privateKey)
{
	const data =
		Buffer.from(
			canonicalise(
				unsigned(packet)
			)
		);

	const signature =
		crypto.sign(
			null,
			data,
			privateKey
		);

	packet.proof =
	{
		type: 'Ed25519',
		signature:
			signature.toString('base64url')
	};

	return packet;
}
```



## 72. Verify Packet

```javascript
function verify(packet, publicKey)
{
	const proof =
		packet.proof;

	if (proof == null)
	{
		return false;
	}

	const data =
		Buffer.from(
			canonicalise(
				unsigned(packet)
			)
		);

	const signature =
		Buffer.from(
			proof.signature,
			'base64url'
		);

	return crypto.verify(
		null,
		data,
		publicKey,
		signature
	);
}
```



## 73. Create Packet

Using Promise chaining:

```javascript
function createPacket()
{
	return Promise.resolve(
	{
		protocol:
			'selfdriven.context/0.1',

		type:
			'decision',

		issuer:
			'did:example:engineering',

		created:
			new Date().toISOString(),

		purpose:
		{
			action:
				'determine-operating-status',

			target:
				'asset:pump-p204'
		},

		subject:
			'asset:pump-p204',

		assertions:
		[
			{
				id:
					'assertion:temperature',

				predicate:
					'temperature',

				value:
					84.2,

				unit:
					'C'
			}
		],

		evidence:
		[
			{
				id:
					'evidence:sensor-29',

				type:
					'observation',

				issuer:
					'did:device:sensor-29'
			}
		]
	})
	.then(function (packet)
	{
		return setID(packet);
	})
	.then(function (packet)
	{
		return sign(
			packet,
			privateKey
		);
	});
}
```



## 74. Consume Packet

```javascript
createPacket()
.then(function (packet)
{
	console.log(
		JSON.stringify(
			packet,
			null,
			2
		)
	);

	const valid =
		verify(
			packet,
			publicKey
		);

	console.log(
		'Signature valid:',
		valid
	);
});
```



## 75. Context Policy Engine

Signature validation alone is insufficient.

The local node should separately evaluate:

```javascript
function contextPolicy(packet)
{
	if (packet.protocol !==
		'selfdriven.context/0.1')
	{
		return {
			accepted: false,
			reason: 'UNSUPPORTED_PROTOCOL'
		};
	}

	if (packet.subject == null)
	{
		return {
			accepted: false,
			reason: 'NO_SUBJECT'
		};
	}

	return {
		accepted: true
	};
}
```

The production engine would also evaluate:

```text
issuer authority
delegation
revocation
expiry
state
evidence
capabilities
local governance
```



## 76. Full Verification

Conceptually:

```javascript
verifyCrypto(packet)
.then(function ()
{
	return verifyIssuer(packet);
})
.then(function ()
{
	return verifyDelegation(packet);
})
.then(function ()
{
	return verifyRevocation(packet);
})
.then(function ()
{
	return verifyValidity(packet);
})
.then(function ()
{
	return verifyEvidence(packet);
})
.then(function ()
{
	return verifyLocalPolicy(packet);
})
.then(function ()
{
	return acceptContext(packet);
});
```

This separation is deliberate.

Cryptographic validity is only the first layer.



## 77. Example Complete Packet

```json
{
  "protocol": "selfdriven.context/0.1",

  "type": "decision",

  "id": "ctx:0JH6...",

  "issuer": "did:example:engineering",

  "recipient": "did:example:pump-controller",

  "created": "2026-09-24T02:00:00Z",

  "purpose": {
    "action": "determine-operating-status",
    "target": "asset:pump-p204"
  },

  "subject": "asset:pump-p204",

  "state": {
    "version": "82721"
  },

  "assertions": [
    {
      "id": "assertion:temp",
      "predicate": "temperature",
      "value": 84.2,
      "unit": "C",
      "supportedBy": [
        "evidence:sensor-temp"
      ],
      "verification": {
        "status": "verified"
      }
    }
  ],

  "evidence": [
    {
      "id": "evidence:sensor-temp",
      "type": "observation",
      "issuer": "did:device:sensor-29",
      "observedAt": "2026-09-24T01:59:52Z"
    }
  ],

  "constraints": [
    {
      "type": "maximum",
      "property": "temperature",
      "value": 90,
      "unit": "C"
    }
  ],

  "capabilities": [
    {
      "action": "continue-operation",
      "subject": "asset:pump-p204"
    }
  ],

  "validity": {
    "notBefore": "2026-09-24T02:00:00Z",
    "notAfter": "2026-09-24T02:05:00Z"
  },

  "previous": "ctx:previous...",

  "proof": {
    "type": "Ed25519",
    "verificationMethod": "did:example:engineering#key-4",
    "signature": "..."
  }
}
```



## 78. Security Properties

A production Context Packet implementation should seek:

```text
Integrity
Authenticity
Freshness
Confidentiality
Authority validation
Provenance
Replay resistance
Revocation
Context minimisation
Algorithm agility
Auditability
```

No single signature provides all of these.



## 79. Threat Model

The protocol should assume hostile conditions including:

```text
forged packets
compromised transport
stale packets
replayed packets
malicious AI
hallucinated assertions
compromised signing keys
unauthorised delegation
false evidence
partial evidence
graph poisoning
policy manipulation
context stripping
```

The protocol therefore assumes:

> **The transport, sender and intelligence may all be untrusted until independently verified.**



## 80. Context Stripping

An attacker might remove inconvenient context.

For example:

```text
ALLOW transaction

while removing

maximum amount = $10,000
```

The cryptographic proof MUST therefore cover:

```text
assertions
constraints
purpose
subject
capabilities
validity
```

not merely the primary assertion.



## 81. Context Injection

An attacker might attempt to add context after signing.

Canonical hashing prevents unnoticed modification.

```text
signed graph
+
new malicious node
=
different digest
```

Verification fails.



## 82. Model Independence

The protocol intentionally does not identify a required AI architecture.

A Context Packet may be produced by:

```text
GPT
JEPA
rules engine
Bayesian system
human analyst
graph query
symbolic reasoner
sensor fusion system
multiple models
```

The receiving node evaluates the packet, not the model's reputation alone.



## 83. Decision Engine Independence

The recipient may use:

```text
LLM
small language model
decision tree
rule engine
constraint solver
state machine
human judgment
embedded controller
```

The packet remains the same.

Thus:

```text
Context
    ↓
Multiple possible intelligences
```



## 84. Protocol Principle

The most important design separation is:

```text
WHO KNOWS
    ≠
WHO DECIDES
    ≠
WHO ACTS
```

Context Packets provide an interface between these roles.



## 85. Generative and Decision AI Separation

```text
GENERATIVE AI

explore
discover
infer
simulate
connect
curate

        ↓

CONTEXT PACKET

        ↓

DECISION AI

validate
constrain
select
authorise
act
```

The packet is the boundary.



## 86. Context as Capability Boundary

A Decision AI should ideally have authority only within its current Context Packet.

Rather than:

```text
Agent has permanent access
```

use:

```text
Agent receives temporary contextual capability
```

This drastically reduces ambient authority.



## 87. Human Inspection

A Context Packet should have a human rendering.

Machine form:

```json
{
  "predicate": "temperature",
  "value": 84.2
}
```

Human form:

```text
Pump P-204 is currently at 84.2°C.

Safe limit:
90°C

Evidence:
Sensor 29

Observed:
8 seconds ago

Authority:
Engineering Policy v4

Permitted:
Continue operation

Valid for:
4 minutes 52 seconds
```

Both views represent the same graph.



## 88. Debugging

A developer tool should eventually support:

```bash
ctx inspect packet.json
```

Possible output:

```text
Context Packet

ID:
ctx:zQm...

Type:
decision

Issuer:
engineering-system

Subject:
pump-p204

Assertions:
7

Evidence:
4

Constraints:
3

Signature:
VALID

Authority:
VALID

Expires:
4m 31s

Decision status:
ACCEPTABLE
```



## 89. CLI Concept

Potential commands:

```bash
ctx create
ctx sign
ctx verify
ctx inspect
ctx resolve
ctx query
ctx publish
ctx subscribe
ctx revoke
ctx receipt
```

These could form the initial developer toolkit.



## 90. HTTP API Concept

```text
POST /context/compile
POST /context/verify
POST /context/query
POST /context/publish
POST /context/receipt

GET  /context/:id
GET  /context/:id/status
```



## 91. Context Compiler API

Request:

```json
{
  "purpose": {
    "action": "determine-operating-status"
  },

  "subject": "asset:pump-p204",

  "recipient": "did:device:controller"
}
```

Response:

```json
{
  "contextPacket": "ctx:..."
}
```



## 92. Minimum Viable Protocol

A practical MVP need only implement:

```text
JSON packet
JCS canonicalisation
SHA-256 ID
Ed25519 signature
issuer
subject
purpose
assertions
evidence
validity
previous
HTTP distribution
receipt
```

That is sufficient to test the central proposition.



## 93. Phase 2

Then add:

```text
DIDs
KERI
ACDC
CBOR
COSE
encryption
delegation
revocation
capabilities
pub/sub
Context Firewall
```



## 94. Phase 3

Later:

```text
selective disclosure
zero-knowledge proofs
distributed graph federation
semantic routing
automated context negotiation
multi-party context compilation
context consensus
edge intelligence
hardware roots of trust
```



## 95. Core Data Flow

The complete flow can be reduced to:

```text
OBSERVE
   ↓
GRAPH
   ↓
GENERATE
   ↓
VERIFY
   ↓
CURATE
   ↓
COMPILE
   ↓
HASH
   ↓
SIGN
   ↓
DISTRIBUTE
   ↓
VERIFY LOCALLY
   ↓
DECIDE
   ↓
ACT
   ↓
RECEIPT
   ↓
GRAPH
```



## 96. Protocol Invariant

The key invariant should be:

> **A recipient must be able to independently verify the integrity, origin, applicability and authority of consequential context without trusting the transport mechanism or the generative intelligence that produced it.**



## 97. The Larger Architectural Consequence

Today, sophisticated AI systems are commonly designed around:

```text
MODEL
+
TOOLS
+
MEMORY
+
PROMPTS
```

Context Packet architecture instead enables:

```text
VERIFIED CONTEXT
+
BOUND AUTHORITY
+
LOCAL INTELLIGENCE
```

The model becomes only one component.

The graph becomes the persistent meaning.

The packet becomes the transferable unit.



## 98. Internet Analogy

The packet abstraction enabled:

```text
many applications
many networks
many devices
many organisations
```

to interoperate without one central network controller.

A Context Packet aims for an analogous property:

```text
many models
many graphs
many communities
many agents
many authorities
```

interoperating without requiring one central intelligence.



## 99. Context Packet Principle

The underlying principle can be expressed in one line:

> **Do not send intelligence when you can send the verified context required for intelligence to operate locally.**



## 100. Conclusion

Large generative systems will increasingly be capable of operating across knowledge environments far larger than any individual person, organisation or edge device can consume directly.

That does not imply that every participant needs access to the entire intelligence system.

Instead:

```text
Large Generative VCG
        ↓
Context Compiler
        ↓
Small Decision VCG
        ↓
Context Packet
        ↓
Local Intelligence
```

The Context Packet Protocol provides a potential boundary between global intelligence and sovereign local decision-making.

It transforms AI communication from:

```text
"Here is my answer."
```

into:

```text
"Here is the verified context,
evidence,
authority,
constraints
and provenance
within which this decision can be made."
```

This is a substantially different model for distributed AI.

It allows extremely capable generative systems to contribute intelligence without automatically receiving authority.

It allows small local systems to make sophisticated decisions without possessing enormous general-purpose models.

It allows humans and machines to operate against the same structured contextual objects.

And it allows decision outcomes to flow back into the wider Verified Context Graph as evidence about reality.

The resulting architecture is not merely a network of AI agents.

It is a network of **sovereign intelligences exchanging verifiable context**.



## Core Architecture

```text
selfdriven.nexus
        ↓
Large Generative VCGs
        ↓
Context Compiler
        ↓
Decision VCG
        ↓
Context Packet Protocol
        ↓
selfdriven.network
        ↓
Context Firewall
        ↓
Decision AI / Human / Machine
        ↓
Action
        ↓
Context Receipt
        ↓
selfdriven.nexus
```

## Core Proposition

> **The Context Packet should become the smallest portable unit of verified decision intelligence: a content-addressed, signed, purpose-bound subgraph containing the minimum trustworthy context required for a sovereign human or artificial intelligence to make a decision.**

## Protocol Summary

```text
PACKET
=
PURPOSE
+
SUBJECT
+
ASSERTIONS
+
EVIDENCE
+
PROVENANCE
+
AUTHORITY
+
CONSTRAINTS
+
CAPABILITIES
+
VALIDITY
+
CRYPTOGRAPHIC PROOF
```

**Generate globally.  
Verify structurally.  
Compile minimally.  
Sign cryptographically.  
Distribute openly.  
Trust locally.  
Decide sovereignly.  
Return evidence.**

---

- [Decision AI - From Generation to Action](/paper/decision-ai-from-generation-to-action)
- [octonomous.io/decision-ai](https://octonomous.io/decision-ai)
