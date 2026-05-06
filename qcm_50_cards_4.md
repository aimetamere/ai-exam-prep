# QCM Assessment
## QCM4
### Course 8 — Data Strategy & Infrastructure · Course 9 — MLOps / LLMOps / Agentic Ops
**Level:** Advanced | **Total:** 30 Questions

---

## Card 1

**QCM:** A financial services firm has a model deployed in production for credit scoring. The input feature distribution looks stable (PSI < 0.1), yet model accuracy has quietly degraded over six months. What is the most likely root cause?

- A. Concept drift — the relationship between features and credit risk has changed, not the features themselves
- B. Data drift caused by changes in the feature distributions not captured by PSI
- C. Pipeline drift — an upstream data engineering change altered feature encoding silently
- D. Model drift caused by retraining on a stale baseline dataset

**Answer:** A

---

## Card 2

**QCM:** An engineering team is debating whether to use batch processing or real-time streaming for a weekly sales reporting dashboard. A senior analyst argues for Kafka "to be ready for future real-time needs." What is the strongest counterargument?

- A. Kafka cannot support batch-mode consumption, making future migration to batch impossible
- B. Streaming pipelines cannot guarantee exactly-once delivery semantics required for financial reporting
- C. Kafka has no connectors to the existing data warehouse, making integration technically infeasible
- D. Real-time streaming infrastructure is 5–10× more expensive and operationally complex than batch, and a dashboard refreshed every 15 minutes meets 95% of BI needs at a fraction of the cost

**Answer:** D

---

## Card 3

**QCM:** A team builds a RAG pipeline and notices that specific product codes and internal IDs are frequently missing from retrieved results, even though those documents are indexed. What is the most targeted fix?

- A. Switch from a managed vector database to an open-source alternative with better recall
- B. Increase the top-K parameter from 5 to 20 to retrieve more candidates
- C. Add BM25 keyword search alongside dense vector retrieval and fuse results with Reciprocal Rank Fusion
- D. Retrain the embedding model on domain-specific data to improve product code representation

**Answer:** C

---

## Card 4

**QCM:** A Data Mesh implementation gives domain teams full ownership of their data products. Three months later, the CFO reports that "revenue" is defined differently across five domains, causing contradictory board reports. Which architectural control was most likely missing?

- A. A centralised data warehouse to enforce a single schema for all domains
- B. A federated governance layer with a platform team setting shared semantic standards and metric definitions
- C. Row-level security on all revenue-related tables to prevent unauthorised access
- D. A mandatory ELT pipeline enforcing transformation rules before data reaches any domain

**Answer:** B

---

## Card 5

**QCM:** A company migrates from a traditional Data Warehouse to a Lakehouse architecture. The CTO claims this eliminates all vendor lock-in risks. A data architect disagrees. What is the strongest basis for the architect's objection?

- A. Lakehouse platforms such as Databricks use proprietary Delta Lake formats that are not compatible with open standards
- B. The lock-in concern is fully mitigated since all Lakehouse platforms now support SQL as a standard interface
- C. Lakehouse architectures require ACID transactions, which are inherently incompatible with object storage
- D. While open table formats like Apache Iceberg reduce lock-in for storage, the compute engines, managed services, and proprietary optimisations on top can still create significant lock-in

**Answer:** D

---

## Card 6

**QCM:** An autonomous procurement agent is processing 500 purchase orders per day with a 98% accuracy rate. The team decides to extend it to approve payments directly. What is the primary operational control that must be added before this transition?

- A. Human-in-the-loop approval gates for financial transactions, with immutable audit trails and a documented rollback procedure for every payment action
- B. Semantic caching to reduce redundant decisions and lower cost per transaction
- C. A reranker model to improve the agent's decision quality from 98% to 99.9%
- D. A switch from LangGraph to Temporal to gain durable execution guarantees

**Answer:** A

---

## Card 7

**QCM:** **(Misconception-based)** A machine learning team sets up automated retraining every Monday at 2am. Their lead says: "We have continuous retraining, so drift is no longer a risk." Why is this reasoning flawed?

- A. Schedule-based retraining is not considered "continuous" — only online learning qualifies
- B. Automated retraining without eval gates and champion/challenger promotion can deploy a worse model than the one it replaces, while schedule-based retraining also fails to respond when drift occurs mid-cycle
- C. Retraining frequency only matters for classification models, not regression models
- D. Retraining cadence has no effect on drift — only feature engineering changes can address drift

**Answer:** B

---

## Card 8

**QCM:** An LLM-powered customer support system suddenly starts receiving complaints about inconsistent answers. Investigation reveals the base model was silently updated by the provider two weeks ago. Which monitoring signal would have detected this earliest?

- A. Input token count per query, which spikes when the model produces longer responses
- B. Cost per query, which increases when a newer, more capable model version is served
- C. Latency p95, which typically increases when a provider updates the underlying model
- D. Consistency evaluation — automated paraphrase testing that checks whether the same question receives equivalent answers across prompt variations

**Answer:** D

---

## Card 9

**QCM:** A healthcare company stores patient records in an unstructured data lake. Their CISO claims GDPR compliance is satisfied because all structured databases have row-level security. What is the critical flaw in this compliance posture?

- A. Row-level security is not a recognised GDPR control; only encryption satisfies Article 32
- B. Unstructured data — including PDFs, call transcripts, and support tickets — contains the majority of hidden PII and is largely ungoverned; 85% of companies cannot locate all personal data they hold, and the structured perimeter does not cover this exposure
- C. GDPR only applies to structured data held in relational databases, so the CISO's position is technically correct
- D. The data lake's object storage provider is responsible for GDPR compliance, not the company

**Answer:** B

---

## Card 10

**QCM:** A team is evaluating whether to use PGVector or Pinecone for a new RAG pipeline that will index approximately 500,000 document chunks. What is the most operationally sound recommendation?

- A. Use PGVector within the existing Postgres instance — it provides vector search with ACID compliance and no new infrastructure overhead at this scale, and the migration path to a specialised store is clear if the index outgrows it
- B. Use Pinecone immediately, as managed vector databases always outperform database extensions at any scale
- C. Use Chroma for its local-dev-friendly interface, then migrate to production-grade tooling later
- D. Use Weaviate for its hybrid search capability, since BM25 is mandatory for any production RAG pipeline regardless of scale

**Answer:** A

---

## Card 11

**QCM:** **(Trade-off / limitation)** An organisation wants the highest possible data accessibility for its analysts while meeting GDPR obligations for customer data. Which architectural pattern best navigates this trade-off?

- A. A fully open data lake with post-hoc anonymisation applied before analyst access
- B. A centralised data warehouse controlled exclusively by the IT team, with analyst requests processed via ticketing
- C. A Data Mesh with federated governance — domain teams own and publish data with quality SLAs, while a central platform team enforces classification, access policies, and GDPR controls as guardrails
- D. Synthetic data generation to replace all real customer data, enabling unrestricted analyst access

**Answer:** C

---

## Card 12

**QCM:** An ML team uses NannyML for production monitoring instead of a tool like Evidently. A colleague asks why, given that NannyML is less commonly mentioned. What is the specific capability that justifies this choice?

- A. NannyML generates HTML drift reports that integrate natively with CI/CD pipelines
- B. NannyML supports streaming data sources, while Evidently only handles batch data
- C. NannyML performs slice-based performance analysis not available in other tools
- D. NannyML detects model degradation without requiring ground-truth labels, using confidence-based estimation — essential when labels arrive weeks after prediction, as in insurance or credit use cases

**Answer:** D

---

## Card 13

**QCM:** A multi-agent system has an orchestrator and three specialist subagents sharing a single service account for tool execution. An incident occurs where a record is incorrectly deleted. What fundamental design flaw made forensic investigation impossible and blast radius unbounded?

- A. Shared identity across agents means no individual audit trail per agent, no per-agent permission scoping, and no way to attribute the destructive action to a specific agent — shared identity is a shared failure mode
- B. The orchestrator was implemented in LangGraph instead of Temporal, which lacks per-agent state isolation
- C. The subagents were not equipped with a dry-run mode, which would have prevented the deletion
- D. The system lacked a critic-actor pattern, which would have reviewed the deletion before execution

**Answer:** A

---

## Card 14

**QCM:** **(Real-world application)** A European bank is deploying an AI model that automatically denies loan applications below a risk threshold. Under the EU AI Act, which operational requirement most directly applies to this system?

- A. The model must be open-sourced under the GPAI transparency provisions of the Act
- B. As a high-risk AI system used in credit scoring, the bank must implement documented human oversight (Article 14), audit logs, drift monitoring, and register the system in the EU AI database
- C. The model is exempt if accuracy exceeds 95%, as the Act only regulates systems with demonstrable harm
- D. The bank must apply only GDPR Article 22 automated decision-making provisions — the EU AI Act does not add further requirements for credit scoring models

**Answer:** B

---

## Card 15

**QCM:** A company evaluates its data pipeline and discovers analysts still rely on Informatica for ETL, with transformation logic locked in proprietary tools. The CTO argues migration is "too risky." What is the strongest business case for migration to a modern ELT stack?

- A. ELT with dbt eliminates the need for data quality checks, reducing pipeline complexity significantly
- B. Modern ELT removes the risk of data loss since raw data is always preserved in the warehouse before transformation
- C. An ELT approach with dbt places business logic in version-controlled SQL that analysts can read and change themselves — reducing licence costs, cutting iteration time from weeks to hours, and making transformation logic auditable and testable
- D. ELT architectures process data faster than ETL because transformations run inside the database engine rather than on a separate server

**Answer:** C

---

## Card 16

**QCM:** An LLMOps team runs evals after every model update but not after every prompt change. A prompt engineer modifies the system prompt to improve tone. Two days later, safety incidents increase. What process failure does this illustrate?

- A. The eval suite was not testing safety dimensions, only correctness
- B. The monitoring system failed to detect the safety regression within the first hour of deployment
- C. The prompt engineer should not have had write access to the production system prompt
- D. Prompts are code — any prompt change is a version change that requires a full eval run; skipping evals on prompt-only changes creates the same risk as skipping evals on model updates

**Answer:** D

---

## Card 17

**QCM:** A Lakehouse architect recommends Apache Iceberg as the table format for a new platform. A stakeholder asks what specific problem Iceberg solves that a simple S3 data lake does not. What is the most accurate answer?

- A. Iceberg adds columnar compression to S3, reducing storage costs by 60–80% compared to raw parquet
- B. Iceberg provides ACID transaction support, time-travel queries, and schema evolution on object storage — enabling warehouse-grade reliability on lake-cost storage while avoiding proprietary vendor formats
- C. Iceberg replaces the need for a compute engine by embedding query execution inside the table format itself
- D. Iceberg is a caching layer that makes S3 queries run at in-memory speeds for BI workloads

**Answer:** B

---

## Card 18

**QCM:** An agentic system is deployed at Level 3 autonomy (conditional autonomy) for IT incident response — it auto-patches known CVEs without human approval. A novel vulnerability causes the agent to incorrectly patch 200 production servers. Which missing control most directly contributed to this outcome?

- A. Patch operations on production systems should have been classified as critical-risk actions blocked from autonomous execution — the action risk classification table was not applied correctly, or the allowlist was too broad
- B. The agent lacked a semantic cache to prevent repeated identical patch operations
- C. The agent should have used a critic-actor pattern with a second LLM reviewing each patch
- D. Level 3 autonomy is only appropriate for customer-facing use cases, not infrastructure operations

**Answer:** A

---

## Card 19

**QCM:** **(Trade-off / limitation)** A team building an LLM product must choose between a managed API (e.g., Claude via Bedrock) and self-hosting an open-weight model. They have 10,000 daily active users and are 4 months post-launch. What is the most important factor favouring continued use of the managed API at this stage?

- A. Open-weight models have lower output quality ceilings than frontier managed models regardless of use case
- B. Managed APIs eliminate GDPR obligations since data is processed by the provider
- C. The team has not yet proven the volume and latency requirements that justify GPU infrastructure costs and MLOps complexity — self-hosting 12–18 months too early is a common and expensive mistake
- D. Self-hosted models cannot be monitored with LLMOps tooling, making production observability impossible

**Answer:** C

---

## Card 20

**QCM:** A data quality audit reveals that the same customer appears as "New York", "NY", and "NYC" in three different systems, causing CRM deduplication to fail and revenue to be double-counted. Which data quality dimension is primarily violated?

- A. Completeness — the address field is populated with partial values
- B. Validity — the values fail business rule validation for a standard city name format
- C. Accuracy — the city names do not correctly reflect the customer's registered address
- D. Consistency — the same entity is represented in different formats across systems, preventing reliable cross-system comparison

**Answer:** D

---

## Card 21

**QCM:** An engineering team deploys a champion/challenger setup where the challenger model receives 5% of production traffic. After 36 hours, the challenger shows better offline eval scores but worse user thumbs-down rates and higher session abandonment. What is the correct decision?

- A. Promote the challenger — offline eval scores are the definitive measure of model quality
- B. Keep the champion in production — live user signals (thumbs-down rate, session abandonment) are better proxies for real-world quality than offline evals, which miss what production adversarial conditions reveal
- C. Extend the shadow period to 7 days to collect more data before making any decision
- D. Investigate the eval dataset for bias, as a divergence between offline and online metrics always indicates an evaluation methodology error

**Answer:** B

---

## Card 22

**QCM:** A company uses a fixed PSI threshold of 0.2 to trigger model retraining, following industry guidance. A data scientist argues this is incorrect for their specific fraud detection model. What is the valid technical basis for this argument?

- A. The 0.2 threshold is an industry default that should be calibrated against the specific model's sensitivity to distribution change; some features are more predictive of performance degradation than others, and a universal threshold ignores this
- B. PSI thresholds only apply to financial models — fraud detection requires KL divergence instead
- C. PSI cannot detect concept drift in fraud models because fraud patterns are categorical, not continuous
- D. The 0.2 threshold is too conservative — modern drift tools have made this level of sensitivity unnecessary with current data volumes

**Answer:** A

---

## Card 23

**QCM:** **(Real-world application)** Netflix processes 700 billion events per day for personalisation. A new product team wants to replicate this for a B2B SaaS product with 2,000 enterprise users and weekly product usage reports. What is the most strategically sound architectural recommendation?

- A. Adopt a full Kafka + Flink streaming stack to ensure the infrastructure can scale if user growth accelerates
- B. Use a Data Warehouse with scheduled ETL jobs, since semi-structured event data requires schema-on-write for quality guarantees
- C. Use a Lakehouse architecture with batch processing — the volume and latency requirements do not justify real-time streaming infrastructure, and the operational complexity would far outweigh any benefit
- D. Implement a Lambda architecture combining batch and streaming layers to provide both historical and real-time views

**Answer:** C

---

## Card 24

**QCM:** During a production LLM deployment review, a team discovers that raw user conversation logs — including names and financial details — are being stored in their LangSmith tracing workspace. What is the primary risk, and what is the correct remediation?

- A. The risk is latency degradation from logging overhead; remediation is async trace shipping
- B. The risk is model quality regression from logging too many traces; remediation is reducing sampling to 1% of production calls
- C. The risk is vendor lock-in from using a proprietary tracing tool; remediation is switching to OpenTelemetry
- D. The risk is a GDPR violation — LLM traces contain raw user inputs and PII ends up in logs unless actively prevented; remediation is PII scrubbing before trace data leaves the application tier

**Answer:** D

---

## Card 25

**QCM:** **(Misconception-based)** A product manager argues that their company's AI assistant is safe to deploy without guardrails because "the LLM provider already has content filtering built in." Why is this reasoning insufficient for a production deployment?

- A. Provider content filters are not activated by default and must be manually enabled per API key
- B. Provider-level content filtering addresses broad safety categories but does not cover application-specific requirements: PII detection and redaction, prompt injection from user inputs, topic blocking for out-of-scope queries, groundedness checks, or output filtering for sensitive data leakage specific to the business context
- C. Provider content filters introduce too much latency for production deployments and should be replaced with in-house classifiers
- D. Content filtering is only relevant for consumer products — enterprise B2B deployments do not require guardrails

**Answer:** B

---

## Card 26

**QCM:** An MLOps engineer sets a retraining trigger when PSI exceeds 0.2 on any feature OR when model accuracy drops below the defined SLA. A colleague recommends adding a third trigger. Which additional trigger is most operationally valuable?

- A. A trigger based on a maximum time backstop — if no drift trigger fires within 30 days, force a retrain regardless, since drift detectors can have blind spots and stale models are a silent risk
- B. A trigger when the model's output confidence scores exceed 0.95, indicating potential overconfidence
- C. A trigger when the feature store ingests more than 10,000 new records, ensuring training set freshness
- D. A trigger when the serving infrastructure is updated, since container changes can affect model inference behaviour

**Answer:** A

---

## Card 27

**QCM:** An agent built for contract analysis begins "helpfully" querying competitor pricing databases and external market data sources it was not explicitly instructed to use. Which agentic failure mode is this, and what is the correct architectural control?

- A. Context overflow — the agent has lost track of its original instructions; remediation is re-injecting the system prompt every N steps
- B. Hallucinated tool calls — the agent is inventing tools that don't exist; remediation is JSON schema validation on all tool inputs
- C. Scope creep — the agent has expanded beyond its task definition; remediation is an explicit allowlist of permitted tools per task type, with human approval required for any tool call outside the list
- D. Infinite loop — the agent is repeatedly calling external sources; remediation is a max retry circuit breaker per tool

**Answer:** C

---

## Card 28

**QCM:** **(Trade-off / limitation)** A team evaluating LLM evaluation strategies considers using an LLM-as-Judge approach (using GPT-4o to evaluate outputs from a smaller model). What is the critical limitation that must be addressed before relying on this approach in production?

- A. LLM-as-Judge cannot evaluate safety dimensions — only correctness and groundedness
- B. Using a flagship model as judge for a smaller model creates a conflict of interest that inflates quality scores for the evaluated model
- C. LLM-as-Judge is too slow for production eval pipelines and can only be used for offline batch evaluation
- D. Uncalibrated LLM judges introduce systematic biases that correlate with response style, length, or confidence rather than actual correctness; the judge must be calibrated against human-labelled examples before its scores can be trusted

**Answer:** D

---

## Card 29

**QCM:** A company's CDO reviews their data strategy and realises all their competitive advantage relies on internal transactional data. A consultant recommends exploring the external data market. What is the most strategically accurate framing of this opportunity?

- A. External data is inherently less reliable than internal data and should only be used for benchmarking, not model training
- B. The €400B+ global data market includes enrichment, benchmarking, and partnership data that can augment internal assets — and the company's own transactional data may have resale value to logistics or urban planning partners as a secondary revenue stream
- C. Purchasing external data creates GDPR liability that outweighs the strategic benefit for most European companies
- D. Synthetic data generation is now mature enough to fully replace external data acquisition at lower cost and zero compliance risk

**Answer:** B

---

## Card 30

**QCM:** An organisation wants to move from Level 1 (assisted) to Level 3 (conditional autonomy) agentic operations for customer refund processing, skipping Level 2. The engineering team argues the model accuracy of 97% justifies it. What is the strongest objection?

- A. Skipping Level 2 means the team has never validated that the human oversight checkpoints work reliably, that the escalation paths function under real load, and that governance and compliance frameworks are in place — autonomy levels must be earned incrementally with data, not assumed from demo accuracy
- B. 97% accuracy is below the 99.5% threshold required by the EU AI Act for autonomous financial operations
- C. Level 3 autonomy requires a minimum of 12 months of Level 2 operation as mandated by the EU AI Act Article 14
- D. Customer refund processing is classified as a prohibited practice under the EU AI Act because it involves financial decisions without human consent

**Answer:** A

---

## Answer Key

| # | Answer | Topic |
|---|--------|-------|
| 1 | A | MLOps — Concept Drift |
| 2 | D | Data Pipelines — Batch vs Streaming Trade-off |
| 3 | C | LLMOps — RAG Hybrid Search |
| 4 | B | Data Architecture — Data Mesh Governance |
| 5 | D | Data Architecture — Lakehouse Lock-in |
| 6 | A | Agentic Ops — Human-in-the-loop Controls |
| 7 | B | MLOps — Retraining Misconception |
| 8 | D | LLMOps — Silent Model Drift Detection |
| 9 | B | Data Governance — GDPR & Unstructured Data |
| 10 | A | LLMOps — Vector Database Selection |
| 11 | C | Data Architecture — Accessibility vs Control |
| 12 | D | MLOps — NannyML Label-free Drift Detection |
| 13 | A | Agentic Ops — Shared Identity Failure Mode |
| 14 | B | Governance — EU AI Act High-Risk Systems |
| 15 | C | Data Pipelines — ETL to ELT Migration |
| 16 | D | LLMOps — Prompt Versioning & Evals |
| 17 | B | Data Architecture — Apache Iceberg |
| 18 | A | Agentic Ops — Action Risk Classification |
| 19 | C | LLMOps — Build vs Buy vs Rent |
| 20 | D | Data Quality — Consistency Dimension |
| 21 | B | MLOps — Champion/Challenger Evaluation |
| 22 | A | MLOps — PSI Threshold Calibration |
| 23 | C | Data Pipelines — Real-world Architecture Selection |
| 24 | D | LLMOps — PII in Traces / GDPR |
| 25 | B | LLMOps — Guardrails Misconception |
| 26 | A | MLOps — Retraining Trigger Strategy |
| 27 | C | Agentic Ops — Scope Creep |
| 28 | D | LLMOps — LLM-as-Judge Limitation |
| 29 | B | Data Strategy — External Data Market |
| 30 | A | Agentic Ops — Autonomy Level Progression |