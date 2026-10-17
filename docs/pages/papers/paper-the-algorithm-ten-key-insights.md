---
layout: selfdriven
title: The Algorithm — 10 Key Insights - selfdriven Institute
permalink: /paper/the-algorithm-ten-key-insights
description: "Ten insights from Jon McNeill's The Algorithm (2026) applied to selfdriven and Octonomous: question, delete and simplify before you automate, and let autonomy emerge from verified purpose and constraints."
---

<style>
.prose .sd-steps{list-style:none;display:flex;flex-wrap:wrap;gap:10px 8px;padding:0;margin:14px 0 22px;counter-reset:sd-step}
.prose .sd-steps li{margin:0;display:inline-flex;align-items:center;gap:9px;padding:9px 16px 9px 12px;border:1px solid var(--line);border-radius:999px;background:var(--surface);font:600 15px/1.2 var(--font-display);letter-spacing:-.01em;counter-increment:sd-step}
.prose .sd-steps li::before{content:counter(sd-step,decimal-leading-zero);font:500 12px/1 var(--font-mono);color:var(--muted)}
.prose .sd-steps li.is-new{border-color:var(--orange);background:var(--paper);box-shadow:inset 0 0 0 1px var(--orange)}
.prose .sd-steps li.is-new::before{color:var(--orange)}
.sd-steps-key{display:flex;align-items:center;gap:9px;font-size:14px;color:var(--muted);margin:-8px 0 22px}
.sd-steps-key span{width:14px;height:14px;border-radius:999px;border:2px solid var(--orange);flex:0 0 auto}
.sd-contrast{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:26px 0 28px}
.sd-contrast>div{padding:20px 22px;border:1px solid var(--line);border-radius:8px;background:var(--surface)}
.sd-contrast>div.is-new{border-color:var(--orange);background:var(--paper);box-shadow:inset 0 0 0 1px var(--orange)}
.prose .sd-contrast p{margin:0;font-family:var(--font-display);font-size:1.2rem;font-weight:600;line-height:1.35;letter-spacing:-.02em}
.prose .sd-contrast .sd-contrast-label{margin:0 0 8px;font:700 12px/1.3 var(--font-body);letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.prose .sd-contrast .is-new .sd-contrast-label{color:var(--orange)}
@media (max-width:640px){.sd-contrast{grid-template-columns:1fr}}
</style>

# *The Algorithm* — 10 Key Insights

An executive summary of Jon McNeill's *The Algorithm* (2026) and its application to selfdriven and Octonomous

Book briefing · 17 October 2026 · About 1,400 words · [Download the briefing as Markdown](https://raw.githubusercontent.com/selfdriven-foundation/selfdriven-institute/main/resources/papers/the-algorithm-ten-key-insights.md)

> **Central thesis:** Transformational improvement comes not from making existing systems more efficient, but from fundamentally questioning why those systems exist.

McNeill draws on his experience as President of Tesla and his board roles at companies including General Motors and Lululemon. The book contrasts incremental optimisation with radical simplification and accelerated execution. [[1]](#ref-1)

*These ten points combine McNeill's documented five-step framework with broader implications and an interpretation for selfdriven and [Octonomous](https://octonomous.io). They are not presented as a chapter-by-chapter account of the book.*

## Ten key insights

Insights 1 to 5 follow McNeill's five steps in order. Insights 6 to 10 draw out their broader implications.

### 1. Question every requirement

Organisations accumulate rules, requirements and assumptions that nobody challenges. Rather than asking how to satisfy a requirement, ask why it exists.

**Key insight:** Authority is not evidence of necessity.

**Octonomous application:** Every requirement should have a documented rationale, owner and verifiable justification within a Verified Context Graph (VCG).

### 2. Delete before optimising

Most organisations try to improve processes that should not exist. Removing unnecessary work delivers more value than executing it faster.

**Key insight:** The best process is often no process.

**selfdriven application:** Instead of automating approval hierarchies, investigate whether those approvals are necessary. For example, replace routine central approvals with verified conditions that permit individuals and communities to act directly.

### 3. Simplify what remains

Complexity creates cost, delays, dependencies and opportunities for failure. Simplification should follow deletion, not precede it.

**Key insight:** Complexity is often evidence that fundamental assumptions remain unchallenged.

**Octonomous application:** Minimise agent workflows, dependencies and controller logic. A small, validated controller is preferable to an elaborate autonomous orchestration system.

### 4. Accelerate cycle time

Speed is not simply about working harder. It is about reducing the time between identifying a need, making a decision, acting and receiving feedback.

**Key insight:** Short feedback cycles increase the opportunity to learn and improve.

**selfdriven application:** Enable learners and communities to initiate projects, act and evaluate outcomes without waiting for unnecessary organisational coordination.

### 5. Automate last

This is arguably the book's most important insight for the AI era. Automating a broken process scales the problem.

**Key insight:** Automation amplifies the quality—or dysfunction—of the underlying system.

**Octonomous application:** AI agents should operate only after the desired outcome, applicable constraints and essential process have been established.

### 6. Challenge incremental thinking

Conventional continuous improvement often starts with existing structures and attempts to improve them. McNeill advocates more fundamental redesign. Instead of asking how to improve a process by 10%, ask what would make it radically simpler or faster.

**selfdriven application:** Rather than building a better learning management system, selfdriven can explore whether a traditional learning management system is necessary.

### 7. Constraints should be examined, not automatically accepted

Many apparent constraints are organisational conventions rather than physical, technical or legal necessities.

**Key insight:** Distinguish genuine constraints from inherited assumptions.

**Octonomous application:** Verified Context Graphs can help distinguish between immutable constraints, contractual obligations, organisational policies and discretionary preferences. This distinction is especially valuable for autonomous agents.

### 8. Push decisions closer to the action

A practical implication of radical simplification is reducing unnecessary decision-making layers. Every additional handoff introduces latency.

**selfdriven application:** Communities and individuals should have the authority to act within transparent, agreed boundaries. This aligns closely with the objective of self-actuating communities.

### 9. Culture determines execution

The five-step framework requires people to challenge established practices. That depends on a culture in which questioning assumptions is encouraged rather than punished.

**selfdriven application:** The selfdriven principles of being Curious, Caring, Constructive and Chill can provide a complementary cultural foundation. Curiosity challenges assumptions. Caring ensures that simplification does not become indifferent to human consequences.

### 10. Transformation is a continuous process

The Algorithm should not be treated as a one-off restructuring exercise. As organisations grow, complexity returns.

**Octonomous application:** Agents could continuously identify redundant workflows, unnecessary dependencies and opportunities for simplification. Importantly, proposed changes should be tested against verified constraints before implementation.

## From The Algorithm to Octonomous

McNeill's framework becomes particularly interesting when extended beyond human-managed organisations.

### The original model

<ol class="sd-steps" aria-label="The Algorithm, five steps">
<li>Question</li>
<li>Delete</li>
<li>Simplify</li>
<li>Accelerate</li>
<li>Automate</li>
</ol>

This is primarily a methodology for transforming organisations and operations.

### The Octonomous extension

<ol class="sd-steps" aria-label="The Octonomous extension, eight steps">
<li class="is-new">Understand</li>
<li class="is-new">Verify</li>
<li>Question</li>
<li>Delete</li>
<li>Simplify</li>
<li>Accelerate</li>
<li class="is-new">Autonomise</li>
<li class="is-new">Validate</li>
</ol>
<p class="sd-steps-key"><span aria-hidden="true"></span>Added or changed in the Octonomous extension</p>

The extension introduces three important capabilities.

#### 1. Verified understanding

Before questioning existing systems, an agent must understand their purpose, relationships, dependencies and constraints. Verified Context Graphs provide the contextual foundation.

#### 2. Autonomous execution

Once unnecessary complexity has been removed, autonomous agents can execute remaining activities within explicit constraints. Verified Code Controllers (VCCs) provide a mechanism for enforcing those boundaries.

#### 3. Continuous validation

Autonomous execution must remain subject to verification, accountability and feedback. The system should continuously check that actions remain aligned with their original purpose and permitted conditions.

## Example: a community learning project

Consider a traditional process for establishing a student-led community project.

| Traditional organisation | selfdriven + Octonomous |
|---|---|
| Submit project proposal | Define intended outcome |
| Teacher reviews | Verify essential constraints |
| Department approves | Remove unnecessary approvals |
| Administrator allocates resources | Match available resources |
| Project manager coordinates | Autonomous coordination |
| Participants submit reports | Capture evidence during activity |
| Committee evaluates success | Validate outcomes continuously |

The objective is not simply to accelerate the approval workflow. It is to create an environment in which **individuals can initiate and undertake meaningful activities without unnecessary institutional intervention**.

Human involvement remains essential for safeguarding, judgement, relationships and situations requiring accountable oversight.

## The deeper implication

There is an important distinction between McNeill's framework and what Octonomous could become.

<div class="sd-contrast">
<div><p class="sd-contrast-label">The Algorithm</p><p>Optimises how organisations operate.</p></div>
<div class="is-new"><p class="sd-contrast-label">Octonomous</p><p>Questions whether the organisation needs to operate in that way at all.</p></div>
</div>

That difference becomes significant as AI capabilities increase.

Traditional automation assumes: *an organisation defines processes, and technology executes them.*

Autonomous systems enable a different model: *an organisation defines purpose, values and constraints, and autonomous capabilities help determine how outcomes can be achieved.*

In that model, detailed centralised process design becomes less necessary. However, purpose, accountability and validation become more important—not less.

## A proposed principle for Octonomous

> **Never autonomise a process that has not first been questioned, simplified and validated.**

This extends into a broader architectural principle:

> **Autonomy should emerge from verified purpose and constraints, rather than the automation of inherited processes.**

This could become one of the foundational principles of the Octonomous framework.

## A critical distinction: efficiency versus purpose

There is one limitation worth considering. The Algorithm is fundamentally oriented towards performance, speed, efficiency and growth. Those are useful, but they are not necessarily the ultimate objectives of a community.

A community may deliberately preserve activities that appear inefficient because they create relationships, trust, learning or belonging.

For example, an AI agent might be able to organise a community event instantly. But the collaborative act of organising the event may itself create substantial social value. Removing that human participation could improve operational efficiency while undermining the community's purpose.

**This is where selfdriven offers an important extension to The Algorithm.** Rather than pursuing maximum efficiency, the objective becomes:

> **Maximise human agency and meaningful outcomes while minimising unnecessary complexity.**

That is a fundamentally different optimisation target.

## Conclusion

The most useful insight from *The Algorithm* for selfdriven and Octonomous is the sequencing of transformation.

> Don't automate first. Question first. Simplify first. Understand what is genuinely valuable. Then apply autonomy.

**A proposed synthesis:** *The Algorithm* provides a method for removing unnecessary organisational complexity. selfdriven provides the human and community purpose. Octonomous provides the verified autonomous infrastructure through which that purpose can be realised.

Together, they suggest a transition from **organisations that manage people and processes** to **systems that enable people and communities to self-actuate**.

## Source

1. <span id="ref-1"></span>Jon McNeill, [*The Algorithm: The Hypergrowth Formula that Transformed Tesla, Lululemon, General Motors and SpaceX*](https://www.penguin.com.au/books/the-algorithm-9781529147209) (Ebury Edge, Penguin Books Australia, 2026). Published in the United States by [Portfolio](https://www.penguinrandomhouse.com/books/799958/the-algorithm-by-jon-mcneill/9798217177547/).
