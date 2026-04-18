# AI Exam Prep — 90 Questions
**Course: Master in Business · Applied AI Series**
*Format: 27 Fill-in-the-Gap · 27 Multiple Choice · 36 Smart Open/Applied Questions*
 
---
 
## PART 1 — FILL IN THE GAP (27 Questions)
*Complete each sentence with the correct term or phrase.*
 
---
 
**1.** The progression from narrow AI to human-level AI to superintelligence is described as the **ANI → _______ → ASI** spectrum.
 
**2.** Alan Turing's famous 1950 question — *"Can machines _______ ?"* — launched the field that became artificial intelligence.
 
**3.** The period after the 1956 Dartmouth Conference, when AI funding collapsed and enthusiasm died, is known as the AI _______.
 
**4.** DeepMind's AlphaGo defeated Lee Sedol in 2016, and its famous _______ 37 was a move no human would have played — yet turned out to be brilliant.
 
**5.** In 2012, _______ won the ImageNet competition by a historic margin, kick-starting the modern deep learning era.
 
**6.** A large language model predicts the _______ likely word in a sequence — which is why it can generate fluent but sometimes false text (hallucinations).
 
**7.** The LLM parameter that controls randomness and creativity is called _______ . A value of 0.0 produces deterministic output; a value near 1.0 produces varied, creative output.
 
**8.** _______ is a prompting technique where you show the model 2–3 input/output examples before your real request, often improving accuracy by 30–50%.
 
**9.** RAG stands for Retrieval _______ Generation, a technique that grounds LLM answers in your private documents to reduce hallucination.
 
**10.** In a neural network, the _______ function introduces non-linearity, allowing the network to learn curves and complex boundaries instead of just straight lines.
 
**11.** The most commonly used activation function in hidden layers — defined as max(0, x) — is called _______ .
 
**12.** The algorithm that adjusts every weight by calculating how much each one contributed to the error, using the chain rule of calculus, is called _______ .
 
**13.** In ML, when a model performs very well on training data but poorly on new data, the problem is called _______ .
 
**14.** _______ is a regularisation technique in deep learning where random neurons are switched off during training, forcing the network to learn redundant representations.
 
**15.** The optimizer that adapts the learning rate per parameter and is the default choice for 90% of deep learning projects is called _______ .
 
**16.** A _______ Neural Network (CNN) is the architecture best suited for image data because it learns spatial hierarchies of features through convolutional filters.
 
**17.** The Transformer architecture relies on a mechanism called _______ , which allows every token to simultaneously consider every other token in the sequence.
 
**18.** BERT is a Transformer model designed for _______ tasks (understanding context from both left and right), while GPT is designed for _______ generation.
 
**19.** The NLP technique of converting words into dense numeric vectors — where "King − Man + Woman ≈ Queen" — is called word _______ .
 
**20.** Under GDPR, replacing personal identifiers with a reversible key or token is called _______ and is still considered personal data. True irreversible removal of all identifiers is called _______ .
 
**21.** The EU AI Act defines _______ -risk AI systems — including those used in credit scoring, recruitment, and medical decisions — as requiring mandatory risk assessments and human oversight.
 
**22.** _______ is the EU regulation for financial institutions that mandates ICT risk management and incident reporting within specific timeframes (4 hours, 72 hours, 1 month).
 
**23.** In data architecture, _______ is the modern standard where raw data is loaded into a warehouse first, then transformed using tools like dbt — the opposite of the legacy ETL pattern.
 
**24.** A _______ is a machine-readable service-level agreement between a data producer team and a data consumer team, specifying schema, freshness, and quality guarantees.
 
**25.** _______ learning is a privacy-preserving ML approach where models are trained on-device so raw data never leaves the source.
 
**26.** In Computer Vision, _______ detection provides bounding boxes around objects with confidence scores, while _______ provides pixel-precise masks around each object.
 
**27.** The Computer Vision model architecture that replaced CNNs by applying self-attention to patches of an image is called the Vision _______ (ViT).
 
---
 
## PART 2 — MULTIPLE CHOICE (27 Questions)
*Select the single best answer.*
 
---
 
**28.** What is the primary difference between ANI and AGI?
 
- A) ANI uses neural networks; AGI uses rule-based systems
- B) ANI excels at one specific task; AGI can perform any intellectual task a human can
- C) ANI requires more data than AGI
- D) ANI is open-source; AGI is proprietary
 
**29.** According to the World Economic Forum data referenced in the course, what is the net job outlook from AI by the mid-2020s?
 
- A) 85 million jobs created, 97 million displaced — net loss
- B) 85 million jobs displaced, 97 million new jobs created — net gain
- C) Equal displacement and creation — net neutral
- D) 200 million jobs displaced with no replacement
 
**30.** Which of the following correctly describes a key difference between human and artificial intelligence according to the course materials?
 
- A) Humans require millions of examples to learn; AI can learn from one
- B) AI has genuine emotional intelligence; humans do not
- C) Humans can transfer knowledge across domains; current AI is largely task-specific
- D) AI reasoning is causal and analogical; human reasoning is statistical
 
**31.** What is the recommended LLM temperature setting for a compliance document analysis task?
 
- A) 0.8 — to allow creative interpretation
- B) 0.5 — balanced
- C) 0.1 — for maximum accuracy and consistency
- D) 1.0 — to generate varied perspectives
 
**32.** Which LLM family is described as offering the largest context window (1M tokens) and best Google Workspace integration?
 
- A) Claude (Anthropic)
- B) GPT-4o (OpenAI)
- C) Llama 3 (Meta)
- D) Gemini (Google)
 
**33.** A company needs to deploy an LLM for medical data analysis and must keep all data within EU jurisdiction. Which is the BEST choice according to the course?
 
- A) GPT-4o via OpenAI API
- B) Claude 3.5 Sonnet via Anthropic API
- C) Mistral Large or self-hosted Llama 3
- D) DeepSeek R1
 
**34.** What is the main advantage of RAG over fine-tuning for giving an LLM access to company knowledge?
 
- A) RAG produces higher-quality answers in all cases
- B) RAG is always cheaper to implement
- C) RAG keeps knowledge current and makes answers traceable to source documents
- D) RAG eliminates hallucination completely
 
**35.** In supervised machine learning, which algorithm is typically recommended FIRST for tabular/structured business data?
 
- A) Deep Neural Network
- B) XGBoost or Random Forest
- C) CNN
- D) Transformer
 
**36.** What does AUC-ROC measure in a machine learning classification model?
 
- A) The speed of model inference
- B) The model's ability to discriminate between classes across all classification thresholds
- C) The cost of running the model at scale
- D) The number of training epochs required
 
**37.** In the bank churn prediction case study, what preprocessing technique was used to handle the imbalanced dataset (8% churn rate)?
 
- A) PCA dimensionality reduction
- B) SMOTE oversampling
- C) Dropout regularisation
- D) K-fold cross-validation
 
**38.** According to the data-centric vs model-centric AI principle (Andrew Ng), which statement is correct?
 
- A) Increasing model complexity by 10% yields more ROI than improving data quality by 10%
- B) Improving data quality by 10% typically yields more ROI than increasing model complexity by 10%
- C) Both approaches produce equal ROI on average
- D) Model architecture is always the primary bottleneck
 
**39.** What is the role of the loss function in neural network training?
 
- A) It defines the architecture of hidden layers
- B) It measures how wrong the model's prediction is and provides the signal for weight updates
- C) It controls the learning rate during training
- D) It determines which activation function to use
 
**40.** Which activation function outputs a probability distribution summing to 1 and is used in multi-class output layers?
 
- A) ReLU
- B) Sigmoid
- C) Softmax
- D) GELU
 
**41.** In the Transformer architecture, what problem does the self-attention mechanism specifically solve?
 
- A) It reduces computation time compared to fully connected layers
- B) It enables the model to understand long-range dependencies and resolve ambiguity in language
- C) It replaces the need for training data
- D) It prevents overfitting in deep networks
 
**42.** What is the key architectural difference between BERT and GPT?
 
- A) BERT uses convolutions; GPT uses recurrence
- B) BERT is encoder-only (bidirectional context); GPT is decoder-only (left-to-right generation)
- C) BERT is open-source; GPT is proprietary
- D) BERT processes images; GPT processes text
 
**43.** According to the NLP course, what is the hallucination rate reduction when using RAG with source citation versus a standard LLM?
 
- A) From ~50% to ~10%
- B) From ~15% to under 2%
- C) From ~30% to ~15%
- D) RAG does not reduce hallucination
 
**44.** Under the EU AI Act, what is the maximum penalty for high-risk AI violations?
 
- A) €10M or 2% of global annual revenue
- B) €20M or 4% of global annual revenue
- C) €30M or 6% of global annual revenue
- D) €50M or 10% of global annual revenue
 
**45.** In Computer Vision, which task provides pixel-precise boundaries around each object (not just bounding boxes)?
 
- A) Object Classification
- B) Object Detection
- C) Instance Segmentation
- D) Object Tracking
 
**46.** What year did AlexNet win the ImageNet competition and trigger the deep learning revolution in computer vision?
 
- A) 2007
- B) 2012
- C) 2016
- D) 2020
 
**47.** According to the course, what is the typical annotation cost difference between labelling 10,000 images for classification versus segmentation?
 
- A) Same cost
- B) Classification ~€1,000; Segmentation €15,000–€40,000
- C) Classification ~€5,000; Segmentation €10,000
- D) Segmentation is cheaper because it's automated
 
**48.** Which data architecture pattern decentralises data ownership so domain teams own their own data products, rather than a central team owning all data?
 
- A) Data Warehouse
- B) Data Lake
- C) Data Mesh
- D) Data Fabric
 
**49.** In the ETL vs ELT debate, which is described as the modern standard?
 
- A) ETL — transform before loading into the warehouse
- B) ELT — load raw first, transform in the warehouse with tools like dbt
- C) Neither — batch processing is always preferred
- D) They are equivalent; the choice depends only on cost
 
**50.** What does GDPR Article 22 give individuals the right to in the context of automated AI decisions?
 
- A) The right to be forgotten
- B) The right to an explanation for automated decisions affecting them
- C) The right to data portability
- D) The right to opt out of all data collection
 
**51.** Which open table format is recommended in the course as a portability guarantee that prevents vendor lock-in in data infrastructure?
 
- A) Parquet
- B) CSV
- C) Apache Iceberg
- D) Avro
 
**52.** What is the typical ROI range for well-scoped enterprise NLP projects in their first year?
 
- A) 50–100%
- B) 100–200%
- C) 300–800%
- D) Over 2,000%
 
**53.** According to the Build vs Buy vs Prompt decision framework, what should almost always be tried FIRST when starting an NLP project?
 
- A) Fine-tune an open-source model
- B) Train a model from scratch
- C) Engineer a well-crafted prompt with an LLM API
- D) Purchase an enterprise SaaS NLP tool
 
**54.** The global AI market was valued at approximately $250 billion in 2025 and is projected to reach what value by 2030?
 
- A) $500 billion
- B) $800 billion
- C) $1.8 trillion
- D) $5 trillion
 
---
 
## PART 3 — SMART APPLIED QUESTIONS (36 Questions)
*These questions test strategic reasoning, application, and critical thinking — the style expected in the final exam.*
 
---
 
### Section A: Strategy & Business Reasoning
 
**55.** A retail bank wants to automate customer support using an LLM. The compliance team is concerned about GDPR. List **three specific technical measures** you would implement before go-live to address their concerns.
 
**56.** A CEO asks: *"We have €500K budget and want to use AI to reduce contract review time by 90%. Where do we start?"* Walk through the decision — which NLP approach(es) would you recommend and why?
 
**57.** Your data science team recommends building a deep neural network to predict customer churn from a CRM dataset of 50,000 rows and 20 features. Do you agree or disagree? Justify your answer using the decision framework from the course.
 
**58.** Explain the competitive moat concept in AI: *why is the model itself not the moat, and what is?* Give a concrete example.
 
**59.** A startup is choosing between using GPT-4o via API and fine-tuning Llama 3 on their own servers. What **three key questions** should determine this decision?
 
**60.** The WEF predicts 85 million jobs displaced and 97 million new jobs created by AI. A board member asks: *"So we have nothing to worry about?"* What is the nuanced response a business leader should give?
 
**61.** A company's cloud data bill jumped 40% last month. Using the FinOps framework, describe **three things** you would investigate first.
 
**62.** Describe the difference between a **Data Mesh** and a **Data Fabric** approach. When would you recommend each?
 
---
 
### Section B: Technical Reasoning (No Code Required)
 
**63.** Explain, in plain language for a CFO, why ELT replaced ETL as the modern standard. What is the business case for switching from a €300K/year Informatica licence to dbt + Airbyte?
 
**64.** A neural network achieves 99% training accuracy but only 63% test accuracy. What is the problem, and what are **two techniques** to fix it?
 
**65.** Explain the gradient descent analogy. Why is the learning rate a critical hyperparameter? What happens if it is too large or too small?
 
**66.** Why does deep learning outperform classical ML on images but classical ML (e.g., XGBoost) often outperforms deep learning on tabular data? Connect your answer to feature engineering.
 
**67.** Explain how the attention mechanism resolves the pronoun ambiguity in *"The trophy didn't fit in the suitcase because it was too big."* What does this tell us about how Transformers understand language differently from older RNN models?
 
**68.** A colleague proposes using a sentiment analysis model trained on English Amazon reviews to classify customer complaints in German. Identify **two specific risks** and propose a mitigation for each.
 
**69.** What is the difference between semantic segmentation and instance segmentation in Computer Vision? Give one business use case where each is the right choice.
 
**70.** Explain the concept of transfer learning and why it is transformative for practical AI deployment. What is the analogy used in the NLP course?
 
**71.** A company wants to deploy a computer vision system to detect safety helmet compliance on a construction site. Walk through the **CV task type** you would choose and **why**, considering cost and annotation effort.
 
**72.** Explain pseudonymisation vs anonymisation under GDPR. Why does the legal difference matter for a data team that wants to share a customer dataset with a marketing agency?
 
---
 
### Section C: AI Ethics, Risk & Governance
 
**73.** A credit scoring model is found to systematically assign lower creditworthiness to applicants with non-German names — even with identical financial profiles. Identify the root cause of this bias and describe **two steps** to detect and mitigate it.
 
**74.** Explain the concept of **explainability** in ML. Why does GDPR Article 22 create a legal obligation for explainability in automated decision systems? Name one technical tool that helps provide explanations.
 
**75.** A medical AI company deploys an image classification model to detect cancer with 95% accuracy. The hospital's legal team asks: *"Can you explain why the model flagged this patient?"* What challenge does this raise and what architecture/technique addresses it?
 
**76.** Under the EU AI Act, which AI applications are classified as **high-risk**? Why does this classification matter for a business deploying AI in HR (e.g., CV screening)?
 
**77.** A bank is migrating its on-premises Oracle data warehouse to Snowflake. What **five questions** should be asked about lock-in, data residency, ETL migration, cost at scale, and EU AI Act compliance before signing?
 
**78.** Explain what **differential privacy** is and why it is used instead of simple anonymisation when training ML models on sensitive data.
 
---
 
### Section D: Synthesis & Leadership
 
**79.** You are advising a European retail bank that wants to deploy real-time AI for loan approval. List the **three highest-risk failure points** in their data and AI architecture, and explain why each is high-risk.
 
**80.** A division president is frustrated that the central data team takes 6 weeks to deliver any new dataset. You propose Data Mesh. What **organisational changes** are required — and why is technology the last thing to decide?
 
**81.** Compare the **open-source LLM** strategy (e.g., Llama 3) vs the **enterprise API** strategy (e.g., GPT-4o, Claude). For a European mid-size company with strong data privacy requirements, which would you recommend and why?
 
**82.** The course states: *"Algorithms are commoditised. The company with better, cleaner, and richer proprietary data wins long-term."* Do you agree? Construct an argument for AND against this claim.
 
**83.** Describe the full lifecycle of a machine learning project from business problem to production deployment. Use the bank churn case study as your reference. What went wrong and what was the lesson?
 
**84.** A CTO proposes building a real-time Kafka streaming pipeline for customer analytics. What questions determine whether it is actually necessary — and what is the business cost of getting it wrong?
 
**85.** A startup wants to build an AI-powered product in the hiring space (CV screening + interview assessment). Using the EU AI Act framework, what are the **compliance requirements** they must meet before launching in Europe?
 
**86.** Explain the concept of **LLMOps/MLOps** in one paragraph. Why is deploying an ML model to production fundamentally different from training one — and what does a business leader need to understand about model monitoring?
 
**87.** You are pitching an AI initiative to your board. Structure a 5-point business case that covers: (1) the problem, (2) the AI approach, (3) the data requirements, (4) the risks, and (5) the ROI calculation method.
 
**88.** Explain the difference between **supervised**, **unsupervised**, and **reinforcement learning**. For each, give one concrete business application from the course material.
 
**89.** The course teaches that *"compliance is architecture"* — meaning GDPR, EU AI Act, DORA, and sector regulations impose specific technical requirements. Explain what this means in practice for a team designing a new data pipeline.
 
**90.** Imagine it is 2030. AGI has been achieved. Write a 5-sentence strategic recommendation to a European business leader about how to position their company for the AI-transformed economy — drawing on the themes of the course (governance, data assets, human-AI collaboration, ethics, and competitive moats).
 
---
 
## ANSWER GUIDE — Fill in the Gap (Part 1)
 
| Q | Answer |
|---|--------|
| 1 | AGI |
| 2 | think |
| 3 | Winter(s) |
| 4 | Move |
| 5 | AlexNet |
| 6 | next |
| 7 | Temperature |
| 8 | Few-shot (prompting) |
| 9 | Augmented |
| 10 | Activation |
| 11 | ReLU (Rectified Linear Unit) |
| 12 | Backpropagation |
| 13 | Overfitting |
| 14 | Dropout |
| 15 | Adam |
| 16 | Convolutional (CNN) |
| 17 | Self-attention |
| 18 | understanding / text |
| 19 | Embeddings |
| 20 | Pseudonymisation / Anonymisation |
| 21 | High |
| 22 | DORA |
| 23 | ELT |
| 24 | Data Contract |
| 25 | Federated |
| 26 | Object / Instance Segmentation |
| 27 | Transformer |
 
## ANSWER GUIDE — Multiple Choice (Part 2)
 
| Q | Answer | Q | Answer |
|---|--------|---|--------|
| 28 | B | 42 | B |
| 29 | B | 43 | B |
| 30 | C | 44 | C |
| 31 | C | 45 | C |
| 32 | D | 46 | B |
| 33 | C | 47 | B |
| 34 | C | 48 | C |
| 35 | B | 49 | B |
| 36 | B | 50 | B |
| 37 | B | 51 | C |
| 38 | B | 52 | C |
| 39 | B | 53 | C |
| 40 | C | 54 | C |
| 41 | B | | |
 
---
 
*Good luck — trust the process, not just the slides. The best answers in the smart questions will show you can connect concepts, not just recall them.*