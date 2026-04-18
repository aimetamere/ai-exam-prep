# Course 6 Natural Language Processing

Natural Language Processing – Business Masters

* { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #080f1a; font-family: 'Segoe UI', sans-serif; color: #e2e8f0; display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding-bottom: 20px; }

#nav { width: 980px; max-width: 98vw; display: flex; align-items: center; justify-content: space-between; padding: 12px 0; }

#nav button { background: rgba(6,182,212,.15); border: 1px solid rgba(6,182,212,.4); color: #67e8f9; padding: 7px 22px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all .2s; }

#nav button:hover { background: #0891b2; border-color: #0891b2; color: #fff; }

#nav button:disabled { opacity: 0.25; cursor: default; }

#counter { font-size: 13px; color: #06b6d4; font-weight: 700; letter-spacing: 1px; }

.slide-wrap { width: 980px; max-width: 98vw; }

.slide { width: 100%; aspect-ratio: 16/9; background: #0d1520; border: 1px solid rgba(6,182,212,.2); border-radius: 14px; overflow: hidden; display: none; flex-direction: column; box-shadow: 0 0 60px rgba(6,182,212,.1), 0 4px 24px rgba(0,0,0,.7); }

.slide.active { display: flex; }

.hdr { padding: 12px 28px 8px; border-bottom: 1px solid rgba(255,255,255,.06); background: rgba(255,255,255,.025); }

.tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #22d3ee; margin-bottom: 3px; }

.title { font-size: 17px; font-weight: 800; color: #f1f5f9; line-height: 1.2; }

.sub { font-size: 10px; color: #64748b; margin-top: 2px; }

.body { flex: 1; padding: 10px 28px; display: flex; gap: 14px; overflow: hidden; }

.foot { padding: 5px 28px; border-top: 1px solid rgba(255,255,255,.05); display: flex; justify-content: space-between; background: rgba(0,0,0,.25); }

.fl { font-size: 9px; font-weight: 700; letter-spacing: 1px; color: #06b6d4; }

.fn { font-size: 9px; color: #334155; }

.col { flex: 1; display: flex; flex-direction: column; gap: 6px; }

.col2 { flex: 2; }

.card { border-radius: 9px; padding: 8px 11px; border: 1px solid; }

.card.c { border-color: rgba(6,182,212,.35); background: rgba(6,182,212,.08); }

.card.p { border-color: rgba(167,139,250,.35); background: rgba(124,58,237,.09); }

.card.g { border-color: rgba(52,211,153,.35); background: rgba(16,185,129,.09); }

.card.a { border-color: rgba(251,191,36,.35); background: rgba(245,158,11,.09); }

.card.r { border-color: rgba(248,113,113,.35); background: rgba(239,68,68,.09); }

.card.d { border-color: rgba(255,255,255,.1); background: rgba(255,255,255,.035); }

.card.b { border-color: rgba(96,165,250,.35); background: rgba(59,130,246,.09); }

.ct { font-size: 10px; font-weight: 700; margin-bottom: 3px; color: #f1f5f9; }

.cd { font-size: 10.5px; color: #94a3b8; line-height: 1.45; }

ul.L { list-style: none; display: flex; flex-direction: column; gap: 4px; }

ul.L li { font-size: 10.5px; line-height: 1.4; padding-left: 14px; position: relative; color: #cbd5e1; }

ul.L li::before { content: '▸'; position: absolute; left: 0; color: #06b6d4; font-size: 9px; top: 2px; }

.tbl { width: 100%; border-collapse: collapse; font-size: 10px; }

.tbl th { background: rgba(6,182,212,.15); color: #67e8f9; padding: 5px 8px; text-align: left; border: 1px solid rgba(6,182,212,.2); font-weight: 700; font-size: 9px; letter-spacing: .5px; }

.tbl td { padding: 4px 8px; border: 1px solid rgba(255,255,255,.06); vertical-align: top; color: #cbd5e1; font-size: 10px; }

.tbl tr:nth-child(even) td { background: rgba(255,255,255,.025); }

.bdg { display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 9px; font-weight: 700; margin: 1px; }

.bdg.c { background: rgba(6,182,212,.2); color: #67e8f9; border: 1px solid rgba(6,182,212,.4); }

.bdg.p { background: rgba(124,58,237,.2); color: #c4b5fd; border: 1px solid rgba(124,58,237,.4); }

.bdg.g { background: rgba(16,185,129,.2); color: #6ee7b7; border: 1px solid rgba(16,185,129,.4); }

.bdg.a { background: rgba(245,158,11,.2); color: #fde68a; border: 1px solid rgba(245,158,11,.4); }

.bdg.r { background: rgba(239,68,68,.2); color: #fca5a5; border: 1px solid rgba(239,68,68,.4); }

.bdg.b { background: rgba(59,130,246,.2); color: #93c5fd; border: 1px solid rgba(59,130,246,.4); }

.hl { background: rgba(6,182,212,.07); border: 1px solid rgba(6,182,212,.25); border-radius: 8px; padding: 7px 11px; font-size: 10.5px; color: #cbd5e1; }

.lbl { font-size: 8.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #334155; margin-bottom: 3px; margin-top: 2px; }

.tl { display: flex; flex-direction: column; gap: 5px; }

.tli { display: flex; gap: 8px; align-items: flex-start; }

.tld { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; flex-shrink: 0; margin-top: 1px; color: #fff; }

.stat-box { text-align: center; background: rgba(6,182,212,.08); border: 1px solid rgba(6,182,212,.2); border-radius: 10px; padding: 8px; }

.stat-n { font-size: 22px; font-weight: 900; color: #22d3ee; line-height: 1; }

.stat-l { font-size: 9px; color: #475569; margin-top: 2px; }

.code-block { background: #060d14; border: 1px solid rgba(6,182,212,.2); border-radius: 8px; padding: 8px 12px; font-family: 'Consolas', monospace; font-size: 9.5px; line-height: 1.7; color: #e2e8f0; }

.big-emoji { font-size: 26px; line-height: 1; margin-bottom: 4px; }

/* TITLE SLIDE */

.ts { background: radial-gradient(ellipse at 15% 50%, #061624 0%, #080f1a 65%); position: relative; overflow: hidden; }

.ts::before { content: ''; position: absolute; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(6,182,212,.12) 0%, transparent 70%); top: -120px; right: -120px; pointer-events: none; }

.ts::after { content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,.08) 0%, transparent 70%); bottom: -60px; left: 200px; pointer-events: none; }

.ts-c { display: flex; flex-direction: column; height: 100%; padding: 28px 50px; justify-content: center; position: relative; z-index: 1; }

.ts-tag { font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #22d3ee; margin-bottom: 8px; }

.ts-main { font-size: 38px; font-weight: 900; line-height: 1.05; color: #f8fafc; }

.ts-main span { background: linear-gradient(90deg, #22d3ee, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.ts-sub { font-size: 12px; color: #475569; margin-top: 8px; max-width: 420px; line-height: 1.5; }

.ts-inst { margin-top: 18px; display: flex; align-items: center; gap: 12px; }

.av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,#0891b2,#7c3aed); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: #fff; }

.ts-nm { font-size: 13px; font-weight: 700; color: #f1f5f9; }

.ts-rl { font-size: 10px; color: #475569; }

.ts-logo { margin-top: 14px; font-size: 9px; font-weight: 700; letter-spacing: 2px; color: #06b6d4; border: 1px solid rgba(6,182,212,.4); display: inline-block; padding: 3px 10px; border-radius: 4px; }

.ts-pills { position: absolute; right: 50px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 8px; z-index: 1; }

.tsp { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 12px; padding: 5px 14px; font-size: 10px; color: #64748b; }

.tsp span { color: #22d3ee; font-weight: 700; }

/* SECTION SLIDE */

.ss { background: linear-gradient(135deg, #080f1a 0%, #0c1a2e 100%); }

.ss-c { display: flex; flex-direction: column; height: 100%; padding: 0 50px; justify-content: center; }

.ss-n { font-size: 80px; font-weight: 900; color: rgba(6,182,212,.12); line-height: 1; }

.ss-t { font-size: 30px; font-weight: 900; margin-top: -10px; color: #f8fafc; }

.ss-sub-t { font-size: 13px; background: linear-gradient(90deg,#22d3ee,#818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700; margin-top: 2px; }

.ss-d { font-size: 11.5px; color: #475569; margin-top: 6px; max-width: 500px; }

.ss-tags { display: flex; gap: 5px; margin-top: 12px; flex-wrap: wrap; }

.ss-tags .bdg { background: rgba(6,182,212,.12); color: #67e8f9; border-color: rgba(6,182,212,.3); }

svg text { font-family: 'Segoe UI', sans-serif; }

strong { color: #e2e8f0; }

← Prev

1 / 25

Next →

Master in Business · Applied AI Series

Natural Language

Processing (NLP)

How machines learned to read, understand, and speak — and what it means for your business strategy

F

Firas Ben Hassan

AI Guest Lecturer · NLP & Business AI

MASTER IN BUSINESS · APPLIED AI SERIES

25

Slides

2-Hour

Session

Business

Focus

No Coding Required

AI-Generated

+ Human-Reviewed

The Big Picture

Language is the Last Frontier of Business Intelligence

80% of enterprise data is unstructured text — and until recently, it was invisible to machines

🗄️

Structured Data

Databases, spreadsheets, CRM fields

~20% of all enterprise data

Already fully exploited by BI tools

SQL, Tableau, Excel handle it well

Already mined

📝

Unstructured Text

Emails, contracts, reviews, support tickets, reports, social media, Slack…

~80% of all enterprise data

Previously: invisible, unusable

Now: NLP unlocks it

💡 The NLP Promise

NLP gives machines the ability to

read, understand, classify, summarise, and generate human language

— at a scale and speed no human team can match.

📊 The Market Opportunity

The global NLP market is projected to exceed

$160 billion by 2030

. Every industry — banking, law, healthcare, retail, logistics — has language-rich data waiting to be exploited.

🎯 What You'll Master Today

How NLP works, which techniques to use when, real ROI numbers, and how to evaluate and deploy NLP solutions — without writing a single line of code.

MASTER IN BUSINESS · NLP

2 / 25

Course Overview

Today's Journey — 5 Blocks, 25 Slides, 2 Hours

Block 0 · 15min

NLP History. From rule-based systems to Large Language Models.

Block 1 · 25min

Core NLP tasks: Classification, NER, Sentiment, Translation, Summarisation.

Block 2 · 25min

How NLP works: Text → Numbers → Transformers. No maths required.

Block 3 · 25min

LLMs, Prompt Engineering, RAG. The 2024 business stack.

Block 4 · 30min

ROI, Risk, Bias, Hallucination, Deployment. Building responsibly.

By the end you will be able to…

Explain how NLP models convert text into machine-readable meaning

Match the right NLP technique to any business problem

Evaluate and brief an NLP vendor or internal team

Use prompt engineering to extract value from LLMs today

Identify bias, hallucination, and compliance risks in NLP systems

⚠️ Transparency Statement

"

These slides were generated by AI and reviewed by a human expert.

" This session is itself a live demonstration of what NLP and generative AI can do when applied thoughtfully to education.

AI-Generated

Human-Reviewed

MASTER IN BUSINESS · NLP

3 / 25

00

A Brief History of NLP

From "ELIZA" to ChatGPT in 70 years

Understanding where NLP came from reveals why the current moment is genuinely different — and what comes next.

Rule-Based

Statistical

Word2Vec

BERT

ChatGPT

History

NLP's Four Eras — 70 Years of Progress

Each era unlocked capabilities the previous one couldn't imagine

1

1950s–80s · Rule-Based Systems

Engineers write thousands of hand-crafted grammar rules. ELIZA (1966) fakes conversation by pattern-matching. Works on narrow domains, breaks on anything unexpected.

Brittle

2

1990s–2010s · Statistical NLP

Let the data decide. N-grams, TF-IDF, Naive Bayes, SVM on text. Spam filters, early machine translation (Google Translate 2006). Better — but still misses meaning and context.

Bag-of-words era

3

2013–2018 · Neural & Word Embeddings

Word2Vec (2013): words become vectors. "King − Man + Woman ≈ Queen." Context starts to matter. RNNs + LSTMs bring memory. BERT (2018) reads sentences bidirectionally.

Semantics emerge

4

2020–Now · Large Language Models

GPT-3 (175B params) demonstrates emergent reasoning. ChatGPT (2022): NLP goes mainstream. Claude, Gemini, Llama 3. We are living through the biggest shift in how machines process language.

Generative era

NLP Capability Over Time (rough)

1960

2000

2013

2018

Now

Low

High

💡 The Key Insight

Each era didn't replace the previous — it

subsumed

it. Modern LLMs contain statistical, neural, and even some rule-like reasoning. The curve is still going up.

MASTER IN BUSINESS · NLP

5 / 25

01

Core NLP Tasks

What can NLP actually do? The full menu.

Eight fundamental tasks that cover 90% of business NLP use cases — with real examples from each industry.

Classification

Sentiment

NER

Summarisation

Translation

Generation

NLP Tasks · Overview

The NLP Task Landscape

Every business NLP application is built from these 8 fundamental capabilities

🏷️

Text Classification

Assign a label to a document. Spam/not-spam. Positive/Negative. Topic category.

Supervised

😊

Sentiment Analysis

Detect emotion or opinion polarity in text. Product reviews, social listening, NPS comments.

Classification subtype

🔍

Named Entity Recognition

Extract names, organisations, dates, amounts, locations from raw text. Power contracts & invoices.

Information Extraction

📰

Summarisation

Compress long documents into key points. Legal briefs, earnings calls, research papers.

Extractive / Abstractive

🌍

Machine Translation

Convert text between languages. 100+ language pairs. Near-human quality for major languages.

DeepL · Google

❓

Question Answering

Answer questions from a document corpus. Power search, knowledge bases, internal copilots.

RAG-powered

✍️

Text Generation

Write original content: emails, reports, product descriptions, code, marketing copy at scale.

LLM-powered

🔗

Semantic Search

Find documents by meaning, not keywords. "Show me contracts with penalty clauses" → relevant hits.

Embeddings

MASTER IN BUSINESS · NLP

7 / 25

NLP Tasks · Deep Dive

Sentiment Analysis & Named Entity Recognition

The two most commercially deployed NLP capabilities — and why they matter for your business

Sentiment Analysis — Reading Opinion at Scale

INPUT: Customer review text

"The delivery was

frustratingly slow

and the packaging was

damaged

. However, the product quality itself is

outstanding

."

🚚 Delivery: NEGATIVE

📦 Packaging: NEGATIVE

🛍️ Product: POSITIVE

Business Applications

Brand monitoring from Twitter/Reddit at scale. NPS comment analysis. Product review mining. Support ticket routing by urgency. Competitor benchmarking.

Named Entity Recognition (NER) — Extracting Meaning from Documents

INPUT: Contract clause

"

Siemens AG

shall deliver by

March 31, 2025

to

Frankfurt

. Penalty:

€50,000/day

"

ORG: Siemens AG

DATE: March 31

LOC: Frankfurt

MONEY: €50,000

Business Applications

Automated contract review. Invoice data extraction. Medical record structuring. News monitoring (track competitors, people, deals). Compliance watchlists.

MASTER IN BUSINESS · NLP

8 / 25

02

How NLP Works

Text → Numbers → Understanding. No maths needed.

Tokenisation, embeddings, attention — the three mechanisms that power every modern NLP system.

Tokenisation

Embeddings

Attention

Transformers

How NLP Works

Step 1 & 2 — Tokenisation & Embeddings

Machines don't read words. They read numbers. Here's how text becomes math.

Step 1: Tokenisation — Breaking Text into Units

Input sentence → Token sequence → Token IDs

"ChatGPT is transforming business"

"Chat"

"G"

"PT"

"is"

"transform"

"ing"

"business"

IDs: [9889, 38, 2898, 318, 25449, 278, 1891] — this is what the model actually sees

Step 2: Embeddings — Words Become Vectors in Meaning Space

King

[0.8, 0.2, 0.9, 0.1…]

Queen

[0.8, 0.8, 0.9, 0.1…]

Man

[0.1, 0.2, 0.5, 0.3…]

King − Man + Woman

≈

Queen ✓

Meaning is captured as geometry.

Similar words cluster in vector space.

🏦 Bank (finance)

🏞️ Bank (river)

→ Different vectors!

Context determines meaning.

Why Embeddings Are Revolutionary

Words with similar meaning end up near each other in vector space — even without being told. The model learns that "joyful" and "happy" are related purely from co-occurrence in training data.

Sentence Embeddings — Business Power

Entire documents compressed into a single vector. Two documents with similar meaning have similar vectors → enables

semantic search

, deduplication, clustering at scale.

📌 Business Analogy

Think of embeddings as a "meaning fingerprint" for any text. If two contracts have similar fingerprints, they probably have similar clauses — even if they use different words.

MASTER IN BUSINESS · NLP

10 / 25

How NLP Works

Step 3 — Attention & The Transformer

The mechanism that gave machines genuine understanding of language context

The Problem Attention Solves

"The

trophy

didn't fit in the

suitcase

because

it

was too big."

What does "it" refer to? The trophy or the suitcase? Humans instantly know — the trophy. For older models, this was impossible. Attention makes it possible.

⭐ Self-Attention — The Key Mechanism

Every word simultaneously asks every other word:

"How relevant are you to understanding me?"

Each word assigns attention

weights

to all other words. High weight = "pay attention to this word to understand me." The model reads the whole sentence at once — not left to right.

Processes all tokens

simultaneously

→ 100× faster than RNNs

Captures

long-range dependencies

effortlessly (paragraph 1 → paragraph 20)

Scales with compute → foundation of every modern LLM

Attention Visualised on "The trophy didn't fit because it was too big"

The

trophy

didn't

fit

because

it

← "it" attends strongly to "trophy"

Result: "it" = trophy (not suitcase) ✓

Line thickness = attention weight strength

The model resolves ambiguity automatically

Transformer = Attention × Scale

The Transformer (2017) stacks multiple attention "heads" — each one learns a different type of relationship (syntax, semantics, coreference). Stack 96 of these layers → GPT-4.

MASTER IN BUSINESS · NLP

11 / 25

How NLP Works

Pre-Training vs Fine-Tuning — The Two-Stage Revolution

Why you almost never need to build an NLP model from scratch

🌍 Stage 1: Pre-Training

Train on

massive generic text

— the internet, books, Wikipedia, code. The model learns grammar, facts, reasoning, common sense.

Cost: $5M–$100M+ in GPU compute.

Data: hundreds of billions of tokens.

Time: weeks to months.

Who does this:

OpenAI, Anthropic, Google, Meta, Mistral.

GPT-4 · Claude · Llama 3

🏢 Stage 2: Fine-Tuning

Take a pre-trained model. Train it further on

your specific domain data

. It inherits all general knowledge and specialises in your task.

Cost: $50–$5,000 in GPU compute.

Data: 500–50,000 examples.

Time: hours to days.

Who does this:

every company building NLP products.

Your company can do this ✅

📌 Business Analogy

Pre-training = hiring a Harvard MBA graduate with 20 years of general business experience.

Fine-tuning = giving them a 2-week onboarding in your specific industry, company jargon, and processes.

Result: General intelligence + domain expertise.

What Fine-Tuning Unlocks

Classify your specific ticket categories (not generic ones). Extract fields specific to your contracts. Generate text in your brand voice. Follow your company's compliance rules.

💡 The New Rule:

In 2025, most NLP projects start with a call to an API — not a training run. Fine-tuning is only needed when off-the-shelf prompting isn't enough.

MASTER IN BUSINESS · NLP

12 / 25

03

LLMs & The Modern NLP Stack

Prompting, RAG, and Agents — the 2025 toolkit

How modern businesses extract value from language AI without training models or writing code.

Prompt Engineering

RAG

Agents

APIs

LLMs

LLMs · Prompting

Prompt Engineering — The Highest-ROI NLP Skill in 2025

The difference between a mediocre and excellent LLM output is often just the quality of the prompt

❌ Bad Prompt

"Summarise this contract."

Gets a generic 200-word summary. No structure. Misses critical clauses. Could have been written by any intern.

✅ Expert Prompt

"You are a senior legal analyst. Analyse this contract and return a structured JSON with: (1) Parties, (2) Key dates, (3) Payment terms, (4) Penalty clauses, (5) Termination conditions, (6) Risk flags. If a field is missing, state 'Not specified'."

Returns structured, actionable output every time. Repeatable. Auditable. Production-ready.

The 5 Prompting Techniques That Matter

① Role Assignment

"You are a senior [role] with expertise in [domain]." Activates the right "personality" and knowledge mode.

② Few-Shot Examples

Show 2–3 examples of input/output pairs before your real question. Accuracy jumps 30–50% on structured tasks.

③ Chain-of-Thought

"Think step by step before answering." Makes the model reason explicitly — critical for complex analysis.

④ Output Format Constraints

"Return only valid JSON. No explanations." Makes outputs parseable by downstream code automatically.

⑤ Negative Instructions

"Do NOT include speculation. Do NOT exceed 150 words." Prevents common failure modes explicitly.

MASTER IN BUSINESS · NLP

14 / 25

LLMs · RAG

RAG — Retrieval Augmented Generation

How to give LLMs access to your private company knowledge — without retraining them

The RAG Pipeline — Step by Step

1

Index Your Documents

Take all your internal docs (PDFs, emails, contracts, wiki). Break into chunks. Convert each chunk to an embedding vector. Store in a vector database (Pinecone, Weaviate, pgvector).

2

User Asks a Question

"What are our refund terms for enterprise customers?" → Convert the question to an embedding vector.

3

Retrieve Relevant Chunks

Find the 3–10 document chunks with the most similar embedding vectors. These are the "most relevant" parts of your knowledge base.

4

Augment the Prompt

Inject retrieved chunks into the LLM prompt: "Using ONLY the following documents: [chunks]… answer: [question]."

5

Generate Grounded Answer

LLM answers based on your documents. Can cite sources. Dramatically reduces hallucination. Stays current as you update docs.

💡 Why RAG Instead of Fine-Tuning?

Fine-tuning

: bakes knowledge into model weights. Expensive, static, requires retraining when docs change.

RAG

: retrieves from live documents at query time. Cheap, always current, citable, auditable.

Use RAG first, fine-tune only if needed.

Business Use Cases

Internal HR policy chatbot. Legal contract Q&A. Customer support on your product docs. Regulatory compliance assistant. Sales enablement on pricing and case studies.

🎯 Real Numbers:

A mid-sized bank deployed a RAG system on 5,000 internal policy documents. Support resolution time dropped from 45 minutes to 3 minutes. Compliance team approved it in 6 weeks because every answer was traceable to a source document.

MASTER IN BUSINESS · NLP

15 / 25

LLMs · Landscape

Navigating the LLM Landscape in 2025

Which model to choose — and why the answer depends on your use case, not the hype

Model

Provider

Best For

Context Window

Typical Cost

Privacy

GPT-4o

OpenAI

General reasoning, vision, code, multimodal

128K tokens

$5 / 1M tokens

⚠️ Data leaves EU

Claude 3.5 Sonnet

Anthropic

Long documents, nuanced analysis, safety

200K tokens

$3 / 1M tokens

⚠️ Data leaves EU

Gemini 1.5 Pro

Google

1M context, multimodal, Google Workspace

1M tokens

$3.5 / 1M tokens

⚠️ Data leaves EU

Llama 3 70B

Meta (Open)

Full control, on-prem, EU data residency

128K tokens

Self-host

✅ Your servers

Mistral Large

Mistral (🇫🇷)

GDPR compliance, EU data, multilingual

128K tokens

€4 / 1M tokens

✅ EU-based

DeepSeek R1

DeepSeek (🇨🇳)

Complex reasoning, math, coding

128K tokens

$0.5 / 1M tokens

❌ China jurisdiction

🏥 Healthcare / Finance / Legal

EU data residency is non-negotiable. Choose Mistral or self-hosted Llama. Never send patient or financial data to non-EU servers.

🏢 Standard Enterprise

GPT-4o or Claude 3.5 via Azure/AWS (EU regions available). Most powerful general-purpose option. Add DPA agreement.

💰 Cost-Sensitive at Scale

Llama 3 8B self-hosted on a single GPU costs ~€0.10/1M tokens vs €3–5 for commercial APIs. 30–50× cheaper at volume.

MASTER IN BUSINESS · NLP

16 / 25

04

Business ROI & Risks

Making the case — and managing the pitfalls

Measuring value, calculating ROI, and navigating hallucination, bias, GDPR, and the EU AI Act.

ROI

Hallucination

Bias

GDPR

EU AI Act

Business ROI

The Business Case for NLP — Real Numbers

How to justify investment and measure success across the most common use cases

Use Case

NLP Technique

Measurable Impact

Typical Timeline

📧 Customer Support Automation

LLM + RAG

60–80% ticket deflection, -40% handling time

4–8 weeks

📄 Contract Review

NER + LLM extraction

90% reduction in manual review hours

6–12 weeks

⭐ Review Intelligence

Sentiment + Aspect NER

3× faster insight cycles, NPS +8 pts

2–4 weeks

🔍 Internal Knowledge Search

Semantic Search + RAG

Save 2–3 hrs/employee/week

4–6 weeks

📋 Report / Content Generation

LLM generation

70% reduction in drafting time

1–2 weeks

🌍 Multilingual Support

Machine Translation + LLM

Market access to 5+ new countries instantly

2–3 weeks

🏥 Clinical Note Structuring

NER + Classification

Save 1.5 hrs/clinician/day

8–16 weeks

€0.002

Cost per document processed via LLM API

€15–40

Cost per document processed by a human

4–8 wks

Typical pilot-to-production with pre-built APIs

3–6 mo

Typical payback period for NLP investment

📐 ROI Formula

Annual Savings

= (Time saved per task × Volume × Hourly cost) + Error reduction savings

Annual Cost

= API cost + Maintenance + Human review overhead

ROI

= (Savings − Cost) / Cost × 100%

Benchmark:

Most enterprise NLP projects see 300–800% ROI in year 1 when well-scoped. Start with a narrow, high-volume, repetitive task.

MASTER IN BUSINESS · NLP

18 / 25

Risks

Hallucination — The #1 Risk in LLM Deployments

LLMs confidently generate false information. Understanding why is essential for safe deployment.

⚠️ What Is Hallucination?

LLMs are trained to produce

plausible-sounding text

, not necessarily

true text

. They predict the next likely word — which is not the same as retrieving facts.

Example:

Ask an LLM "What did CEO Jane Smith say in her 2023 earnings call?" It may confidently fabricate a quote — in her style, with plausible numbers — that never existed.

High-Risk Hallucination Scenarios

Legal: fabricated case law citations or contract terms

Medical: incorrect drug dosages or contraindications

Financial: invented regulatory requirements or market data

HR: made-up company policies presented as fact

Mitigation Strategies — By Risk Level

✅ Low Risk: RAG + Source Citation

Force the model to answer only from retrieved documents. Require it to cite its source. Every answer can be traced and verified. Hallucination rate drops from ~15% to under 2%.

⚡ Medium Risk: Human-in-the-Loop

Route low-confidence outputs to a human reviewer before they reach the end customer. Define confidence thresholds. Log and audit all decisions.

🔒 High Risk: Constrained Output Formats

Force JSON/structured output. Validate against a schema. Use classification (closed-answer) instead of generation (open-ended). Never generate critical facts — only classify or extract them.

Golden Rule:

Never deploy an LLM in a high-stakes domain (legal, medical, financial) without RAG + source grounding + human review on the critical path.

MASTER IN BUSINESS · NLP

19 / 25

Responsible NLP

Bias, GDPR & the EU AI Act

Legal and ethical obligations you cannot ignore when deploying NLP in Europe

⚖️ Language Bias — How It Enters NLP

Training Data Bias:

If news articles overwhelmingly describe CEOs as "he" and nurses as "she," sentiment and classification models inherit these associations.

Language Bias:

Models trained primarily on English perform significantly worse on German, Turkish, Arabic — impacting quality for non-English users.

Amplification:

NLP doesn't just reflect biases — it amplifies them at scale across millions of interactions.

📌 Real Business Case

A bank deployed an LLM-based credit decision assistant. It systematically assigned lower creditworthiness scores to applicants with non-German names — even with identical financials. Discovered only after an audit. Regulatory investigation followed.

🔒 GDPR & NLP: What You Must Know

Personal data in prompts:

Sending customer names, emails, or IDs to an external LLM API = potential GDPR violation without a DPA.

Right to explanation:

If an NLP system makes a decision affecting a person, they have the right to a human-understandable explanation.

Data minimisation:

Anonymise/pseudonymise data before sending to any external model.

📋 EU AI Act — NLP Implications (2024)

High-risk systems

include NLP used in hiring, credit, education, law enforcement → mandatory risk assessments, bias audits, human oversight, transparency.

Penalties: up to

€30M or 6% global annual revenue.

General purpose AI (GPAI)

models like GPT-4 now face systemic risk obligations.

MASTER IN BUSINESS · NLP

20 / 25

Applications

NLP Across Industries — Where the Real Value Is

Every industry has high-volume, language-heavy processes waiting to be transformed

🏦

Banking & Finance

AML transaction narrative analysis. Earnings call sentiment. Loan application review. Regulatory filing parsing. Fraud alert triage via ticket classification.

⚖️

Legal & Compliance

Contract clause extraction & comparison. Case law research (10× faster). M&A due diligence. Regulatory change monitoring. Policy gap analysis.

🏥

Healthcare

Clinical note structuring (saves 1.5 hrs/doctor/day). ICD code suggestion. Patient intake form understanding. Drug adverse event extraction from literature.

🛒

Retail & E-Commerce

Review analysis at scale (millions/day). Product description generation. Multilingual customer support. Search relevance improvement. Return reason classification.

🏭

Manufacturing & Logistics

Maintenance log analysis. Supplier contract risk flagging. Cross-language supplier communication. Technical manual Q&A for field engineers.

🏛️

Public Sector

Citizen inquiry routing. Policy document Q&A. Parliamentary record analysis. Grant application assessment. Multilingual government services.

MASTER IN BUSINESS · NLP

21 / 25

Strategy

Build vs Buy vs Prompt — The Decision Framework

The most important strategic question when starting an NLP project

Approach

What It Is

Cost

Time to Value

When to Choose

🚀

Prompt an LLM API

Call GPT-4/Claude with a well-crafted prompt

€0.001–0.01 per task

Hours

First attempt. Always. For most tasks, this is enough.

🔍

RAG System

LLM + your documents in a vector database

€5–50K build, €0.01–0.1/query

2–6 weeks

When you need answers grounded in your proprietary data.

⚙️

Fine-Tune Open Model

Adapt Llama/Mistral on your labelled data

€10–100K + GPU infra

1–3 months

High volume, strict data privacy, or unique domain language.

🏗️

Train From Scratch

Build your own language model

€1M–100M+

6–24 months

Almost never. Only if you are a foundation model company.

🛒

Buy SaaS NLP Tool

Off-the-shelf (MonkeyLearn, Cohere, etc.)

€500–10K/month

Days to weeks

Standard tasks (sentiment, classification) with no customisation needed.

🎯 The Decision Tree

① Can a well-crafted prompt solve it? →

Prompt first.

② Do you need your private docs? →

Add RAG.

③ Generic model underperforms and you have data? →

Fine-tune.

④ Need full data control? →

Self-host open model.

⑤ Train from scratch? →

Almost certainly no.

⚠️ The Most Common Mistake

Companies jump to fine-tuning or custom training before trying prompt engineering + RAG. These cheaper approaches solve 80% of problems. Save fine-tuning for when you've exhausted them.

💡 The competitive moat

is never the model itself (everyone can access the same APIs). It's your

proprietary data

, your

domain expertise

, and your

speed of iteration

.

MASTER IN BUSINESS · NLP

22 / 25

Execution

Running an NLP Project — From Idea to Production

The end-to-end playbook for business leaders sponsoring or managing NLP initiatives

1

Define the Business Problem (Week 1)

What specific task? What's the current process cost? What does "success" look like in numbers? What data do you have? Who is the end user? Don't start with "use AI" — start with the pain point.

2

Data Audit & Labelling (Week 1–3)

What text data exists? Is it labelled? How clean is it? For classification: label 200–500 examples. Invest here — data quality drives model quality, not the reverse.

3

Baseline: Prompt Engineering First (Week 2–3)

Before training anything, test with a well-crafted prompt on 50–100 examples. Often achieves 75–90% of what fine-tuning would — in 2 days instead of 2 months.

4

Build & Evaluate (Week 3–6)

Build the pipeline. Evaluate rigorously on held-out test data. Always compare to a simple baseline. Track: precision, recall, F1 for classification tasks.

5

Deploy, Monitor, Iterate (Week 6+)

Ship to a small user group. Monitor accuracy, latency, user feedback. Models drift as language and business evolve — schedule regular revalidation.

⚠️ Top Reasons NLP Projects Fail

Vague success criteria

— "improve customer experience" isn't measurable

Data underestimation

— 1,000 examples sounds like a lot; it usually isn't

Ignoring edge cases

— non-standard language, slang, multilingual inputs

No monitoring

— accuracy degrades silently after 6 months

Skipping human review

— for high-stakes outputs

✅ Key Evaluation Metrics for NLP

Classification:

Precision, Recall, F1-score per class

Generation:

BLEU/ROUGE (automatic) + human eval

Retrieval (RAG):

Hit rate, MRR, answer faithfulness

Business:

Task completion rate, time saved, error rate

💡 Rule of Thumb:

A well-run NLP pilot on a focused use case should show measurable results within 4–6 weeks. If it doesn't, the use case or data probably needs revisiting.

MASTER IN BUSINESS · NLP

23 / 25

Self-Check

Test Yourself — 10 Strategic NLP Questions

Can you answer these from memory? These are the questions clients and boards will ask.

What is the difference between

extractive

and

abstractive summarisation

? Which is safer for legal documents?

A competitor is doing

sentiment analysis

on 2M customer reviews daily. What architecture are they using, and why?

Why can't a simple keyword search replace

semantic search

? Give a concrete example.

Explain

RAG

to a CFO who doesn't know what a vector is. Why is it cheaper than fine-tuning?

Your LLM-based contract tool is

hallucinating

8% of the time. Name 3 specific mitigations.

Under the

EU AI Act

, which NLP use cases are classified as "high-risk"? What does that legally require?

A hiring tool trained on historical CVs systematically rejects women's applications. What

bias mechanism

caused this?

You have 600 labelled support tickets. Should you fine-tune a model or use

prompt engineering

? Justify your answer.

Compare

GPT-4o vs Llama 3 self-hosted

for a German hospital processing patient notes.

What is

attention

, and why does it make Transformers better than RNNs for long documents?

💡 Capstone Challenge:

A European e-commerce company receives 50,000 customer reviews/month in 8 languages. Their team manually reads 5% and spends 3 days/week on insight reports. Design a full NLP solution: architecture, data strategy, tools, metrics, compliance considerations, and expected ROI. Present in 5 minutes.

MASTER IN BUSINESS · NLP

24 / 25

Course Summary

Key

Takeaways

🗄️ The 80% Opportunity

80% of enterprise data is unstructured text. NLP makes it usable. This is the biggest untapped efficiency frontier in most organisations.

🏷️ 8 Core Tasks

Classification, Sentiment, NER, Summarisation, Translation, Q&A, Generation, Semantic Search. Every business problem maps to one of these.

🔢 Text → Numbers

Tokenisation + Embeddings + Attention = the three mechanisms behind all modern NLP. Attention resolves context and ambiguity.

🚀 Prompt First

Start with prompt engineering. Add RAG for private data. Fine-tune only when needed. Never train from scratch. Iterate fast.

⚠️ Hallucination is Real

LLMs confidently fabricate. Mitigate with RAG, source citation, structured output, and human-in-the-loop for high-stakes decisions.

⚖️ Compliance is Mandatory

GDPR governs personal data in prompts. EU AI Act requires audits for high-risk NLP. Bias is both ethical and legal risk. Penalties up to 6% global revenue.

🎯 Your Next Step

Identify one high-volume, text-heavy process in your organisation. Write a prompt. Test it on 20 examples today. You now have everything you need to start.

MASTER IN BUSINESS · APPLIED AI SERIES

Firas Ben Hassan · AI Guest Lecturer · Natural Language Processing for Business

const TOTAL = 25;

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
