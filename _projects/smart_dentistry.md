---
layout: page
title: AI-Driven Digital Dentistry
description: Next-Generation AI Platform for Comprehensive Oral Healthcare.
img: assets/img/smart_dentistry/preview.jpg
importance: 1
category: Smart Healthcare
related_publications: false 
---

<style>
    /* 隐藏默认标题 */
    header.post-header { display: none !important; }

    /* 全局背景微调 */
    body { background-color: #f8f9fa; }
    
    /* 1. Hero 区域：交互式放大 */
    .hero-container {
        position: relative;
        cursor: zoom-in;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        transition: transform 0.3s ease;
        border: 1px solid #e0e0e0;
    }
    .hero-container:hover {
        transform: scale(1.01);
        box-shadow: 0 20px 50px rgba(0,0,0,0.25);
    }
    /* 模态框 */
    .lightbox {
        display: none;
        position: fixed;
        z-index: 9999;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.9);
        justify-content: center;
        align-items: center;
    }
    .lightbox img {
        max-width: 95%;
        max-height: 95%;
        box-shadow: 0 0 50px rgba(255,255,255,0.1);
    }

    /* 2. 章节通用样式 */
    .section-header {
        margin-top: 60px;
        margin-bottom: 30px;
        border-left: 5px solid #c9302c;
        padding-left: 20px;
    }
    .section-title { font-weight: 800; font-size: 1.8rem; color: #333; margin: 0; }
    .section-subtitle { color: #777; font-size: 1.1rem; margin-top: 5px; }

    /* 3. Dark Mode (Jaw Motion) */
    .dark-mode-section {
        background-color: #121212;
        color: #e0e0e0;
        padding: 60px 40px;
        margin: 60px -60px; /* 撑满容器宽度 */
        box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
    }
    .dark-mode-section h3 { color: #ff6b6b !important; border-color: #ff6b6b; }
    .dark-mode-text { color: #aaa; font-size: 0.95rem; }
    
    /* 流程箭头 (4D部分用) */
    .flow-arrow { font-size: 2rem; color: #555; text-align: center; margin: 10px 0; }
    @media (min-width: 768px) { .flow-arrow { transform: rotate(-90deg); margin: 0; } }
</style>

<script>
function openLightbox() {
    document.getElementById('hero-lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('hero-lightbox').style.display = 'none';
}
</script>


<div class="text-center mb-5">
    <h1 style="font-weight: 800; font-size: 3rem; background: -webkit-linear-gradient(#222, #666); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Next-Generation AI Digital Dentistry Platform
    </h1>
    <p class="lead text-muted">Comprehensive Ecosystem: Diagnosis · Analysis · Design · Manufacturing</p>
</div>

<div class="hero-container" onclick="openLightbox()">
    {% include figure.liquid loading="eager" path="assets/img/smart_dentistry/preview.jpg" title="Click to Expand" class="img-fluid" %}
    <div style="position: absolute; bottom: 10px; right: 20px; color: #666; font-size: 0.8rem; background: rgba(255,255,255,0.8); padding: 2px 8px; border-radius: 4px;">
        <i class="fas fa-search-plus"></i>
    </div>
</div>

<div id="hero-lightbox" class="lightbox" onclick="closeLightbox()">
    <img src="{{ '/assets/img/smart_dentistry/overview_arch.jpg' | relative_url }}" alt="Architecture">
</div>


<div class="section-header">
    <h2 class="section-title">1. Multi-modal Data Fusion & Processing</h2>
    <div class="section-subtitle">Establishing the "Digital Patient" foundation.</div>
</div>

<div class="row align-items-center mb-5">
    <div class="col-md-6">
        {% include figure.liquid loading="eager" path="assets/img/smart_dentistry/2.jpg" title="Input: CBCT" class="img-fluid rounded z-depth-1" %}
        <div class="caption mt-1"><strong>Input A:</strong> CBCT / Facial Data</div>
    </div>
    <div class="col-md-6">
        <div class="rounded z-depth-1" style="overflow: hidden; line-height: 0;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/AI_Segmentation.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-1"><strong>Process I:</strong> AI Segmentation</div>
    </div>
</div>

<div class="row align-items-center mb-5">
    <div class="col-md-6">
        {% include figure.liquid loading="eager" path="assets/img/smart_dentistry/3.jpg" title="Input: Oral Scan" class="img-fluid rounded z-depth-1" %}
        <div class="caption mt-1"><strong>Input B:</strong> Intraoral Scan Data</div>
    </div>
    <div class="col-md-6">
        <div class="rounded z-depth-1" style="overflow: hidden; line-height: 0;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/Original_Scan_Model.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-1"><strong>Process II:</strong> Original Scan Model</div>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="rounded z-depth-2" style="overflow: hidden; background: #000;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/fusion.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-2 font-weight-bold"><strong>Result:</strong> High-Precision Multi-modal Fusion</div>
    </div>
</div>


<div class="section-header">
    <h2 class="section-title">2. AI-Assisted Teeth Alignment (TAPoseNet)</h2>
    <div class="section-subtitle">Automated orthodontic simulation based on pose estimation.</div>
</div>

<div class="row justify-content-center mb-4">
    <div class="col-md-10">
        {% include figure.liquid path="assets/img/smart_dentistry/TAPoseNet.jpg" title="Before vs After" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Comparison: Before (Left) vs. After AI Alignment (Right)</div>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="rounded z-depth-2" style="overflow: hidden; background: #1e1e1e;">
            <video controls style="width: 100%;">
                <source src="{{ '/assets/video/smart_dentistry/Teeth_Alignment.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-2 text-center">Visualization of the TAPoseNet Alignment Process (MICCAI 2024)</div>
    </div>
</div>


<div class="section-header">
    <h2 class="section-title">3. Telemedicine & Facial Prediction</h2>
    <div class="section-subtitle">Remote diagnosis visualization and orthodontic effect prediction.</div>
</div>

<div class="row align-items-center">
    <div class="col-md-3">
        <div class="mb-3">
            {% include figure.liquid path="assets/img/smart_dentistry/Diagnosis_UI.jpg" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Diagnosis UI</div>
        </div>
        <div>
            {% include figure.liquid path="assets/img/smart_dentistry/Analysis_Data.jpg" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Analysis Data</div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="rounded z-depth-2 border" style="overflow: hidden;">
            <video controls style="width: 100%;">
                <source src="{{ '/assets/video/smart_dentistry/face_pred.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption font-weight-bold">AI Prediction: Orthodontics & Aging Simulation</div>
    </div>

    <div class="col-md-3">
         <div>
            {% include figure.liquid path="assets/img/smart_dentistry/Comparison.jpg" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Comparison</div>
        </div>
    </div>
</div>


<div class="dark-mode-section">
    <div class="container" style="max-width: 1100px;">
        <h3 style="border-left: 4px solid #ff6b6b; padding-left: 15px; margin-bottom: 30px;">4. 4D Jaw Motion & Risk Assessment</h3>
        
        <div class="row align-items-center">
            
            <div class="col-md-4 mb-4">
                <h5 style="color: #fff; border-bottom: 1px solid #444; padding-bottom: 8px;">1. Structure</h5>
                {% include figure.liquid path="assets/img/smart_dentistry/jaw_structure.jpg" class="img-fluid rounded" %}
                <p class="dark-mode-text mt-2">Precise modeling of the TMJ disc anterior displacement.</p>
            </div>

            <div class="col-md-4 mb-4">
                <h5 style="color: #fff; border-bottom: 1px solid #444; padding-bottom: 8px;">2. Motion Tracking</h5>
                {% include figure.liquid path="assets/img/smart_dentistry/jaw_motion.jpg" class="img-fluid rounded" %}
                <p class="dark-mode-text mt-2">Real-time 4D tracking of jaw movement trajectory.</p>
            </div>

            <div class="col-md-4 mb-4">
                <h5 style="color: #fff; border-bottom: 1px solid #444; padding-bottom: 8px;">3. Stress Analysis</h5>
                {% include figure.liquid path="assets/img/smart_dentistry/jaw_heatmap.jpg" class="img-fluid rounded" %}
                <p class="dark-mode-text mt-2">Occlusion stress heatmap for risk assessment.</p>
            </div>
        </div>
    </div>
</div>


<div class="section-header">
    <h2 class="section-title">5. Intelligent Restoration Design</h2>
    <div class="section-subtitle">Automated crown/bridge generation and texture optimization.</div>
</div>

<div class="row justify-content-center">
    <div class="col-12">
        {% include figure.liquid path="assets/img/smart_dentistry/texture_optimization.jpg" class="img-fluid rounded z-depth-1" %}
        <div class="caption mt-2">
            AI-driven texture optimization and bridge design for realistic restoration.
        </div>
    </div>
</div>


<div class="section-header">
    <h2 class="section-title">6. Chairside Manufacturing</h2>
    <div class="section-subtitle">Direct 3D printing of clear aligners.</div>
</div>

<div class="row">
    <div class="col-md-5">
        <div style="height: 100%; min-height: 400px;">
            {% include figure.liquid path="assets/img/smart_dentistry/Chairside_1.jpg" class="img-fluid rounded z-depth-1" style="height: 100%; object-fit: cover;" %}
        </div>
        <div class="caption">Chairside Printing Station</div>
    </div>

    <div class="col-md-7 d-flex flex-column">
        <div class="mb-4">
            {% include figure.liquid path="assets/img/smart_dentistry/Chairside_2.jpg" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Comparison: Traditional vs. Direct Printing</div>
        </div>
        
        <div class="p-4" style="background: #e9ecef; border-radius: 8px; flex-grow: 1;">
            <h5 class="font-weight-bold" style="color: #333;">High-Efficiency Manufacturing</h5>
            <p style="color: #555;">
                Our novel 3D chairside printing technology bypasses the traditional thermoforming process.
            </p>
            <ul style="color: #555; padding-left: 20px;">
                <li><strong>No Dental Model:</strong> Direct aligner fabrication.</li>
                <li><strong>Material Saving:</strong> Significantly reduces waste.</li>
                <li><strong>Time Efficient:</strong> From scan to product in minutes.</li>
            </ul>
        </div>
    </div>
</div>


<div class="section-header">
    <h2 class="section-title">7. Assisted Doctor Training & Remote Diagnosis</h2>
    <div class="section-subtitle">VR-based training system for clinical expertise.</div>
</div>

<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="rounded z-depth-2" style="overflow: hidden;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/Dortor_Training.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-2 font-weight-bold">Training Simulation System</div>
    </div>
</div>

<hr class="my-5">

<h3 class="mb-3">Selected Publications</h3>
<div class="publications">
  {% bibliography --query @*[title~=TAPoseNet] %}
  {% bibliography --query @*[title~=MVDC] %}
</div>