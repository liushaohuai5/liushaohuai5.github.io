---
title: "Scaling Tasks, Not Samples: Mastering Humanoid Control through Multi-Task Model-Based Reinforcement Learning"
collection: publications
permalink: /publication/ICML2024-EfficientZeroV2
excerpt: 'Use multi-task training for RL to gain superior overall sample efficiency through knowledge sharing among relevant tasks on gradient level.'
date: 2026-03-02
venue: ''
paperurl: 'https://arxiv.org/abs/2603.01452'
citation: ''
---
Developing generalist robots capable of mastering diverse skills remains a central challenge in embodied AI. While recent progress emphasizes scaling model parameters and offline datasets, such approaches are limited in robotics, where learning requires active interaction. We argue that effective online learning should scale the \emph{number of tasks}, rather than the number of samples per task. This regime reveals a structural advantage of model-based reinforcement learning (MBRL). Because physical dynamics are invariant across tasks, a shared world model can aggregate multi-task experience to learn robust, task-agnostic representations. In contrast, model-free methods suffer from gradient interference when tasks demand conflicting actions in similar states. Task diversity therefore acts as a regularizer for MBRL, improving dynamics learning and sample efficiency. We instantiate this idea with \textbf{EfficientZero-Multitask (EZ-M)}, a sample-efficient multi-task MBRL algorithm for online learning. Evaluated on \textbf{HumanoidBench}, a challenging whole-body control benchmark, EZ-M achieves state-of-the-art performance with significantly higher sample efficiency than strong baselines, without extreme parameter scaling. These results establish task scaling as a critical axis for scalable robotic learning.

[Paper](https://openreview.net/pdf/f74f8223968560f54da45991dd2ba1f3de3ba7cd.pdf),
[Website](https://yewr.github.io/ez_m/),
[Code](http://github.com/liushaohuai5/EfficientZero_Multitask)

BibTex:
'''
@article{wang2024efficientzero,
  title={EfficientZero V2: Mastering Discrete and Continuous Control with Limited Data},
  author={Wang, Shengjie and Liu, Shaohuai and Ye, Weirui and You, Jiacheng and Gao, Yang},
  journal={arXiv preprint arXiv:2403.00564},
  year={2024}
}
'''