# AI Exam — Key Terms Glossary

Companion to the main flashcard deck. Each card is a term + definition.

---

## Course 1 — AI Foundations

### Term: ANI
<details><summary>Show answer</summary>

Artificial Narrow Intelligence. AI that performs one specific task well (for example spam filtering or route prediction) without general transfer across domains.

</details>

### Term: AGI
<details><summary>Show answer</summary>

Artificial General Intelligence. A hypothetical system with human-level capability across many domains that can transfer learning between tasks.

</details>

### Term: ASI
<details><summary>Show answer</summary>

Artificial Superintelligence. A hypothetical stage where AI exceeds human intelligence across nearly all cognitive tasks.

</details>

### Term: AI Winter
<details><summary>Show answer</summary>

A period of reduced AI funding and interest after inflated expectations failed to deliver practical outcomes.

</details>

## Course 2 — LLMs

### Term: Token
<details><summary>Show answer</summary>

The basic text unit a language model processes. Tokens are often subwords and are used for context limits and API billing.

</details>

### Term: Context Window
<details><summary>Show answer</summary>

The maximum number of tokens a model can consider in one request, including prompt and generated output.

</details>

### Term: Hallucination
<details><summary>Show answer</summary>

When a model outputs plausible sounding but incorrect or fabricated information.

</details>

### Term: RAG
<details><summary>Show answer</summary>

Retrieval-Augmented Generation. A method that retrieves relevant documents and injects them into the prompt so answers are grounded in source material.

</details>

## Course 3 — Agentic AI

### Term: AI Agent
<details><summary>Show answer</summary>

A system that can perceive context, reason over goals, use tools, and take actions across multiple steps.

</details>

### Term: MCP
<details><summary>Show answer</summary>

Model Context Protocol. A standard interface that lets AI systems connect to external tools and data sources.

</details>

## Course 4 — ML Fundamentals

### Term: Overfitting
<details><summary>Show answer</summary>

When a model learns training data too specifically and performs poorly on unseen data.

</details>

### Term: Precision
<details><summary>Show answer</summary>

The fraction of predicted positives that are actually positive: TP / (TP + FP).

</details>

### Term: Recall
<details><summary>Show answer</summary>

The fraction of actual positives that are correctly identified: TP / (TP + FN).

</details>

### Term: F1 Score
<details><summary>Show answer</summary>

The harmonic mean of precision and recall, useful when balancing false positives and false negatives.

</details>

## Course 5 — Deep Learning

### Term: Backpropagation
<details><summary>Show answer</summary>

The algorithm that computes gradients of the loss with respect to model weights so optimization can update parameters.

</details>

### Term: Transformer
<details><summary>Show answer</summary>

A neural architecture based on attention mechanisms that processes tokens in parallel and powers modern LLMs.

</details>
# AI Exam — Key Terms Glossary

**Companion to the main flashcard deck. Every term you need to define, organised by topic.**

How to use: read the term, think of the definition, then click **"Show answer"** to reveal. Terms are grouped by course/topic area.

---

## 🧠 Course 1 — AI Foundations

### Term: ANI
<details><summary>Show answer</summary>

**Artificial Narrow Intelligence** — AI that excels at one specific task with no transfer to other domains. All AI that exists today (ChatGPT, AlphaGo, Autopilot, spam filters). Cannot generalise beyond its training task.

</details>

### Term: AGI
<details><summary>Show answer</summary>

**Artificial General Intelligence** — Hypothetical AI with human-level capability across all cognitive domains. Can transfer knowledge between tasks, reason abstractly, and learn from few examples. Does not yet exist.

</details>

### Term: ASI
<details><summary>Show answer</summary>

**Artificial Superintelligence** — Hypothetical AI vastly smarter than humans in every domain. Could recursively self-improve. Purely speculative; would follow AGI if it arrives.

</details>

### Term: AI Winter
<details><summary>Show answer</summary>

Period of collapsed funding and interest in AI, following periods of over-hyped promises. Occurred after the 1956 Dartmouth Conference when rule-based systems failed to generalise. Key lesson: intelligence is implicit, not just logic + rules.

</details>

### Term: Move 37
<details><summary>Show answer</summary>

A move played by DeepMind's AlphaGo against Lee Sedol in 2016 that no human would have made — initially called a mistake, it turned out to be brilliant. Marked the first time AI invented knowledge humans didn't have, rather than just imitating human play.

</details>

### Term: AlexNet
<details><summary>Show answer</summary>

A CNN trained on GPUs that won the 2012 ImageNet competition by a landslide, kick-starting modern deep learning. Image recognition improved more in 2 years than in the previous 40. Considered the real birth of modern AI.

</details>

---

## 🤖 Course 2 — Generative AI & LLMs

### Term: Discriminative AI
<details><summary>Show answer</summary>

AI that classifies or predicts from input — e.g. "is this email spam?" Analyses existing data to assign labels or make predictions. Contrast with Generative AI.

</details>

### Term: Generative AI
<details><summary>Show answer</summary>

AI that creates new content (text, images, audio, code, video) that resembles human-created content. Does not just classify — it produces original outputs. Examples: ChatGPT, DALL-E, Midjourney.

</details>

### Term: LLM (Large Language Model)
<details><summary>Show answer</summary>

**Large Language Model** — A neural network (Transformer-based) trained on massive text data to predict the next most likely token. "Large" refers to billions/trillions of parameters trained on trillions of words. Examples: GPT-4, Claude, Llama, Gemini.

</details>

### Term: Token
<details><summary>Show answer</summary>

A subword unit — the basic unit an LLM processes. Roughly 0.75 words per token in English. "ChatGPT" = 2 tokens. APIs charge **per token**, not per word. Models have a maximum **context window** measured in tokens.

</details>

### Term: Context Window
<details><summary>Show answer</summary>

The maximum amount of text (in tokens) an LLM can hold in memory at once. Ranges from 4K to 2M+ tokens. Larger context = higher cost (2–10×). Determines how much of a conversation or document the model can "see" at one time.

</details>

### Term: Temperature
<details><summary>Show answer</summary>

A parameter (0.0–1.0) controlling the randomness/creativity of LLM outputs. **Low (0.0–0.3)** = deterministic, consistent (use for compliance, legal). **Medium (0.5–0.7)** = balanced default. **High (0.8–1.0)** = creative, varied (use for marketing, brainstorming).

</details>

### Term: Pre-training
<details><summary>Show answer</summary>

Phase 1 of LLM development: the model learns from billions of web pages, books, and code — acquiring general language understanding. Costs $10M–$100M+, takes months. Only done by foundation model labs (OpenAI, Anthropic, Google, Meta).

</details>

### Term: Fine-tuning
<details><summary>Show answer</summary>

Phase 2 of LLM development: a pre-trained model is further trained on domain-specific data to specialise it for a particular task (e.g. legal analysis, medical notes). Costs $1K–$100K, takes days to weeks. Companies can do this themselves with 500–50,000 examples.

</details>

### Term: RLHF
<details><summary>Show answer</summary>

**Reinforcement Learning from Human Feedback** — Phase 3 of LLM development. Humans rate different model responses, and the model is trained via RL to produce more helpful, harmless, and honest outputs. Makes raw models safe and useful.

</details>

### Term: Hallucination
<details><summary>Show answer</summary>

When an LLM confidently generates plausible-sounding but **false** information. Happens because the model predicts the next likely word — which is not the same as retrieving verified facts. Mitigated by RAG, source citation, and structured output.

</details>

### Term: Zero-Shot Prompting
<details><summary>Show answer</summary>

Asking an LLM to perform a task with **no examples** — just direct instructions. Fast and simple. Good for common tasks. Less reliable for complex or domain-specific work.

</details>

### Term: Few-Shot Prompting
<details><summary>Show answer</summary>

Providing **2–5 input/output examples** before the real task. Shows the model the desired pattern. Improves accuracy by 30–50% on structured tasks. Optimal: 3–5 examples.

</details>

### Term: Chain-of-Thought (CoT) Prompting
<details><summary>Show answer</summary>

Asking the model to "think step-by-step" before answering. Forces explicit reasoning. Can improve accuracy from ~60% to ~95% on complex reasoning and math problems. Key phrase: "Think step-by-step."

</details>

### Term: Tree of Thoughts (ToT)
<details><summary>Show answer</summary>

Prompting technique where the model explores **multiple reasoning paths simultaneously**, evaluates each, and selects the best. Best for strategic decisions with several valid approaches. Slower and more expensive than CoT.

</details>

### Term: Self-Consistency Prompting
<details><summary>Show answer</summary>

Run the **same prompt 3–5 times** and take the most common answer (majority vote). Uses wisdom-of-crowds to reduce errors. 3–5× cost increase but high accuracy for critical decisions.

</details>

### Term: ReAct Prompting
<details><summary>Show answer</summary>

**Reason + Act** — the model alternates between reasoning and taking actions (using tools). Loop: Think → Act → Observe → Think → Act. The core pattern behind how AI **agents** work. Enables autonomous multi-step task completion.

</details>

### Term: RAG (Retrieval-Augmented Generation)
<details><summary>Show answer</summary>

**Retrieval-Augmented Generation** — Grounds LLM answers in private/external documents by: (1) indexing docs as vector embeddings, (2) retrieving the most relevant chunks at query time, (3) injecting them into the prompt, (4) generating a grounded, citable answer. Reduces hallucination from ~15% to under 2%.

</details>

### Term: Diffusion Model
<details><summary>Show answer</summary>

The dominant architecture for image generation. Gradually adds noise to a real image until it's pure static, then trains a network to **reverse** this process. At inference: start from noise + prompt → progressively denoise into an image. Used by Stable Diffusion, DALL-E 3, Midjourney.

</details>

### Term: GAN (Generative Adversarial Network)
<details><summary>Show answer</summary>

Two competing networks: a **Generator** creates fakes; a **Discriminator** tries to detect them. They train together until fakes are indistinguishable from real. Mostly replaced by diffusion models for image generation. Notoriously hard to train.

</details>

---

## 🕹️ Course 3 — Agentic AI

### Term: AI Agent
<details><summary>Show answer</summary>

An AI system with four core properties: **Perception** (reads context), **Reasoning** (plans multi-step actions), **Action** (calls tools, sends emails, queries DBs), and **Memory** (retains context across steps). Contrast with a chatbot, which only generates text.

</details>

### Term: MCP (Model Context Protocol)
<details><summary>Show answer</summary>

**Model Context Protocol** — A universal plugin standard created by Anthropic for how AI agents connect to tools and external data sources. Think of it as a USB standard for AI tools.

</details>

### Term: Agentic RAG
<details><summary>Show answer</summary>

RAG where the retrieval step has a "brain" — the agent decides **whether, when, and how many times** to retrieve, decomposes queries, refines iteratively, grades its own retrieval, and can use tools (SQL, APIs) as part of the process.

</details>

### Term: Prompt Injection
<details><summary>Show answer</summary>

An agent failure mode where **malicious content in the environment** (e.g. a document the agent reads) hijacks the agent's behaviour by embedding adversarial instructions. A key governance risk in agentic deployments.

</details>

### Term: Human-in-the-Loop
<details><summary>Show answer</summary>

A workflow design that routes **low-confidence or high-risk AI outputs** to a human reviewer before they reach the end user or trigger an action. Essential in high-stakes domains: medical, legal, financial, HR, law enforcement.

</details>

---

## 📊 Course 4 — Machine Learning Fundamentals

### Term: Machine Learning
<details><summary>Show answer</summary>

A subset of AI where systems **learn statistical patterns from data** rather than following explicit rules. Formula: Data + Answers → Rules (Model). Contrast with traditional programming: Data + Rules → Answers.

</details>

### Term: Supervised Learning
<details><summary>Show answer</summary>

ML type using **labelled data** (input X + correct output y). The model learns the input→output mapping. Examples: churn prediction, credit scoring, image classification.

</details>

### Term: Unsupervised Learning
<details><summary>Show answer</summary>

ML type using **unlabelled data** — finds hidden structure without predefined answers. Examples: customer segmentation (K-Means), anomaly detection (DBSCAN), dimensionality reduction (PCA).

</details>

### Term: Reinforcement Learning (RL)
<details><summary>Show answer</summary>

ML type where an **agent** learns to maximise cumulative reward through trial and error in an environment. No labelled data — learns from reward/penalty signals. Examples: dynamic pricing (Uber), AlphaGo, ad bidding.

</details>

### Term: Transfer Learning
<details><summary>Show answer</summary>

Reusing a **pre-trained model's** learned knowledge and fine-tuning it on a smaller, domain-specific dataset. Dramatically cuts data and training cost. Example: ResNet trained on 14M ImageNet images fine-tuned on 500 medical images.

</details>

### Term: Overfitting
<details><summary>Show answer</summary>

Model performs very well on **training data but poorly on new/test data** — it memorised examples instead of learning generalisable patterns. High variance. Fix: more data, regularisation (Dropout, L1/L2), early stopping, cross-validation.

</details>

### Term: Underfitting
<details><summary>Show answer</summary>

Model is too simple — **poor performance on both training and test data**. High bias. Fix: add features, use a more complex model, reduce regularisation.

</details>

### Term: K-Fold Cross-Validation
<details><summary>Show answer</summary>

Split data into K parts; train on K−1, test on the held-out part; rotate K times; average results. Gives a reliable, unbiased estimate of model performance. Reduces dependence on any single train/test split.

</details>

### Term: Precision
<details><summary>Show answer</summary>

TP / (TP + FP) — of all items the model **flagged as positive**, how many were actually positive? Minimises false alarms. Use when false positives are costly (e.g. fraud alerts causing customer friction).

</details>

### Term: Recall
<details><summary>Show answer</summary>

TP / (TP + FN) — of all **actual positives**, how many did the model catch? Minimises misses. Use when false negatives are costly (e.g. missing a disease diagnosis, missing actual fraud).

</details>

### Term: F1 Score
<details><summary>Show answer</summary>

The **harmonic mean of Precision and Recall**: F1 = 2·(P·R)/(P+R). Balances both when you care equally about false alarms and misses. Use on imbalanced datasets instead of accuracy.

</details>

### Term: AUC-ROC
<details><summary>Show answer</summary>

**Area Under the ROC Curve** — measures the model's ability to discriminate between classes across **all classification thresholds**. AUC = 1.0 is perfect; 0.5 is random. Robust metric for imbalanced datasets.

</details>

### Term: Class Imbalance
<details><summary>Show answer</summary>

When one class is far more frequent than another (e.g. fraud = 0.1% of transactions). Makes accuracy misleading — a model predicting "not fraud" always achieves 99.9% accuracy but catches zero fraudsters. Fix: SMOTE, class weights, AUC-ROC as metric.

</details>

### Term: SMOTE
<details><summary>Show answer</summary>

**Synthetic Minority Over-sampling Technique** — generates synthetic examples of the minority class to balance an imbalanced dataset. Used in fraud detection, churn prediction.

</details>

### Term: Data Leakage
<details><summary>Show answer</summary>

Including features in training that **contain information unavailable at prediction time**. Makes validation accuracy look spectacular (sometimes 99%+) but causes the model to fail completely in production.

</details>

### Term: Logistic Regression
<details><summary>Show answer</summary>

Linear classifier outputting a probability (0–1) via the sigmoid function. Draws a **linear decision boundary**. Highly interpretable — coefficients = feature importance. Start here for regulated industries or as a baseline.

</details>

### Term: Decision Tree
<details><summary>Show answer</summary>

Model that splits data into branches using if-then rules learned from data. Extremely **interpretable** — you can print the reason for any prediction. Prone to overfitting without pruning. Preferred in regulated industries (GDPR Art.22).

</details>

### Term: Random Forest
<details><summary>Show answer</summary>

**Ensemble method**: builds many decision trees on bootstrap samples of the data, each using a random subset of features, then takes the majority vote. Reduces variance through averaging. Robust, works well out-of-the-box.

</details>

### Term: XGBoost (Gradient Boosting)
<details><summary>Show answer</summary>

Builds trees **sequentially** — each tree corrects the errors of the previous one, optimising a loss function via gradient descent. State-of-the-art on tabular data. Dominates Kaggle competitions. Default choice for banking, insurance, e-commerce.

</details>

### Term: K-Means Clustering
<details><summary>Show answer</summary>

Unsupervised algorithm: (1) initialise K centroids, (2) assign each point to nearest centroid, (3) recompute centroids as cluster mean, (4) repeat until convergence. Choose K using the **elbow method**. Limitation: assumes spherical clusters, sensitive to outliers.

</details>

### Term: DBSCAN
<details><summary>Show answer</summary>

**Density-Based Spatial Clustering of Applications with Noise** — finds clusters of arbitrary shape and labels sparse points as **noise/outliers** automatically. No need to specify K. Best for anomaly detection.

</details>

### Term: PCA (Principal Component Analysis)
<details><summary>Show answer</summary>

Reduces dimensionality by projecting data onto directions of **maximum variance**. Fights the curse of dimensionality, enables visualisation, speeds up training. Trade-off: components are linear combinations, so interpretability is lost.

</details>

### Term: SHAP
<details><summary>Show answer</summary>

**SHapley Additive exPlanations** — assigns each feature a **contribution value per individual prediction**. "Loan denied: income −0.3, no credit history −0.4." Works with any model. Key tool for GDPR Art.22 explainability compliance.

</details>

### Term: LIME
<details><summary>Show answer</summary>

**Local Interpretable Model-Agnostic Explanations** — approximates any black-box model locally with a simple, interpretable (linear) model. Great for one-off "why did the model predict this?" explanations.

</details>

### Term: Lasso (L1) Regularisation
<details><summary>Show answer</summary>

Adds a penalty = λ × Σ|β| to the loss function. Can shrink coefficients **exactly to zero**, performing **automatic feature selection**. 50 features → Lasso keeps the 8 most important. Great for high-dimensional data.

</details>

### Term: Ridge (L2) Regularisation
<details><summary>Show answer</summary>

Adds a penalty = λ × Σ(β²) to the loss function. Shrinks all coefficients **toward zero but never exactly to zero**. Good for multicollinearity. Contrast with Lasso: Ridge keeps all features; Lasso eliminates some.

</details>

---

## 🧬 Course 5 — Neural Networks & Deep Learning

### Term: Activation Function
<details><summary>Show answer</summary>

Introduces **non-linearity** into a neural network so it can learn curves and complex decision boundaries — not just straight lines. Without activation functions, any deep network collapses to a single linear equation.

</details>

### Term: ReLU
<details><summary>Show answer</summary>

**Rectified Linear Unit** — defined as max(0, x). Negative inputs → 0; positive inputs → unchanged. The **most popular activation for hidden layers**. Fast to compute. Default choice for most networks.

</details>

### Term: Sigmoid
<details><summary>Show answer</summary>

Squashes output to (0,1). Interpreted as a probability. Used in **binary classification output layers** — "70% probability it's spam." Not used in hidden layers (vanishing gradient problem).

</details>

### Term: Softmax
<details><summary>Show answer</summary>

Converts raw output scores into a **probability distribution summing to 1**. Used in **multi-class output layers** — e.g. cat 60%, dog 30%, bird 10%. Each class gets a probability, all sum to 1.

</details>

### Term: GELU
<details><summary>Show answer</summary>

**Gaussian Error Linear Unit** — a smooth version of ReLU. Used in modern Transformer architectures like GPT and BERT. Slightly better performance in large models.

</details>

### Term: Loss Function
<details><summary>Show answer</summary>

A number that measures **how wrong the model's prediction is**. Provides the error signal that drives weight updates via backpropagation. Common: MSE for regression, Cross-Entropy for classification. Goal of training: minimise this number.

</details>

### Term: Backpropagation
<details><summary>Show answer</summary>

The algorithm that uses the **chain rule of calculus** to calculate how much each weight contributed to the loss, then propagates that error backward through every layer. Enables gradient descent to update all weights efficiently.

</details>

### Term: Gradient Descent
<details><summary>Show answer</summary>

Optimisation algorithm: take a small step in the direction that **reduces the loss** (downhill on the loss landscape). Analogy: blindfolded on a hill, feel the slope, step downhill, repeat until you reach the valley (minimum loss = best weights).

</details>

### Term: Learning Rate
<details><summary>Show answer</summary>

The **step size** in gradient descent. Too large → overshoot the minimum, loss diverges. Too small → training crawls/stalls. Default rule: use Adam at 0.001. The most critical hyperparameter to tune.

</details>

### Term: Adam (Optimiser)
<details><summary>Show answer</summary>

**Adaptive Moment Estimation** — adapts the learning rate per parameter. Default optimiser for ~90% of deep learning projects. Works well out-of-the-box on most architectures. Start here, always.

</details>

### Term: Dropout
<details><summary>Show answer</summary>

A **regularisation** technique that randomly "switches off" a fraction of neurons during training. Forces the network to learn redundant, robust representations. The most effective deep learning regulariser. Prevents overfitting.

</details>

### Term: Batch Normalisation
<details><summary>Show answer</summary>

Normalises the inputs of each layer during training. Stabilises and accelerates training. Reduces sensitivity to initialisation. Used alongside Dropout in most modern architectures.

</details>

### Term: Early Stopping
<details><summary>Show answer</summary>

A regularisation technique: **halt training when validation loss starts rising** (i.e. when the model starts overfitting). Free, simple, and almost always helps. Monitor validation loss, not just training loss.

</details>

### Term: Skip Connection (ResNet)
<details><summary>Show answer</summary>

ResNet's key innovation (2015): each layer can **pass its input unchanged forward** to deeper layers, bypassing intermediate transformations. Solves the vanishing gradient problem. Enabled networks with 152+ layers. Now standard in deep architectures.

</details>

### Term: CNN (Convolutional Neural Network)
<details><summary>Show answer</summary>

**Convolutional Neural Network** — learns spatial hierarchies via filters sliding across the input. Suited to **images and video**. Translation-invariant due to pooling. Early layers: edges. Middle: shapes. Deep: objects. Hierarchical feature learning is automatic.

</details>

### Term: Pooling Layer
<details><summary>Show answer</summary>

Downsamples the feature map in a CNN (usually halves spatial size). Reduces computation. Makes the network **translation-invariant** — a cat in the corner = a cat in the centre. Max pooling keeps the strongest activation in each region.

</details>

### Term: RNN (Recurrent Neural Network)
<details><summary>Show answer</summary>

Neural network with a **hidden state** that carries information across time steps. Processes sequences step by step. Suited to time series, speech. Weakness: suffers from vanishing gradients — struggles to remember things said many steps ago.

</details>

### Term: LSTM (Long Short-Term Memory)
<details><summary>Show answer</summary>

A type of RNN using **three gates** (forget, input, output) to control information flow. Solves the vanishing gradient problem. Can maintain memory over long sequences. Used for time series, speech, and text before Transformers dominated.

</details>

### Term: Transformer
<details><summary>Show answer</summary>

Architecture introduced in "Attention is All You Need" (2017). Replaces recurrence with **self-attention** — processes all tokens in parallel. Fully parallelisable (trains 10–100× faster than RNNs on GPUs). Foundation of every modern LLM (GPT, BERT, Claude, Llama).

</details>

### Term: Self-Attention
<details><summary>Show answer</summary>

Mechanism where **every token simultaneously considers every other token** and assigns attention weights. Enables the model to resolve long-range dependencies and ambiguity. Example: "The trophy didn't fit because **it** was too big" — self-attention correctly identifies "it" = trophy.

</details>

### Term: BERT
<details><summary>Show answer</summary>

**Encoder-only** Transformer (bidirectional context). Built for **understanding** tasks: classification, semantic search, Q&A. Reads the full sentence in both directions simultaneously. Contrast with GPT (decoder-only, left-to-right, generation).

</details>

### Term: GPT
<details><summary>Show answer</summary>

**Decoder-only** Transformer (left-to-right). Built for **generation** tasks: chat, writing, code, summarisation. Predicts the next token given all previous tokens. Foundation of ChatGPT, Claude, Llama.

</details>

### Term: Vision Transformer (ViT)
<details><summary>Show answer</summary>

An image model that divides the image into **patches** (e.g. 16×16 pixels), treats each patch like a "word," and feeds the sequence into a Transformer using self-attention. Better at global context than CNNs. Requires more data; preferred for large datasets and multimodal tasks.

</details>

---

## 💬 Course 6 — NLP

### Term: NLP (Natural Language Processing)
<details><summary>Show answer</summary>

The discipline that makes **unstructured text usable** by machines. ~80% of enterprise data is unstructured text. NLP encompasses: classification, sentiment analysis, NER, summarisation, translation, Q&A, generation, semantic search.

</details>

### Term: Tokenisation
<details><summary>Show answer</summary>

Splitting text into **numeric token IDs** so models can process language. Subword-level: "ChatGPT" → ["Chat", "GPT"] → [9889, 2898]. The first step in any NLP pipeline. Models don't read words — they read numbers.

</details>

### Term: Word Embeddings
<details><summary>Show answer</summary>

Dense **numeric vectors** representing words in a meaning space where similar words cluster together. Classic example: King − Man + Woman ≈ Queen. Coined by Word2Vec (2013). Captures semantic similarity geometrically.

</details>

### Term: Embeddings (general)
<details><summary>Show answer</summary>

Mapping any input (word, sentence, image patch) to a **dense vector in a high-dimensional meaning space**. Similar meanings → similar vectors (close in space). Enables semantic search, clustering, and retrieval. Foundation of RAG.

</details>

### Term: Semantic Search
<details><summary>Show answer</summary>

Retrieval by **meaning** using embeddings — not keyword matching. "Refund policy" matches "money-back guarantee" even though no words overlap. Contrast with keyword search, which fails on synonyms and paraphrases.

</details>

### Term: NER (Named Entity Recognition)
<details><summary>Show answer</summary>

**Named Entity Recognition** — extracts structured entities from raw text: people, organisations, dates, amounts, locations. Example: "Siemens AG shall deliver by March 31 to Frankfurt. Penalty: €50,000/day" → ORG, DATE, LOC, MONEY. Used for contract review, invoice extraction.

</details>

### Term: Sentiment Analysis
<details><summary>Show answer</summary>

Detecting **emotion or opinion polarity** in text (positive/negative/neutral) or at aspect level. Used for brand monitoring, NPS comment analysis, product review mining, support ticket routing.

</details>

### Term: Extractive Summarisation
<details><summary>Show answer</summary>

Summarisation method that **picks the most important sentences directly from the source** without rewriting. Safer for legal/compliance use because it cannot fabricate new content. Contrast with abstractive.

</details>

### Term: Abstractive Summarisation
<details><summary>Show answer</summary>

Summarisation method that **generates new sentences paraphrasing the source**. More fluent and concise than extractive. Higher hallucination risk — the model may introduce information not in the original text.

</details>

### Term: Semantic Similarity
<details><summary>Show answer</summary>

The degree to which two pieces of text have the **same meaning**, measured as the cosine distance between their embedding vectors. Powers duplicate detection, semantic search, and RAG retrieval ranking.

</details>

---

## 👁️ Course 7 — Computer Vision

### Term: Computer Vision (CV)
<details><summary>Show answer</summary>

The field enabling machines to **see, identify, measure, track, and act on visual data**. Every camera becomes a sensor. Core tasks: classification, detection, segmentation, tracking, OCR, pose estimation, generation.

</details>

### Term: Image Classification
<details><summary>Show answer</summary>

Assigns a **single label** to an entire image. "This is a cracked weld" / "This leaf is healthy." Cheapest and simplest CV task. ~500 images/class with transfer learning.

</details>

### Term: Object Detection
<details><summary>Show answer</summary>

Assigns **label + bounding box + confidence score** per object. Multiple objects per image. Real-time capable. Used for counting, locating, alerting (e.g. safety helmets). More data-hungry than classification.

</details>

### Term: Semantic Segmentation
<details><summary>Show answer</summary>

Labels **every pixel by class** — all cars the same colour, all pedestrians another. Does not distinguish individual instances within a class. Used in autonomous driving, satellite imagery analysis.

</details>

### Term: Instance Segmentation
<details><summary>Show answer</summary>

Labels each pixel with both **class and individual object identity** — car 1, car 2, car 3 each get separate masks. Pixel-precise shape per object. Most expensive to annotate (€15K–40K per 10K images). Used in medical imaging, precision manufacturing.

</details>

### Term: OCR (Optical Character Recognition)
<details><summary>Show answer</summary>

Extracts **text from images** (invoices, forms, ID cards, receipts). Combines CV + NLP for full document understanding. Tools: Azure Document Intelligence, AWS Textract, Tesseract.

</details>

### Term: YOLO (You Only Look Once)
<details><summary>Show answer</summary>

Object detection model optimised for **real-time inference on edge devices**. Processes the entire image in one pass (hence "only once"). Current versions: YOLOv9/v10. Open-source. Dominant choice for real-time industrial CV.

</details>

### Term: SAM (Segment Anything Model)
<details><summary>Show answer</summary>

Meta's **zero-shot segmentation** model. Click a point → SAM segments the object with no task-specific training. Trained on 11M images, 1B masks. Dramatically reduces annotation cost. Can auto-label segmentation datasets.

</details>

### Term: CLIP
<details><summary>Show answer</summary>

OpenAI's **multimodal model** that jointly embeds images and text. Enables zero-shot classification: "Does this image contain a safety helmet?" — no labelled training data needed. Foundation of GPT-4V and modern vision-language models.

</details>

### Term: Data Augmentation (CV)
<details><summary>Show answer</summary>

Applying transformations (flip, rotate, crop, brightness, noise) to existing images to **multiply training examples without collecting new data**. 500 real images → 10,000+ training examples. Free. Always use it. Reduces overfitting.

</details>

### Term: Synthetic Data (CV)
<details><summary>Show answer</summary>

Artificially generated, **perfectly labelled** images from 3D rendering or generative AI. Used when real labelled data is scarce (rare defect modes, dangerous scenarios). Tesla renders edge-case driving scenarios; Boeing renders aircraft components.

</details>

---

## 🏗️ Course 8 — Data & AI Infrastructure

### Term: Structured Data
<details><summary>Show answer</summary>

Data organised in **rows and columns**, queryable with SQL. ~20% of all enterprise data. Easiest to govern, analyse, and audit. Examples: CRM records, transaction logs, financial ledgers.

</details>

### Term: Unstructured Data
<details><summary>Show answer</summary>

Data with **no predefined format** — ~80% of all enterprise data. Hardest to govern; PII often hides here. Examples: PDFs, contracts, images, audio recordings, emails, call transcripts.

</details>

### Term: OLTP
<details><summary>Show answer</summary>

**Online Transaction Processing** — operational databases for day-to-day transactions. Row-level, fast writes. Examples: PostgreSQL, MySQL. Never run analytics on your OLTP production database.

</details>

### Term: OLAP
<details><summary>Show answer</summary>

**Online Analytical Processing** — analytical databases for aggregations across millions of rows. Columnar storage, read-optimised. Examples: Snowflake, BigQuery, Redshift. Powers BI dashboards and reporting.

</details>

### Term: Data Lake
<details><summary>Show answer</summary>

Store **all data cheaply** in raw form (any format, no schema required) in object storage (S3, ADLS). "Schema on read." Solved storage cost but created governance chaos → data swamps without proper management.

</details>

### Term: Data Lakehouse
<details><summary>Show answer</summary>

Combines **lake storage costs** with **warehouse reliability** — adds ACID transactions, data quality, and open table formats (Delta Lake, Iceberg) on top of cheap lake storage. One platform for BI, ML, and streaming.

</details>

### Term: ETL
<details><summary>Show answer</summary>

**Extract → Transform → Load** (legacy pattern). Transformation happens on a separate ETL server (Informatica, SSIS) before loading into the warehouse. Business logic locked in proprietary tools; expensive; brittle; slow to change.

</details>

### Term: ELT
<details><summary>Show answer</summary>

**Extract → Load → Transform** (modern standard). Load raw data first, then transform **inside the warehouse** using dbt (SQL). Version-controlled in git, testable, owned by analysts. 10× more productive than legacy ETL.

</details>

### Term: dbt (Data Build Tool)
<details><summary>Show answer</summary>

Lets analysts write **SQL transformations** that are version-controlled in git, tested, documented, and automated. Turns analysts into data engineers. Used by 50,000+ companies. The standard modern transformation tool.

</details>

### Term: Apache Kafka
<details><summary>Show answer</summary>

Distributed **event streaming** platform for real-time data pipelines. Processes 1 trillion+ events/day at Uber. Used for payment fraud detection, real-time recommendations, IoT. Adds 5–10× complexity vs batch — only use when genuinely needed.

</details>

### Term: Apache Iceberg
<details><summary>Show answer</summary>

An **open table format** that adds ACID transactions and portability to data lakes. Backed by Netflix, Apple, AWS, Google, Snowflake. Insist on Iceberg to prevent **vendor lock-in** — your data stays portable across platforms.

</details>

### Term: Data Mesh
<details><summary>Show answer</summary>

Architectural and organisational pattern where **domain teams own their data as products** with SLAs. Central platform team only provides infrastructure standards. Solves the central-team bottleneck. 4 principles: domain ownership, data as product, self-serve infra, federated governance.

</details>

### Term: Data Catalogue
<details><summary>Show answer</summary>

A searchable **inventory of all data assets** with owners, definitions, classification, and quality scores. Enables analysts to find data. Required for GDPR Art.30 compliance. A **breach response tool** — without it, you cannot identify affected data within the 72-hour GDPR window.

</details>

### Term: Data Lineage
<details><summary>Show answer</summary>

Tracking data from its **source through every transformation to its final use**. When a KPI is wrong, lineage tells you exactly which step failed. Required by EU AI Act for high-risk AI training data documentation.

</details>

### Term: Data Contract
<details><summary>Show answer</summary>

A **machine-readable SLA** between data producer and consumer teams — specifying schema, freshness, quality rules, ownership, classification, and retention. Breaking it triggers an automated alert. Standard: ODCS (PayPal).

</details>

### Term: Data Quality Dimensions
<details><summary>Show answer</summary>

Six dimensions: **Completeness** (no missing required fields), **Accuracy** (reflects reality), **Consistency** (same format everywhere), **Timeliness** (fresh enough for the decision), **Uniqueness** (no duplicates), **Validity** (conforms to business rules). Each maps to a category of business failure if missed.

</details>

### Term: Pseudonymisation
<details><summary>Show answer</summary>

Replacing identifiers with a **reversible key/token** (e.g. email → user_id_7834). Data is still **personal data under GDPR** (Art. 4(5)) if re-identification is possible. Risk is reduced, not eliminated. Contrast with anonymisation.

</details>

### Term: Anonymisation
<details><summary>Show answer</summary>

**Irreversible** removal of all identifiers — genuinely anonymous data is **outside GDPR scope**. Technically very hard. Removing names alone is not anonymisation — MIT showed 87% of Americans can be re-identified from DOB, gender, and postcode alone.

</details>

### Term: Differential Privacy
<details><summary>Show answer</summary>

Adding **calibrated random noise** to aggregate outputs so no individual record can be inferred, while preserving statistical accuracy. Used by Apple iOS telemetry, US Census, Google Chrome. Provides mathematically provable privacy guarantees.

</details>

### Term: Federated Learning
<details><summary>Show answer</summary>

**Privacy-preserving ML** where models are trained on-device or on-premise — raw data **never leaves the source**. Only model updates (gradients) are shared centrally. Used by Google Keyboard, Rabobank fraud detection. Ideal for healthcare and cross-org ML.

</details>

### Term: Synthetic Data
<details><summary>Show answer</summary>

Statistically faithful **fake datasets** generated from real data distributions. No real individual records — generally outside GDPR scope. Used for ML training, third-party sharing, dev/test environments. Growing use in regulated industries.

</details>

---

## ⚖️ Cross-cutting — Ethics, Governance & Regulation

### Term: GDPR
<details><summary>Show answer</summary>

**General Data Protection Regulation** — EU regulation governing personal data processing. Key rights: erasure (Art.17), explanation for automated decisions (Art.22). Special categories (Art.9). Penalties: up to **€20M or 4% of global revenue**. 72-hour breach notification.

</details>

### Term: GDPR Article 22
<details><summary>Show answer</summary>

The **right to explanation** — individuals have the right not to be subject to solely automated decisions that significantly affect them, and the right to a human-understandable explanation. Creates the legal basis for AI explainability requirements.

</details>

### Term: GDPR Article 9
<details><summary>Show answer</summary>

**Special categories of data** — health, biometric, racial/ethnic origin, political opinions, religious beliefs, sexual orientation. Processing is **prohibited by default**; requires explicit consent or a specific legal basis.

</details>

### Term: EU AI Act
<details><summary>Show answer</summary>

The world's first binding AI regulation (2024). Risk tiers: **Prohibited** (social scoring, real-time biometric ID — banned Feb 2025), **High-risk** (credit, HR, medical, border control — compliance Aug 2026), **Limited risk** (transparency only), **Minimal risk** (no obligations). Penalties: up to **€35M or 7% of global revenue** for prohibited uses.

</details>

### Term: High-Risk AI (EU AI Act)
<details><summary>Show answer</summary>

AI systems in: credit scoring, **recruitment/HR (CV screening)**, medical devices, education grading, border control, critical infrastructure, law enforcement. Require: risk assessment, bias audits, training data documentation, human oversight, inference logs retained (up to 10 years), conformity assessment.

</details>

### Term: DORA
<details><summary>Show answer</summary>

**EU Digital Operational Resilience Act** (effective 2025). Mandates ICT risk management and incident reporting for financial institutions. Three timeframes: **4 hours** (initial notification), **72 hours** (detailed report), **1 month** (final report).

</details>

### Term: Algorithmic Bias
<details><summary>Show answer</summary>

Systematic and unfair discrimination produced by an ML model, typically inherited from biased training data. Sources: historical bias, sampling bias, label bias, representation bias, amplification, feedback loops. Example: MIT Gender Shades — 43× higher error rate for dark-skinned women vs light-skinned men in facial recognition.

</details>

### Term: Model Explainability (XAI)
<details><summary>Show answer</summary>

The ability to provide a **human-understandable reason** for a model's prediction. Required by GDPR Art.22 and EU AI Act for high-risk systems. Tools: SHAP, LIME, Grad-CAM (for images), attention weights (for Transformers).

</details>

### Term: Grad-CAM
<details><summary>Show answer</summary>

**Gradient-weighted Class Activation Mapping** — highlights which **regions of an input image** a CNN focused on to make its prediction. Visual explanation tool for computer vision models. Used to verify models are looking at the right thing.

</details>

### Term: COMPAS
<details><summary>Show answer</summary>

A recidivism prediction tool used by US courts. Found to falsely flag Black defendants as high-risk at **twice the rate** of white defendants. A landmark case of algorithmic bias with real legal consequences.

</details>

### Term: Model Drift
<details><summary>Show answer</summary>

Gradual degradation of a model's accuracy in production because **real-world data changes** over time (new user behaviour, market shifts, seasonal effects). Always monitor in production and schedule periodic retraining.

</details>

### Term: MLOps / LLMOps
<details><summary>Show answer</summary>

The discipline of **deploying, monitoring, and maintaining ML/LLM models in production**. Training is one-time; production requires handling drift, latency constraints, cost control, retraining triggers, and observability. A model in a notebook creates zero business value.

</details>

---

*End of glossary. For full exam questions, see [ai-exam-flashcards.md]. Study tip: cover all terms in a topic, then test yourself before moving on.*