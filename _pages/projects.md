---
layout: page
title: projects
permalink: /projects/
description: 
nav: true
nav_order: 2
display_categories: [Smart Healthcare, Mobile Computing, AI & Multimedia]
horizontal: false
---

<style>

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

/* 3. 期刊名称斜体 */
.bibliography .periodical {
    font-style: italic !important; 
}

header.post-header {
    display: none !important;
  }

</style>

<div class="header" style="color: #c9302c; font-size: 2.0rem; font-weight: bold; margin-top: 0px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 8px; letter-spacing: 0.5px;">
  Projects
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
