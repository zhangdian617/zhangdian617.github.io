---
layout: page
title: Digital Human Synthesis
description: AI-Based Technology for Digital Human Voice and Lip-Synchronization Synthesis.
img: assets/img/digital_human/preview.jpg
importance: 2
category: AI & Multimedia
related_publications: false 
---

<style>
    /* 1. 全局深色演播室背景 */
    body { background-color: #050505; color: #f0f0f0; }
    header.post-header { display: none !important; }

    /* 2. 渐变色定义 (紫红 -> 橙) */
    :root {
        --human-gradient: linear-gradient(135deg, #FF0080 0%, #FF8C00 100%);
        --accent-color: #FF0080;
    }

    /* 3. Hero 区域：声波与标题 */
    .hero-container {
        text-align: center;
        padding: 80px 0 50px 0;
        position: relative;
    }
    
    .main-title {
        font-weight: 800;
        font-size: 3.8rem;
        background: var(--human-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 15px;
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 15px;
    }

    /* 动态声波条 */
    .sound-wave {
        display: flex;
        align-items: flex-end;
        height: 40px;
        gap: 4px;
    }
    .bar {
        width: 6px;
        background: var(--human-gradient);
        border-radius: 3px;
        animation: wave 1s infinite ease-in-out;
    }
    .bar:nth-child(1) { height: 20%; animation-delay: 0.0s; }
    .bar:nth-child(2) { height: 50%; animation-delay: 0.1s; }
    .bar:nth-child(3) { height: 90%; animation-delay: 0.2s; }
    .bar:nth-child(4) { height: 60%; animation-delay: 0.3s; }
    .bar:nth-child(5) { height: 30%; animation-delay: 0.4s; }

    @keyframes wave {
        0%, 100% { height: 20%; }
        50% { height: 100%; }
    }

    .sub-title {
        font-size: 1.2rem;
        color: #aaa;
        font-weight: 300;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.5;
    }
    .cn-sub {
        display: block;
        font-size: 0.95rem;
        color: #666;
        margin-top: 8px;
    }

    /* 4. 视频容器 (发光边框) */
    .video-glow {
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(255, 0, 128, 0.3);
        box-shadow: 0 0 30px rgba(255, 0, 128, 0.15);
        background: #000;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .video-glow:hover {
        transform: scale(1.02);
        box-shadow: 0 0 50px rgba(255, 0, 128, 0.3);
    }

    /* 5. 对比标签 */
    .badge-label {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .label-input { background: #333; color: #aaa; }
    .label-output { background: var(--human-gradient); color: #fff; }

    /* 6. 章节标题 (Pro Max 版) */
    .section-title {
        /* 基础设置 */
        font-size: 2.4rem; /* 字体加大 */
        font-weight: 800;  /* 特粗 */
        margin: 80px 0 30px 0;
        padding-left: 20px;
        
        /* 左侧亮条加粗 */
        border-left: 6px solid var(--accent-color);
        
        /* 文字渐变 + 霓虹光晕 */
        background: linear-gradient(90deg, #FF0080 0%, #ffffff 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 30px rgba(255, 0, 128, 0.4); /* 发光特效 */
        
        /* 字母间距微调，更有气势 */
        letter-spacing: 1px;
    }
    
    .section-desc {
        color: #aaa;
        margin-bottom: 40px;
        font-size: 1.2rem; /* 描述文字也稍微大一点 */
        max-width: 800px;
    }
</style>


<div class="container" style="max-width: 1100px;">

    <div class="hero-container">
        <div class="main-title">
            <div class="sound-wave">
                <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
            </div>
            Digital Human Synthesis
            <div class="sound-wave">
                <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
            </div>
        </div>
        <div class="sub-title">
            AI-Based Technology for Digital Human Voice and Lip-Synchronization Synthesis
            <span class="cn-sub">基于 AI 的数字人语音与唇形同步合成技术</span>
        </div>
    </div>


    <h3 class="section-title">1. Super-Resolution Enhancement</h3>
    <p class="section-desc">
        Video output enhanced by super-resolution algorithms to restore high-frequency details.
        <br> <span style="font-size:0.9em; color:#555;">视频输出经超分辨率算法增强，还原高频细节。</span>
    </p>

    <div class="row align-items-center">
        <div class="col-md-6 mb-4 text-center">
            <span class="badge-label label-input">Original Input</span>
            <div class="video-glow" style="border-color: #333; box-shadow: none;">
                {% include figure.liquid loading="eager" path="assets/img/digital_human/preview.jpg" class="img-fluid" %}
            </div>
        </div>

        <div class="col-md-6 mb-4 text-center">
            <span class="badge-label label-output">AI Enhanced</span>
            <div class="video-glow">
                <video controls playsinline style="width: 100%; height: auto;">
                    <source src="{{ '/assets/video/digital_human/demo1.mp4' | relative_url }}" type="video/mp4">
                </video>
            </div>
        </div>
    </div>


    <h3 class="section-title">2. Bringing Art to Life</h3>
    <p class="section-desc">
        Users only need to input text and upload a single image to synthesize a talking digital human.
        <br> <span style="font-size:0.9em; color:#555;">用户仅需输入文本并上传单张图片，即可一步合成会说话的数字人。</span>
    </p>

    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="video-glow">
                <video controls autoplay loop muted playsinline style="width: 100%; height: auto;">
                    <source src="{{ '/assets/video/digital_human/demo2.mp4' | relative_url }}" type="video/mp4">
                </video>
            </div>
            <div class="text-center mt-3" style="color: #666; font-size: 0.9rem;">
                Single Image Driven Generation (Mona Lisa)
            </div>
        </div>
    </div>


    <h3 class="section-title">3. High-Fidelity Lip-Sync</h3>
    <p class="section-desc">
        Accurate lip-synchronization across different identities, languages, and lighting conditions.
        <br> <span style="font-size:0.9em; color:#666;">跨越不同身份、语言和光照条件的高保真唇形同步。</span>
    </p>

    <div class="row justify-content-center">
        <div class="col-md-5 mb-4">
            <div class="video-glow">
                <video controls playsinline style="width: 100%; height: auto;">
                    <source src="{{ '/assets/video/digital_human/demo3.mp4' | relative_url }}" type="video/mp4">
                </video>
            </div>
            <div class="text-center mt-2 text-muted" style="font-size: 0.85rem;">Identity A</div>
        </div>
        
        <div class="col-md-5 mb-4">
            <div class="video-glow">
                <video controls playsinline style="width: 100%; height: auto;">
                    <source src="{{ '/assets/video/digital_human/demo4.mp4' | relative_url }}" type="video/mp4">
                </video>
            </div>
            <div class="text-center mt-2 text-muted" style="font-size: 0.85rem;">Identity B</div>
        </div>
    </div>

</div>

<div style="height: 100px;"></div>