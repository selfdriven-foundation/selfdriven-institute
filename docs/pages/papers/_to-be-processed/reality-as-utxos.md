# Reality as UTxOs
## A Graph-Theoretic Model of the Present, Action, Causality and Social Reality

### Abstract

We normally imagine reality as a collection of objects that exist at a point in time. A different model becomes possible if we begin with **action rather than objects**.

In this model, every action consumes some part of the existing world and produces a new set of possibilities. The outputs of previous actions that have not yet been consumed form what we experience as **now**.

This is strikingly similar to the Unspent Transaction Output — UTxO — model used in distributed ledgers such as Cardano.

The analogy can be generalised far beyond money:

> **Our "now" is the set of action outputs that remain available to participate in future actions.**

A house, an agreement, a qualification, a relationship, a promise, a reputation, a piece of knowledge and even a conversation can therefore be represented not primarily as static objects, but as **unconsumed outputs of prior processes**.

Graph theory makes this model considerably more powerful. Instead of reality being a database of objects, reality becomes an evolving **causal graph**. Outputs are nodes. Actions connect them. Transactions consume some nodes and produce others. Validators constrain which transitions are possible.

The present is then not simply a moment on a clock.

**The present is the active frontier of a graph.**

---

# 1. From Objects to Outputs

Most information systems model reality using nouns:

- person
- house
- vehicle
- company
- bank account
- qualification
- insurance policy
- claim

Each is treated as an object possessing attributes.

For example:

```text
House
 ├── Address
 ├── Owner
 ├── Value
 ├── Bedrooms
 └── Construction
```

This is useful, but it hides something fundamental.

The house we describe today exists because of a long sequence of actions:

```text
land surveyed
     ↓
land purchased
     ↓
plans approved
     ↓
house constructed
     ↓
house inspected
     ↓
title transferred
     ↓
house occupied
     ↓
house modified
     ↓
house insured
```

The thing we call **the house now** is therefore the accumulated surviving output of previous actions.

This suggests a different primitive:

> Reality consists less of objects than of **outputs which remain actionable**.

---

# 2. The UTxO Insight

A UTxO system contains outputs from previous transactions that have not yet been consumed by subsequent transactions.

A transaction can conceptually be represented as:

\[
T : I \rightarrow O
\]

where:

- \(I\) = a set of inputs
- \(T\) = an action
- \(O\) = a set of newly created outputs

An output continues to exist as part of the actionable state until another transaction consumes it.

So at time \(t\):

\[
R_t = \{o_i \mid o_i \text{ has been created but not consumed}\}
\]

where \(R_t\) represents the currently available reality.

This gives us a surprisingly powerful definition of **now**:

\[
\boxed{Now = \text{the set of unconsumed outputs of previous actions}}
\]

An action transforms that set:

\[
R_{t+1}
=
(R_t - I_t)
\cup
O_t
\]

Reality is therefore continually rewritten through action.

---

# 3. Reality Is Not the Ledger

This distinction is important.

The claim is not:

> Physical reality literally runs on Cardano UTxOs.

Rather, UTxO provides an unusually good **computational ontology** for representing how actors interact with reality.

We can call these:

## Representational UTxOs

or **rUTxOs**.

An rUTxO represents something from the world that:

1. resulted from some prior action,
2. presently has consequence,
3. is available to some future action,
4. can potentially be transformed or consumed.

For example:

```text
inspection
    ↓
[inspection finding]
    ↓
repair
    ↓
[completed repair]
    ↓
certification
    ↓
[certificate]
```

The output of one action becomes the context for another.

---

# 4. Graph Theory Reveals the Deeper Structure

A simple UTxO model looks like a chain:

```text
O₁ → T₁ → O₂ → T₂ → O₃
```

But reality is rarely linear.

An action normally consumes **multiple pieces of context**:

```text
        O₁
         \
O₂ ─────── T ───── O₄
         /
        O₃
```

And one action can generate several outputs:

```text
              → O₄
O₁ → T ──────→ O₅
              → O₆
```

The more accurate mathematical structure is therefore not simply a conventional graph.

It is naturally a **directed hypergraph**.

A transaction is a hyperedge:

\[
T :
\{O_1,O_2,\ldots,O_n\}
\rightarrow
\{O'_1,O'_2,\ldots,O'_m\}
\]

One action connects potentially many prior states to potentially many future states.

---

# 5. A Bipartite Representation

Another particularly useful representation separates **states** from **actions**.

There are two kinds of vertices:

\[
V = U \cup A
\]

where:

- \(U\) = UTxO/state vertices
- \(A\) = action vertices

Edges have two forms:

\[
U \rightarrow A
\]

meaning:

> this output was consumed by this action

and:

\[
A \rightarrow U
\]

meaning:

> this output was produced by this action

So reality might look like:

```text
        [identity]
             \
              \
[property] → (sale) → [new ownership]
              /
        [payment]
```

This structure is extremely expressive.

The nodes tell us **what exists**.

The action nodes tell us **what happened**.

The edges tell us **why the present exists**.

---

# 6. Edges Are More Important Than Objects

Traditional databases concentrate heavily on vertices.

Graph thinking shifts attention toward edges.

Consider:

```text
Alice ─── owns ─── House
```

The important information may not actually be Alice or the house.

It may be:

```text
owns
```

Because that relationship determines what actions are possible.

And even that relationship probably emerged from an earlier event:

```text
Previous owner
      │
      ▼
   [SALE]
   /    \
payment title
        │
        ▼
 Alice owns House
```

An edge is therefore not merely a convenient link.

An edge may encode:

- causality
- authority
- provenance
- dependency
- permission
- obligation
- trust
- evidence
- consequence

In a UTxO interpretation, many graph edges are effectively the **residue of previous action**.

---

# 7. The Present as a Graph Frontier

This leads to perhaps the strongest implication of the model.

Consider an ever-growing causal graph:

```text
PAST                                      FUTURE

 ●───●────●
      \    \
       ●────●────●
           /     │
      ●───●      ●
                 ↑
          CURRENT FRONTIER
```

Most nodes have already participated in later actions.

Only some remain available for subsequent action.

These unconsumed outputs form a **frontier** or **cut** through the causal graph.

Let the complete historical graph be:

\[
G=(V,E)
\]

and let:

\[
F_t \subset V
\]

be the set of currently unconsumed output vertices.

Then:

\[
\boxed{F_t = \text{Now}}
\]

The present becomes a **moving computational boundary between history and possibility**.

That is a considerably richer conception of the present than a timestamp.

---

# 8. The Past Is the Consumed Graph

Under this interpretation, the distinction between past and present becomes elegant.

### Past

Outputs that have already been consumed.

They remain part of the causal history but are no longer directly actionable.

### Present

Outputs that have not yet been consumed.

They constitute the currently available state.

### Future

Not yet a graph at all.

The future consists of **possible valid transformations of the current frontier**.

So:

\[
Past = History
\]

\[
Present = Available\ State
\]

\[
Future = Possible\ Transitions
\]

This means the future is not stored.

It is generated.

---

# 9. Possibility Lives in the Edges

Suppose the current state is:

\[
R_t
\]

There might be many possible actions:

\[
A_1(R_t), A_2(R_t), A_3(R_t),\ldots
\]

Each would produce a different successor reality:

```text
                ┌── Action A ── Reality A
                │
Current Reality ├── Action B ── Reality B
                │
                └── Action C ── Reality C
```

The future therefore corresponds to a **space of possible outgoing edges**.

A being's agency can consequently be described as the ability to select and instantiate one of these possible transformations.

In simple terms:

> **Reality is vertices.  
> Possibility is edges.  
> Agency chooses edges.**

But once an edge is traversed, it itself becomes history and produces a new frontier.

---

# 10. Validators Become Laws of Transition

UTxO systems contain another important concept: **validators**.

An output cannot necessarily be consumed arbitrarily.

Conditions may have to be satisfied.

In a representational reality graph we can write:

\[
V(O,A,C) \rightarrow \{true,false\}
\]

where:

- \(O\) = current output
- \(A\) = proposed action
- \(C\) = surrounding context
- \(V\) = validator

The action can occur only if the transition is valid.

This maps remarkably well onto human systems.

A house cannot simply be transferred because someone wishes it.

Validators might include:

```text
seller authority
        +
buyer agreement
        +
identity
        +
payment
        +
contract
        +
land-title rules
        ↓
     TRANSFER
```

Society is filled with these validators.

They include:

- laws
- contracts
- organisational rules
- permissions
- professional standards
- physical constraints
- social norms
- ethics

---

# 11. Social Contracts as Validators

A social contract can be treated as a function governing state transitions.

```text
Existing Reality
       │
       ▼
 Proposed Action
       │
       ▼
┌─────────────────┐
│ SOCIAL VALIDATOR│
│                 │
│ Curious?        │
│ Caring?         │
│ Constructive?   │
│ Least harmful?  │
└────────┬────────┘
         │
         ▼
   New Reality
```

The validator does not necessarily determine what **can physically happen**.

It determines what transitions we collectively consider **acceptable**.

This allows ethics to enter the computational architecture not merely as metadata, but as a constraint upon transition.

---

# 12. "Spend Them With Care"

The word **spend** becomes especially powerful under this interpretation.

We usually think of spending money.

But every action spends something.

A conversation spends:

- attention
- time
- trust
- information
- opportunity

Building something spends:

- materials
- energy
- labour
- land
- time

Making a decision spends:

- optionality

Once certain actions occur, some previous possibilities cease to exist.

Thus:

> **To act is to spend some portion of the available present in order to create a new present.**

The ethical question becomes:

> What outputs should our actions create?

---

# 13. Conservation and Transformation

Importantly, consumption does not necessarily mean destruction.

Suppose:

```text
[Raw timber]
      ↓
  Furniture
      ↓
[Table]
```

The timber UTxO has been consumed, but much of its physical substance persists.

What has changed is its **representational state**.

Likewise:

```text
[unmarried Alice]
[unmarried Bob]
       ↓
    marriage
       ↓
[married Alice]
[married Bob]
[relationship]
```

Nothing disappeared physically.

The transaction transformed the state graph.

UTxO consumption is therefore best interpreted as:

> **the prior representation becoming unavailable as the authoritative current state.**

---

# 14. Identity Is Also a Continuity Graph

This raises a deeper question.

What is a person?

A conventional system might contain:

```json
{
  "person": 12345
}
```

The UTxO interpretation is different.

The current person is the frontier produced by an enormous causal history:

```text
birth
 ↓
experiences
 ↓
learning
 ↓
relationships
 ↓
actions
 ↓
memories
 ↓
commitments
 ↓
NOW
```

The person is not simply one immutable node.

Identity is partly **continuity through a causal graph**.

We might say:

\[
Identity_t = f(History,\ Current\ Outputs)
\]

The "self" is simultaneously a continuation of prior state and a generator of subsequent state.

---

# 15. Knowledge as UTxOs

Knowledge fits the model especially well.

Imagine:

```text
observation
     ↓
[hypothesis]
     ↓
experiment
     ↓
[result]
     ↓
interpretation
     ↓
[knowledge]
```

That knowledge subsequently becomes an input:

```text
[knowledge]
     +
[new observation]
     ↓
 reasoning
     ↓
[new knowledge]
```

Human cognition continually consumes representations and creates new ones.

This suggests that reasoning itself can be represented as a UTxO-like graph.

---

# 16. Reality Has Two Graphs

It helps to distinguish two overlapping graph structures.

## The Causal Graph

Answers:

> **How did this state come to exist?**

Its edges point from previous states through actions toward subsequent states.

Because causes precede consequences, this graph tends toward a directed acyclic structure:

\[
G_C = (V,E_C)
\]

## The Semantic Graph

Answers:

> **What does this state mean in relation to other things?**

For example:

```text
House
 ├── located-in → Normanhurst
 ├── owned-by → Alice
 ├── insured-by → Insurer
 ├── financed-by → Bank
 └── constructed-of → Brick
```

This graph can contain cycles, many-to-many relationships and complex contextual structures:

\[
G_S=(V,E_S)
\]

Reality therefore becomes the combination:

\[
\boxed{G_R = G_C + G_S}
\]

where the causal graph describes **becoming**, while the semantic graph describes **meaning**.

---

# 17. Verified Context Graphs

This also provides a natural architectural foundation for a Verified Context Graph.

Instead of a graph merely containing assertions:

```text
Alice → owns → House
```

it can contain the causal provenance that resulted in the assertion:

```text
Previous Title
      +
Contract
      +
Payment
      +
Alice Identity
      │
      ▼
   Transfer
      │
      ▼
Alice → owns → House
```

The graph can therefore answer both:

### What is true?

and:

### Why do we currently believe it to be true?

That second question is crucial.

A context graph without provenance is merely a collection of assertions.

A context graph grounded in UTxO-style causal history can provide **computable provenance**.

---

# 18. Reality Becomes Locally Verifiable

An important property follows.

We need not reconstruct the entire universe every time an action occurs.

The relevant part of the graph can be evaluated.

Suppose:

```text
        Global Reality Graph
                │
       ┌────────┴─────────┐
       │                  │
 irrelevant            relevant
 context                context
                           │
                           ▼
                     proposed action
```

A validator needs only enough context to determine whether the transition should occur.

This is computationally significant.

It permits intelligence to operate over **small verified contextual subgraphs** rather than continually reasoning over the entirety of human data.

---

# 19. Context Is the Local Neighbourhood

Graph theory provides another useful idea: the neighbourhood of a vertex.

For node \(v\):

\[
N(v) = \{u\mid(u,v)\in E\}
\]

The meaning of something is often determined largely by the graph around it.

Consider the number:

```text
$850,000
```

On its own it means very little.

Connected into a graph:

```text
             ┌── valuation-date → 2026
House ───────┤
             ├── valuation → $850,000
             ├── suburb → Normanhurst
             └── valuation-method → comparable sales
```

it acquires meaning.

Thus:

\[
Meaning(v) \approx f(N(v))
\]

Meaning is contextual.

And context is graph structure.

---

# 20. Attention Is Graph Traversal

At any particular moment, humans do not perceive the entire reality graph.

We traverse a very small neighbourhood.

```text
             enormous reality graph
           · · · · · · · · · · ·
        ·                         ·
      ·       ┌───────────┐         ·
     ·        │ attention │          ·
      ·       └───────────┘         ·
        ·                         ·
           · · · · · · · · ·
```

Attention chooses a subgraph.

Reasoning then follows edges through it.

This suggests:

\[
Experience_t
\subset
Reality_t
\]

Our experienced "now" is a projection of a vastly larger active frontier.

---

# 21. The World as a Distributed State Machine

The entire model can now be expressed computationally.

At time \(t\), let the active world state be:

\[
S_t = \{u_1,u_2,\ldots,u_n\}
\]

An actor proposes an action:

\[
a_t
\]

The action selects relevant inputs:

\[
I_t \subseteq S_t
\]

Validators evaluate the transition:

\[
V(I_t,a_t,C_t)
\]

If acceptable:

\[
I_t
\xrightarrow{a_t}
O_t
\]

and:

\[
S_{t+1}
=
(S_t-I_t)\cup O_t
\]

Repeat indefinitely.

Reality becomes:

\[
S_0
\xrightarrow{A_1}
S_1
\xrightarrow{A_2}
S_2
\xrightarrow{A_3}
\cdots
\]

This is effectively a gigantic **distributed state-transition system**.

---

# 22. But There Is No Single Global Transaction

Physical and social reality differs from a blockchain in an important way.

There is no single global clock ordering every event.

Different parts of reality change independently:

```text
Australia ── A₁ ── A₂ ───────── A₃
                   \
                    relation

Japan ───── B₁ ───────── B₂ ─── B₃

Person X ─── C₁ ── C₂ ── C₃
```

This makes the system closer to a **partially ordered causal graph**.

We can write:

\[
a \prec b
\]

only when action \(a\) causally precedes action \(b\).

For unrelated events:

\[
a \parallel b
\]

Neither needs to come before the other.

There is consequently no necessary universal sequence:

```text
1 → 2 → 3 → 4 → 5
```

Instead reality resembles:

```text
   ●──●
  /    \
 ●      ●──●
  \    /
   ●──●
```

A distributed fabric of causal dependencies.

---

# 23. Now Is Therefore Not a Point

This has a subtle consequence.

There may be no single global **now**.

Instead, each actor has access to some causally available frontier:

\[
Now_A
\]

Another actor has:

\[
Now_B
\]

and:

\[
Now_A \neq Now_B
\]

because each possesses different information, relationships and causal histories.

Yet the frontiers overlap.

Social reality emerges from the reconciliation of these partially shared graphs.

---

# 24. Consensus Is Shared Reality

This gives a useful interpretation of consensus.

Consensus need not mean that everyone possesses identical knowledge.

Instead:

\[
Consensus =
\text{agreement on a sufficiently important shared subgraph}
\]

For example:

```text
Alice
   \
    owns → House
   /
Registry
```

Alice, the buyer, the bank, the government and the insurer may maintain different broader world models.

What matters operationally is that they agree sufficiently on certain edges.

Social institutions therefore function partly as **shared-state synchronisation mechanisms**.

---

# 25. Trust Moves From Nodes to Paths

Traditional systems frequently say:

> Trust this database.

A graph-based system can instead ask:

> Can I establish a trustworthy path from evidence to this conclusion?

For claim \(C\):

\[
Evidence
\rightarrow
Observation
\rightarrow
Validation
\rightarrow
Assertion
\rightarrow
C
\]

Trust can therefore become a property of the **path**, rather than of a central authority.

This is potentially profound for:

- identity
- insurance
- property
- education
- healthcare
- supply chains
- governance
- AI reasoning

---

# 26. AI and the Reality Frontier

This model may also point toward a different architecture for artificial intelligence.

Most large language models operate primarily over representations of historical information.

A reality graph provides something different:

> a continuously updated representation of what remains actionable now.

An intelligent system could therefore reason from:

```text
verified current outputs
          +
relevant semantic neighbourhood
          +
causal history
          +
available actions
          +
validators
```

rather than simply:

```text
prompt + statistical memory
```

The central AI question changes from:

> What text should come next?

toward:

> Given the verified current frontier, what transitions are possible, what consequences follow, and which action should be taken?

---

# 27. Intelligence as Edge Selection

We can now describe intelligence graph-theoretically.

Given:

\[
R_t
\]

an intelligent being identifies possible transitions:

\[
A(R_t)=\{a_1,a_2,\ldots,a_n\}
\]

estimates resulting states:

\[
R_{t+1}^{(i)}
\]

and chooses among them.

Thus:

\[
\boxed{
Intelligence
\approx
\text{the capacity to discover, evaluate and select useful edges through reality}
}
\]

Knowledge helps us understand the vertices.

Intelligence helps us navigate the edges.

Agency creates new edges.

---

# 28. Caring Changes the Optimisation Function

Intelligence alone does not determine which edge should be selected.

Suppose the system predicts:

```text
                    → outcome A
                   /
current reality ──→ outcome B
                   \
                    → outcome C
```

There remains the question:

> Which future should we choose?

A purely self-optimising agent may select:

\[
a^* =
\arg\max_a Utility_{self}(a)
\]

A caring agent incorporates consequences for others:

\[
a^* =
\arg\max_a
\left[
Benefit(a)-Harm(a)
\right]
\]

**Curiosity expands the reachable graph.**

**Care influences which edges we traverse.**

---

# 29. A Least-Harmful Society

This gives computational meaning to the phrase:

> **Together we are creating a least-harmful society.**

Every action transforms the shared frontier.

The objective is not necessarily to find a world containing no harm — an impossible optimisation problem.

It is to continually choose transitions whose downstream consequences are less harmful than available alternatives.

Formally:

\[
a^*
=
\arg\min_a
ExpectedHarm(R_t \xrightarrow{a} R_{t+1})
\]

subject to practical constraints.

Ethics therefore becomes an ongoing graph navigation problem.

---

# 30. A Compact Ontology

The entire architecture can be reduced to six primitives:

| Primitive | Meaning |
|---|---|
| **Output** | Something produced by previous action |
| **Action** | Transformation of available outputs |
| **Edge** | Causal, semantic or possible relationship |
| **Validator** | Constraint governing allowable transformation |
| **Frontier** | Outputs currently available for action |
| **Graph** | Accumulated structure of reality and its history |

From these primitives:

\[
\boxed{
Reality =
Outputs + Relations + Actions + Constraints
}
\]

and:

\[
\boxed{
Now = Active\ Frontier(RealityGraph)
}
\]

---

# 31. The Central Diagram

```text
                           POSSIBLE FUTURES
                       /        │        \
                      /         │         \
                     ▼          ▼          ▼

                  Action     Action     Action
                     ▲
                     │
              VALIDATORS
             /    │     \
          law   care   physics
                     ▲
                     │

════════════════════ NOW ════════════════════

      UTxO        UTxO        UTxO
        \          │          /
         \         │         /
          └──── CONTEXT ────┘

══════════════════ HISTORY ═══════════════════

             ▲         ▲
             │         │
          actions   actions
             ▲         ▲
            UTxOs ─ UTxOs
             ▲
             │
        previous actions
```

The horizontal boundary is not merely "the current time".

It is the **unspent frontier of causality**.

---

# 32. Reality Is What Can Be Acted Upon

This points toward an unusual but useful definition of reality:

> **Operationally, reality is the set of currently available constraints, relationships and possibilities capable of affecting the next action.**

There may be an enormous physical universe.

But from the perspective of an acting being, what matters is the subset capable of entering the next transition.

This is the being's representational UTxO set.

Its interface to reality.

---

# 33. From "Things" to "Becoming"

Object-oriented thinking tends toward:

\[
World = Things
\]

Graph thinking moves toward:

\[
World = Things + Relationships
\]

UTxO thinking goes one step further:

\[
World =
Previous\ Action
\rightarrow
Current\ State
\rightarrow
Possible\ Action
\]

Reality ceases to look static.

It becomes **becoming**.

The universe we can act within is constantly generated by the consumption and production of state.

---

# 34. Conclusion

The UTxO model contains an idea far larger than cryptocurrency.

It offers a compact computational metaphor for reality itself.

Previous actions generate outputs.

Some outputs are subsequently consumed.

Those that remain constitute the actionable present.

Graph theory shows that these outputs do not exist independently. They form a vast network of causal, semantic, evidential and social relationships.

Actions are transformations across that graph.

Validators constrain transformations.

Agency chooses among possible transformations.

And each choice creates a new frontier from which subsequent choices become possible.

The resulting picture is remarkably simple:

\[
\boxed{
Past = consumed\ outputs
}
\]

\[
\boxed{
Now = unconsumed\ outputs
}
\]

\[
\boxed{
Future = possible\ edges
}
\]

\[
\boxed{
Action = edge\ traversal\ and\ graph\ transformation
}
\]

And perhaps the deepest formulation is:

> **Reality is not a collection of things. It is a graph of consequences.**

What we call **now** is the active frontier of that graph: the accumulated outputs of everything that has happened which have not yet been consumed in what happens next.

Every action spends part of that frontier.

Every action creates another.

**Spend them with care.**
