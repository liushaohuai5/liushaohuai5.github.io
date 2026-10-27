---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
You can also find my work on [Google Scholar]({{ site.author.googlescholar }}).
{% endif %}

{% assign sorted_publications = site.publications | sort: "date" | reverse %}
{% assign publication_year = "" %}
{% for paper in sorted_publications %}
  {% assign current_year = paper.date | date: "%Y" %}
  {% if current_year != publication_year %}
<h2 class="publication-year">{{ current_year }}</h2>
    {% assign publication_year = current_year %}
  {% endif %}
  {% include research-card.html paper=paper %}
{% endfor %}
