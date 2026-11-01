# EZ-IGP project page

Buildless HTML/CSS/JavaScript. Intended URL: https://liushaohuai5.github.io/ez_igp/

## Preview

From the repository root, run `python3 -m http.server 8765`, then visit
http://localhost:8765/ez_igp/. On a remote machine, forward port 8765 first.

## Publishing

The existing personal website uses GitHub Pages from `master`, root `/`, with
Jekyll. This directory has no front matter and uses relative assets, so it is
copied as static content. No homepage files or publishing settings need changing.
Review locally before committing and pushing. Do not publish review records,
private manuscript sources, credentials, or incomplete citation metadata.

## Sources

- The 20 MP4 files were downloaded unmodified on 2026-11-01 from
  https://mellifluous-marzipan-a1cb45.netlify.app/ using the matching `videos/`
  paths. They show 7 DMC tasks and 3 HumanoidBench tasks, with two policies each.
- `assets/images/method.png` and `fig1_overall_igp_bar.png` were rendered from
  the corresponding PDFs in the local EZ-IGP paper. No plotted data were edited.
- Author order and affiliations follow the camera-ready author block.
- Text is a concise overview of the manuscript, not a new experimental claim.
- Layout and interactions are implemented independently; the EZ-M project page
  informed the academic-page structure. No third-party website code was copied.

## Before publication

- Review wording, figures, video labels and mobile layout.
- arXiv and Code buttons intentionally remain disabled; replace them with links
  when public destinations are ready. The citation is intentionally incomplete.
- Confirm funding/competing-interest wording with the authors. Existing Olympus
  acknowledgment and requested PJM disclaimer are included.
- Only after publication, update the paper's old project-site URL.

## Video behavior

The default task view is user-played, with paired play/pause/restart controls.
Benchmark filtering preserves a task when possible; previous/next wraps within
the selected benchmark. Video-wall clips load near the viewport and pause off
screen. Reduced-motion users get no automatic playback. Native controls remain
available. Paired start does not imply identical initial states or frame-perfect
synchronization. The page makes this limitation explicit.

No external scripts, analytics, remote fonts, or JavaScript dependencies.
