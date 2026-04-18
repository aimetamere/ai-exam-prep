# AI Exam — Flashcards

**Companion to [study-notes.md](study-notes.md). Source: [all-courses-combined.md](../frontend/dist/all-courses-combined.md) · Exam reference: [exam-1.md](exam-1.md).**

How to use: read the question, think, then click **"Show answer"** to reveal. GitHub renders `<details>` blocks as collapsible. Target ≥ 200 cards covering all 90 exam topics + broader course content. Cards are grouped by course.

---

## Course 1 — AI Introduction & Revolution

### Card 1
**Q:** What does the ANI → AGI → ASI spectrum describe?
<details><summary>Show answer</summary>

**A:** The three stages of AI evolution: **ANI** (Artificial Narrow Intelligence, today — excels at one task, no transfer), **AGI** (Artificial General Intelligence — human-level across all cognitive domains), **ASI** (Artificial Superintelligence — vastly beyond humans in every domain, hypothetical).

</details>

### Card 2
**Q:** What is the primary difference between ANI and AGI?
<details><summary>Show answer</summary>

**A:** ANI excels at **one specific task** (ChatGPT, AlphaGo, autopilot) with zero generalisation. AGI can perform **any intellectual task a human can** and transfer knowledge across domains. AGI does not yet exist.

</details>

### Card 3
**Q:** What was Alan Turing's famous 1950 question that launched the field of AI?
<details><summary>Show answer</summary>

**A:** "Can machines **think**?" — not *calculate*, not *compute*, but *think*.

</details>

### Card 4
**Q:** What is meant by the "AI Winter(s)"?
<details><summary>Show answer</summary>

**A:** Periods after the 1956 Dartmouth Conference when AI's over-promised predictions failed, funding collapsed, and careers ended. First lesson: intelligence is not just explicit logic + rules.

</details>

### Card 5
**Q:** In 2016 DeepMind's AlphaGo defeated Lee Sedol. What was "Move 37"?
<details><summary>Show answer</summary>

**A:** **Move 37** was a move no human would have played — experts initially called it a mistake, but it turned out to be brilliant. It was the first signal that AI can *invent* knowledge humans don't have, not just imitate humans.

</details>

### Card 6
**Q:** What model won the ImageNet competition in 2012, kick-starting modern deep learning?
<details><summary>Show answer</summary>

**A:** **AlexNet** — a CNN trained on GPUs. Image recognition improved more in 2 years than in the previous 40. The real birth of modern AI.

</details>

### Card 7
**Q:** According to the WEF numbers cited in the course, what is the AI job outlook?
<details><summary>Show answer</summary>

**A:** **85 million jobs displaced, 97 million new jobs created — a net gain.** Not a net loss.

</details>

### Card 8
**Q:** Name three key differences between human and artificial intelligence.
<details><summary>Show answer</summary>

**A:**
1. Humans learn from one example; AI needs millions.
2. Humans transfer knowledge across domains; AI is largely task-specific.
3. Humans have emotional intelligence and common sense; AI has none.

</details>

### Card 9
**Q:** What was "Deep Blue" and why was it not truly intelligent?
<details><summary>Show answer</summary>

**A:** IBM's Deep Blue defeated chess champion Garry Kasparov in 1997. It was **brute force**, not intelligence — it understood nothing about chess; it just searched positions faster.

</details>

### Card 10
**Q:** Approximately how many neurons does the human brain have, and how much energy does it use?
<details><summary>Show answer</summary>

**A:** ~**86 billion neurons**, ~100 trillion synaptic connections, running on ~**20 watts** — less than a light bulb.

</details>

### Card 11
**Q:** What was the size of the global AI market in 2025, and what is its projected size in 2030?
<details><summary>Show answer</summary>

**A:** **$250 billion in 2025 → $1.8 trillion by 2030.**

</details>

### Card 12
**Q:** List three examples of ANI that you use today.
<details><summary>Show answer</summary>

**A:** ChatGPT, AlphaGo, Tesla Autopilot, Netflix/Spotify recommenders, Google Maps traffic prediction, spam filters.

</details>

---

## Course 2 — Generative AI & LLMs

### Card 13
**Q:** What is the fundamental difference between discriminative and generative AI?
<details><summary>Show answer</summary>

**A:** **Discriminative AI** classifies or predicts from input (e.g., "is this email spam?"). **Generative AI** creates new content (text, images, audio, code) resembling human-created content.

</details>

### Card 14
**Q:** What does an LLM actually do at the word level?
<details><summary>Show answer</summary>

**A:** It predicts the **next most likely word (token)** in a sequence. This is why it generates fluent text — and also why it hallucinates (plausible ≠ true).

</details>

### Card 15
**Q:** What is a token in an LLM, and how does it relate to words?
<details><summary>Show answer</summary>

**A:** A **token** is a subword unit. Roughly **0.75 words per token** in English. "ChatGPT" = 2 tokens ("Chat" + "GPT"). LLM APIs charge **per token**, not per word.

</details>

### Card 16
**Q:** What is the "context window" of an LLM?
<details><summary>Show answer</summary>

**A:** The maximum amount of text (in tokens) the model can hold in memory at once. Ranges from 4K to 2M+ tokens. Larger context = higher cost (2–10×).

</details>

### Card 17
**Q:** Name the four phases of LLM development from raw compute to end users.
<details><summary>Show answer</summary>

**A:** 1) **Pre-training** (months, $10–100M+), 2) **Fine-tuning** (days–weeks, $1K–$100K), 3) **RLHF** (reinforcement learning from human feedback), 4) **Inference** (real-time serving).

</details>

### Card 18
**Q:** What does the **temperature** parameter control in an LLM?
<details><summary>Show answer</summary>

**A:** Randomness / creativity. **0.0–0.3** = deterministic (compliance, analysis), **0.5–0.7** = balanced (default chatbots), **0.8–1.0** = creative (marketing, brainstorming).

</details>

### Card 19
**Q:** What temperature would you set for a **compliance / legal document analysis** task?
<details><summary>Show answer</summary>

**A:** **0.1** — maximum accuracy and determinism. Identical input should give identical output.

</details>

### Card 20
**Q:** What is few-shot prompting, and how much can it improve accuracy?
<details><summary>Show answer</summary>

**A:** Showing the model **2–5 input/output examples** before the real task. Improves accuracy by **30–50%** on structured tasks. Optimal: 3–5 examples.

</details>

### Card 21
**Q:** What is Chain-of-Thought (CoT) prompting?
<details><summary>Show answer</summary>

**A:** Asking the model to "think step-by-step" before answering. Can improve accuracy from ~**60% to ~95%** on complex reasoning/math problems.

</details>

### Card 22
**Q:** What is the Tree of Thoughts (ToT) prompting technique?
<details><summary>Show answer</summary>

**A:** The model explores **multiple reasoning paths** simultaneously, evaluates each, and picks the best. Best for strategic decisions with several valid approaches. Slower and costlier.

</details>

### Card 23
**Q:** What is Self-Consistency prompting?
<details><summary>Show answer</summary>

**A:** Run the same prompt **3–5 times** and take the most common (majority) answer. Uses wisdom-of-crowds. 3–5× cost, high accuracy.

</details>

### Card 24
**Q:** What does ReAct prompting stand for, and why is it important for agents?
<details><summary>Show answer</summary>

**A:** **Reason + Act.** The model alternates between reasoning and using tools: Think → Act → Observe → Think → Act. This is how AI **agents** work.

</details>

### Card 25
**Q:** What does RAG stand for, and what problem does it solve?
<details><summary>Show answer</summary>

**A:** **Retrieval-Augmented Generation.** Grounds LLM answers in your private documents by retrieving relevant chunks and injecting them into the prompt. Solves the problems of knowledge cutoffs, lack of access to internal docs, and hallucinations.

</details>

### Card 26
**Q:** Walk through the 5 steps of a RAG pipeline.
<details><summary>Show answer</summary>

**A:** 1) Index documents (chunk + embed + store in a vector DB). 2) Embed the user's question. 3) Retrieve top-k most similar chunks. 4) Augment the prompt with those chunks. 5) Generate a grounded answer with citations.

</details>

### Card 27
**Q:** What is the main advantage of RAG over fine-tuning?
<details><summary>Show answer</summary>

**A:** RAG keeps knowledge **current** (just update the docs) and makes answers **traceable to source documents**. Fine-tuning is expensive, static, and opaque.

</details>

### Card 28
**Q:** By roughly how much does RAG with source citations reduce hallucinations?
<details><summary>Show answer</summary>

**A:** From ~**15% down to under 2%.**

</details>

### Card 29
**Q:** Which LLM offers the largest context window and best Google Workspace integration?
<details><summary>Show answer</summary>

**A:** **Gemini** (Google) — 1M-token context, multimodal, deep Google ecosystem integration.

</details>

### Card 30
**Q:** For a European hospital processing patient notes that must not leave the EU, which LLM strategy is best?
<details><summary>Show answer</summary>

**A:** **Mistral Large (EU-based) or self-hosted Llama 3** — not GPT/Claude via public API, and definitely not DeepSeek (China jurisdiction).

</details>

### Card 31
**Q:** Name the main LLM families and their signature strength.
<details><summary>Show answer</summary>

**A:** **GPT (OpenAI)** — general reasoning; **Claude (Anthropic)** — long docs, safety; **Gemini (Google)** — 1M context, multimodal; **Llama (Meta)** — open-source, self-hostable; **Mistral (France)** — European, GDPR-friendly.

</details>

### Card 32
**Q:** What are the four main LLM risks / common challenges?
<details><summary>Show answer</summary>

**A:** Hallucinations, bias, knowledge cutoffs (training data freezes at a point in time), and inconsistency across identical prompts.

</details>

### Card 33
**Q:** What is the difference between BERT and GPT in one sentence?
<details><summary>Show answer</summary>

**A:** **BERT** is an encoder (bidirectional context) built for **understanding** tasks. **GPT** is a decoder (left-to-right) built for **generation**.

</details>

### Card 34
**Q:** What is the "Build vs Buy vs Prompt" decision framework's first rule?
<details><summary>Show answer</summary>

**A:** **Try prompt engineering first.** A well-crafted prompt on an LLM API solves 80% of enterprise NLP tasks without any training or code.

</details>

### Card 35
**Q:** Why shouldn't most companies train an LLM from scratch?
<details><summary>Show answer</summary>

**A:** Pre-training costs **$10M–$100M+**, requires massive data and GPU infrastructure, and is only economical for foundation-model labs (OpenAI, Anthropic, Google, Meta, Mistral).

</details>

### Card 36
**Q:** What are typical image-generation approaches today, and which dominates?
<details><summary>Show answer</summary>

**A:** GANs (older, hard to train, mostly replaced) and **Diffusion Models** (Stable Diffusion, DALL-E 3, Midjourney, Sora) — the current dominant paradigm.

</details>

---

## Course 3 — Agentic AI

### Card 37
**Q:** What are the four core properties of an AI agent?
<details><summary>Show answer</summary>

**A:** 1) **Perception** (reads context), 2) **Reasoning** (plans multi-step actions), 3) **Action** (calls tools / APIs), 4) **Memory** (short-term + long-term).

</details>

### Card 38
**Q:** What five advances enabled the 2023–24 shift to agentic AI?
<details><summary>Show answer</summary>

**A:** 1) Function calling / tool use, 2) extended context windows (4K → 2M), 3) improved reasoning (CoT), 4) multimodal capabilities, 5) costs dropped 10–100× making large-scale deployment viable.

</details>

### Card 39
**Q:** What is the difference between an AI agent and a classic chatbot?
<details><summary>Show answer</summary>

**A:** A chatbot generates text. An **agent** plans, uses tools, takes real-world actions (sends emails, updates CRMs, runs code), and maintains memory across steps.

</details>

### Card 40
**Q:** Name the four types of memory in an agent's memory architecture.
<details><summary>Show answer</summary>

**A:** **In-context (RAM-like)** for the current task; **external vector DB** for long-term knowledge; **episodic** (diary of past tasks); **procedural** (learned skills / how-to).

</details>

### Card 41
**Q:** What is MCP, and who created it?
<details><summary>Show answer</summary>

**A:** **Model Context Protocol**, created by **Anthropic** — a universal plugin standard for how agents connect to tools and data sources.

</details>

### Card 42
**Q:** Name three popular agent frameworks.
<details><summary>Show answer</summary>

**A:** **LangChain / LangGraph**, **AutoGen (Microsoft)**, **CrewAI**, **Semantic Kernel**, **LlamaIndex**.

</details>

### Card 43
**Q:** What are five common agent failure modes to govern against?
<details><summary>Show answer</summary>

**A:** Hallucination-with-action, prompt injection, scope creep, runaway loops, data leakage through tool calls.

</details>

### Card 44
**Q:** What is "Agentic RAG"?
<details><summary>Show answer</summary>

**A:** RAG where the retrieval step has a "brain": the agent decides whether to retrieve at all, decomposes queries, refines iteratively, grades its own retrieval, and can use tools (SQL, APIs) in the process.

</details>

### Card 45
**Q:** What are the four core agent-governance controls?
<details><summary>Show answer</summary>

**A:** 1) Scope definition (what can it access?), 2) audit trail (log every action), 3) kill switches, 4) sandboxing / testing before production, plus continuous monitoring and named accountability.

</details>

### Card 46
**Q:** Give one landmark 2024–25 agent deployment.
<details><summary>Show answer</summary>

**A:** **Klarna's AI agent** handles customer service at the scale of 700 human FTEs. Other examples: Salesforce Agentforce, Microsoft Copilot Studio, Cognition Devin (autonomous SWE), Harvey AI (legal).

</details>

---

## Course 4 — Machine Learning Fundamentals

### Card 47
**Q:** How does ML differ from traditional programming?
<details><summary>Show answer</summary>

**A:** Traditional programming: Data + Rules → Answers. **Machine Learning: Data + Answers → Rules (model).** ML discovers patterns rather than being given explicit rules.

</details>

### Card 48
**Q:** Name the five types of machine learning.
<details><summary>Show answer</summary>

**A:** **Supervised, Unsupervised, Semi-supervised, Reinforcement, Transfer learning.**

</details>

### Card 49
**Q:** Give one business example for each of supervised, unsupervised, and reinforcement learning.
<details><summary>Show answer</summary>

**A:** **Supervised** → churn prediction, credit scoring. **Unsupervised** → customer segmentation, anomaly detection. **Reinforcement** → dynamic pricing (Uber), ad bidding, algorithmic trading.

</details>

### Card 50
**Q:** For tabular/structured business data, which algorithm should you try FIRST?
<details><summary>Show answer</summary>

**A:** **XGBoost or Random Forest** — NOT a deep neural network. Classical ML wins on tabular data because it's fast, interpretable, and needs less data.

</details>

### Card 51
**Q:** What is logistic regression and when is it the right choice?
<details><summary>Show answer</summary>

**A:** A linear classifier outputting a probability via the sigmoid function. Draws a linear decision boundary. Highly interpretable (coefficients = feature importance). Start here for regulated industries or as a baseline.

</details>

### Card 52
**Q:** How does Random Forest work in one sentence?
<details><summary>Show answer</summary>

**A:** Build many decision trees on bootstrap samples of the data, each using a random subset of features, then take the majority vote — reducing variance via ensemble averaging.

</details>

### Card 53
**Q:** What makes XGBoost (gradient boosting) special?
<details><summary>Show answer</summary>

**A:** It builds trees **sequentially**, where each tree corrects the errors of the previous one, optimising a loss function via gradient descent. State-of-the-art on tabular data — dominates Kaggle.

</details>

### Card 54
**Q:** What do precision and recall measure?
<details><summary>Show answer</summary>

**A:** **Precision** = TP / (TP + FP): of the items flagged, how many are real? Minimises false alarms. **Recall** = TP / (TP + FN): of all real positives, how many did we catch? Minimises misses.

</details>

### Card 55
**Q:** What is the F1 score?
<details><summary>Show answer</summary>

**A:** The **harmonic mean of precision and recall**: F1 = 2·(P·R)/(P+R). Balances both when you care about false alarms AND misses equally.

</details>

### Card 56
**Q:** What does **AUC-ROC** measure?
<details><summary>Show answer</summary>

**A:** The model's **ability to discriminate between classes across all classification thresholds**. Higher AUC = better separation between positives and negatives.

</details>

### Card 57
**Q:** Why is accuracy misleading on imbalanced datasets?
<details><summary>Show answer</summary>

**A:** If fraud is 0.1% of transactions, a model that always predicts "not fraud" gets 99.9% accuracy — and catches zero fraudsters. Use precision, recall, F1, AUC-ROC instead.

</details>

### Card 58
**Q:** What is overfitting?
<details><summary>Show answer</summary>

**A:** Model performs **very well on training data but poorly on new/test data** — it memorised training examples instead of learning generalisable patterns.

</details>

### Card 59
**Q:** Name three techniques to combat overfitting.
<details><summary>Show answer</summary>

**A:** More data, regularisation (L1/L2, dropout), cross-validation, early stopping, pruning, ensemble methods.

</details>

### Card 60
**Q:** What is underfitting and how do you fix it?
<details><summary>Show answer</summary>

**A:** Model is too simple — poor on both training and test data (high bias). Fix: add features, use a more complex model, reduce regularisation.

</details>

### Card 61
**Q:** What is k-fold cross-validation?
<details><summary>Show answer</summary>

**A:** Split data into K parts; train on K−1, test on the held-out part; rotate K times; average results. Gives a reliable estimate of model performance and reduces dependence on a single train/test split.

</details>

### Card 62
**Q:** What is SMOTE, and when is it used?
<details><summary>Show answer</summary>

**A:** **Synthetic Minority Over-sampling Technique.** Generates synthetic examples of the minority class to balance an imbalanced dataset. Used in fraud detection, churn prediction (e.g. the bank churn case at 8% churn rate).

</details>

### Card 63
**Q:** In the bank churn case study, which model won and what were its key metrics?
<details><summary>Show answer</summary>

**A:** **XGBoost** won cross-validation with Precision 79%, Recall 82%, **AUC-ROC 0.91**. Result: 34% churn reduction in 6 months, €1.7M saved Year 1, 560% ROI.

</details>

### Card 64
**Q:** What is Lasso (L1) regression's killer feature?
<details><summary>Show answer</summary>

**A:** It can shrink coefficients **exactly to zero**, performing **automatic feature selection**. Great for high-dim data — e.g. 50 features → Lasso keeps the 8 most important.

</details>

### Card 65
**Q:** What is the difference between Ridge (L2) and Lasso (L1)?
<details><summary>Show answer</summary>

**A:** **Ridge (L2)** shrinks all coefficients toward zero but never exactly zero — good for multicollinearity. **Lasso (L1)** can zero out coefficients entirely — feature selection.

</details>

### Card 66
**Q:** How does K-Means clustering work?
<details><summary>Show answer</summary>

**A:** 1) Initialise K centroids randomly. 2) Assign each point to the nearest centroid. 3) Recompute centroids as the mean of the assigned points. 4) Repeat until convergence.

</details>

### Card 67
**Q:** How do you choose K in K-Means?
<details><summary>Show answer</summary>

**A:** Plot **inertia (within-cluster variance) vs K**. Look for the "elbow" where adding more clusters yields diminishing returns. Typically K = 3–7 for business segmentations.

</details>

### Card 68
**Q:** What is the killer feature of DBSCAN that K-Means doesn't offer?
<details><summary>Show answer</summary>

**A:** It finds clusters of **arbitrary shape** and automatically labels points in sparse regions as **noise/outliers** — great for anomaly detection.

</details>

### Card 69
**Q:** What does PCA do, and why is it used?
<details><summary>Show answer</summary>

**A:** **Principal Component Analysis** reduces dimensionality by projecting data onto directions of maximum variance. Fights the curse of dimensionality, enables visualisation, speeds up training. Trade-off: components are linear combinations, so interpretability is lost.

</details>

### Card 70
**Q:** What is data leakage and why is it dangerous?
<details><summary>Show answer</summary>

**A:** Including features in training that contain information not available at prediction time. Makes validation accuracy look amazing (sometimes 99%+) but causes the model to fail in production.

</details>

### Card 71
**Q:** State the Andrew Ng "data-centric vs model-centric" principle.
<details><summary>Show answer</summary>

**A:** **Improving data quality by 10% typically yields more ROI than increasing model complexity by 10%.** Fix the data, not the model, first.

</details>

### Card 72
**Q:** Name three popular model-explainability techniques.
<details><summary>Show answer</summary>

**A:** **SHAP** (feature contributions per prediction), **LIME** (local surrogate model), **feature importance** (native in Random Forest, XGBoost).

</details>

### Card 73
**Q:** What is transfer learning (classical ML definition)?
<details><summary>Show answer</summary>

**A:** Reusing a pre-trained model's learned knowledge and fine-tuning it on a smaller, domain-specific dataset — dramatically cutting data and training cost.

</details>

### Card 74
**Q:** What are the "Six Dimensions of Data Quality"?
<details><summary>Show answer</summary>

**A:** **Completeness, Accuracy, Consistency, Timeliness, Uniqueness, Validity** (later extended to add Relevance). Each maps to a category of business failure if missed.

</details>

---

## Course 5 — Neural Networks & Deep Learning

### Card 75
**Q:** What does "deep" mean in "deep learning"?
<details><summary>Show answer</summary>

**A:** Simply many layers. "Deep" refers to depth of the network (≥ 2 hidden layers), not the complexity of the math.

</details>

### Card 76
**Q:** What does an activation function do in a neural network?
<details><summary>Show answer</summary>

**A:** Introduces **non-linearity** so the network can learn curves and complex decision boundaries — not just straight lines. Without it, any deep network collapses to a linear equation.

</details>

### Card 77
**Q:** What is ReLU, and where is it used?
<details><summary>Show answer</summary>

**A:** **Rectified Linear Unit**, defined as **max(0, x)**. Most popular activation in **hidden layers**. Fast to compute. Negative inputs → 0, positive inputs → identity.

</details>

### Card 78
**Q:** Which activation function outputs probabilities summing to 1 and is used in multi-class outputs?
<details><summary>Show answer</summary>

**A:** **Softmax.** Converts raw output scores into a probability distribution (e.g. cat 60%, dog 30%, bird 10%).

</details>

### Card 79
**Q:** When do you use Sigmoid?
<details><summary>Show answer</summary>

**A:** In a **binary classification output** layer — squashes output to (0,1), interpreted as a probability ("70% chance it's spam").

</details>

### Card 80
**Q:** What is GELU and where is it found?
<details><summary>Show answer</summary>

**A:** A smooth version of ReLU used in modern Transformer architectures like GPT and BERT.

</details>

### Card 81
**Q:** What does a **loss function** do in NN training?
<details><summary>Show answer</summary>

**A:** Measures how wrong the model's prediction is — provides the error signal that drives weight updates. Common: MSE for regression, cross-entropy for classification.

</details>

### Card 82
**Q:** What is backpropagation?
<details><summary>Show answer</summary>

**A:** The algorithm that calculates — using the chain rule of calculus — how much each weight contributed to the loss, then propagates that error backward through every layer to update all weights.

</details>

### Card 83
**Q:** Explain the gradient-descent mountain analogy.
<details><summary>Show answer</summary>

**A:** You're blindfolded on a hilly landscape. You feel the slope under your feet and take a small step downhill (the gradient). Repeat until you reach a valley — the minimum loss = best weights.

</details>

### Card 84
**Q:** Why is the learning rate a critical hyperparameter?
<details><summary>Show answer</summary>

**A:** Too **large** → overshoots the minimum, loss diverges. Too **small** → training crawls / stalls in a local minimum. Rule of thumb: Adam at **0.001**.

</details>

### Card 85
**Q:** What is Adam, and why is it the default optimiser?
<details><summary>Show answer</summary>

**A:** **Adaptive Moment Estimation** — adapts the learning rate per parameter. Default for **90%** of deep learning projects. Works out of the box on most architectures.

</details>

### Card 86
**Q:** What is Dropout, and what does it do?
<details><summary>Show answer</summary>

**A:** A **regularisation** technique that randomly "switches off" a fraction of neurons during training — forcing redundant, robust representations. The most effective DL regulariser.

</details>

### Card 87
**Q:** Name two more regularisation techniques besides Dropout.
<details><summary>Show answer</summary>

**A:** **Early stopping** (halt training when validation loss rises) and **batch normalisation** (normalises layer inputs, stabilises training).

</details>

### Card 88
**Q:** What is a CNN and what data is it suited to?
<details><summary>Show answer</summary>

**A:** **Convolutional Neural Network** — learns spatial hierarchies via convolutional filters sliding across the input. Suited to **images and video**. Translation-invariant due to pooling.

</details>

### Card 89
**Q:** What does a pooling layer do in a CNN?
<details><summary>Show answer</summary>

**A:** Downsamples the feature map (usually halves spatial size) → reduces computation and makes the network translation-invariant.

</details>

### Card 90
**Q:** What was ResNet's key innovation?
<details><summary>Show answer</summary>

**A:** **Skip connections** — each layer can pass its input unchanged forward to deeper layers, solving the vanishing-gradient problem and enabling 152+ layer networks.

</details>

### Card 91
**Q:** What problem does self-attention solve in a Transformer?
<details><summary>Show answer</summary>

**A:** It enables the model to **understand long-range dependencies and resolve ambiguity in language** — every token simultaneously considers every other token and assigns attention weights.

</details>

### Card 92
**Q:** Walk through how self-attention resolves "The trophy didn't fit in the suitcase because *it* was too big."
<details><summary>Show answer</summary>

**A:** The pronoun "it" simultaneously attends to every other token. It assigns the highest attention weight to **"trophy"**, because the trophy is what's "too big" to fit — not the suitcase. A standard RNN would struggle with this long-range reference.

</details>

### Card 93
**Q:** What does the 2017 paper "Attention is All You Need" introduce?
<details><summary>Show answer</summary>

**A:** The **Transformer** architecture — replaces RNNs with pure self-attention + feedforward layers. Fully parallelisable, handles long-range dependencies. Foundation of every modern LLM.

</details>

### Card 94
**Q:** What is the key architectural difference between BERT and GPT?
<details><summary>Show answer</summary>

**A:** **BERT** is **encoder-only**, bidirectional — for understanding tasks (classification, search, Q&A). **GPT** is **decoder-only**, left-to-right — for generation tasks (chat, writing, code).

</details>

### Card 95
**Q:** Name five major deep-learning architectures and their use cases.
<details><summary>Show answer</summary>

**A:** **CNN** — images; **RNN/LSTM** — sequences (time, speech); **Transformer** — text, code, multimodal; **GAN** — image generation; **Diffusion** — image/video synthesis.

</details>

### Card 96
**Q:** What is an LSTM, and what problem does it solve over a vanilla RNN?
<details><summary>Show answer</summary>

**A:** **Long Short-Term Memory** network — uses three gates (forget, input, output) to control information flow, solving RNN's vanishing-gradient and "forgetting" problem on long sequences.

</details>

### Card 97
**Q:** What is a GAN?
<details><summary>Show answer</summary>

**A:** **Generative Adversarial Network** — two networks compete: a **generator** creates fakes, a **discriminator** tries to detect them. They train together. Mostly replaced by diffusion models for image generation.

</details>

### Card 98
**Q:** How does a diffusion model generate an image?
<details><summary>Show answer</summary>

**A:** 1) Take a real image → gradually add noise over ~1,000 steps until it's pure static. 2) Train a network to **reverse** this. 3) At inference, start from random noise + prompt → progressively denoise into a coherent image.

</details>

### Card 99
**Q:** Why does deep learning outperform classical ML on images?
<details><summary>Show answer</summary>

**A:** DL automatically learns **hierarchical feature representations** from raw pixels (edges → shapes → objects), eliminating manual feature engineering. On unstructured data this is a massive win — but on small tabular data, classical ML (XGBoost) still wins.

</details>

### Card 100
**Q:** When should you NOT use deep learning?
<details><summary>Show answer</summary>

**A:** Small tabular dataset (<10K rows), when you legally need full interpretability, when you don't have GPU budget, or when a simpler ML model meets accuracy needs.

</details>

### Card 101
**Q:** What does transfer learning look like in practice for CNNs?
<details><summary>Show answer</summary>

**A:** Take a pre-trained model (ResNet50 trained on 14M ImageNet images). **Freeze early layers** (generic features — edges, textures). Replace the final classification layer. Fine-tune on your domain data (as few as 200–500 images). Done in hours.

</details>

### Card 102
**Q:** What is the AI invoice processing case study's payback period?
<details><summary>Show answer</summary>

**A:** **16 days.** €180K project cost, €340K/month savings. A CNN + BERT pipeline automated 94% of invoices, error rate dropped 3% → 0.4%.

</details>

---

## Course 6 — Natural Language Processing

### Card 103
**Q:** Approximately what percentage of enterprise data is unstructured text?
<details><summary>Show answer</summary>

**A:** **~80%**. NLP is what makes it usable — the biggest untapped efficiency frontier in most organisations.

</details>

### Card 104
**Q:** Name the four eras of NLP.
<details><summary>Show answer</summary>

**A:** 1) **Rule-based** (ELIZA, 1960s–80s), 2) **Statistical** (n-grams, SVM, 1990s–2010s), 3) **Neural & Word Embeddings** (Word2Vec, LSTM, BERT — 2013–18), 4) **LLMs** (GPT-3, ChatGPT, Claude — 2020+).

</details>

### Card 105
**Q:** What are word embeddings, and what classic analogy demonstrates them?
<details><summary>Show answer</summary>

**A:** Dense numeric vectors that represent a word's meaning; similar meanings cluster together in vector space. Classic: **"King − Man + Woman ≈ Queen"**. Coined by Word2Vec (2013).

</details>

### Card 106
**Q:** Name the 8 core NLP tasks.
<details><summary>Show answer</summary>

**A:** 1) Classification, 2) Sentiment analysis, 3) Named Entity Recognition (NER), 4) Summarisation, 5) Translation, 6) Question answering, 7) Text generation, 8) Semantic search.

</details>

### Card 107
**Q:** What is NER, and give one business use?
<details><summary>Show answer</summary>

**A:** **Named Entity Recognition** — extracts people, organisations, dates, amounts, and locations from raw text. Used for automated **contract review**, invoice extraction, compliance monitoring.

</details>

### Card 108
**Q:** What is the difference between extractive and abstractive summarisation?
<details><summary>Show answer</summary>

**A:** **Extractive** picks the most important sentences directly from the source (safer for legal). **Abstractive** generates new sentences that paraphrase the source (more fluent, but can hallucinate).

</details>

### Card 109
**Q:** What are the three mechanisms behind every modern NLP system?
<details><summary>Show answer</summary>

**A:** 1) **Tokenisation** (split text into numeric IDs), 2) **Embeddings** (words/tokens → vectors in meaning space), 3) **Attention / Self-attention** (resolves long-range context and ambiguity).

</details>

### Card 110
**Q:** What is semantic search, and why can't keyword search replace it?
<details><summary>Show answer</summary>

**A:** Semantic search finds documents by **meaning** via embeddings. Keyword search requires exact words — it fails on synonyms: searching "refund policy" wouldn't match docs saying "money-back guarantee" without semantic similarity.

</details>

### Card 111
**Q:** In NLP, what is the "moat" for a company?
<details><summary>Show answer</summary>

**A:** Not the model — everyone can call the same LLM API. The moat is **proprietary data + domain expertise + speed of iteration**.

</details>

### Card 112
**Q:** What is the typical ROI for well-scoped enterprise NLP projects in year 1?
<details><summary>Show answer</summary>

**A:** **300–800%.** Typical payback: 3–6 months.

</details>

### Card 113
**Q:** Approximate cost to process a document via an LLM API vs a human.
<details><summary>Show answer</summary>

**A:** ~**€0.002 per document via LLM API** vs ~**€15–40 per document by a human**.

</details>

### Card 114
**Q:** What is hallucination in an LLM, and why does it happen?
<details><summary>Show answer</summary>

**A:** When the model confidently generates plausible-sounding but **false** information. It happens because the model predicts the **next likely word** — which is not the same as retrieving verified facts.

</details>

### Card 115
**Q:** Name three hallucination mitigation strategies by risk level.
<details><summary>Show answer</summary>

**A:** **Low** → RAG + source citation. **Medium** → human-in-the-loop on low-confidence outputs. **High** → constrained structured output (JSON schema), use classification/extraction not generation.

</details>

### Card 116
**Q:** What is the Build vs Buy vs Prompt decision tree?
<details><summary>Show answer</summary>

**A:** 1) Can a well-crafted prompt solve it? → **Prompt.** 2) Need private docs? → **Add RAG.** 3) Generic model underperforms and you have data? → **Fine-tune.** 4) Need full control / data residency? → **Self-host open model.** 5) Train from scratch? → **Almost never.**

</details>

### Card 117
**Q:** What typical amount of data do you need to fine-tune an LLM?
<details><summary>Show answer</summary>

**A:** **500–50,000 domain-specific examples** is usually enough. Costs $50–$5,000. Takes hours to days.

</details>

### Card 118
**Q:** Give one NLP business use case from the banking sector.
<details><summary>Show answer</summary>

**A:** AML transaction narrative analysis, earnings call sentiment, loan application review, regulatory filing parsing, fraud alert triage.

</details>

### Card 119
**Q:** Give one NLP business use case from healthcare.
<details><summary>Show answer</summary>

**A:** Clinical note structuring (saves ~1.5 hrs/doctor/day), ICD code suggestion, patient intake parsing, drug adverse event extraction.

</details>

### Card 120
**Q:** Name 5 prompt engineering techniques that drive most NLP value.
<details><summary>Show answer</summary>

**A:** 1) **Role assignment**, 2) **Few-shot examples**, 3) **Chain-of-thought**, 4) **Output format constraints (JSON)**, 5) **Negative instructions** ("Do NOT speculate").

</details>

### Card 121
**Q:** When you have 600 labelled support tickets, should you fine-tune or prompt?
<details><summary>Show answer</summary>

**A:** **Start with prompt engineering.** 600 examples is small; a well-crafted prompt with few-shot examples often reaches 80–90% of what fine-tuning would deliver, in 2 days instead of 2 months.

</details>

---

## Course 7 — Computer Vision

### Card 122
**Q:** Name the 7 core computer vision tasks.
<details><summary>Show answer</summary>

**A:** **Classification, Detection, Segmentation, Tracking, OCR, Pose estimation, Generation.**

</details>

### Card 123
**Q:** What's the difference between object classification, detection, and instance segmentation?
<details><summary>Show answer</summary>

**A:** **Classification** → one label for the whole image. **Detection** → label + bounding box + confidence per object. **Instance segmentation** → pixel-precise mask per object (exact shape).

</details>

### Card 124
**Q:** What CV task gives pixel-precise boundaries around each object?
<details><summary>Show answer</summary>

**A:** **Instance segmentation.** Detection only gives bounding boxes.

</details>

### Card 125
**Q:** Approximate labelling cost for 10,000 images: classification vs segmentation?
<details><summary>Show answer</summary>

**A:** **Classification ≈ €1,000.** **Segmentation = €15,000–€40,000.** 15–40× more expensive — annotation budget often drives architecture choice.

</details>

### Card 126
**Q:** How is a colour image represented numerically?
<details><summary>Show answer</summary>

**A:** As a 3D array of numbers: **Height × Width × 3 channels (R, G, B)**. Each pixel value is 0–255. A 224×224 RGB image = 150,528 numbers.

</details>

### Card 127
**Q:** How does a convolutional filter work in a CNN?
<details><summary>Show answer</summary>

**A:** A small grid (e.g. 3×3) of numbers that slides across the image, multiplying its values with the image pixels and summing → one output per position. One filter detects one specific pattern (edge, curve, colour).

</details>

### Card 128
**Q:** What does a CNN learn at different depths?
<details><summary>Show answer</summary>

**A:** **Early layers** → edges, colours, textures. **Middle layers** → shapes, curves, simple parts. **Deep layers** → complex objects (faces, wheels, logos). Hierarchy builds automatically through training.

</details>

### Card 129
**Q:** What is a Vision Transformer (ViT)?
<details><summary>Show answer</summary>

**A:** An image-to-Transformer model that splits an image into patches (e.g. 16×16 pixels), treats each patch like a "word", and feeds the sequence into a Transformer using **self-attention** instead of convolutions.

</details>

### Card 130
**Q:** When should you choose a ViT over a CNN?
<details><summary>Show answer</summary>

**A:** **ViT**: large datasets, cloud compute, highest accuracy, multimodal tasks. **CNN**: small datasets, edge/real-time, embedded systems, limited compute.

</details>

### Card 131
**Q:** What is YOLO and what's its main strength?
<details><summary>Show answer</summary>

**A:** "You Only Look Once" — an object-detection model optimised for **real-time inference** on edge devices. Current: YOLOv9/v10. Open source.

</details>

### Card 132
**Q:** What does SAM (Segment Anything Model) do?
<details><summary>Show answer</summary>

**A:** Meta's **zero-shot segmentation** model — click a point and SAM segments the object. Trained on 11M images, 1B masks. Dramatically reduces annotation cost for segmentation projects.

</details>

### Card 133
**Q:** What is CLIP, and why is it useful for zero-shot CV?
<details><summary>Show answer</summary>

**A:** A multimodal model from OpenAI that jointly embeds images and text. Lets you classify images by describing categories in natural language ("does this contain a safety helmet?") without any labelled training data.

</details>

### Card 134
**Q:** What were the MIT Gender Shades findings?
<details><summary>Show answer</summary>

**A:** Commercial facial analysis APIs had **0.8% error on light-skinned men** but **34.7% on dark-skinned women — a 43× gap**. Root cause: biased training data. Real consequences: wrongful arrests of Black citizens (Robert Williams 2020, Porcha Woodruff 2023).

</details>

### Card 135
**Q:** What is data augmentation in CV?
<details><summary>Show answer</summary>

**A:** Applying transformations (flip, rotate, crop, brightness changes, noise) to existing images so 500 real images become 10,000+ training examples. Free, reduces overfitting.

</details>

### Card 136
**Q:** What is synthetic data in CV, and when is it used?
<details><summary>Show answer</summary>

**A:** Artificially generated labelled images from 3D rendering or generative AI. Used when real labelled data is scarce (rare defect modes, expensive scenarios). Tesla renders driving edge cases; Boeing renders aircraft components.

</details>

### Card 137
**Q:** Typical CV ROI and pilot timeline?
<details><summary>Show answer</summary>

**A:** **400–1,200% ROI in year 1** for industrial CV. Pilot to production: **6–12 weeks** with transfer learning.

</details>

### Card 138
**Q:** Give 3 industries with high-ROI CV use cases.
<details><summary>Show answer</summary>

**A:** **Manufacturing** (defect detection, €0.002/image vs €0.50 human); **healthcare** (radiology triage); **retail** (shelf intelligence, cashierless checkout).

</details>

### Card 139
**Q:** Under EU AI Act, what is prohibited for CV?
<details><summary>Show answer</summary>

**A:** Real-time remote biometric ID in public spaces (with narrow exceptions), social scoring, and emotion recognition in workplaces and schools. Penalty: up to **€35M or 7% of global revenue**.

</details>

### Card 140
**Q:** For construction site PPE (helmets, vests) compliance, which CV task fits best?
<details><summary>Show answer</summary>

**A:** **Object detection** — you need to locate each worker and determine if they're wearing required PPE. Full segmentation would be overkill and 15× more expensive to label.

</details>

### Card 141
**Q:** What is the difference between semantic segmentation and instance segmentation?
<details><summary>Show answer</summary>

**A:** **Semantic segmentation** labels each pixel by class (all cars the same colour). **Instance segmentation** additionally distinguishes individual objects within a class (car 1, car 2, car 3 each separately).

</details>

---

## Course 8 — Data & AI Infrastructure

### Card 142
**Q:** What is the most common data taxonomy: structured, semi-structured, unstructured?
<details><summary>Show answer</summary>

**A:** **Structured** (rows/columns, SQL — ~20% of enterprise data). **Semi-structured** (JSON, XML, logs). **Unstructured** (PDFs, images, audio — ~80% of enterprise data, where PII hides).

</details>

### Card 143
**Q:** What is the difference between OLTP and OLAP?
<details><summary>Show answer</summary>

**A:** **OLTP** (Online Transaction Processing) — operational DBs for transactions, row-level, fast writes (PostgreSQL, MySQL). **OLAP** (Online Analytical Processing) — analytical stores for aggregations, columnar, fast reads (Snowflake, BigQuery, Redshift). Never run analytics on your OLTP prod DB.

</details>

### Card 144
**Q:** Walk through the four eras of data architecture.
<details><summary>Show answer</summary>

**A:** 1) **Data Warehouse** (1990s–2000s: Oracle, Teradata). 2) **Data Lake** (2010s: Hadoop, S3). 3) **Cloud Data Warehouse** (2018+: Snowflake, BigQuery). 4) **Lakehouse** (2020+: Delta Lake, Iceberg, Hudi).

</details>

### Card 145
**Q:** What is a Data Lakehouse?
<details><summary>Show answer</summary>

**A:** A pattern that combines cheap lake storage with warehouse reliability — ACID transactions, data quality, and open table formats (Delta Lake, Apache Iceberg, Hudi) — enabling BI, ML, and streaming on one platform.

</details>

### Card 146
**Q:** What's the difference between ETL and ELT?
<details><summary>Show answer</summary>

**A:** **ETL** (legacy): Extract → Transform (on a separate server, e.g. Informatica) → Load into warehouse. **ELT** (modern): Extract → Load raw → Transform *inside* the warehouse with dbt via SQL, version-controlled in git.

</details>

### Card 147
**Q:** Why did ELT replace ETL as the modern standard?
<details><summary>Show answer</summary>

**A:** Cloud compute is cheap and elastic — no separate ETL server needed. Analysts can write SQL transformations in dbt, version-controlled, tested, and documented. Raw data is always preserved and transformations are repeatable. Analysts become 10× more productive vs traditional ETL devs.

</details>

### Card 148
**Q:** What is dbt and why did it win?
<details><summary>Show answer</summary>

**A:** **Data build tool** — lets analysts write SQL transformations, version-controlled in git, tested, documented, automated. Used by 50,000+ companies (GitLab, Shopify, JetBlue). Democratised transformation away from proprietary IT tools.

</details>

### Card 149
**Q:** Name the components of a modern ELT stack.
<details><summary>Show answer</summary>

**A:** **Ingest** (Fivetran/Airbyte) → **Store** (Snowflake/BigQuery/Fabric) → **Transform** (dbt) → **Orchestrate** (Airflow/Prefect/Dagster) → **Quality** (Great Expectations/Soda) → **Visualise** (Power BI/Tableau/Looker).

</details>

### Card 150
**Q:** What is the "streaming trap"?
<details><summary>Show answer</summary>

**A:** Teams defaulting to Kafka because it sounds impressive. Real-time streaming adds 5–10× complexity and cost. For most dashboards, 15-minute batch is plenty. Ask: *what decision changes if data is 15 min old vs 1 sec old?*

</details>

### Card 151
**Q:** When is real-time streaming genuinely justified?
<details><summary>Show answer</summary>

**A:** Payment fraud detection (<200ms), high-speed recommendations, algorithmic trading, IoT anomaly detection. For BI dashboards, daily batch is almost always sufficient.

</details>

### Card 152
**Q:** Compare Snowflake, Databricks, and Microsoft Fabric in one line each.
<details><summary>Show answer</summary>

**A:** **Snowflake** — SQL simplicity, best BI, multi-cloud portability. **Databricks** — Lakehouse, ML + data engineering, Spark-native. **Fabric** — unified Microsoft stack (warehouse + lake + Power BI + Copilot) under one licence.

</details>

### Card 153
**Q:** What is Apache Iceberg, and why does the course recommend it?
<details><summary>Show answer</summary>

**A:** An **open table format** (like Delta Lake, Hudi) backed by Netflix, Apple, AWS, Google, Snowflake. **Insist on Iceberg** for data portability — it prevents vendor lock-in. Your data isn't held hostage by any single platform.

</details>

### Card 154
**Q:** What does Data Mesh decentralise and why?
<details><summary>Show answer</summary>

**A:** Ownership of data. **Domain teams own their data as products** with SLAs. A central platform team only provides infra standards. Solves the central-team bottleneck (e.g. 6-week delivery times). 80% organisational change, 20% tech.

</details>

### Card 155
**Q:** What are the 4 principles of Data Mesh?
<details><summary>Show answer</summary>

**A:** 1) **Domain ownership**, 2) **Data as product**, 3) **Self-serve infrastructure**, 4) **Federated governance**.

</details>

### Card 156
**Q:** What is Data Fabric, and how does it differ from Data Mesh?
<details><summary>Show answer</summary>

**A:** **Data Fabric** uses AI/ML to automate integration and governance across heterogeneous sources — **without reorganising teams** (Gartner's counterpart to Data Mesh). Use Fabric when organisational change isn't feasible; use Mesh when you can restructure domain ownership.

</details>

### Card 157
**Q:** What is a Data Contract?
<details><summary>Show answer</summary>

**A:** A **machine-readable SLA** between data producer and consumer teams, specifying schema, freshness, quality rules, ownership, classification, and retention. Breaking it triggers an automated alert — like a broken API contract. Standard: **ODCS (PayPal)**.

</details>

### Card 158
**Q:** Name the 4 pillars of data governance.
<details><summary>Show answer</summary>

**A:** 1) **Data catalogue** (what do we have?) 2) **Data lineage** (where did this number come from?) 3) **Data ownership** (who's accountable?) 4) **Access control** (who can see this?).

</details>

### Card 159
**Q:** Name three data catalogue tools.
<details><summary>Show answer</summary>

**A:** **Alation, Atlan, DataHub (open-source), Microsoft Purview, Collibra.**

</details>

### Card 160
**Q:** What are the 6 dimensions of data quality?
<details><summary>Show answer</summary>

**A:** **Completeness, Accuracy, Consistency, Timeliness, Uniqueness, Validity.** Each maps to a category of business failure if ignored.

</details>

### Card 161
**Q:** What five things should you check in a FinOps audit when cloud costs jump?
<details><summary>Show answer</summary>

**A:** 1) Idle resources / unused clusters, 2) over-provisioned warehouses (size matched to need?), 3) long-running inefficient queries, 4) egress/cross-region transfer charges, 5) missing commitment discounts (reserved / committed use vs on-demand).

</details>

### Card 162
**Q:** What is the purpose of classifying data "at the border"?
<details><summary>Show answer</summary>

**A:** Classify data (PII, special category, confidential, public) **at the ingestion border** — *before* it enters any storage layer. Classifying later means unclassified PII spreads across lakes, warehouses, and ML training sets. Tools: Microsoft Purview, BigID, AWS Macie.

</details>

### Card 163
**Q:** Why does a data catalogue matter for breach response?
<details><summary>Show answer</summary>

**A:** You have 72 hours under GDPR (or 4 hours under DORA) to notify authorities. If you don't know where all your data is *before* the incident, you cannot respond in time. A catalogue is a **breach response tool**, not a governance nicety.

</details>

### Card 164
**Q:** What is the cost ratio of built-in vs retrofitted compliance?
<details><summary>Show answer</summary>

**A:** Retrofitting compliance after a platform is built costs **4–7×** more than building it in from day one.

</details>

---

## Cross-cutting — Ethics, Governance & Regulation

### Card 165
**Q:** Under GDPR, what is the difference between **pseudonymisation** and **anonymisation**?
<details><summary>Show answer</summary>

**A:** **Pseudonymisation** replaces identifiers with a reversible key/token — data is **still personal data** under GDPR (Art. 4(5)). **Anonymisation** is irreversible removal of all identifiers — genuinely anonymous data is outside GDPR scope.

</details>

### Card 166
**Q:** What does GDPR Article 22 give individuals the right to?
<details><summary>Show answer</summary>

**A:** The **right to an explanation** (and not to be subject to) fully-automated decisions that significantly affect them. This creates the legal basis for explainability requirements in AI systems.

</details>

### Card 167
**Q:** What is GDPR Article 17?
<details><summary>Show answer</summary>

**A:** The **right to erasure** (right to be forgotten) — a person's data must be deleted within 30 days of a valid request. Hard for ML models (active research: "machine unlearning"). Best practice: delete from live systems + scheduled retraining.

</details>

### Card 168
**Q:** What is GDPR Article 9 about?
<details><summary>Show answer</summary>

**A:** **Special categories of data** — health, biometric, racial/ethnic origin, political opinions, religious beliefs, sexual orientation. Processing is **prohibited by default**; requires explicit consent or a specific legal basis.

</details>

### Card 169
**Q:** What is the EU AI Act, and what risk tiers does it define?
<details><summary>Show answer</summary>

**A:** The world's first binding AI regulation (2024). Tiers: **Prohibited** (banned Feb 2025), **High-risk** (compliance Aug 2026), **Limited risk** (transparency only), **Minimal risk** (no obligations).

</details>

### Card 170
**Q:** What use cases are classified as **high-risk** under the EU AI Act?
<details><summary>Show answer</summary>

**A:** Credit scoring, **recruitment / HR (CV screening)**, medical devices, education grading, border control, critical infrastructure, law enforcement.

</details>

### Card 171
**Q:** What is the maximum penalty under the EU AI Act for high-risk AI violations?
<details><summary>Show answer</summary>

**A:** **€30M or 6% of global annual revenue**, whichever is higher.

</details>

### Card 172
**Q:** What is the maximum penalty under the EU AI Act for **prohibited** AI use cases?
<details><summary>Show answer</summary>

**A:** **€35M or 7% of global revenue** — for things like real-time biometric ID in public spaces or social scoring.

</details>

### Card 173
**Q:** What compliance requirements does a high-risk AI system face?
<details><summary>Show answer</summary>

**A:** Risk assessment, training data documented for bias/source/representativeness, full lineage, human oversight + override, inference logs retained (up to 10 years), post-deployment drift monitoring, conformity assessment before launch.

</details>

### Card 174
**Q:** What is DORA?
<details><summary>Show answer</summary>

**A:** The **EU Digital Operational Resilience Act** (effective 2025). Mandates ICT risk management + incident reporting for financial institutions.

</details>

### Card 175
**Q:** What are DORA's three incident-reporting timeframes?
<details><summary>Show answer</summary>

**A:** **4 hours** — initial notification. **72 hours** — detailed report. **1 month** — final report. Plus a mandatory register of all ICT third parties.

</details>

### Card 176
**Q:** What is federated learning?
<details><summary>Show answer</summary>

**A:** A **privacy-preserving ML** technique where models are trained **on-device** or on-premise — **raw data never leaves the source**. Only model updates are shared centrally. Used by Google Keyboard, Rabobank fraud detection.

</details>

### Card 177
**Q:** What is differential privacy?
<details><summary>Show answer</summary>

**A:** Adding **calibrated random noise** to aggregate outputs so no individual record can be inferred, while preserving statistical accuracy. Used by Apple iOS telemetry, US Census, Google Chrome.

</details>

### Card 178
**Q:** Why can removing names NOT be called anonymisation?
<details><summary>Show answer</summary>

**A:** MIT research showed **87% of Americans** can be uniquely re-identified from just date of birth, gender, and postcode. Netflix and AOL "anonymous" datasets were famously re-identified. GDPR still treats such data as personal data.

</details>

### Card 179
**Q:** Name the main sources of bias in ML systems.
<details><summary>Show answer</summary>

**A:** **Historical bias** (past discrimination reflected in data), **sampling bias** (unrepresentative data), **label bias** (biased annotators), **representation bias** (some groups under-represented), **amplification** (model reinforces biases at scale), and **feedback loops**.

</details>

### Card 180
**Q:** Name three landmark AI bias cases.
<details><summary>Show answer</summary>

**A:** **COMPAS recidivism tool** (2× false high-risk flag rate for Black defendants); **Amazon hiring algorithm** (downgraded CVs mentioning "women's" clubs); **Facial recognition** (43× worse error rate for dark-skinned women, MIT Gender Shades).

</details>

### Card 181
**Q:** What is model explainability, and why is it legally required?
<details><summary>Show answer</summary>

**A:** The ability to provide a human-understandable reason for a model's prediction. **GDPR Article 22** requires explanations for automated decisions affecting individuals; **EU AI Act** requires it for high-risk systems. Tools: SHAP, LIME, Grad-CAM, attention weights.

</details>

### Card 182
**Q:** What is SHAP?
<details><summary>Show answer</summary>

**A:** **SHapley Additive exPlanations** — assigns each feature a contribution value per prediction. E.g. "Loan denied: low income −0.3, no credit history −0.4, high debt ratio −0.2". Works with any model.

</details>

### Card 183
**Q:** What is LIME?
<details><summary>Show answer</summary>

**A:** **Local Interpretable Model-agnostic Explanations** — approximates any black-box model locally with a simple, interpretable model (e.g., linear). Great for one-off "why did the model predict this?" explanations.

</details>

### Card 184
**Q:** What is Grad-CAM?
<details><summary>Show answer</summary>

**A:** **Gradient-weighted Class Activation Mapping** — highlights which regions of an input image a CNN focused on to make its prediction. Useful for explaining vision models visually.

</details>

### Card 185
**Q:** What does the phrase "compliance is architecture" mean?
<details><summary>Show answer</summary>

**A:** GDPR, EU AI Act, DORA, and sector rules impose specific **technical** requirements, not just legal paperwork — data classification, lineage, access controls, retention, explainability must be built into the system from day one.

</details>

### Card 186
**Q:** Name three tools that detect PII in unstructured data.
<details><summary>Show answer</summary>

**A:** **Microsoft Purview**, **BigID**, **AWS Macie.** Automated scanners that classify unstructured stores.

</details>

### Card 187
**Q:** What is the typical GDPR fine ceiling compared to the EU AI Act's?
<details><summary>Show answer</summary>

**A:** **GDPR**: up to **€20M or 4%** of global revenue. **EU AI Act high-risk**: up to **€30M or 6%**. EU AI Act prohibited: **€35M or 7%**.

</details>

---

## Broader themes & synthesis cards

### Card 188
**Q:** What is the "competitive moat" in AI for a business?
<details><summary>Show answer</summary>

**A:** **Not the model** — everyone can call the same APIs. The moat is your **proprietary data, domain expertise, workflow knowledge, and speed of iteration**. Example: any competitor can use GPT-4; only *you* have 20 years of proprietary claims data.

</details>

### Card 189
**Q:** Describe the full ML project lifecycle.
<details><summary>Show answer</summary>

**A:** 1) **Problem definition** (business goal, KPIs). 2) **Data collection**. 3) **Data prep** (cleaning, EDA). 4) **Modelling** (train, tune, evaluate). 5) **Deployment** (API, monitoring). 6) **Impact measurement** (ROI, feedback loop).

</details>

### Card 190
**Q:** What percent of a data scientist's time is spent on data prep?
<details><summary>Show answer</summary>

**A:** Typically **~80%** on data collection and cleaning, only ~20% on actual modelling. Data quality is the biggest lever on model performance.

</details>

### Card 191
**Q:** What is MLOps / LLMOps, and why is it different from training?
<details><summary>Show answer</summary>

**A:** The discipline of deploying, monitoring, and maintaining ML/LLM models in production. Training is a one-time exercise; production requires handling drift (data changing over time), latency constraints, cost control, retraining triggers, and observability. A model in a notebook creates zero business value.

</details>

### Card 192
**Q:** What is model drift, and what causes it?
<details><summary>Show answer</summary>

**A:** Gradual degradation of a model's accuracy in production because real-world data changes (new user behaviour, market shifts, seasonal effects, new product categories). Always monitor in production and schedule periodic retraining.

</details>

### Card 193
**Q:** What is the ROI formula for an ML/NLP project?
<details><summary>Show answer</summary>

**A:** **Annual Savings = (Time saved × Volume × Hourly cost) + Error reduction savings.** **Annual Cost = API/infra + maintenance + human review.** **ROI = (Savings − Costs) / Costs × 100%.**

</details>

### Card 194
**Q:** Contract-review case study: what's the business case?
<details><summary>Show answer</summary>

**A:** NER + LLM extraction: ~90% reduction in manual review hours, pilot-to-production in 6–12 weeks, 300–800% year-1 ROI typical.

</details>

### Card 195
**Q:** A neural network is 99% accurate on training data but only 63% on test. What is the problem and how do you fix it?
<details><summary>Show answer</summary>

**A:** **Overfitting.** Fixes: add more data, increase dropout, add L2 regularisation, use data augmentation, implement early stopping, reduce model complexity, or use cross-validation.

</details>

### Card 196
**Q:** Why do Transformers train 10–100× faster than RNNs on GPUs?
<details><summary>Show answer</summary>

**A:** Transformers process **all tokens in parallel** via self-attention. RNNs process sequentially, token by token, which can't be parallelised across the sequence dimension.

</details>

### Card 197
**Q:** Give one example each: LLM for customer support, CV for manufacturing, ML for banking.
<details><summary>Show answer</summary>

**A:** **LLM**: Klarna's agent handles ~700 FTE's worth of customer service. **CV**: BMW uses production-line defect detection at 99.7% accuracy. **ML**: Bank churn XGBoost model delivers 34% churn reduction, €1.7M saved, 560% ROI.

</details>

### Card 198
**Q:** Why should "technology-led" data strategies fail?
<details><summary>Show answer</summary>

**A:** Buying Snowflake/Databricks before defining use cases is "infrastructure without purpose." Real strategy: define the business decisions data must support, then choose the tech. "We need a data lake" is not a strategy. "Reduce churn 15% using behavioural data" is.

</details>

### Card 199
**Q:** Name three ways an AI project can deliver non-financial value.
<details><summary>Show answer</summary>

**A:** **Speed** (faster decisions), **customer satisfaction / experience**, **compliance / risk reduction**, **employee enablement** (humans focus on high-value work), **resilience** (system keeps running 24/7).

</details>

### Card 200
**Q:** What is "human-in-the-loop" and when is it essential?
<details><summary>Show answer</summary>

**A:** A workflow that routes low-confidence AI outputs (or outputs above a risk threshold) to a human reviewer before they reach the end user or take an action. Essential for high-stakes domains: medical, legal, financial, HR, law enforcement.

</details>

### Card 201
**Q:** Give 3 strategic questions to decide between GPT-4o API vs self-hosted Llama 3.
<details><summary>Show answer</summary>

**A:** 1) **Data privacy / residency**: must data stay in EU/on-prem? → self-host. 2) **Performance vs cost**: is the quality gap between Llama 3 and GPT-4 material for your use case? 3) **Operational maturity**: do you have the MLOps capacity to run inference servers, GPUs, scaling, security patching?

</details>

### Card 202
**Q:** What is "scale plus pre-training" and why is it why LLMs are special?
<details><summary>Show answer</summary>

**A:** Training a Transformer on most of the internet at scale produces **emergent abilities** — reasoning, coding, translation, summarisation — without being explicitly taught those tasks. Emergence is a function of scale.

</details>

### Card 203
**Q:** What are three common reasons NLP projects fail?
<details><summary>Show answer</summary>

**A:** Vague success criteria, underestimating data quantity/quality needs, ignoring edge cases (non-standard language, multilingual inputs), and lack of production monitoring.

</details>

### Card 204
**Q:** What are three common reasons CV projects fail?
<details><summary>Show answer</summary>

**A:** **Inconsistent lighting** (#1 production failure — trained in one lighting, deployed in another), **class imbalance** (too few defect examples), and **missing edge cases** (clean lab images vs messy real-world).

</details>

### Card 205
**Q:** What's the difference between precision/recall trade-off for (a) food safety inspection and (b) retail shelf out-of-stock detection?
<details><summary>Show answer</summary>

**A:** **Food safety** → maximise **recall** (catch every potential hazard; false alarms acceptable). **Out-of-stock** → balance precision and recall; excessive false positives would send staff on wild-goose chases.

</details>

### Card 206
**Q:** For a startup building CV screening (hiring), what EU AI Act obligations apply?
<details><summary>Show answer</summary>

**A:** HR/recruitment = **high-risk**. Required: risk management system, bias audits, training data documentation for representativeness, human oversight in the decision loop, transparency to candidates, conformity assessment before market launch, and post-deployment monitoring. Penalty for non-compliance: €30M / 6% global revenue.

</details>

### Card 207
**Q:** Explain the "Algorithms are commoditised, data is the asset" claim.
<details><summary>Show answer</summary>

**A:** **For**: open-source models (Llama 3) match proprietary ones; APIs give equal access to GPT-4/Claude. Differentiation comes from proprietary, high-quality data. **Against**: state-of-the-art models still require massive compute; data alone without algorithmic skill doesn't produce value; workflow integration and speed-to-deploy also matter.

</details>

### Card 208
**Q:** What's the typical payback period for an enterprise NLP project?
<details><summary>Show answer</summary>

**A:** **3–6 months** for well-scoped projects on narrow, high-volume, repetitive text tasks.

</details>

### Card 209
**Q:** What does "attention is all you need" mean in practice?
<details><summary>Show answer</summary>

**A:** The 2017 Transformer paper showed that you don't need recurrence (RNN/LSTM) or convolution to achieve state-of-the-art on sequence tasks — **self-attention alone suffices**, and it parallelises trivially on GPUs. This unlocked LLMs as we know them.

</details>

### Card 210
**Q:** Summarise the course in one sentence for a board member.
<details><summary>Show answer</summary>

**A:** "AI creates durable value when you pair **clean proprietary data**, the **right technique (prompting → RAG → fine-tuning → classical ML)**, **rigorous governance (GDPR, EU AI Act, DORA)**, and **human-AI collaboration** in the workflow — the moat is never the model."

</details>

---

*End of flashcards. For deeper context, see [study-notes.md](study-notes.md). For the exam reference, see [exam-1.md](exam-1.md).*
