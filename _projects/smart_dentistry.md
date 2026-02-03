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
    /* (A) 把整个网页背景变成浅灰色 */
    body {
        background-color: #f4f6f8 !important; 
    }

    /* (B) 把内容容器变成“白纸” */
    body > .container {
        background-color: #ffffff !important; 
        max-width: 1150px !important; 
        
        /* 制造立体感的阴影 */
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
        
        /* 内部留白 */
        padding: 40px 60px !important; 
        
        /* 外部留白 */
        margin-top: 30px;
        margin-bottom: 60px;
        
        /* 深红条 */
        border-top: 5px solid #c9302c; 
        
        /* 轻微圆角 */
        border-radius: 4px; 
    }

    /* 1. 列表题目加粗 */
    .bibliography .title {
        font-weight: bold !important;
        color: #000 !important;
    }

    /* 2. 作者名字修正：去下划线 + 加粗 */
    .bibliography em {
        font-style: normal !important;      
        font-weight: 900 !important;        
        text-decoration: none !important;   
        border-bottom: none !important;     
        color: #000 !important;             
    }
    /* 兼容性补丁 */
    .bibliography b, .bibliography strong {
        font-weight: 900 !important;
        text-decoration: none !important;
    }
    
    /* 中文翻译通用样式 (仿沉浸式翻译) */
    .cn-text {
        display: block;
        font-size: 0.85em;
        color: #888;
        font-weight: 400;
        margin-top: 4px;
        line-height: 1.4;
    }
    .cn-inline {
        font-size: 0.85em;
        color: #999;
        margin-left: 5px;
        font-weight: normal;
    }

    /* 1. Hero 区域：交互式放大 */
    .hero-container {
        position: relative;
        cursor: zoom-in;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        transition: transform 0.3s ease;
        border: 1px solid #e0e0e0;
        margin-bottom: 30px; /* 增加底部间距 */
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

    .hero-gradient-text {
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 0;
    }


    /* 2. 章节通用样式 */
    .section-header {
        margin-top: 60px;
        margin-bottom: 30px;
        border-left: 5px solid #c9302c;
        padding-left: 20px;
    }
    .section-title { 
        font-weight: 800; 
        font-size: 1.8rem; 
        color: #333; 
        margin: 0; 
    }
    .section-subtitle { 
        color: #777; 
        font-size: 1.1rem; 
        margin-top: 5px; 
    }

    

   

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
    
    /* 列表样式 (Part 3用) */
    .feature-list { padding-left: 20px; color: #555; }
    .feature-list li { margin-bottom: 12px; }
</style>

<script>
function openLightbox() {
    document.getElementById('hero-lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('hero-lightbox').style.display = 'none';
}
</script>


<div class="text-center mb-4">
    <h1 class="hero-gradient-text">
        Next-Generation AI Digital Dentistry Platform
    </h1>
    <h1 class="hero-gradient-text">
        下一代 AI 数字化牙科平台
    </h1>
    
    <p class="lead text-muted mt-3">
        Comprehensive Ecosystem: Diagnosis · Analysis · Design · Manufacturing
        <span class="cn-text">全方位的数字化生态系统：诊断 · 分析 · 设计 · 制造</span>
    </p>
</div>

<div class="hero-container" onclick="openLightbox()">
    {% include figure.liquid loading="eager" path="assets/img/smart_dentistry/preview.jpg" title="Click to Expand" class="img-fluid" %}
    <div style="position: absolute; bottom: 10px; right: 20px; color: #666; font-size: 0.8rem; background: rgba(255,255,255,0.8); padding: 2px 8px; border-radius: 4px;">
        <i class="fas fa-search-plus"></i>
    </div>
</div>

<div class="row justify-content-center mb-5">
    <div class="col-md-10 text-center">
        <p style="font-size: 1.1rem; color: #555; line-height: 1.6;">
            We are building a complete closed-loop digital ecosystem to revolutionize oral healthcare with Artificial Intelligence.
            <span class="cn-text" style="font-size: 0.95em;">我们致力于构建一个完整的闭环数字生态系统，利用人工智能变革口腔医疗。</span>
        </p>
    </div>
</div>

<div id="hero-lightbox" class="lightbox" onclick="closeLightbox()">
    <img src="{{ '/assets/img/smart_dentistry/preview.jpg' | relative_url }}" alt="Architecture">
</div>


<div class="section-header">
    <h2 class="section-title">
        1. AI-based Automated Tooth Segmentation, Reconstruction, and Fusion
        <span class="cn-text" style="font-size: 0.6em; display:inline-block; margin-left: 10px;">基于 AI 的自动牙齿分割、重建与融合</span>
    </h2>
    <div class="section-subtitle">
        Multi-modal Data Fusion & Processing
        <span class="cn-text">多模态数据融合与处理</span>
    </div>
</div>

<div class="row align-items-center mb-5">
    <div class="col-md-6">
        {% include figure.liquid loading="eager" path="assets/img/smart_dentistry/2.jpg" title="Input: CBCT" class="img-fluid rounded z-depth-1" %}
        <div class="caption mt-1"><strong>Input A:</strong> CBCT Data <span class="cn-inline">CBCT 数据</span></div>
    </div>
    <div class="col-md-6">
        {% include figure.liquid loading="eager" path="assets/img/smart_dentistry/3.jpg" title="Input: Oral Scan" class="img-fluid rounded z-depth-1" %}
        <div class="caption mt-1"><strong>Input B:</strong> Oral Scan Data <span class="cn-inline">口扫数据</span></div>
    </div>
    
</div>

<div class="row align-items-center mb-5">
    <div class="col-md-6">
        <div class="rounded z-depth-1" style="overflow: hidden; line-height: 0;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/AI_Segmentation.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-1"><strong>Process I:</strong> AI Segmentation <span class="cn-inline">AI 分割</span></div>
    </div>
    <div class="col-md-6">
        <div class="rounded z-depth-1" style="overflow: hidden; line-height: 0;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/AI_Reconstruction.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-1"><strong>Process II:</strong> AI Reconstruction <span class="cn-inline">AI 重建</span></div>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="rounded z-depth-2" style="overflow: hidden; background: #000;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/fusion.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-2 font-weight-bold">
            <strong>Result:</strong> High-Precision Multi-modal Fusion
            <span class="cn-inline">高精度多模态融合结果</span>
        </div>
    </div>
</div>


<div class="section-header">
    <h2 class="section-title">
        2. AI-Assisted Teeth Alignment
        <span class="cn-text" style="font-size: 0.6em; display:inline-block; margin-left: 10px;">AI 辅助牙齿排列 (TAPoseNet)</span>
    </h2>
    <div class="section-subtitle">
        Automated orthodontic simulation based on pose estimation.
        <span class="cn-text">基于姿态估计的自动正畸模拟。</span>
    </div>
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
        <div class="caption mt-2 text-center">
            Visualization of the TAPoseNet Alignment Process (MICCAI 2024)
            <span class="cn-text">TAPoseNet 牙齿排列过程可视化</span>
        </div>
    </div>
</div>

<div class="publications">
  {% bibliography --query @*[title~=TAPoseNet] %}
</div>


<div class="section-header">
    <h2 class="section-title">
        3. Telemedicine & Facial Prediction
        <span class="cn-text" style="font-size: 0.6em; display:inline-block; margin-left: 10px;">远程医疗与面部预测</span>
    </h2>
    <div class="section-subtitle">
        Remote diagnosis visualization and orthodontic effect prediction.
        <span class="cn-text">远程诊断可视化与正畸效果预测。</span>
    </div>
</div>

<div class="row align-items-center">
    <div class="col-md-3">
        <div class="mb-3">
            {% include figure.liquid path="assets/img/smart_dentistry/Diagnosis_UI.jpg" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Diagnosis UI <span class="cn-text">诊断界面</span></div>
        </div>
        <div>
            {% include figure.liquid path="assets/img/smart_dentistry/Analysis_Data.jpg" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Analysis Data <span class="cn-text">分析数据</span></div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="rounded z-depth-2 border" style="overflow: hidden;">
            <video controls style="width: 100%;">
                <source src="{{ '/assets/video/smart_dentistry/face_pred.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption font-weight-bold">
            AI Prediction: Orthodontics
            <span class="cn-text">AI 预测：正畸效果</span>
        </div>
    </div>

    <div class="col-md-3">
         <div class="mb-3">
            {% include figure.liquid path="assets/img/smart_dentistry/Comparison.jpg" class="img-fluid rounded z-depth-1" %}
        </div>

        <ul style="padding-left: 15px; font-size: 0.9rem; color: #555; margin-top: 10px;">
            <li class="mb-2">
                3D reconstruction
                <span class="cn-text">3D 重建</span>
            </li>
            <li class="mb-2">
                Orthodontic effect & facial prediction
                <span class="cn-text">正畸效果与面部预测</span>
            </li>
            <li class="mb-2">
                Growth prediction at different ages
                <span class="cn-text">不同年龄段的生长预测</span>
            </li>
            <li style="list-style: none; color: #999;">…</li>
        </ul>
    </div>
</div>


<div class="dark-mode-section">
    <div class="container" style="max-width: 1140px;">
        <h3 style="border-left: 4px solid #ff6b6b; padding-left: 15px; margin-bottom: 40px;">
            4. From Anatomy to Risk: 4D Jaw Motion–Driven TMJ Assessment
            <span class="cn-text" style="font-size: 0.6em; color: #aaa; margin-top: 5px;">从解剖到风险：基于 4D 颌骨运动的颞下颌关节评估</span>
        </h3>
        
        <div class="row mb-4">
            <div class="col-lg-4 mb-3">
                <div class="p-3" style="background: rgba(255,255,255,0.05); border-radius: 8px; height: 100%; border: 1px dashed #555;">
                    <h5 style="color: #aaa; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="fas fa-exclamation-circle text-danger"></i> Motivation
                    </h5>
                    <p class="dark-mode-text" style="font-size: 0.85rem; margin-bottom: 15px;">
                        Traditional assessment relies on expensive <strong style="color: #fff;">Face-bow</strong> devices and static MRI, lacking dynamic quantitative analysis.
                        <span class="cn-text">传统评估依赖昂贵的面弓设备和静态 MRI，缺乏动态定量分析。</span>
                    </p>
                    <div class="row">
                        <div class="col-6 pr-1">
                            {% include figure.liquid path="assets/img/smart_dentistry/face_bow.jpg" title="Traditional Face-bow" class="img-fluid rounded" %}
                        </div>
                        <div class="col-6 pl-1">
                            {% include figure.liquid path="assets/img/smart_dentistry/jaw_structure_2.jpg" title="Anatomy" class="img-fluid rounded" %}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-3">
                <div class="p-3" style="background: rgba(255,255,255,0.05); border-radius: 8px; height: 100%;">
                    <h5 style="color: #ff6b6b; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="fas fa-cube"></i> Core: 4D Motion
                    </h5>
                    <p class="dark-mode-text" style="font-size: 0.85rem; margin-bottom: 15px;">
                        Reconstructing the mandibular movement trajectory in 4D space to capture temporal anomalies.
                        <span class="cn-text">在 4D 空间重构下颌运动轨迹以捕捉时序异常。</span>
                    </p>
                    {% include figure.liquid path="assets/img/smart_dentistry/jaw_motion.jpg" class="img-fluid rounded" %}
                </div>
            </div>

            <div class="col-lg-4 mb-3">
                <div class="p-3" style="background: rgba(255,255,255,0.05); border-radius: 8px; height: 100%;">
                    <h5 style="color: #4db6ac; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="fas fa-microchip"></i> Mechanism
                    </h5>
                    <p class="dark-mode-text" style="font-size: 0.85rem; margin-bottom: 15px;">
                        Mapping occlusal contact points to analyze biomechanical interactions during movement.
                        <span class="cn-text">映射咬合接触点以分析运动过程中的生物力学交互。</span>
                    </p>
                    {% include figure.liquid path="assets/img/smart_dentistry/Occlusion_Detection.jpg" class="img-fluid rounded" %}
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 mb-3">
                <div class="p-3" style="background: rgba(255,255,255,0.05); border-radius: 8px; height: 100%;">
                    <h5 style="color: #64b5f6; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="fas fa-network-wired"></i> Deep Learning Framework
                    </h5>
                    <p class="dark-mode-text" style="font-size: 0.85rem;">
                        A multi-task network integrating motion features and occlusion maps.
                        <span class="cn-text">集成运动特征和咬合图的多任务网络。</span>
                    </p>
                    <div style="cursor: zoom-in;" onclick="openNetworkLightbox()" title="Click to zoom in">
                        {% include figure.liquid path="assets/img/smart_dentistry/4D_Jaw_Motion.png" class="img-fluid rounded" %}
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-3">
                <div class="p-3" style="background: rgba(255,255,255,0.05); border-radius: 8px; height: 100%;">
                    <h5 style="color: #81c784; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="fas fa-chart-pie"></i> Result
                    </h5>
                    <p class="dark-mode-text" style="font-size: 0.85rem;">
                        Automated risk classification visualized with stress heatmaps.
                        <span class="cn-text">通过应力热力图可视化的自动风险分类。</span>
                    </p>
                    {% include figure.liquid path="assets/img/smart_dentistry/Risk_Classification.jpg" class="img-fluid rounded" %}
                </div>
            </div>
        </div>

    </div>

    <div id="network-lightbox" class="lightbox" onclick="closeNetworkLightbox()" style="display: none; position: fixed; z-index: 9999; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); justify-content: center; align-items: center;">
        <img src="{{ '/assets/img/smart_dentistry/4D_Jaw_Motion.png' | relative_url }}" style="max-width: 95%; max-height: 95%; box-shadow: 0 0 50px rgba(255,255,255,0.1);">
    </div>
    
    <script>
        function openNetworkLightbox() {
            document.getElementById('network-lightbox').style.display = 'flex';
        }
        function closeNetworkLightbox() {
            document.getElementById('network-lightbox').style.display = 'none';
        }
    </script>
</div>


<div class="section-header">
    <h2 class="section-title">
        5. Intelligent Restoration Design
        <span class="cn-text" style="font-size: 0.6em; display:inline-block; margin-left: 10px;">智能修复设计</span>
    </h2>
    <div class="section-subtitle">
        Automated crown/bridge generation and texture optimization.
        <span class="cn-text">自动化冠桥生成与纹理优化。</span>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-12">
        {% include figure.liquid path="assets/img/smart_dentistry/texture_optimization.jpg" class="img-fluid rounded z-depth-1" %}
        <div class="caption mt-2">
            AI-driven texture optimization and bridge design for realistic restoration.
            <span class="cn-text">AI 驱动的纹理优化与桥体设计，实现逼真的修复效果。</span>
        </div>
    </div>
</div>

<div class="publications">
  {% bibliography --query @*[title~=MVDC] %}
</div>


<div class="section-header">
    <h2 class="section-title">
        6. Chairside Manufacturing
        <span class="cn-text" style="font-size: 0.6em; display:inline-block; margin-left: 10px;">椅旁（诊室、治疗椅旁）制造</span>
    </h2>
    <div class="section-subtitle">
        Direct 3D printing of clear aligners.
        <span class="cn-text">直接使用 3D 技术打印透明矫正器。</span>
    </div>
</div>

<div class="row align-items-center">
    <div class="col-md-5">
        <div style="height: 75%;">
            {% include figure.liquid path="assets/img/smart_dentistry/Chairside_1.jpg" class="img-fluid rounded z-depth-1" style="height: 75%; object-fit: cover;" %}
        </div>
        <ul style="padding-left: 15px; font-size: 0.9rem; color: #555; margin-top: 10px;">
            <li class="mb-2">
                Existing Technology：
                <span class="cn-text">现有技术</span>
            </li>
            <li class="mb-2">
                Fabrication of dental models 
                and appliance thermoforming
                <span class="cn-text">牙科模型的制作以及矫治器的热成型工艺</span>
            </li>
        </ul>
    </div>

    <div class="col-md-7 d-flex flex-column">
        <div class="mb-4">
            {% include figure.liquid path="assets/img/smart_dentistry/Chairside_2.jpg" class="img-fluid rounded z-depth-1" %}
            <div class="caption">3D Chairside Clear Aligner Printing Technology <span class="cn-text">3D椅旁透明矫正器打印技术</span></div>
        </div>
        
        <div class="p-4" style="background: border-radius: 8px; flex-grow: 1;">
            <h5 class="font-weight-bold" style="color: #333;">High-Efficiency Manufacturing <span class="cn-text" style="font-weight: normal; font-size: 0.9em; margin-left: 5px;">高效制造</span></h5>
            <p style="color: #555;">
                Our novel 3D chairside printing technology bypasses the traditional thermoforming process.
                <span class="cn-text">我们新颖的 3D 椅旁打印技术绕过了传统的热压成型工艺。</span>
            </p>
            <ul style="color: #555; padding-left: 20px;">
                <li><strong>No Dental Model:</strong> Direct aligner fabrication. <span class="cn-text">无牙模：直接制造牙套。</span></li>
                <li><strong>Material Saving:</strong> Significantly reduces waste. <span class="cn-text">节省材料：显著减少浪费。</span></li>
                <li><strong>Time Efficient:</strong> From scan to product in minutes. <span class="cn-text">高效：从扫描到成品仅需数分钟。</span></li>
            </ul>
        </div>
    </div>
</div>


<div class="section-header">
    <h2 class="section-title">
        7. Assisted Doctor Training & Remote Diagnosis
        <span class="cn-text" style="font-size: 0.6em; display:inline-block; margin-left: 10px;">医生辅助培训与远程诊断</span>
    </h2>
    <div class="section-subtitle">
        AR-based training system for clinical expertise.
        <span class="cn-text">基于AR增强现实技术的临床技能培训系统。</span>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="rounded z-depth-2" style="overflow: hidden;">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_dentistry/Doctor_Training.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        <div class="caption mt-2 font-weight-bold">Training Simulation System <span class="cn-text">培训模拟系统</span></div>
    </div>
</div>

<hr class="my-5">