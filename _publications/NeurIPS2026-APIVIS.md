---
title: "Improving Math Reasoning through Value-Guided Informative Search"
collection: publications
permalink: /publication/NeurIPS2026-APIVIS/
# Workshop presentation date; the acceptance month has not been specified.
date: 2026-12-13
venue: "NeurIPS MATH-AI Workshop"
status: "Accepted"
authors: "Shaohuai Liu, Yuning Wu, Haoran Liu, Chaoqun Jia, Devin Chen, Kai Wei"
summary: "Turning value-guided search improvements into informative learning signals for mathematical reasoning with verifiable rewards."
paperurl: "https://openreview.net/forum?id=dx6uk28WZf"
conferenceurl: "https://neurips.cc/virtual/2026/168481"
selected_order: 2
thumbnail: /images/research/apivis.svg
thumbnail_alt: "Value-guided search selects an improved reasoning path and provides a signal for policy learning."
share: false
comments: false
---

This work was conducted during my **Applied Scientist internship at Amazon (June–September 2026)**, where I worked on search-augmented agentic reinforcement learning.

Reinforcement learning with verifiable rewards (RLVR) improves mathematical reasoning, but greater search-induced trajectory diversity does not by itself guarantee policy improvement. We introduce **APIVIS**, a training-time framework that adapts finite-budget Gumbel search to chunk-level mathematical reasoning.

APIVIS mixes direct and searched responses within each rollout group, making search improvements visible through informative relative rewards. It also selectively supervises search-improved tokens, preserving a learning signal when uniform group rewards make GRPO ineffective.

We establish policy-improvement guarantees for exact value-guided selection and corresponding approximate guarantees under bounded value-estimation error. Experiments across mathematical reasoning benchmarks and model scales demonstrate improvements over competitive search-based methods.

Accepted to **MATH-AI: The 6th Workshop on Mathematical Reasoning and AI at NeurIPS 2026**.

[Paper / OpenReview](https://openreview.net/forum?id=dx6uk28WZf) · [NeurIPS paper page](https://neurips.cc/virtual/2026/168481) · [Workshop](https://neurips.cc/virtual/2026/loc/atlanta/workshop/137559)
