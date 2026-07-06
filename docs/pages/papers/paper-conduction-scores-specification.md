---
layout: selfdriven
title: Specification - Conducting Scores - selfdriven Institute
permalink: /paper/conducting-scores/specification
description: "A Conducting Score Specification."
---

# Conducting Score Specification (CSS)

Version 0.1 Draft

Status: Proposal

Copyright © Selfdriven Institute



# Abstract

The Conducting Score Specification (CSS) defines an open, machine-readable and human-readable format for describing how people, AI agents, systems and organisations coordinate their activities to achieve shared outcomes.

CSS provides the common language for AI-native organisations.

Rather than describing isolated tasks or workflows, CSS describes coordinated organisational capabilities.

A Conducting Score is therefore the primary operational object of an AI-native organisation.



# 1. Goals

CSS is designed to be:

- Human readable
- Machine readable
- Version controlled
- Extensible
- Vendor neutral
- Auditable
- Continuously executable



# 2. Design Principles

## Human Conducted

Humans remain accountable.



## AI Assisted

AI augments rather than replaces judgement.



## Evidence Native

Execution automatically generates evidence.



## Event Driven

Organisations respond continuously to events.



## Adaptive

Scores evolve while preserving governance.



## Declarative

Scores describe desired behaviour rather than implementation.



# 3. Core Model

```text
Conducting Score
│
├── Identity
├── Purpose
├── Outcomes
├── Principles
├── Participants
├── Decisions
├── Activities
├── Events
├── Risks
├── Controls
├── Evidence
├── Metrics
├── Learning
└── Runtime
```



# 4. Identity

Every Score SHALL contain

- Identifier
- Name
- Version
- Owner
- Status
- Conducting Area

Example

```yaml
identity:

  id: score.projects.selfdriven.foundation

  version: 1.2

  area: Projects

  owner: Mark

  status: Active
```



# 5. Purpose

Describes why the capability exists.

Required

- Purpose
- Mission Contribution



# 6. Outcomes

Defines success.

Each outcome SHALL contain

```yaml
id:

description:

metric:

target:
```



# 7. Principles

Principles constrain behaviour.

Examples

- Human Conducted
- AI Assisted
- Privacy First
- Security by Design
- Open Standards



# 8. Participants

Participants MAY include

Humans

AI Agents

Organisations

Services

Robotics

External Systems

Each participant SHALL define

Identity

Role

Authority

Capabilities



# 9. Decisions

Every decision SHALL define

Authority

Delegation

Approval Rules

Evidence



# 10. Activities

Activities represent coordinated work.

Each activity SHALL define

```yaml
activity:

id:

purpose:

owner:

participants:

inputs:

outputs:

constraints:

success:
```



# 11. Events

Everything happens because something occurred.

Examples

```yaml
PullRequestMerged

SecurityAlert

NewStudent

InvoicePaid

AIRecommendation

GovernanceVote
```

Events MAY trigger activities.



# 12. Runtime

The runtime evaluates

Events

Conditions

Policies

Permissions

Delegations

Health



# 13. Risks

Each risk SHALL define

Likelihood

Impact

Treatment

Owner

Review Frequency



# 14. Controls

Controls link Scores to governance.

Examples

ISO9001

ISO27001

ISO42001

ISO22301

SOC2

NIST



# 15. Evidence

Evidence SHALL be immutable.

Each evidence object contains

```yaml
timestamp:

source:

hash:

actor:

type:
```



# 16. Metrics

Metrics define health.

Examples

Progress

Quality

Security

Budget

AI Confidence

Risk

Customer Satisfaction



# 17. Learning

Every execution SHOULD improve future execution.

Learning includes

Lessons

Recommendations

Patterns

Anti-patterns



# 18. Views

The same Score may generate

Executive Dashboard

Kanban

Gantt

Risk Register

Audit Report

ISO27001 Evidence

SOC2 Evidence

Meeting Agenda

Weekly Report

AI Briefing



# 19. Execution Model

```
Event

↓

Evaluate

↓

Recommend

↓

Approve

↓

Execute

↓

Observe

↓

Generate Evidence

↓

Learn

↓

Improve
```



# 20. Human Accountability

Humans remain accountable for

Purpose

Delegation

Risk Acceptance

Ethics

Governance

AI may execute delegated authority.

AI may never own accountability.



# 21. Compliance

CSS is designed to support

ISO9001

ISO27001

ISO42001

ISO22301

ISO31000

SOC2

without duplication.



# 22. Extensibility

Additional modules MAY extend CSS.

Examples

CSS-GOV

CSS-IDENTITY

CSS-EVIDENCE

CSS-RISK

CSS-LEARNING

CSS-IOT

CSS-HEALTHCARE

CSS-EDUCATION

CSS-GOVERNMENT



# 23. Reference Runtime

A Conducting Engine SHALL

Load Scores

Validate Scores

Resolve Participants

Execute Activities

Collect Evidence

Measure Health

Recommend Improvements

Produce Views

Maintain Audit History



# 24. Future Direction

The Conducting Score Specification aims to become an open organisational standard for the Intelligence Age.

Just as HTML describes documents, BPMN describes business processes, and OpenAPI describes services, CSS describes how intelligent organisations coordinate humans, AI agents and systems under continuous governance.