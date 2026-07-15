---
layout: selfdriven
title: Australia’s AI Social Licence - selfdriven Institute
permalink: /secure/bzehdn1pikngghbaxr/au/ai-regulations-and-vcgs
description: "Verifiable Context Graphs as Sovereign Infrastructure for the Intelligence Age."
---

# Australia’s AI Social Licence

**Verifiable Context Graphs as Sovereign Infrastructure for the Intelligence Age**

<p><img src="/assets/img/Australia_AI_Sovereignty_Trust_Gap.png" style="border-radius: 12px; width:100%; max-width: 800px;"></p>

## Podcast

<audio controls preload="metadata">
  <source
    src="https://raw.githubusercontent.com/selfdriven-foundation/selfdriven-institute/main/resources/podcasts/Australia_Mandates_Verifiable_Context_Graphs.m4a"
    type="audio/mp4">
  Your browser does not support the audio element.
</audio>

On 15 July 2026, Prime Minister Anthony Albanese presented artificial intelligence as a question of national agency: Australia can either shape how AI operates within the country or allow foreign technology companies and market forces to shape it for us.

The government’s proposed response includes Australian Standards for AI, mandatory national requirements for large AI data centres, stronger control for creators over the use of their work in AI training, and a new Office of AI within the Department of the Prime Minister and Cabinet. The framework seeks to capture the economic benefits of AI while protecting Australian sovereignty, workers, communities, creative industries and natural resources.

However, standards alone cannot create trustworthy AI.

Standards describe what should happen. Australia also needs infrastructure capable of proving what did happen: which information was used, who authorised it, what rules applied, what resources were consumed, how a decision was reached and who remains accountable.

**Verifiable Context Graphs provide this missing infrastructure.**

A Verifiable Context Graph, or VCG, connects identities, organisations, assets, policies, events, evidence, rights, decisions and outcomes within a persistent, provenance-aware and permissioned graph. It gives AI systems access not merely to more information, but to information whose origin, authority, ownership, purpose and current validity can be established.

The central proposition of this paper is:

> Australia should not regulate AI only at the level of models and infrastructure. It should establish a sovereign, verifiable context layer through which AI systems interact with Australian society.



## 1. Australia’s AI Policy Moment

The Prime Minister’s speech, **AI in Australia’s Interests**, marked a significant change in the framing of Australian AI policy.

AI was not presented simply as a technology sector, productivity tool or regulatory problem. It was presented as national infrastructure with economic, environmental, cultural, social, security and democratic consequences.

The government announced that:

* Australian Standards for AI would be developed.
* Expectations previously announced for large AI data centres would be brought into a clear, consistent and mandatory national framework.
* National Cabinet agreement would be sought in August 2026.
* Legislation would be targeted for introduction in early 2027.
* Large new data centres would be required to underwrite new electricity supply, pay their full grid-connection costs and minimise water consumption.
* Australian artists, writers, musicians and journalists would retain control over whether and on what terms their work could be used for AI training.
* An Office of AI would be established within the Department of the Prime Minister and Cabinet to coordinate AI policy across government.

The policy builds upon the National AI Plan released in December 2025. That plan is organised around three goals: capturing AI opportunities, spreading the benefits throughout Australian society and keeping Australians safe.

There is an important distinction between the different policy streams.

The newly announced mandatory Australian Standards are initially focused on the physical infrastructure of AI and the use of Australian content in AI training. Governance of complex and higher-risk AI applications remains part of a broader stream that includes existing law, the AI Safety Institute, organisational guidance and the earlier consultation on mandatory guardrails for high-risk AI.

Together, these streams point towards a more coordinated Australian AI system. Yet coordination requires more than a central office and a collection of regulatory instruments. It requires a common way to represent, exchange and verify the evidence upon which regulation depends.



## 2. From Policy Statements to Verifiable Evidence

Every major element of the proposed AI framework creates an evidence problem.

A data centre may be required to contribute as much energy to the grid as it consumes. How is that contribution measured, attributed and continuously verified?

An AI developer may claim that it has not trained a model on unlicensed Australian creative work. What dataset records, licences, declarations and audit evidence support that claim?

An employer may state that workers were consulted before an AI system was introduced. Who participated, what information was disclosed, what concerns were raised and what actions followed?

A government agency may say that an automated decision remained under meaningful human control. Which person held that authority, what evidence did they review and when did they intervene?

An AI provider may describe a system as safe. Which model version was tested, against which risks, using what test procedures, and were the results still valid when the system was deployed?

Australia’s current AI adoption guidance already emphasises accountability, AI registers, risk assessments, testing, monitoring, human oversight, supply-chain responsibility and the retention of clear governance records.

The difficulty is that these records are generally distributed across documents, databases, audit systems, contracts, spreadsheets, emails and organisational boundaries.

A regulator may receive a compliance report, but not the living evidence from which that report was constructed.

A user may receive an AI-generated outcome, but not the authority, policies, data and reasoning context behind it.

A creator may retain copyright in law, but have no practical mechanism for discovering where their work has been licensed, included, transformed or used.

This is the gap between **declared compliance** and **verifiable compliance**.

Verifiable Context Graphs are designed to close that gap.



## 3. What Is a Verifiable Context Graph?

A Verifiable Context Graph is a persistent graph that represents:

* entities such as people, organisations, AI agents, models and regulators;
* relationships between those entities;
* claims and facts;
* the evidence supporting each claim;
* the identity and authority of the issuer;
* ownership and intellectual-property rights;
* permissions and permitted purposes;
* relevant policies and obligations;
* timestamps and periods of validity;
* decisions, actions and outcomes;
* confidence, challenges, corrections and revocations;
* cryptographic signatures or other verification mechanisms.

A conventional knowledge graph may state:

> This work was created by this artist.

A VCG can additionally establish:

> The creator’s identity was verified by this authority; the ownership claim was recorded at this time; this organisation received a licence for these purposes; the licence did not include model training; the licence expires on this date; and these signed records provide the supporting evidence.

The distinction is fundamental.

A large language model produces probable outputs from patterns learned across data. A VCG provides persistent, inspectable and governed context against which those outputs can be grounded.

The language model remains useful for communication, exploration, synthesis and hypothesis generation. The VCG becomes the source of verifiable memory: what is known, why it is known, who has authority to assert it and under what conditions it may be used.

A VCG should not become a centralised surveillance graph. It should be:

* federated rather than universally centralised;
* purpose-bound rather than open-ended;
* permissioned rather than indiscriminately accessible;
* minimised to the context required;
* governed by Australian law;
* capable of recording consent, revocation and redress;
* controlled by the people and organisations responsible for the underlying context.

The aim is not for government to possess all context. It is to create a framework through which relevant context can be verified without requiring every participant to surrender control of the underlying information.



## 4. Verifying the Environmental Social Licence

The government’s proposed requirements for data centres provide a direct example of where VCGs could operationalise policy.

The March 2026 data-centre expectations identify five areas: national interest, the energy transition, sustainable water use, Australian skills and jobs, and research and local capability. The government has also stated that infrastructure operators should underwrite renewable supply, pay their grid-connection costs and make computing capacity available to Australian startups and researchers.

A data-centre VCG could connect:

* the facility and its operator;
* planning and environmental approvals;
* electricity-consumption measurements;
* renewable-energy projects underwritten by the operator;
* grid connection and infrastructure contributions;
* firming and storage arrangements;
* water sources, consumption and recycling;
* efficiency measurements;
* local employment and training commitments;
* community consultation;
* compute made available to Australian organisations;
* regulator inspections;
* incidents, exceptions and corrective actions.

Rather than submitting an annual static report, the operator could maintain a continuous evidence graph.

Regulators would not necessarily receive unrestricted access to operational systems. They could receive purpose-specific, cryptographically verifiable proofs demonstrating that defined obligations had been met.

This would support the government’s aim of streamlining compliance verification while giving communities greater confidence that infrastructure commitments were real and continuing.

It would also allow approvals to become more adaptive. A development could be approved subject to measurable conditions, with its continued social licence connected to verified performance.

The result would be regulation based not only on promises made before construction, but on evidence generated throughout the facility’s life.



## 5. Creative Sovereignty and Machine-Readable Rights

The Prime Minister placed unusually strong emphasis on the rights of Australian creators. The stated principle is that Australian creative work should not be used to train AI without the creator’s control, including control over its price and value.

Copyright law defines rights, but AI operates at a scale and speed that conventional licensing administration was not designed to handle.

VCGs could make creative rights machine-readable.

Each creative work could be connected to:

* the verified identity of its creator or rights holder;
* evidence of authorship or ownership;
* collecting societies, publishers and authorised representatives;
* permitted and prohibited uses;
* whether AI training is allowed;
* which model developers are licensed;
* permitted model types and purposes;
* commercial terms;
* jurisdictional restrictions;
* attribution requirements;
* licence expiry and revocation;
* payments and distributions;
* disputes and resolutions.

An AI developer assembling a training dataset could query these rights before ingestion. A dataset could carry a verifiable manifest showing the origin and licensing status of its components. Model developers could produce signed declarations linking a model version to the authorised datasets used in its development.

VCGs cannot, by themselves, prove that a secret or undisclosed dataset was never used. That still requires disclosure obligations, technical testing, audits and enforcement powers.

They can, however, create the infrastructure for lawful use to become visible, automatable and auditable.

This changes copyright from a largely reactive system—where creators must discover misuse after it occurs—to a proactive rights system in which permission travels with the work.

Creative sovereignty would therefore become more than a legal declaration. It would become executable context.



## 6. Higher-Risk AI and the Decision Evidence Chain

Higher-risk AI systems require more than a statement that an organisation follows responsible-AI principles.

When AI contributes to decisions involving employment, credit, insurance, healthcare, education, policing, government benefits or access to essential services, every material decision should have an evidence chain.

A decision VCG could record:

* the person or organisation affected;
* the purpose for which the system was used;
* the legal and organisational authority for using it;
* the model and system versions involved;
* relevant input data and its provenance;
* the policies and eligibility rules applied;
* known limitations and risk classifications;
* testing and monitoring evidence;
* the role played by AI;
* the responsible human decision-maker;
* the final decision;
* the explanation supplied to the affected person;
* available review and appeal mechanisms;
* subsequent corrections or outcomes.

The objective is not necessarily to reveal proprietary model weights or every internal computation.

It is to preserve enough verified context to answer the questions that matter:

* Was the system authorised for this purpose?
* Was the information current and lawfully obtained?
* Which policy governed the decision?
* Did a qualified person retain responsibility?
* Can the outcome be challenged?
* Can an error be traced and corrected?
* Are similar people being treated consistently?

The Australian AI Safety Institute has been established to analyse advanced models, monitor emerging harms and provide evidence to regulators and policymakers.

VCGs could provide the Institute with structured, privacy-preserving evidence about how systems perform in real-world settings. In return, safety tests, risk advisories and model evaluations issued by the Institute could become trusted objects within organisational VCGs.

This would create a continuous learning loop between deployment, evidence, safety analysis, regulation and improvement.



## 7. Workers as Participants in the Context

The Prime Minister argued that AI should support and create secure work rather than simply replace it, and that workers should participate in decisions about how AI is introduced. The government’s broader plan also emphasises training, consultation, transitions and ensuring workers share in the benefits of adoption.

A trustworthy AI workplace cannot be created solely by monitoring employees more closely.

The workers themselves must be represented as legitimate participants in the governance graph.

A workplace AI VCG might include:

* the proposed system and intended purpose;
* tasks expected to change;
* affected roles and teams;
* worker and union consultation;
* identified risks;
* productivity assumptions;
* required training;
* redeployment and transition plans;
* changes to decision authority;
* monitoring limitations;
* review dates;
* productivity outcomes;
* distribution of benefits;
* complaints and corrective actions.

This would make consultation more than a meeting held to satisfy a procedural requirement.

It would create a persistent relationship between the initial justification for an AI system and its actual effect on workers.

Where the outcomes diverge from the original commitments, that divergence would be visible and capable of triggering review.

AI adoption could then become a negotiated organisational learning process rather than an opaque technology deployment imposed from above.



## 8. Context Sovereignty

The Prime Minister warned against Australia becoming merely a warehouse for AI products developed elsewhere or surrendering national control to foreign monopolies.

This reveals an important distinction between **compute sovereignty** and **context sovereignty**.

Compute sovereignty concerns where models run, where data centres are located and who controls the physical and digital infrastructure.

Context sovereignty concerns who controls:

* Australian identities;
* cultural and creative rights;
* institutional authority;
* professional qualifications;
* laws and policies;
* community knowledge;
* public records;
* organisational memory;
* evidence about Australian people, places and systems;
* the permissions under which this context is accessed.

Australia may not produce every frontier model it uses.

But decisions affecting Australians can still be grounded in Australian-controlled, verifiable context operating under Australian authority.

Models may be imported. Context does not have to be surrendered with them.

An overseas model could interact with an Australian VCG through a controlled interface. It would receive only the context authorised for the task, while the VCG would retain evidence of what was requested, what was disclosed, what rules applied and what action followed.

This is a more practical form of sovereignty than attempting to isolate Australia technologically.

It supports international interoperability while maintaining domestic authority over meaning, permission and accountability.



## 9. An Australian Verifiable AI Context Standard

The Office of AI should consider developing an **Australian Verifiable AI Context Standard** alongside the proposed infrastructure and training standards.

The standard could define seven minimum context domains.

### 1. Identity and authority

Every important claim, approval, instruction and decision should be connected to an identifiable person, organisation, agent or statutory authority.

### 2. Provenance and rights

Data, documents, creative works and evidence should carry information about their origin, ownership, permitted use and transformation history.

### 3. Purpose and permission

Access to context should be limited to defined purposes, with consent, legal authority or organisational permission explicitly represented.

### 4. Temporal validity

Facts and credentials should identify when they became valid, when they expire and whether they have been updated, disputed or revoked.

### 5. Policy and accountability

AI actions should be connected to the law, policy, contract, standard or organisational authority governing them, together with the person ultimately accountable.

### 6. Risk, oversight and redress

The graph should record known risks, required human oversight, testing, monitoring, affected stakeholders and mechanisms for review or appeal.

### 7. Evidence and outcomes

Commitments should be connected to measurable evidence and actual outcomes, enabling continuing verification rather than one-time certification.

The standard should be open, interoperable and technology-neutral. It should support multiple identity systems, graph technologies, databases, credential formats and cryptographic mechanisms.

The Commonwealth should define the trust and evidence requirements—not mandate a single commercial platform.



## 10. A Federated National Architecture

A national VCG architecture would not require one giant government graph.

It could operate as a federation:

* the Office of AI coordinates standards and cross-government policy;
* the AI Safety Institute publishes trusted evaluations and risk evidence;
* regulators issue licences, findings, approvals and compliance credentials;
* creators and rights organisations maintain rights and licensing context;
* infrastructure operators maintain environmental and operational evidence;
* organisations maintain their own AI governance and decision graphs;
* workers and citizens hold credentials, permissions and rights;
* AI systems request limited context through governed interfaces;
* independent auditors verify evidence and issue attestations.

Each participant would retain responsibility for its own domain.

Trust would be established through verifiable connections between domains rather than by copying every piece of information into a central repository.

This architecture would reflect the structure of Australian government itself: federal, state, local, sectoral and community authority operating through shared standards.

It would allow AI governance to remain distributed while making compliance and accountability coherent.



## 11. Australia’s Strategic Opportunity

Australia is unlikely to win a global race based solely on the size of its foundation models or the number of hyperscale data centres it hosts.

It can establish a different comparative advantage:

**Australia can become the world’s most trusted environment for applying AI to real organisations, communities and regulated systems.**

Australia already possesses strong institutions, professional standards, stable government, sophisticated regulated industries, high-quality research and a culture that expects technology to operate within a social licence.

VCGs could turn these institutional strengths into digital infrastructure.

Australian AI could become known not merely for generating convincing answers, but for producing outcomes grounded in:

* verified identity;
* lawful authority;
* attributable evidence;
* creator-controlled rights;
* current policy;
* environmental accountability;
* human responsibility;
* accessible redress.

The value would extend beyond regulation.

A common verifiable context layer could support healthcare, education, finance, insurance, agriculture, engineering, emergency management, government services and community coordination.

The same infrastructure used to demonstrate AI compliance could allow multiple organisations and agents to coordinate without repeatedly reconstructing or surrendering context.

This would create a new class of national asset: reusable, permissioned and verifiable Australian context.



## Conclusion

The Prime Minister’s speech establishes an important principle: Australia does not have to choose between rejecting AI and accepting whatever form global technology companies deliver.

Australia can shape the terms under which AI operates.

The proposed Office of AI, national standards, infrastructure obligations and creative protections provide the beginnings of that framework. But rules must be connected to evidence, and evidence must remain connected to identity, authority, permission, time, policy and outcome.

That is the role of Verifiable Context Graphs.

VCGs would allow Australia to move:

* from declared compliance to verifiable compliance;
* from static reports to continuous evidence;
* from data extraction to permissioned context;
* from creator protection in principle to machine-readable rights;
* from opaque automated decisions to inspectable accountability;
* from centralised platforms to federated trust;
* from dependence on foreign intelligence systems to sovereignty over Australian context.

In the Intelligence Age, sovereignty will not be determined only by who owns the computers.

It will be determined by who controls the context through which intelligence understands the world and is authorised to act within it.

**AI sovereignty is context sovereignty.**

Australia should ensure that its emerging AI framework is built upon that foundation.

---

<a href="https://raw.githubusercontent.com/selfdriven-foundation/selfdriven-institute/main/resources/slides/Australia’s_AI_Social_Licence.pdf"
   target="_blank"
   rel="noopener noreferrer">
   Australia’s AI Social Licence (PDF)
</a>

