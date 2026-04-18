# Course 5 Neural Network and Deep Learning (1)

Neural Networks & Deep Learning – CODE University

* { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #0d0d1a; font-family: 'Segoe UI', sans-serif; color: #e2e8f0; display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding-bottom: 20px; }

#nav { width: 960px; max-width: 98vw; display: flex; align-items: center; justify-content: space-between; padding: 12px 0; }

#nav button { background: rgba(124,58,237,.15); border: 1px solid rgba(124,58,237,.4); color: #c4b5fd; padding: 7px 22px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all .2s; }

#nav button:hover { background: #7c3aed; border-color: #7c3aed; color: #fff; }

#nav button:disabled { opacity: 0.25; cursor: default; }

#counter { font-size: 13px; color: #7c3aed; font-weight: 700; letter-spacing: 1px; }

.slide-wrap { width: 960px; max-width: 98vw; }

.slide { width: 100%; aspect-ratio: 16/9; background: #111827; border: 1px solid rgba(124,58,237,.25); border-radius: 14px; overflow: hidden; display: none; flex-direction: column; box-shadow: 0 0 60px rgba(124,58,237,.15), 0 4px 24px rgba(0,0,0,.6); }

.slide.active { display: flex; }

.hdr { padding: 13px 28px 9px; border-bottom: 1px solid rgba(255,255,255,.07); background: rgba(255,255,255,.03); }

.tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #a78bfa; margin-bottom: 3px; }

.title { font-size: 18px; font-weight: 800; color: #f1f5f9; line-height: 1.2; }

.sub { font-size: 10.5px; color: #94a3b8; margin-top: 2px; }

.body { flex: 1; padding: 10px 28px; display: flex; gap: 14px; overflow: hidden; }

.foot { padding: 5px 28px; border-top: 1px solid rgba(255,255,255,.06); display: flex; justify-content: space-between; background: rgba(0,0,0,.2); }

.fl { font-size: 9px; font-weight: 700; letter-spacing: 1px; color: #7c3aed; }

.fn { font-size: 9px; color: #475569; }

.col { flex: 1; display: flex; flex-direction: column; gap: 6px; }

.col2 { flex: 2; }

strong { color: #e2e8f0; }

.card { border-radius: 9px; padding: 8px 11px; border: 1px solid; }

.card.p { border-color: rgba(167,139,250,.3); background: rgba(124,58,237,.1); }

.card.b { border-color: rgba(96,165,250,.3); background: rgba(59,130,246,.1); }

.card.g { border-color: rgba(52,211,153,.3); background: rgba(16,185,129,.1); }

.card.a { border-color: rgba(251,191,36,.3); background: rgba(245,158,11,.1); }

.card.r { border-color: rgba(248,113,113,.3); background: rgba(239,68,68,.1); }

.card.d { border-color: rgba(255,255,255,.1); background: rgba(255,255,255,.04); }

.ct { font-size: 10px; font-weight: 700; margin-bottom: 3px; color: #f1f5f9; }

.cd { font-size: 10.5px; color: #94a3b8; line-height: 1.45; }

ul.L { list-style: none; display: flex; flex-direction: column; gap: 4px; }

ul.L li { font-size: 11px; line-height: 1.4; padding-left: 14px; position: relative; color: #cbd5e1; }

ul.L li::before { content: '▸'; position: absolute; left: 0; color: #7c3aed; font-size: 9px; top: 2px; }

.tbl { width: 100%; border-collapse: collapse; font-size: 10px; }

.tbl th { background: rgba(124,58,237,.2); color: #c4b5fd; padding: 5px 8px; text-align: left; border: 1px solid rgba(124,58,237,.2); font-weight: 700; font-size: 9px; letter-spacing: .5px; }

.tbl td { padding: 4px 8px; border: 1px solid rgba(255,255,255,.06); vertical-align: top; color: #cbd5e1; font-size: 10px; }

.tbl tr:nth-child(even) td { background: rgba(255,255,255,.03); }

.bdg { display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 9px; font-weight: 700; margin: 1px; }

.bdg.p { background: rgba(124,58,237,.25); color: #c4b5fd; border: 1px solid rgba(124,58,237,.4); }

.bdg.b { background: rgba(59,130,246,.25); color: #93c5fd; border: 1px solid rgba(59,130,246,.4); }

.bdg.g { background: rgba(16,185,129,.25); color: #6ee7b7; border: 1px solid rgba(16,185,129,.4); }

.bdg.a { background: rgba(245,158,11,.25); color: #fde68a; border: 1px solid rgba(245,158,11,.4); }

.bdg.r { background: rgba(239,68,68,.25); color: #fca5a5; border: 1px solid rgba(239,68,68,.4); }

.hl { background: rgba(124,58,237,.12); border: 1px solid rgba(124,58,237,.3); border-radius: 8px; padding: 7px 11px; font-size: 10.5px; color: #cbd5e1; }

.lbl { font-size: 8.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #64748b; margin-bottom: 3px; margin-top: 2px; }

.tl { display: flex; flex-direction: column; gap: 5px; }

.tli { display: flex; gap: 8px; align-items: flex-start; }

.tld { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; flex-shrink: 0; margin-top: 1px; color: #fff; }

svg text { font-family: 'Segoe UI', sans-serif; }

/* TITLE SLIDE */

.ts { background: radial-gradient(ellipse at 20% 50%, #1a0533 0%, #0d0d1a 60%); position: relative; overflow: hidden; }

.ts::before { content: ''; position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,.15) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; }

.ts-c { display: flex; flex-direction: column; height: 100%; padding: 30px 50px; justify-content: center; position: relative; z-index: 1; }

.ts-tag { font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #a78bfa; margin-bottom: 8px; }

.ts-main { font-size: 36px; font-weight: 900; line-height: 1.05; color: #f8fafc; }

.ts-main span { background: linear-gradient(90deg, #a78bfa, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.ts-sub { font-size: 13px; color: #64748b; margin-top: 8px; }

.ts-inst { margin-top: 20px; display: flex; align-items: center; gap: 12px; }

.av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,#7c3aed,#ec4899); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: #fff; }

.ts-nm { font-size: 13px; font-weight: 700; color: #f1f5f9; }

.ts-rl { font-size: 10px; color: #64748b; }

.ts-logo { margin-top: 14px; font-size: 9px; font-weight: 700; letter-spacing: 2px; color: #7c3aed; border: 1px solid rgba(124,58,237,.4); display: inline-block; padding: 3px 10px; border-radius: 4px; }

.ts-pills { position: absolute; right: 50px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 8px; z-index: 1; }

.tsp { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 12px; padding: 5px 14px; font-size: 10px; color: #94a3b8; }

.tsp span { color: #a78bfa; font-weight: 700; }

/* SECTION SLIDE */

.ss { background: linear-gradient(135deg, #0d0d1a 0%, #1e1042 100%); }

.ss-c { display: flex; flex-direction: column; height: 100%; padding: 0 50px; justify-content: center; }

.ss-n { font-size: 80px; font-weight: 900; color: rgba(124,58,237,.15); line-height: 1; font-variant-numeric: tabular-nums; }

.ss-t { font-size: 30px; font-weight: 900; margin-top: -10px; color: #f8fafc; }

.ss-sub-t { font-size: 13px; background: linear-gradient(90deg,#a78bfa,#ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700; margin-top: 2px; }

.ss-d { font-size: 12px; color: #64748b; margin-top: 6px; max-width: 500px; }

.ss-tags { display: flex; gap: 5px; margin-top: 12px; flex-wrap: wrap; }

.ss-tags .bdg { background: rgba(124,58,237,.15); color: #c4b5fd; border-color: rgba(124,58,237,.3); }

.glow { box-shadow: 0 0 20px rgba(124,58,237,.3); }

.big-emoji { font-size: 28px; line-height: 1; margin-bottom: 4px; }

.code-block { background: #0d1117; border: 1px solid rgba(124,58,237,.25); border-radius: 8px; padding: 8px 12px; font-family: 'Consolas', monospace; font-size: 9.5px; line-height: 1.7; color: #e2e8f0; }

.stat-box { text-align: center; background: rgba(124,58,237,.1); border: 1px solid rgba(124,58,237,.25); border-radius: 10px; padding: 8px; }

.stat-n { font-size: 22px; font-weight: 900; color: #a78bfa; line-height: 1; }

.stat-l { font-size: 9px; color: #64748b; margin-top: 2px; }

← Prev

1 / 35

Next →

CODE University of Applied Sciences · Berlin

Neural Networks &

Deep Learning

We are building new brains — from biology to artificial intelligence

F

Firas Ben Hassan

AI Guest Lecturer

CODE UNIVERSITY OF APPLIED SCIENCES

35

Slides

3-Hour

Deep Dive

No

Prior ML Needed

Beginner Friendly

AI-Generated

+ Human-Reviewed

The Big Picture

We Are Building New Brains

The most ambitious engineering project in human history

🧠

The Human Brain

~86 billion neurons

~100 trillion connections

3 watts of power

Took evolution 500M years

🤖

GPT-4 / Claude

~1 trillion parameters

Billions of connections

Megawatts of power

Built in ~5 years

💡 The Central Metaphor

We didn't

program

these systems with rules. We gave them

data

and let them

learn

— just like a child learns to recognise a cat not from a rule-book, but from seeing thousands of cats.

🚀 Why Now?

Three forces converged in the 2010s:

① Data

— the internet created petabytes of labelled examples

② Compute

— GPUs made matrix math 1000× faster

③ Algorithms

— backprop, transformers, attention

📌 Today's Promise

By end of this course, you'll understand

exactly

how these "new brains" are built — and how to use them in business.

CODE · NEURAL NETWORKS & DEEP LEARNING

2 / 35

Course Overview

Your Journey Today — 5 Blocks, 35 Slides

Block 0 · 20min

Why neural networks? From stats models to deep learning.

Block 1 · 30min

What IS a Neural Network? Neurons, layers, activation.

Block 2 · 35min

Training: Loss, Backprop, Optimisers, Regularisation.

Block 3 · 35min

Architectures: CNN, RNN, LSTM, Transformer. Data needs.

Block 4 · 30min

Business ROI, Responsible AI, Bias, Deployment.

By the end you will…

Understand the

evolution

from linear regression → deep learning

Know which architecture (CNN, RNN, Transformer) fits which data type

Grasp training: loss, backprop, overfitting — intuitively

Know how to deploy a model and measure its ROI

Recognise bias and fairness challenges in real AI systems

⚠️ Transparency Statement

"

100% of these slides were generated by AI and reviewed by a human expert.

" This course is itself a live demonstration of AI applied thoughtfully to education.

AI-Generated

Human-Reviewed

CODE · NEURAL NETWORKS & DEEP LEARNING

3 / 35

00

Why Neural Networks?

The evolution from statistics to deep learning

Understanding where neural networks come from — and why classical methods weren't enough.

Linear Regression

KNN

SVM

Decision Trees

Why DL wins

Evolution · Classical ML

The Statistics-to-ML Timeline

Every modern AI algorithm has roots in statistics from decades ago

📐

1800s — Linear Regression

Gauss & Legendre. Fit a line to data. Predict house prices, crop yields. Still used daily in business. Works great on

linear

problems.

🔷

1960s — KNN & Logistic Regression

KNN: "find the k most similar examples". Logistic: predict probability of a class. Simple, interpretable, still taught in every MBA.

🌳

1980s–90s — Decision Trees & SVMs

Decision Trees: if-then rules the computer learns. SVMs: find the best boundary between classes. XGBoost (ensemble of trees) still dominates tabular data in 2024.

🧠

1986–2012 — Early Neural Networks

Backprop invented (Rumelhart). Perceptrons gain hidden layers. BUT — not enough data, not enough compute. "AI winter" strikes.

🚀

2012–Now — Deep Learning Explosion

AlexNet wins ImageNet by a landslide using GPU-trained deep CNN. Transformers arrive 2017. ChatGPT 2022. We are here.

🤔 So why not just use Linear Regression?

Linear regression predicts:

y = w·x + b

What if the relationship is

not

a line? What if predicting tumour type from 512×512 pixel MRI scans? That's 262,144 input features with non-linear interactions.

Classical models break. Deep learning thrives.

⚠️ Key Limitation of Classical ML

Feature engineering

— a human expert must manually tell the model which features matter. For images, text, audio → impossible to do manually at scale.

💡 Deep Learning's superpower:

It learns its own features automatically from raw data.

CODE · NEURAL NETWORKS & DEEP LEARNING

5 / 35

Evolution · Why DL?

Classical ML vs Deep Learning — Head to Head

It's not a competition — it's knowing which tool fits which job

Aspect

Classical ML (KNN, SVM, XGBoost…)

Deep Learning (CNN, Transformer…)

Data needed

Works with 100s–10,000s rows

Usually needs 10,000s–millions

Feature engineering

Manual — domain expert defines features

Automatic — model learns features

Structured/tabular data

✅ Excellent (XGBoost wins Kaggle)

⚠️ Often overkill

Images

❌ Very poor

✅ State of the art

Text / Language

⚠️ Bag-of-words, TF-IDF — limited

✅ Transformers dominate

Time series

✅ Good (ARIMA, XGBoost)

✅ LSTM/Transformers excel on complex sequences

Interpretability

✅ Usually explainable

⚠️ "Black box" — needs XAI tools

Compute cost

✅ CPU, seconds

⚠️ GPU, hours/days to train

Performance ceiling

📉 Plateaus with more data

📈 Keeps improving with more data

📈 The Scaling Insight

Classical ML: performance plateaus no matter how much data you add.

Deep Learning: performance

keeps rising

as data and compute grow. This is why Google, Meta, OpenAI keep making models bigger.

🎯 Decision Rule

Tabular data, small dataset

→ XGBoost first

Images / Video / Audio

→ Deep Learning

Text / Language

→ Transformers / LLMs

Time series

→ Try both

CODE · NEURAL NETWORKS & DEEP LEARNING

6 / 35

Data Types

Different Data → Different AI Brains

The architecture you choose is driven by the nature of your data

🖼️

Images

Pixels arranged in a 2D grid. Spatial relationships matter. Cat in corner = cat in center = same cat.

CNN

ViT

🎬

Video

Images across time. Spatial + temporal patterns. Very data hungry. 30fps × hours = enormous.

3D-CNN

Vision Transformer

🗣️

Audio / Voice

Sound wave → spectrogram (image-like). Order and timing are crucial.

CNN on spectrogram

Whisper

📝

Text / Language

Sequences of tokens. Meaning depends on context. "bank" = river or finance?

Transformer

BERT/GPT

📊

Tabular / Structured

Rows and columns. Sales data, medical records. Relationships less spatial.

XGBoost first

TabNet (DL)

🖼️ How Much Data for Images?

From scratch: 100K+ images per class. With transfer learning: as few as

200–500 images

per class can work well.

📝 How Much Data for Text?

Fine-tuning an LLM:

500–5,000 examples

can achieve expert-level performance. Pre-training from scratch: billions of tokens.

🎬 How Much Data for Video?

Very expensive to label. Transfer from image models helps. Production systems use

millions of clips

— hence YouTube/TikTok advantage.

CODE · NEURAL NETWORKS & DEEP LEARNING

7 / 35

01

What is a Neural Network?

Inspired by the brain — built from math

Neurons, layers, weights, activation functions. The building blocks of every AI model.

Neurons

Layers

Weights

Activation Functions

Perceptrons

Foundations

Biological vs Artificial Neurons

The brain has ~86 billion neurons. A deep learning model has millions of artificial ones.

Biological Neuron

Nucleus

Dendrites

(Inputs)

Axon

Synapses

(Outputs)

Receives signals via

dendrites

→ processes in nucleus → fires output along

axon

if signal is strong enough. This

"fire or not"

principle is the direct inspiration for artificial neurons.

Artificial Neuron (Perceptron)

x₁ = 0.8

x₂ = 0.3

x₃ = 0.5

w₁=0.6

w₂=0.9

w₃=0.2

Σ then

activate

0.82

Inputs × Weights → Sum → Activation → Output

Each input is multiplied by a

weight

(the synapse strength), summed, then passed through an

activation function

. The weights are exactly what the network

learns

during training.

CODE · NEURAL NETWORKS & DEEP LEARNING

9 / 35

Foundations

Activation Functions — The Spark of Intelligence

Without them, a neural network is just a fancy linear equation — useless for complex problems

A neuron's raw sum can be any number — activation

shapes

the output

Non-linearity

lets networks learn curves, patterns, and complex boundaries

This is what separates deep learning from linear regression!

ReLU — Rectified Linear Unit

Output = max(0, x). Negative → 0, positive → keeps value.

Most popular

for hidden layers. Fast to compute. The default choice.

Sigmoid

Squashes output to (0,1). Perfect for

binary classification

output — "70% probability it's a cat".

Softmax

Converts outputs to probabilities summing to 1. Used in

multi-class output layers

(e.g. cat 60%, dog 30%, bird 10%).

GELU / SiLU

Smooth versions of ReLU. Used in modern Transformers (GPT, BERT). Slightly better performance in large models.

ReLU

Sigmoid

Tanh

GELU

input x →

output

CODE · NEURAL NETWORKS & DEEP LEARNING

10 / 35

Foundations

Layers & Network Architecture

Stack neurons into layers — stack layers into a "deep" network

Input Layer

x₁

x₂

x₃

x₄

Hidden Layer 1

Hidden Layer 2

Output Layer

Cat

Dog

Every neuron connects to every neuron in the next layer → "Fully Connected" or "Dense" layer

Input layer

— raw data (pixels, numbers, word embeddings)

Hidden layers

— learn increasingly abstract features

Output layer

— final prediction or class probabilities

Deep

= more than one hidden layer

📌 The Layer Abstraction Analogy

For an image of a face:

Layer 1 → detects edges

Layer 2 → combines edges into eyes, noses

Layer 3 → combines features into face structure

Layer 4 → "Is this person happy?"

💡 "Deep"

in Deep Learning refers to the

number of layers

, not the complexity of the math. More layers = more abstract understanding.

CODE · NEURAL NETWORKS & DEEP LEARNING

11 / 35

02

Training a Neural Network

How does a machine actually learn?

Loss functions, backpropagation, gradient descent, optimisers, regularisation.

Loss Functions

Backpropagation

Gradient Descent

Adam

Regularisation

Training

The Loss Function — How Wrong Are We?

Training = minimising the gap between predictions and reality

What is a Loss Function?

A number that measures how

wrong

the model's prediction is. The entire goal of training is to make this number as small as possible.

🎯 Perfect prediction → Loss = 0

❌ Very wrong prediction → Loss is high

Common Loss Functions

Mean Squared Error (MSE) — Regression

Average of squared differences between predicted and actual values. Heavily penalises big errors. Use for: house price prediction.

Cross-Entropy Loss — Classification

Measures how far predicted probabilities are from true labels. Standard for classification. Use for: image recognition, spam detection.

Intuition: Golf Analogy

⛳ Hole (True Label)

Ball A

Loss = HIGH

Ball B

Loss = low

📌 Business Meaning

Loss is your model's error signal. Reducing it on training data is the entire point of learning — but beware reducing it

only

on training data (overfitting).

CODE · NEURAL NETWORKS & DEEP LEARNING

13 / 35

Training

Backpropagation — The Learning Engine

The algorithm that adjusts every weight to reduce the loss

1

Forward Pass

Feed data through the network, get a prediction.

2

Calculate Loss

Compare prediction to correct answer. Measure the error.

3

Backward Pass (Backprop)

Use calculus (chain rule) to calculate how much each weight contributed to the error — propagate backward through every layer.

4

Update Weights

Nudge each weight slightly in the direction that reduces loss (gradient descent).

5

Repeat for thousands of batches

Until loss converges. One full pass through all data = one "epoch".

Gradient Descent — The Mountain Analogy

Weight value →

Loss

Start

Minimum ✓

Analogy:

You're blindfolded on a hilly landscape. You feel the slope under your feet and take a small step downhill. Repeat until you reach the valley — the lowest loss = best weights.

CODE · NEURAL NETWORKS & DEEP LEARNING

14 / 35

Training

Optimisers & Regularisation

Train faster, generalise better

Optimisers — Smarter Descent

SGD — Stochastic Gradient Descent

Updates weights after each batch. Noisy but fast. The classic baseline.

⭐ Adam — Adaptive Moment Estimation

Adapts the learning rate per parameter.

Default choice for 90% of projects.

Start here, always.

Learning Rate — The Step Size

Too large → overshoot. Too small → takes forever.

Rule: start Adam at 0.001.

Regularisation — Prevent Memorisation

⚠️ Overfitting

Training accuracy: 99% → Test accuracy: 62%. The model memorised training data instead of learning patterns.

Dropout

Randomly "switches off" % of neurons during training. Forces redundant, robust representations. Most effective DL regulariser.

Early Stopping + Batch Norm

Stop when validation loss starts rising (early stopping). Normalise layer inputs for stable, faster training (batch norm).

Golden Rule:

Always use Dropout + Early Stopping. They're free and almost always help.

CODE · NEURAL NETWORKS & DEEP LEARNING

15 / 35

03

Architectures

The right brain for the right data

CNN for images, RNN/LSTM for sequences, Transformers for language. Plus an overview of ALL major architectures.

CNN

RNN

LSTM

Transformer

GAN

Diffusion

RL

Architectures · Overview

The Deep Learning Architecture Zoo

Every major architecture — what it does and when to use it

🖼️

CNN

Convolutional Neural Network. Slides filters over images. Detects patterns regardless of position.

Images

Video

🔄

RNN / LSTM / GRU

Recurrent networks with memory. Process sequences step by step. Handle time and order.

Time series

Speech

⚡

Transformer

Self-attention mechanism. Processes all tokens simultaneously. Foundation of all modern LLMs.

Text

Code

Multimodal

🎨

GAN

Generative Adversarial Network. Two networks compete: generator vs discriminator. Creates realistic fakes.

Image generation

Deepfakes

🌫️

Diffusion Models

Add then remove noise. Learn to "denoise" images. Basis of Stable Diffusion, DALL-E, Midjourney.

Image synthesis

🎮

Reinforcement Learning

Agent learns by reward/penalty. Trial and error at scale. Beat world champions at Go and Chess.

Robotics

Games

🔀

Autoencoder / VAE

Compresses data into a small "latent space" then reconstructs it. Anomaly detection, compression, generation.

Anomaly

Compression

🕸️

Graph Neural Network

Process data as graphs. Nodes + edges. Used in drug discovery, social networks, fraud detection.

Molecules

Fraud

CODE · NEURAL NETWORKS & DEEP LEARNING

17 / 35

Architectures · CNN

Convolutional Neural Networks (CNNs)

The architecture that taught computers to see — and changed the world in 2012

Standard networks treat an image as a flat list of pixels — losing all spatial structure

CNNs use

convolutional filters

that slide across the image — like a magnifying glass scanning for patterns

Each filter learns one specific pattern: an edge, a curve, a colour gradient

Deeper layers combine simple features into complex objects

Much fewer parameters than fully-connected — efficient and translation-invariant

Key Operations

Convolutional Layer

— apply filters to detect features

Pooling Layer

— downsample, reduce spatial size

Fully Connected

— final classification from extracted features

📊 Data Needs for CNNs

From scratch: 50,000–1M+ labelled images

Transfer learning: 200–5,000 images ✅

Data augmentation: flip, rotate, crop to 10× your data

🐱

Input 224×224

Conv filters

Pool

Pooling

Conv+Pool

FC

🐱 Cat 94%

🐶 Dog 6%

Edges → Shapes → Objects → Classification

Architecture

Year

Famous For

AlexNet

2012

Launched the DL era — won ImageNet

ResNet

2015

Skip connections — 152 layers deep

EfficientNet

2019

Best accuracy per parameter

Vision Transformer

2021

Attention replaces convolutions

CODE · NEURAL NETWORKS & DEEP LEARNING

18 / 35

Architectures · RNN/LSTM

RNNs & LSTMs — Networks with Memory

For sequences — text, time series, speech. Order matters.

⚠️ Problem: Standard Networks Have No Memory

"The cat sat on the ___" — to predict "mat", the model needs memory of earlier words. A standard feedforward network treats each input independently.

RNN — Recurrent Neural Network

Has a

hidden state

that carries information across time steps. Each step: new input + previous hidden state → new output.

LSTM — Long Short-Term Memory

Solves RNN's "forgetting" problem with 3 gates:

🚪 Forget:

discard old info

📥 Input:

store new info

📤 Output:

what to output now

📊 Data Needs for RNN/LSTM

Minimum ~5,000–50,000 sequences. More is better. Pre-trained models (Whisper for audio) slash requirements dramatically.

RNN Unrolled Through Time

RNN

"The"

h₁

RNN

"cat"

h₂

RNN

"sat"

h₃

→ ?

Hidden state carries context forward →

LSTM vs GRU

LSTM

GRU

Gates

3 (forget, input, output)

2 (reset, update)

Speed

Slower, more powerful

Faster, lighter

Use when

Long dependencies

Smaller datasets

CODE · NEURAL NETWORKS & DEEP LEARNING

19 / 35

Architectures · Transformer

Transformers & Self-Attention

"Attention is All You Need" — Vaswani et al., 2017. The paper that changed everything.

Problem with RNNs

Process tokens one by one → slow. Hard to parallelise. Struggle with very long sequences. "The student who passed the exam that the teacher who... was happy."

⭐ Self-Attention — The Big Idea

Each word looks at

every other word

simultaneously and asks: "How relevant are you to understanding

me

?"

"The

bank

by the

river

" ← bank = financial? NO

"The

bank

approved the

loan

" ← bank = financial? YES

Same word, different meaning — attention figures this out.

Fully parallelisable — trains 10–100× faster than RNNs on GPUs

Handles very long-range dependencies effortlessly

Foundation of GPT, BERT, Claude, Llama, Gemini — everything

Attention Visualisation

The

animal

didn't

cross

it

was

tired

← "it" attends strongly to "animal"

Line thickness = attention weight

Result: "it" refers to "animal" (not "street")

📊 Data Needs for Transformers

Pre-training from scratch: billions of tokens (only Google/OpenAI/Anthropic do this). Fine-tuning on your data:

500–50,000 examples

is usually enough.

CODE · NEURAL NETWORKS & DEEP LEARNING

20 / 35

Architectures · LLMs

From Transformers to Large Language Models

GPT, BERT, Claude, Gemini — all built on the same Transformer foundation

Transformer Family

Model

Type

Best For

BERT

Encoder

Understanding: classification, search, Q&A

GPT / Claude / Llama

Decoder

Generating text: chat, code, summarisation

T5 / BART

Encoder-Decoder

Translation, summarisation, formatting

CLIP / Flamingo

Multimodal

Image + text understanding together

Whisper (OpenAI)

Audio Encoder

Speech-to-text, 99 languages

What makes LLMs special?

Scale + pre-training. Trained on most of the internet → emergent abilities: reasoning, coding, translation — without being explicitly taught these tasks.

Business Applications Today

💬

Customer Support Bots

— resolve 70% of tickets automatically

📄

Contract Analysis

— extract clauses from 1,000 pages in seconds

📧

Email Drafting

— personalised outreach at scale

🔍

Semantic Search

— find documents by meaning, not keyword

🩺

Clinical Notes

— summarise patient records automatically

💻

Code Generation

— GitHub Copilot writes 40% of code at some companies

💡 2025 Reality:

Most enterprise NLP tasks can now be solved by calling an LLM API with a well-crafted prompt. No model training required. The moat is your data and your domain.

CODE · NEURAL NETWORKS & DEEP LEARNING

21 / 35

Architectures · Generative

Generative Models — Creating New Reality

GANs, Diffusion Models, VAEs — the architectures behind Midjourney, Sora, and voice cloning

🎨 GAN — Generative Adversarial Network

Two networks competing:

Generator

creates fake images from random noise

Discriminator

tries to detect fakes

They train together. Generator gets better and better at fooling the discriminator until the fakes are indistinguishable from real.

StyleGAN

DeepFakes

Face synthesis

⚠️ GAN Challenge: Training Instability

GANs are notoriously hard to train. Mode collapse, oscillation, sensitive to hyperparameters. Largely replaced by Diffusion Models for image generation.

🌫️ Diffusion Models — The New King

The idea is surprisingly elegant:

① Take a real image

② Gradually add Gaussian noise until it's pure static

③ Train a network to

reverse this process

④ At inference: start from random noise, denoise step by step → beautiful image

Stable Diffusion

DALL-E 3

Midjourney

Sora (video)

🔊 Audio Generation

Same diffusion principles applied to audio spectrograms → voice cloning, music generation (Suno, Udio). ElevenLabs clones a voice from 1 minute of audio.

CODE · NEURAL NETWORKS & DEEP LEARNING

22 / 35

Quick Reference

Architecture Selection Guide

Which model for which problem and how much data do you need?

Data Type

Architecture

Pre-trained Starting Point

Min Data (fine-tune)

Business Example

🖼️ Images

CNN / Vision Transformer

ResNet50, EfficientNet, ViT

200–5,000 images/class

Defect detection, medical imaging

🎬 Video

3D-CNN / Video Transformer

VideoMAE, TimeSformer

1,000–10,000 clips

Action recognition, security

🗣️ Audio/Voice

CNN on spectrogram / Whisper

Whisper, wav2vec2

1–10 hours labelled audio

Speech-to-text, speaker ID

📝 Text (understand)

Transformer Encoder

BERT, RoBERTa

500–5,000 labelled examples

Sentiment, classification, search

📝 Text (generate)

Transformer Decoder (LLM)

GPT-4, Claude, Llama 3

0 (prompt!) to 1,000 (fine-tune)

Chatbots, summarisation, drafting

📈 Time series

LSTM / Temporal Transformer

NHiTS, PatchTST

2–5 years of history

Demand forecasting, anomaly detection

🎨 Image generation

Diffusion Model

Stable Diffusion, DALL-E

200–1,000 style images (fine-tune)

Product visuals, marketing

📊 Tabular structured

❌ Not DL → use XGBoost

—

500–10,000 rows is fine

Credit scoring, churn prediction

🎯 Rule of thumb:

Unstructured data (image/text/audio/video) → Deep Learning. Structured/tabular data → try XGBoost first. Always start with a pre-trained model — never from scratch unless you have 1M+ labelled examples and serious GPU budget.

CODE · NEURAL NETWORKS & DEEP LEARNING

23 / 35

04

Practical Deep Learning

From idea to production in weeks, not years

Frameworks, transfer learning, deployment, and MLOps.

PyTorch

Hugging Face

Transfer Learning

MLOps

Deployment

Practical

Frameworks & Transfer Learning

You don't build from scratch — and you shouldn't train from scratch either

🔥 PyTorch

Developed by Meta. Dynamic graph — flexible, Pythonic, easy to debug.

Dominant in research and production.

🤗 Hugging Face

The "GitHub for AI models." 500,000+ pre-trained models. Load BERT, Whisper, Llama in 3 lines. Your default starting point for any NLP or audio task.

Minimal PyTorch Example

import

torch.nn

as

nn

model

= nn.Sequential(

nn.

Linear

(

784

,

256

),

nn.

ReLU

(),

nn.

Dropout

(

0.3

),

nn.

Linear

(

256

,

10

)

# That's a neural network! 🎉

Transfer Learning — The Big Shortcut

A ResNet trained on 14M ImageNet images has already learned

universal visual features

— edges, textures, shapes.

Take that model. Freeze early layers. Retrain only the final layer on your 500 medical images. Done in hours.

What to freeze?

Your dataset size

Strategy

< 1,000 examples

Freeze all, only train final layer

1K – 10K

Freeze early layers, fine-tune later

10K+

Fine-tune full network (low LR)

💡 Business Impact

Transfer learning reduces time-to-model from months to

days

and data requirements from millions to

hundreds

. It democratises deep learning for any company.

CODE · NEURAL NETWORKS & DEEP LEARNING

25 / 35

Practical · Deployment

From Notebook to Production

A model that isn't deployed creates zero business value

1

Export the Model

Save weights: .pt (PyTorch), ONNX (universal cross-platform)

2

Containerise

Docker image with model + dependencies. Runs anywhere — cloud, edge, on-prem.

3

Serve via API

FastAPI / TorchServe. POST image → GET prediction in <100ms.

4

Monitor in Production

Track latency, accuracy drift, data distribution shift. Models degrade silently.

⚠️ Common Production Failures

Model drift

— real-world data changes, accuracy degrades

Distribution shift

— training ≠ production data

Latency

— large models too slow for real-time use

Deployment Options

Option

Latency

Best For

Cloud API (AWS, GCP, Azure)

~50–200ms

Most enterprise use cases

Edge / On-device

<10ms

Privacy, offline, IoT

Batch inference

Minutes

Nightly scoring pipelines

3rd party API (OpenAI, Claude)

~500ms

LLM tasks, fastest to ship

CODE · NEURAL NETWORKS & DEEP LEARNING

26 / 35

05

Business Impact & Responsible AI

ROI, bias, fairness, explainability

Measuring value, understanding bias, and building trustworthy AI systems.

ROI

Bias

Fairness

XAI

EU AI Act

Business Impact

ROI of Deep Learning Projects

How to justify the investment — and know when NOT to use deep learning

Use Case

Model

Annual Value

Medical imaging diagnosis

CNN

€2M+ radiologist time saved

Customer support bot

LLM

70% ticket deflection

Factory defect detection

CNN

€1.5M scrap reduction

Demand forecasting

LSTM

25% inventory cost reduction

Document extraction

Transformer

90% manual processing gone

2–8w

Pilot timeline with transfer learning

€50–200K

Typical production DL project cost

16 days

Payback period (invoice AI case study)

❌ When NOT to Use Deep Learning

Small tabular dataset (<10K rows)

→ XGBoost wins

Need full explainability by law

→ Decision Trees

No GPU budget

→ classical ML cheaper

Interpretability legally required

→ DL harder to justify

Decision Rule:

Deep learning wins on

unstructured data

(images, text, audio) at scale. For structured data under 100K rows, classical ML often wins on cost-effectiveness.

Compute Costs Reality Check

Training GPT-3 from scratch: ~$5M. Fine-tuning a pre-trained model: ~$50–500. Inference via API: fractions of a cent.

Always start with APIs.

CODE · NEURAL NETWORKS & DEEP LEARNING

28 / 35

Responsible AI

Bias & Fairness in Deep Learning

Models inherit the biases of their training data — and amplify them at massive scale

How Bias Enters DL Systems

Training Data Bias

— If 90% of CEO images show men, the model learns this association as "truth"

Label Bias

— Human annotators bring cultural and cognitive biases into labels

Representation Bias

— Darker skin tones underrepresented in facial recognition datasets

Amplification

— DL models amplify biases, not average them out

Feedback Loops

— Biased model decisions create biased future training data

⚖️ Real Cases

Facial Recognition:

MIT study — error rate 0.8% for light-skinned men vs 34.7% for dark-skinned women in commercial systems.

LLMs:

"A doctor walked in.

He

said..." — reproduce internet stereotypes at scale.

✅ Mitigation Strategies

Diverse & representative training data. Bias audits across demographic subgroups. Fairness metrics (equal opportunity, demographic parity). Human-in-the-loop for high-stakes decisions.

🔍 Explainability Methods

Grad-CAM

— highlights which image regions the CNN focused on

SHAP / LIME

— show feature contributions per prediction

Attention weights

— which tokens a Transformer attended to

⚠️ EU AI Act (2024)

Biometric and hiring AI = "high risk" — mandatory bias audits, transparency, human oversight. Non-compliance: up to

€30M or 6% global revenue

.

CODE · NEURAL NETWORKS & DEEP LEARNING

29 / 35

Case Study

End-to-End: AI Invoice Processing at a German Bank

A real-world example of all concepts coming together

1

Problem

50,000 invoices/month processed manually. Cost: €8/invoice = €400K/month. Error rate 3%.

2

Solution: CNN + Transformer pipeline

CNN extracts layout from scanned PDF. BERT extracts key fields: vendor, amount, date, VAT.

3

Data: 8,000 labelled invoices

Transfer learning from LayoutLM. Fine-tuned in 2 days on 1 GPU.

4

Result: 94% straight-through processing

6% flagged for human review. Error rate: 3% → 0.4%.

5

ROI: €340K/month saved

Project cost: €180K total. Payback period:

16 days

.

✅ What Worked

Transfer learning from LayoutLM slashed data requirements. Explainability via attention weights → compliance team approved in 4 weeks.

❌ Lessons Learned

Handwritten invoices (5% of volume) still fail — out of distribution. Model monitoring caught accuracy drop when a supplier changed their invoice template.

💡 Key Insight

94% automation with 100% accuracy

beats 100% automation with 96% accuracy. Human-in-the-loop for low-confidence predictions was critical for stakeholder trust.

CODE · NEURAL NETWORKS & DEEP LEARNING

30 / 35

Looking Ahead

The Future of Deep Learning in Business

Trends shaping the next five years — and what they mean for your career

Key Trends 2025–2030

🤖

Multimodal AI

— Models that see, hear, read simultaneously. GPT-4o, Gemini. One model for all data types.

📱

On-Device AI

— Small efficient models on phones, IoT. Apple Neural Engine, Qualcomm NPUs. No cloud needed.

🔒

Federated Learning

— Train on sensitive data without centralising it. Critical for healthcare and finance privacy.

⚡

Smaller, Smarter Models

— Llama 3 8B outperforms GPT-3 at 1/100th the cost. Efficiency > raw scale.

📋

Agentic AI

— Models that use tools, browse the web, write code, and act autonomously on multi-step tasks.

🧬

AI for Science

— AlphaFold solved protein folding. AI is redesigning biology, chemistry, materials science.

Strategic Implication for Business

The competitive moat is no longer the model — everyone can call GPT-4 or Claude. The moat is your

proprietary data

, your

domain expertise

, and your

speed of deployment

.

What to Do Right Now

① Start collecting and labelling domain-specific data

② Build internal ML literacy

③ Run one small DL pilot. Measure it. Ship it.

④ The organisations that experiment today lead in 2028.

Compute Democratisation

Google Colab: free GPU. Hugging Face: free models. The barrier to entry has never been lower. The barrier to

doing it well

has never mattered more.

CODE · NEURAL NETWORKS & DEEP LEARNING

31 / 35

Visual Summary

The Deep Learning Landscape — Visual Map

Everything we covered, connected

Deep Learning

Data Types

🖼️ Image 🎬 Video

🗣️ Audio 📝 Text 📊 Table

Architectures

CNN RNN LSTM

Transformer GAN Diffusion

Training

Loss → Backprop

Adam → Dropout

Deployment

Cloud Edge API

Docker Monitor

vs Classical ML

KNN XGBoost SVM

Responsible AI

Bias Fairness XAI

EU AI Act

CODE · NEURAL NETWORKS & DEEP LEARNING

32 / 35

Self-Check

Test Yourself — 10 Core Concepts

Can you answer these without looking back?

What is the difference between a

weight

and an

activation function

?

Why can't a network with no activation functions solve non-linear problems?

What does

backpropagation

actually calculate, and why do we need it?

What's the difference between

overfitting

and

underfitting

? How do you fix each?

Why does

CNN

outperform fully-connected networks on images?

Why do RNNs suffer from the

vanishing gradient problem

? What solves it?

What makes the

Transformer

faster to train than an RNN?

For a new image classification task with 1,000 labelled images, what's the right strategy?

Name 3 types of bias that can enter a deep learning system

When should you choose

XGBoost over a neural network

?

💡 Bonus Challenge:

A retailer wants to automate detection of damaged products on a conveyor belt using a camera. They have 800 labelled images (400 damaged, 400 OK). Walk through your complete solution: architecture choice, data strategy, training approach, deployment. What do you recommend?

CODE · NEURAL NETWORKS & DEEP LEARNING

33 / 35

Go Deeper

Your Learning Roadmap

The best free resources to go from beginner to practitioner

Free Courses

fast.ai — Practical Deep Learning

The best hands-on course. Top-down approach. You build things from day 1. Free.

Start here.

DeepLearning.AI Specialisation (Coursera)

Andrew Ng's legendary course. Deep theory + practice. 5-course series. Certificates available.

Hugging Face Course

Free. Practical Transformers and NLP. The fastest path from zero to deploying a real model.

3Blue1Brown — Neural Networks playlist

The most beautiful visual explanations of backprop and gradient descent ever made. YouTube. Free.

Tools to Experiment With Today

🔬

Google Colab

— free GPU notebook. Run PyTorch in browser. colab.research.google.com

🤗

Hugging Face

— 500K models, demo apps, datasets. huggingface.co

📊

Kaggle

— competitions, free GPU, notebooks, datasets. Start with "Titanic" or "MNIST".

🎨

Replicate.com

— run any model (Stable Diffusion, Whisper) with one API call

📚 Must-Read Papers

"Attention is All You Need"

(2017) — Vaswani et al. — The Transformer paper

"Deep Residual Learning"

(2015) — He et al. — ResNet

"Dropout"

(2014) — Srivastava et al.

🎯 The best way to learn:

Pick a dataset you care about. Try to beat a simple baseline. Ship something. Learn by doing, not by reading.

CODE · NEURAL NETWORKS & DEEP LEARNING

34 / 35

Course Summary

Key

Takeaways

🧬 We Are Building Brains

Neural networks mimic biological neurons. Data + compute + algorithms = artificial intelligence.

📈 Why DL wins

Classical ML plateaus. DL keeps improving with more data. Automatic feature learning. Unstructured data domination.

🏗️ Architectures

CNN for images. LSTM/GRU for sequences. Transformers for language. GANs/Diffusion for generation.

⚙️ Training

Loss → Backprop → Gradient Descent → Adam. Always use Dropout + Early Stopping.

🚀 Practical

Transfer learning. PyTorch + Hugging Face. Never train from scratch. Monitor in production.

⚖️ Responsible AI

Bias is real and legally consequential. Explainability is not optional. EU AI Act compliance = mandatory.

🎯 Your Next Step

Pick one problem you care about. Find a pre-trained model on Hugging Face. Fine-tune it. Ship it. Learn by doing.

CODE UNIVERSITY OF APPLIED SCIENCES · BERLIN

Firas Ben Hassan · AI Guest Lecturer · Neural Networks & Deep Learning

const TOTAL = 35;

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
