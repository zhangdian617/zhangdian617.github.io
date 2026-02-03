---
layout: page
title: Smart Sensing
description: Provide diverse support for people in need.
img: assets/img/smart_sensing/preview.jpg
importance: 3
category: Smart Healthcare
related_publications: false 
---

<style>
    /* 隐藏默认标题 */
    header.post-header { display: none !important; }

    /* 全局背景：深色科技风 */
    body { background-color: #0b0c10; color: #c5c6c7; }
    
    /* 中文样式 (改为：纯白、纤细、清晰，像之前的英文一样) */
    .cn-text {
        display: block;
        font-size: 1.3rem; /* 字号加大，因为现在它是主要阅读内容 */
        color: #e0e0e0;    /* 纯净的灰白色 */
        opacity: 0;        /* 初始隐藏，等打字机 */
        font-weight: 300;  /* 纤细字体 */
        margin-top: 15px;
        line-height: 1.6;
        transition: opacity 1s ease;
    }
    /* Part 3 的中文不需要等待打字机，直接显示 */
    .cn-text-static {
        display: block;
        font-size: 1.3rem;
        color: #e0e0e0;
        font-weight: 300;
        margin-top: 15px;
        line-height: 1.6;
    }
    
    .cn-text.visible {
        opacity: 1;
    }

    /* 英文样式 (改为：Hero 标题同款渐变、粗体) */
    .eng-gradient {
        font-weight: 800; /* 粗体 */
        font-size: 1.8rem; /* 稍微大一点 */
        /* 青色到绿色的渐变 */
        background: -webkit-linear-gradient(#66fcf1, #45a29e);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1.2;
        /* 稍微加点发光效果，但不要太糊 */
        filter: drop-shadow(0 0 2px rgba(102, 252, 241, 0.3));
    }

    /* Hero 标题特效 */
    .hero-glitch {
        font-weight: 800;
        font-size: 3.5rem;
        margin-bottom: 0;
        background: -webkit-linear-gradient(#66fcf1, #45a29e);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 20px rgba(102, 252, 241, 0.3);
    }

    .little-title {
        display: block;
        font-size: 1.5rem; 
        color: #e0e0e0;
        margin-top: 20px;
    }

    /* 打字机光标 (颜色匹配渐变色) */
    .typing-cursor {
        display: inline-block;
        width: 4px;
        height: 1.2em;
        background-color: #66fcf1;
        margin-left: 5px;
        vertical-align: sub;
        animation: blink 1s step-start infinite;
    }
    @keyframes blink { 50% { opacity: 0; } }
    
    /* 视频容器 */
    .video-wrapper {
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #333;
        box-shadow: 0 0 30px rgba(0,0,0,0.5);
    }
</style>


<div class="text-center mb-5" style="padding: 80px 0;">
    <h1 class="hero-glitch">
        Smart Sensing
    </h1>
    
    <div>
        <span class="little-title">Provide diverse support for people in need</span>
    </div>
</div>


<div class="row align-items-center mb-5">
    <div class="col-md-5 mb-4 text-center">
        <div>
            <span class="eng-gradient type-target" style="font-size: 2.5rem;" data-text="Wheelchair for the disabled"></span><span class="typing-cursor"></span>
            <span class="cn-text">智能感知轮椅</span>
        </div>
    </div>

    <div class="col-md-7 d-flex justify-content-center">
        <div class="video-wrapper" style="width: 80%;">
            <video id="video-wheelchair" autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_sensing/Wheelchair.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
    </div>
</div>


<div class="row align-items-center mb-5">
    <div class="col-md-7 mb-4 order-md-1 order-2">
         <div class="video-wrapper">
            <video autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_sensing/Authentication.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
    </div>

    <div class="col-md-5 mb-4 order-md-2 order-1 text-center">
        <div>
            <span class="eng-gradient type-target" style="font-size: 2rem;" data-text="Identity Authentication through Eye-Tracking"></span><span class="typing-cursor"></span>
            <span class="cn-text">基于眼动追踪的身份认证</span>
        </div>
    </div>
</div>


<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="video-wrapper" style="border: 1px solid #66fcf1; box-shadow: 0 0 50px rgba(102, 252, 241, 0.2);">
            <video controls autoplay loop muted playsinline style="width: 100%; height: auto;">
                <source src="{{ '/assets/video/smart_sensing/non-contact.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
        
        <div class="row mt-5">
             <div class="col-12 text-center">
                <div>
                    <span class="eng-gradient">
                        A non-contact three-dimensional interaction technology integrating object detection in image processing and acoustic sensing
                    </span>
                    <span class="cn-text-static">
                        融合图像处理中的目标检测与声学感知的非接触式三维交互技术
                    </span>
                </div>
             </div>
        </div>
    </div>
</div>

<hr class="my-5" style="border-color: #333;">

<script>
    document.addEventListener("DOMContentLoaded", function() {
        // 1. 视频加速逻辑
        const v1 = document.getElementById('video-wheelchair');
        if(v1) {
            v1.playbackRate = 1.5; 
        }

        // 2. 打字机逻辑 (只针对 .type-target)
        const targets = document.querySelectorAll('.type-target');
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const span = entry.target;
                    const text = span.getAttribute('data-text');
                    const cursor = span.nextElementSibling;
                    const cnText = span.parentElement.querySelector('.cn-text');
                    
                    if (span.classList.contains('typing-done')) return;
                    span.classList.add('typing-done');
                    
                    let i = 0;
                    function typeChar() {
                        if (i < text.length) {
                            span.textContent += text.charAt(i);
                            i++;
                            setTimeout(typeChar, 30); 
                        } else {
                            if(cursor) cursor.style.display = 'none'; // 隐藏光标
                            if(cnText) cnText.classList.add('visible'); // 显示中文
                        }
                    }
                    typeChar();
                    
                    observer.unobserve(span);
                }
            });
        }, { threshold: 0.5 });

        targets.forEach(target => observer.observe(target));
    });
</script>