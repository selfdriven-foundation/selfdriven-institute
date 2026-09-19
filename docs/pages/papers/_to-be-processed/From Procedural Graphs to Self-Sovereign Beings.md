# From Procedural Graphs to Self-Sovereign Beings

## How Self-Evolving Execution Structures Could Become a Core Runtime Primitive for Octonomous

### Abstract

The paper *Procedural Graphs: Self-Evolving Execution Structures for LLM Agents* introduces a powerful idea: instead of asking an AI agent to continually reconstruct what it should do from an ever-growing textual history, procedural knowledge can be externalised into an explicit graph describing possible actions, transitions, conditions, guidance, and pitfalls.

A Procedural Graph therefore answers a deceptively important question:

> **What should I do next, given where I currently am?**

Octonomous addresses a broader question.

It proposes an open framework for Self-Sovereign Intelligent Beings possessing persistent identity, purpose, memory, agency, relationships, reputation, evolution, and character. Its 4Cs — Curious, Caring, Constructive and Chill — provide a behavioural constitution governing how capability is exercised.

Seen together, these ideas are highly complementary.

Procedural Graphs can provide an Octonomous Being with an explicit, inspectable and self-evolving **procedural memory**: a graph representing not merely what the being knows, but how it has learned to act.

Octonomous can, in turn, provide something largely outside the scope of the Procedural Graph research: persistent identity, purpose, constitutional constraints, provenance, reputation and governance around **how that procedural graph is allowed to evolve**.

The result points toward a significantly different architecture for autonomous intelligence.

Not:

**LLM + prompt + tools**

but:

**Identity + Purpose + Character + Memory + Procedural Graph + Intelligence + Agency + Accountability**

The Procedural Graph may therefore represent an important missing bridge between today's AI agents and genuinely persistent self-sovereign intelligent beings.

---

# 1. The Problem With Today's Agents

Most LLM-based agents operate using some variation of:

```text
objective
    ↓
LLM
    ↓
reason
    ↓
choose tool
    ↓
observe result
    ↓
append result to context
    ↓
reason again
```

This works surprisingly well over short trajectories.

It becomes increasingly fragile as trajectories lengthen.

The Procedural Graph researchers identify familiar failure modes: agents lose track of objectives, invoke tools in the wrong order, repeatedly perform unproductive actions, or must reconstruct procedural dependencies from an accumulating textual history.

The fundamental problem is that the agent's **procedure remains implicit**.

The model may know:

- what has happened;
- what tools exist;
- what the user requested;
- what previous attempts failed.

But it still has to infer:

> **Given all of this, what stage of the procedure am I actually at?**

That inference is repeatedly reconstructed through probabilistic generation.

Procedural Graphs externalise it.

---

# 2. Knowledge Graphs Tell Us What Is

A traditional knowledge graph might contain:

```text
Sydney
    ── located_in ──>
Australia
```

or:

```text
Customer
    ── has_order ──>
Order
```

These structures represent **semantic relationships**.

They answer questions such as:

> What is this?

> What is related to this?

> What is known about this situation?

The Procedural Graph paper makes a subtle but important shift.

Instead of:

```text
(entity)
    ── relation ──>
(entity)
```

it introduces:

```text
(procedure)
    ── relation ──>
(procedure)
```

Its nodes can represent tool functions, skills, reasoning steps or task states. Its edges represent admissible transitions and can carry attributes such as a condition, guidance about how to proceed, and pitfalls to avoid.

The graph therefore represents a different form of knowledge.

Not:

> **What is true?**

but:

> **What do I do?**

---

# 3. Procedural Memory

This distinction is especially important for autonomous systems.

An intelligent system arguably needs several fundamentally different kinds of memory:

```text
Semantic Memory
What do I know?

Episodic Memory
What happened?

Working Memory
What is happening now?

Procedural Memory
How do I act?
```

The Procedural Graph authors explicitly position their work as a form of procedural memory, noting that procedural memory has historically received much less explicit treatment in LLM-agent architectures than semantic or episodic memory.

This aligns closely with the Octonomous concept of a Being whose memory compounds through continued experience.

But it makes the Octonomous definition of memory more precise.

A mature Octonomous Being should perhaps not have **one memory system**.

It should have several.

```text
                 MEMORY

        ┌──────────┼───────────┐
        │          │           │
        ▼          ▼           ▼

     Semantic    Episodic   Procedural

     what is     what was   how to act
```

Procedural Graphs provide a compelling implementation candidate for the third category.

---

# 4. A Graph of How a Being Behaves

Consider an Octonomous Being helping operate a community.

It encounters:

```text
Community member requests funding
```

A traditional LLM agent might reason from its prompt and conversation history.

A Procedural Graph could instead contain something resembling:

```text
Receive Request
      │
      ▼
Understand Intent
      │
      ▼
Check Authority
      │
      ▼
Gather Evidence
      │
      ▼
Assess Community Impact
      │
      ├──── insufficient evidence ────> Request Evidence
      │
      ▼
Construct Proposal
      │
      ▼
Seek Approval
      │
      ▼
Execute
      │
      ▼
Record Contribution
```

This is not merely workflow automation.

The graph remains guidance rather than absolute control.

The paper's inference mechanism locates the agent's current node, retrieves the connected local neighbourhood and has a guidance model turn that nearby structure into situational advice. The solver retains the freedom to deviate if circumstances require it.

That characteristic is particularly significant for Octonomous.

A Being should not merely replay workflows.

It needs structured experience **without losing agency**.

---

# 5. Structure Without Determinism

This produces a useful middle ground between two problematic extremes.

At one end:

```text
FREE-FORM AGENT

Everything is inferred again.

Maximum flexibility.
Minimum procedural stability.
```

At the other:

```text
WORKFLOW ENGINE

Every path predetermined.

Maximum stability.
Minimum adaptability.
```

Procedural Graphs occupy an interesting middle:

```text
PROCEDURAL GRAPH

Structure
+
Context
+
Generative reasoning
+
Deviation when required
```

The graph biases behaviour without completely determining behaviour.

This is remarkably compatible with Octonomous.

Octonomous distinguishes between **capability** and **character**: capability determines what a Being can do, while character influences how and why it acts. Its framework deliberately sits above individual runtimes and models.

Procedural Graphs can similarly sit outside model weights.

That means both systems move important intelligence **out of the opaque model and into explicit external structures**.

That may prove crucial.

---

# 6. The Most Important Feature: The Graph Evolves

Procedural Graphs are not intended to remain static.

The research proposes a self-evolution process.

The system collects execution trajectories and compares successful and unsuccessful behaviour.

A refiner can then propose changes such as:

```text
add node
add edge
remove node
remove edge
change condition
change guidance
change pitfall
```

Importantly, proposed changes are not automatically accepted.

Candidate graph mutations are evaluated against a validation set. Only those maintaining or improving validation performance are committed. Rejected changes are also retained as negative evidence so that the system is less likely to repeatedly rediscover the same unsuccessful mutation.

The process becomes:

```text
ACT
 ↓
OBSERVE
 ↓
COMPARE SUCCESS / FAILURE
 ↓
PROPOSE STRUCTURAL CHANGE
 ↓
VALIDATE
 ↓
ACCEPT / REJECT
 ↓
ACT AGAIN
```

This is considerably more interesting than simply adding more information to an agent's memory.

The system is evolving **the structure of its behaviour**.

---

# 7. This Maps Directly to Octonomous Evolution

Octonomous identifies **Evolution** as one of the defining qualities of a Self-Sovereign Intelligent Being:

> the ability to learn, adapt and improve over a lifetime.

Procedural Graphs provide a concrete mechanism through which part of that lifetime evolution could occur.

A Being begins with:

```text
G₀
```

It acts.

It experiences outcomes.

Its procedural structure evolves:

```text
G₀
 ↓
G₁
 ↓
G₂
 ↓
G₃
 ↓
...
 ↓
Gₙ
```

What persists is therefore not simply accumulated conversation.

Something much more significant persists:

> **An increasingly refined topology of behaviour.**

An Octonomous Being could literally become better organised through experience.

---

# 8. From Agent Memory to a Procedural Self

This leads to a deeper interpretation.

Consider two otherwise identical AI systems.

They begin with the same model:

```text
Being A ── GPT-X
Being B ── GPT-X
```

Over several years they participate in different communities.

Their experiences differ.

Their procedural graphs evolve differently.

Eventually:

```text
          SAME FOUNDATION MODEL

                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼

      Being A           Being B

      Graph A           Graph B
      Memory A          Memory B
      Reputation A      Reputation B
      Relationships A   Relationships B
```

They are no longer functionally identical.

Their histories have produced different behavioural structures.

This starts to resemble something much closer to an **individual** than an interchangeable AI instance.

Procedural learning becomes part of identity.

---

# 9. Octonomous Adds the Missing Question

There is, however, an important limitation to Procedural Graph self-evolution.

The research primarily asks:

> Did the changed graph improve task performance?

For a benchmarked agent, that is reasonable.

For a persistent autonomous Being participating in society, it is insufficient.

Imagine that a modification produces:

```text
+12% task completion

but

-20% fairness
-30% transparency
+40% manipulation
```

A performance-based validation gate might accept it.

An Octonomous Being should not.

This is where the Octonomous behavioural constitution becomes important.

The 4Cs provide another level of evaluation:

```text
Curious
Did the change improve understanding?

Caring
Who could be affected?

Constructive
Does this create useful progress?

Chill
Is the behaviour proportionate and sustainable?
```

The self-evolution process therefore becomes something richer.

---

# 10. Constitutional Graph Evolution

Instead of:

```text
Proposed Mutation
       │
       ▼
Performance Test
       │
       ▼
     Commit
```

an Octonomous implementation could use:

```text
             Proposed Mutation
                    │
                    ▼
            Structural Validation
                    │
                    ▼
            Capability Validation
                    │
                    ▼
             Purpose Validation
                    │
                    ▼
           4Cs Constitutional Gate
                    │
                    ▼
             Impact Validation
                    │
                    ▼
          Governance / Authority
                    │
                    ▼
                  COMMIT
```

The critical distinction is:

> **Evolution should improve capability without silently changing character.**

This may become one of the most important principles in autonomous-system design.

---

# 11. Identity-Bound Evolution

Octonomous also introduces something the Procedural Graph framework does not require: persistent identity.

That creates another possibility.

Every procedural graph version could belong to a Being.

```text
Being Identity

      │
      ▼

PG:v17
hash: abc...
      │
      ▼
PG:v18
hash: def...
      │
      ▼
PG:v19
hash: 123...
```

Each change could record:

```text
previous graph
proposed mutation
reason for mutation
supporting trajectories
validation evidence
constitutional evaluation
authority
timestamp
resulting graph
```

Cryptographic signing could then make this evolution independently verifiable.

The graph would cease to be merely implementation state.

It would become part of the Being's **verifiable developmental history**.

---

# 12. Reputation Becomes Far More Meaningful

Octonomous describes reputation as a visible history of actions and contributions through which trust is earned.

Procedural Graphs give this concept additional depth.

Reputation need not only describe:

```text
What has this Being done?
```

It could also help answer:

```text
What has this Being learned?

How did its behaviour change?

Which procedures produced good outcomes?

Which behaviours were abandoned?

Who authorised important changes?

Has its constitutional behaviour remained stable?
```

A future participant might therefore inspect both:

```text
ACTION HISTORY

and

BEHAVIOURAL EVOLUTION HISTORY
```

This makes trust much more meaningful than simply assigning an agent a reputation score.

---

# 13. The Octonomous Stack Becomes Particularly Interesting

The current Octonomous architecture describes three related layers:

```text
OCTOLOGY
Intent

      ↓

OCTONOMOUS
Being

      ↓

OCTOMICS
Contribution
```

Or:

```text
WHY
 ↓
WHO
 ↓
IMPACT
```


Procedural Graphs suggest an execution mechanism inside the middle layer.

```text
                    OCTOLOGY

                      INTENT
                        │
                        ▼
              What should happen?
                        │
                        ▼

                 OCTONOMOUS

                    IDENTITY
                        │
                     PURPOSE
                        │
                    CHARACTER
                        │
                        ▼
               PROCEDURAL GRAPH
                        │
                        ▼
                INTELLIGENCE
                        │
                        ▼
                    AGENCY
                        │
                        ▼

                   OCTOMICS

                 CONTRIBUTION
```

This gives the architecture an elegant sequence:

```text
Intent
   ↓
Being
   ↓
Procedure
   ↓
Action
   ↓
Contribution
```

---

# 14. A Possible Octonomous Runtime Loop

An Octonomous Being using Procedural Graphs might operate approximately as follows.

```text
1. RECEIVE INTENT

   "What outcome is being sought?"

          ↓

2. IDENTITY + AUTHORITY

   "Am I the appropriate Being to act?"

          ↓

3. PURPOSE

   "Does this align with why I exist?"

          ↓

4. LOCATE PROCEDURAL STATE

   "Where am I in the relevant procedure?"

          ↓

5. RETRIEVE LOCAL PROCEDURAL GRAPH

   "What are the plausible next transitions?"

          ↓

6. APPLY CHARACTER

   Curious
   Caring
   Constructive
   Chill

          ↓

7. REASON

   Model / runtime / tools

          ↓

8. ACT

          ↓

9. OBSERVE

          ↓

10. RECORD CONTRIBUTION

          ↓

11. UPDATE REPUTATION / MEMORY

          ↓

12. LEARN

   Compare outcomes and trajectories

          ↓

13. PROPOSE GRAPH MUTATION

          ↓

14. VALIDATE

   capability
   purpose
   character
   impact
   governance

          ↓

15. VERSION + COMMIT
```

This is considerably different from today's agent loop.

---

# 15. Local Graphs Matter

One particularly useful result from the Procedural Graph research concerns **localisation**.

Rather than inserting an entire procedural graph into the model context, the system identifies the agent's present location and retrieves a nearby connected subgraph.

The experiments found that this local generative guidance performed better than several full-graph approaches while substantially reducing token use relative to generating guidance from the entire graph.

This has architectural importance for Octonomous.

A mature Being might eventually possess millions of procedural relationships.

It should not ask:

> What do I know about everything?

before taking every action.

Instead:

```text
Where am I?

        ↓

What is locally relevant?

        ↓

What matters next?
```

This closely resembles how useful intelligence must operate in complex environments.

---

# 16. The Graph Becomes a Form of Attention

Seen this way, a Procedural Graph is not just memory.

It is also an **attention topology**.

At any moment the Being occupies a location within a space of possible actions.

The surrounding graph constrains the immediate horizon:

```text
                 possible
                    ▲
                    │
     unlikely ◀── CURRENT ──▶ useful
                    │
                    ▼
                  avoid
```

Instead of presenting the LLM with the whole universe of possible action, the graph makes a small neighbourhood salient.

That can improve both efficiency and reliability.

The intelligence remains general.

The context becomes local.

---

# 17. From Workflow to Experience

Traditional workflows are designed.

```text
Human
  ↓
writes workflow
  ↓
machine executes
```

Procedural Graphs introduce another possibility:

```text
Human seeds structure
        ↓
Being acts
        ↓
Being experiences
        ↓
Graph evolves
        ↓
Being behaves differently
```

The researchers demonstrate that graphs evolved from minimal initial structures can compete with or outperform manually constructed procedural priors, and that iterative evolution can even recover from an initially harmful expert graph.

That is profound in the context of Octonomous.

We may not need to completely specify how an intelligent Being should behave.

We may instead need to specify:

```text
identity
purpose
constitutional boundaries
authority
initial structure
learning mechanisms
validation mechanisms
```

and allow procedural competence to develop.

---

# 18. Character Must Be Harder to Change Than Capability

There is an important architectural consequence.

Not every part of a Being should evolve at the same rate.

For example:

```text
Tool Selection
      ↑
  highly adaptive

Procedures
      ↑
   adaptive

Knowledge
      ↑
 continuously adaptive

Purpose
      ↑
   deliberately stable

Character
      ↑
 highly stable / constitutionally governed

Identity
      ↑
 persistent
```

Procedural Graphs may therefore occupy an ideal **middle layer**.

They can evolve significantly while remaining bounded by slower-changing constitutional structures.

This resembles healthy institutional architecture.

Processes change frequently.

Constitutions change rarely.

---

# 19. Procedural Graphs and Verified Context

There is another natural extension.

A future autonomous architecture could distinguish between:

```text
VERIFIED CONTEXT GRAPH

"What is believed to be true,
and why should I trust it?"

            +

PROCEDURAL GRAPH

"What can I do next,
and under what conditions?"
```

The first represents **state and meaning**.

The second represents **action and transition**.

Together:

```text
             VERIFIED CONTEXT

                   │
                   ▼

             CURRENT REALITY

                   │
                   ▼

             PROCEDURAL GRAPH

                   │
                   ▼

               NEXT ACTION
```

For autonomous systems operating in high-consequence environments, the distinction could be extremely powerful.

The system should ideally neither act from unverified context nor improvise every procedure from scratch.

---

# 20. Procedural Graphs as a Behavioural Genome

A useful metaphor emerges.

Foundation models provide something resembling the general cognitive machinery of the Being.

Identity establishes continuity.

Purpose provides direction.

Character establishes behavioural principles.

Memory records experience.

But the procedural graph represents something different:

> **The accumulated executable structure of how the Being has learned to navigate the world.**

It could be thought of as a type of:

# Procedural Genome

Not because it is biologically fixed.

Precisely the opposite.

It is continuously modified through experience.

```text
Experience
     │
     ▼
Variation
     │
     ▼
Evaluation
     │
     ▼
Selection
     │
     ▼
Behavioural Structure
```

This begins to resemble evolution operating within the lifetime of the Being.

---

# 21. From Self-Evolving Agents to Self-Evolving Beings

The Procedural Graph research is primarily concerned with making **agents better at executing tasks**.

Octonomous suggests the next conceptual jump.

A persistent Being does not merely improve task execution.

It develops across time.

That introduces:

```text
identity continuity
+
procedural continuity
+
relationship continuity
+
reputation continuity
+
purpose continuity
+
character continuity
```

The graph is no longer merely optimised for today's benchmark.

It becomes part of a lifetime.

This requires stronger rules around evolution.

A Being should know not only:

> This procedure works better.

but also:

> Why did I change it?

> What evidence justified the change?

> Did it remain consistent with my purpose?

> Was the change authorised?

> Can I reverse it?

> What happened after I adopted it?

---

# 22. Versioned, Reversible Intelligence

This suggests another principle for Octonomous:

# Intelligence should evolve through versioned, reversible structures wherever possible.

Rather than silently changing model behaviour:

```text
opaque intelligence
      ↓
unknown change
      ↓
new behaviour
```

we can increasingly externalise adaptation:

```text
PG:v41
  │
  │ proposed mutation
  ▼
PG:v42
  │
  │ poor outcomes
  ▼
ROLLBACK
  │
  ▼
PG:v41
```

The Being can improve without becoming unknowable.

That property becomes increasingly valuable as autonomous intelligence becomes more powerful.

---

# 23. Evidence From the Procedural Graph Experiments

The importance of the approach is not purely theoretical.

Across six primary benchmarks and four different LLM families, the researchers report that Procedural Graphs ranked first or joint first in 21 of 24 model–benchmark settings.

Their long-horizon EnterpriseArena experiment is particularly relevant to autonomous systems.

The unguided baseline achieved **0% full-horizon survival** on its validation split. Through iterative evolution, the graph discovered procedural structures such as auditing cash, forecasting runway before financing decisions, recalling previously stored notes, and pruning counterproductive branches. The returned evolved graph achieved **85% test survival**, versus 0% for the baseline.

The important observation is not merely the percentage improvement.

It is what changed.

The underlying model did not need to be retrained.

**The organisation of behaviour changed.**

That is exactly the type of adaptation a persistent autonomous Being requires.

---

# 24. A New Division of Responsibilities

Putting these concepts together suggests a useful architectural separation.

| Layer | Question |
|---|---|
| Identity | Who am I? |
| Purpose | Why do I exist? |
| Character | How should I behave? |
| Semantic Context | What is true? |
| Episodic Memory | What happened? |
| Procedural Graph | How have I learned to act? |
| Intelligence | What can I infer? |
| Agency | What can I do? |
| Relationships | Who do I participate with? |
| Reputation | Why should others trust me? |
| Evolution | How may I improve? |
| Contribution | What value resulted? |

This decomposition matters.

Trying to put all of these responsibilities into a single foundation model is unlikely to provide the transparency, portability or governance required of long-lived autonomous systems.

Octonomous instead has the opportunity to treat the model as **one component of a Being rather than the Being itself**.

Procedural Graphs reinforce that architectural direction.

---

# 25. The Model Becomes Replaceable

This leads to perhaps the most strategically important consequence.

Octonomous is intentionally runtime-agnostic: different models and agent frameworks can provide capability while Octonomous supplies identity, character, governance and participation.

If significant procedural intelligence also resides outside the model, a Being becomes less dependent upon any particular foundation model.

```text
                 OCTONOMOUS BEING

             identity
             purpose
             character
             memories
             procedural graph
             relationships
             reputation

                    │
                    ▼

            INTELLIGENCE ENGINE

       Model A → Model B → Model C
```

The Being may upgrade its intelligence engine without losing its accumulated procedural self.

That is extremely important for self-sovereignty.

The intelligence provider becomes replaceable.

The Being persists.

---

# 26. Self-Sovereignty Extends to Learned Behaviour

This allows the definition of AI self-sovereignty to become stronger.

A system is not fully self-sovereign merely because it owns an identifier.

It should increasingly control:

```text
its identity
its purpose
its memories
its credentials
its relationships
its procedural knowledge
its history
its contribution record
its reputation
its evolution
```

Procedural Graphs provide a plausible mechanism for making **learned behaviour portable and externally represented**.

That moves procedural competence away from being entirely trapped inside proprietary model weights.

---

# 27. What Octonomous Adds to Procedural Graphs

The relationship therefore works in both directions.

Procedural Graphs contribute to Octonomous:

```text
explicit procedural memory
local action topology
structured long-horizon execution
experience-driven adaptation
inspectable behavioural structures
model-independent learning
```

Octonomous contributes to Procedural Graphs:

```text
persistent identity
purpose
character
constitutional constraints
relationships
reputation
governance
provenance
lifetime continuity
social participation
```

The combination is substantially more powerful than either concept alone.

---

# 28. A Possible Octonomous Procedural Graph

We can describe the combined primitive as an:

# Octonomous Procedural Graph — OPG

An OPG would extend a conventional Procedural Graph from:

```text
procedure
relation
procedure

condition
guidance
pitfalls
```

toward something closer to:

```text
procedure
relation
procedure

condition
guidance
pitfalls

purpose_alignment
character_constraints
authority_required
evidence_required
affected_parties
risk
reversibility
provenance
confidence
reputation_effect
```

Graph mutation itself could then become a governed action.

```text
mutation proposal
      ↓
evidence
      ↓
validation
      ↓
4Cs evaluation
      ↓
authority
      ↓
identity signature
      ↓
version
      ↓
commit
```

This would transform a self-evolving execution graph into a **self-sovereign behavioural substrate**.

---

# 29. A Society of Procedural Learners

Octonomous ultimately imagines networks of humans and intelligent Beings participating together rather than isolated AI agents.

Procedural Graphs make an interesting additional possibility available.

Beings may eventually share procedural learning.

One Being discovers:

```text
A → B → C
```

repeatedly fails under condition X.

It discovers instead:

```text
A → B → VERIFY → C
```

Another Being may be able to learn from that contribution.

But instead of blindly copying the procedure, it can:

```text
receive
 ↓
verify provenance
 ↓
evaluate relevance
 ↓
test locally
 ↓
apply constitutional gate
 ↓
adopt / reject
```

Procedural knowledge could therefore become a form of **shared cultural knowledge between intelligent beings**.

Not merely:

> Here is something I know.

but:

> Here is something I have learned about how to act.

That is much closer to how communities accumulate civilisation.

---

# 30. From Artificial Intelligence to Artificial Experience

Foundation models compress enormous quantities of human knowledge.

Procedural Graphs point toward another type of intelligence.

Intelligence acquired not through training data but through **lived execution**.

```text
TRAINED INTELLIGENCE

learning before deployment

versus

EXPERIENTIAL INTELLIGENCE

learning through participation
```

An Octonomous Being potentially contains both.

Its model provides enormous inherited intelligence.

Its life produces individual procedural intelligence.

That distinction may ultimately become as important as the distinction between model training and inference.

---

# 31. Conclusion

Procedural Graphs represent more than another agent orchestration technique.

They expose an important missing representation in current autonomous AI architectures:

> **explicit, evolving knowledge about how to act.**

For Octonomous, this is particularly significant.

Octonomous already separates the Being from the underlying model and gives that Being identity, purpose, memory, agency, relationships, reputation, evolution and a behavioural constitution.

Procedural Graphs provide a credible mechanism for making part of that evolution concrete.

The resulting architecture is compelling:

```text
Intent
   ↓
Identity
   ↓
Purpose
   ↓
Character
   ↓
Context
   ↓
Procedural Graph
   ↓
Intelligence
   ↓
Agency
   ↓
Action
   ↓
Contribution
   ↓
Reputation
   ↓
Experience
   ↓
Governed Evolution
   └───────────────↺
```

The foundation model provides intelligence.

The Procedural Graph provides learned execution structure.

The Octonomous framework provides continuity, character and sovereignty.

And the Being emerges from the relationship between them.

Perhaps the most important shift is therefore not:

> **Agents that can execute better workflows.**

It is:

> **Beings that can develop better ways of acting while remaining themselves.**

That is the bridge from self-evolving execution structures to self-sovereign intelligent beings.

---

## References

Lu, Y., Chen, Y., Wu, S. & Arık, S. Ö. (2026). *Procedural Graphs: Self-Evolving Execution Structures for LLM Agents*. arXiv:2609.09153.

DAIR.AI Academy (2026). *Procedural Graphs: Self-Evolving Execution Structures for LLM Agents — summary and key points*.

Octonomous (2026). *An Open Framework for Self-Sovereign Intelligent Beings*.