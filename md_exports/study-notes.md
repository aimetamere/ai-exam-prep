# AI Exam — Study Notes

**Companion to [exam-1.md](exam-1.md) · Source: [all-courses-combined.md](../frontend/dist/all-courses-combined.md)**

Organised by course. Use the "Numbers to remember" tables for last-minute drilling — most exam recall questions come from those figures.

---

## Table of Contents

1. [Course 1 — AI Introduction & Revolution (ANI → AGI → ASI)](#course-1--ai-introduction--revolution-ani--agi--asi)
2. [Course 2 — Generative AI & LLMs](#course-2--generative-ai--llms)
3. [Course 3 — Agentic AI](#course-3--agentic-ai)
4. [Course 4 — Machine Learning Fundamentals](#course-4--machine-learning-fundamentals)
5. [Course 5 — Neural Networks & Deep Learning](#course-5--neural-networks--deep-learning)
6. [Course 6 — Natural Language Processing (NLP)](#course-6--natural-language-processing-nlp)
7. [Course 7 — Computer Vision](#course-7--computer-vision)
8. [Course 8 — Data & AI Infrastructure](#course-8--data--ai-infrastructure)
9. [Cross-cutting — Ethics, Governance & Regulation](#cross-cutting--ethics-governance--regulation)

---

## Course 1 — AI Introduction & Revolution (ANI → AGI → ASI)

### At a glance
- **ANI → AGI → ASI** is the roadmap: narrow intelligence (today) → human-level (future) → superintelligence (hypothetical).
- AI's modern breakthrough (2012) was not a grand theory — it was GPUs + data + neural networks.
- AI amplifies humans; it does not replace domain expertise. The economic revolution is jobs changing, not disappearing.

### Key concepts
- **ANI (Artificial Narrow Intelligence)** — superhuman at one task, zero generalisation. Example: ChatGPT, AlphaGo, autopilot, recommenders. This is all of today's AI.
- **AGI (Artificial General Intelligence)** — human-level across all cognitive domains; can transfer knowledge between fields. Estimated 2030–2070, highly uncertain. **Does not yet exist.**
- **ASI (Artificial Superintelligence)** — vastly beyond human in every domain. Recursive self-improvement. Hypothetical; could follow AGI rapidly.
- **Turing's 1950 question**: "Can machines *think*?" — launched the field.
- **1956 Dartmouth Conference** — scientists predicted "human-level AI in 20 years." Reality failed. Funding collapsed → **AI Winters**.
- **1997 Deep Blue** beat Kasparov at chess — brute force, not intelligence.
- **2012 AlexNet** won ImageNet by a historic margin — the real birth of modern deep learning (GPUs + big data + CNNs).
- **2016 AlphaGo / Move 37** — a move no human would play, yet brilliant. First sign AI can *invent* knowledge, not just imitate.
- **2020s — Foundation models / ChatGPT** (2022): one model handles language, code, images, reasoning.
- **Human vs AI intelligence**: humans learn from one example and transfer knowledge across domains; AI needs millions of examples and is largely task-specific. Humans have emotional intelligence and common sense; current AI does not.

### Exam watch-outs
- ANI vs AGI: the exam tests the *generalisation* difference — ANI = one task, AGI = any intellectual task a human can.
- **WEF jobs stat**: 85 million jobs **displaced**, 97 million **new jobs created** by AI → **net +12M (net gain)**. Don't reverse the numbers.
- Move **37** (not 35 or 47) in AlphaGo 2016.
- AlexNet year = **2012**.

### Numbers to remember

| Fact | Value |
|---|---|
| Alan Turing's question | 1950 |
| Dartmouth Conference | 1956 |
| Deep Blue defeats Kasparov | 1997 |
| AlexNet / ImageNet breakthrough | 2012 |
| AlphaGo beats Lee Sedol, Move 37 | 2016 |
| ChatGPT public release | 2022 |
| Global AI market today (~2025) | $250B |
| Global AI market 2030 projection | $1.8 trillion |
| VC invested in AI startups (2020–24) | >$200B |
| WEF jobs displaced | 85 million |
| WEF jobs created | 97 million |
| Productivity gain in knowledge work | ~40% |
| Human brain neurons | ~86 billion |
| Human brain synapses | ~100 trillion |
| Human brain energy use | ~20 watts |

---

## Course 2 — Generative AI & LLMs

### At a glance
- **Generative AI creates new content**; discriminative AI classifies or predicts.
- LLMs are **next-word predictors** — they generate plausible text, not necessarily true text. This is *why* hallucinations happen.
- The 2024–25 business moat is NOT the model (everyone calls the same APIs). It is your proprietary data, workflows, and domain expertise.

### Key concepts
- **LLM (Large Language Model)** — a neural network trained on trillions of tokens. Predicts the **next most likely word** in a sequence. Billions of parameters.
- **Tokens** — subword units. ~0.75 words per token in English. LLM APIs charge **per token**, not per word. "ChatGPT" = 2 tokens ("Chat" + "GPT").
- **Tokenisation** — breaking text into tokens; LLMs read numbers, not letters. Affects cost, context limits, and performance.
- **Context window** — how much text the model can hold at once (4K → 200K → 1M+ tokens). Bigger context = higher cost (2–10×).
- **Training phases**:
  1. **Pre-training** — months, $10–100M, general language understanding.
  2. **Fine-tuning** — days/weeks, $1K–$100K, domain specialisation.
  3. **RLHF (Reinforcement Learning from Human Feedback)** — align model with human preferences (helpful, harmless, honest).
  4. **Inference** — serving to users.
- **Temperature** (0.0–1.0) — creativity/randomness dial.
  - `0.0–0.3` → deterministic (compliance, legal, data analysis, classification).
  - `0.5–0.7` → balanced (default chatbots).
  - `0.8–1.0` → creative (marketing, brainstorming).
- **Max tokens** — response length cap. Set slightly higher than expected need.
- **Top-p / nucleus sampling** — alternative to temperature. **Use one, not both.**
- **Frequency / presence penalty** — reduce repetition or encourage diversity.

### LLM families (2025–26)
| Model | Provider | Key strength | Context | Privacy |
|---|---|---|---|---|
| GPT-4o / GPT-5 | OpenAI | General capability, reasoning, ecosystem | 128K | Leaves EU |
| Claude 3.5 Sonnet | Anthropic | Long docs, safety, nuance | 200K | Leaves EU |
| Gemini 1.5/2.0 | Google | **Longest context (1M)**, multimodal, Workspace | 1M | Leaves EU |
| Llama 3.1 (405B) | Meta | Open-source, self-host, full control | 128K | ✅ Your servers |
| Mistral Large | Mistral (FR) | European, GDPR-friendly | 128K | ✅ EU-based |
| DeepSeek R1 | DeepSeek (CN) | Reasoning, very cheap | 128K | ❌ China |

### Prompting techniques
- **Zero-shot** — no examples, just instruction. Fast, less reliable.
- **Few-shot** — show 2–5 input/output examples. Accuracy jumps **30–50%** on structured tasks. Optimal = 3–5 examples.
- **Chain-of-Thought (CoT)** — "Think step by step." Improves complex reasoning accuracy from ~60% → ~95%.
- **Self-Consistency** — run the same prompt 3–5× and take the majority answer. High accuracy, 3–5× cost.
- **Tree of Thoughts** — explore multiple reasoning paths, pick best. Strategic decisions, trade-off analysis.
- **ReAct (Reason + Act)** — alternates thinking and tool use. How modern AI **agents** work.

### RAG (Retrieval-Augmented Generation)
- Grounds LLM answers in **your private documents**.
- Pipeline: **index docs → embed query → retrieve top-k chunks → inject into prompt → generate grounded answer** with citations.
- Dramatically reduces hallucinations (from ~15% to <2%).
- **Cheaper and more current than fine-tuning** — knowledge stays fresh as docs update.
- Prefer **RAG before fine-tuning**.

### Exam watch-outs
- "LLM predicts the **next** most likely word" — that's the literal phrase on the exam.
- For a **compliance document analysis task**: temperature = **0.1** (not 0.5 or 0.8).
- **Gemini = 1M token context, Google Workspace integration** — the exam's "longest context" answer.
- For EU medical/finance data residency: **Mistral Large or self-hosted Llama 3** (not GPT/Claude API, not DeepSeek).
- Main **RAG advantage** over fine-tuning: keeps knowledge current AND makes answers traceable to source documents (NOT "eliminates hallucination completely" — it doesn't).
- Few-shot: **2–5 examples** (often phrased as "2–3").

### Numbers to remember

| Fact | Value |
|---|---|
| Temperature for accuracy | 0.0–0.3 |
| Temperature default | 0.5–0.7 |
| Temperature for creativity | 0.8–1.0 |
| Few-shot optimal count | 3–5 examples |
| Few-shot accuracy gain | +30–50% |
| CoT accuracy gain | 60% → 95% on complex tasks |
| RAG hallucination reduction | ~15% → <2% |
| Average tokens-per-word (English) | ~0.75 |
| Training cost for top LLM | $10–100M+ |
| Fine-tuning cost | $1K–$100K |

---

## Course 3 — Agentic AI

### At a glance
- An **AI agent** is not a chatbot. Four properties: **perception, reasoning, action, memory**.
- Agents take actions (call APIs, send emails, query DBs), not just generate text.
- Governance, kill switches, and audit trails are mandatory — agents can cause real-world damage.

### Key concepts
- **Agent core properties**:
  1. **Perception** — reads context (docs, APIs, UI, sensors).
  2. **Reasoning** — plans multi-step actions.
  3. **Action** — calls tools, runs code, sends messages.
  4. **Memory** — short-term (current task) + long-term (vector DB).
- **Reasoning patterns**: ReAct, Chain-of-Thought, Tree of Thoughts, Plan-and-Execute.
- **Memory architecture**:
  - *In-context (working)* → RAM-like, current conversation.
  - *External (vector DB)* → hard drive, knowledge base.
  - *Episodic* → diary of past interactions.
  - *Procedural* → learned skills/policies.
- **Multi-agent systems**: Orchestrator → Worker agents → Critic/Validator. Communicate via MCP (Model Context Protocol, Anthropic) or A2A (Google).

### What enabled the agentic transition
1. **Function calling / tool use** — LLMs can now actually *do* things.
2. **Extended context windows** (4K → 2M tokens).
3. **Improved reasoning** (CoT, multi-step planning).
4. **Multimodal** capabilities (text + image + audio + video).
5. **Costs dropped 10–100×** — $0.02 → $0.001 per 1K tokens → mass deployment economically viable.

### Agent frameworks & stack
- **Frameworks**: LangChain/LangGraph, AutoGen (Microsoft), CrewAI, Semantic Kernel, LlamaIndex, Haystack, AWS Bedrock Agents, Google Vertex AI Agents.
- **Tool layer**: Tavily/Brave (search), E2B (code execution), Playwright (browser automation), Unstructured.io (docs).
- **Infrastructure**: Pinecone/Weaviate/Qdrant (vector DBs), LangSmith/Langfuse (observability).
- **Emerging standards**: MCP (Anthropic, tool plugin standard), A2A (Google), ACP.

### Agentic RAG — gives the retrieval step a brain
- **Corrective RAG (CRAG)** — falls back to web search if retrieved docs are low-confidence.
- **Self-RAG** — agent decides at every step whether to retrieve, and whether its answer is supported.
- **Adaptive RAG** — routes simple questions directly, complex ones through full pipeline.
- **Multi-Agent RAG** — specialised agents query different sources; orchestrator synthesises.

### Trust & governance
- **What can go wrong**: hallucination-with-action (acts on false info), prompt injection, scope creep, runaway loops, data leakage.
- **Governance checklist**: define scope, log every action (audit trail), kill switches, sandbox before prod, named accountability, continuous monitoring.
- **Human-in-the-loop spectrum** — more autonomy ≠ always better. Match oversight to risk.

### Real-world deployments (2025–26)
Salesforce Agentforce, Microsoft Copilot Studio, ServiceNow AI Agents, Klarna (≈700 FTE replaced in customer service), Cognition Devin (autonomous software engineer), Harvey AI (legal).

---

## Course 4 — Machine Learning Fundamentals

### At a glance
- ML = data + answers → rules (opposite of traditional programming, where rules produce answers).
- **Tabular business data → start with XGBoost / Random Forest**, not deep learning.
- **Data quality beats algorithm choice** (Andrew Ng, data-centric AI).

### Types of learning
| Type | Data | Output | Business example |
|---|---|---|---|
| **Supervised** | Labelled (X, y) | Prediction / class | Churn, credit scoring, fraud |
| **Unsupervised** | Unlabelled (X) | Clusters / structure | Customer segmentation |
| **Semi-supervised** | Few labels + lots unlabelled | Labels for all | Medical imaging |
| **Reinforcement** | Reward signal | Optimal policy | Dynamic pricing, ad bidding |
| **Transfer** | Pre-trained + small dataset | Adapted model | Fine-tuned sentiment |

### Supervised algorithms
- **Logistic Regression** — linear baseline, highly interpretable (coefficients show feature importance). Start here.
- **k-Nearest Neighbours (kNN)** — no training; predicts by majority vote of k closest points. Small k = overfit, large k = underfit.
- **Decision Tree** — flowchart-like, splits data with **Gini / Entropy**. Extremely interpretable. Prone to overfitting without pruning.
- **Random Forest** — ensemble of many trees via bootstrap sampling + majority vote. Robust, gives feature importance.
- **SVM (Support Vector Machine)** — maximum-margin hyperplane + kernel trick. Good for text, high-dim, small–medium data.
- **Naïve Bayes** — probabilistic, fast, great on text (spam, sentiment).
- **XGBoost / LightGBM / CatBoost (Gradient Boosting)** — builds trees sequentially, each correcting previous errors. **State-of-the-art for tabular business data.**

### Regression
- **Linear regression** — minimises MSE; ŷ = β₀ + β₁x₁ + ...
- **Ridge (L2)** — shrinks coefficients toward zero (multicollinearity).
- **Lasso (L1)** — can zero out coefficients → automatic **feature selection**.
- **Elastic Net** — combines L1 + L2.
- Metrics: **MAE, RMSE, R²** (variance explained).

### Evaluation — Confusion Matrix
|  | Pred + | Pred − |
|---|---|---|
| **Actual +** | TP | FN |
| **Actual −** | FP | TN |

- **Accuracy** = (TP+TN)/total — misleading on imbalanced data.
- **Precision** = TP/(TP+FP) — "of flagged, how many real?" Minimises false alarms.
- **Recall** = TP/(TP+FN) — "of all real cases, how many caught?" Minimises misses.
- **F1** = harmonic mean of precision & recall.
- **AUC-ROC** — ability to discriminate between classes **across all thresholds**. The textbook answer for "what does AUC-ROC measure?"

### Unsupervised
- **K-Means** — specify K centroids, assign, recompute. Use **elbow method** to choose K. Simple, fast.
- **Hierarchical clustering** — builds dendrogram, no pre-specified K.
- **DBSCAN** — density-based, finds arbitrary shapes, labels outliers automatically.
- **PCA** — reduces dimensions, finds directions of max variance. Fights curse of dimensionality. Good for visualisation; loses interpretability.
- **Market basket analysis** — Support, Confidence, Lift; algorithms Apriori / FP-Growth.

### Common pitfalls
- **Overfitting** — great train, poor test. Fix: more data, regularisation, dropout, cross-validation, early stopping.
- **Underfitting** — model too simple, poor on both. Fix: more features, richer model.
- **Data leakage** — training on features unavailable at prediction time → 99% accuracy, useless in prod.
- **Class imbalance** — fraud at 0.1%: "always not fraud" = 99.9% accuracy. Fix: **SMOTE oversampling**, class weights, anomaly detection.
- **k-fold cross-validation** — split K ways, train K-1, test 1, rotate. Essential for reliable estimates.

### Explainability
- **SHAP values** — per-feature contribution per prediction.
- **LIME** — local surrogate model, works for any algorithm.
- **Feature importance** — built into tree-based models (RF, XGBoost).

### Bank churn case study
- 200K records, 18 months history, 8% churn rate → **SMOTE oversampling**.
- **XGBoost wins**: Precision 79%, Recall 82%, **AUC-ROC 0.91**.
- Result: 34% churn reduction, **€1.7M saved year 1, 560% ROI**.

### Exam watch-outs
- **Tabular/structured business data → XGBoost or Random Forest first**, NOT deep neural network.
- **AUC-ROC** = ability to discriminate across all thresholds (not "speed," not "cost").
- **SMOTE** = the oversampling technique used for the bank churn 8% imbalance.
- **Data-centric AI (Andrew Ng)**: improving data quality by 10% typically yields more ROI than increasing model complexity by 10%.

---

## Course 5 — Neural Networks & Deep Learning

### At a glance
- Deep Learning **≠ big math**. "Deep" just means *many layers*.
- **Rule**: unstructured data (images, text, audio, video) → DL. Structured/tabular → classical ML (XGBoost).
- **Never train from scratch** — use transfer learning from Hugging Face / ImageNet / etc.

### Core building blocks
- **Artificial neuron (perceptron)**: inputs × weights → sum → activation → output.
- **Weights** = what the network actually learns.
- **Activation function** — introduces **non-linearity** so networks can learn curves / complex boundaries (without it, NN = linear regression).
  - **ReLU** = max(0, x). Most popular for hidden layers. Default.
  - **Sigmoid** — squashes to (0,1). Binary classification output.
  - **Softmax** — outputs a probability distribution summing to 1. **Multi-class output layers.**
  - **GELU / SiLU** — smooth ReLU. Used in modern Transformers.
- **Layers**: input → hidden layers → output. "Deep" = more than one hidden layer. Each layer learns increasingly abstract features.

### Training
- **Loss function** — measures how wrong the prediction is; provides signal for weight updates.
  - **MSE (mean squared error)** → regression.
  - **Cross-entropy** → classification.
- **Backpropagation** — uses calculus (chain rule) to compute how much each weight contributed to the error, then updates every weight. **The learning engine.**
- **Gradient descent** — "blindfolded on a hilly landscape, step downhill." Mountain analogy.
- **Learning rate** — step size. Too large → overshoot / diverge. Too small → takes forever. Rule: Adam starts at 0.001.
- **Optimisers**:
  - **SGD** — classic baseline.
  - **Adam** — adaptive learning rate per parameter. **Default choice for 90% of deep learning projects.**
- **Regularisation**:
  - **Dropout** — randomly switches off % of neurons during training → forces robust, redundant representations. Most effective DL regulariser.
  - **Early stopping** — stop when val loss rises.
  - **Batch normalisation** — normalises layer inputs, stabilises training.

### Architectures
| Architecture | Best for | Famous for |
|---|---|---|
| **CNN** (Convolutional) | Images, video | **AlexNet 2012 → ImageNet**; spatial hierarchy via filters |
| **RNN / LSTM / GRU** | Sequences (time, speech) | Hidden state = memory; LSTM gates solve forgetting |
| **Transformer** | Text, code, multimodal | **Self-attention**; foundation of all modern LLMs |
| **GAN** | Image generation | Generator vs Discriminator (mostly replaced by diffusion) |
| **Diffusion** | Image/video synthesis | Denoising from random noise; DALL-E, Stable Diffusion, Sora |
| **Autoencoder / VAE** | Anomaly detection, compression | Latent space |
| **Graph Neural Network** | Molecules, fraud, social nets | Nodes + edges |
| **Reinforcement Learning** | Robotics, games | Agent + reward |

### CNN in detail
- **Convolution** — slides small filters (3×3, 5×5) over image, computing "how much does this region look like my pattern?"
- **Pooling** — halves spatial size, makes model **translation-invariant**.
- **Fully connected** → final classification.
- Early layers = edges, mid = shapes, deep = objects.
- **AlexNet 2012** — won ImageNet, kick-started deep learning era. **ResNet (2015)** — skip connections enabled 152+ layer networks.

### Transformer (2017, "Attention is All You Need")
- **Self-attention** — each word/token simultaneously considers **every other token** in the sequence and assigns attention weights.
- Resolves ambiguity: "The bank by the river" vs "The bank approved the loan" — same word, context determines meaning.
- **Parallelisable** → trains 10–100× faster than RNNs. Handles long-range dependencies easily.
- Foundation of GPT, Claude, BERT, Gemini, Llama, etc.
- **BERT = encoder-only** (bidirectional, for understanding: classification, search, Q&A).
- **GPT = decoder-only** (left-to-right, for generation: chat, writing).
- **T5 / BART = encoder-decoder** (translation, summarisation).

### Transfer learning
- Take a pre-trained model (ResNet, BERT, Llama), freeze early layers, fine-tune the final layers on your small dataset. Hours to days instead of months.
- Rule: < 1K examples → freeze all, train only final layer. 1K–10K → freeze early, fine-tune later. 10K+ → fine-tune full network.

### Exam watch-outs
- **Activation function introduces non-linearity** — the exact phrase on the exam.
- **ReLU = max(0, x)**, default hidden layer activation.
- **Softmax = multi-class probability distribution summing to 1** (NOT ReLU, NOT sigmoid).
- **Backpropagation** uses the chain rule to assign error contribution to each weight.
- **Dropout = regularisation**, NOT architecture.
- **Adam = default optimiser** (NOT SGD).
- **CNN for images; self-attention is the Transformer's key mechanism.**
- **AlexNet won ImageNet in 2012.**
- BERT = bidirectional / understanding, GPT = left-to-right / generation.

### Numbers to remember

| Fact | Value |
|---|---|
| AlexNet wins ImageNet | 2012 |
| ResNet (skip connections) | 2015 |
| "Attention is All You Need" | 2017 |
| Vision Transformer paper | 2020–21 |
| Adam default learning rate | 0.001 |
| Invoice AI case: payback period | 16 days |
| Deep learning pilot cost | €50–200K |

---

## Course 6 — Natural Language Processing (NLP)

### At a glance
- 80% of enterprise data is **unstructured text**. NLP makes it usable.
- 2025 reality: most NLP projects start with **a well-crafted prompt**, not a training run.
- Competitive moat = proprietary data + domain expertise + speed of iteration. NOT the model.

### NLP's four eras
1. **Rule-based (1950s–80s)** — hand-crafted grammar rules. Brittle. ELIZA 1966.
2. **Statistical (1990s–2010s)** — n-grams, TF-IDF, Naïve Bayes, SVM. Bag-of-words.
3. **Neural & word embeddings (2013–18)** — **Word2Vec** (2013): "King − Man + Woman ≈ Queen". RNN/LSTM memory. **BERT** (2018) = bidirectional.
4. **LLMs (2020+)** — GPT-3 (175B), ChatGPT (Nov 2022), Claude, Gemini, Llama.

### 8 core NLP tasks
1. **Text classification** — spam, topic.
2. **Sentiment analysis** — positive/negative/neutral at scale.
3. **Named Entity Recognition (NER)** — extract people, orgs, dates, amounts, places.
4. **Summarisation** — extractive (pick sentences) vs abstractive (rewrite).
5. **Machine translation** — DeepL, Google.
6. **Question answering** — RAG-powered.
7. **Text generation** — LLM-powered.
8. **Semantic search** — find by meaning via embeddings.

### How modern NLP works (3 mechanisms)
1. **Tokenisation** — split text into subword units → numeric IDs.
2. **Embeddings** — each token becomes a high-dimensional vector; *similar meaning = nearby vectors*. Word embeddings (Word2Vec, GloVe) → contextual embeddings (BERT). Enables semantic search.
3. **Attention / self-attention** — every token attends to every other token; resolves long-range dependencies and pronoun ambiguity. Foundation of every modern LLM.

### Fine-tuning vs pre-training
- **Pre-training** — $5M–$100M+, weeks–months, generic text. Only OpenAI/Anthropic/Google/Meta/Mistral do this.
- **Fine-tuning** — $50–$5K, hours–days, 500–50K domain examples. Any company can do this.
- **Prompt engineering first** — usually solves 75–90% of what fine-tuning would, in 2 days.

### Prompt engineering — the 5 techniques
1. **Role assignment** — "You are a senior [role]..."
2. **Few-shot examples** — 2–5 input/output pairs.
3. **Chain-of-thought** — "Think step by step."
4. **Output format constraints** — "Return only valid JSON."
5. **Negative instructions** — "Do NOT speculate. Do NOT exceed 150 words."

### RAG pipeline (repeat from Course 2 — memorise)
1. Index docs → chunk → embed → store in vector DB (Pinecone, Weaviate, pgvector).
2. User question → embed.
3. Retrieve top-k similar chunks.
4. Augment prompt with chunks + question.
5. LLM generates grounded answer with citations.

Hallucination rate drops ~15% → <2%.

### Business ROI
- €0.002 per document via LLM API vs €15–40 via human.
- Typical enterprise NLP project: **300–800% ROI in year 1**.
- Typical payback: 3–6 months.

### Build vs Buy vs Prompt — the decision tree
1. Can a prompt solve it? → **Prompt first. Always.**
2. Need private docs? → **Add RAG.**
3. Generic model underperforms, you have data? → **Fine-tune.**
4. Full data control? → **Self-host open model.**
5. Train from scratch? → **Almost never.**

### Hallucination mitigation (by risk)
- **Low**: RAG + source citation.
- **Medium**: Human-in-the-loop on low-confidence.
- **High**: structured output (JSON schema), classification instead of generation.

### Exam watch-outs
- Word embeddings: **"King − Man + Woman ≈ Queen"** → the keyword is **embeddings**.
- **BERT** = encoder-only = **understanding**. **GPT** = decoder-only = **generation** (both derived from the same Transformer).
- Hallucination rate with RAG + citation: **from ~15% to under 2%** (the exam's specific choice).
- ROI range for well-scoped NLP projects year 1: **300–800%**.
- Build vs Buy vs Prompt: **Prompt first**, always.

---

## Course 7 — Computer Vision

### At a glance
- 7 core tasks: **Classification, Detection, Segmentation, Tracking, OCR, Pose, Generation**.
- **Match the task to the business need** — start with the *least precise* task that solves the problem (cheaper labels).
- CV bias is documented, systemic, and has caused real-world wrongful arrests. **Audit across demographics before deploying.**

### Task hierarchy — precision vs cost
| Task | Output | Label cost for 10K images | When to use |
|---|---|---|---|
| **Classification** | "is this X?" label only | ~€1,000 | Pass/fail QC |
| **Detection** | label + bounding box + confidence | €5–15K | Counting, locating, alerting (helmets, cars) |
| **Instance segmentation** | pixel-precise mask per object | **€15,000–€40,000** | Medical tumour area, product extraction |

### How CV works
- Image = grid of numbers (grayscale 0–255; RGB = 3 channels). 224×224 RGB = 150,528 numbers.
- **Convolution filter** — small grid (3×3, 5×5) slides across image, multiplies + sums → feature map. Each filter = one pattern detector.
- **CNN pipeline**: Input → Conv → Pool (halve size) → Conv → Pool → ... → Fully Connected → Output.
- **Pooling** = translation invariance + dimensionality reduction.
- **ResNet (2015)** — *skip connections* solved vanishing gradients for very deep networks (152+ layers).

### Vision Transformer (ViT) — "An image is worth 16×16 words" (2020)
- Divide image into patches (e.g. 16×16 px), treat each like a word, feed sequence to a Transformer.
- Each patch attends to every other patch from layer 1 → **global context** without stacking many layers.
- Scales with data + compute. Powers CLIP, SAM, GPT-4V, Gemini Vision.
- **ViT = self-attention replaces convolutions.**
- **CNN for small data / edge / real-time; ViT for large datasets + cloud + highest accuracy.**

### Key models / tools (2025)
- **YOLOv9/v10** — real-time detection, edge-friendly.
- **SAM 2 (Meta)** — zero-shot "segment anything"; 11M images, 1B masks; auto-labelling.
- **CLIP / GPT-4V / Gemini Vision** — zero-shot classification from natural-language prompts.
- **Cloud Vision APIs** — Google Vision AI, AWS Rekognition, Azure CV. €0.001–0.005/image.

### Data strategy
- **Transfer learning** — start from ImageNet-trained ResNet50 / EfficientNet / ViT.
- **Data augmentation** — flip, rotate, crop, brightness → 500 images → 10,000+ training examples.
- **Synthetic data** — 3D rendering / generative AI for rare defects.
- **Active learning** — model asks for the labels that would help it most (95% accuracy with 70% fewer labels).
- Labels needed: classification 200–500/class, detection 1K–10K total, segmentation 500–2K (masked with SAM auto-labelling).

### Bias — MIT Gender Shades (2018)
- Facial analysis APIs: **0.8% error on light-skinned men** vs **34.7% on dark-skinned women** — **43× worse**.
- Root cause: biased training data.
- Real consequences: Robert Williams (2020), Porcha Woodruff (2023) — both Black, both wrongfully arrested on false facial recognition matches.

### Business ROI
- €0.002 per image cloud API vs €0.50 per human inspection.
- BMW production: **99.7% defect accuracy**.
- Industrial CV: **400–1,200% ROI year 1.**
- Typical pilot 6–12 weeks.

### Deepfakes & generative CV risks
- €25M stolen (HK firm, 2024) via deepfake CEO audio.
- Detection = arms race; verification processes > detection alone.
- **EU AI Act**: real-time public biometric ID **banned** (narrow exceptions). Up to **€35M or 7% global revenue** for prohibited use.

### Exam watch-outs
- **Object detection = bounding boxes**; **instance segmentation = pixel masks**.
- Annotation cost: classification ~€1,000 vs segmentation **€15,000–€40,000** for 10,000 images.
- **Vision Transformer = ViT = self-attention applied to image patches**.
- AlexNet (revisited) = 2012.
- Facial recognition in HR / public spaces → **high-risk under EU AI Act** (or prohibited for real-time public).

---

## Course 8 — Data & AI Infrastructure

### At a glance
- **"Compliance is architecture"** — GDPR, EU AI Act, DORA impose technical requirements, not paperwork.
- Classify data **at the ingestion border**, not later.
- **ELT beat ETL**. Load raw first, transform in the warehouse with dbt.

### Data taxonomy
- **Structured** — rows/columns, SQL (CRM, ledgers). ~20% of enterprise data.
- **Semi-structured** — JSON, XML, Avro, Parquet.
- **Unstructured** — ~80% of enterprise data. PDFs, images, audio, notes, social media. **PII hides here.**
- **Metadata** — data about data. Sometimes *more* sensitive (GPS tags, call patterns).
- **Derived / Inferred** — credit scores, risk ratings. Highest regulatory scrutiny under GDPR + EU AI Act.

### Architecture evolution
1. **1990s–2000s · Data Warehouse** (Oracle, Teradata) — structured only, expensive, no ML.
2. **2010s · Data Lake** (Hadoop, S3) — cheap, store everything. Without governance = **data swamp**.
3. **2018+ · Cloud Data Warehouse** (Snowflake, BigQuery, Redshift, Synapse) — separated compute/storage, elastic, pay-per-query.
4. **2020+ · Lakehouse** (Databricks Delta Lake, Apache Iceberg, Apache Hudi) — lake storage + warehouse reliability + ACID + open formats. One platform for BI + ML + streaming.

### OLTP vs OLAP
- **OLTP** (operational) — row-level, fast writes. PostgreSQL, MySQL, Oracle.
- **OLAP** (analytical) — columnar, fast aggregations. Snowflake, BigQuery, Redshift.
- **Never run analytics on your OLTP production DB.**

### ETL vs ELT
| | ETL (legacy) | **ELT (modern standard)** |
|---|---|---|
| Order | Extract → Transform → Load | Extract → Load → Transform |
| Transform happens | External server (Informatica, SSIS, Talend) | In the warehouse (dbt) |
| Ownership | IT bottleneck | Analysts via SQL/git |
| Cost | €200K+/yr licences | Cloud compute only |

The modern stack: Ingest **Fivetran/Airbyte** → Store **Snowflake/BigQuery/Fabric** → Transform **dbt** → Orchestrate **Airflow/Prefect/Dagster** → Quality **Great Expectations** → Visualise **Power BI/Tableau**.

### Batch vs streaming
- **Batch** — scheduled intervals. Simple, cheap. dbt, Spark, Glue.
- **Streaming** — real-time events. Kafka, Kinesis, Flink. 5–10× more complex and costly.
- **The streaming trap**: teams default to Kafka because it sounds impressive. For most dashboards, 15-minute batch is fine. Ask: *what decision changes if data is 15 min old vs 1 sec old?*
- **Lambda architecture** = batch + streaming combined (Netflix).

### Platform comparison
- **Snowflake** — SQL simplicity, best BI integration, multi-cloud portability. Customers: DoorDash, Pfizer, Capital One.
- **Databricks** — Lakehouse, Apache Spark creator, best for ML + data engineering. Customers: HSBC, Shell, Regeneron.
- **Microsoft Fabric** — unified (warehouse + lake + pipelines + Power BI + Copilot). Best for M365-heavy enterprises. One licence.
- **Azure Synapse** — Fabric's predecessor, still widely deployed.
- **AWS Redshift** — deepest AWS integration.
- **Google BigQuery** — best serverless petabyte price/performance; BigQuery ML.

### Data strategy failure patterns (7)
1. Data without purpose.
2. No data ownership.
3. Central bottleneck (6-week waits).
4. Stale data powering real decisions (Zillow $500M loss).
5. Compliance as afterthought (4–7× more expensive to retrofit).
6. Vanity metrics (data volume ≠ business outcome).
7. Technology-led strategy (buying Snowflake before defining use cases).

### The four pillars of data governance
1. **Data catalogue** — searchable inventory ("what do we have?"). Alation, Atlan, DataHub, Purview.
2. **Data lineage** — trail of transformations ("where did this number come from?"). dbt, OpenLineage, Collibra.
3. **Data ownership** — named accountability per dataset.
4. **Access control** — RBAC, column-level, row-level, PII masking in dev/test.

### Data contracts
- **Machine-readable SLA** between data producer and consumer: schema, freshness, quality, ownership, retention, classification.
- Breaking a contract triggers automated alerts.
- Standard: **ODCS (Open Data Contract Specification)** by PayPal.
- Adopters: Zalando, ING, JP Morgan, Mercado Libre.

### 6 dimensions of data quality
- **Completeness**, **Accuracy**, **Consistency**, **Timeliness**, **Uniqueness**, **Validity**.
- Tools: Great Expectations, dbt tests, Soda Core, Monte Carlo, Acceldata.

### Data Mesh (Zhamak Dehghani, 2019)
- 4 principles: **domain ownership, data as product, self-serve infrastructure, federated governance.**
- 80% organisational change, 20% technology.
- Solves the central bottleneck. Adopters: Zalando (50+ data products), ING, HelloFresh.
- **Data Fabric** = AI-assisted integration without reorganising teams (Gartner counterpart). Use when org change isn't feasible.

### Anonymisation spectrum
| Technique | What | GDPR scope | Best for |
|---|---|---|---|
| **Tokenisation** | Replace PII with token, map stored separately | Still personal | Payment cards (PCI-DSS), user IDs |
| **Pseudonymisation** | Reversible key or token replaces identifier | **Still personal data** | Internal analytics |
| **Data masking** | Replace with realistic fakes | Still personal | Test environments |
| **Generalisation** | Ranges / regions | Reduced | Public health stats |
| **Differential privacy** | Add calibrated noise | Can exit scope | iOS telemetry, Census |
| **Synthetic data** | Stats-preserving fake dataset | Out of scope | ML training, sharing |
| **Federated learning** | Train on-device, **raw data never leaves source** | Raw stays local | Healthcare, finance, keyboards |
| **True anonymisation** | Irreversible removal of all identifiers | Out of scope | — |

MIT study: **87% of Americans re-identifiable from DOB + gender + postcode**. Removing names ≠ anonymisation.

### Financial-sector regulation
- **DORA (2025)** — Digital Operational Resilience Act. ICT incident: **4h initial → 72h detailed → 1-month final** report. Register of all ICT third parties.
- **MiFID II** — full trade audit trail, retained 5–7 years.
- **Basel III** — credit risk models validated, documented, explainable.
- **PSD2** — open banking APIs, consent logged.
- **AMLD6 / KYC** — records 5+ years post-relationship.

### Cross-industry breach-notification timing
- **GDPR** — 72 hours to supervisory authority.
- **DORA** — 4h early warning, 72h full, 1-month final.
- **NIS2** — 24h early warning, 72h notification.
- **HIPAA** — 60 days for 500+ individuals.

### Open formats to demand
- **Apache Iceberg** — cross-engine open table format. Backed by Netflix, Apple, AWS, Google, Snowflake. **The portability guarantee.**
- **Delta Lake** (Databricks) — ACID + time travel.
- **Apache Hudi** — streaming upserts.
- **Parquet** / **Avro** — column / row file formats.

### Exam watch-outs
- **ELT** replaced ETL — load raw first, transform with dbt in the warehouse.
- **Data Contract** = machine-readable SLA between producer & consumer.
- **Federated learning** = privacy-preserving ML, data never leaves device.
- **Data Mesh** decentralises ownership to domain teams (not Data Fabric — that's AI-assisted unification).
- **Apache Iceberg** = the recommended portability guarantee (NOT Parquet, NOT CSV, NOT Avro).
- **Pseudonymisation = reversible, STILL personal data**; **anonymisation = irreversible, outside GDPR scope**.

---

## Cross-cutting — Ethics, Governance & Regulation

### GDPR (2018)
- Applies to processing personal data of EU residents.
- **6 principles**: lawfulness, purpose limitation, data minimisation, accuracy, storage limitation, integrity/security.
- **Article 4(5)** — pseudonymised data is *still personal data*.
- **Article 9** — special category data (health, biometric, race, religion, politics, sexual orientation) requires explicit consent or specific legal basis.
- **Article 17** — right to erasure ("right to be forgotten") within 30 days. Hard for ML models → active research: "machine unlearning".
- **Article 22** — **right to a human-understandable explanation** of automated decisions that significantly affect a person. This is *why* explainability (SHAP, LIME, attention weights) is legally required.
- **Article 30** — Record of Processing Activities (ROPA). First thing regulators ask for.
- Max penalty: **€20M or 4% of global revenue** (and **€30M / 6%** referenced in the course materials for high-risk AI violations under the EU AI Act).

### EU AI Act (2024)
- World's first binding AI regulation. Risk-based.
- **Prohibited** (banned Feb 2025): social scoring, real-time remote biometric ID in public spaces, emotion recognition in workplaces/schools, manipulative AI. Penalty: **€35M or 7% of global annual revenue**.
- **High-risk** (compliance by Aug 2026): credit scoring, recruitment / HR (CV screening), medical devices, border control, critical infrastructure, law enforcement. Requires:
  - Risk assessment + conformity assessment.
  - Training data documented for bias, source, representativeness.
  - Full lineage from raw data to model output.
  - Human oversight + override capability.
  - Inference logs retained (up to 10 years in some categories).
  - Post-deployment drift monitoring.
  - Penalty in course materials: **€30M or 6% of global annual revenue**.
- **Limited risk**: transparency obligations (chatbots must disclose they're AI).
- **Minimal risk**: spam filters, games — no specific obligations.
- **GPAI (general-purpose AI)** — GPT-4, Claude face systemic risk obligations.

### DORA — EU Digital Operational Resilience Act (2025)
- For financial institutions.
- ICT risk management + incident reporting:
  - **4 hours** — initial notification.
  - **72 hours** — detailed report.
  - **1 month** — final report.
- Register of all ICT third parties.

### Other regulations to know
- **NIS2** (2024) — cybersecurity for essential entities. 24h early warning, 72h notification.
- **Data Act** (2024) — IoT data sharing.
- **PCI-DSS** — card data. Never store CVV; encrypt at rest + in transit.
- **HIPAA** (US) — health data. 18 identifiers for Safe Harbor de-identification. 60-day breach notification.
- **ePrivacy / Cookie Directive** — explicit opt-in for analytics/ad cookies. Google fined €150M (CNIL 2022).
- **MiFID II / MiFIR, Basel III, PSD2, AMLD6, EHDS** — financial/health sector overlays.

### Bias (applies to all AI)
- **Sources**: historical bias, sampling bias, label bias, representation bias, measurement bias, amplification, feedback loops.
- **Famous cases**: COMPAS recidivism (2× false flag rate for Black defendants), Amazon hiring (rejected CVs mentioning "women's"), facial recognition 43× worse for dark-skinned women.
- **Mitigation**: diverse training data, bias audits per subgroup, fairness metrics (equal opportunity, demographic parity), human-in-the-loop for high-stakes.

### Explainability tools
- **SHAP** — per-feature contribution per prediction.
- **LIME** — local surrogate model.
- **Grad-CAM** — highlights which image regions a CNN focused on.
- **Attention weights** — which tokens a Transformer attended to.
- **Feature importance** — native in Random Forest / XGBoost.

### Compliance = architecture
- Built-in compliance: €150–500K typical cost.
- Retrofitted: **4–7× more expensive.**
- Data catalogue is a **breach response tool**, not a nicety — you must know where all your data is *before* an incident.

### Exam watch-outs
- **GDPR Article 22 → right to an explanation for automated decisions.**
- **EU AI Act high-risk: €30M or 6% of global annual revenue** (exam answer).
- **EU AI Act prohibited: €35M or 7%** (use-case specific).
- **DORA timeline: 4 hours, 72 hours, 1 month.**
- **Pseudonymisation ≠ anonymisation** under GDPR Art. 4(5).
- **Federated learning** is the keyword for "train on device, data never leaves source."
- **High-risk AI = credit, recruitment, medical, border, critical infrastructure, law enforcement** — not chatbots, not spam filters.

---

*End of study notes. Use alongside [flashcards.md](flashcards.md) for active recall practice.*
