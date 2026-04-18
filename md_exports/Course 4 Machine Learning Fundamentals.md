# Course 4 Machine Learning Fundamentals

Machine Learning Fundamentals – CODE University

* { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #e8edf2; font-family: 'Segoe UI', sans-serif; color: #1a2332; display: flex; flex-direction: column; align-items: center; min-height: 100vh; }

/* NAV */

#nav { width: 900px; max-width: 98vw; display: flex; align-items: center; justify-content: space-between; padding: 10px 0; }

#nav button { background: #fff; border: 1px solid #c8d0db; color: #1a2332; padding: 6px 18px; border-radius: 6px; cursor: pointer; font-size: 13px; }

#nav button:hover { background: #1d4ed8; border-color: #1d4ed8; color: #fff; }

#nav button:disabled { opacity: 0.35; cursor: default; background: #fff; border-color: #c8d0db; color: #1a2332; }

#counter { font-size: 13px; color: #5a6a7e; }

/* SLIDE */

.slide-wrap { width: 900px; max-width: 98vw; }

.slide { width: 100%; aspect-ratio: 16/9; background: #ffffff; border: 1px solid #c8d0db; border-radius: 10px; overflow: hidden; display: none; flex-direction: column; box-shadow: 0 2px 12px rgba(0,0,0,.08); }

.slide.active { display: flex; }

/* COMMON */

.hdr { padding: 16px 26px 0; border-bottom: 2px solid #f0f3f7; padding-bottom: 8px; }

.tag { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #1d4ed8; margin-bottom: 3px; }

.title { font-size: 19px; font-weight: 700; color: #0f172a; }

.sub { font-size: 11px; color: #5a6a7e; margin-top: 2px; }

.body { flex: 1; padding: 10px 26px 10px; display: flex; gap: 14px; overflow: hidden; }

.foot { padding: 5px 26px; border-top: 1px solid #e8edf2; display: flex; justify-content: space-between; background: #f8fafc; }

.fl { font-size: 9px; font-weight: 700; letter-spacing: 1px; color: #1d4ed8; }

.fn { font-size: 9px; color: #8896a5; }

.col { flex: 1; display: flex; flex-direction: column; gap: 6px; }

.col2 { flex: 2; }

strong { color: #0f172a; }

/* CARDS */

.card { background: #f8fafc; border: 1px solid #dde3ec; border-radius: 7px; padding: 8px 10px; }

.card.b { border-color: #93c5fd; background: #eff6ff; }

.card.g { border-color: #6ee7b7; background: #f0fdf4; }

.card.p { border-color: #c4b5fd; background: #faf5ff; }

.card.a { border-color: #fcd34d; background: #fffbeb; }

.card.r { border-color: #fca5a5; background: #fef2f2; }

.ct { font-size: 10px; font-weight: 700; margin-bottom: 3px; color: #0f172a; }

.cd { font-size: 10.5px; color: #4b5a6e; line-height: 1.4; }

/* LIST */

ul.L { list-style: none; display: flex; flex-direction: column; gap: 4px; }

ul.L li { font-size: 11px; line-height: 1.4; padding-left: 13px; position: relative; color: #1a2332; }

ul.L li::before { content: '▸'; position: absolute; left: 0; color: #1d4ed8; font-size: 9px; top: 2px; }

/* TABLE */

.tbl { width: 100%; border-collapse: collapse; font-size: 10px; }

.tbl th { background: #f0f4f9; color: #3d5068; padding: 4px 7px; text-align: left; border: 1px solid #dde3ec; font-weight: 600; }

.tbl td { padding: 4px 7px; border: 1px solid #dde3ec; vertical-align: top; color: #1a2332; }

.tbl tr:nth-child(even) td { background: #f8fafc; }

/* BADGE */

.bdg { display: inline-block; padding: 2px 7px; border-radius: 20px; font-size: 9px; font-weight: 700; margin: 1px; }

.bdg.b { background: #dbeafe; color: #1d4ed8; border: 1px solid #93c5fd; }

.bdg.g { background: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; }

.bdg.p { background: #ede9fe; color: #5b21b6; border: 1px solid #c4b5fd; }

.bdg.a { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }

.bdg.r { background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }

/* HIGHLIGHT */

.hl { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 7px; padding: 7px 11px; font-size: 10.5px; color: #1a2332; }

/* METRICS */

.mg { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }

.mb { background: #f8fafc; border-radius: 7px; border: 1px solid #dde3ec; padding: 7px 9px; }

.mv { font-size: 20px; font-weight: 800; }

.ml { font-size: 9px; color: #5a6a7e; margin-top: 1px; }

/* FLOW */

.fb { background: #f8fafc; border: 1px solid #dde3ec; border-radius: 5px; padding: 4px 8px; font-size: 10px; text-align: center; color: #1a2332; }

/* TIMELINE */

.tl { display: flex; flex-direction: column; gap: 5px; }

.tli { display: flex; gap: 7px; align-items: flex-start; }

.tld { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; flex-shrink: 0; margin-top: 1px; color: #fff; }

/* CONFUSION MATRIX */

.cm { display: grid; grid-template-columns: 18px 1fr 1fr; grid-template-rows: 18px 1fr 1fr; gap: 2px; }

.cmc { background: #f8fafc; border-radius: 3px; display: flex; align-items: center; justify-content: center; font-size: 10px; border: 1px solid #dde3ec; }

.cmc.tp, .cmc.tn { background: #d1fae5; color: #065f46; font-weight: 700; border-color: #6ee7b7; }

.cmc.fp, .cmc.fn { background: #fee2e2; color: #991b1b; font-weight: 700; border-color: #fca5a5; }

.cmc.hd { background: transparent; color: #5a6a7e; font-size: 8px; font-weight: 700; border: none; }

/* TITLE SLIDE */

.ts { background: #0f172a; }

.ts-c { display: flex; flex-direction: column; height: 100%; padding: 28px 44px; justify-content: center; position: relative; }

.ts-tag { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #60a5fa; margin-bottom: 8px; }

.ts-main { font-size: 34px; font-weight: 900; line-height: 1.1; color: #f8fafc; }

.ts-sub { font-size: 13px; color: #94a3b8; margin-top: 7px; }

.ts-inst { margin-top: 18px; display: flex; align-items: center; gap: 10px; }

.av { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg,#3b82f6,#8b5cf6); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; color: #fff; }

.ts-nm { font-size: 13px; font-weight: 700; color: #f1f5f9; }

.ts-rl { font-size: 10px; color: #94a3b8; }

.ts-logo { margin-top: 12px; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; color: #60a5fa; border: 1px solid #3b82f6; display: inline-block; padding: 3px 10px; border-radius: 3px; }

.ts-pills { position: absolute; right: 44px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 7px; }

.tsp { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 4px 12px; font-size: 10px; color: #94a3b8; }

.tsp span { color: #60a5fa; font-weight: 700; }

/* SECTION SLIDE */

.ss { background: #1e3a5f; }

.ss-c { display: flex; flex-direction: column; height: 100%; padding: 0 44px; justify-content: center; }

.ss-n { font-size: 64px; font-weight: 900; color: rgba(255,255,255,.15); line-height: 1; }

.ss-t { font-size: 26px; font-weight: 800; margin-top: -6px; color: #f8fafc; }

.ss-d { font-size: 12px; color: #93c5fd; margin-top: 5px; max-width: 440px; }

.ss-tags { display: flex; gap: 5px; margin-top: 10px; flex-wrap: wrap; }

.ss-tags .bdg.b { background: rgba(219,234,254,.2); color: #bfdbfe; border-color: rgba(191,219,254,.4); }

.ss-tags .bdg.p { background: rgba(237,233,254,.2); color: #ddd6fe; border-color: rgba(196,181,253,.4); }

.ss-tags .bdg.g { background: rgba(209,250,229,.2); color: #a7f3d0; border-color: rgba(110,231,183,.4); }

.ss-tags .bdg.a { background: rgba(254,243,199,.2); color: #fde68a; border-color: rgba(252,211,77,.4); }

.ss-tags .bdg.r { background: rgba(254,226,226,.2); color: #fecaca; border-color: rgba(252,165,165,.4); }

svg text { font-family: 'Segoe UI', sans-serif; }

.lbl { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #5a6a7e; margin-bottom: 2px; }

← Prev

1 / 48

Next →

CODE University of Applied Sciences · Berlin

Machine Learning

Fundamentals

Practical Business-Oriented Perspective

F

Firas Ben Hassan

AI Guest Lecturer

CODE UNIVERSITY OF APPLIED SCIENCES

3-Hour

Course

48

Slides

15+

Business Cases

Classical ML Focus

Course Overview

Course Roadmap & Learning Objectives

Block 1 · 30min

ML Foundations & AI Landscape

Block 2 · 50min

Supervised: Classification

Block 3 · 40min

Supervised: Regression

Block 4 · 35min

Unsupervised Learning

Block 5 · 25min

RL · Transfer · Fairness · ROI

Learning Objectives

Distinguish ML types and select the right approach for a business problem

Understand key algorithms intuitively — no PhD required

Evaluate model performance with business-relevant metrics

Identify common pitfalls and mitigate them proactively

Estimate the ROI of an ML project and communicate it to stakeholders

⚠️ Transparency Statement

"

100% of the content in these slides was generated by AI and reviewed by a human expert.

" This course itself is a live demonstration of AI — thoughtfully applied and critically validated.

AI-Generated

Human-Reviewed

CODE · ML FUNDAMENTALS

2 / 48

01

Foundations of Machine Learning

What is ML, why it matters for business, and how it fits into the broader AI ecosystem.

AI vs ML vs DS

Business Value

Types of Learning

Foundations

What is Machine Learning?

Teaching computers to learn from data — not explicit rules

📖 Arthur Samuel (1959)

"The field of study that gives computers the ability to learn without being explicitly programmed."

Traditional Programming vs ML

Traditional:

Data + Rules → Answers

Machine Learning:

Data + Answers → Rules (Model)

ML finds

patterns

in data automatically

Improves with more data and feedback

Generalizes to

unseen examples

Replaces manual rule-writing with statistical inference

Business Analogy

🏦

Loan Approval:

Old: A manager writes 200 explicit rules. ML way: Feed 100,000 historical decisions. The model discovers the patterns itself — and often outperforms the rulebook.

Three Core Ingredients

📊

Data

The fuel

⚙️

Algorithm

The engine

🎯

Model

The output

CODE · ML FUNDAMENTALS

4 / 48

Foundations

AI vs ML vs Data Science — Untangling the Buzzwords

🤖 Artificial Intelligence

The broad discipline of building systems that exhibit intelligent behaviour. Includes rule-based systems, expert systems, robotics, ML, and more.

Broadest umbrella

🧠 Machine Learning

A subset of AI. Systems that learn statistical patterns from data. Includes classical ML, deep learning, reinforcement learning.

Subset of AI

📊 Data Science

Combines statistics, ML, and domain expertise to extract insights. Overlaps with ML but also includes EDA, visualisation, storytelling.

Overlapping field

ARTIFICIAL INTELLIGENCE

MACHINE LEARNING

Deep Learning

Data Science

(overlaps)

💡 Business Takeaway:

When a vendor says "AI-powered", ask: is it rules-based? ML? Deep learning? The answer changes implementation cost, data requirements, and explainability.

CODE · ML FUNDAMENTALS

5 / 48

Foundations

The Business Value of Machine Learning

$13T

Estimated global ML value by 2030 (McKinsey)

40%

Avg cost reduction in fraud via ML models

3×

Revenue lift from personalised recommendations

60%

Faster demand forecasting vs traditional methods

Value Creation Levers

Automation

— Replace repetitive decisions (credit scoring, email routing)

Prediction

— Forecast demand, churn, equipment failure

Personalization

— Tailor offers, content, pricing per customer

Anomaly Detection

— Catch fraud, defects, cyber threats in real time

Optimization

— Pricing, logistics, resource allocation

📌 Key Insight

ML doesn't replace business expertise — it amplifies it. The best ML projects combine domain knowledge with data-driven methods.

CODE · ML FUNDAMENTALS

6 / 48

Foundations

Five Types of Machine Learning

🎓

Supervised

Labelled data. Learn input→output mapping.

Main Focus

🔍

Unsupervised

No labels. Find hidden structure.

🌗

Semi-Supervised

Few labels + lots of unlabelled data.

🎮

Reinforcement

Agent learns via trial, error & reward.

🔄

Transfer

Reuse knowledge across domains.

Type

Data Needed

Typical Output

Business Example

Supervised

Labelled (X, y)

Prediction / Class

Churn prediction, credit scoring

Unsupervised

Unlabelled (X)

Clusters / Structure

Customer segmentation, anomaly detection

Semi-Supervised

Few labels + many unlabelled

Labels for all

Medical imaging with limited expert labels

Reinforcement

Reward signal

Optimal policy

Pricing engines, ad bidding

Transfer

Pre-trained model + small dataset

Adapted model

Sentiment analysis on niche domain

CODE · ML FUNDAMENTALS

7 / 48

Foundations

The ML Project Lifecycle

From business problem to production value

🎯

1. Problem

Business goal, KPIs

📥

2. Data Collection

Sources, volume

🧹

3. Data Prep

Cleaning, EDA

⚙️

4. Modelling

Train, tune, eval

🚀

5. Deployment

API, monitoring

📈

6. Impact

ROI, feedback

📌 80/20 Reality:

Data scientists spend ~80% of time on data collection and preparation — only ~20% on actual modelling. The quality of your data is the biggest lever on model performance.

Common Pitfall

Jumping straight to algorithms without clearly defining the business problem. Many expensive ML projects fail because the question was wrong, not the model.

Best Practice

Always start with: "What decision will this model support, and what does a wrong prediction cost?" This defines your success metric before writing a line of code.

CODE · ML FUNDAMENTALS

8 / 48

Foundations

Data Quality — The Silent Killer of ML Projects

"Garbage in, garbage out"

The Six Dimensions of Data Quality

Completeness

— Are there missing values? Why are they missing?

Accuracy

— Does the data correctly represent reality?

Consistency

— Same entity recorded the same way across systems?

Timeliness

— Is the data fresh enough for the decision?

Relevance

— Does this feature actually relate to the outcome?

Volume

— Enough samples for the model to generalise?

⚠️ Label Leakage

Including data in training that wouldn't be available at prediction time. 99% accuracy — completely useless in production.

🔍 Class Imbalance

In fraud detection, <0.1% of transactions are fraud. A model predicting "not fraud" achieves 99.9% accuracy — yet catches zero fraudsters.

✅ Rule of Thumb

More and better data consistently beats more complex algorithms. A simple model on clean data outperforms a complex model on dirty data.

CODE · ML FUNDAMENTALS

9 / 48

02

Supervised Learning:

Classification

Teaching models to assign inputs to categories — the most common ML task in business.

Logistic Regression

Decision Trees

Random Forest

XGBoost

SVM

Supervised · Classification

What is Classification?

🗳️ Imagine sorting emails into

Spam / Not Spam

. You look at features: sender, subject, links. A classification model does exactly this — at scale, in milliseconds.

Business Examples

🏦

Credit Scoring

— Will this applicant default? (Yes/No)

📱

Churn Prediction

— Will this customer cancel?

🛡️

Fraud Detection

— Is this transaction fraudulent?

🏥

Disease Diagnosis

— Positive/Negative screening

📦

Lead Scoring

— High/Mid/Low conversion probability

Decision Boundary Intuition

Feature 1 (Income)

Decision

Boundary

Class A

Class B

CODE · ML FUNDAMENTALS

11 / 48

Supervised · Classification

Logistic Regression

Simple, fast, explainable — the baseline every project should start with

Extends linear regression to output a

probability (0–1)

via the sigmoid function

Draws a

linear decision boundary

between classes

Coefficients show feature importance — highly interpretable

Output: "P(churn) = 0.73" — a confidence score, not just a label

✅ When to Use

Binary classification, need for interpretability (regulated industries), fast baseline

❌ Limitations

Assumes linear relationship. Struggles with complex, non-linear patterns.

Business Case: Churn Prediction

Telecom trains on 6 months of data.

Key coefficients:

+0.8 — Support calls in 30 days

+0.5 — Month-to-month contract

–0.6 — Tenure > 24 months

Marketing knows exactly which levers to pull.

Sigmoid Curve

0

1

0.5 threshold

CODE · ML FUNDAMENTALS

12 / 48

Supervised · Classification

k-Nearest Neighbors (kNN)

"Tell me who your neighbours are, and I'll tell you who you are"

No training phase — stores all data points

At prediction: find the

k most similar examples

Majority vote determines the class

Similarity by distance (Euclidean, Manhattan…)

Small k = complex boundary, large k = smooth boundary

📌 The k Trade-off

k=1: flexible, risk of overfitting. k=large: smooth, risk of underfitting. Cross-validation finds the sweet spot.

✅ Strengths

Simple, no training, multi-class, good for recommendations

❌ Weaknesses

Slow at prediction, sensitive to irrelevant features

? query

k=3: 3 blue → Class A wins

1 red inside radius → outvoted

CODE · ML FUNDAMENTALS

13 / 48

Supervised · Classification

Decision Trees

The most interpretable model — like a flowchart that learned from data

Income > €40,000?

No

Missed Payments > 2?

Yes

🔴 Default

No

🟡 Monitor

Yes

Credit Score > 650?

Yes

🟢 Approve

No

🟡 Review

Splits data using

impurity measures

(Gini, Entropy)

Extremely interpretable — show to a bank regulator

Handles categorical & numerical features natively

Prone to

overfitting

if not pruned (set max_depth)

Regulatory Advantage

GDPR & Basel III require explainability. Decision Trees let you print the reason for any prediction.

CODE · ML FUNDAMENTALS

14 / 48

Supervised · Classification

Random Forest

The wisdom of crowds — many imperfect trees beat one perfect tree

How It Works

Original Dataset (N rows, M features)

↓ Bootstrap Sampling (with replacement)

Tree 1

Random subset

Tree 2

Different subset

Tree N…

↓ Majority Vote

🏆 Final Prediction

Reduces variance through

ensemble averaging

Feature importance scores — great for business interpretation

Robust to outliers and missing data

Works well out-of-the-box with minimal tuning

📌 Business Case: Fraud Detection

A European fintech processes 1M transactions/day, flagging 2% for review — catching 85% of actual fraud with <0.1% false positive rate.

✅ Best For

Tabular data, feature selection, production baselines

⚙️ Key Params

n_estimators, max_depth, max_features

CODE · ML FUNDAMENTALS

15 / 48

Supervised · Classification

Support Vector Machines (SVM)

Find the widest street between classes — maximum margin classification

Hyperplane

Support Vectors

← Margin →

Finds the

hyperplane that maximizes margin

between classes

Kernel trick

: maps data to higher dimensions for non-linear problems

Only support vectors define the model — memory efficient

Excellent for high-dimensional, small-to-medium datasets

Business Use: Text Classification

Before deep learning dominated NLP, SVMs were gold standard for sentiment analysis and spam detection — still competitive for smaller datasets.

✅ Strengths

High accuracy, works in high dimensions, robust to overfitting

❌ Weaknesses

Slow on large datasets, kernel selection tricky

CODE · ML FUNDAMENTALS

16 / 48

Supervised · Classification

Naïve Bayes & Gradient Boosting (XGBoost)

Naïve Bayes

Based on Bayes' Theorem: updates beliefs with evidence

"Naïve" = assumes features are

conditionally independent

Extremely fast, works with tiny datasets

Excels in

text classification

(spam, sentiment)

📧 "Buy Now Cheap Free" — Naïve Bayes multiplies P(each word|spam) to get P(spam). Simple math, powerful result.

Gradient Boosting / XGBoost

Builds trees

sequentially

— each corrects previous errors

Optimises a loss function using gradient descent

Dominates

Kaggle competitions

on tabular data

Best-in-class for fraud, churn, credit risk at scale

🏆 Industry Standard

XGBoost / LightGBM / CatBoost are the go-to models in banking, insurance, and e-commerce. If you learn one advanced classifier — learn gradient boosting.

Banking

Insurance

E-commerce

Healthcare

CODE · ML FUNDAMENTALS

17 / 48

Supervised · Classification

Algorithm Comparison — When to Use What

Algorithm

Interpretability

Speed

Non-linearity

Dataset Size

Best For

Logistic Regression

🟢 High

🟢 Fast

🔴 Limited

Any

Regulated industries, baseline

kNN

🟡 Medium

🔴 Slow

🟢 Yes

Small–Medium

Recommendations, anomaly

Decision Tree

🟢 High

🟢 Fast

🟡 Partial

Any

Explainable rules, compliance

Random Forest

🟡 Medium

🟢 Yes

Medium–Large

Production baseline, feature selection

SVM

🔴 Low

🟡 Medium

🟢 Yes (kernel)

Small–Medium

High-dim text classification

Naïve Bayes

🟡 Medium

🟢 Very Fast

🔴 No

Small

Text classification, spam

XGBoost

🟡 Medium

🟢 Yes

Large

State-of-the-art tabular tasks

💡 Golden Rule:

Always start simple (Logistic Regression), measure your baseline, then add complexity only when justified by measurable performance improvement.

CODE · ML FUNDAMENTALS

18 / 48

Supervised · Evaluation

Model Evaluation: The Confusion Matrix

Accuracy alone is misleading — here's why

Confusion Matrix (Fraud Detection)

Predicted →

Pred: Fraud

Pred: Legit

Actual: Fraud

TP 850

FN 150

Actual: Legit

FP 200

TN 98,800

🟢 TP: Caught fraud · 🔴 FP: False alarm · 🔴 FN: Missed · 🟢 TN: Cleared

Key Metrics

Accuracy

= (TP+TN)/All = 99.6% ← misleading!

Precision

= TP/(TP+FP) = 81% ← of flagged, how many are real fraud?

Recall

= TP/(TP+FN) = 85% ← of all fraud, how many caught?

F1 Score

= 2×(P×R)/(P+R) = 83% ← balances both

⚖️ Business Trade-off

High Recall = fewer missed frauds. High Precision = fewer false alarms. Business goals determine the balance — not the data scientist alone.

CODE · ML FUNDAMENTALS

19 / 48

Supervised · Model Quality

Overfitting vs Underfitting — The Bias-Variance Trade-off

📉

Underfitting

Too simple. High bias. Poor on train AND test.

🎯

Just Right

Generalises well. Good on train AND test.

📈

Overfitting

Memorised data. Great train, poor test.

Model Complexity →

Train

Test

Sweet Spot

Problem

Solutions

Underfitting

Add features, more complex model, remove regularisation

Overfitting

More data, regularisation (L1/L2), pruning, cross-validation

🔄 Cross-Validation

K-Fold CV: split into K parts, train on K-1, test on 1. Repeat K times. Average = reliable estimate. Essential for any production model.

Business Reality:

A model perfect on training data but poor in production has cost companies millions in bad decisions.

CODE · ML FUNDAMENTALS

20 / 48

03

Supervised Learning:

Regression

Predicting continuous values — revenue, prices, demand, KPIs.

Linear Regression

Ridge & Lasso

Ensembles

Demand Forecasting

Supervised · Regression

Linear Regression

The foundation of predictive analytics — fit a line through data

Predicts a

continuous numeric value

(price, revenue, score)

Fits: ŷ = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ

Minimises

Mean Squared Error

(sum of squared residuals)

Each coefficient = impact of that feature on the outcome

"Each extra bedroom adds €12,000 to house price"

📌 Assumptions

Linearity, homoscedasticity, no multicollinearity, normally distributed residuals.

Evaluation Metrics

MAE, RMSE, R² (variance explained). R²=0.85 means "85% of price variation explained by features."

Case: Housing Price Prediction

Size (m²)

ŷ = 1200x + 85,000

CODE · ML FUNDAMENTALS

22 / 48

Supervised · Regression

Ridge, Lasso & Polynomial Regression

Preventing overfitting and capturing non-linear patterns

Ridge Regression (L2)

Penalty = λ × Σ(β²). Shrinks all coefficients toward zero but never exactly zero. Good for multicollinearity.

Lasso Regression (L1)

Penalty = λ × Σ|β|. Can shrink to

exactly zero

— automatic feature selection! 50 features → Lasso keeps the 8 most important.

Elastic Net

Combines L1 and L2. Best of both worlds for high-dimensional data.

Polynomial Regression

Adds polynomial features: x², x³ to capture curves

Still "linear" in terms of parameters — same math, richer features

⚠️ Degree too high → extreme overfitting

Linear (poor)

Polynomial degree=2 ✓

CODE · ML FUNDAMENTALS

23 / 48

Supervised · Regression

Regression in Business — Applied Examples

🏠

Housing Price Prediction

Zillow, ImmobilienScout24 use gradient boosting. Features: location, size, floor, age. Output: estimated price ± confidence interval.

R² ≈ 0.90

📦

Demand Forecasting

Amazon, REWE, DHL predict units per SKU. Features: history, promotions, weather, holidays. Reduces overstock & stockouts by 20-35%.

Cost Reduction

📊

KPI & Revenue Prediction

Marketing mix models regress revenue on ad spend. Output: attribution per channel and ROI-maximising budget allocation.

Strategic Planning

Algorithm

Best For

Key Advantage

Watch Out For

Linear Regression

Baseline, interpretable use cases

Coefficients = direct insight

Assumes linearity

Ridge / Lasso

Many features, risk of overfitting

Built-in feature selection (Lasso)

Hyperparameter tuning needed

Regression Trees

Non-linear, interactions

No distributional assumptions

Overfits without pruning

Gradient Boosting

Complex patterns, production

State-of-the-art accuracy

Less interpretable, slower

CODE · ML FUNDAMENTALS

24 / 48

04

Unsupervised Learning

Discovering hidden structure in unlabelled data — segmentation, patterns, anomalies.

K-Means

Hierarchical

DBSCAN

PCA

Unsupervised · Clustering

Clustering — Finding Natural Groups in Data

Groups similar data points without predefined labels

Goal:

intra-cluster similarity high, inter-cluster similarity low

Business Use Cases

🎯

Customer Segmentation

— group by behaviour

🛒

Market Basket Analysis

— frequently bought together

🔍

Anomaly Detection

— outlier = no cluster = suspicious

📰

Document Clustering

— group articles by topic

🏭

Predictive Maintenance

— group failure patterns

Cluster A

Cluster B

Cluster C

✕

✕ = centroid

CODE · ML FUNDAMENTALS

26 / 48

Unsupervised · Clustering

K-Means Clustering

Partition data into K groups by minimizing within-cluster variance

Algorithm Steps

1

Initialise K centroids randomly

2

Assign each point to nearest centroid

(Euclidean distance)

3

Recompute centroids as cluster mean

4

Repeat until convergence

Choosing K: The Elbow Method

Plot inertia vs K. Look for the "elbow" where adding more clusters yields diminishing returns. Typically K=3–7 for business segments.

📌 Business Case: Customer Segmentation

A retail bank clusters 500,000 customers on balance, transaction frequency, product holdings, tenure.

Result — 4 segments:

🔵 "High-Value Savers" → Priority service

🟢 "Young Transactors" → Digital products

🟡 "Dormant Holders" → Re-engagement

🔴 "Credit-Dependent" → Risk management

✅ Strengths

Simple, scalable, fast, interpretable

❌ Limitations

Must specify K, sensitive to outliers

CODE · ML FUNDAMENTALS

27 / 48

Unsupervised · Clustering

Hierarchical Clustering & DBSCAN

When K-Means isn't enough

Hierarchical Clustering

Builds a tree of clusters (

dendrogram

)

Agglomerative: bottom-up, merge closest clusters iteratively

No need to pre-specify K — cut the tree at any level

Computationally expensive for large datasets

Business Use

Market hierarchy analysis — grouping products, brands, or regions into a logical tree. Used in pharma for patient profiling.

DBSCAN — Density-Based Clustering

Finds clusters of

arbitrary shape

— not just spheres

Labels sparse regions as

noise/outliers

automatically

Parameters: epsilon (radius), min_samples

No need to specify number of clusters

🎯 Killer Feature: Anomaly Detection

Points not belonging to any dense cluster = anomalies. Used in cybersecurity, manufacturing defect detection, and financial fraud.

Arbitrary Shapes

Outlier Detection

No K needed

CODE · ML FUNDAMENTALS

28 / 48

Unsupervised · Dimensionality Reduction

Principal Component Analysis (PCA)

Compress information — keep what matters, discard what doesn't

With 100 features, distances become meaningless (

curse of dimensionality

)

PCA finds directions of

maximum variance

in high-dimensional space

Projects data onto fewer dimensions (Principal Components)

PC1 explains most variance, PC2 explains the next most, etc.

Business Example

A retailer has 200 product attributes. PCA reduces to 5 components explaining 92% of variance → model trains 10× faster, generalises better.

Use for

visualisation

(reduce to 2D to plot clusters)

Trade-off: interpretability lost (components = linear combinations)

Feature 1

PC1

PC2

2D data → compressed to PC1 (1D)

CODE · ML FUNDAMENTALS

29 / 48

Unsupervised · Association Rules

Market Basket Analysis

"Customers who bought X also bought Y"

Key Concepts

Support

= How often {A, B} appear together / all transactions

Confidence

= P(B | A) — if customer buys A, how often do they buy B?

Lift

= Confidence / P(B) — is the association stronger than chance?

Lift > 1 = positive association | Algorithms:

Apriori, FP-Growth

Classic Example

🍺🍼 "Beer & Diapers" — Walmart found Friday evening beer and diaper purchases were highly correlated. Placing them near each other increased both.

Business Applications

🛒 E-commerce

Amazon "Frequently Bought Together". Up to 35% of Amazon's revenue comes from recommendations — largely association-rule based.

💳 Banking

Customers with mortgage AND checking account → high likelihood for savings account. Increase product holding per customer.

🏥 Healthcare

Drug interaction analysis — which medications frequently co-prescribed? Flag dangerous combinations automatically.

CODE · ML FUNDAMENTALS

30 / 48

05

Semi-Supervised Learning

When you have lots of data but labelling it all is too expensive or slow.

Label Propagation

Self-Training

Real-World Scarcity

Semi-Supervised Learning

The pragmatic middle ground — few labels, lots of unlabelled data

💰 The Labelling Problem

Labelling 1 medical scan: €50–200 (expert radiologist).

10,000 scans: up to €2,000,000.

But you have 100,000 unlabelled scans in archives.

Semi-supervised learning uses all of them.

How It Works

Self-Training

: Train on labelled → predict unlabelled → add high-confidence predictions → retrain

Label Propagation

: Spread labels through a graph of similar data points

Co-Training

: Two models teach each other from different feature views

🏥 Medical Imaging

Label 500 X-rays. Use semi-supervised on 50,000 unlabelled images. Performance approaches fully-supervised at 5% the labelling cost.

📝 Content Moderation

Social platforms receive millions of posts/day. Human moderators label thousands. Semi-supervised extends coverage across millions automatically.

🌍 Multi-Language NLP

Rich English labels + sparse German labels + large unlabelled German corpus → good German performance without full re-annotation.

CODE · ML FUNDAMENTALS

32 / 48

06

Reinforcement Learning

Learning through interaction — reward, trial, error, and optimisation.

Agent & Environment

Reward Signal

Pricing Optimisation

Reinforcement Learning

Reinforcement Learning — Learning by Doing

An agent learns to maximise cumulative reward through trial and error

Core Framework

🤖

Agent

Decision maker

⇄

🌍

Environment

The world it acts in

State

Current situation

Action

What agent does

Reward

Feedback signal

🎮 Like training a dog — tries actions, receives rewards/penalties, gradually learns the optimal policy.

Business Applications

💰

Dynamic Pricing

— Uber, airlines adjust price based on demand state

🛍️

Recommendations

— Netflix/Spotify maximise engagement (reward = watch time)

📈

Algorithmic Trading

— Agent decides buy/sell/hold to maximise return

🏭

Supply Chain

— Controls inventory reorder policies to minimise costs

⚠️ Complexity Warning

RL requires careful reward design, significant compute, and simulation environments. Start with supervised approaches if possible.

CODE · ML FUNDAMENTALS

34 / 48

07

Transfer Learning

Reusing knowledge learned in one domain to solve problems in another.

Pre-trained Models

Fine-Tuning

Domain Adaptation

Transfer Learning

Transfer Learning — Don't Start from Scratch

🧠 A radiologist trained on chest X-rays adapts quickly to knee MRIs. They don't start from scratch — they transfer learned patterns.

Similarly, GPT trained on 100B words can be fine-tuned on 1,000 legal contracts to become an expert legal analyser.

Process

1. Start with large pre-trained model (GPT, BERT, ResNet…)

2. Freeze early layers (generic patterns already learned)

3. Fine-tune later layers on your domain data

4. Evaluate on your specific business task

Business Use Cases

📄

Document Classification

— fine-tune BERT on insurance claims

😊

Sentiment Analysis

— adapt NLP model to financial news tone

🏭

Quality Control

— fine-tune image classifier on factory defects

🤖

Customer Service Bots

— fine-tune LLM on company FAQs

💊

Drug Discovery

— transfer chemical structure models to new molecules

💡 Business Impact:

500–5,000 domain-specific examples + a pre-trained base = production-ready model. No Google-scale compute required.

CODE · ML FUNDAMENTALS

36 / 48

Practical ML

Common Pitfalls in ML Projects

Why ML projects fail — and how to avoid it

❌ Wrong Problem Framing

Building an ML model when a SQL query would suffice. Always clarify: "What decision changes based on this output?"

❌ Data Leakage

Training on features that include future information. Results look spectacular — then the model fails in production.

❌ Ignoring Class Imbalance

99% accuracy on fraud detection sounds great until you realise the model says "not fraud" on everything.

⚠️ Overfitting to Val Set

Tuning 50 hyperparameters on your validation set makes it effectively another training set. Keep a final test set untouched.

⚠️ Feature Engineering Neglect

Jumping to complex models instead of creating better features. A smart feature on a simple model often wins.

⚠️ Deployment Afterthought

A model that can't integrate into the business system is worth nothing. Plan for inference latency and monitoring from day one.

CODE · ML FUNDAMENTALS

37 / 48

Responsible ML

Bias & Fairness in Machine Learning

Models learn from historical data — including its injustices

Sources of Bias

Historical Bias

— If past loan decisions discriminated by gender/race, a model trained on those decisions will replicate the discrimination

Sampling Bias

— Training data doesn't represent the full population

Label Bias

— Human annotators introduce their own biases into labels

Measurement Bias

— Features measured differently for different subgroups

⚖️ COMPAS Recidivism Tool

Used by US courts. Found to be twice as likely to falsely flag Black defendants as high risk vs white defendants. Legal and ethical crisis.

💳 Amazon Hiring Algorithm

Trained on historical data (mostly male). Began downgrading CVs mentioning "women's" clubs. Shelved after discovery.

✅ EU AI Act

High-risk AI systems (credit, hiring, healthcare) require bias audits and transparency. Non-compliance: up to €30M or 6% of global revenue.

CODE · ML FUNDAMENTALS

38 / 48

Business Strategy

ROI of Machine Learning Projects

How to justify investment and measure success

ROI Framework

Quantify the problem

: "We lose €2M/year to undetected fraud"

Estimate improvement

: "Model catches 40% more → saves €800K/year"

Calculate costs

: Data prep + development + infrastructure + maintenance

Net ROI

= (Savings − Costs) / Costs

Include

non-financial benefits

: speed, satisfaction, compliance

⏱️ Time to Value

Average enterprise ML project: 6–18 months to production. Prioritise quick wins to build internal credibility.

Real ROI Examples

Use Case

Investment

Annual Return

Churn Prediction

€150K

€800K+

Demand Forecasting

€200K

€1.2M

Fraud Detection

€300K

€3M+

Predictive Maintenance

€400K

€2.5M

Dynamic Pricing

€250K

€1.8M

💡 Key:

The best ML investments let humans focus on higher-value work while machines handle high-volume, repetitive decisions.

CODE · ML FUNDAMENTALS

39 / 48

Responsible ML

Model Explainability — Opening the Black Box

Why Explainability Matters

🏦

Regulation

— GDPR Article 22: right to explanation for automated decisions

🛡️

Trust

— Users won't adopt systems they don't understand

🔍

Debugging

— Understanding why a model fails helps fix it

⚖️

Fairness Auditing

— Reveals if protected attributes drive decisions

SHAP Values

Assigns each feature a contribution value per prediction. "Loan denied: low income −0.3, no credit history −0.4, high debt ratio −0.2."

LIME

Approximates any model locally with a simple interpretable model. Works for any algorithm — great for one-off explanations.

Feature Importance (Tree-based)

Random Forest and XGBoost natively provide importance scores — which variables drive model decisions most.

CODE · ML FUNDAMENTALS

40 / 48

Beyond Classical ML

A Brief Look at Deep Learning, NLP & Computer Vision

When classical ML isn't enough — and when it still is

🧠

Deep Learning

Multi-layer neural networks. Excels at images, audio, video, text. Requires large data and GPU compute. Not always the best choice.

💬

NLP

Sentiment analysis, translation, summarisation, chatbots. Modern LLMs (GPT, Claude, Llama) are transformer-based and accessible via APIs.

👁️

Computer Vision

Image classification, object detection, quality inspection. CNNs and vision transformers power face ID, autonomous driving, factory inspection.

🎯 Decision Framework:

For

structured/tabular business data

(majority of enterprise ML) → classical ML wins. For

unstructured data

(images, text, audio) → deep learning. Don't use a neural network when a decision tree will do.

Data Type

Recommended Approach

Why

Tabular (spreadsheet-style)

XGBoost, Random Forest, Logistic Regression

Fast, interpretable, less data needed

Text / Language

Fine-tuned LLMs, BERT, classical NLP

Pre-trained models capture language nuance

Images

CNNs, Vision Transformers (fine-tuned)

Hierarchical spatial feature learning

CODE · ML FUNDAMENTALS

41 / 48

Practical Guide

Algorithm Selection Decision Guide

Business Problem

Do you have labelled data?

Yes

Supervised

No

Unsupervised

Category or number?

Cat.

Num.

LogReg · DT · RF · SVM · XGBoost

LinReg · Ridge · Tree · XGBoost

Find groups or

reduce dimensions?

Groups

Dim.

K-Means · DBSCAN · Hier.

PCA

CODE · ML FUNDAMENTALS

42 / 48

Applied Case Study

End-to-End Case Study: Customer Churn at a European Bank

1

Problem: €5M lost/year to churn

Goal: Predict 30-day churn risk per customer

2

Data: 200K records, 18 months history

Transactions, login freq, support calls, demographics

3

Preprocessing: 12% missing values handled

SMOTE oversampling (churn rate = 8%), feature engineering

4

XGBoost wins cross-validation

Precision: 79%, Recall: 82%, AUC-ROC: 0.91

5

Deployment: Real-time API scoring

Top 2,000 at-risk customers flagged weekly for RMs

6

Result: 34% churn reduction in 6 months

€1.7M saved Year 1 · ROI: 560%

✅ What Worked

Starting with business KPI. SHAP explanations enabled RM conversations: "Here's why we flagged this customer."

❌ What Went Wrong

Underestimated data cleaning time (3 weeks vs 3 days). Initial 400ms latency too slow for real-time. Batch scoring was the fix.

💡 The Human Factor

Relationship managers were skeptical of "AI telling them who to call." Weekly calibration sessions and visible wins converted them into champions.

CODE · ML FUNDAMENTALS

43 / 48

Industry Applications

Machine Learning Across Industries

🏦

Financial Services

Fraud detection, credit scoring, robo-advisors, AML monitoring, algo trading

🏥

Healthcare

Disease prediction, drug discovery, patient readmission, imaging diagnosis

🛒

Retail & E-commerce

Recommendations, demand forecasting, dynamic pricing, customer LTV

🏭

Manufacturing

Predictive maintenance, quality control, supply chain, energy prediction

📱

Tech & Media

Content ranking, ad targeting, spam filtering, A/B test analysis

🚗

Automotive

Predictive maintenance, fleet optimisation, connected vehicle anomaly detection

✈️

Travel & Logistics

Revenue management, route optimisation, delay prediction, last-mile delivery

🌱

Agriculture

Crop yield prediction, soil analysis, weather-based planning, irrigation ML

CODE · ML FUNDAMENTALS

44 / 48

Practical ML

Data-Centric vs Model-Centric AI

Andrew Ng's paradigm shift: improve the data, not just the model

Model-Centric (Traditional)

Fix the data → hold it constant → try 50 algorithms and hyperparameter combos → hope for improvement.

Weeks of tuning for marginal gains

The bottleneck is often the data, not the model

Ignores inconsistent or ambiguous labels

Data-Centric (Modern)

Fix the model → hold it constant → systematically improve data quality, consistency, and coverage.

Find and fix inconsistent labels

Identify where model underperforms → add targeted data

Clean & augment data rather than tune endlessly

Often produces bigger gains than model changes

Takeaway:

Improving data quality by 10% typically yields more ROI than increasing model complexity by 10%.

CODE · ML FUNDAMENTALS

45 / 48

Building ML in Business

Building an ML Team — Roles & Responsibilities

📊

Data Analyst

Insights, dashboards, KPIs. Bridge to business teams.

🔬

Data Scientist

Builds/evaluates models, runs experiments, communicates results.

⚙️

ML Engineer

Deploys models, builds pipelines, ensures reliability at scale.

🏗️

Data Engineer

Builds data infrastructure, warehouses, pipelines.

🎯

AI Product Manager

Defines problem, owns roadmap, connects business and tech.

For Business Leaders:

Your role is to: (1) clearly define the business problem, (2) ensure data availability, (3) translate model outputs into decisions, and (4) champion cross-functional collaboration.

Company Stage

Recommended Team

Starting Point

Early Startup

1 Data Scientist + 1 Engineer

One high-value use case. Buy vs build.

Scale-up

Small pod (DS + DE + PM + Analyst)

Platform thinking. Data catalogue. Model registry.

Enterprise

Centre of Excellence + embedded teams

Governance, standards, MLOps maturity model.

CODE · ML FUNDAMENTALS

46 / 48

Looking Ahead

The Future of Machine Learning in Business

Trends shaping the next five years

Emerging Trends

🤖

AutoML

— Automated model selection and tuning. Democratises ML for non-specialists.

📋

Foundation Models & LLMs

— General-purpose models fine-tuned for enterprise tasks. Reducing time-to-value dramatically.

🔒

Privacy-Preserving ML

— Federated learning, differential privacy for regulated data.

📊

Real-Time ML

— Streaming feature stores, decisions in <100ms at scale.

🌍

Responsible AI Regulation

— EU AI Act, ISO 42001. Compliance becomes a competitive moat.

Strategic Priority

By 2027, companies without ML capabilities in core processes will face structural competitive disadvantage in cost, speed, and personalisation.

Talent is the Bottleneck

The shortage of ML talent is severe. Invest in upskilling existing teams and building ML literacy across the organisation.

Data is the Sustainable Asset

Algorithms are commoditised. The company with better, cleaner, and richer proprietary data wins long-term.

CODE · ML FUNDAMENTALS

47 / 48

Course Summary

Key Takeaways

🏗️ Foundation

ML ≠ magic. Quality data beats clever algorithms every time.

📐 Supervised Learning

Start simple. Add complexity only when justified. Always validate out-of-sample.

🔍 Unsupervised

Clustering reveals hidden segments. PCA compresses noise. Market basket unlocks cross-sell.

⚖️ Responsibility

Bias is real, consequences are legal. Explainability is a business requirement.

💰 Business Impact

Quantify ROI before building. The business question matters more than the algorithm.

🚀 Next Steps

Pick one real business problem. Get the data. Run a simple model. Measure. Iterate. Ship.

CODE UNIVERSITY OF APPLIED SCIENCES · BERLIN

Firas Ben Hassan · AI Guest Lecturer · Machine Learning Fundamentals

const TOTAL = 48;

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
