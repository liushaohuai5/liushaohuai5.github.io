---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in Electrical Engineering, Department of Electrical Engineering, Tsinghua University, 2016-2020
* M.S. in Computer Science, Institute for Interdisciplinary Information Science (IIIS), Tsinghua University, 2020-2023
* Ph.D in Electrical Engineering, Texas A&M University, 2024-

Work experience
======
* **June–September 2026: Applied Scientist Intern, Amazon**
  * Mentor: [Yuning Wu](https://www.linkedin.com/in/yuning-wu/)
  * Conducted research on search-augmented agentic reinforcement learning for mathematical reasoning.
  * Developed APIVIS, resulting in [Improving Math Reasoning through Value-Guided Informative Search](https://neurips.cc/virtual/2026/168481), accepted to the NeurIPS 2026 MATH-AI Workshop.
* Spring 2024: Research Assistant (Gap year)
  * Tsinghua University
  * Duties included: Reinforcement learning research
  * Supervisor: Professor Yang Gao
* Summer 2022: AI Engineer, JD.com
  * Search and recommendation
  
Skills
======
* Coding
  * Python
  * c/c++
  * Matlab
* Soccer
  * National 2nd level athlete


Publications
======
{% assign sorted_publications = site.publications | sort: "date" | reverse %}
<ul class="cv-publications">
{% for paper in sorted_publications %}
  <li>
    <a href="{{ paper.url | relative_url }}">{{ paper.title }}</a><br>
    {% if paper.authors %}<span class="cv-publications__authors">{{ paper.authors | escape | replace: 'Shaohuai Liu', '<strong>Shaohuai Liu</strong>' }}</span><br>{% endif %}
    {% if paper.author_note %}<span class="cv-publications__authors">{{ paper.author_note | escape }}</span><br>{% endif %}
    <span class="cv-publications__venue">{{ paper.venue }}, {{ paper.date | date: "%Y" }}{% if paper.status %} · {{ paper.status }}{% endif %}{% if paper.award %} · {{ paper.award }}{% endif %}</span>
  </li>
{% endfor %}
</ul>
  
Service and leadership
======
* Player for Tsinghua Men's Soccer Team (2016-2023)
* Captain of Tsinghua EEA Soccer Team (2016-2020)
* Captain of Tsinghua IIIS Soccer Team (2021-2022)
* Captain of Changsha YALI High School Soccer Team (2014-2015)
