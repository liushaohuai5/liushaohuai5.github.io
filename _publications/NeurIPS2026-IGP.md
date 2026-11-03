---
title: "Iterative Gumbel Planning for Continuous Control"
collection: publications
permalink: /publication/NeurIPS2026-IGP/
# Conference presentation date; accepted in September 2026.
date: 2026-12-11
venue: "NeurIPS"
status: "Accepted"
authors: "Shaohuai Liu, Weirui Ye, Yilun Du, Le Xie"
summary: "Aligning search and policy representations for continuous control, addressing variance inflation through iterative Gumbel planning with factorized categorical policies."
paperurl: "https://arxiv.org/abs/2611.02236"
projecturl: "https://liushaohuai5.github.io/ez_igp/"
codeurl: "https://github.com/liushaohuai5/EZ-IGP"
conferenceurl: "https://neurips.cc/virtual/2026/loc/atlanta/poster/150597"
selected_order: 1
thumbnail: /images/research/igp.svg
thumbnail_alt: "Iterative search refines a factorized categorical policy over continuous-action candidates."
share: false
comments: false
---

This work continues the EfficientZero line of research on sample-efficient, search-based reinforcement learning. It studies a structural mismatch in continuous control: search evaluates a finite set of candidate actions and returns a discrete distribution, while a Gaussian policy represents a continuous density.

We show that distilling search outputs into a Gaussian policy induces a non-vanishing projection error, inflating policy variance and producing a persistent return gap. **Iterative Gumbel Planning (IGP)** instead uses a per-dimension factorized categorical policy aligned with the search support. This eliminates the projection error and leaves a bounded discretization error controlled by the grid resolution.

IGP combines Gumbel Top-K sampling without replacement with multiple rounds of search and refinement at the same state. Experiments on DMControl and HumanoidBench demonstrate improved sample efficiency and lower temporal action variance at evaluation.

[Project Page](https://liushaohuai5.github.io/ez_igp/) · [Code](https://github.com/liushaohuai5/EZ-IGP) · [arXiv](https://arxiv.org/abs/2611.02236) · [OpenReview](https://openreview.net/forum?id=gxzYBTetUi) · [NeurIPS conference page](https://neurips.cc/virtual/2026/loc/atlanta/poster/150597)
