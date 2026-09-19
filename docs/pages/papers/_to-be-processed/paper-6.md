# The Vulnerability of Recursion
## When Systems Begin to Depend on Their Own Outputs

### Abstract

Recursion is one of the most powerful structures in computation, intelligence, organisations, markets, and society.

A process produces an output.  
That output becomes part of the next input.  
The system repeats.

This simple pattern enables extraordinary capability.

It allows software to traverse complex structures, organisations to learn, artificial intelligence to reason iteratively, markets to price information, scientific knowledge to accumulate, and civilisation itself to build upon previous generations.

But recursion contains a fundamental vulnerability:

> **When the output of a system becomes the input to the same system, corruption can become self-reinforcing.**

An error introduced into a linear process may affect one result.

An error introduced into a recursive process may affect every subsequent iteration.

The same is true of misinformation, insecure assumptions, compromised identities, manipulated context, biased training data, malicious code, financial feedback loops, institutional beliefs, and AI-generated knowledge.

As artificial intelligence increasingly participates in generating the information that future artificial intelligence consumes, recursion is becoming one of the defining structural risks of the intelligence age.

The central challenge is therefore no longer merely securing individual computations.

It is securing **recursive chains of meaning**.

---

## 1. Recursion Is Everywhere

In computer science, recursion occurs when a function calls itself.

But recursion is much broader than programming.

A recursive system is any system in which earlier outputs influence subsequent inputs.

Examples include:

- software generating software;
- AI generating training data for future AI;
- scientific papers citing previous scientific papers;
- financial markets reacting to market prices;
- recommendation algorithms responding to behaviour created by previous recommendations;
- organisations creating policies based on previous organisational reports;
- governments creating regulation based on indicators produced by regulated systems;
- social networks ranking content based on engagement produced by earlier ranking decisions;
- humans forming beliefs from information created by other humans whose beliefs were shaped by earlier information.

Civilisation itself is deeply recursive.

Knowledge produces knowledge.

Technology produces technology.

Institutions produce institutions.

Culture produces culture.

Intelligence produces intelligence.

Recursion is therefore not an edge case.

It is one of the fundamental mechanisms by which complexity accumulates.

---

# 2. The Recursive Advantage

Recursion allows systems to compound capability.

Consider scientific knowledge.

A researcher does not begin every experiment from first principles.

They inherit:

- mathematical frameworks;
- instruments;
- terminology;
- datasets;
- previous experiments;
- theories;
- standards;
- institutions.

Each generation begins from the outputs of previous generations.

The same is true in computing.

Modern software sits on enormous recursive stacks:

```text
application
↓
framework
↓
runtime
↓
operating system
↓
compiler
↓
firmware
↓
hardware
```

Each layer depends upon previous abstractions.

This recursive accumulation is what makes modern systems possible.

Without recursion, civilisation would repeatedly start from zero.

---

# 3. But Recursion Compounds Trust

The advantage of recursion creates its central weakness.

Every recursive step inherits assumptions from previous steps.

If those assumptions are valid, capability compounds.

If those assumptions are wrong, error compounds.

This gives us a simple recursive relationship:

\[
S_{n+1} = f(S_n)
\]

where \(S_n\) is the state of the system at iteration \(n\).

If the system contains an error \(e\), then:

\[
S_{n+1} = f(S_n + e)
\]

The next state now contains the consequences of that error.

That state becomes the input to the next iteration.

Thus:

\[
S_{n+2} = f(f(S_n + e))
\]

The error is no longer merely present.

It has become part of the system's history.

---

# 4. Linear Error Versus Recursive Error

This distinction is critical.

In a linear system:

```text
Input
↓
Process
↓
Output
```

an error may contaminate one output.

In a recursive system:

```text
Input
↓
Process
↓
Output
 ↘
   Next Input
      ↓
    Process
      ↓
    Output
      ↘
```

the error may propagate indefinitely.

Even worse, the system may begin treating the consequences of the original error as evidence that the error was correct.

This creates a feedback loop.

---

# 5. The Most Dangerous Recursive Failure: Self-Confirmation

Recursive systems can become self-confirming.

Consider a recommendation algorithm.

The system predicts that users prefer a particular type of content.

It therefore shows more of that content.

Users interact with what they are shown.

The algorithm observes the interactions.

It concludes:

> Users clearly prefer this type of content.

The original prediction has created the evidence used to validate itself.

The recursion is:

```text
Prediction
↓
Recommendation
↓
Behaviour
↓
Observed Data
↓
Prediction
```

This is not merely feedback.

It is **epistemic recursion**.

The system begins manufacturing its own evidence.

---

# 6. AI Makes This Problem Much Larger

Generative AI dramatically increases recursive information production.

Historically:

```text
human knowledge
↓
books / documents / databases
↓
AI training
```

Increasingly:

```text
human knowledge
↓
AI
↓
AI-generated content
↓
internet / databases
↓
future AI training
↓
AI-generated content
↓
future AI
```

The knowledge environment becomes recursive.

AI systems begin consuming information produced by AI systems.

The provenance chain weakens.

Eventually a model may encounter a claim replicated across thousands of documents without recognising that all of them originated from a single earlier AI hallucination.

Apparent consensus may simply be recursive duplication.

---

# 7. The Collapse of Information Independence

Traditional information systems often implicitly assume source independence.

If ten different sources report the same fact, confidence increases.

But in a highly recursive AI information environment, ten sources may actually represent one source copied nine times.

For example:

```text
Original Claim
      ↓
AI Summary
      ↓
Blog Article
      ↓
AI Search Result
      ↓
Social Post
      ↓
Another AI Summary
      ↓
Research Assistant
```

Six apparent sources may contain only one information lineage.

Without provenance, recursion creates the illusion of independent confirmation.

---

# 8. Recursive Hallucination

A particularly dangerous phenomenon is what might be called **recursive hallucination**.

Consider:

```text
AI₁ produces incorrect claim X
↓
X enters public information space
↓
AI₂ retrieves X
↓
AI₂ treats X as evidence
↓
AI₂ generates expanded version X'
↓
X' enters public information space
↓
AI₃ retrieves X and X'
```

At this point AI₃ may observe two sources supporting the claim.

But both originated from the same hallucination.

Over repeated iterations:

\[
X \rightarrow X' \rightarrow X'' \rightarrow X'''
\]

the claim may become increasingly detailed and increasingly convincing.

Falsehood acquires structure.

Structure acquires credibility.

Credibility generates repetition.

Repetition generates apparent truth.

---

# 9. Recursive Software Development

The same vulnerability appears when AI writes software.

The emerging development loop is increasingly:

```text
AI writes code
↓
AI tests code
↓
AI reviews code
↓
AI deploys code
↓
AI observes telemetry
↓
AI modifies code
```

This is enormously powerful.

But notice the recursion.

The system reviewing the code may share:

- the same model architecture;
- the same training assumptions;
- the same blind spots;
- the same conceptual errors.

The traditional assumption that independent review improves reliability may weaken if both author and reviewer are manifestations of the same intelligence system.

---

# 10. Recursive Security Failure

Security systems are especially vulnerable to recursive dependencies.

Modern security often relies on chains such as:

```text
identity
↓
credentials
↓
authorisation
↓
software
↓
infrastructure
↓
logging
↓
monitoring
↓
incident response
```

But these systems frequently depend upon one another.

For example:

- identity systems authenticate administrators;
- administrators configure identity systems;
- monitoring systems authenticate through identity systems;
- incident responders rely upon monitoring systems;
- recovery systems rely upon administrator credentials.

The dependency graph becomes cyclic.

A sufficiently capable attacker does not need to attack every component.

They need only compromise a node positioned inside the recursive trust loop.

---

# 11. Recursive Authority

Institutions exhibit similar behaviour.

Consider:

```text
institution defines policy
↓
policy defines measurements
↓
measurements evaluate institution
↓
evaluation validates policy
```

The institution can unintentionally become its own source of legitimacy.

The same occurs in bureaucratic systems where:

```text
rule
↓
procedure
↓
report
↓
audit
↓
rule
```

Each layer appears independent.

But the entire system may ultimately depend upon the same original assumptions.

---

# 12. Recursive Markets

Financial markets demonstrate both the power and danger of recursion.

Prices influence expectations.

Expectations influence trading.

Trading influences prices.

Thus:

```text
Price
↓
Expectation
↓
Action
↓
Price
```

Under normal conditions this feedback enables price discovery.

Under unstable conditions it creates:

- bubbles;
- crashes;
- bank runs;
- liquidity spirals;
- momentum cascades.

The same recursive mechanism that stabilises markets can destabilise them.

---

# 13. Recursive Social Reality

Human social systems are profoundly recursive.

People observe society.

They form beliefs.

Those beliefs influence behaviour.

Behaviour changes society.

```text
Perception
↓
Belief
↓
Behaviour
↓
Social Reality
↓
Perception
```

Narratives therefore do not merely describe reality.

They participate in producing it.

This becomes especially significant when AI systems increasingly mediate the narratives people receive.

---

# 14. AI Introduces Machine-Speed Recursion

Human recursive systems historically operated relatively slowly.

Scientific recursion might occur over years.

Institutional recursion might occur over months.

Cultural recursion might occur over generations.

AI collapses these timescales.

An agent can potentially:

```text
observe
↓
reason
↓
act
↓
measure
↓
modify
↓
act again
```

thousands or millions of times.

The danger is therefore not merely recursion.

It is **high-frequency recursion**.

A feedback loop that previously took years to become dangerous may now develop in minutes.

---

# 15. Intelligence Recursing on Intelligence

Perhaps the most consequential recursive system is intelligence improving intelligence.

Consider:

```text
AI designs better AI tools
↓
better AI tools improve AI development
↓
improved AI development produces better AI
↓
better AI produces better AI tools
```

This creates the possibility of recursive capability amplification.

Much discussion focuses on how rapidly capability might increase.

But the complementary question is equally important:

> What happens to vulnerabilities when capability recursively amplifies?

An incorrect assumption embedded early in the loop may become deeply embedded in increasingly capable systems.

Capability compounds.

But so can fragility.

---

# 16. Recursive Attack

An intelligent attacker can deliberately exploit recursion.

Instead of attacking a system directly, the attacker manipulates what the system will later consume.

This changes the security model.

Traditional attack:

```text
Attacker
↓
System
```

Recursive attack:

```text
Attacker
↓
Information Environment
↓
System Observation
↓
System Reasoning
↓
System Action
↓
Future Information Environment
```

The attacker influences the system indirectly through its recursive inputs.

This resembles data poisoning, but the attack surface is much broader.

Possible targets include:

- training data;
- memory;
- retrieval systems;
- logs;
- documentation;
- generated code;
- external APIs;
- reputational signals;
- social media;
- knowledge graphs;
- organisational records.

---

# 17. The Attack Surface Moves Into the Past

One of the strangest consequences of recursion is that current systems may be vulnerable to information inserted long ago.

Imagine malicious information introduced today into:

- documentation;
- source repositories;
- datasets;
- public archives;
- research literature.

A future AI agent may consume that information years later.

The attack therefore becomes temporally asynchronous.

The attacker does not necessarily attack the future system.

They poison the informational environment from which the future system will construct reality.

---

# 18. Provenance Becomes Security

In this environment, provenance becomes a fundamental security primitive.

Every important claim increasingly needs an answer to:

> Where did this come from?

But provenance must go deeper than a URL.

A meaningful provenance chain might include:

```text
claim
↓
source
↓
author
↓
evidence
↓
observation
↓
method
↓
timestamp
↓
signatures
```

Without this lineage, recursive systems cannot reliably distinguish:

- independent evidence from duplication;
- observation from interpretation;
- human knowledge from AI generation;
- original sources from recursive summaries.

---

# 19. Graphs Reveal Recursion

A useful way of understanding recursive systems is as graphs.

Nodes represent states, claims, people, systems, or events.

Edges represent relationships.

For example:

```text
Claim A
 ├── derived-from → Evidence B
 ├── asserted-by → Agent C
 ├── confirmed-by → Observation D
 └── referenced-by → Claim E
```

Recursion appears naturally as cycles within the graph.

```text
A → B → C → A
```

Cycles are not inherently bad.

Many useful systems depend upon them.

But cycles should be visible.

Invisible recursion is dangerous recursion.

---

# 20. Verified Context Graphs

This suggests a role for **Verified Context Graphs (VCGs)**.

Rather than giving an intelligent system a flat collection of documents, a VCG provides structured relationships between claims and their provenance.

Instead of:

```text
AI
↓
millions of documents
```

the architecture becomes:

```text
AI
↓
verified context graph
↓
claims
↓
relationships
↓
evidence
↓
provenance
```

A VCG can make recursive dependencies explicit.

For example:

```text
Claim A
↓ depends-on
Claim B
↓ derived-from
Observation C
```

If Claim B is later invalidated, downstream claims can be identified.

This turns recursive fragility into something inspectable.

---

# 21. Recursive Trust Must Be Interruptible

Safe recursive systems need interruption points.

A purely recursive system may look like:

```text
observe
↓
reason
↓
act
↓
observe
↓
reason
↓
act
```

A safer system introduces verification boundaries:

```text
observe
↓
reason
↓
VERIFY
↓
act
↓
observe
↓
reason
↓
VERIFY
```

Verification breaks uncontrolled recursion.

This may include:

- cryptographic verification;
- independent measurement;
- human judgement;
- external sensors;
- multi-agent disagreement;
- provenance checking;
- deterministic rules;
- physical-world confirmation.

---

# 22. The Importance of External Reality

Ultimately every recursive information system needs grounding outside itself.

Otherwise it risks becoming a closed epistemic loop.

A system can recursively reason perfectly from incorrect premises.

Logical consistency does not guarantee correspondence with reality.

Therefore:

> **Every recursive intelligence system requires non-recursive anchors.**

These anchors may include:

- physical measurements;
- human observation;
- cryptographic attestations;
- external events;
- independently verified evidence.

Without grounding, intelligence can become increasingly sophisticated while drifting increasingly far from reality.

---

# 23. Recursive Systems Need Entropy From Outside

Another way to frame this is through information.

Closed recursive systems repeatedly transform existing information.

But without new external information they can become self-referential.

Healthy systems therefore require continual injection of novelty from reality.

```text
Reality
   ↓
Observation
   ↓
System
   ↺
Recursion
```

The recursive loop should remain open to reality.

Otherwise the system becomes an echo chamber.

---

# 24. The Law of Recursive Vulnerability

We can express the central principle simply:

> **Any system whose outputs become future inputs amplifies both its intelligence and its errors.**

Or more formally:

\[
Recursive\ Capability \uparrow
\Rightarrow
Recursive\ Risk \uparrow
\]

unless verification strength increases proportionally.

Therefore:

\[
Safety \approx
\frac{Verification}{Recursive\ Depth \times Recursive\ Velocity}
\]

The deeper and faster the recursion, the stronger the required verification mechanisms.

---

# 25. Recursive Depth

Two variables become especially important.

### Recursive depth

How many times can output become input?

```text
1 → 2 → 3 → 4 → 5 → ...
```

### Recursive velocity

How quickly do these cycles occur?

A slow recursive process may allow humans to detect errors.

A machine-speed recursive process may pass through thousands of iterations before anyone notices.

This suggests a new class of operational metrics:

```text
recursive depth
recursive velocity
verification frequency
provenance completeness
external grounding rate
```

These may become as important to AI governance as traditional security metrics.

---

# 26. Recursive Diversity

Another defence is diversity.

If the same system recursively validates itself:

```text
Model A
↓
Model A
↓
Model A
```

shared blind spots remain invisible.

A stronger architecture might involve:

```text
Model A
↓
Model B
↓
deterministic verification
↓
external evidence
```

True independence matters.

Three agents running the same model may appear to represent three opinions while actually representing one epistemic lineage.

---

# 27. The Recursive Surface Area

Traditional cybersecurity often speaks about **attack surface area**.

The intelligence age may require another concept:

> **recursive surface area**

This is the portion of a system where outputs can re-enter the system as trusted inputs.

Examples include:

```text
AI-generated documentation
AI-generated training data
AI-generated code
AI-generated policies
AI-generated research
AI-generated decisions
AI-generated memories
```

Reducing unnecessary recursive surface area may become a fundamental safety strategy.

---

# 28. From Open Loops to Governed Loops

The goal is not to eliminate recursion.

That would eliminate much of the power of intelligence.

The goal is to govern recursion.

A resilient recursive system might look like:

```text
        Reality
           ↓
       Observation
           ↓
        Context
           ↓
       Intelligence
           ↓
        Proposal
           ↓
      Verification
           ↓
         Action
           ↓
        Outcome
           ↓
      New Observation
           ↺
```

The key difference is that **verification exists inside the loop**.

---

# 29. Recursive Intelligence Requires Recursive Governance

AI governance often focuses on:

- model access;
- data privacy;
- safety policies;
- deployment controls.

But increasingly governance will need to focus on recursive behaviour.

Questions will include:

- Can the system modify its own instructions?
- Can it rewrite its own memory?
- Can it generate its own training data?
- Can it modify the tools it uses?
- Can it redefine its own success metrics?
- Can it create new agents?
- Can its outputs become trusted future inputs?
- Can it alter the environment used to evaluate itself?

These are questions about recursion.

---

# 30. The Deepest Vulnerability

The deepest vulnerability of recursion is not technical.

It is epistemological.

A system can gradually lose the distinction between:

```text
what happened
```

and:

```text
what the system previously believed happened.
```

Once this boundary disappears, the system begins constructing reality from its own previous constructions.

This is the architecture of an echo chamber.

It can occur in:

- a person;
- an organisation;
- a political movement;
- a market;
- a scientific discipline;
- an AI system;
- an entire civilisation.

---

# 31. The Intelligence Age Is the Recursive Age

Artificial intelligence does not merely increase intelligence.

It increases the speed with which intelligence can operate upon the products of intelligence.

AI writes text that AI reads.

AI writes code that AI executes.

AI generates data that AI learns from.

AI creates strategies that AI evaluates.

AI constructs agents that create more agents.

The defining structural characteristic of advanced AI may therefore not simply be intelligence.

It may be **recursion**.

---

# 32. Conclusion

Recursion is one of the greatest engines of complexity.

It allows knowledge to accumulate.

Software to build upon software.

Institutions to learn.

Civilisation to advance.

And intelligence to improve intelligence.

But recursion contains a fundamental vulnerability.

Outputs become inputs.

Assumptions become foundations.

Errors become history.

Manipulation becomes evidence.

Hallucinations become sources.

And compromise can propagate through every subsequent iteration.

The solution is not to eliminate recursion.

The solution is to make recursion **visible, verifiable, interruptible, diverse, and grounded in reality**.

The architecture of trustworthy intelligence may therefore require a simple principle:

> **Never allow a recursive system to become its own unquestioned source of truth.**

Or even more simply:

> **Recursion amplifies. Verification decides what it amplifies.**

In the intelligence age, securing the loop may become more important than securing any individual node within it.