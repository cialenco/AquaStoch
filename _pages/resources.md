---
layout: page
title: resources
permalink: /resources/
description: Curated resources by category
nav: true
nav_order: 6
display_categories:
  - centers
  - datasets
  - in_press
---

<div class="projects">

{% if page.display_categories %}

  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">
      {{ category | replace: "_", " " }}
    </h2>
  </a>

  {% assign categorized_resources = site.data.resources[category] %}

  {% if categorized_resources %}
  <ul class="resource-list">
    {% for item in categorized_resources %}
    <li>
      <strong>
        {% if item.url %}
          <a href="{{ item.url }}" target="_blank" rel="noopener">
            {{ item.title }}
          </a>
        {% else %}
          {{ item.title }}
        {% endif %}
      </strong>

      {% if item.authors %}
        <br><em>{{ item.authors }}</em>
      {% endif %}

      {% if item.journal %}
        — {{ item.journal }}{% if item.year %}, {{ item.year }}{% endif %}
      {% endif %}

      {% if item.description %}
        <br>{{ item.description }}
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  {% endif %}

  {% endfor %}

{% endif %}

</div>
