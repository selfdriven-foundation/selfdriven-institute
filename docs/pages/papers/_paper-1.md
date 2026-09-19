# Beyond Domain-Specific Agents

*How AGI moves specialisation into context, tools and responsibility*

## Abstract

If artificial general intelligence can learn, reason and act competently across domains, a separate intelligence for each domain becomes an architectural choice rather than a fundamental requirement. An organisation may no longer need distinct kinds of intelligence for finance, engineering, education and operations. It may instead apply a general intelligence to different bodies of knowledge, instruments, constraints and purposes.

This paper argues that AGI could relocate specialisation from the agent’s underlying intelligence into its operating context. Domain knowledge remains essential. So do task-specific tools, evidence, evaluation and accountable authority. What becomes less necessary is treating every domain as requiring its own cognitive species.

The argument is conditional: it assumes sufficiently capable and reliable general intelligence, without claiming that any current system fulfils that condition. It also distinguishes a shared general capability from a single unrestricted agent. Multiple instances may remain valuable for concurrency, privacy, independent review and separation of duties.

The resulting architecture combines general reasoning with bounded execution and verifiable context. Its central implication is that organisations should distinguish boundaries required by responsibility from boundaries inherited from limited intelligence. AGI could allow intelligence to move across domains while authority remains deliberately scoped.

## 1. The originating insight

**With AGI, we may not need domain-specific agents.**

Taken seriously, this changes how an intelligent organisation might be designed.

Consider a system constructed around a finance agent, a procurement agent, an engineering agent and a customer service agent. Each has its own instructions, memory and workflow. Problems crossing these boundaries require handoffs, translations and reconciliation.

Such a structure can be useful. However, it bundles several different reasons for specialisation into one object called an agent.

An agent may be separate because it needs different knowledge. It may require different software. It may act for a different person. It may have different permissions. Or its underlying model may perform better on a narrow class of problems.

These are distinct requirements.

The arrival of general intelligence would challenge the last requirement most directly. The others would need to be evaluated on their own merits.

The question becomes: **which boundaries exist because the intelligence is limited, and which exist because the work requires them?**

## 2. General capability, situated competence

For this paper, AGI means a system able to acquire and apply competence across a broad range of intellectual tasks, including unfamiliar tasks, without needing a separately engineered intelligence for every domain.

This is a working definition for a conditional argument.

General intelligence does not imply universal knowledge, infallibility or instant mastery. A general intelligence may still need to study a technical standard, inspect a machine, access organisational history or use an external solver.

The relevant distinction is between the capacity to acquire and apply expertise and the information required to exercise that expertise in a particular situation.

A system could have strong general reasoning and still lack the facts needed to answer a question about a specific project. That gap does not necessarily require a new agent. It may require access to the project’s records.

A useful conceptual expression is:

**Situated competence = general capability applied through relevant context, suitable tools and feedback.**

This is an architectural description, not a quantitative formula. Each component can become a limiting factor.

The thesis therefore concerns the location of specialisation. Expertise remains necessary, but it need not always be embedded in a separately specialised intelligence.

## 3. What remains domain-specific?

Several layers of work remain specialised even if the underlying intelligence becomes general.

| Layer | What must remain specific |
|---|---|
| Knowledge | Concepts, terminology, records and current domain information |
| Context | The particular people, assets, history and circumstances involved |
| Tools | Instruments capable of calculating, observing or changing the relevant system |
| Authority | Who may access information, make decisions and execute actions |
| Evaluation | Evidence and tests that establish whether the result is acceptable |
| Responsibility | The person or institution accountable for the outcome |

A general intelligence investigating a manufacturing defect might need engineering drawings, production records and measurement tools. When evaluating the consequences of a proposed fix, it might also need cost information and delivery commitments.

The reasoning capability could remain the same while the context and instruments change.

This suggests a different unit of software design: a reusable domain context package containing definitions, authoritative sources, tool interfaces, constraints and acceptance criteria.

Such a package supports specialised work without necessarily creating another autonomous actor with its own identity, memory and coordination overhead.

Some products called “domain agents” may already amount to this arrangement. Where that is the case, the thesis changes how the architecture is understood more than how it is implemented.

## 4. Cross-domain reasoning becomes the opportunity

The strongest reason to use general intelligence is its potential to handle problems that cross established categories.

Imagine an organisation deciding whether to replace an unreliable piece of equipment.

The decision involves technical condition, replacement cost, staff capability, operational disruption and service commitments. These factors interact. A cheaper replacement may require more training. A repair may preserve cash while increasing the risk of interruption.

A system organised into separate domain agents may distribute these questions and then reconcile their answers. That can work, but the quality of the decision depends on what survives each handoff.

A general agent could maintain a coherent representation of the decision across these dimensions, where access is authorised. It could revise the technical proposal when a staffing constraint emerges, then reconsider cost and timing without treating each revision as a new departmental transaction.

This is a potential benefit, not a guaranteed performance advantage. Context limits, task interference or a well-designed specialist workflow could favour decomposition.

The architectural opportunity is to make decomposition a response to the problem rather than an automatic consequence of domain labels.

## 5. A shared capability with bounded execution

A practical architecture could combine a general reasoning capability with distinct execution contexts.

Each task receives an explicit purpose, authorised context, permitted tools, resource limits and required evidence. The system can use a common underlying model while keeping task state and credentials separate.

The model may propose an action. The surrounding execution system determines whether that action is permitted. Permissions should be enforced by infrastructure rather than relying solely on the model to follow instructions.

For example, the same general capability could support both purchase preparation and purchase review. Those tasks could run in separate contexts with different access and authority. Where independent judgement matters, review may require additional evidence, a different method or a human reviewer.

Using the same model twice does not establish independence. Separate instances can reproduce the same assumptions and errors.

This architecture permits several distinctions to coexist:

- One general capability can support many domains.
- Many task instances can operate concurrently.
- Each instance can hold narrowly scoped authority.
- Verification can occur outside the reasoning process that produced the proposal.

The number of agents then follows workload, trust and accountability requirements. It does not have to match the number of departments.

## 6. Verified context becomes more valuable

As intelligence becomes more general, a greater part of the practical difference between deployments may lie in the context they can reliably access.

A capable system still needs to know which record is current, who made a claim, what evidence supports it and whether it is authorised to use that information.

A Verified Context Graph, as used here, is a graph whose statements, relationships, provenance, authority and changes can be checked. It offers a proposed foundation for supplying general intelligence with structured organisational context.

Verification must be interpreted carefully. A valid signature can establish who issued a statement without establishing that the statement is true. An authenticated record can still contain an error. Provenance, factual validation and permission are separate properties.

A useful graph therefore preserves uncertainty, disagreement, scope and revision history alongside accepted information.

In this arrangement, domain knowledge becomes a maintained organisational resource that authorised intelligence can use across tasks. Lessons discovered during operations could inform planning without depending on a handoff between permanently isolated agent memories.

That reuse remains subject to access boundaries. Generality does not justify unrestricted pooling of information.

## 7. The human role moves towards direction and proof

This shift changes what people need to specify.

Instead of designing a separate digital employee for every job title, an organisation can describe the outcome sought, the context available, the actions permitted and the evidence required.

Human expertise remains important in deciding what counts as success, recognising missing context, resolving contested values and accepting responsibility.

Within the Papers project’s language, this is a form of conducting: holding direction and coordinating action without manually performing every cognitive step.

A Conducting Score could describe an intended outcome together with constraints, review points, timing and required evidence. General intelligence would determine how to apply relevant knowledge within that bounded assignment.

For example, “improve service continuity” can become a concrete task with specified assets, dependencies, acceptable disruption, spending limits and recovery evidence. The task need not begin by allocating one agent to each organisational function.

People still determine whose interests matter and which trade-offs are acceptable. General reasoning capability does not confer a mandate.

## 8. The inverse: two ways to misbuild the system

The first failure is to preserve unnecessary cognitive silos.

An organisation could deploy general intelligence while requiring every problem to pass through a rigid network of departmental agents. Each handoff may narrow context, duplicate interpretation and introduce inconsistent assumptions.

The system gains capable components while retaining coordination constraints that the new capability might have helped remove.

The second failure is to erase necessary boundaries.

An organisation could interpret general intelligence as justification for one agent to access every record and execute every action. That concentrates authority and allows a single mistake or compromise to affect more of the organisation.

Both failures arise from confusing intelligence with agency.

The first confines reasoning to inherited categories. The second allows capability to determine permission. A stronger design enables authorised reasoning across relevant domains while keeping consequential actions bounded and accountable.

## 9. When specialist agents still make sense

The thesis does not require every deployment to use the same model or a single agent.

A specialist model may meet a narrow requirement at lower cost or latency. A dedicated process may offer predictable execution. Separate agents may represent different owners, protect private information, run work concurrently or preserve continuity over a long assignment.

Some environments may require a validated component whose behaviour is easier to assess than a general system’s. Some tasks may benefit from dedicated training, instruments or experimental feedback that cannot be replaced by supplying documents.

These are substantive reasons for specialisation.

The narrower claim is that **a domain label alone becomes insufficient justification for a separate intelligence once general capability can reliably perform the work.**

This claim is testable. Compare a general system supplied with domain context and tools against a specialist arrangement on representative tasks. Assess quality, failures, cost, latency, maintenance and the effort required to reconcile cross-domain work.

If the specialist arrangement consistently performs better, retain it. The purpose of the thesis is to remove an assumed necessity, not to prohibit an effective design.

## Conclusion

AGI could change the organising principle of agent systems.

When intelligence can transfer across domains, specialisation can increasingly reside in knowledge, tools, context, evaluation and authority. Organisations could reuse general capability while maintaining the boundaries needed for privacy, accountability and reliable execution.

The result may include many agents, but their separation would have a clearer purpose. Some would exist to work in parallel. Others would represent different principals or provide distinct checks. Their existence would no longer follow automatically from a belief that each domain needs its own kind of mind.

**With AGI, domain-specific intelligence may become optional. Domain-specific context and accountable action remain essential.**