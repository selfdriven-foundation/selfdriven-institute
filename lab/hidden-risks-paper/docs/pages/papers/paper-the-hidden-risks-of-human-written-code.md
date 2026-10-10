---
layout: selfdriven
title: The Hidden Risks of Human-Written Code - selfdriven Institute
permalink: /paper/the-hidden-risks-of-human-written-code
description: "Why human software development may become a growing organisational risk in the age of autonomous intelligence. A position paper on moving the unit of trust from who wrote the code to the evidence that it does what it should."
---

# The Hidden Risks of Human-Written Code

Why human software development may become a growing organisational risk in the age of autonomous intelligence

Position paper · 10 October 2026 · About 3,050 words · [Download the paper as Markdown](https://raw.githubusercontent.com/selfdriven-foundation/selfdriven-institute/main/resources/papers/the-hidden-risks-of-human-written-code.md)

<audio controls preload="none" style="width: 100%;">
  <source src="https://raw.githubusercontent.com/selfdriven-foundation/selfdriven-institute/main/resources/podcasts/Human_Code_Is_a_Structural_Security_Risk.m4a" type="audio/mp4">
  Your browser does not support the audio element. <a href="https://github.com/selfdriven-foundation/selfdriven-institute/blob/main/resources/podcasts/Human_Code_Is_a_Structural_Security_Risk.m4a">Listen to the podcast</a>.
</audio>

> **Central thesis:** For decades, humans have been trusted to write software, with machines used to validate and execute it. As autonomous coding systems advance, this assumption deserves reconsideration.

Human-written code introduces risks involving fatigue, inconsistency, interpretation, limited availability, undocumented knowledge and security vulnerabilities. The opportunity is not simply to replace developers with AI, but to shift humans towards defining intent, setting constraints, evaluating outcomes and retaining accountability, while increasingly delegating implementation to machine systems.

*This is a conditional argument, not a claim that AI-generated code is inherently safer. Research shows both the promise and the substantial risks of AI coding, making independent verification fundamental.*

## Abstract

The software industry has spent decades treating human-written code as the normal, trustworthy starting point and automated generation as an exceptional source of risk. This paper reverses the question: what risks arise from requiring humans to translate organisational intent into executable code?

Human implementation introduces variability, fatigue, interpretive errors, tacit knowledge, inconsistent security practice, capacity bottlenecks and dependence on particular individuals. These are not arguments that programmers are negligent or that machines are intrinsically trustworthy. They are reasons to distinguish human judgment and accountability from human authorship of source code.

As autonomous software engineering matures, a more robust model may place humans primarily in charge of purpose, requirements, boundaries, exception handling and accountability, while machines increasingly produce candidate implementations. Neither human-written nor AI-generated code should be trusted because of its author. Trust should come from verifiable requirements, independently executed tests, security controls, traceable provenance and evidence gathered during operation.

> **Core proposition:** The unit of trust in software engineering should migrate from the person who wrote the code to the evidence that the code satisfies its stated purpose and constraints.

## 1. The inherited assumption

For most of computing history, human programming was unavoidable. Humans understood problems, designed algorithms, wrote source code, reviewed the changes, tested them and decided when to release. Tools assisted at every step, but software authorship remained a human activity.

Consequently, organisations came to rely on proxies for software trust: developer seniority, reputation, peer review, adherence to a style guide, the standing of a vendor and the apparent quality of a codebase. These proxies have value, but none demonstrates that the executable system will behave correctly under all important conditions.

The arrival of increasingly capable coding systems creates a new option: separating the expression of intent from the generation of implementation. Once that separation is feasible, the historic dependence on human-authored implementation becomes a design choice rather than an immutable constraint.

This paper examines that choice. Its argument is deliberately provocative, but it does not claim that replacing every human developer is either possible or desirable today.

## 2. Ten risk categories in human-centred coding

### 2.1 Cognitive variability and fatigue

Human output changes with attention, stress, workload, sleep, interruptions and context switching. A developer may correctly implement an authorisation rule in one service yet omit the equivalent check in another. Reviews are susceptible to similar limitations. These risks can be reduced by good engineering culture, but they cannot be eliminated through exhortation to be more careful.

**Control implication:** Express critical properties as automated checks rather than relying exclusively on sustained human vigilance.

### 2.2 Interpretation loss between purpose and code

A stakeholder expresses a desired outcome; a product owner turns it into a ticket; an engineer turns the ticket into code. Each translation can discard intent or introduce assumptions. The eventual program may perfectly implement a misunderstanding.

This is equally possible with AI. The important distinction is that a structured, persistent and testable specification can make assumptions visible regardless of who writes the implementation.

**Control implication:** Record business invariants, prohibited behaviours, examples and acceptance tests before implementation begins.

### 2.3 Tacit knowledge and key-person dependency

Complex systems frequently depend on unwritten knowledge: why a strange condition exists, which customer uses an undocumented exception or what must not change during a migration. The organisation may own the repository without owning the practical knowledge needed to modify it safely.

Turnover, illness, competing priorities or simple passage of time can turn this dependency into operational risk.

**Control implication:** Maintain machine-readable specifications, architecture decisions, executable examples and reproducible build environments alongside source code.

### 2.4 Inconsistent patterns and security discipline

Different people make different choices about authentication, error handling, validation, logging, dependency use and data isolation. Diversity of thought can be valuable in design, but uncontrolled variation in security-critical implementation can create gaps.

Long-known bug classes remain present in deployed software. In 2024, CISA and the FBI specifically urged software manufacturers to eliminate SQL injection vulnerabilities rather than continue accepting them as routine defects [[1]](#ref-1).

**Control implication:** Use centrally enforced security invariants, standard components, safe defaults and automated policy checks. Generated code must satisfy the same requirements.

### 2.5 Insider access and credential exposure

Developers often possess broad access to repositories, secrets, production-like data, build systems and deployment pipelines. Even trustworthy employees can make mistakes, be socially engineered or work from compromised devices. A smaller subset may act maliciously.

AI coding agents can create the same or greater risk if given broad credentials. The relevant issue is not whether the actor is human or silicon; it is what that actor is authorised to do.

**Control implication:** Apply least privilege, short-lived credentials, separation of duties, isolated execution environments and independently authorised releases to both humans and agents.

### 2.6 Scarcity, delay and vulnerability exposure

Human engineering capacity is finite. Organisations may know about a needed security patch, obsolete dependency or architectural weakness yet defer remediation because a specialist is unavailable. The resulting period of exposure is itself a risk.

Automation can potentially shorten the interval from detection to a reviewed fix. It can also amplify failures if changes are generated and released faster than they can be evaluated.

**Control implication:** Measure time to verified remediation, not lines of code produced or tickets closed.

### 2.7 Subjective implementation choices

Developers bring habits, preferences, incentives and personal interpretations. These can improve systems when exercised thoughtfully, but also lead to unnecessary complexity, favourite-framework bias or designs shaped by the implementer’s convenience rather than user needs.

Machine models also carry biases and defaults. The safeguard is to make the decision criteria explicit.

**Control implication:** Separate architecture decisions and approved constraints from implementation preferences; require justification for significant deviations.

### 2.8 Human review as a weak substitute for evidence

A pull request approved by two experienced developers may still contain a security vulnerability, race condition or business-rule violation. Review is useful for spotting contextual defects, but it is not a formal proof of correctness.

Likewise, a large automated test suite may miss the very behaviour that matters most. More tests are not necessarily better tests.

**Control implication:** Combine independent review with adversarial testing, static analysis, property-based tests, threat modelling and, where appropriate, formal verification.

### 2.9 Effort-based incentives

Traditional software delivery often rewards visible effort: hours worked, code written, sprint velocity or the number of completed tasks. These signals can be weakly correlated—or negatively correlated—with resilience, simplicity and user value.

If implementation becomes cheaper, the premium should move to the quality of the requirement, the strength of the evidence and the usefulness of the delivered outcome.

**Control implication:** Reward verified outcomes, low defect escape, fast recovery, reduced complexity and customer value.

### 2.10 Scaling individual decisions into systemic risk

A single engineer’s judgement can propagate through shared libraries, infrastructure templates or platform defaults to thousands of services. Human authorship is not necessarily local: its consequences may be highly correlated.

Centralised AI systems can similarly reproduce the same faulty pattern at scale, creating an automation monoculture. Correlation and blast radius matter more than authorship.

**Control implication:** Use independent checks, diversity where warranted, staged deployment, canary releases, rollback and containment boundaries.

## 3. The risk inversion

The conventional framing asks: *Can we trust a machine to write code that a human would otherwise write?*

A more useful engineering question is: *Why should we trust executable code merely because a human wrote it?*

Both questions lead to the same principle: **authorship is not assurance.**

Historically, the code author was also a primary interpreter of the specification, designer of the solution and informal validator of the result. This bundled four different functions into one role. Autonomous engineering makes it practical to consider separating them:

1. **Purpose:** What outcome is legitimate and valuable?
2. **Specification:** What must always be true, and what must never happen?
3. **Implementation:** What system can fulfil those requirements?
4. **Verification:** What independent evidence shows that it does?
5. **Operation:** Does the system continue to satisfy the requirements in reality?

The opportunity is not the removal of humans from software engineering. It is the removal of unnecessary dependence on unverified human implementation.

## 4. Why AI-generated code is not automatically safer

The risks of delegating implementation to models are material and, in several cases, different from traditional human-coding risks.

A 2025 Veracode evaluation reported security-test failures in 45% of the generated samples it assessed across specified languages and tasks. This is a result from that evaluation, not a universal defect rate for AI-generated production software [[2]](#ref-2).

OWASP’s agentic AI guidance identifies risks such as goal hijacking, tool misuse, identity and privilege abuse, supply-chain compromise and unexpected code execution [[3]](#ref-3). These become particularly serious when a coding agent can inspect sensitive repositories, alter infrastructure or trigger deployment.

There is also no settled proof that AI increases real-world development productivity in every setting. A 2025 randomised study by METR found that experienced open-source developers working in familiar, mature repositories took 19% longer with the AI tools available at that time. The authors explicitly cautioned against generalising the finding to all developers or tasks [[4]](#ref-4).

Conversely, Google’s 2025 DORA research characterises AI as an amplifier of organisational strengths and weaknesses rather than a standalone solution [[5]](#ref-5).

The resulting conclusion is narrower—and stronger—than claims of inevitable AI superiority:

> Human-only coding and AI-only coding are both inadequate assurance models. The relevant comparison is between differently designed systems of engineering and verification.

## 5. From trusted developers to trusted evidence

A mature autonomous software-engineering system should generate more than source code. Each proposed change should be accompanied by an inspectable evidence package.

| Artifact | Question it answers |
| --- | --- |
| Statement of purpose | Why is this change necessary? |
| Acceptance criteria and invariants | What must be true after the change? |
| Threat model and constraints | Which failures and behaviours are prohibited? |
| Implementation and dependencies | What will execute, and on what does it depend? |
| Test and verification results | What evidence supports correctness and safety? |
| Provenance and approvals | Who or what proposed, checked and authorised it? |
| Deployment and rollback plan | How is the change introduced and contained? |
| Runtime observations | Is it behaving as expected after release? |

A test pass provides evidence within the scope of the test. It does not prove the absence of untested defects. Formal verification can prove selected properties under explicit assumptions; even then, incorrect assumptions or specifications remain possible.

The objective is therefore bounded, inspectable confidence, not an impossible promise of perfect software.

## 6. An example: tenant isolation in a cloud platform

Consider a multi-tenant system storing records for different organisations.

A weak requirement states: *Users can view their organisation’s records.*

A stronger specification states:

- Every record belongs to exactly one tenant.
- The authenticated tenant identity is established by the server, not accepted from a client-controlled field.
- No read, write, export, search or background job may access a record belonging to another tenant without an explicitly approved cross-tenant authority.
- The default behaviour when identity or authority cannot be established is denial.
- Authorisation outcomes are logged without exposing sensitive content.
- Integration tests attempt cross-tenant access through every applicable API and asynchronous path.

A human or AI agent may now implement the system. Neither should be permitted to bypass the invariants. Automated checks, isolation tests, code review and deployment safeguards provide evidence independent of the implementer’s confidence.

This approach is useful even if no AI-generated code is involved. Its virtue is reducing reliance on the author’s unstated assumptions.

## 7. A human–machine operating model

The future engineering workflow can be understood through the composer–conductor–musician metaphor:

**The composer** defines the intended experience: purpose, constraints, desired outcomes, acceptable trade-offs and non-negotiable protections. Domain experts, users and responsible leaders contribute here.

**The conductor** coordinates implementation and verification: choosing which agents and tools perform work, determining the cadence, managing dependencies and requiring evidence at release gates. The conductor function may be performed collaboratively by humans and governed software.

**The musicians** execute specialised work: implementing functions, generating tests, analysing dependencies, scanning for vulnerabilities, preparing migrations and documenting the result. Musicians may be human or machine.

**The listening loop** is indispensable. Incident data, user feedback, observed outcomes and independent evaluations must flow back to the conductor and composer. A beautiful performance that fails its purpose is not success.

This model does not assume that machines are always musicians or humans are always composers. It describes functions and accountabilities, not permanent categories of worker.

## 8. Risk-based autonomy rather than indiscriminate replacement

An organisation should not delegate every programming task at the same autonomy level.

| Risk class | Illustrative work | Appropriate default |
| --- | --- | --- |
| Low | Formatting, bounded documentation changes, test scaffolding | Automated generation with routine checks |
| Moderate | Isolated feature implementation, dependency updates | Agent proposal, automated verification, human review |
| High | Authentication, payment logic, personal-data handling, multi-tenant isolation | Strong specifications, independent security checks, explicit accountable approval |
| Critical | Safety-related systems, irreversible operations, privileged infrastructure changes | Restricted or no autonomous release; specialised assurance and human authorisation |

The categories are illustrative. Actual classification must consider the system’s threat model, regulatory obligations, reversibility, blast radius and impact on affected people.

Autonomy should be earned by evidence for particular classes of work, not granted because a model performs impressively in demonstrations.

## 9. Measuring whether the shift actually reduces risk

The claim that machine-centred implementation is safer is a testable hypothesis, not a conclusion that can be assumed in advance.

Organisations should compare human-only, AI-assisted and governed autonomous workflows on representative tasks. Where practical, allocate comparable tasks randomly, control for complexity and assess results independently.

Useful measures include:

- **Escaped defects:** severity-weighted defects discovered after deployment.
- **Security quality:** verified vulnerabilities per completed change, including authorisation failures.
- **Change failure rate:** proportion of deployments requiring remediation.
- **Time to verified fix:** elapsed time from reported defect to proven remediation.
- **Recovery performance:** time needed to restore service after failure.
- **Specification traceability:** proportion of critical requirements linked to tests and evidence.
- **Review and rework effort:** total human and machine cost, including failures and supervision.
- **Operational outcomes:** whether the delivered change actually serves users.
- **Concentration risk:** degree of dependence on a single person, model, provider, credential or build path.

Do not equate faster code production with better engineering. Do not measure human development’s risks rigorously while accepting AI-generated output on faith—or vice versa.

## 10. Practical transition roadmap

**Stage 1 — Make intent explicit.** Capture critical business rules, trust boundaries and disallowed behaviours. Identify systems in which unrecorded developer assumptions create material risk.

**Stage 2 — Strengthen the independent checks.** Improve reproducible builds, test coverage of business invariants, static analysis, dependency management, secret scanning and release controls. NIST’s Secure Software Development Framework provides an established starting point [[6]](#ref-6).

**Stage 3 — Delegate bounded implementation.** Begin with low-blast-radius changes. Require AI systems to submit small, reviewable changes with explanations, tests and traceable dependencies.

**Stage 4 — Separate proposer from verifier.** Use independent tests and policy checks rather than accepting a coding agent’s own assertion that its work is correct. Where model-based review is used, avoid assuming that two instances of the same model are truly independent.

**Stage 5 — Introduce risk-tiered autonomy.** Permit more autonomous delivery only in domains where measured outcomes demonstrate acceptable risk and reversibility. Keep high-impact releases under explicit, appropriately qualified human accountability.

**Stage 6 — Close the operational feedback loop.** Feed production incidents, user outcomes, failed tests and changes in policy back into specifications and evaluators. Continuously reassess the autonomy boundaries.

## 11. Governance implications

As source-code production becomes less scarce, organisations may need to change what they hire, teach, procure and audit.

**Hiring and education** should place greater weight on problem definition, systems thinking, threat modelling, test design, debugging, formal reasoning, domain understanding and the ability to evaluate machine-produced work. The ability to write code remains valuable, especially when independent diagnosis or novel implementation is required; it may simply cease to be the default bottleneck.

**Procurement** should move beyond claims that a vendor uses experienced developers or a particular AI model. Purchasers should request evidence about requirements, provenance, security properties, testing, maintenance and incident response.

**Compliance** should concern the integrity of the whole development process. A signed commit or named reviewer alone does not establish suitability, privacy or safety.

**Accountability** cannot be delegated to a model. A legal entity and responsible people must still decide what software is allowed to do, what risks may be accepted and what happens when things go wrong.

There is an important ethical boundary: discussing the risks of human-centred coding systems must not become a pretext for treating people as disposable, reducing legitimate scrutiny or concealing safety incidents. The purpose of automation should be better outcomes and more effective human agency.

## 12. Conclusion: from writing code to governing behaviour

The next major shift in software engineering may not be the ability of machines to write code faster than people. It may be the realisation that human authorship was never an adequate basis for trust.

Human-coded systems can be unreliable because people are fallible, knowledge is fragmented and informal judgements are difficult to reproduce. AI-coded systems can be unreliable because models hallucinate, inherit biases, respond to malicious instructions and can scale errors rapidly. Neither category deserves an exemption from scrutiny.

The emerging engineering task is to define what a system is meant to accomplish, establish what it must never do, generate or construct candidate implementations, independently test them, limit their authority and continuously evaluate their effects.

In that model, the human contribution becomes more important in the dimensions that matter most: purpose, judgement, stewardship and responsibility. Machines may increasingly do the coding. Humans—and the institutions they create—must remain accountable for what the software does.

> The guiding question is no longer simply, “Who wrote this code?” It is, “What evidence justifies trusting this system to act?”

## References

1. <span id="ref-1"></span>CISA and FBI, [*Secure by Design Alert: Eliminating SQL Injection Vulnerabilities in Software*](https://www.cisa.gov/news-events/alerts/2024/03/25/cisa-and-fbi-release-secure-design-alert-urge-manufacturers-eliminate-sql-injection-vulnerabilities) (2024).
2. <span id="ref-2"></span>Veracode, [*2025 GenAI Code Security Report*](https://www.veracode.com/blog/genai-code-security-report/).
3. <span id="ref-3"></span>OWASP, [*Top 10 for Agentic Applications*](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/) (2025).
4. <span id="ref-4"></span>METR, [*Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/).
5. <span id="ref-5"></span>Google DORA, [*2025 State of AI-assisted Software Development Report*](https://dora.dev/research/2025/dora-report/).
6. <span id="ref-6"></span>NIST, [*SP 800-218: Secure Software Development Framework*](https://csrc.nist.gov/pubs/sp/800/218/final).

*This is an analytical position paper. Its risk taxonomy, implementation model and transition roadmap are arguments and recommendations, not findings established by the cited studies.*
