---
layout: page
title: Device-Free Localization and Behavior Sensing
description: Accurate indoor localization and behavior sensing via wireless signals.
img: assets/img/device_free/interface.png
importance: 1
category: Wireless Sensing
related_publications: false 
---

<style>
    header.post-header { display: none !important; }

    /* 1. 全局学术纸张背景 */
    body { background-color: #f4f6f8 !important; color: #333 !important; }
    body > .container {
        background-color: #ffffff !important; 
        max-width: 1150px !important; 
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
        padding: 40px 60px !important; 
        margin-top: 30px;
        margin-bottom: 60px;
        border-top: 5px solid #c9302c; 
        border-radius: 4px; 
    }

    /* 2. 章节通用样式 (User Requested) */
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
        font-size: 1.5rem; 
        margin-top: 5px; 
    }

    /* 3. 文本框  */
    .tech-card {
        background: #fdfdfd;
        border: 1px solid #eaeaea;
        border-radius: 12px;
        padding: 24px;
        height: auto; /* 自动撑开，防止截断 */
        margin-bottom: 20px;
        box-sizing: border-box; /* 确保 padding 不撑大容器 */
    }

    html[data-theme='dark'] .tech-card {
        background: #1e1e1e !important; /* 深色底 */
        border-color: #333 !important;   /* 深色边框 */
    }

    .tech-card-header {
        border-left: 4px solid #c9302c;
        padding-left: 12px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
    }
    .tech-card-title {
        font-weight: 800;
        font-size: 1.25rem;
        color: #111;
        margin: 0;
    }
    .tech-card-title-cn {
        font-size: 0.85rem;
        color: #999;
        margin-left: 10px;
        font-weight: 400;
    }

    /* 4. 列表与沉浸式翻译 */
    .tech-list { list-style: none; padding: 0; margin: 0; }
    .tech-list li {
        margin-bottom: 15px;
        font-size: 1rem;
        display: flex;
        align-items: flex-start;
        line-height: 1.4;
    }
    .tech-list li i {
        color: #c9302c;
        margin-right: 12px;
        margin-top: 4px;
        font-size: 0.9rem;
    }
    .cn-text { 
        display: block; 
        font-size: 1.0em; 
        color: #888; 
        margin-top: 5px; 
    }

    /* 5. 参考文献加粗优化 */
    .bibliography .title { font-weight: bold !important; color: #000 !important; }
    .bibliography em {
        font-style: normal !important;      
        font-weight: 900 !important;        
        text-decoration: none !important;   
        border-bottom: none !important;     
        color: #000 !important;             
    }
    .bibliography b, .bibliography strong { font-weight: 900 !important; text-decoration: none !important; }

    /* 6. 图片封装 */
    .img-wrapper { 
        border-radius: 6px; 
        overflow: hidden; 
        border: 1px solid #eee; 
        background: #fff; 
        cursor: zoom-in; 
        transition: transform 0.2s;
    }
    .img-wrapper:hover { transform: scale(1.01); border-color: #c9302c; }
    .figure-caption { text-align: center; font-size: 0.9rem; color: #777; margin-top: 10px; font-style: italic; }

    /* Modal */
    .custom-modal { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.9); padding-top: 60px; }
    .modal-content { margin: auto; display: block; max-width: 90%; max-height: 85vh; animation: zoom 0.3s; }
    .close-btn { position: absolute; top: 30px; right: 50px; color: #fff; font-size: 50px; font-weight: bold; cursor: pointer; }
    @keyframes zoom { from {transform:scale(0)} to {transform:scale(1)} }
</style>

<div style="text-align: center; margin-bottom: 60px;">
    <h1 style="font-size: 2.8rem; font-weight: 900; color: #111; line-height: 1.1;">
        Device-Free Localization and Behavior Sensing <br> Based on Wireless Signals
    </h1>
    <p style="font-size: 1.8rem; color: #555; margin-top: 10px; letter-spacing: 3px;">
        基于无线信号的非接触式定位与行为感知研究
    </p>
</div>

<div class="section-header">
    <h2 class="section-title">01. The Scientific Problem</h2>
    <p class="section-subtitle">科学问题与挑战</p>
</div>

<div class="row justify-content-center mb-5">
    <div class="col-lg-10">
        <div class="img-wrapper" onclick="openModal(this)">
            {% include figure.liquid path="assets/img/device_free/flow.png" class="img-fluid" %}
        </div>
    </div>
</div>

<div class="row align-items-center">
    <div class="col-lg-7">
        <div class="img-wrapper" onclick="openModal(this)">
            {% include figure.liquid path="assets/img/device_free/links.png" class="img-fluid" %}
        </div>
        <p class="figure-caption">Figure 2. Influential links and reference node modeling in dynamic environments.</p>
    </div>
    <div class="col-lg-5">
        <p style="font-size: 1.2rem; line-height: 1.8;">
            Traditional methods rely on wearables, which restricts universality. We tackle the core challenge: the tension between <strong>localization accuracy</strong> and <strong>real-time performance</strong> under low-quality signals.
            <span class="cn-text">传统方法依赖佩戴设备，限制了普适性。我们致力于解决核心挑战：低质量信号下定位精度与实时性能之间的权衡。</span>
        </p>
    </div>
</div>

<div class="section-header">
    <h2 class="section-title">02. Accurate Localization Model</h2>
    <p class="section-subtitle">稀疏节点下的精准定位建模</p>
</div>

<div class="row g-4">
    <div class="col-md-7">
        <div class="row g-3">
            <div class="col-12">
                <div class="img-wrapper" onclick="openModal(this)">
                    {% include figure.liquid path="assets/img/device_free/geometry.png" class="img-fluid" %}
                </div>
            </div>
            <div class="col-12">
                <div class="img-wrapper" onclick="openModal(this)">
                    {% include figure.liquid path="assets/img/device_free/corridor.png" class="img-fluid" %}
                </div>
            </div>
        </div>
        <p class="figure-caption">Figure 3. Geometric signal propagation modeling and real-time corridor deployment.</p>
    </div>

    <div class="col-md-5">
        <div class="img-wrapper mb-3" onclick="openModal(this)">
            {% include figure.liquid path="assets/img/device_free/models.png" class="img-fluid" %}
        </div>
        
        <div class="tech-card">
            <div class="tech-card-header">
                <h5 class="tech-card-title">Representative Work</h5>
                <span class="tech-card-title-cn">代表性创新点</span>
            </div>
            <ul class="tech-list">
                <li>
                    <i class="fas fa-check-circle"></i>
                    <div>
                        Proposed the first device-free method without carrying any external sensors.
                        <span class="cn-text">首个提出无需佩戴任何外部传感器的非接触式感知方法。</span>
                    </div>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <div>
                        Accuracy: <strong style="color:#c9302c;">0.99 m</strong>
                        <span class="cn-text">定位精度达到 0.99 米。</span>
                    </div>
                </li>
                <li>
                    <i class="fas fa-check-circle"></i>
                    <div>
                        Improvement: <strong>>15%</strong> under sparse reference node networks.
                        <span class="cn-text">在稀疏参考节点网络下，精度提升超过 15%。</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="publications">
  {% bibliography --query @*[title~=A PRR and] %}
  {% bibliography --query @*[title~=RSS-Based Ranging by] %}
</div>

<div class="section-header">
    <h2 class="section-title">03. Precise Behavior Recognition</h2>
    <p class="section-subtitle">高精度行为手势识别框架</p>
</div>

<div class="row align-items-center mb-5">
    <div class="col-md-7">
        <div class="img-wrapper" onclick="openModal(this)">
            {% include figure.liquid path="assets/img/device_free/interface.png" class="img-fluid" %}
        </div>
        <p class="figure-caption">Figure 4. Real-time gesture recognition interface and skeletal mapping.</p>
    </div>
    <div class="col-md-5">
        <div class="tech-card" style="background: #f9fafb;">
            <div class="tech-card-header">
                <h5 class="tech-card-title">Performance Metrics</h5>
                <span class="tech-card-title-cn">系统性能指标</span>
            </div>
            <ul class="tech-list">
                <li><i class="fas fa-star"></i> <div>Success Rate: <strong style="color:#c9302c;">100%</strong> for defined gestures.<span class="cn-text">定义手势的识别率达到 100%。</span></div></li>
                <li><i class="fas fa-star"></i> <div>Tracking Accuracy: <strong>0.06 m</strong>.<span class="cn-text">动作追踪精度达 0.06 米。</span></div></li>
                <li><i class="fas fa-star"></i> <div>Robust to variations in gesture amplitude.<span class="cn-text">对不同幅度的手势动作具有极强的鲁棒性。</span></div></li>
            </ul>
        </div>
    </div>
</div>

<div class="row g-4 justify-content-center align-items-center">
    <div class="col-md-6">
        <div class="img-wrapper" onclick="openModal(this)">
            {% include figure.liquid path="assets/img/device_free/pose_lib.png" class="img-fluid" %}
        </div>
        <p class="figure-caption">Figure 5. 3D Pose skeletal library for behavior modeling.</p>
    </div>
    <div class="col-md-6">
        <div class="img-wrapper" onclick="openModal(this)">
            {% include figure.liquid path="assets/img/device_free/results.png" class="img-fluid" %}
        </div>
        <p class="figure-caption">Figure 6. Recognition rate comparison across various algorithms.</p>
    </div>
</div>

<div class="publications">
  {% bibliography --query @*[title~=Fine-Grained and] %}
</div>


<hr style="margin-top: 80px; border-color: #eee;">


<div id="myModal" class="custom-modal" onclick="closeModal()">
  <span class="close-btn">&times;</span>
  <img class="modal-content" id="imgModal">
</div>

<script>
    function openModal(element) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("imgModal");
        var img = element.querySelector('img');
        modal.style.display = "block";
        modalImg.src = img.src;
    }
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") { closeModal(); }
    });
</script>