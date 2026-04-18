# Course 8 Data and Infra 

Data & AI Infrastructure – Business Masters

* { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #f0f2f8; font-family: 'Segoe UI', sans-serif; color: #1e293b; display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding-bottom: 20px; }

#nav { width: 980px; max-width: 98vw; display: flex; align-items: center; justify-content: space-between; padding: 12px 0; }

#nav button { background: rgba(79,70,229,.1); border: 1px solid rgba(79,70,229,.35); color: #4f46e5; padding: 7px 22px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all .2s; }

#nav button:hover { background: #4f46e5; border-color: #4f46e5; color: #fff; }

#nav button:disabled { opacity: 0.25; cursor: default; }

#counter { font-size: 13px; color: #4f46e5; font-weight: 700; letter-spacing: 1px; }

.slide-wrap { width: 980px; max-width: 98vw; }

.slide { width: 100%; aspect-ratio: 16/9; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; display: none; flex-direction: column; box-shadow: 0 4px 32px rgba(79,70,229,.10), 0 2px 8px rgba(0,0,0,.06); }

.slide.active { display: flex; }

.hdr { padding: 11px 26px 7px; border-bottom: 1px solid #f1f5f9; background: #fafbff; }

.tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366f1; margin-bottom: 2px; }

.title { font-size: 16px; font-weight: 800; color: #0f172a; line-height: 1.2; }

.sub { font-size: 10px; color: #94a3b8; margin-top: 1px; }

.body { flex: 1; padding: 9px 26px; display: flex; gap: 13px; overflow: hidden; }

.foot { padding: 4px 26px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; background: #fafbff; }

.fl { font-size: 9px; font-weight: 700; letter-spacing: 1px; color: #6366f1; }

.fn { font-size: 9px; color: #cbd5e1; }

.col { flex: 1; display: flex; flex-direction: column; gap: 6px; }

.col2 { flex: 2; }

.card { border-radius: 9px; padding: 7px 10px; border: 1px solid; }

.card.i { border-color: #c7d2fe; background: #eef2ff; }

.card.g { border-color: #a7f3d0; background: #ecfdf5; }

.card.p { border-color: #ddd6fe; background: #f5f3ff; }

.card.c { border-color: #a5f3fc; background: #ecfeff; }

.card.a { border-color: #fde68a; background: #fffbeb; }

.card.r { border-color: #fecaca; background: #fef2f2; }

.card.b { border-color: #bfdbfe; background: #eff6ff; }

.card.d { border-color: #e2e8f0; background: #f8fafc; }

.card.o { border-color: #fed7aa; background: #fff7ed; }

.card.teal { border-color: #99f6e4; background: #f0fdfa; }

.ct { font-size: 10px; font-weight: 700; margin-bottom: 3px; color: #0f172a; }

.cd { font-size: 10.5px; color: #475569; line-height: 1.45; }

ul.L { list-style: none; display: flex; flex-direction: column; gap: 4px; }

ul.L li { font-size: 10.5px; line-height: 1.4; padding-left: 14px; position: relative; color: #334155; }

ul.L li::before { content: '▸'; position: absolute; left: 0; color: #6366f1; font-size: 9px; top: 2px; }

.tbl { width: 100%; border-collapse: collapse; font-size: 10px; }

.tbl th { background: #eef2ff; color: #4338ca; padding: 5px 7px; text-align: left; border: 1px solid #c7d2fe; font-weight: 700; font-size: 9px; letter-spacing: .5px; }

.tbl td { padding: 4px 7px; border: 1px solid #e2e8f0; vertical-align: top; color: #334155; font-size: 10px; }

.tbl tr:nth-child(even) td { background: #f8fafc; }

.bdg { display: inline-block; padding: 2px 7px; border-radius: 20px; font-size: 9px; font-weight: 700; margin: 1px; }

.bdg.i { background: #e0e7ff; color: #4338ca; border: 1px solid #c7d2fe; }

.bdg.g { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }

.bdg.p { background: #ede9fe; color: #5b21b6; border: 1px solid #ddd6fe; }

.bdg.c { background: #cffafe; color: #0e7490; border: 1px solid #a5f3fc; }

.bdg.a { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }

.bdg.r { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }

.bdg.b { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; }

.bdg.o { background: #ffedd5; color: #9a3412; border: 1px solid #fed7aa; }

.bdg.teal { background: #ccfbf1; color: #0f766e; border: 1px solid #99f6e4; }

.hl { background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 7px 10px; font-size: 10.5px; color: #334155; }

.lbl { font-size: 8.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #94a3b8; margin-bottom: 3px; margin-top: 2px; }

.tl { display: flex; flex-direction: column; gap: 5px; }

.tli { display: flex; gap: 8px; align-items: flex-start; }

.tld { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; flex-shrink: 0; margin-top: 1px; color: #fff; }

.big-emoji { font-size: 24px; line-height: 1; margin-bottom: 3px; }

strong { color: #0f172a; }

svg text { font-family: 'Segoe UI', sans-serif; }

.kp { display: flex; flex-wrap: wrap; gap: 3px; margin-top: 4px; }

.ts { background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 60%, #faf5ff 100%); position: relative; overflow: hidden; }

.ts::before { content: ''; position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,.12) 0%, transparent 70%); top: -150px; right: -100px; pointer-events: none; }

.ts::after { content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(245,158,11,.08) 0%, transparent 70%); bottom: -80px; left: 180px; pointer-events: none; }

.ts-c { display: flex; flex-direction: column; height: 100%; padding: 28px 50px; justify-content: center; position: relative; z-index: 1; }

.ts-tag { font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #6366f1; margin-bottom: 8px; }

.ts-main { font-size: 36px; font-weight: 900; line-height: 1.05; color: #0f172a; }

.ts-main span { background: linear-gradient(90deg, #4f46e5, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.ts-sub { font-size: 12px; color: #64748b; margin-top: 8px; max-width: 460px; line-height: 1.5; }

.ts-inst { margin-top: 18px; display: flex; align-items: center; gap: 12px; }

.av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,#4f46e5,#d97706); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: #fff; }

.ts-nm { font-size: 13px; font-weight: 700; color: #0f172a; }

.ts-rl { font-size: 10px; color: #94a3b8; }

.ts-logo { margin-top: 14px; font-size: 9px; font-weight: 700; letter-spacing: 2px; color: #6366f1; border: 1px solid #c7d2fe; background: #eef2ff; display: inline-block; padding: 3px 10px; border-radius: 4px; }

.ts-pills { position: absolute; right: 50px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 8px; z-index: 1; }

.tsp { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 5px 14px; font-size: 10px; color: #64748b; box-shadow: 0 1px 4px rgba(0,0,0,.06); }

.tsp span { color: #4f46e5; font-weight: 700; }

.ss { background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%); }

.ss-c { display: flex; flex-direction: column; height: 100%; padding: 0 50px; justify-content: center; }

.ss-n { font-size: 80px; font-weight: 900; color: rgba(99,102,241,.12); line-height: 1; }

.ss-t { font-size: 30px; font-weight: 900; margin-top: -10px; color: #0f172a; }

.ss-sub-t { font-size: 13px; background: linear-gradient(90deg,#4f46e5,#f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700; margin-top: 2px; }

.ss-d { font-size: 11.5px; color: #64748b; margin-top: 6px; max-width: 500px; }

.ss-tags { display: flex; gap: 5px; margin-top: 12px; flex-wrap: wrap; }

.ss-tags .bdg { background: #e0e7ff; color: #3730a3; border-color: #c7d2fe; }

← Prev

1 / 31

Next →

Master in Business · Applied AI Series

Data & AI

Infrastructure

Data types, architecture evolution, ETL/ELT, key platforms, data strategy, anonymisation, auditing, and industry compliance — everything a business leader needs before making any data decision.

F

Firas Ben Hassan

AI Guest Lecturer · Data & AI Infrastructure

MASTER IN BUSINESS · APPLIED AI SERIES

31

Slides

4-Hour

Session

Business

Focus

No Coding Required

AI-Generated

+ Human-Reviewed

The Big Picture

Data is the New Oil — But Only If You Can Refine It

Most companies are drowning in data and starving for insight. The problem is never the data itself — it's the architecture and strategy around it.

📊

328 Million TB

of data created every day in 2025. 90% of all data was created in the last two years.

💸

$2.5 Trillion

lost annually due to poor data quality (IBM). Every bad decision is a data strategy failure upstream.

⚖️

€1.2 Billion

Meta's 2023 GDPR fine — the largest ever. Data compliance failures are existential financial risks.

🌍 Real-World Failures Across the Stack

NHS England (2020):

Lost 16,000 COVID test results because data was exported to an Excel file that silently truncated rows. An infrastructure format failure with public health consequences.

Zillow (2021):

Shut down its AI home-buying division after models trained on stale, unvalidated data caused $500M in losses. A data pipeline and quality failure.

Facebook–Cambridge Analytica (2018):

87M users' data misused. Systemic failure of data classification, access controls, and purpose limitation.

🏗️ The Core Premise

Data is only valuable when it is

correctly classified, well governed, legally compliant, technically accessible, and strategically aligned

. Every infrastructure and pipeline decision flows from data strategy — not the other way around.

What This Session Covers

Data Types

Architecture Evolution

ETL vs ELT

Key Platforms

Data Strategy

Anonymisation

Auditing

GDPR / EU AI Act

Industry Requirements

⚠️ The Executive Blind Spot

Most data failures are strategy, architecture, and governance failures — misdiagnosed as technology failures. You cannot buy your way out of a bad data strategy with better tooling.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

2 / 31

Course Overview

Today's Journey — 6 Blocks, 31 Slides, 4 Hours

Block 0 · 15min

Types of Data. Structured, unstructured, semi-structured. Personal vs non-personal. Sensitive categories.

Block 1 · 30min

Architecture Evolution. Data Warehouse → Data Lake → Lakehouse. 30 years in 30 minutes.

Block 2 · 25min

ETL vs ELT. Pipelines, batch vs streaming. Key tools. Where transformations live and why it matters.

Block 3 · 25min

Key Platforms. Snowflake, Databricks, Azure Synapse, AWS, GCP. How to evaluate them as a business.

Block 4 · 30min

Data Strategy & Governance. Failure patterns, data mesh, lineage, catalogues, contracts, quality.

Block 5 · 35min

Anonymisation & Industry Compliance. GDPR, EU AI Act, DORA, HIPAA, PSD2, sector obligations.

By the end you will be able to…

Explain the data architecture evolution and choose the right pattern for a business context

Distinguish ETL from ELT and evaluate the trade-offs for any organisation

Compare the major data platforms (Snowflake, Synapse, Databricks, BigQuery) on business criteria

Identify the five most common data strategy failure patterns and their root causes

Choose the right anonymisation technique and map sector-specific compliance obligations

⚠️ Transparency Statement

"

These slides were generated by AI and reviewed by a human expert.

" This session is itself a live demonstration: an AI-powered tool built the infrastructure that delivered this content to you.

AI-Generated

Human-Reviewed

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

3 / 31

00

Types of Data

Classification, sensitivity, and legal scope — the foundation of everything

You cannot govern, protect, or exploit data you have not classified. Data type determines storage, processing, legal basis, and risk — every architecture decision follows from this.

Structured

Unstructured

Personal Data

Special Categories

Metadata

Data Classification

Types of Data

The Data Taxonomy Every Business Leader Must Know

Wrong classification leads to wrong storage, wrong controls, wrong compliance — and ultimately wrong decisions

1

Structured Data

Organised in rows and columns. Queryable with SQL. Easiest to govern, analyse, and audit. Represents ~20% of all data but powers most BI and reporting.

Examples:

CRM records, transaction logs, inventory counts, financial ledgers, HR databases.

Relational DBs

CSV/Excel

Data Warehouses

2

Semi-Structured Data

Has some organisation (tags, keys) but no fixed schema. Dominant in modern APIs, IoT, and event logs.

Examples:

JSON event logs, XML documents, email metadata, clickstream events, IoT sensor payloads.

JSON

XML

Avro

Parquet

ORC

3

Unstructured Data

No predefined format. ~80% of all enterprise data. Hardest to govern — and often where PII hides undetected.

Examples:

PDFs, contracts, images, audio recordings, call transcripts, medical notes, social media posts.

Object Storage (S3)

Data Lakes

NLP / OCR Processing

4

Metadata — "Data About Data"

Often underestimated — and sometimes more sensitive than the data it describes. Location tags in photos reveal home addresses. Call duration patterns reveal relationships.

Examples:

File timestamps, author names, photo GPS tags, call duration logs, browsing history patterns.

Data Catalogues

Lineage Tools

5

Derived / Inferred Data

Generated by processing other data — credit scores, risk ratings, behavioural profiles, AI model outputs.

Highest regulatory risk:

GDPR and EU AI Act place special obligations on automated inferences about individuals.

AI Outputs

Credit Scores

Risk Profiles

Recommendation Signals

⚠️ GDPR Sensitivity Tiers — Know Before You Collect

Special Category (Art.9) — Highest Protection:

Health data, biometrics, racial/ethnic origin, political opinions, religious beliefs, sexual orientation. Requires explicit consent or specific legal basis.

Personal Data (Art.4) — Standard Protection:

Name, email, IP address, location, online identifiers — any data that can identify a natural person.

Pseudonymised — Reduced (not zero) risk:

Still GDPR-in-scope if re-identification is possible.

Truly Anonymised — Outside GDPR scope:

But anonymisation must be irreversible and robust.

💡 The Hidden PII Problem in Unstructured Data

A contract PDF contains names and addresses. A support ticket contains health information. A call recording contains financial details.

85% of companies cannot locate all personal data they hold.

Automated discovery tools are no longer optional: Microsoft Purview, BigID, AWS Macie scan and classify unstructured stores automatically.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

5 / 31

01

Data Architecture Evolution

Data Warehouse → Data Lake → Lakehouse — 30 years in 30 minutes

Every technology choice in your data platform traces back to one question: where does data live, and who can query it? Each generation solved the previous era's problem — and created a new one.

Data Warehouse

Data Lake

Lakehouse

Data Mesh

Data Fabric

OLAP vs OLTP

Architecture Evolution

Four Eras of Data Architecture — What Changed and Why

Each era solved the previous generation's bottleneck — at the cost of introducing a new one

1

1990s–2000s · Data Warehouse

Structured, relational databases designed for reporting and BI. SQL-based, schema-on-write.

Great for dashboards, terrible for ML and unstructured data.

Scales expensively — adding capacity meant buying new hardware.

Oracle

Teradata

IBM DB2

MS SQL Server

Bottleneck created:

Only structured data. Too expensive to store everything. Analysts wait days for new reports.

2

2010s · Data Lake (Hadoop / S3)

Store everything cheaply — raw, unstructured, semi-structured. "Schema on read." Cheap storage (S3, HDFS). Solved cost.

Created chaos: data without governance = data swamp.

Hadoop HDFS

Amazon S3

Azure ADLS

Apache Hive

Bottleneck created:

No ACID transactions, no quality, no governance. Analysts can't trust what they find.

3

2018–Now · Cloud Data Warehouse

Warehouse — but cloud-native, elastic, pay-per-query.

Separated compute from storage

— the architectural breakthrough. SQL on petabytes in seconds. Now the dominant enterprise BI pattern.

Snowflake

BigQuery

Amazon Redshift

Azure Synapse

Bottleneck created:

Still weak on ML workloads. Proprietary formats create lock-in.

4

2020–Now · Lakehouse

Lake storage costs + warehouse reliability + ACID transactions + open formats.

One platform for BI, ML, and streaming.

Powers most modern AI platforms. Built on open table formats (Delta Lake, Iceberg, Hudi) ensuring data portability.

Databricks Delta Lake

Apache Iceberg

Apache Hudi

AWS Lake Formation

Capability vs Cost/TB over Time

Low

High

Warehouse

Data Lake

Cloud DWH

Lakehouse ★

— Capability

-- Cost/TB

💡 Real Case: Zalando's Migration

Zalando migrated from Hadoop data lake to Databricks Lakehouse: pipeline runtime cut 80%, query time from hours to minutes. One platform now serves both BI and 200+ data products across 30+ domains.

⚠️ OLTP vs OLAP — Don't Confuse Them

OLTP

(Online Transaction Processing): operational databases for day-to-day transactions — fast inserts/updates, row-level (PostgreSQL, MySQL, Oracle).

OLAP

(Online Analytical Processing): analytical databases for aggregations across millions of rows — columnar storage, read-optimised (Snowflake, BigQuery, Redshift).

Never run analytics on your OLTP production database.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

7 / 31

Architecture Evolution

Data Lake vs Data Swamp — What Went Wrong and How Lakehouse Fixes It

The data lake was the right idea with the wrong governance. Understanding its failure modes explains every modern architecture decision.

🔵 The Data Lake Promise (2012)

Store all data — raw, unprocessed, any format — in cheap object storage (S3, ADLS). Analyse it later with any tool. No upfront schema design needed.

Result: $10/TB instead of $1,000/TB.

Technologies:

Apache Hadoop HDFS

Amazon S3

Azure Data Lake Storage

Google Cloud Storage

Apache Hive

🔴 The Data Swamp Reality

Without governance, the lake became a swamp:

• No ACID transactions — concurrent writes corrupt data

• No schema enforcement — unknown data types

• No versioning — can't reproduce yesterday's analysis

• No quality checks — "it's in the lake" ≠ trustworthy

• No catalogue — nobody knows what's there

Symptom:

"We have a data lake but nobody uses it because they don't trust it."

✅ The Lakehouse: Best of Both Worlds

The Lakehouse adds a

transaction and governance layer

on top of cheap lake storage using open table formats:

Delta Lake (Databricks):

ACID transactions on S3/ADLS. Supports time travel (query data as it was 30 days ago). Used by Comcast, Regeneron, HSBC.

Apache Iceberg (Netflix, Apple):

Open format, backed by AWS, Google, Snowflake. Best cross-engine compatibility. The portability choice.

Apache Hudi (Uber):

Optimised for streaming upserts (update+insert). Used when records frequently change (e.g. order status updates).

Architecture Comparison

Feature

Data Warehouse

Data Lake

Lakehouse

Storage cost

High

Very low

ACID transactions

Yes

No

Yes

Unstructured data

No

Yes

ML / AI workloads

Limited

Yes

Data quality / governance

Strong

Weak

Strong

SQL / BI support

Excellent

Complex

Excellent

Vendor lock-in risk

High

Low (S3)

Low (Iceberg)

2025 Verdict:

For most enterprises building new platforms, the Lakehouse pattern (Databricks or cloud-native) is the default choice. Existing Snowflake/BigQuery warehouses remain excellent for pure BI. The decision is workload-driven, not ideology-driven.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

8 / 31

02

ETL vs ELT & Pipelines

How data moves from source to insight — and why the architecture shift matters

Every dashboard, every AI model, every automated decision rests on a data pipeline. ETL was the old world. ELT is the new. Streaming is the frontier. Choosing wrong costs 5–10× in complexity and money.

ETL

ELT

Batch

Streaming

Orchestration

dbt

Fivetran

Kafka

ETL vs ELT

ETL vs ELT — A Fundamentally Different Philosophy

Not just a letters swap. A complete shift in where transformation happens, who controls it, and how fast it moves.

ETL — Extract → Transform → Load (Legacy)

EXTRACT

→

TRANSFORM

→

LOAD

❌ Heavyweight ETL server (Informatica, SSIS, Talend, IBM DataStage)

❌ Business logic locked in proprietary tools — analysts must file IT tickets

❌ Expensive licences (Informatica: €200K+/yr) · Brittle · Months to change

ELT — Extract → Load → Transform (Modern Standard)

EXTRACT

→

LOAD

→

TRANSFORM

✅ Analysts write SQL in dbt — version controlled in git like software code

✅ Raw data always preserved in warehouse — transformations are repeatable

✅ Cloud compute is cheap — no separate ETL server needed

The Modern ELT Stack

Ingest: Fivetran · Airbyte · Stitch

Transform: dbt Core / dbt Cloud

Orchestrate: Airflow · Prefect · Dagster

Store: Snowflake · BigQuery · Synapse

Quality: Great Expectations · Soda

Visualise: Power BI · Tableau · Looker

dbt — The Tool That Democratised Transformation

dbt (data build tool) lets analysts write SQL transformations that are version-controlled in git, tested, and documented like software.

50,000+ companies

use it including GitLab, Shopify, JetBlue, Vodafone.

dbt Core:

free, open-source, self-managed.

dbt Cloud:

€100–500/month, managed, collaborative.

A data analyst with dbt is 10× more productive than a traditional ETL developer. The transformation logic is visible, testable, and owned by the business — not locked in an IT tool.

Fivetran vs Airbyte — The Ingestion Decision

Fivetran:

500+ managed connectors, zero maintenance, auto-schema migration. Cost: $500–5,000/month. Used by Condé Nast, HubSpot, Prairie State Bank.

Airbyte:

open-source, self-hosted, 350+ connectors, free. Used by ClickUp, LiveRamp. Trade-off: ops burden for cost savings.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

10 / 31

Pipelines

Batch vs Real-Time Streaming — Choose the Right Speed

Not all data needs to move in real-time. The wrong speed choice costs 5–10× in complexity and money — and is the most common over-engineering mistake.

🕐 Batch Processing

Data collected → processed at scheduled intervals (hourly, nightly, weekly). Simple, reliable, cost-effective.

Key Technologies:

Apache Spark

AWS Glue

dbt

Azure Data Factory

Real Examples:

Walmart runs nightly batch jobs to sync 10,000+ store inventory counts. Payroll systems worldwide run weekly batch. Credit card statements: monthly batch.

✅ Simple

✅ Cheap

✅ Reliable

❌ Latency

⚡ Stream Processing

Data processed event-by-event as it arrives. Sub-second latency.

Key Technologies:

Apache Kafka

AWS Kinesis

Apache Flink

Azure Event Hubs

Real Examples:

Uber processes 1 trillion events/day on Kafka for surge pricing. LinkedIn uses Kafka for real-time feed ranking. Banks use Flink for millisecond fraud detection.

✅ Real-time

❌ Complex

❌ Costly

⚠️ The Streaming Trap — The Most Common Over-Engineering Mistake

Teams default to Kafka because it sounds impressive. But streaming adds 5–10× complexity and cost vs batch. A dashboard refreshed every 15 minutes serves 95% of business needs.

Ask before building any streaming pipeline: what decision actually changes if data is 15 minutes old vs 1 second old? If the answer is "nothing" — use batch.

Decision Guide: What Speed Do You Actually Need?

Use Case

Latency Needed

Right Architecture

Payment fraud detection

<200ms

Kafka + Flink

E-commerce recommendations

1–5 sec

Near-real-time

Ops / sales dashboard

Minutes

Micro-batch

Financial reporting

Hours

Nightly batch

Supply chain analytics

Daily

Daily batch

ESG / regulatory reports

Monthly

Ad-hoc batch

✅ Lambda Architecture — When You Need Both

A

speed layer

(Kafka/Flink for real-time) +

batch layer

(Spark/dbt for historical accuracy). Netflix: real-time viewing events feed instant recommendations; nightly batch retrains the full model.

Only justified when you genuinely need both — complex to maintain.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

11 / 31

03

Key Platforms & Players

Snowflake, Databricks, Microsoft Fabric, AWS, GCP — evaluated as business decisions

The platform market is crowded and every vendor claims to do everything. This block gives you a business-grade evaluation framework — not a technical benchmark.

Snowflake

Databricks

Microsoft Fabric

Azure Synapse

AWS Redshift

BigQuery

dbt Labs

Key Platforms

Cloud Data Warehouse Platforms — Business Evaluation Matrix

The four dominant cloud data warehouse platforms compared on the dimensions that actually matter to business decision-makers

Platform

Owner / Model

Primary Strength

Best Fit

Real Customers

2024 Revenue / Scale

❄️ Snowflake

Independent SaaS. Pay-per-query (credits).

SQL simplicity, easiest BI integration, best multi-cloud portability, largest partner ecosystem, Data Sharing feature

SQL-first analytics teams. Companies needing cross-cloud data sharing. Strong BI focus (Tableau, Power BI, Looker).

DoorDash, Pfizer, Capital One, NBCUniversal, Siemens

$3.5B revenue (FY2025). 10,000+ customers.

🔷 Databricks

Independent SaaS + open-source. Pay-per-DBU.

ML + data engineering. Lakehouse architecture. Apache Spark creator. Delta Lake open format. Notebooks + SQL unified.

Data engineering heavy teams. ML-first organisations. When you need both BI and AI on one platform.

Comcast, HSBC, Shell, Regeneron, Block (Square)

$1.6B revenue (2024). Valued $62B (2024 raise).

🟦 Microsoft Fabric

Microsoft. Bundled with M365 / Power BI Premium.

Unified: warehouse + lake + pipelines + Power BI + Copilot in one product. Best Microsoft stack integration. One licence.

Microsoft-heavy enterprises (Office 365, Azure AD, Teams). Replacing Azure Synapse + ADF + Power BI separately.

SAP, Volkswagen, NHS, KPMG, ABN AMRO

Part of Azure ($35B+ cloud). 45,000+ customers in first year.

🔴 Amazon Redshift

AWS. Part of AWS ecosystem.

Deepest AWS integration (S3, Glue, SageMaker, Lambda). Familiar for AWS-native teams. Redshift Serverless for variable loads.

AWS-native organisations. When all other data infrastructure is already AWS. Cost-competitive at high scale.

Lyft, McDonald's, Yelp, Scholastic, GE Aviation

Part of AWS ($107B revenue, 2024).

🟡 Google BigQuery

Google Cloud. Serverless — pay per query.

Best price/performance at petabyte scale. Serverless (no cluster management). Built-in ML (BigQuery ML). Best for Google Workspace orgs.

Data-intensive analytics at scale. Google Workspace shops. Price-sensitive high-volume workloads.

Spotify, Twitter/X, UPS, Deutsche Bank, Snap

Part of Google Cloud ($43B revenue, 2024).

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

13 / 31

Key Platforms

Microsoft Fabric & Azure Synapse — The Enterprise Default

For any organisation already using Microsoft's ecosystem, Fabric is the fastest path to a modern data platform. Understanding its architecture is essential for European enterprise buyers.

F

What Is Microsoft Fabric? (Launched 2023)

A single, unified SaaS platform combining what previously required multiple products:

Azure Data Factory (pipelines)

Azure Synapse (warehouse)

Azure Data Lake (storage)

Power BI (visualisation)

Azure ML (machine learning)

Real-Time Analytics (streaming)

All under one licence, one governance model, one OneLake storage layer.

S

Azure Synapse Analytics — The Predecessor

Microsoft's previous unified analytics platform. Still widely deployed. Combines enterprise data warehouse (Synapse SQL Pools) with big data processing (Spark Pools) and Azure Data Lake integration. Being superseded by Fabric for new deployments but remains fully supported.

Synapse SQL Pools

Synapse Spark

Synapse Pipelines

L

OneLake — The Key Architectural Differentiator

Fabric's single storage layer built on Azure Data Lake Gen2 using

Delta/Parquet format (OneLake)

. All workloads — SQL, Spark, Power BI, streaming — read from the same data without copying.

No data duplication

is Fabric's core promise vs the legacy world of multiple siloed stores.

C

Copilot in Fabric — AI-Assisted Data Work

Microsoft Copilot integrated across Fabric: generate SQL queries from natural language, auto-build Power BI reports from prompts, summarise data pipeline errors. Runs on Azure OpenAI (GPT-4).

Requires EU data residency configuration

for GDPR compliance — data does not leave EU region if configured correctly.

Microsoft Fabric vs Snowflake vs Databricks — Choose When

Choose Fabric when:

Already on Microsoft 365, Azure AD, and Power BI. Want one vendor, one invoice, one governance layer. Copilot integration matters. Example: KPMG, NHS, Volkswagen.

Choose Snowflake when:

SQL simplicity is paramount. Multi-cloud portability needed. Data Sharing with external partners. Strong Tableau/Sigma/Looker ecosystem. Example: Capital One, DoorDash.

Choose Databricks when:

Heavy data engineering + ML. Spark expertise in team. Open-source preference. Need Delta Lake's time travel and streaming. Example: HSBC, Shell, Regeneron.

⚠️ The Lock-In Calculus

Snowflake and Fabric both use proprietary storage formats internally. Mitigation: insist on

Apache Iceberg

export capability (Snowflake supports it; Fabric via OneLake shortcuts). Iceberg is backed by Apple, Netflix, AWS, Google — the safest portability bet.

Never let a vendor hold your data hostage.

EU Data Residency — What Every European Buyer Needs to Ask

All major platforms offer EU regions. But ask specifically: (1) Does metadata processing stay in EU? (2) Does support access production data cross-border? (3) Is the EU Data Boundary product (Azure) or equivalent enabled? Get it in the DPA before signing.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

14 / 31

Key Platforms

AWS & GCP Data Ecosystems — The Full Stack Picture

AWS and GCP offer entire data ecosystems — not single products. Understanding the stack is essential to evaluating any cloud proposal.

Layer

☁️ AWS

🌐 Google Cloud (GCP)

Storage

Amazon S3 (object), EBS (block), EFS (file). Industry standard for data lakes — most tools support S3 natively.

Google Cloud Storage (GCS). Direct Hadoop compatibility. Nearline/Coldline for archival at very low cost.

Data Warehouse

Amazon Redshift — columnar, petabyte-scale, deep AWS integration. Redshift Serverless for variable workloads.

BigQuery — serverless, pay-per-query, no cluster management. Best price/performance at petabyte scale in 2025.

Data Pipelines / ETL

AWS Glue (managed Spark ETL), AWS Data Pipeline (batch), Amazon Kinesis (streaming), AWS DMS (migration).

Dataflow (managed Apache Beam, batch+stream), Dataproc (managed Spark/Hadoop), Cloud Composer (managed Airflow).

Data Catalogue / Governance

AWS Glue Data Catalog, AWS Lake Formation (access controls + lineage), Amazon DataZone (data marketplace, 2023).

Google Dataplex (unified governance), Data Catalog, BigQuery column-level security, VPC Service Controls.

Streaming

Amazon Kinesis Data Streams/Firehose — managed Kafka alternative. MSK = managed Kafka. EventBridge for event routing.

Pub/Sub — Google's managed messaging, global scale. Datastream for CDC (change data capture).

AI / ML Integration

SageMaker (full MLOps), Bedrock (foundation models: Claude, Llama, Titan), Comprehend (NLP), Rekognition (vision).

Vertex AI (AutoML, pipelines, model registry), Gemini API, BigQuery ML (train models in SQL), TPU access.

🏆 When to Choose AWS

Broadest service catalogue (200+ services). Largest certified talent pool (1M+ AWS certifications). Best for greenfield cloud-native build. No existing Microsoft/Google dependency. Example: fintech startups, scale-ups without legacy stack.

31% global cloud market share (2025).

🏆 When to Choose GCP

BigQuery is genuinely the best serverless petabyte SQL in 2025 — price and performance. TPU access for large model training is a real advantage. Google Workspace shops. Price-sensitive at high volume. Example: Spotify (600TB/day on BigQuery), Deutsche Bank, Twitter/X.

11% market share but growing in analytics-heavy sectors.

2025 Market Reality

AWS (31%):

default for startups and cloud-native.

Azure (25%):

default for European enterprise.

GCP (11%):

specialist choice for data-intensive analytics and ML.

Multi-cloud (growing):

most large enterprises use 2+. Increases cost and complexity — justified only with clear portability strategy.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

15 / 31

Key Platforms

Build vs Buy vs Open-Source — The Platform Decision Framework

The wrong choice costs millions and years. This framework cuts through vendor noise in every procurement conversation.

Layer

Build (Custom)

Buy (SaaS)

Open-Source / Compose

Data Warehouse

Dangerous — only Dropbox/Netflix scale can justify it

Snowflake / BigQuery / Fabric

— battle-tested, fully managed

ClickHouse

— extremely fast OLAP, self-hosted, used by Cloudflare, Uber

Ingestion / ELT

Custom connectors for proprietary internal systems only

Fivetran

— 500+ connectors, zero maintenance

Airbyte

— 350+ connectors, free, used by ClickUp

Transformation

Almost never build custom — legacy ETL trap

dbt Cloud

— managed, $150/seat/mo

dbt Core

— free, 50K+ companies

Orchestration

Cron jobs (always becomes technical debt)

Astronomer

(managed Airflow)

Apache Airflow / Prefect / Dagster

Governance / Catalogue

Spreadsheets — fails at scale every time

Collibra / Alation

— €200K+/yr enterprise

DataHub / OpenMetadata

— fully free

Streaming

Custom event buses (maintenance nightmare)

Confluent Cloud

(managed Kafka)

Apache Kafka / Flink

— needs Ops expertise

🎯 Decision Framework — 5 Questions

①

Commodity capability?

→ Buy or open-source. Never build a warehouse from scratch.

②

Competitive differentiator?

→ Build only the parts unique to your business.

③

Cost-sensitive + engineering team?

→ Open-source compose stack.

④

Speed to market critical?

→ Buy SaaS — 10× faster than self-hosted.

⑤

Scale + margin pressure?

→ Migrate to open-source once product-market fit is proven.

⚠️ The FinOps Warning

Cloud data platform bills are the fastest-growing IT cost in most enterprises. Snowflake credits and BigQuery query costs can grow 10× in 12 months without governance.

Rule: run 3 months on-demand, tag everything, then negotiate committed use. Never commit blind.

30–40% of cloud spend is typically wasted on idle resources.

💡 The €2K/month stack:

Airbyte + dbt Core + ClickHouse + Airflow + DataHub. Full enterprise analytics functionality. Runs startups to €100M revenue companies.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

16 / 31

04

Data Strategy & Governance

Why most data strategies fail — and what good ones look like

A data strategy is not a technology roadmap. It is a business decision about what data matters, who owns it, how it creates value, and how its risks are managed. Technology is the last decision, not the first.

Failure Patterns

Data Products

Data Mesh

Lineage

Catalogue

Data Contracts

Quality

Data Strategy

The 7 Reasons Data Strategies Fail — With Real Cases

Every failure is documented and repeatable. Understanding them is the fastest path to building something that works.

❌ 1. Data Without Purpose

Collecting data because "it might be useful someday." Storage fills with unclassified, ungoverned data of unknown quality.

Case: A retailer with 14 years of raw transaction logs — nobody knew what was in them or how to query them.

❌ 2. No Data Ownership

Everyone uses the data, nobody maintains it. Data team blamed for quality problems from business systems they don't control.

Case: ING Bank pre-Data Mesh — 9 teams, 9 conflicting versions of "customer revenue."

❌ 3. Central Bottleneck

One data team serves 50 business units. Every request takes 6 weeks. Teams build shadow IT in Excel.

Case: A logistics company where 40% of "data analysis" lived in personal spreadsheets outside any governed system.

❌ 4. Stale Data, Real Decisions

Dashboards powered by month-old data presented as current. Decision-makers don't know the latency.

Case: Zillow's AI trained on pre-pandemic data — $500M loss when the market changed.

❌ 5. Compliance as Afterthought

Privacy and legal requirements discovered after the platform is built. Expensive retrofits, regulatory risk.

Average cost of GDPR retrofit vs built-in: 4–7×.

❌ 6. Vanity Metrics

Reporting on data volume and pipeline count instead of business outcomes. "We have a data lake!" with no use cases running on it.

✅ What a Good Data Strategy Contains

Use cases first:

Define the business decisions data must support. Work backwards to infrastructure.

Data product ownership:

Each critical dataset has a named owner with accountability for quality and freshness.

Classification from day one:

Every new data source classified before ingestion — not after a breach.

Quality SLAs:

Freshness, completeness, and accuracy targets published and monitored like software uptime.

Compliance integrated:

Legal basis, retention, and access controls designed into the architecture from day one.

Outcome metrics:

Measure decisions improved, not data volume collected.

❌ 7. Technology-Led Strategy

Buying Snowflake, Databricks, or a data lake before defining use cases.

"We need a data lake" is not a strategy. "We need to reduce customer churn by 15% using behavioural data" is.

Technology without strategy is infrastructure without purpose.

The Data Product Mindset

Treat every dataset like a product: it has an owner, consumers, documented quality, SLAs, and versioning.

Zalando

manages 50+ data products.

Spotify

runs internal data product SLAs like software SLAs. Without product thinking, data is a liability.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

18 / 31

Data Governance

The Four Pillars of Data Governance — Operationalised

Governance is the operating system of a data strategy. Without it, classification, quality, lineage, and compliance all fail at scale.

📖

1 · Data Catalogue

"What data do we have?"

Searchable inventory: tables, owners, definitions, classification, quality scores. Without it: analysts spend 40% of time finding data; GDPR Art.30 is impossible to complete.

Alation

Atlan

DataHub (open)

Microsoft Purview

🔍

2 · Data Lineage

"Where did this number come from?"

Track data from source through every transformation to final report or model. When a KPI is wrong, lineage tells you exactly which step failed. EU AI Act mandates training data lineage for high-risk systems.

dbt

OpenLineage

Collibra

Atlas

👤

3 · Data Ownership

"Who is accountable?"

Every dataset needs a named owner responsible for quality, freshness, classification, and documentation. Without ownership, data rots — nobody fixes it because nobody owns the problem. Data Mesh assigns ownership to domain teams.

ING

Zalando

Spotify

🔒

4 · Access Control

"Who can see this data?"

RBAC, column-level security, row-level filtering. PII must be masked in non-production environments. Confidential data needs documented access justification. Quarterly access reviews minimum for GDPR.

Lake Formation

Snowflake RBAC

BigQuery IAM

Fabric

⚠️ The Cost of No Governance — Documented

British Airways (2020):

€22M GDPR fine — inadequate data security controls, no classification, insufficient access logging.

Meta (2023):

€1.2B fine — unlawful data transfers. Root cause: no data flow documentation showing where EU personal data went.

Average data breach cost 2024:

€4.5M (IBM).

Average governance programme cost:

€150–500K.

The ROI calculation is straightforward — governance is risk capital.

Data Contracts — The Minimum Viable Governance Unit

A formal, machine-readable agreement between data producer and consumer: schema, SLAs, ownership, quality rules, classification, retention. Breaking a contract triggers an automated alert — like a broken API contract.

Standard: ODCS (Open Data Contract Specification) by PayPal.

Adopters: Zalando, ING, JP Morgan, Mercado Libre.

Soda Core

Atlan

Datacontract CLI

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

19 / 31

Data Quality

The 6 Dimensions of Data Quality — With Business Impact

"Garbage in, garbage out" is not a cliché. Each quality dimension maps directly to a category of business failure.

Dimension

Definition

Real Failure Example

How to Measure

Completeness

All required fields populated; no critical nulls

30% of CRM records missing email — GDPR consent tracking impossible, campaigns fail

% non-null per required field

Accuracy

Data correctly reflects the real-world entity

Driver timestamps logged at end-of-shift, not delivery — logistics AI 40% off, €2M in bad routing decisions

Cross-validate vs authoritative source

Consistency

Same entity, same format everywhere

"New York" / "NY" / "NYC" / "N.Y." — customer deduplication fails, same person targeted 3 times

Cross-system comparison, standardisation rate

Timeliness

Data fresh enough for its intended use

Zillow: AI trained on pre-pandemic housing data — $500M loss from stale training data

Data age vs defined SLA freshness target

Uniqueness

No duplicate records per entity

Customer duplicated 3× in CRM — revenue double-counted, same person emailed 3 times

Duplicate rate per entity type

Validity

Values conform to format, type, business rules

Negative invoice amounts, impossible birthdates, product codes not in master reference — silently corrupt reports

% passing business rule validation

✅ The Data Quality Toolchain

Great Expectations (open-source):

Define rules ("price > 0"), run in pipeline, alert on failure. Used by Airbnb, ING, Heineken.

dbt tests (built-in):

uniqueness, not-null, referential integrity checks at transform time — should be in every dbt project by default.

Soda Core:

SQL-native YAML quality checks. Growing in European enterprise.

Monte Carlo / Acceldata:

ML-powered anomaly detection — "Datadog for data." No pre-defined rules needed.

Data Observability — The 2025 Standard

Monitor data like software:

freshness

(did pipeline run on time?),

volume

(expected row count arrived?),

schema

(did a column disappear?),

distribution

(did data range shift?). Leaders set data SLAs exactly as software teams set uptime SLAs.

Key players:

Monte Carlo ($236M raised), Acceldata, Atlan.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

20 / 31

05

Anonymisation & Industry Compliance

From privacy engineering to sector-specific regulatory obligations

Anonymisation is not a binary switch — it is a spectrum of risk reduction. And every industry adds its own layer of obligations on top of the GDPR baseline.

GDPR

Differential Privacy

Synthetic Data

EU AI Act

DORA

HIPAA

PSD2

PCI-DSS

Anonymisation

The Anonymisation Spectrum — From PII to Truly Anonymous

GDPR applies to personal data. These techniques reduce — but do not always eliminate — that legal scope. Know the difference before claiming compliance.

Technique

What It Does

GDPR Scope?

Re-ID Risk

Best Used For

Tokenisation

Replace PII with random token; mapping stored separately

Yes — pseudonymous

High if mapping accessible

Payment card data (PCI-DSS), user IDs in analytics

Data Masking

Replace PII with realistic fake values (John Smith → James Brown)

Yes — still personal

Low in test env

Masked production copies for dev/test environments

Generalisation

Replace specifics with ranges (age 34 → "30–40"; postcode → region)

Reduced risk

Medium — k-anonymity dependent

Demographic reporting, public health statistics

Differential Privacy

Add calibrated noise — individual records cannot be inferred from outputs

Can exit scope

Very low if ε small

Apple iOS telemetry, US Census, Google Chrome RAPPOR

Synthetic Data

Generate statistically faithful fake dataset; no real individual records

Out of scope if clean

Very low

ML training data, third-party sharing, test environments

Federated Learning

Train models on-device — raw data never leaves the source node

Raw data stays local

Low

Cross-org ML, Google Keyboard, Rabobank fraud detection

⚠️ The Re-identification Warning

MIT research showed

87% of Americans

can be uniquely identified using only date of birth, gender, and postcode. Netflix's "anonymous" ratings dataset was re-identified by cross-referencing IMDB. AOL's "anonymous" search logs identified individual users from their queries.

Removing names is not anonymisation.

✅ Choose the Right Technique

Analytics on sensitive data you own →

Differential Privacy

Share data with a third party →

Synthetic Data

ML across organisations without sharing raw data →

Federated Learning

Dev/test with production-like data →

Data Masking or Synthetic

Publish aggregate stats publicly →

Differential Privacy + k-anonymity

⚠️ The GDPR Pseudonymisation Trap

Many companies claim anonymisation when they have only pseudonymised. GDPR Art.4(5): as long as re-identification is possible — even by a different party — the data remains personal data. Regulators test this during audits.

Get a legal opinion before claiming data is outside GDPR scope.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

22 / 31

Compliance

GDPR & EU AI Act — Infrastructure & Data Requirements

These two regulations together define the compliance floor for every European data and AI strategy. They impose specific technical — not just legal — requirements.

⚖️ GDPR — 6 Principles as Architecture Requirements

Lawfulness:

Legal basis documented before any data collection. Audit-ready consent records in the pipeline.

Purpose limitation:

Data for CRM cannot train a credit model without separate consent — enforced by classification + access controls.

Data minimisation:

Every extra field is a liability. Collect only what is necessary for the stated purpose.

Accuracy:

Inaccurate personal data must be correctable and deletable at scale — requires lineage + audit trail.

Storage limitation:

Automated retention policies enforced by the pipeline — not manual deletion by an analyst.

Security:

Encryption at rest + in transit, RBAC, audit logs — mandatory for all personal data stores.

Right to Erasure — The Hard Technical Problem

Art.17: delete a person's data within 30 days. Database row: straightforward. Backup tape: hard. ML model trained on that row:

nearly impossible without full retraining

(active research: "machine unlearning"). Current best practice: immediate deletion from all live systems + scheduled retraining.

Minimum viable: document your erasure process before a regulator asks.

⚖️ EU AI Act — Risk Tiers & Data Implications

Prohibited (banned Feb 2025):

Social scoring, real-time biometric surveillance.

€35M or 7% revenue

High-risk (compliance by Aug 2026):

Credit scoring, recruitment, medical devices, border control, critical infrastructure.

€15M or 3% revenue

High-risk requires:

• Training data documented for bias, source, and representativeness

• Full lineage from raw data to model output

• Inference logs retained (up to 10 years in some categories)

• Human override capability in all high-risk pipelines

• Drift monitoring post-deployment

Window: Prohibited Feb 2025 · High-risk Aug 2026 · Full Aug 2027

✅ Compliance Built-In vs Retrofitted

Built-in compliance (from day one): average cost €150–500K. Retrofitted compliance (after platform is built): 4–7× more.

Every month of delay on compliance architecture is compounding debt.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

23 / 31

Industry Requirements

Financial Services — The Most Regulated Data Environment

Banks, insurers, and investment firms operate under the densest regulatory data requirements of any sector. Non-compliance is existential.

Regulation

Key Data Obligation

Infrastructure Requirement

DORA (2025)

Digital Operational Resilience

All major ICT incidents: 4-hour initial notification, 72-hour detailed report. Register of all ICT third parties.

Incident classification pipeline, CMDB, data architecture documentation. Effectively mandates a data catalogue for every EU bank.

MiFID II / MiFIR

Complete audit trail of all trades, orders, and communications. Retained 5–7 years.

Immutable trade data logs. All communications (calls, chats, emails) archived and searchable. No deletion without regulatory approval.

Basel III / CRR

Credit risk models validated, documented, and explainable to ECB/regulators (SR 11-7, EBA GL).

Model documentation, full training data lineage, bias testing, revalidation records. ECB can demand complete model walkthrough.

PSD2 / Open Banking

Secure third-party access to payment data via APIs. Consent records mandatory.

All data access via API logged. Strong Customer Authentication. Audit trail for every data sharing event.

AMLD6 / KYC

Customer due diligence records retained 5+ years post-relationship.

Immutable KYC/AML records. Transaction monitoring logs available within hours of regulatory request.

⚠️ Real Fines — Financial Sector

Deutsche Bank:

$150M (NY DFS, 2020) — inadequate transaction monitoring data infrastructure, failure to maintain records.

Goldman Sachs:

$2.9B (2020, 1MDB) — data controls and AML monitoring failures.

NatWest:

£264M (FCA, 2021) — AML monitoring failures; transaction data not properly linked to customer risk profiles.

🏦 Healthcare & Life Sciences

GDPR Art.9 (Special Category):

Health data processing prohibited by default. DPIA mandatory before any new processing. Named DPO required.

EU MDR/IVDR:

Clinical AI = medical device regulation. Full audit trail from training data to clinical outcome.

HIPAA (US):

18 specific identifiers must be removed for Safe Harbor de-identification. BAAs required for all processors. 60-day breach notification.

EHDS (2024):

EU Health Data Space — enables research data sharing with strict anonymisation and access controls.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

24 / 31

Industry Requirements

Retail, Public Sector & Cross-Industry Obligations

Different industries — common failure patterns. The same data governance gaps appear everywhere, just with different regulatory consequences.

🛍️ Retail & E-Commerce

PCI-DSS:

Any organisation storing or processing cardholder data must encrypt at rest and in transit, restrict access, maintain detailed access logs, never store CVV codes. Fine: $5K–$100K/month until compliance. Card network suspension risk.

ePrivacy / Cookie Directive:

Explicit opt-in required for analytics and ad-tracking cookies. Google fined €150M (CNIL, 2022) for making cookie rejection harder than acceptance.

GDPR Art.22 — Automated Profiling:

Profiling that significantly affects consumers (personalised pricing, credit) requires human review mechanism and right to object.

🏛️ Public Sector

NIS2 Directive (2024):

Cybersecurity obligations for essential entities (energy, transport, health, digital infrastructure, public administration). Incidents reported within 24 hours.

Data Act (2024):

Governs data from connected products (IoT). Manufacturers must share operational data with users on request. Public sector can compel data sharing in emergencies.

Open Data Directive:

High-value public datasets (geospatial, meteorological, company registers, mobility) must be published as open data in machine-readable format.

Cross-Industry: Breach Notification Timeline Comparison

GDPR (all sectors, EU):

Supervisory authority within 72 hours. Individuals "without undue delay" if high risk.

DORA (financial, EU):

4-hour early warning → 72-hour full report → 1-month final report.

NIS2 (critical sectors, EU):

24-hour early warning → 72-hour notification.

HIPAA (healthcare, US):

60 days for 500+ individuals. Immediate media notification for large breaches.

Key implication:

Meeting any of these windows requires knowing where all your data is

before

the incident. A data catalogue is not a governance nicety — it is a breach response tool.

⚠️ The Cumulative Compliance Problem

A European fintech processing health-related insurance data, operating in DE/FR/NL, using cloud AI is simultaneously subject to: GDPR, EU AI Act, DORA, PSD2, AMLD6, NIS2, and country-specific BaFin/ACPR/AFM rules.

Compliance is not a checklist — it is an architectural constraint that must be designed in from day one.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

25 / 31

Architecture

Reference Architecture — Data Infrastructure End-to-End

From raw source data through classification, transformation, governance, and compliance — with real tool names at every layer

SOURCES

INGEST

STORE

TRANSFORM

SERVE

CRM / ERP

App Events

IoT / Sensors

PII / Special Cat.

Files / Docs

⚡ Classify at ingestion border (Purview / BigID / Macie)

Fivetran / Airbyte (Batch ELT)

Kafka / Event Hubs (Streaming)

Azure Data Factory / Glue

Data Lake (S3/ADLS + Iceberg/Delta)

Cloud DWH (Snowflake/Synapse/BQ)

Fabric OneLake

dbt Transform Layer (SQL)

Spark / Dataflow (Python / Scala)

Power BI / Tableau

BI Dashboards

AI Applications

Regulatory Reports

Data Lineage (OpenLineage / dbt) — tracks every transformation, audit-ready

Governance: Catalogue · Contracts · RBAC · GDPR · EU AI Act · DORA

The Critical Rule: Classify at the Border

The most expensive mistake: ingesting data first, classifying later. By then, unclassified PII has spread across lakes, warehouses, and ML training sets.

Classification must happen at the ingestion border

— before data enters any storage layer.

Governance as a Vertical Layer

Governance tools (DataHub, Collibra, Purview) integrate at the metadata level — they observe every table, column, pipeline, classification label, and lineage edge across the entire stack without touching the actual data. They provide the audit trail regulators request and the catalogue analysts need.

Platform Cost Profile (2025)

Startup (10GB/day):

€2–5K/month

Scale-up (1TB/day):

€20–50K/month

Enterprise (100TB+/day):

€200K–2M+/month

Excludes personnel — typically 2–3× infrastructure cost

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

26 / 31

Data Strategy

Data Mesh — The Organisational Answer to Scale

Data Mesh is 80% organisational change and 20% technology. It solves the central bottleneck that kills every large data strategy.

❌ Centralised Model — The Problem

One data team owns all pipelines, all quality. Becomes a bottleneck. Business domains wait weeks. Quality degrades because the team doesn't understand the domain. Shadow Excel proliferates.

Symptom:

"The data team takes 6 weeks to deliver a new dataset."

Root cause:

Wrong ownership model, not insufficient tooling.

✅ Data Mesh — The Solution

Domain teams own their data as

data products

with SLAs. Central platform team provides infrastructure standards only. Data is discoverable via a shared catalogue.

Zhamak Dehghani, ThoughtWorks (2019)

4 principles: domain ownership · data as product · self-serve infra · federated governance

Real Adopters & What They Achieved

Zalando:

50+ data products across 30+ domains. Time-to-insight from weeks to hours. Each domain publishes data with quality SLAs like software.

ING Bank:

Eliminated 9 conflicting definitions of "customer revenue." Domain teams own their data — credit team owns credit data, fraud team owns fraud signals.

HelloFresh:

5× increase in analytics use cases per quarter after removing central team bottleneck. 300+ analysts now self-serve.

Warning:

Failed implementations share one cause — technology deployed before governance. Data contracts are non-negotiable.

Data Mesh vs Centralised

Factor

Centralised

Data Mesh

Org size

Small–medium

Large, multi-domain

Domain complexity

Low–medium

High (finance + ops + product)

Data team maturity

Any

High — domains need data skills

Governance maturity

Optional early

Required from day one

Time to value

Faster initially

Slower setup, faster at scale

Risk if done wrong

Bottleneck

Data chaos without contracts

Data Fabric — The Alternative Pattern

Data Fabric

uses AI/ML to automate data integration, governance, and delivery across heterogeneous sources — without reorganising teams. Gartner's counterpart to Data Mesh. Tools: IBM Cloud Pak for Data, Informatica IDMC, Talend. Best when: organisational change is not feasible but platform unification is needed.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

27 / 31

Decision Guide

Platform Selection — The Business Decision Tree

A practical decision guide for the most common data platform procurement scenarios facing European enterprise buyers in 2025

🔵 Scenario A: "We're Microsoft-heavy"

Already using: Azure AD, Office 365, Power BI, Teams.

Recommended path:

Microsoft Fabric as the unified platform. Replaces Azure Synapse + ADF + Power BI Premium under one licence. Fastest integration with existing identity and security controls (Entra ID / Conditional Access).

Consider adding:

dbt Core for transformation, DataHub for open catalogue layer if cross-vendor portability matters.

Watch out for:

Copilot / Fabric capacity unit pricing can escalate — model costs before committing.

🟣 Scenario B: "We're building greenfield / cloud-native"

No legacy stack. Optimising for flexibility and best-of-breed.

BI-first path:

Snowflake + dbt Core + Fivetran/Airbyte + Airflow. Easiest SQL for analysts. Best Tableau/Looker integration. Data Sharing if B2B data exchange is needed.

ML-first path:

Databricks Lakehouse + dbt + Apache Iceberg. Best for data engineering + AI on one platform.

Budget-constrained:

BigQuery (serverless, no cluster cost) + dbt Core + Airbyte. Lowest TCO at

<

1TB/day.

🟢 Scenario C: "We have a legacy data warehouse to modernise"

Existing: Teradata, Oracle DWH, IBM Netezza, on-prem SQL Server.

Migration path:

Lift-and-shift SQL workloads to Snowflake or Azure Synapse (best compatibility with legacy SQL). Use dbt to rewrite ETL logic from legacy tools (SSIS, Informatica) — version control and test as you go.

Key risk:

Business logic buried in ETL tools is poorly documented. Budget 30–40% of migration effort for discovery and documentation, not just technical lift.

Governance first:

Catalogue the existing estate before migrating — don't move the swamp.

Universal Rule:

Regardless of platform choice, insist on open table formats (

Apache Iceberg

) and open lineage standards (

OpenLineage

) from day one. These two choices give you portability — your data is never held hostage by a vendor. A platform should earn your business every renewal cycle, not lock you in at contract signing.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

28 / 31

Self-Check

Test Yourself — 10 Strategic Data Questions

Can you answer these from memory? These are the questions regulators, auditors, vendors, and boards will ask.

A vendor proposes migrating from your on-prem Oracle DWH to

Snowflake

. What five questions do you ask about lock-in, data residency, cost at scale, ETL migration, and EU AI Act compliance before signing?

Your organisation has a Hadoop data lake with 5 years of raw data. Walk through how you would

classify, audit, and govern

it before building any AI on top of it.

Explain the difference between

ETL and ELT

to a CFO who wants to know why you're replacing your €300K/year Informatica licence with dbt and Airbyte.

Your CTO proposes a

real-time Kafka streaming pipeline

for customer analytics. What questions determine whether it is actually necessary — and what is the business cost of getting it wrong?

Explain the legal difference between

pseudonymisation and anonymisation

under GDPR to a business unit head who wants to share a dataset with a marketing agency.

Under

DORA

, a major ICT incident hits your bank's data platform at 9pm Friday. What are your specific reporting obligations in the next 4 hours, 72 hours, and 1 month?

Your data science team wants to train a credit scoring model. List five specific

EU AI Act and GDPR obligations

that apply before the model goes live.

Your company already uses Office 365, Azure AD, and Power BI Premium. A colleague proposes adopting

Databricks

. Make the case for and against vs staying with

Microsoft Fabric

.

Explain

Data Mesh

to a division president frustrated that the central data team takes 6 weeks to deliver a new dataset. What organisational changes are required, and why is technology the last thing to decide?

Your cloud data bill jumped 40% last month. Name

five specific things

you check in a FinOps audit, in order of likely impact.

💡 Capstone Challenge:

A European retail bank wants to deploy real-time AI for loan approval. Design the complete data infrastructure: architecture pattern (warehouse/lake/lakehouse), ingestion strategy (ETL vs ELT, batch vs streaming), platform choice (with justification), data classification and anonymisation approach for training data, governance framework (catalogue, lineage, contracts, ownership), GDPR and EU AI Act compliance requirements, DORA and Basel III obligations, and 3-year TCO estimate. Identify the three highest-risk failure points. Present in 5 minutes.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

29 / 31

Reference

Essential Glossary — 30 Terms Every Data Leader Must Know

The vocabulary that separates informed buyers from those who get sold to

OLTP

— Operational database for transactions (PostgreSQL, MySQL). Row-level, fast writes.

OLAP

— Analytical database for aggregations (Snowflake, BigQuery). Columnar, fast reads.

Data Lake

— Cheap object storage for all data types. No schema required.

Data Warehouse

— Structured, SQL-queryable analytical store. Schema-on-write.

Lakehouse

— Lake storage + warehouse reliability (ACID, quality) using open formats.

Delta Lake / Iceberg

— Open table formats adding ACID to data lakes. Portability guarantee.

ETL

— Extract, Transform, Load. Transform before loading. Legacy pattern.

ELT

— Extract, Load, Transform. Load raw first, transform in warehouse. Modern standard.

dbt

— SQL transformation tool. Turns analysts into engineers. 50K+ companies.

Fivetran / Airbyte

— Managed data connectors for ingestion. SaaS vs open-source.

Kafka

— Distributed event streaming. Used for real-time data pipelines. 1T+ events/day at Uber.

Spark

— Distributed batch processing engine. Industry standard for large-scale ETL.

Airflow

— Pipeline orchestrator. Defines dependencies and schedules for data jobs.

Data Catalogue

— Searchable inventory of all data assets with owners and definitions.

Data Lineage

— Trail of where data came from and every transformation it went through.

Data Contract

— Machine-readable SLA between producer and consumer teams. ODCS standard.

Data Mesh

— Domain-owned data products. Decentralises ownership from a central team.

Data Fabric

— AI-assisted integration across heterogeneous data sources without reorganising.

FinOps

— Financial operations for cloud. Engineering + finance jointly own cloud costs.

OneLake

— Microsoft Fabric's unified storage layer. Single copy across all workloads.

Pseudonymisation

— Replace PII with key/token. Still GDPR personal data. Risk reduced, not eliminated.

Anonymisation

— Irreversible removal of all identifiers. Outside GDPR scope if genuinely irreversible.

Differential Privacy

— Add calibrated noise so individuals can't be inferred from aggregate outputs.

Synthetic Data

— Statistically faithful fake dataset. No real individuals. Out of GDPR scope.

Federated Learning

— Train ML on-device. Raw data never leaves the source.

GDPR Art.9

— Special categories: health, biometric, racial, religious, political data. Highest protection.

ROPA

— Record of Processing Activities. GDPR Art.30 mandatory document. First thing regulators request.

DORA

— EU Digital Operational Resilience Act. ICT risk + incident reporting for financial firms.

EU AI Act

— World's first binding AI regulation. High-risk AI: credit, recruitment, medical, border.

k-Anonymity

— Every individual indistinguishable from k−1 others. Minimum anonymisation standard.

MASTER IN BUSINESS · DATA & AI INFRASTRUCTURE

30 / 31

Course Summary

Key

Takeaways

🗂️ Classify at the Border

You cannot protect or govern data you haven't classified. Classification at ingestion — before data enters any storage layer — is the highest-leverage decision in any data architecture.

🏗️ Architecture Follows Workload

Warehouse for pure BI. Lakehouse for BI + ML + streaming. The choice is workload-driven. Never rebuild a warehouse from scratch — cloud platforms (Snowflake, Fabric, BigQuery) do it better for less.

⚡ ELT Won. ETL is Legacy.

Load raw first, transform in the warehouse with dbt. Analysts own the logic. Version controlled. Faster iteration. 50K+ companies have validated this as the modern standard.

⚖️ Compliance is Architecture

GDPR, EU AI Act, DORA, PSD2, HIPAA impose specific technical requirements. Built-in costs 4–7× less than retrofit. Every sector adds its own layer — map them before signing off on any new data system.

📋 Governance = Value Protection

Catalogue, lineage, contracts, ownership. Average breach cost: €4.5M. Average governance programme: €150–500K. Governance is risk capital with a clear positive ROI — never overhead.

🔒 Anonymisation ≠ Privacy

Pseudonymisation is still personal data. True anonymisation is technically hard and legally tested. Use differential privacy, synthetic data, or federated learning for genuine GDPR risk reduction.

🎯 Your Next Step

Pick one data system in your organisation this week. Ask: what architecture pattern is it? Where does transformation happen — ETL or ELT? Is the data classified? Who owns it? Is there a lineage trail? The answers will tell you exactly where your data infrastructure risk and opportunity are hiding.

MASTER IN BUSINESS · APPLIED AI SERIES

Firas Ben Hassan · AI Guest Lecturer · Data & AI Infrastructure

const TOTAL = 31;

let cur = 1;

function show(n) {

document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));

document.getElementById('s' + n).classList.add('active');

document.getElementById('counter').textContent = n + ' / ' + TOTAL;

document.getElementById('btnPrev').disabled = n === 1;

document.getElementById('btnNext').disabled = n === TOTAL;

cur = n;

}

function next() { if (cur < TOTAL) show(cur + 1); }

function prev() { if (cur > 1) show(cur - 1); }

document.addEventListener('keydown', e => {

if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();

if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();

});

show(1);
