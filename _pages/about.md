---
permalink: /
title: "About"
excerpt: "Search-augmented reinforcement learning, from continuous control to reasoning agents."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p class="section-eyebrow">Reinforcement learning · Planning · Reasoning</p>

I am a PhD student in the Department of Electrical & Computer Engineering at Texas A&M University, supervised by [Prof. Le Xie](https://xiele00.github.io/) and co-advised by [Prof. Chao Tian](https://engineering.tamu.edu/electrical/profiles/tian-chao.html).

<div class="research-focus">
  <p>My research focuses on <strong>search-augmented reinforcement learning</strong>: turning search guided by learned models and value functions into efficient and reliable policy improvement, from continuous control to reasoning agents.</p>
</div>

I received my master's degree from the Institute for Interdisciplinary Information Sciences (IIIS) at Tsinghua University, advised by [Prof. Yang Gao](https://yang-gao.weebly.com/), and my bachelor's degree in Electrical Engineering from Tsinghua, where I worked with [Prof. Qirong Jiang](https://www.eea.tsinghua.edu.cn/en/faculties/qrjiang.htm) and [Prof. Haiwang Zhong](https://www.eea.tsinghua.edu.cn/en/faculties/zhonghw.htm).

## News

{% include news.html %}

<div class="section-heading">
  <h2 id="selected-research">Selected Research</h2>
  <a href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a>
</div>

{% assign selected_publications = site.publications | where_exp: "paper", "paper.selected_order != nil" | sort: "selected_order" %}
<div class="research-list">
{% for paper in selected_publications %}
  {% include research-card.html paper=paper selected=true %}
{% endfor %}
</div>

## Beyond Research

I spent over 15 years as a student athlete, playing for YALI High School and the Tsinghua University Men's Soccer Team. I play midfield and am a fan of Messi, FC Barcelona, and Argentina.
