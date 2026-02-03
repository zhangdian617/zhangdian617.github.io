---
layout: page
title: CalmWave
description: Physiology-Based Music Generation System for Intelligent Stress Management.
img: assets/img/calmwave/preview.jpg
importance: 1
category: AI & Multimedia
related_publications: false 
---

<style>
    /* 1. 隐藏默认标题 */
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
        
        /* 适应主题色青条 */
        border-top: 5px solid #00C6FB; 
        
        /* 轻微圆角 */
        border-radius: 4px; 
    }

    /* 2. 定义高级渐变色 (青 -> 蓝) */
    :root {
        --calm-gradient: linear-gradient(135deg, #00C6FB 0%, #005BEA 100%);
        --calm-text-light: #2c3e50;
        --calm-text-dark: #e0e0e0;
        --box-bg-light: rgba(0, 91, 234, 0.03);
        --box-bg-dark: rgba(255, 255, 255, 0.05);
    }

    /* 3. Hero 区域：音符与标题 */
    .hero-container {
        text-align: center;
        padding: 60px 0 40px 0;
        position: relative;
    }
    
    .main-title {
        font-weight: 800;
        font-size: 4.5rem;
        background: var(--calm-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 10px;
        position: relative;
        display: inline-block;
        /* 增加一点阴影让文字立体 */
        filter: drop-shadow(0 4px 6px rgba(0, 91, 234, 0.1));
    }

    .sub-title {
        font-size: 1.25rem;
        font-weight: 300;
        max-width: 850px;
        margin: 0 auto;
        line-height: 1.5;
        color: var(--global-text-color); /* 跟随主题变色 */
        opacity: 0.8;
    }
    .sub-title-cn {
        font-size: 1rem;
        color: #888;
        margin-top: 5px;
        font-weight: normal;
    }

    /* 4. 音符飘动动画 */
    .music-note {
        position: absolute;
        color: #00C6FB; /* 青色音符 */
        opacity: 0;
        animation: floatUp 3.5s infinite ease-in-out;
        font-size: 1.8rem;
        pointer-events: none;
    }
    .note-1 { top: -15px; right: -25px; animation-delay: 0s; font-size: 2rem; }
    .note-2 { top: 30px; right: -50px; animation-delay: 1.2s; font-size: 1.4rem; color: #005BEA; }
    .note-3 { top: -20px; left: -35px; animation-delay: 2.2s; font-size: 1.6rem; color: #00C6FB; }

    @keyframes floatUp {
        0% { transform: translateY(0) rotate(0deg) scale(0.8); opacity: 0; }
        20% { opacity: 0.8; }
        100% { transform: translateY(-70px) rotate(20deg) scale(1.1); opacity: 0; }
    }

    /* 5. 框架图样式 (独占一行 + 放大) */
    .framework-container {
        width: 100%;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,0.05);
        box-shadow: 0 10px 40px rgba(0, 91, 234, 0.08); /* 蓝色系光晕 */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: zoom-in;
        background: #fff; /* 确保图片底色干净 */
    }
    .framework-container:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 50px rgba(0, 91, 234, 0.15);
    }
    /* 夜间模式适配：给图片加一点亮度，防止过暗 */
    html[data-theme="dark"] .framework-container {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.1);
    }

    /* 6. 文字框样式 (自适应夜间模式) */
    .design-text-box {
        border-left: 4px solid #00C6FB; /* 青色竖条 */
        padding: 25px 35px;
        background: var(--box-bg-light); /* 默认浅色底 */
        border-radius: 0 12px 12px 0;
        margin-top: 30px;
        transition: background 0.3s ease;
    }
    /* 夜间模式自动切换背景色 */
    html[data-theme="dark"] .design-text-box {
        background: var(--box-bg-dark);
        border-left: 4px solid #005BEA; /* 夜间变深蓝竖条 */
    }

    .text-lead {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 15px;
        color: #005BEA; /* 标题蓝 */
    }
    html[data-theme="dark"] .text-lead { color: #00C6FB; /* 夜间标题变亮青 */ }

    .text-desc {
        font-size: 1.05rem;
        line-height: 1.8;
        text-align: justify;
        color: var(--global-text-color); /* 自动适配文字颜色 */
    }
    
    .cn-translate {
        display: block;
        font-size: 0.95rem;
        color: #888; /* 翻译文字用灰色 */
        margin-top: 8px;
        margin-bottom: 15px;
        font-weight: normal;
    }

    /* 7. 视频容器 */
    .video-clean {
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        margin-top: 40px;
        border: 1px solid rgba(0,0,0,0.05);
    }
</style>


<div class="container" style="max-width: 1100px; padding-top: 20px;">

    <div class="hero-container">
        <h1 class="main-title">
            CalmWave
            <i class="fas fa-music music-note note-1"></i>
            <i class="fas fa-music music-note note-2"></i>
            <i class="fas fa-headphones-alt music-note note-3"></i>
        </h1>
        <div class="sub-title">
            Physiology-Based Music Generation System for Intelligent Stress Management
            <div class="sub-title-cn">基于生理建模与音乐生成的智能压力干预系统</div>
        </div>
    </div>

    <div class="row mt-4 mb-4">
        <div class="col-12">
            <a href="{{ '/assets/img/calmwave/framework.jpg' | relative_url }}" data-fancybox="gallery" data-caption="Physiology-Based Music Generation Framework">
                <div class="framework-container">
                    {% include figure.liquid loading="eager" path="assets/img/calmwave/framework.jpg" class="img-fluid" style="width:100%; display:block;" alt="System Framework" %}
                </div>
            </a>
            <div class="text-center text-muted mt-2" style="font-size: 0.9rem;">
                Figure 1. The closed-loop architecture for physiology-based music generation.
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-md-11">
            <div class="design-text-box">
                <p class="text-lead">
                    An intelligent closed-loop regulation process: <br>
                    Perception → Recognition → Intervention → Feedback
                </p>
                <div class="cn-translate">
                    智能闭环调节过程：感知 → 识别 → 干预 → 反馈
                </div>

                <div class="text-desc">
                    <p>
                        The system leverages the <strong>MusicGen</strong> large-scale music generation model to create personalized intervention music. 
                    </p>
                    <p>
                        • Under <strong>high-stress conditions</strong>, it generates upbeat and energetic tracks to facilitate stress relief.<br>
                        <span class="cn-translate" style="margin-top:2px;">在高压状态下，系统生成激昂活力的音乐以辅助解压。</span>
                    </p>
                    <p>
                        • Under <strong>low-stress conditions</strong>, it produces calming and smoothly melodic music to maintain positive mood.<br>
                        <span class="cn-translate" style="margin-top:2px;">在低压状态下，系统生成舒缓优美的旋律以维持积极情绪。</span>
                    </p>
                    
                    <p style="margin-top: 15px;">
                        Through real-time physiological monitoring and user feedback, the system continuously fine-tunes parameters, ensuring dynamic and effective stress management.
                        <span class="cn-translate">通过实时生理监测与用户反馈，系统持续微调参数，确保动态有效的压力管理。</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center mt-5">
        <div class="col-12 text-center">
            <h1 class="main-title" style="font-size: 2.0rem;">
                System Demonstration
                <i class="fas fa-music music-note note-1"></i>
                <i class="fas fa-music music-note note-2"></i>
                <i class="fas fa-headphones-alt music-note note-3"></i>
            </h1>
            <div class="video-clean">
                <video controls autoplay loop muted playsinline style="width: 100%; height: auto; display: block;">
                    <source src="{{ '/assets/video/calmwave/demo.mp4' | relative_url }}" type="video/mp4">
                </video>
            </div>
        </div>
    </div>

</div>

<div style="height: 100px;"></div>