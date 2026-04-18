# Course 7 Computer Vision

Computer Vision – Business Masters

* { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #0a0f0a; font-family: 'Segoe UI', sans-serif; color: #e2e8f0; display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding-bottom: 20px; }

#nav { width: 980px; max-width: 98vw; display: flex; align-items: center; justify-content: space-between; padding: 12px 0; }

#nav button { background: rgba(16,185,129,.15); border: 1px solid rgba(16,185,129,.4); color: #6ee7b7; padding: 7px 22px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all .2s; }

#nav button:hover { background: #059669; border-color: #059669; color: #fff; }

#nav button:disabled { opacity: 0.25; cursor: default; }

#counter { font-size: 13px; color: #10b981; font-weight: 700; letter-spacing: 1px; }

.slide-wrap { width: 980px; max-width: 98vw; }

.slide { width: 100%; aspect-ratio: 16/9; background: #0c1410; border: 1px solid rgba(16,185,129,.2); border-radius: 14px; overflow: hidden; display: none; flex-direction: column; box-shadow: 0 0 60px rgba(16,185,129,.08), 0 4px 24px rgba(0,0,0,.7); }

.slide.active { display: flex; }

.hdr { padding: 12px 28px 8px; border-bottom: 1px solid rgba(255,255,255,.06); background: rgba(255,255,255,.025); }

.tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #34d399; margin-bottom: 3px; }

.title { font-size: 17px; font-weight: 800; color: #f1f5f9; line-height: 1.2; }

.sub { font-size: 10px; color: #64748b; margin-top: 2px; }

.body { flex: 1; padding: 10px 28px; display: flex; gap: 14px; overflow: hidden; }

.foot { padding: 5px 28px; border-top: 1px solid rgba(255,255,255,.05); display: flex; justify-content: space-between; background: rgba(0,0,0,.25); }

.fl { font-size: 9px; font-weight: 700; letter-spacing: 1px; color: #10b981; }

.fn { font-size: 9px; color: #334155; }

.col { flex: 1; display: flex; flex-direction: column; gap: 6px; }

.col2 { flex: 2; }

.card { border-radius: 9px; padding: 8px 11px; border: 1px solid; }

.card.g { border-color: rgba(52,211,153,.35); background: rgba(16,185,129,.09); }

.card.p { border-color: rgba(167,139,250,.35); background: rgba(124,58,237,.09); }

.card.c { border-color: rgba(6,182,212,.35); background: rgba(6,182,212,.09); }

.card.a { border-color: rgba(251,191,36,.35); background: rgba(245,158,11,.09); }

.card.r { border-color: rgba(248,113,113,.35); background: rgba(239,68,68,.09); }

.card.b { border-color: rgba(96,165,250,.35); background: rgba(59,130,246,.09); }

.card.d { border-color: rgba(255,255,255,.1); background: rgba(255,255,255,.035); }

.card.o { border-color: rgba(251,146,60,.35); background: rgba(249,115,22,.09); }

.ct { font-size: 10px; font-weight: 700; margin-bottom: 3px; color: #f1f5f9; }

.cd { font-size: 10.5px; color: #94a3b8; line-height: 1.45; }

ul.L { list-style: none; display: flex; flex-direction: column; gap: 4px; }

ul.L li { font-size: 10.5px; line-height: 1.4; padding-left: 14px; position: relative; color: #cbd5e1; }

ul.L li::before { content: '▸'; position: absolute; left: 0; color: #10b981; font-size: 9px; top: 2px; }

.tbl { width: 100%; border-collapse: collapse; font-size: 10px; }

.tbl th { background: rgba(16,185,129,.15); color: #6ee7b7; padding: 5px 8px; text-align: left; border: 1px solid rgba(16,185,129,.2); font-weight: 700; font-size: 9px; letter-spacing: .5px; }

.tbl td { padding: 4px 8px; border: 1px solid rgba(255,255,255,.06); vertical-align: top; color: #cbd5e1; font-size: 10px; }

.tbl tr:nth-child(even) td { background: rgba(255,255,255,.025); }

.bdg { display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 9px; font-weight: 700; margin: 1px; }

.bdg.g { background: rgba(16,185,129,.2); color: #6ee7b7; border: 1px solid rgba(16,185,129,.4); }

.bdg.p { background: rgba(124,58,237,.2); color: #c4b5fd; border: 1px solid rgba(124,58,237,.4); }

.bdg.c { background: rgba(6,182,212,.2); color: #67e8f9; border: 1px solid rgba(6,182,212,.4); }

.bdg.a { background: rgba(245,158,11,.2); color: #fde68a; border: 1px solid rgba(245,158,11,.4); }

.bdg.r { background: rgba(239,68,68,.2); color: #fca5a5; border: 1px solid rgba(239,68,68,.4); }

.bdg.b { background: rgba(59,130,246,.2); color: #93c5fd; border: 1px solid rgba(59,130,246,.4); }

.bdg.o { background: rgba(249,115,22,.2); color: #fdba74; border: 1px solid rgba(249,115,22,.4); }

.hl { background: rgba(16,185,129,.07); border: 1px solid rgba(16,185,129,.25); border-radius: 8px; padding: 7px 11px; font-size: 10.5px; color: #cbd5e1; }

.lbl { font-size: 8.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #334155; margin-bottom: 3px; margin-top: 2px; }

.tl { display: flex; flex-direction: column; gap: 5px; }

.tli { display: flex; gap: 8px; align-items: flex-start; }

.tld { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; flex-shrink: 0; margin-top: 1px; color: #fff; }

.stat-box { text-align: center; background: rgba(16,185,129,.08); border: 1px solid rgba(16,185,129,.2); border-radius: 10px; padding: 8px; }

.stat-n { font-size: 22px; font-weight: 900; color: #34d399; line-height: 1; }

.stat-l { font-size: 9px; color: #475569; margin-top: 2px; }

.big-emoji { font-size: 26px; line-height: 1; margin-bottom: 4px; }

strong { color: #e2e8f0; }

/* TITLE SLIDE */

.ts { background: radial-gradient(ellipse at 15% 50%, #061410 0%, #0a0f0a 65%); position: relative; overflow: hidden; }

.ts::before { content: ''; position: absolute; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(16,185,129,.12) 0%, transparent 70%); top: -120px; right: -120px; pointer-events: none; }

.ts::after { content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(245,158,11,.07) 0%, transparent 70%); bottom: -60px; left: 200px; pointer-events: none; }

.ts-c { display: flex; flex-direction: column; height: 100%; padding: 28px 50px; justify-content: center; position: relative; z-index: 1; }

.ts-tag { font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #34d399; margin-bottom: 8px; }

.ts-main { font-size: 38px; font-weight: 900; line-height: 1.05; color: #f8fafc; }

.ts-main span { background: linear-gradient(90deg, #34d399, #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.ts-sub { font-size: 12px; color: #475569; margin-top: 8px; max-width: 420px; line-height: 1.5; }

.ts-inst { margin-top: 18px; display: flex; align-items: center; gap: 12px; }

.av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,#059669,#d97706); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: #fff; }

.ts-nm { font-size: 13px; font-weight: 700; color: #f1f5f9; }

.ts-rl { font-size: 10px; color: #475569; }

.ts-logo { margin-top: 14px; font-size: 9px; font-weight: 700; letter-spacing: 2px; color: #10b981; border: 1px solid rgba(16,185,129,.4); display: inline-block; padding: 3px 10px; border-radius: 4px; }

.ts-pills { position: absolute; right: 50px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 8px; z-index: 1; }

.tsp { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 12px; padding: 5px 14px; font-size: 10px; color: #64748b; }

.tsp span { color: #34d399; font-weight: 700; }

/* SECTION SLIDE */

.ss { background: linear-gradient(135deg, #0a0f0a 0%, #0d1f14 100%); }

.ss-c { display: flex; flex-direction: column; height: 100%; padding: 0 50px; justify-content: center; }

.ss-n { font-size: 80px; font-weight: 900; color: rgba(16,185,129,.1); line-height: 1; }

.ss-t { font-size: 30px; font-weight: 900; margin-top: -10px; color: #f8fafc; }

.ss-sub-t { font-size: 13px; background: linear-gradient(90deg,#34d399,#fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700; margin-top: 2px; }

.ss-d { font-size: 11.5px; color: #475569; margin-top: 6px; max-width: 500px; }

.ss-tags { display: flex; gap: 5px; margin-top: 12px; flex-wrap: wrap; }

.ss-tags .bdg { background: rgba(16,185,129,.12); color: #6ee7b7; border-color: rgba(16,185,129,.3); }

svg text { font-family: 'Segoe UI', sans-serif; }

← Prev

1 / 25

Next →

Master in Business · Applied AI Series

Computer

Vision (CV)

How machines learned to see — and what happens when you give every camera a brain connected to the internet

F

Firas Ben Hassan

AI Guest Lecturer · Computer Vision & Business AI

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

Machines That See — The Scale Is Already Staggering

Computer Vision is not a future technology. It is running, right now, at planetary scale.

📸

4.7 Trillion

photos taken per year. Every one a potential data point for a CV system.

📷

1 Billion+

CCTV cameras worldwide. More than one for every 8 people on Earth.

🏭

$320 Billion

Global CV market projected by 2032. The fastest-growing AI segment.

👁️ The CV Promise

Computer Vision gives machines the ability to

see, identify, measure, track, and act

on visual data — at superhuman speed, scale, and consistency. Every camera becomes a sensor. Every image becomes data.

🚀 Why Business Leaders Must Understand CV Now

CV is already embedded in your supply chain (defect detection), your stores (cashierless checkout), your security (access control), and your marketing (visual search). Understanding it is no longer optional.

⚠️ The Flip Side

Mass surveillance, deepfakes, biometric privacy, facial recognition bias. CV is the AI domain with the most immediate and significant ethical stakes.

MASTER IN BUSINESS · COMPUTER VISION

2 / 25

Course Overview

Today's Journey — 5 Blocks, 25 Slides, 2 Hours

Block 0 · 15min

CV History. From pixel processing to AlexNet to Vision Transformers.

Block 1 · 25min

Core CV tasks: Classification, Detection, Segmentation, Tracking, Generation.

Block 2 · 25min

How CV works: pixels → CNNs → Transformers. No maths required.

Block 3 · 25min

Industry applications. Transfer learning. Build vs Buy. The 2025 stack.

Block 4 · 30min

ROI, Bias, Privacy, GDPR, EU AI Act. Deploying responsibly.

By the end you will be able to…

Explain how a CNN extracts meaning from pixels — without writing code

Match the right CV technique to any business visual data problem

Calculate ROI and build the business case for a CV project

Brief a vendor or internal data science team on CV requirements

Identify bias, privacy, and regulatory risks specific to visual AI

⚠️ Transparency Statement

"

These slides were generated by AI and reviewed by a human expert.

" This session is itself a live demonstration of what AI can produce when applied thoughtfully to education.

AI-Generated

Human-Reviewed

MASTER IN BUSINESS · COMPUTER VISION

3 / 25

00

A Brief History of Computer Vision

60 years from hand-crafted edges to models that hallucinate images

The history reveals why 2012 was the true inflection point — and why the curve is still accelerating.

Edge Detection

SIFT

AlexNet

ResNet

ViT

Diffusion

History

Computer Vision's Four Eras

Each era was defined by how features were extracted — by hand, by algorithm, or by the machine itself

1

1960s–90s · Hand-Crafted Rules

Engineers manually define what an edge, corner, or shape looks like. Sobel filters, Canny edge detection, Hough transforms. Works for controlled industrial settings. Fails completely on real-world complexity.

Brittle

2

2000–2012 · Engineered Feature Descriptors

SIFT, HOG, SURF — algorithms that extract local patterns and encode them as vectors. SVMs then classify on these features. Face detection (Viola-Jones 2001) enables webcam face-finding. Big improvement, but still hand-designed.

Feature Engineering Era

3

2012–2020 · Deep CNN Revolution

AlexNet (2012) wins ImageNet by 10 points using GPU-trained CNNs. Features learned automatically. VGG, GoogLeNet, ResNet, EfficientNet follow. Object detection (YOLO, Faster R-CNN) enables real-time CV. Everything changes.

The Deep Learning Breakthrough

4

2020–Now · Vision Transformers & Generative CV

ViT (2020): attention replaces convolutions. SAM (Segment Anything) by Meta: segment any object with a click. DALL-E, Midjourney, Sora: generate photorealistic images and video from text. CV now creates reality, not just analyses it.

Generative Era

CV Performance on ImageNet (top-5 error %)

100%

50%

2%

AlexNet 2012

26% error

ResNet 2015

3.6% error

ViT 2022

~2% error

2000

2012

2015

Now

Human-level: ~5% error (achieved 2015)

💡 The Key Inflection

In 2012, AlexNet halved the best error rate overnight. Not an incremental improvement — a step change. The entire field pivoted to deep learning within 18 months. This is how CV disruption happens: suddenly.

MASTER IN BUSINESS · COMPUTER VISION

5 / 25

01

Core CV Tasks

The full menu — what can a machine actually see?

Seven fundamental visual tasks that cover 95% of business CV use cases — with the right architecture for each.

Classification

Detection

Segmentation

Tracking

OCR

Generation

Pose

CV Tasks · Overview

The Computer Vision Task Landscape

Every business CV application is built from these 7 fundamental capabilities — and they can be combined

🏷️

Image Classification

What is in this image? Single label per image. "This is a cracked weld" or "This is a healthy leaf."

ResNet · EfficientNet

📦

Object Detection

Where is it AND what is it? Draws bounding boxes. Multiple objects per image. Real-time capable.

YOLO · Faster R-CNN

🎨

Segmentation

Pixel-precise boundaries. Semantic (class per pixel) or Instance (each object separately). Medical imaging gold standard.

U-Net · SAM · Mask R-CNN

🎯

Object Tracking

Follow the same object across video frames. Assign identity. Count people, measure dwell time, track vehicles.

DeepSORT · ByteTrack

📄

OCR / Document AI

Extract text from images: invoices, forms, receipts, ID cards. Combines CV + NLP for full document understanding.

Tesseract · Azure DI · AWS Textract

🧍

Pose & Gesture

Detect skeleton keypoints. Estimate body posture. Ergonomics, sports analytics, sign language, AR interfaces.

MediaPipe · OpenPose

🌫️

Image Generation

Create photorealistic images from text prompts. Diffusion models. Product renders, synthetic training data, marketing.

Stable Diffusion · DALL-E · Midjourney

🔮

Depth & 3D Reconstruction

Estimate distance from camera. Build 3D scene models. Autonomous vehicles, robotics, AR, digital twins.

NeRF · Depth Anything

MASTER IN BUSINESS · COMPUTER VISION

7 / 25

CV Tasks · Deep Dive

Detection vs Segmentation — Choosing the Right Precision

More precision = more data, more compute, more cost. Match the task to the business need.

Classification

🐱

🐶

Output: "Cat, Dog" (labels only)

✓ Cheap ✓ Fast ✗ No location

Object Detection

🐱

Cat 97%

🐶

Dog 94%

Output: label + bounding box + confidence

✓ Location ✓ Real-time ✓ Multiple objects

Segmentation

🐱

🐶

Output: pixel-precise mask per object

✓ Exact shape ✗ More data needed ✗ Slower

→

← Increasing precision, cost, and data requirement →

Classification: ~500 images/class · Detection: ~1,000–5,000 · Segmentation: ~500–2,000 (masked)

When to Use Each — Business Decision Guide

Classification:

"Is this product defective?" Pass/fail quality control. No need to know where the defect is.

Detection:

"Where are all the safety helmets in this image?" Counting, locating, alerting.

Segmentation:

"Measure the exact area of this tumour" or "Cut the product out of this background." Precision matters.

💡 Business Rule of Thumb

Start with the least precise task that solves your problem. Classification is 5–10× cheaper to label and train than segmentation. Only go pixel-level if you genuinely need it.

⚠️ Annotation Cost Reality

Labelling 10,000 images for classification: ~€1,000. Same 10,000 for segmentation: €15,000–€40,000. The annotation budget often determines the architecture choice.

MASTER IN BUSINESS · COMPUTER VISION

8 / 25

02

How Computer Vision Works

From pixels to predictions — no maths required

Pixels, convolutions, feature maps, pooling, and Vision Transformers. The mechanisms behind every CV system.

Pixels

Convolution

Feature Maps

CNN

ViT

Attention

How CV Works

Step 1 — Images Are Just Numbers

Before any intelligence, an image is simply a grid of numbers. The model never "sees" — it computes.

How an Image Is Represented Digitally

Grayscale Image

5×5 pixels

240

200

180

160

220

100

20

10

15

80

230

210

190

170

200

0 = black, 255 = white

Colour Image = 3 Channels

R

G

B

224×224 RGB = 150,528 numbers per image

→

Convolution Filter Sliding

3×3 "Edge Detector" filter scans the image

-1

0

+1

-2

0

+2

-1

0

+1

Sobel X filter → detects vertical edges

Multiply filter values × image pixels → sum → 1 output value

Slide filter across entire image → Feature Map

Feature Map

"Where are the edges?"

High value = strong edge detected

The Convolution Intuition

A filter is a tiny pattern detector — a 3×3 or 5×5 grid of numbers. It slides across the whole image, computing "how much does this region look like my pattern?" at every position.

One filter → one feature map. 64 filters → 64 feature maps. Each map answers a different question: "Where are horizontal edges? Vertical edges? Circular shapes?"

📌 Business Analogy

Imagine scanning a contract page with a ruler to find every horizontal line, then again with a different tool to find every signature. A CNN does this with hundreds of "tools" simultaneously, learning which tools to use from data — not from human instructions.

What the Network Learns

Early layers: edges, colours, textures. Middle layers: corners, curves, simple shapes. Deep layers: eyes, wheels, logos, faces. The hierarchy builds automatically through training.

MASTER IN BUSINESS · COMPUTER VISION

10 / 25

How CV Works

The CNN Pipeline — From Pixels to Prediction

How convolution, pooling, and fully connected layers work together to classify an image

224

×

224

Input

Image

Conv1

64 filters

Pool

½ size

Conv2

128 filters

Pool

½ size

Conv3

256 filters

GAP

FC Layers

Cat 89%

Dog 8%

Bird 3%

Output

← Feature Extraction (learns WHAT) ——————→

← Classification →

Edges

Shapes

Objects

Feature maps shrink spatially but deepen in channels → abstract understanding builds layer by layer

Pooling — The Compression Step

After each convolution,

pooling

halves the spatial size. A 224×224 image becomes 112×112, then 56×56. This makes the model

translation-invariant

— a cat in the corner = a cat in the centre — and dramatically reduces computation.

Why Depth Matters

Early layers detect simple patterns (edges). Middle layers combine them into shapes (eyes, wheels). Deep layers recognise complex objects (faces, defects, diseases). You need depth to get abstraction.

ResNet's Skip Connections — Why Deeper = Better

Deeper networks should be smarter — but gradients "vanish" during training. ResNet (2015) solved this with

skip connections

: each layer can pass its input unchanged to deeper layers. Enabled 152-layer networks. Now we use 1000+ layers.

MASTER IN BUSINESS · COMPUTER VISION

11 / 25

How CV Works

Vision Transformers (ViT) — When Attention Meets Images

"An image is worth 16×16 words" — Dosovitskiy et al., 2020. The paper that brought NLP's Transformer to vision.

The Limitation of CNNs

CNNs use local filters — each neuron only "sees" a small patch of the image. Understanding long-range relationships (e.g. the nose is related to the face across a large image) requires many layers and is still limited.

Context across the whole image is hard.

⭐ ViT — The Big Idea

① Divide the image into a grid of fixed-size

patches

(e.g. 16×16 pixels each)

② Treat each patch like a "word" — flatten it into a vector

③ Feed the sequence of patch vectors into a

Transformer

④ Each patch attends to all other patches simultaneously

Result: every patch "knows about" every other patch from layer 1. Global context without stacking many layers.

Better at capturing global image context than CNNs

Scales beautifully — bigger model + more data = better

Foundation of most modern CV models: SAM, CLIP, GPT-4V

Image Patching Visualised

P1

P2

P3

P4

P5

P6

P7

P8

P9

P10

P11

P12

Image → 12 patches (4×3 grid)

Each patch → vector embedding

Sequence → Transformer → labels

Transformer

P1 attends to P7?

Global attention

→

→ "This is a cat" ✓

CNN vs ViT — When to Use Which

CNN:

Small datasets, limited compute, real-time on edge devices. Still dominates in manufacturing and embedded systems.

ViT:

Large datasets, cloud compute, highest accuracy needed, multimodal tasks. Powers CLIP, GPT-4V, Gemini Vision.

MASTER IN BUSINESS · COMPUTER VISION

12 / 25

03

Industry Applications & The Modern CV Stack

Transfer Learning, Data Strategy, Build vs Buy

Where the real value is, how to get there fast, and the tools every business can use today.

Transfer Learning

Data Augmentation

YOLO

SAM

CLIP

Cloud Vision APIs

Applications

Computer Vision Across Industries

Every industry has high-value visual data that CV can unlock — the pattern is always the same: cameras + models + automation

🏭

Manufacturing & Quality

Defect detection on production lines at 1,000+ parts/min. Surface scratch, crack, and dimensional anomaly detection. Replaces manual inspection: 99.5%+ accuracy vs 95% human. 24/7 with no fatigue.

🏥

Healthcare & Medical Imaging

Radiology AI reads X-rays, CTs, MRIs for tumours, fractures, diabetic retinopathy. FDA-approved tools already in clinical use. AI matches or exceeds radiologist performance on specific tasks.

🛒

Retail & Shelf Intelligence

Out-of-stock detection from store cameras. Planogram compliance monitoring. Cashierless checkout (Amazon Go). Customer foot traffic heatmaps. Shrinkage detection.

🚗

Automotive & Mobility

Autonomous driving perception (Tesla, Waymo). ADAS: lane departure, pedestrian warning, blind spot monitoring. Damage assessment for insurance claims from a phone photo. Parking analytics.

🏗️

Construction & Real Estate

Progress monitoring from drone/site cameras — compare build vs plan. PPE compliance (helmets, vests). Crack detection in structures. Digital twin creation from photos for BIM.

🌾

Agriculture & Environment

Crop disease and pest detection from drone imagery. Yield estimation. Satellite imagery for deforestation monitoring, carbon credit verification, and ESG reporting. Precision agriculture.

MASTER IN BUSINESS · COMPUTER VISION

14 / 25

Practical CV

Transfer Learning & Data Strategy — The Business Shortcuts

You don't need millions of images. You need the right strategy.

1

Start with a Pre-Trained Backbone

A ResNet50 trained on 14M ImageNet images already knows edges, textures, shapes, and objects. Use it as your starting point. You get 50 years of "visual knowledge" for free.

2

Freeze the Backbone, Train the Head

Keep all the learned visual features. Replace only the final classification layer. Train that layer on your 200–500 domain images. Done in hours on a single GPU.

3

Data Augmentation — Multiply Your Data

Flip, rotate, crop, zoom, change brightness/contrast, add noise. 500 real images → 10,000+ training examples. Free. Always use it. Reduces overfitting dramatically.

4

Synthetic Data — When Labels Are Expensive

Generate artificial labelled images using 3D rendering or generative AI. Tesla renders driving scenarios. Boeing renders aircraft components. Free, infinite, perfectly labelled data.

5

Active Learning — Label Smarter

Model tells you which unlabelled images would help it most. Humans label only those. Achieves 95% accuracy with 70% fewer labels. Roboflow and Label Studio support this workflow.

How Many Images Do You Actually Need?

Scenario

Images Needed

Strategy

Simple classification (2–5 classes)

200–500/class

Transfer learning + augmentation

Complex classification (10–50 classes)

1,000–5,000/class

Fine-tune full network

Object detection

1,000–10,000 total

YOLO with pre-trained weights

Segmentation

500–2,000 (masked)

SAM for auto-labelling + fine-tune

From scratch (no transfer)

1M+

Almost never do this

💡 Meta's Segment Anything Model (SAM)

Zero-shot segmentation: click a point, SAM segments the object. Trained on 11M images, 1B masks. Dramatically reduces annotation cost for segmentation projects. Use it to auto-label your dataset.

MASTER IN BUSINESS · COMPUTER VISION

15 / 25

Practical CV

The 2025 Computer Vision Stack

From foundational models to cloud APIs — what tools and models businesses actually use

Category

Tool / Model

Best For

Access

Typical Cost

🎯 Object Detection

YOLOv10 / YOLOv9

Real-time detection, edge deployment, speed-critical

Open source

Free (GPU infra only)

🎨 Segmentation

SAM 2 (Meta)

Zero-shot segment anything, video tracking

Open source

Free

🖼️ Classification Backbone

EfficientNet / ViT / ConvNeXt

Transfer learning starting points

HuggingFace / timm

Free

🌐 Multimodal (Vision + Language)

CLIP / GPT-4V / Gemini Vision

Image+text understanding, zero-shot classification

API

$0.01–0.10/image

☁️ Cloud Vision APIs

Google Vision AI / AWS Rekognition / Azure CV

OCR, face, label detection, no ML needed

API

$0.001–0.005/image

🏭 Industrial Inspection

Landing AI / Cognex VisionPro

Manufacturing defect detection, turnkey

SaaS

€1,000–10,000/mo

🏥 Medical CV

Inference.ai / Aidoc / Paige

Radiology, pathology AI — FDA approved

SaaS

Per-study pricing

🌫️ Image Generation

Stable Diffusion / DALL-E 3 / Midjourney

Synthetic training data, product visuals, marketing

API / Open source

$0.02–0.08/image

🏃 Fastest to Value

Cloud Vision APIs (Google, AWS, Azure). No ML needed. Call an API, get labels back. For standard tasks (OCR, object labels, faces): production-ready in days.

🎯 Best Custom Accuracy

YOLO or EfficientNet + transfer learning on your images. 2–6 week project. Best when your objects/defects are domain-specific and not covered by general APIs.

⚡ Zero-Shot Superpower

CLIP or GPT-4V: describe what you want in natural language, model classifies or detects without any training data. "Does this image contain a safety helmet?" — no labels needed.

MASTER IN BUSINESS · COMPUTER VISION

16 / 25

04

Business ROI, Risks & Responsible CV

Making the case — and managing the most consequential risks in AI

ROI calculation, real case studies, bias in facial recognition, GDPR, the EU AI Act, and deepfake risks.

ROI

Bias

Facial Recognition

Deepfakes

GDPR

EU AI Act

Business ROI

The Business Case for Computer Vision — Real Numbers

CV is one of the highest-ROI AI investments available today — when scoped correctly

Use Case

CV Task

Measurable Impact

Payback

🏭 Production line defect detection

Classification + Detection

Scrap cost -30–60%, throughput +15%, inspection cost -90%

3–9 months

📦 Warehouse picking accuracy

Object Detection + OCR

Picking errors -80%, returns cost -40%

4–8 months

🛒 Retail shelf intelligence

Detection + Tracking

Out-of-stock incidents -35%, revenue uplift +3–5%

6–12 months

🏥 Radiology triage

Classification + Segmentation

Radiologist time -40% on routine reads, 0 missed critical flags

12–24 months

🚗 Insurance claim photos

Segmentation + OCR

Claim processing time: 5 days → 20 minutes, fraud -15%

4–6 months

🌾 Crop disease monitoring

Classification + Drone

Yield loss -20%, pesticide use -30%

1–2 seasons

🏗️ Construction site safety

Detection + Tracking

PPE violations -75%, incident rate -40%

3–6 months

€0.002

Cost per image analysed (cloud API)

€0.50

Cost per image: human inspector

99.7%

CV defect accuracy (BMW production AI)

6–12w

Typical pilot-to-production timeline

📐 CV ROI Formula

Annual Savings

= (Inspection cost saved × volume) + (Defect catch rate improvement × scrap cost) + (Throughput gain × margin)

Annual Cost

= GPU infra + API fees + labelling + maintenance

ROI

= (Savings − Cost) / Cost × 100%

Benchmark:

Industrial CV projects typically deliver 400–1,200% ROI in year 1. The cost of a CV system is usually recovered in the first quarter of production use.

MASTER IN BUSINESS · COMPUTER VISION

18 / 25

Responsible CV

Bias in Computer Vision — The Face Recognition Problem

CV bias is not hypothetical. It is documented, systemic, and has caused real harm to real people.

⚠️ The MIT Gender Shades Study — 2018

Researcher Joy Buolamwini tested commercial facial analysis APIs from IBM, Microsoft, and Face++ on images of 1,000 faces across gender and skin tone.

Results for gender classification:

Light-skinned men:

error rate 0.8%

Dark-skinned women:

error rate 34.7%

The same commercial system was 43× less accurate for dark-skinned women. These systems were used in hiring, law enforcement, and access control.

Root Cause: Training Data

Benchmark datasets like ImageNet and earlier face datasets dramatically over-represent light-skinned, Western, male subjects. Models trained on biased data produce biased predictions. Garbage in → garbage out — at massive scale.

Real-World Consequences

Robert Williams (2020):

Wrongfully arrested by Detroit police based on a facial recognition match. He is Black. The system misidentified him.

Porcha Woodruff (2023):

Arrested while 8 months pregnant based on a false facial recognition match. Another Black woman.

These are not edge cases — they are the predicted outcome of biased systems deployed without human review in high-stakes contexts.

✅ Mitigation for Business

Audit model performance across demographic subgroups before deployment. Never use facial recognition as sole evidence in high-stakes decisions. Require human review for any consequential automated decision. Document your bias testing — the EU AI Act requires it.

Policy note:

The EU AI Act bans real-time facial recognition in public spaces by law enforcement (with narrow exceptions). Several US cities have banned it outright. Know the law before deploying.

MASTER IN BUSINESS · COMPUTER VISION

19 / 25

Responsible CV

Deepfakes, GDPR & the EU AI Act

Generative CV creates new attack surfaces. Regulators are catching up — but slowly.

🎭 The Deepfake Threat Landscape

What is a deepfake?

AI-generated video or image of a real person saying or doing things they never did. Powered by GANs and diffusion models.

Business risks:

• CEO fraud: deepfake audio of your CEO ordering a wire transfer (€25M stolen from a HK firm, 2024)

• Disinformation: fabricated product incidents, earnings calls

• Extortion: synthetic intimate imagery targeting employees

• Stock manipulation: deepfake earnings announcements

🛡️ Deepfake Detection

CV-based detection tools (Microsoft, Intel FakeCatcher, Sensity AI). Look for unnatural blinking, lighting inconsistencies, edge artefacts. Detection is an arms race — generators improve faster than detectors. Best defence: verification processes, not detection alone.

🔒 GDPR & Computer Vision

Biometric data

(faces, fingerprints, retinas) = "special category" data under GDPR → explicit consent required for processing.

Workplace surveillance:

employee monitoring via CV requires legal basis, proportionality, worker consultation, and impact assessment.

Customer cameras:

CCTV with face recognition → DPIA mandatory, likely unlawful without explicit consent in EU retail contexts.

📋 EU AI Act — CV-Specific Rules

Prohibited:

real-time remote biometric ID in public spaces (mostly). Social scoring systems. Emotion recognition in workplaces and schools.

High-risk:

CV in critical infrastructure, HR, border control, law enforcement → mandatory conformity assessment, human oversight, transparency.

Penalty:

up to €35M or 7% global revenue for prohibited uses.

MASTER IN BUSINESS · COMPUTER VISION

20 / 25

Strategy

Build vs Buy vs API — The CV Decision Framework

Most businesses should not train their own CV models. Here is when exceptions apply.

Approach

What It Is

Cost

Time to Value

When to Choose

☁️

Cloud Vision API

Google Vision AI, AWS Rekognition, Azure CV. Call API, get labels.

€0.001–0.005/image

Hours–Days

Standard tasks: OCR, object labels, faces, explicit content. First attempt always.

🤖

Zero-Shot (CLIP / GPT-4V)

Describe what you want in text. Model classifies with no training.

€0.01–0.10/image

Hours

Novel categories, no labelled data, prototyping. Surprisingly powerful.

🎯

Transfer Learning

Pre-trained model fine-tuned on your images.

€5–50K project + GPU

2–6 weeks

Domain-specific objects (your products, your defects) not covered by generic APIs.

🏭

Turnkey SaaS

Landing AI, Cognex, Keyence — domain-specific CV platforms.

€1K–10K/month

Days–4 weeks

Industrial inspection, no internal ML team, regulated sector needing validated software.

🏗️

Train from Scratch

Build your own architecture and training pipeline.

€500K–5M+

6–24 months

Almost never. Only if you have genuinely novel visual domains with millions of labelled examples.

🎯 The Decision Tree

① Is it a standard task (OCR, faces, common objects)? →

Cloud API.

② Can you describe it in words? →

Zero-shot (CLIP/GPT-4V).

③ Domain-specific + labelled data available? →

Transfer learning.

④ Need validation, no ML team? →

Turnkey SaaS.

⑤ Train from scratch? →

Almost certainly no.

⚠️ The Most Expensive Mistake

Building a custom model for something a cloud API already does well. A custom pipeline for standard OCR costs €50K+ to build and €20K/year to maintain. Azure Document Intelligence does it for €0.01/page and is already GDPR-compliant.

💡 The moat

is never the model. It's your

proprietary labelled data

(your defect library, your medical images, your inventory), your

domain process knowledge

, and your

feedback loop

from production.

MASTER IN BUSINESS · COMPUTER VISION

21 / 25

Execution

Running a CV Project — From Pilot to Production

The end-to-end playbook for business leaders sponsoring CV initiatives

1

Define the Problem in Visual Terms (Week 1)

What exactly should the model see? Under what lighting, distance, angle? What constitutes a positive vs negative case? "Detect defective welds" is not specific enough. "Detect surface cracks >2mm on stainless steel welds under factory fluorescent lighting" is.

2

Image Collection & Camera Setup (Week 1–3)

Camera placement, resolution, frame rate. Consistent lighting is more important than camera quality. Collect images that represent ALL conditions you'll encounter in production — including edge cases and failure modes.

3

Labelling & Data Validation (Week 2–4)

Use Roboflow, Label Studio, or CVAT. Minimum 2 annotators per image with inter-annotator agreement check. Annotation quality is the #1 driver of model quality. Budget here generously.

4

Baseline with Transfer Learning (Week 3–5)

Fine-tune a pre-trained model on your labelled data. Evaluate on a held-out test set. Define your acceptable precision/recall threshold before seeing results — prevents post-hoc rationalization.

5

Deploy, Monitor & Retrain (Week 6+)

Production images differ from training images. Log all predictions. Flag and review low-confidence cases. Schedule monthly retraining. Add new failure modes as you discover them.

⚠️ Top Reasons CV Projects Fail

Inconsistent lighting

— the #1 production failure. Model trained under one lighting, deployed in another.

Class imbalance

— 1,000 "good" images, 20 "defective" → model never learns defects.

No edge cases

— perfect lab images, messy real-world inputs.

No monitoring

— model drift goes undetected for months.

Precision/recall confusion

— optimise for the wrong metric for your use case.

✅ Key CV Metrics Explained

Precision:

Of all defects the model flagged, how many were real? (Minimize false alarms → production stops)

Recall:

Of all real defects, how many did the model catch? (Minimize misses → escapes to customer)

mAP:

Mean average precision — standard benchmark for detection tasks

💡 The Precision-Recall Trade-off:

For safety-critical defects, maximise recall — you'd rather stop the line falsely than ship a dangerous product. For high-throughput QC, balance both. Define this threshold with the business before training.

MASTER IN BUSINESS · COMPUTER VISION

22 / 25

Frontier

Generative CV — When Machines Create Visual Reality

Diffusion models, video generation, and multimodal AI are rewriting the rules of visual content

🌫️ Diffusion Models — How Images Are Generated

① Start with a real image → gradually add random noise over 1,000 steps until it's pure static

② Train a neural network to

reverse this process

— predict the original from the noisy version

③ At inference: start from pure noise + a text prompt → progressively denoise into a coherent image matching the prompt

The model learns the entire distribution of visual reality. Then it can sample new images from it.

🎬 Video Generation — Sora & Beyond

OpenAI Sora (2024): generate photorealistic 60-second videos from a text prompt. Consistent physics, lighting, characters across frames. Runway Gen-3, Kling, Luma. The creative and misinformation implications are profound and still unfolding.

✅ Legitimate Business Uses Today

Product visualisation:

Generate 100 product lifestyle shots from one product photo — no photoshoot needed. Nike, IKEA, Zalando all doing this.

Synthetic training data:

Generate labelled defect images to augment scarce real data. Works for rare failure modes.

Architecture & Real Estate:

Render unbuilt spaces photorealistically from floor plans.

Marketing localisation:

Generate culturally appropriate product imagery for each market automatically.

Fashion & Retail:

Virtual try-on, model-free product images, style variation at scale.

⚠️ The Risks You Must Manage

Deepfake weaponisation:

competitors, bad actors, disgruntled employees.

IP infringement:

generated images may contain training data copyrighted content (pending litigation).

Disclosure obligations:

several jurisdictions now require labelling of AI-generated images.

Brand risk:

generative AI can be used to fabricate brand crises.

MASTER IN BUSINESS · COMPUTER VISION

23 / 25

Self-Check

Test Yourself — 10 Strategic CV Questions

Can you answer these from memory? These are the questions boards and clients will ask.

Explain the difference between

object detection and instance segmentation

. Give a manufacturing example of when you'd need each.

A competitor uses a

CNN defect detector

with 99% accuracy but your team achieved 94%. What three things would you investigate first?

Your company has 300 labelled images of product defects. Walk through your complete

data and model strategy

to build a working detector.

Why might a

cloud Vision API

outperform a custom-trained model for your use case — and when would it be the wrong choice?

What is a

Vision Transformer

, and why does it sometimes outperform CNNs on large datasets?

Explain the

MIT Gender Shades findings

to a board member who wants to deploy facial recognition at entry points. What would you recommend?

Under the

EU AI Act

, which CV use cases are prohibited and which are high-risk? What does compliance require?

A deepfake video of your CFO announcing false earnings is circulating. What are your

immediate response options

, and how could CV help?

Compare the

precision vs recall trade-off

for: (a) food safety inspection, (b) retail shelf out-of-stock detection. Which do you prioritise in each case, and why?

When would you choose

CLIP zero-shot classification

over fine-tuning a ResNet? What are the limits of the zero-shot approach?

💡 Capstone Challenge:

A European car manufacturer produces 5,000 engine blocks/day. Current manual inspection: 3 inspectors per shift, 4% defect escape rate to assembly, each escape costs €12,000 in downstream rework. Design a complete CV solution: task type, camera setup, data strategy, model choice, deployment architecture, KPIs, EU AI Act compliance assessment, and 3-year ROI projection. Present in 5 minutes.

MASTER IN BUSINESS · COMPUTER VISION

24 / 25

Course Summary

Key

Takeaways

👁️ Every Camera Is a Sensor

CV turns passive cameras into active intelligence. 1B+ cameras exist. Adding CV to them is the highest-leverage visual data opportunity in most businesses.

🏷️ 7 Core Tasks

Classification, Detection, Segmentation, Tracking, OCR, Pose, Generation. Match the task to the business need — and always start with the least precise option that works.

🔢 Pixels → Features → Predictions

CNNs learn hierarchical features automatically. ViTs add global attention. Both are powered by transfer learning — you rarely train from scratch.

🚀 API First, Build Second

Cloud Vision APIs → Zero-shot (CLIP) → Transfer learning → Turnkey SaaS → Custom training. Most businesses should stop at step 2 or 3.

⚖️ Bias is Documented & Consequential

Facial recognition error rates differ by 43× across demographics. Real people have been wrongfully arrested. Audit, document, and apply human review on high-stakes decisions.

📋 Compliance is Not Optional

GDPR: faces = biometric special category data. EU AI Act: bans real-time public facial recognition, mandates audits for high-risk CV. Deepfake disclosure laws emerging. Know before deploying.

🎯 Your Next Step

Identify one visual, repetitive, high-volume process in your organisation. Take 200 photos. Call a cloud Vision API. You now have everything you need to run a pilot this month.

MASTER IN BUSINESS · APPLIED AI SERIES

Firas Ben Hassan · AI Guest Lecturer · Computer Vision for Business

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
