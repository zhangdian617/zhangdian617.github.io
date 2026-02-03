---
layout: page
title: Intelligent Acupuncture
description: Multimodal bioelectrical signal assessment and LLM-based TCM reasoning.
img: assets/img/acupuncture/preview.jpg
importance: 2
category: Smart Healthcare
related_publications: false 
---

<style>
    /* 1. 强制全局深色背景，防止文字看不见 */
    body { background-color: #121212 !important; color: #e0e0e0 !important; }
    
    
    header.post-header { display: none !important; }

    /* 2. 配色定义 */
    :root {
        --tcm-gold: #d4af37;       /* 经络金 */
        --tcm-gold-light: #f1c40f; /* 高亮金 */
        --tcm-blue: #3498db;       /* 科技蓝 */
        --text-main: #eeeeee;      /* 主文字白 */
        --text-sub: #aaaaaa;       /* 副文字灰 */
        --bg-card: rgba(255, 255, 255, 0.05);
    }

    /* 3. Hero 区域 (双语大标题) */
    .hero-container {
        text-align: center; padding: 80px 0 60px 0;
    }
    .main-title-en {
        font-weight: 800; font-size: 3.5rem;
        background: linear-gradient(135deg, var(--tcm-gold) 0%, #fff 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        margin-bottom: 5px; letter-spacing: 1px;
        text-transform: uppercase;
        filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.2));
    }
    .main-title-cn {
        font-weight: 400; font-size: 2rem; color: var(--text-main);
        letter-spacing: 5px; opacity: 0.9; margin-bottom: 20px;
    }
    .sub-title {
        font-size: 1.1rem; color: var(--text-sub); font-weight: 300; max-width: 800px; margin: 0 auto;
        border-top: 1px solid rgba(212, 175, 55, 0.3); border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding: 15px 0;
    }

    /* 4. 章节标题 (双语) */
    .section-header { margin: 80px 0 40px 0; border-left: 4px solid var(--tcm-gold); padding-left: 20px; }
    .section-title-en { color: #fff; font-size: 1.8rem; font-weight: 700; margin: 0; line-height: 1.2; }
    .section-title-cn { color: var(--tcm-gold); font-size: 1.2rem; margin-top: 5px; font-weight: normal; }

    /* 5. 核心技术列表 (PPT 内容) */
    .tech-card {
        background: var(--bg-card);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 12px;
        padding: 25px;
        height: 100%;
    }
    .tech-list { list-style: none; padding: 0; margin: 0; }
    .tech-list li {
        margin-bottom: 15px;
        color: var(--text-main); /* 确保文字是白色的 */
        font-size: 1rem;
        display: flex;
        align-items: flex-start;
    }
    .tech-list li i {
        color: var(--tcm-gold-light);
        margin-right: 12px;
        margin-top: 4px; /* 图标对齐 */
    }
    .tech-cn-sub {
        display: block; font-size: 0.85rem; color: var(--text-sub); margin-top: 2px;
    }

    /* 6. 图片容器 (自定义 Modal) */
    .img-box {
        border-radius: 8px; overflow: hidden;
        border: 1px solid rgba(255,255,255,0.2);
        cursor: zoom-in;
        transition: transform 0.3s ease;
        background: #000;
        margin-bottom: 10px;
    }
    .img-box:hover { border-color: var(--tcm-gold); transform: translateY(-2px); }
    .img-caption { text-align: center; font-size: 0.9rem; color: var(--text-sub); margin-bottom: 10px; }

    /* 7. 自定义灯箱 (Lightbox) 样式 */
    .custom-modal {
        display: none; position: fixed; z-index: 9999; 
        padding-top: 50px; left: 0; top: 0; width: 100%; height: 100%; 
        overflow: auto; background-color: rgba(0,0,0,0.9);
    }
    .modal-content {
        margin: auto; display: block; max-width: 90%; max-height: 85vh;
        border: 2px solid var(--tcm-gold); border-radius: 4px;
        animation: zoom 0.3s;
    }
    .modal-caption {
        margin: auto; display: block; width: 80%; text-align: center; 
        color: #ccc; padding: 10px 0; height: 150px; font-size: 1.2rem;
    }
    .close-btn {
        position: absolute; top: 20px; right: 35px; 
        color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;
    }
    @keyframes zoom { from {transform:scale(0)} to {transform:scale(1)} }

    /* 8. 视频容器 */
    .video-frame {
        border-radius: 12px; overflow: hidden; border: 1px solid #444;
        box-shadow: 0 0 40px rgba(41, 128, 185, 0.15);
    }
    
    /* 9. 终端样式文字 */
    .terminal-text {
        font-family: 'Consolas', monospace; color: #2ecc71; 
        background: #000; padding: 15px; border-radius: 8px; border: 1px solid #333;
        font-size: 0.95rem; margin-top: 20px;
    }
</style>


<div class="container" style="max-width: 1100px;">

    <div class="hero-container">
        <div class="main-title-en">Intelligent Acupuncture</div>
        <div class="main-title-cn">数智化中医针灸诊疗系统</div>
        
        <div class="sub-title">
            Multimodal Assessment · Dynamic 3D Reconstruction · TCM Large Language Model
            <br>
            <span style="font-size: 0.9em; color: #777;">多模态评估 · 动态 3D 重建 · 中医大语言模型</span>
        </div>
    </div>


    <div class="section-header">
        <div class="section-title-en">1. Multimodal Bio-signal Assessment</div>
        <div class="section-title-cn">多模态生物电信号评估与预测</div>
    </div>
    
    <p style="color: #cccccc; margin-bottom: 30px; font-size: 1.05rem;">
        Assessment and prediction of acupuncture effects based on multimodal bioelectrical signals.
        <br><span style="color: #777; font-size: 0.9rem;">基于多模态生物电信号（脑电、肌电、皮电）的针灸疗效评估与预测。</span>
    </p>

    <div class="row align-items-center mb-5">
        <div class="col-md-6 mb-4">
            <div class="img-box" onclick="openModal(this)">
                {% include figure.liquid loading="eager" path="assets/img/acupuncture/fig1_setup.jpg" class="img-fluid" %}
            </div>
            <div class="img-caption">
                Fig 1. Signal Acquisition Setup<br>
                图1. 信号采集设备与场景
            </div>
        </div>

        <div class="col-md-6 mb-4">
            <div class="img-box" onclick="openModal(this)">
                {% include figure.liquid loading="eager" path="assets/img/acupuncture/fig2_analysis.jpg" class="img-fluid" %}
            </div>
            <div class="img-caption">
                Fig 2. Feature Extraction & Analysis<br>
                图2. 特征提取与聚类分析
            </div>
        </div>
    </div>


    <div class="section-header">
        <div class="section-title-en">2. Clinical Scene 3D Reconstruction</div>
        <div class="section-title-cn">临床专家施针场景 3D 重建</div>
    </div>

    <div class="row align-items-center mb-5">
        
        <div class="col-md-6 mb-4">
            <div class="img-box" onclick="openModal(this)">
                {% include figure.liquid loading="eager" path="assets/img/acupuncture/fig3_real.jpg" class="img-fluid" %}
            </div>
            <div class="img-caption">
                Fig 3. Real Clinical Scenario<br>
                图3. 专家施针实景
            </div>
        </div>

        <div class="col-md-6 mb-4">
            <div class="img-box" onclick="openModal(this)">
                {% include figure.liquid loading="eager" path="assets/img/acupuncture/preview.jpg" class="img-fluid" %}
            </div>
            <div class="img-caption">
                Fig 4. Dynamic 3D Meridian Reconstruction<br>
                图4. 动态经络重建
            </div>

            <div class="tech-card">
                <h5 style="color: #fff; margin-bottom: 15px; border-bottom: 1px solid #555; padding-bottom: 10px;">
                    Core Technologies <span style="font-size:0.7em; color:#aaa;">核心技术</span>
                </h5>
                <ul class="tech-list">
                    <li>
                        <i class="fas fa-crosshairs"></i>
                        <div>
                            <span class="tech-cn-sub">Acupoint Detection Technology</span>
                            <span class="tech-cn-sub">穴位检测技术</span>
                        </div>
                    </li>
                    <li>
                        <i class="fas fa-thumbs-up"></i>
                        <div>
                            <span class="tech-cn-sub">Acupoint Recommendation Technology</span>
                            <span class="tech-cn-sub">穴位推荐技术</span>
                        </div>
                    </li>
                    <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <span class="tech-cn-sub">Positioning Technology</span>
                            <span class="tech-cn-sub">高精度定位技术</span>
                        </div>
                    </li>
                    <li>
                        <i class="fas fa-cubes"></i>
                        <div>
                            <span class="tech-cn-sub">Dynamic 3D Reconstruction Technology</span>
                            <span class="tech-cn-sub">动态 3D 重建技术</span>
                        </div>
                    </li>
                    <li>
                        <i class="fas fa-heartbeat"></i>
                        <div>
                            <span class="tech-cn-sub">Multimodal Perception & Prediction</span>
                            <span class="tech-cn-sub">多模态感知与针灸疗效预测</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


    <div class="section-header">
        <div class="section-title-en">3. TCM Medical Q&A System</div>
        <div class="section-title-cn">基于大语言模型的中医问答系统</div>
    </div>

    <div class="row justify-content-center mb-5">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-0" style="background: #1e1e1e; padding: 10px 20px; border-radius: 8px 8px 0 0; border: 1px solid #333;">
                <div style="color: #bbb; font-weight: bold; font-size: 0.9rem;"> 
                    <i class="fas fa-terminal" style="color: #2ecc71; margin-right: 10px;"></i> 
                    Based on QWEN1.8b fine-tuned model
                </div>
                <div style="display:flex; gap:6px;">
                    <div style="width:12px; height:12px; border-radius:50%; background:#ff5f56;"></div>
                    <div style="width:12px; height:12px; border-radius:50%; background:#ffbd2e;"></div>
                    <div style="width:12px; height:12px; border-radius:50%; background:#27c93f;"></div>
                </div>
            </div>

            <div class="video-frame">
                <video controls playsinline style="width: 100%; height: auto; display: block;">
                    <source src="{{ '/assets/video/acupuncture/llm_demo.mp4' | relative_url }}" type="video/mp4">
                </video>
            </div>
            
            <div class="row mt-2">
                <div class="col-md-12">
                    <div class="terminal-text text-center">
                        Traditional Chinese Medicine Medical Q&A System Based on Large Language Models
                        <br>
                        <span style="color: #777;">基于大型语言模型的传统中医医疗问答系统</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<div style="height: 100px;"></div>

<div id="myModal" class="custom-modal" onclick="closeModal()">
  <span class="close-btn">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption" class="modal-caption"></div>
</div>

<script>
    function openModal(element) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        
        // 获取 img 标签
        var img = element.querySelector('img');
        
        modal.style.display = "block";
        modalImg.src = img.src;
        // 获取父级 div 下面的 caption div 的文本
        var captionDiv = element.parentElement.querySelector('.img-caption');
        captionText.innerHTML = captionDiv ? captionDiv.innerHTML : "";
    }

    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    // 按 ESC 键也能关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
</script>