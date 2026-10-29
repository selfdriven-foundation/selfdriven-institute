---
layout: selfdriven
title: Total Quality Management and Economically Useful AI - selfdriven Institute
permalink: /paper/tqm-economically-useful-ai
description: "A research paper linking Deming's system-wide quality management to economically useful AI: quality-adjusted net value, verified context and bounded execution, nested learning loops and a 90-day evaluation protocol."
---

<style>
.prose .sd-keywords{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:10px 0 24px}
.prose .sd-keywords li{margin:0;font-size:13px;font-weight:500;line-height:1.3;border:1px solid var(--line);border-radius:999px;padding:4px 12px;color:var(--muted)}
.sd-formula{margin:24px 0 28px;padding:24px 26px;border:1px solid var(--line);border-radius:8px;background:var(--surface)}
.prose .sd-formula-label{margin:0 0 10px;font:700 12px/1.3 var(--font-body);letter-spacing:.16em;text-transform:uppercase;color:var(--orange)}
.prose .sd-formula-eq{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;margin:0 0 20px;font-family:var(--font-display);font-size:clamp(1.15rem,2.2vw,1.45rem);font-weight:600;letter-spacing:-.02em;line-height:1.4}
.sd-formula-eq span{white-space:nowrap}
.sd-formula-eq sub{font-family:var(--font-body);font-size:.6em;font-weight:500;letter-spacing:0;color:var(--muted)}
.sd-formula-eq .op{color:var(--orange)}
.prose .sd-terms{display:grid;grid-template-columns:max-content minmax(0,1fr);gap:10px 18px;margin:0;font-size:15px;line-height:1.55}
.sd-terms dt{font-family:var(--font-display);font-weight:600;white-space:nowrap}
.sd-terms dt sub{font-family:var(--font-body);font-size:.75em;font-weight:500;color:var(--muted)}
.sd-terms dd{margin:0;color:var(--muted)}
.prose .sd-steps{list-style:none;display:flex;flex-wrap:wrap;gap:10px 8px;padding:0;margin:14px 0 22px;counter-reset:sd-step}
.prose .sd-steps li{margin:0;display:inline-flex;align-items:center;gap:9px;padding:9px 16px 9px 12px;border:1px solid var(--line);border-radius:999px;background:var(--surface);font:600 15px/1.2 var(--font-display);letter-spacing:-.01em;counter-increment:sd-step}
.prose .sd-steps li::before{content:counter(sd-step,decimal-leading-zero);font:500 12px/1 var(--font-mono);color:var(--muted)}
.prose .sd-steps li.is-loop{border-color:var(--orange);background:var(--paper);box-shadow:inset 0 0 0 1px var(--orange)}
.prose .sd-steps li.is-loop::before{content:"\21BA";font-size:15px;color:var(--orange)}
.sd-roles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:24px 0 28px}
.sd-roles>div{min-width:0;padding:20px 22px;border:1px solid var(--line);border-radius:8px;background:var(--surface)}
.prose .sd-roles .sd-role-label{margin:0 0 6px;font:700 12px/1.3 var(--font-body);letter-spacing:.16em;text-transform:uppercase;color:var(--orange)}
.prose .sd-roles .sd-role-name{margin:0 0 8px;font-family:var(--font-display);font-size:1.25rem;font-weight:600;letter-spacing:-.02em;line-height:1.2;color:var(--ink)}
.prose .sd-roles p{margin:0;font-size:15px;line-height:1.55;color:var(--muted)}
.sd-bars{margin:26px 0 30px;padding:24px 26px;border:1px solid var(--line);border-radius:8px}
.prose .sd-bars-title{margin:0 0 18px;font:700 12px/1.3 var(--font-body);letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.sd-bar-row{margin:0 0 20px}
.sd-bar-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin:0 0 8px;font-size:15px}
.sd-bar-head strong{font-family:var(--font-display);font-weight:600;letter-spacing:-.01em}
.sd-bar-head span{font-variant-numeric:tabular-nums;font-weight:600;white-space:nowrap}
.sd-bar{position:relative;display:flex;height:24px}
.sd-bar::after{content:"";position:absolute;left:89.552%;top:-5px;bottom:-5px;border-left:2px dashed var(--ink)}
.sd-seg{flex:0 0 auto;height:100%;box-shadow:inset -2px 0 0 var(--paper)}
.sd-seg.base{background:var(--tile-lilac)}
.sd-seg.s1{background:var(--ink)}
.sd-seg.s2{background:var(--ink);opacity:.66}
.sd-seg.s3{background:var(--ink);opacity:.42}
.sd-seg.s4{background:var(--ink);opacity:.24}
.sd-seg.loss{background:repeating-linear-gradient(135deg,var(--orange) 0 5px,var(--accent-strong) 5px 9px)}
.prose .sd-bar-note{margin:8px 0 0;font-size:14px;color:var(--muted)}
.prose .sd-bar-note b{color:var(--orange);font-weight:700}
.prose .sd-legend{list-style:none;display:flex;flex-wrap:wrap;gap:8px 18px;padding:16px 0 0;margin:4px 0 0;border-top:1px solid var(--line);font-size:13px;color:var(--muted)}
.prose .sd-legend li{margin:0;display:inline-flex;align-items:center;gap:8px}
.sd-legend .sd-seg{display:inline-block;width:14px;height:14px;border-radius:3px;box-shadow:none}
.sd-legend .sd-dash{display:inline-block;width:0;height:14px;border-left:2px dashed var(--ink)}
@media (max-width:760px){.sd-roles{grid-template-columns:1fr}}
@media (max-width:640px){.sd-formula,.sd-bars{padding:20px 18px}.prose .sd-terms{grid-template-columns:1fr;gap:2px}.sd-terms dd{margin-bottom:10px}}
</style>

# Total Quality Management and Economically Useful Artificial Intelligence

From managing human work to continuously improving intelligent systems

Research and conceptual framework paper · Version 1.0 · 30 October 2026 · About 4,400 words · Download as [Markdown](https://raw.githubusercontent.com/selfdriven-foundation/selfdriven-institute/main/resources/papers/tqm-economically-useful-ai-v1.0.md) or [PDF](https://github.com/selfdriven-foundation/selfdriven-institute/blob/main/resources/papers/tqm-economically-useful-ai-v1.0.pdf)

> **Central thesis:** As the cost of performing cognitive work falls, economic value depends increasingly on the quality of purpose, context, coordination, verification and learning. Total Quality Management (TQM) offers a useful foundation for making artificial intelligence economically useful rather than merely capable.

*Discussion paper. The TQM–AI operating model is proposed here; it is not an established standard. The worked example is hypothetical, not observed evidence.*

## Abstract

Artificial intelligence is increasingly capable of producing outputs associated with paid human work. Yet task performance, speed and low unit cost do not necessarily establish economic usefulness. An AI system may produce plausible deliverables while creating expensive rework, hidden defects, regulatory exposure, poor customer outcomes or institutional dependency. Total Quality Management (TQM), developed in an era dominated by human labour and industrial production, provides a complementary theory of system-wide quality, continual improvement, customer value, variation and leadership. This paper argues that its importance increases as machine intelligence becomes more abundant.

The paper distinguishes **economically capable AI** from **economically useful AI**, proposes a quality-adjusted economic value model, and describes a **TQM–AI operating framework** covering purpose, verified context, bounded execution, measurement, corrective action and organizational learning. It connects Deming's system-oriented management philosophy with modern AI evaluations, quality-management standards and AI risk governance. A proposed architecture using verified context graphs, verified controllers and composer–conductor–musician roles is presented as one possible implementation—not as a proven industry standard. The paper closes with a measurable pilot design, a worked hypothetical example, falsifiable research propositions and limits to the framework.

<ul class="sd-keywords" aria-label="Keywords">
<li>total quality management</li>
<li>economically useful AI</li>
<li>TQM</li>
<li>Deming</li>
<li>continuous improvement</li>
<li>AI productivity</li>
<li>quality-adjusted value</li>
<li>organizational learning</li>
<li>verified context graphs</li>
<li>autonomous systems</li>
<li>ISO 9001</li>
<li>ISO/IEC 42001</li>
</ul>

## 1. Introduction: the missing link between capability and value

Contemporary AI systems can draft reports, inspect data, produce software, support customers and coordinate multistep work. This expansion of capability makes an old management question newly urgent: **What constitutes good work, and how do we know that it has created value?**

A benchmark score can demonstrate performance on a specified collection of tasks. It cannot, by itself, prove reliable deployment into a living organization. OpenAI's GDPval, for example, assesses real-world deliverables from 44 occupations and is more economically grounded than many academic tests, yet its initial evaluation is primarily one-shot and does not reproduce the full iterative, social and institutional context of work [[5]](#ref-5). METR likewise cautions that its agent time-horizon measurements focus largely on well-specified software, machine-learning and security tasks, not on all jobs [[6]](#ref-6).

The gap matters because organizations do not purchase intelligence in the abstract. They require **correct decisions, safe actions, accepted outputs, continuity, responsiveness, trust and improved results**. These outcomes arise from interacting systems: people, policies, technologies, suppliers, customers, evidence and feedback.

TQM is therefore not simply a historical precursor to AI-enabled efficiency. It is a potential discipline for turning abundant intelligence into dependable value. The core proposal is:

> **Move from managing the volume of work completed to managing the end-to-end quality of economically and socially useful outcomes.**

The paper uses *economically useful* to mean positive **incremental net value under specified quality and safety constraints**, compared with an appropriate counterfactual. This is an operational definition proposed here; it is not a universally agreed definition of artificial intelligence.

## 2. TQM: the quality of the system, not just the worker

TQM is an organization-wide approach to durable customer value through continually improved processes and participation across the system. The American Society for Quality emphasizes customer focus, employee involvement, data, communication and sustained improvement [[1]](#ref-1). Its conceptual inheritance includes Deming, Juran, Feigenbaum, Crosby, Shewhart and Ishikawa.

Deming's fourteen points challenge systems that rely on after-the-fact inspection, numerical quotas, fear or the assumption that local worker performance explains organizational quality. Among the key principles are constancy of purpose, building quality into processes, eliminating cross-functional barriers, investment in learning and ongoing improvement of the entire production and service system [[2]](#ref-2).

The seven quality-management principles associated with the ISO 9000 family are: customer focus; leadership; engagement of people; process approach; improvement; evidence-based decision-making; and relationship management [[3]](#ref-3). These principles are directly applicable to AI-mediated workflows, although their implementation requires new controls.

The timing is significant. **ISO 9001:2026** was published internationally on **16 September 2026**, with increased attention to quality culture, leadership and separating opportunities from risks [[4]](#ref-4). Standards Australia adopted it as **AS/NZS ISO 9001:2026** two days later, in September 2026 [[12]](#ref-12). Separately, ISO/IEC 42001:2023 establishes a management-system framework for organizations developing, providing or using AI; its Australian adoption is **AS ISO/IEC 42001:2023** [[7]](#ref-7) [[8]](#ref-8). These standards can complement one another but neither certifies that a particular AI outcome is true, beneficial or safe.

### 2.1 TQM assumptions that survive the AI transition

1. **Quality is systemic.** Defects can arise from faulty goals, missing context, poor incentives or interfaces, not just from the actor executing a task.
2. **Prevention can be more valuable than detection.** Verify inputs, constraints and actions before irreversible harm rather than relying entirely on review afterward.
3. **Variation matters.** Average performance conceals tail risks, rare cases, subgroup failures and unstable conditions.
4. **Feedback must change the system.** A review that generates no correction, learning or adaptation is not continual improvement.
5. **The customer is not the only affected party.** Quality must consider lawful requirements and the interests of workers, citizens, communities and other stakeholders.

### 2.2 Where TQM must evolve

Traditional quality management commonly treats human time, skill and management attention as scarce. AI changes the relative cost of generating options, explanations, analysis and draft work. It does **not** make trustworthy evidence, legitimacy, consent, energy, authority, attention, judgment, or error recovery unlimited.

An intelligent system can also replicate a mistaken instruction across thousands of cases faster than a human team can intervene. Thus, reduced production cost can coexist with increased aggregate loss from defects. The design objective becomes **low-cost intelligence inside high-integrity processes**, rather than unconstrained automation.

## 3. Economically capable versus economically useful AI

An AI system is **economically capable** when it can complete a task associated with market or institutional value to a specified quality level under test conditions.

It is **economically useful** when its deployment yields sustained, attributable benefits relative to an alternative, after accounting for all-in costs, reliability, risk, external effects and legitimacy. Three distinctions follow.

**Task performance versus outcome performance.** A high-quality draft insurance report is not itself an improved insurance decision. The result depends on whether the report leads to a more accurate, fair, timely and appropriately governed decision.

**Local productivity versus system productivity.** Faster document generation may push bottlenecks into legal review, service queues, customer disputes or remediation. The fastest step need not improve system throughput.

**Private savings versus social value.** Lower labour expense may improve a firm's financial statement while transferring error, access, privacy or environmental burdens to others. These are different economic perspectives and should be measured separately.

Evidence supports both the potential and the qualification. A peer-reviewed field study of customer-support agents found that AI assistance increased issues resolved per hour by roughly **15% on average**, with heterogeneous effects across workers; some highly experienced workers experienced small quality declines [[9]](#ref-9). A 2026 NBER working paper finds associations between AI investment and productivity growth linked to the accumulation of organizational capital, though associations do not alone establish that every AI investment creates positive causal returns [[10]](#ref-10). The GDPval benchmark finds advancing performance on economically relevant deliverables, while making explicit the limits of one-shot assessment [[5]](#ref-5) [[11]](#ref-11).

**Implication:** AI should be judged at the level at which value is actually realized—not solely at the level at which outputs are generated.

## 4. The TQM–AI economic model

### 4.1 Quality-adjusted net value

Let a deployment be evaluated over a defined time horizon against a realistic baseline. Define:

**Incremental net value = realized benefits − deployment costs − expected quality losses − external harms**, all measured relative to the baseline.

Where practical, a more explicit expression is:

<div class="sd-formula">
<p class="sd-formula-label">Quality-adjusted net value</p>
<p class="sd-formula-eq"><span>ΔV</span><span class="op">=</span><span>ΔB</span><span class="op">−</span><span>ΔC<sub>operating</sub></span><span class="op">−</span><span>ΔC<sub>oversight</sub></span><span class="op">−</span><span>ΔC<sub>rework</sub></span><span class="op">−</span><span>ΔL<sub>risk</sub></span><span class="op">−</span><span>ΔE<sub>external</sub></span></p>
<dl class="sd-terms">
<dt>ΔB</dt><dd>Incremental realized benefit: time saved that is actually redeployed productively, better outcomes, improved service, increased useful capacity or willingness to pay.</dd>
<dt>ΔC<sub>operating</sub></dt><dd>Compute, model access, data, integration, maintenance and infrastructure changes.</dd>
<dt>ΔC<sub>oversight</sub></dt><dd>Human review, assurance, escalation, training and governance.</dd>
<dt>ΔC<sub>rework</sub></dt><dd>Corrections, rejected outputs, delays and downstream process disruption.</dd>
<dt>ΔL<sub>risk</sub></dt><dd>Change in expected losses from defects, incidents, sanctions, operational failure or disputes.</dd>
<dt>ΔE<sub>external</sub></dt><dd>Harms or costs borne outside the deploying entity, where these can be estimated credibly.</dd>
</dl>
</div>

The deltas can be positive or negative. A reduction in cost is a negative ΔC and therefore improves ΔV. All monetized benefits and costs must refer to the **same population and period**, and avoided costs must not be counted again as productivity gains. Since not every harm can be ethically or reliably monetized, certain requirements must remain **non-negotiable deployment gates** rather than terms that can be offset by revenue.

This model is a decision aid, not a universal accounting identity. Distributional and nonmarket impacts should be reported alongside private net present value rather than compressed into a single unchallengeable number.

### 4.2 A quality-adjusted output measure

A useful complementary metric is:

**Cost per accepted, verified outcome = all-in lifecycle cost / number of accepted, verified outcomes.**

A corresponding throughput measure is:

**Verified outcome rate = accepted outcomes meeting all mandatory gates / attempted outcomes.**

The denominator includes failed and abandoned attempts. For high-stakes use, the definition of *accepted* should require correctness, legitimacy, provenance, timeliness and appropriate review—not simply positive user ratings or the absence of reported complaints.

### 4.3 The marginal question

When intelligence is inexpensive, adding another model call may cost little. But the economically relevant question is not *How many more answers can be generated?* It is:

> **What is the incremental increase in verified, useful outcomes per additional unit of total system cost and risk?**

Additional reasoning, redundancy or checking can be worthwhile when it reduces expected downstream loss. Conversely, a cheaper model may be more useful if its outputs are easier to verify or if the task does not require frontier capability.

### 4.4 Cost of quality for AI

Classical cost-of-quality accounting distinguishes prevention and appraisal costs from internal and external failure costs. Applied to AI:

| Cost category | Examples in AI-mediated operations | Quality response |
|---|---|---|
| Prevention | Well-defined intent, verified data, permission limits, tested controllers | Build safeguards into design |
| Appraisal | Evaluations, human review, audits, red-team tests, monitoring | Use targeted, risk-based assurance |
| Internal failure | Rejected output, rework, retries, workflow rollback | Repair before delivery |
| External failure | Harmful decision, customer loss, breach, unsafe action, legal remedy | Prevent, detect, contain and remediate |

A low token price does not imply a low cost of quality. In some cases, more spending on prevention and appraisal reduces total cost significantly.

## 5. Translate TQM principles into AI operating rules

| Quality-management principle | AI-era operating interpretation | Evidence of effectiveness |
|---|---|---|
| Customer focus | Define actual stakeholder outcomes, not prompt completion | Outcomes and satisfaction measured after use |
| Leadership and purpose | Establish legitimate objectives, scope, responsibilities and stop conditions | Reviewed and versioned decision rights |
| Engagement of people | Preserve frontline judgment, reporting, appeal and learning | Evidence that issues lead to improvements |
| Process approach | Measure the entire workflow, including humans and external dependencies | End-to-end throughput, error and cost |
| Improvement | Use controlled experiments and corrective actions | Verified improvement under comparable cases |
| Evidence-based decisions | Use traceable inputs, uncertainty and calibrated evaluation | Reproducible tests and provenance |
| Relationship management | Manage model, data and service suppliers as part of system quality | Supplier assurance, fallback, exit and resilience tests |

This translation is **proposed**, not an ISO interpretation or official clause-by-clause compliance mapping.

## 6. An operational architecture for TQM-governed AI

A useful implementation pattern separates **purpose**, **evidence**, **decision**, **execution** and **learning**. The pattern may use verified context graphs (VCGs) and verified/validated code controllers (VCCs), but alternative technologies could implement the same controls.

### 6.1 Layer 1: Purpose and quality contract

For each service, record the intended beneficiaries, desired outcomes, unacceptable outcomes, legal and ethical constraints, decision authority, acceptance criteria and permitted autonomy. Also record who may change these definitions and who may appeal an outcome.

The first quality question is **Should this system perform this action at all?** A flawless execution of an illegitimate objective is not a quality outcome.

### 6.2 Layer 2: Verified context

Represent the relevant facts, sources, assumptions, provenance, confidence, timestamps, policies and dependencies. A VCG is one **proposed** way to express and test this context. Its verification claims must be scoped: integrity checks, schema validity and cryptographic provenance can prove certain properties of a record, but cannot by themselves prove that a real-world claim is true or complete.

### 6.3 Layer 3: Bounded decision and execution

An AI system may generate plans, hypotheses, recommendations and candidate operations. A separate, testable controller can enforce authorization, input validation, state transitions, invariants, transaction limits and rollback conditions. Where appropriate, critical rules are checked deterministically and actions are constrained by least privilege.

This separation limits the assumption that fluent natural-language reasoning is sufficient authorization for a material real-world act. Human sign-off is required wherever law, risk or policy demands it.

### 6.4 Layer 4: Outcome evidence

Preserve enough information to answer: What was requested? Which context was relied upon? Which model and controller versions acted? What was approved or rejected? What happened? Did it improve the affected person's outcome? Can the decision be reviewed and corrected?

Evidence collection must also follow privacy, confidentiality, retention and access-control requirements. **More logging is not automatically better quality.**

### 6.5 Layer 5: Continuous improvement

Operational telemetry, frontline feedback, external complaints and periodic independent checks should feed a controlled improvement mechanism. Every proposed change needs an owner, test, release decision, regression criteria and rollback plan. A self-modifying system without governance can convert a quality loop into an uncontrolled source of risk.

The conceptual flow is:

<ol class="sd-steps" aria-label="Conceptual flow">
<li>Purpose</li>
<li>Verified context</li>
<li>Bounded decision</li>
<li>Controlled execution</li>
<li>Verified outcome</li>
<li>Learning</li>
<li class="is-loop">Revised purpose, context and controllers</li>
</ol>

This flow is cyclical but not necessarily fully autonomous. The approval points should match the consequences of error.

## 7. From micro-management to conducting

A human-only organization often decomposes strategic intent into assigned tasks and checks whether people completed them. In a hybrid human–machine organization, this can be replaced or supplemented by an **orchestration model** focused on outcomes and coherence.

<div class="sd-roles">
<div>
<p class="sd-role-label">Defines the score</p>
<p class="sd-role-name">Composer</p>
<p>Purpose, constraints, quality requirements, intended outcomes and interfaces.</p>
</div>
<div>
<p class="sd-role-label">Coordinates</p>
<p class="sd-role-name">Conductor</p>
<p>Selects, sequences and coordinates actors; tracks quality, exceptions, dependencies and cadence.</p>
</div>
<div>
<p class="sd-role-label">Performs</p>
<p class="sd-role-name">Musicians</p>
<p>Humans, software controllers, AI models and services that perform specialized work, with appropriate scope and safeguards.</p>
</div>
</div>

This is a proposed organizational metaphor. It is most useful when it makes responsibility explicit; it should not obscure who is legally accountable or which human holds decision authority.

The feedback vocabulary can be deliberately simple:

- **Observation:** evidence about system behaviour, quality, variation or an emerging condition.
- **Issue:** a confirmed or suspected deviation requiring investigation, containment or correction.
- **Suggestion:** a proposed adaptation, experiment or new capability, subject to review.

The conductor returns these signals to the composer and system owners. This is close to Deming's emphasis on system learning: people and intelligent systems need not be judged solely by quota attainment; they should help make the entire system better.

### 7.1 Four nested learning loops

| Loop | Typical cadence | Primary question | Control requirement |
|---|---|---|---|
| Operational | Per action / minutes | Is this specific action safe and correct? | Validation, authorization, interruption |
| Process quality | Daily / weekly | Where are defects, variation and bottlenecks appearing? | Statistical monitoring, triage, corrective action |
| System redesign | Monthly / quarterly | Are we producing the right outcomes efficiently? | Experiments, change review, workflow redesign |
| Institutional purpose | Periodic and event-driven | Should we keep doing this, and for whose benefit? | Leadership, affected parties, independent oversight |

This decomposition helps distinguish rapid machine correction from slower questions of legitimacy and institutional design. Autonomy should increase only where evidence shows that the controls are appropriate for the task.

## 8. Why institutional and economic structure matters

TQM initially emphasized better organizations, but the AI transition can affect what an organization needs to be. Coase's 1937 analysis of the firm asks why some coordination takes place inside firms rather than through markets, emphasizing the costs of arranging and organizing transactions [[13]](#ref-13). AI may reduce certain coordination costs through discovery, negotiation, administration and verification, while creating new costs of assurance, liability, dependence and trust.

This suggests a hypothesis, not an established prediction: **as cognitive coordination becomes cheaper, some activities that previously required large managerial hierarchies could be performed by smaller teams, networks or purpose-specific collaborations.** Conversely, concentrated access to compute, data, distribution or accreditation could strengthen certain large intermediaries.

TQM offers a way of judging these possibilities without assuming that decentralization or concentration is inherently superior. The relevant questions are whether the system improves quality, reduces total coordination and failure costs, preserves accountability and distributes benefits acceptably.

Deming's warning against local optimization becomes especially important: a corporate AI deployment can look efficient on its own dashboard while degrading suppliers, customers, employees or public services. Quality management must see beyond organizational boundaries.

## 9. A worked example: insurance property-risk assessment

Consider a **hypothetical** service processing 1,000 property-risk files per month. The baseline process costs **A$60 per accepted assessment**, or **A$60,000** monthly. An AI-enabled process proposes the following:

| Monthly cost or benefit | Hypothetical amount |
|---|---:|
| Baseline accepted assessments, 1,000 × A$60 | A$60,000 |
| AI/model/data/infrastructure, 1,000 × A$8 | A$8,000 |
| Human specialist review, 1,000 × A$15 | A$15,000 |
| Corrections and rework, average 1,000 × A$5 | A$5,000 |
| Fixed quality, security and governance costs | A$9,000 |
| **AI-enabled all-in operating cost** | **A$37,000** |
| **Apparent monthly saving** | **A$23,000** |

The **A$23,000** is not yet demonstrated economic value. If the AI system creates an additional **A$30,000 expected monthly loss** from errors, disputes or inappropriate risk ratings, the incremental net outcome is **negative A$7,000**. If those extra losses are prevented through verified evidence, policy checks and review, much of the apparent saving may become genuine benefit.

<div class="sd-bars" role="img" aria-label="Bar comparison drawn to one scale. Baseline process A$60,000 a month. AI-enabled operating cost A$37,000, which is A$23,000 below baseline. AI-enabled cost plus A$30,000 expected extra loss totals A$67,000, which is A$7,000 above baseline.">
<p class="sd-bars-title">Monthly cost, hypothetical, 1,000 files</p>
<div class="sd-bar-row">
<div class="sd-bar-head"><strong>Baseline process</strong><span>A$60,000</span></div>
<div class="sd-bar"><span class="sd-seg base" style="width:89.552%"></span></div>
</div>
<div class="sd-bar-row">
<div class="sd-bar-head"><strong>AI-enabled, operating cost</strong><span>A$37,000</span></div>
<div class="sd-bar"><span class="sd-seg s1" style="width:11.940%"></span><span class="sd-seg s2" style="width:22.388%"></span><span class="sd-seg s3" style="width:7.463%"></span><span class="sd-seg s4" style="width:13.433%"></span></div>
<p class="sd-bar-note"><b>A$23,000</b> below baseline: the apparent saving</p>
</div>
<div class="sd-bar-row">
<div class="sd-bar-head"><strong>AI-enabled, with expected extra loss</strong><span>A$67,000</span></div>
<div class="sd-bar"><span class="sd-seg s1" style="width:11.940%"></span><span class="sd-seg s2" style="width:22.388%"></span><span class="sd-seg s3" style="width:7.463%"></span><span class="sd-seg s4" style="width:13.433%"></span><span class="sd-seg loss" style="width:44.776%"></span></div>
<p class="sd-bar-note"><b>A$7,000</b> above baseline: the incremental net outcome</p>
</div>
<ul class="sd-legend" aria-hidden="true">
<li><span class="sd-seg base"></span>Baseline</li>
<li><span class="sd-seg s1"></span>Model, data and infrastructure A$8,000</li>
<li><span class="sd-seg s2"></span>Specialist review A$15,000</li>
<li><span class="sd-seg s3"></span>Rework A$5,000</li>
<li><span class="sd-seg s4"></span>Fixed quality and governance A$9,000</li>
<li><span class="sd-seg loss"></span>Expected extra loss A$30,000</li>
<li><span class="sd-dash"></span>A$60,000 baseline</li>
</ul>
</div>

All figures are illustrative assumptions, not observed data or a prediction. Both alternatives must meet the **same outcome and acceptance definition**, including fairness, regulatory duties, accuracy, appealability and customer impact. If the AI pathway cannot satisfy those constraints, cost saving is not sufficient reason to deploy it.

The example also illustrates a broader opportunity: AI might enable valuable assessments that were previously uneconomic to produce, such as better coverage of smaller or remote properties. That gain should be measured as a **new realized benefit**, not mislabelled as a labour saving.

## 10. An implementation and evaluation protocol

A practical pilot can be structured around a **90-day design and evaluation program**, with longer follow-up where outcomes materialize slowly. This is an example plan, not a universal schedule.

### Phase A — Define and baseline (days 1–30)

Identify one decision or service with a bounded scope. Define affected stakeholders, minimum standards, the appropriate human-only or existing-system comparator, failure modes and the economic boundary. Measure actual baseline throughput, cost, error, rework, delay, satisfaction and distributional effects. Agree to stopping conditions before deployment.

### Phase B — Controlled shadow and assisted operation (days 31–60)

Evaluate using representative historical cases and newly arriving cases. Include difficult, ambiguous, rare and adversarial inputs—not only routine successes. Start in shadow mode or human-assisted mode; prevent unauthorized external actions. Record every failure, correction and nonconformity in the same workflow as other quality issues.

### Phase C — Limited deployment and improvement (days 61–90)

Expand only after pre-agreed thresholds are met. Compare against a suitable contemporaneous control where feasible; otherwise state the limitations of a before/after comparison. Use blinded quality scoring when possible. Evaluate drift, tail outcomes, oversight burden and actual cost realization. Require owner approval and rollback for material system changes.

### 10.1 Minimal scorecard

| Dimension | Metric | Suggested method |
|---|---|---|
| Effectiveness | Accepted, verified outcomes per 100 cases | Independent rubric and sample audit |
| Economic value | Incremental net value and all-in cost per accepted outcome | Cost model against comparator |
| Reliability | Severe defect rate; failure under edge conditions | Stratified tests and live sampling |
| Human coordination | Review time, escalation burden, override rate | Workflow event logs |
| Fairness and access | Outcome differences across relevant groups | Lawful, privacy-preserving subgroup review |
| Safety and legality | Guardrail violations, incidents, required approvals | Independent control checks |
| Learning | Corrective action closure and regression results | Versioned issue/experiment records |
| Resilience | Recovery, fallback effectiveness, supplier dependency | Failure simulation and business continuity tests |
| Stakeholder value | Complaints, appeals, downstream outcome quality | Follow-up and affected-party feedback |

No single composite score should allow a large productivity improvement to hide unacceptable safety, accuracy or legal failures. Use both performance metrics and hard gates.

## 11. Research propositions and falsifiable hypotheses

**H1 — System optimization beats isolated model optimization.** For sufficiently interconnected workflows, optimizing verified end-to-end outcomes will yield greater net value than optimizing model benchmark scores alone. Test with comparable deployments, controlling for task mix and baseline maturity.

**H2 — Prevention reduces total cost at scale.** In workflows with material error consequences, investment in verified context and bounded controllers will reduce full lifecycle cost after a measurable break-even volume, despite increasing initial assurance expenditure. The break-even volume is empirical, not assumed.

**H3 — Abundant generation increases the importance of acceptance criteria.** As the marginal cost of output falls, weak quality definitions will predict greater rework and external failure costs per accepted outcome than strong, auditable definitions. Measure both costs and tail risks.

**H4 — Feedback quality mediates long-run benefit.** Systems that convert observations, issues and suggestions into validated changes will improve more sustainably than systems relying only on model upgrades. Test using controlled release histories and regression datasets.

**H5 — Human involvement changes rather than disappears.** In quality-governed deployments, routine production effort may decline while meaningful work in purpose-setting, relationship care, anomaly resolution and accountability grows. The distributional outcome is a question for evidence, not a guarantee.

**H6 — Coordination structure is conditional.** Some networks will gain from AI-driven reductions in transaction and administration costs, while others will centralize due to platform and assurance economies. Test across sectors rather than assuming a universal organizational direction.

## 12. Failure modes and limitations

The argument should not be mistaken for a claim that TQM by itself makes AI trustworthy. In particular:

1. **Good-looking evidence can be wrong.** Provenance, signatures and formal constraints do not substitute for truth, representative data or good judgment.
2. **Measurement can distort behaviour.** If a metric becomes a quota, the system may optimize the indicator rather than the human outcome—precisely the managerial problem Deming cautioned against.
3. **Statistical averages can hide unacceptable tails.** Rare but severe failures require specific testing, containment and independent scrutiny.
4. **Realized value is contextual.** A system that performs a benchmark task well may fail in a workflow with conflicting instructions, incomplete information or legitimate human disagreement.
5. **Independent judgment still matters.** The same model should not be the sole generator, evaluator, policy interpreter and final authority for consequential decisions.
6. **Human burden may be displaced.** Automation can shift work onto customers, lower-paid reviewers, suppliers and public institutions rather than eliminate it.
7. **Economic benefit is not social permission.** Some actions should not be taken even if a narrow financial model predicts a positive return.
8. **Standards are management frameworks, not proof of outcome quality.** Alignment with ISO 9001 or ISO/IEC 42001 does not imply that every AI output is reliable or ethically acceptable.
9. **This paper is conceptual.** The proposed TQM–AI architecture and hypotheses require empirical testing across different domains and operating conditions.

For general AI governance, the NIST AI Risk Management Framework emphasizes *Govern, Map, Measure and Manage*, continuously across the lifecycle [[14]](#ref-14). Its generative-AI profile adds guidance on risks specific to that technology [[15]](#ref-15). Those structures can inform—not replace—domain obligations and independent oversight.

## 13. Discussion: from abundant intelligence to abundant useful outcomes

TQM developed partly because organizations discovered that simply working harder, inspecting more and paying attention to local numerical outputs did not reliably improve the whole system. AI risks repeating that lesson on a much larger scale. Generating more text, code, assessments and recommendations can be mistaken for progress even when downstream quality stagnates.

The next transition is not just from humans completing tasks to AI completing tasks. It is from **managing the production of outputs** to **conducting systems that produce beneficial, verifiable, adaptive outcomes**.

Under this model, intelligence is a component of productive capacity, but is not itself the final unit of value. Human and machine actors form part of a learning system in which purpose is explicit, context can be checked, actions are bounded, results are evaluated and improvement is intentional. Where coordination becomes cheaper, organizations may reorganize around purpose rather than inherited layers of task control. Whether that creates more equitable and resilient institutions depends on governance, ownership and the distribution of benefits.

A genuinely useful AI system should make the surrounding human system more capable of understanding and improving itself. That is a stronger ambition than automation.

## 14. Conclusion

**Economically useful AI is not intelligence that merely produces work; it is intelligence embedded in a system that repeatedly produces demonstrably valuable outcomes at acceptable total cost and risk.**

TQM supplies a durable set of principles for this emerging discipline: constancy of purpose, system thinking, quality by design, evidence, participation, prevention, measurement and continual improvement. Modern AI changes the speed, scale and cost of iteration, but it does not make purpose, truth, trust or accountability optional.

The central practical proposal is to make **the verified outcome, not the generated output**, the unit of management and economic evaluation. The central research proposal is to test whether quality-managed, context-grounded and bounded AI systems create more sustainable net value than capability-first deployments. The central institutional proposition is that abundant intelligence may allow work to be coordinated differently—but only if quality and legitimacy are designed into the system.

> **TQM for the AI era:** define what is valuable; build systems that can deliver it; verify that they did; learn from what happened; and improve the whole system.

## References

1. <span id="ref-1"></span>American Society for Quality, [*Total Quality Management*](https://asq.org/quality-resources/total-quality-management).
2. <span id="ref-2"></span>The W. Edwards Deming Institute, [*The 14 Points for Management*](https://deming.org/explore/fourteen-points/).
3. <span id="ref-3"></span>American Society for Quality, [*ISO 9000 Series of Standards: Seven Quality Management Principles*](https://asq.org/quality-resources/iso-9000).
4. <span id="ref-4"></span>International Organization for Standardization, [*ISO 9001:2026—Quality management systems: Requirements*](https://www.iso.org/standard/9001) (published 16 September 2026).
5. <span id="ref-5"></span>OpenAI, [*Measuring the performance of our models on real-world tasks: GDPval*](https://openai.com/index/gdpval/) (2025).
6. <span id="ref-6"></span>METR, [*Task-Completion Time Horizons of Frontier AI Models*](https://metr.org/time-horizons/) (2026).
7. <span id="ref-7"></span>International Organization for Standardization, [*ISO/IEC 42001 explained*](https://www.iso.org/insights/iso-42001-explained).
8. <span id="ref-8"></span>Standards Australia, [*Spotlight on AS ISO/IEC 42001:2023, Artificial intelligence—Management system*](https://www.standards.org.au/blog/spotlight-on-as-iso-iec-42001-2023) (2025).
9. <span id="ref-9"></span>Brynjolfsson, E., Li, D. and Raymond, L. R., [*Generative AI at Work*](https://doi.org/10.1093/qje/qjae044), *Quarterly Journal of Economics*, 140(2), 889–942 (2025).
10. <span id="ref-10"></span>Babina, T., He, A. X. and Jiang, R., [*Canaries in the Gold Mine: Early Productivity Gains from Artificial Intelligence Creating Organization Capital*](https://www.nber.org/papers/w35684), NBER Working Paper 35684 (2026).
11. <span id="ref-11"></span>Patwardhan, T., et al., [*GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks*](https://proceedings.iclr.cc/paper_files/paper/2026/hash/290c2430f91912204f30bbcc990fff1d-Abstract-Conference.html), ICLR 2026.
12. <span id="ref-12"></span>Standards Australia, [*Standards Australia adopts global quality standard in just two days*](https://www.standards.org.au/news/standards-australia-adopts-global-quality-standard-in-just-two-days) (2026).
13. <span id="ref-13"></span>Coase, R. H., [*The Nature of the Firm*](https://doi.org/10.1111/j.1468-0335.1937.tb00002.x), *Economica*, 4(16), 386–405 (1937).
14. <span id="ref-14"></span>NIST, [*AI Risk Management Framework, Core functions: Govern, Map, Measure, Manage*](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) (2023).
15. <span id="ref-15"></span>NIST, [*Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)*](https://doi.org/10.6028/NIST.AI.600-1) (2024).

### Suggested citation

*Total Quality Management and Economically Useful Artificial Intelligence: From managing human work to continuously improving intelligent systems*. Version 1.0, 30 October 2026. Conceptual research and framework paper. selfdriven Institute, [selfdriven.institute/paper/tqm-economically-useful-ai](https://www.selfdriven.institute/paper/tqm-economically-useful-ai).

### Research and interpretation note

This document synthesizes referenced public research and standards information with original conceptual proposals. References are provided for verification. The proposed economic equations, TQM–AI architecture, conducting analogy, implementation plan and hypotheses are authorial constructs and should not be attributed to the standards bodies or papers cited. No field validation was performed for this paper; the property-risk example is hypothetical. This is not a legal, certification or regulatory compliance opinion.
