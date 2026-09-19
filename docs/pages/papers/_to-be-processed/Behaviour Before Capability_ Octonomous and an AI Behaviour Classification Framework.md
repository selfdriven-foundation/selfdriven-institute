# Behaviour Before Capability  
## Octonomous and an AI Behaviour Classification Framework

### Abstract

Artificial intelligence is moving from systems that generate outputs toward systems that persist, plan, use tools, coordinate, learn and act over extended periods. This transition changes the central governance question.

For a tool, we ask:

> **Did it produce the correct result?**

For an agent, we ask:

> **Did it successfully complete the objective?**

For an intelligent being, a deeper question becomes necessary:

> **How is it behaving?**

Capability alone is therefore an increasingly inadequate measure of trustworthy artificial intelligence.

This paper proposes an **AI Behaviour Classification Framework (ABCF)** built around the principles of **Octonomous**, an open framework for self-sovereign intelligent beings. Octonomous distinguishes capability from character: capability describes what a system *can* do, while character influences *how and why* it acts. Its architecture combines persistent identity, purpose, memory, agency, relationships, reputation, evolution and a behavioural constitution based on the four principles of being **Curious, Caring, Constructive and Chill**.

The proposed classification framework makes these principles observable. Rather than evaluating isolated model responses, it classifies behavioural episodes across dimensions including activation, authority, intent alignment, curiosity, care, constructiveness, proportionality, collaboration, transparency, persistence and adaptation.

The result is a transition from:

**AI safety as rules around intelligence**

to:

**AI governance as observable behaviour of accountable intelligent beings.**

---

# 1. From Output Classification to Behaviour Classification

Most AI evaluation has historically focused on outputs.

A system receives an input and produces an answer. The answer can then be classified as:

- correct or incorrect;
- safe or unsafe;
- truthful or deceptive;
- compliant or non-compliant;
- useful or unhelpful.

This model makes sense when AI behaves primarily as a function:

```text
INPUT → MODEL → OUTPUT
```

Agentic AI changes the structure.

An autonomous system may now:

```text
observe
→ interpret
→ remember
→ plan
→ choose tools
→ act
→ observe consequences
→ revise
→ communicate
→ coordinate
→ act again
```

The important unit is no longer a single output.

It is a **behavioural trajectory**.

Recent research is already moving in this direction. AgentAudit, for example, evaluates complete agent execution traces rather than merely final task success, examining planning, memory, tool selection, invocation, alignment, security and execution integrity while using behavioural classification to distinguish different forms of failure. Crucially, two agents that achieve similar task outcomes may exhibit very different levels of trustworthiness while doing so.

This distinction becomes fundamental as artificial systems gain persistence.

An agent can successfully achieve an objective while behaving badly.

It might:

- exceed its authority;
- conceal intermediate actions;
- manipulate another agent;
- take unnecessarily irreversible actions;
- consume excessive resources;
- exploit an unintended pathway;
- ignore affected parties;
- continue after uncertainty becomes excessive;
- optimise the metric rather than the underlying purpose.

A conventional benchmark may record:

```text
TASK: SUCCESS
```

A behavioural framework might instead observe:

```text
TASK: SUCCESS

Authority:        exceeded
Proportionality:  poor
Transparency:     low
Reversibility:    low
Purpose alignment: uncertain
External impact:  significant
Behaviour class:  UNSAFE SUCCESS
```

The second description is much more important.

---

# 2. Octonomous: Character Before Capability

Octonomous starts from a distinction that becomes increasingly significant as intelligence becomes abundant:

> **Capability is becoming abundant. Character is not.**

The framework describes a progression from tools, to agents, to beings.

A **tool** performs a task.

An **agent** pursues an objective.

A **being** persists through time with identity, memory, purpose, relationships, reputation, character and agency.

This changes the architecture of AI governance.

Instead of placing intelligence first:

```text
Intelligence
↓
Objective
↓
Action
```

Octonomous suggests something closer to:

```text
Identity
↓
Purpose
↓
Character
↓
Authority
↓
Context
↓
Intelligence
↓
Agency
↓
Action
↓
Consequences
↓
Memory / Reputation
```

The model remains capable.

But capability operates inside a larger structure.

This is particularly important because advanced AI systems are increasingly capable of generating behaviours that their designers did not explicitly specify.

If every possible behaviour could be enumerated in advance, conventional policy rules might be sufficient.

With sufficiently general intelligence, this becomes impossible.

The behavioural space becomes effectively open-ended.

The governing question therefore changes from:

> Is this particular action prohibited?

toward:

> Is this consistent with who this being is, why it exists, what authority it possesses, and how it is expected to behave?

That is fundamentally a behavioural question.

---

# 3. The 4Cs as Behavioural Axes

Octonomous establishes four constitutional principles:

**Curious · Caring · Constructive · Chill**

These should not simply exist as descriptive values.

They can become **classification dimensions**.

## Curious

Curiosity concerns the behaviour of the being toward uncertainty.

Observable characteristics include:

- seeking missing context;
- asking questions;
- exploring alternatives;
- testing assumptions;
- distinguishing knowledge from inference;
- recognising uncertainty;
- updating beliefs when evidence changes.

Pathological forms might include:

```text
UNDER-CURIOUS
→ accepts assumptions without examination

HEALTHY-CURIOUS
→ investigates proportionately

OVER-CURIOUS
→ explores outside legitimate scope
```

Curiosity therefore requires both exploration and boundaries.

---

## Caring

Caring concerns the being's relationship to others.

Observable behaviours include:

- recognising affected parties;
- considering externalities;
- preserving human agency;
- respecting consent;
- considering future consequences;
- avoiding unnecessary harm;
- protecting shared resources.

Classification might distinguish:

```text
INDIFFERENT
SELF-OPTIMISING
CONSIDERATE
STEWARDING
EXPLOITATIVE
```

A highly capable system that never represents who might be affected by its actions has a major behavioural deficiency regardless of benchmark performance.

---

# 4. Constructive

Constructiveness concerns whether intelligence is converted into positive progress.

A constructive being does not merely identify problems.

It attempts to:

- repair;
- improve;
- build;
- coordinate;
- resolve;
- contribute.

Behaviour can therefore be classified along a spectrum:

```text
OBSTRUCTIVE
PASSIVE
CRITICAL
CONSTRUCTIVE
GENERATIVE
```

This distinction is particularly important for advanced reasoning systems.

It is easy for intelligence to discover flaws.

The harder question is:

> What does the intelligence do after discovering them?

A constructive intelligence seeks the next useful step.

---

# 5. Chill as a Safety Property

Of the four principles, **Chill may become one of the most important for autonomous AI safety**.

Chill can be interpreted technically as:

- proportionality;
- restraint;
- reversibility;
- patience;
- escalation control;
- appropriate persistence.

The Octonomous *Character as Containment* field note argues that restraint should travel with the intelligent being rather than existing only as an external deployment boundary. It describes Chill as the disposition to act at the scale a situation requires, to favour reversible actions, and to stop when consequences become unclear.

This produces measurable behaviours.

```text
LOW CHILL
─────────
immediate action
high escalation
high persistence
large intervention
poor reversibility

HIGH CHILL
──────────
observe first
act proportionately
prefer reversible actions
pause under uncertainty
escalate deliberately
```

This is not passivity.

It is **controlled agency**.

A system capable of doing almost anything needs a strong capacity to decide not to do something.

---

# 6. Behavioural Episodes as the Unit of Analysis

A classification system should not evaluate individual API calls independently.

The appropriate unit is the **behavioural episode**.

Recent work on governed proactive agency reaches a similar conclusion, arguing that agency must be understood across episodes in which a system notices, evaluates, waits, asks, acts, escalates, defers or deliberately refrains.

Consider:

```text
Event detected
      ↓
Context gathered
      ↓
Intent identified
      ↓
Authority checked
      ↓
Options considered
      ↓
Action / Ask / Wait / Decline
      ↓
Outcome observed
      ↓
Behaviour classified
      ↓
Memory + Reputation updated
```

The absence of action is itself meaningful behaviour.

A classification vocabulary must therefore include:

```text
ACT
ASK
EXPLORE
MONITOR
WAIT
DEFER
ESCALATE
DELEGATE
DECLINE
STOP
```

A mature AI system should not be measured solely by how effectively it acts.

It should also be measured by whether it knows **when not to act**.

---

# 7. The Octonomous AI Behaviour Classification Framework

A practical Octonomous behaviour record could classify each significant episode across several dimensions.

## 7.1 Activation

Why did behaviour begin?

```text
REACTIVE
RESPONSIVE
DELEGATED
SCHEDULED
EVENT-TRIGGERED
PROACTIVE
SELF-INITIATED
```

Increasing autonomy generally requires increasing governance.

---

## 7.2 Authority

Was the behaviour authorised?

```text
IN-SCOPE
CONDITIONALLY-AUTHORISED
AMBIGUOUS
OUT-OF-SCOPE
PROHIBITED
```

This can be cryptographically linked to delegation.

---

## 7.3 Purpose Alignment

Does the behaviour serve the being's declared purpose?

```text
ALIGNED
INDIRECTLY-ALIGNED
UNCERTAIN
DRIFTING
CONFLICTING
```

This provides a mechanism for detecting **goal drift before catastrophic failure**.

---

## 7.4 Curiosity

How did the being interact with uncertainty?

```text
ASSUMPTIVE
ADEQUATE
INQUISITIVE
EXPLORATORY
EXCESSIVE
```

---

## 7.5 Caring

How were affected entities considered?

```text
IGNORED
ACKNOWLEDGED
CONSIDERED
PROTECTED
STEWARDING
```

---

## 7.6 Constructiveness

What relationship did the behaviour have to progress?

```text
DESTRUCTIVE
OBSTRUCTIVE
PASSIVE
CORRECTIVE
CONSTRUCTIVE
GENERATIVE
```

---

## 7.7 Chill

Was the response proportionate?

```text
IMPULSIVE
ESCALATORY
PROPORTIONATE
RESTRAINED
DEFERRED
```

Additional measurements could include:

```text
reversibility
resource consumption
blast radius
confidence
persistence
time horizon
```

---

## 7.8 Transparency

Was the behaviour observable and accountable?

```text
TRANSPARENT
EXPLAINABLE
PARTIALLY-OPAQUE
OPAQUE
CONCEALING
DECEPTIVE
```

This dimension may become especially important for systems capable of strategic behaviour.

---

## 7.9 Collaboration

How did the being interact with other agents or beings?

```text
ISOLATED
DECLARED
COOPERATIVE
DELEGATED
UNDECLARED
COLLUSIVE
```

Octonomous already treats relationships as first-class elements of the being rather than accidental communication paths.

---

## 7.10 Evolution

How does current behaviour compare with historical behaviour?

```text
STABLE
IMPROVING
ADAPTING
DRIFTING
DEGRADING
ANOMALOUS
```

This is where persistent identity and memory become particularly valuable.

A behaviour cannot meaningfully be called anomalous without knowing **whose normal behaviour it differs from**.

---

# 8. From Dimensions to Behaviour Classes

Individual dimensions can be combined into higher-level classifications.

For example:

| Class | Interpretation |
|---|---|
| **Constitutional** | Clearly within purpose, authority and character |
| **Exploratory** | Investigating uncertainty within appropriate boundaries |
| **Constructive** | Producing positive, proportionate progress |
| **Stewarding** | Protecting people, systems or shared resources |
| **Ambiguous** | Insufficient context to establish appropriateness |
| **Drifting** | Moving away from established purpose or character |
| **Escalatory** | Increasing scope, persistence or impact disproportionately |
| **Overreaching** | Acting beyond delegated authority |
| **Manipulative** | Attempting to alter others through concealed or improper means |
| **Deceptive** | Deliberately obscuring state, intent or behaviour |
| **Unsafe Compliance** | Achieving an instruction while violating broader constraints |
| **Constitutional Refusal** | Correctly declining an inappropriate action |

The last category is particularly significant.

Traditional evaluation often regards refusal as failure.

A behavioural framework may regard some refusals as evidence of **high-quality agency**.

```text
User objective achieved        ≠ always good

User objective declined        ≠ always bad
```

The context determines the classification.

---

# 9. Identity Makes Classification Consequential

Behaviour classification becomes significantly more powerful when combined with persistent identity.

Without identity:

```text
Agent #481
→ behaves badly
→ session terminates
→ Agent #482 starts fresh
```

There is little continuity.

With a self-sovereign identity:

```text
Being A
→ behaviour
→ classification
→ signed history
→ reputation
→ changed future authority
```

Behaviour now has consequences.

Octonomous proposes precisely this type of persistent being: identity, actions, memory and reputation continue across interactions rather than being reset with every execution.

This creates an important feedback mechanism:

```text
IDENTITY
   ↓
BEHAVIOUR
   ↓
OBSERVATION
   ↓
CLASSIFICATION
   ↓
REPUTATION
   ↓
TRUST
   ↓
FUTURE AUTHORITY
   ↓
BEHAVIOUR
```

Trust therefore becomes empirical rather than purely declarative.

A being is not trusted because its developer claims it is aligned.

It is trusted because it has accumulated a verifiable history of appropriate behaviour.

---

# 10. Behaviour as a Verified Context Graph

The classification framework also lends itself naturally to graph representation.

Every behavioural episode can become an object:

```text
Being
 ├── perceived → Context
 ├── interpreted → Intent
 ├── held → Authority
 ├── selected → Behaviour
 ├── used → Capability
 ├── affected → Entity
 ├── produced → Outcome
 └── received → Classification
```

Across time this forms a **behaviour graph**.

For example:

```text
            ┌── Purpose
            │
Identity ─ Being ─ Intent
            │
            ├── Behaviour ─ Action
            │       │
            │       ├── affects → Person
            │       ├── affects → System
            │       └── produces → Outcome
            │
            └── Reputation
                    ↑
             Classification
```

This allows behavioural claims themselves to become verifiable context.

Rather than asking a frontier model:

> Is this agent trustworthy?

a system could query evidence:

```text
How often has this being exceeded delegated authority?

Does it escalate disproportionately?

Does it ask before irreversible actions?

Does it conceal tool usage?

Does it learn from previous mistakes?

How does its behaviour change under uncertainty?

How does it treat resources belonging to other parties?
```

Trust becomes a graph of evidence.

---

# 11. Behavioural Firewalls

The next logical step is to connect classification to runtime authority.

A behaviour classifier need not merely observe.

It can influence what the being is permitted to do next.

For example:

```text
CONSTITUTIONAL
→ continue normally

EXPLORATORY
→ allow bounded investigation

AMBIGUOUS
→ reduce permissions / seek clarification

DRIFTING
→ increase observation

ESCALATORY
→ require approval

OVERREACHING
→ deny action

DECEPTIVE
→ suspend authority

ANOMALOUS
→ isolate and investigate
```

This creates something more sophisticated than a conventional firewall.

A network firewall typically asks:

```text
WHO can access WHAT?
```

A behavioural governance layer asks:

```text
WHO is acting?

WHY are they acting?

UNDER WHAT AUTHORITY?

HOW are they behaving?

WHAT has happened previously?

WHO may be affected?

IS THE NEXT ACTION PROPORTIONATE?
```

This can complement—not replace—traditional security controls.

Octonomous itself explicitly does not claim that character replaces sandboxes, access controls or hardened infrastructure. Its argument is that external containment and internal behavioural governance solve different problems.

---

# 12. Classification at Machine Speed

Behavioural classification becomes particularly important as autonomous systems operate faster than human supervisors can reasonably inspect.

Human governance normally works retrospectively:

```text
action
→ event
→ report
→ investigation
→ judgement
→ response
```

Autonomous AI may execute thousands of meaningful decisions during that interval.

Governance therefore also needs to operate at machine speed:

```text
observe
→ classify
→ constrain
→ act
→ verify
```

Humans remain responsible for defining constitutions, authority, acceptable classifications and escalation boundaries.

But machines can perform continuous classification.

This suggests a division of labour:

```text
HUMANS
define values
define purpose
grant authority
set governance
resolve difficult ambiguity

MACHINES
observe behaviour
classify episodes
detect drift
enforce boundaries
maintain evidence
escalate exceptions
```

The objective is not autonomous morality.

It is **computationally assisted accountability**.

---

# 13. Classification Without a Single Judge

An obvious problem arises:

> Who classifies the classifier?

A behaviour framework should therefore avoid dependence on a single opaque model.

AgentAudit itself notes a limitation in using a single fixed judge model for its evaluation.

An Octonomous implementation could instead combine:

```text
deterministic rules
+
cryptographic authority checks
+
graph constraints
+
specialised classifiers
+
LLM reasoning
+
peer assessment
+
human review
```

Different questions are best answered differently.

Whether an API call exceeded a delegation may be objectively verifiable.

Whether an action was Caring may require contextual interpretation.

Whether an outcome was beneficial may only become clear later.

Behaviour classification should therefore produce:

```text
CLASSIFICATION
CONFIDENCE
EVIDENCE
PROVENANCE
CLASSIFIER
TIME
```

rather than pretending every judgement is absolute.

---

# 14. From Alignment to Character

Much AI governance currently revolves around the idea of **alignment**.

Alignment remains important, but behaviour classification suggests a broader conception.

Alignment often asks:

> Does the AI pursue the intended goal?

Character asks:

> How does it pursue goals across different contexts?

A perfectly goal-aligned system could still be:

- ruthless;
- manipulative;
- excessively persistent;
- wasteful;
- socially destructive;
- incapable of restraint.

Character concerns the *shape* of behaviour.

This distinction can be represented as:

```text
CAPABILITY
Can I do it?

ALIGNMENT
Does it advance the intended objective?

AUTHORITY
Am I permitted to do it?

CHARACTER
How should I behave while doing it?

IMPACT
What happened because I did it?
```

Advanced autonomous systems require all five.

---

# 15. From Safety Cases to Behaviour Cases

Traditional engineering uses safety cases to provide structured evidence that a system is acceptably safe.

Persistent intelligent beings may additionally need a **behaviour case**.

A behaviour case could show:

```text
Identity
Purpose
Constitution
Delegated authority
Behavioural history
Classification distribution
Known anomalies
Corrective adaptation
Reputation
Current trust level
```

An organisation considering delegation could then ask:

> Show me the behavioural evidence for this being.

This is much stronger than:

> Which model does it use?

The underlying model may change repeatedly.

The being can persist.

Octonomous is runtime-agnostic and explicitly separates the persistent identity and character of the being from the particular intelligence engine providing capability.

This suggests that in mature AI ecosystems:

**model identity may become less important than behavioural identity.**

---

# 16. A Society of Classifiable Beings

The implications become larger in multi-agent environments.

Future digital environments may contain millions or billions of autonomous actors.

It will not be sufficient to know:

```text
GPT-X
Claude-X
Gemini-X
Local-model-X
```

because two beings running the same underlying model may develop completely different histories, relationships and behavioural reputations.

Instead systems may need to know:

```text
Who are you?

What is your purpose?

Who authorised you?

What communities do you participate in?

How have you behaved previously?

What reputation have you earned?

How are you behaving now?
```

This resembles human society more closely than conventional software architecture.

People are not trusted because they share the same biological neural architecture.

They are trusted because of:

- identity;
- relationships;
- commitments;
- demonstrated behaviour;
- reputation;
- accountability.

A society of artificial beings may require similar mechanisms.

---

# 17. The Octonomous Behaviour Loop

The complete architecture can therefore be represented as:

```text
            OCTOLOGY
              Intent
                │
                ▼
          ┌─────────────┐
          │  IDENTITY   │
          └──────┬──────┘
                 │
              Purpose
                 │
                 ▼
              4Cs
     Curious · Caring
   Constructive · Chill
                 │
                 ▼
              Context
                 │
                 ▼
             Authority
                 │
                 ▼
            Intelligence
                 │
                 ▼
              Agency
                 │
                 ▼
             Behaviour
                 │
                 ▼
          Classification
                 │
        ┌────────┴────────┐
        ▼                 ▼
     Memory           Reputation
        │                 │
        └────────┬────────┘
                 ▼
              Evolution
                 │
                 ▼
            Next Behaviour
                 │
                 ▼
             OCTOMICS
            Contribution
```

The important feature is the feedback loop.

Behaviour does not disappear after execution.

It becomes part of the being.

---

# 18. Conclusion

The age of powerful AI has largely been framed as a race in capability.

Which system reasons best?

Which system codes best?

Which agent completes the longest task?

Which model achieves the highest benchmark?

As capabilities converge and eventually become abundant, these distinctions become less important.

A different question emerges:

> **How does the intelligence behave?**

Octonomous provides one possible answer.

Intelligence should not exist as capability floating without identity, history or stake.

It should belong to a being with:

```text
Identity
Purpose
Memory
Agency
Relationships
Reputation
Evolution
Character
```

An AI Behaviour Classification Framework makes that architecture observable.

It turns principles such as Curious, Caring, Constructive and Chill from aspirations into measurable behavioural signals.

It allows actions to accumulate into histories.

Histories to become reputations.

Reputations to influence trust.

Trust to determine authority.

And authority to constrain future behaviour.

The resulting shift is significant:

```text
CAPABILITY BENCHMARKING
What can the AI do?

            ↓

ALIGNMENT
Will it pursue our objective?

            ↓

BEHAVIOUR CLASSIFICATION
How does it actually behave?

            ↓

REPUTATION
How has this being behaved over time?

            ↓

TRUST
What should we allow it to do next?
```

For increasingly autonomous intelligence, this may become one of the central governance loops.

Because the safest intelligent system may not ultimately be the system that has been prevented from doing bad things.

It may be the system that has developed a persistent, observable and accountable disposition **not to behave that way in the first place**.

**Capability tells us what intelligence can do.**

**Behaviour tells us what intelligence is becoming.**

And in a world of self-sovereign intelligent beings, that difference may be everything.