---
title: How product-launch-film Works
subtitle: From real software repo and sandbox captures to a 16-gate verified 1080p60 MP4
eyebrow: Production Pipeline · 3D Object Bench
theme: auto
cols: 3
---

Lead: `product-launch-film` turns a real codebase into an After-Effects-smooth 1080p60 launch film in Remotion — capturing genuine CLI and 2x Retina app output in a sandbox, driving every 2D or 3D frame from pure time math, mastering fresh audio to -16 LUFS, and gating delivery through 16 automated checks.

## A From repo to verified 60fps master {span=3}

**How to read this:** Follow one launch film across six workbench stations — from real sandbox capture through Remotion 2D/3D rendering, -16 LUFS mastering, catching defects at the 16 QA gates, and shipping the delivery pack.

```lesson Launch Film Production Pipeline
subtitle: Real product proof in, verified 1080p60 BT.709 master out.
meta: Remotion 4.0.530 · 16 QA Gates
places: repo = laptop "Real Repo" | story = tray "Story & Motif" | stage = monitor "Remotion 2D/3D" | audio = server "Audio -16 LUFS" | gates = gate "16 QA Gates" | pack = mailbox "Delivery Pack"
rails: repo - story - stage - audio - gates - pack | story - gates
counters: Capture | Stage | Master | Gates
pucks: change = real proof | reply = fix loop | fail = gate catch | store = BT.709 master | slow = 8x blur pass
goals: Capture real CLI and 2x Retina binary states in a sandbox @1 | Direct a distinct 2D editorial or 3D Three.js hero stage @3 | Catch visual, colour, loudness, or click-frame defects before shipping @5

step Capture: Read repo and capture sandbox [how]
  Every claim traces to `file:line`. Run CLI commands in a throwaway sandbox and capture ==2x Retina screenshots== straight from the real binary.
  tip Honesty rule: Check sandbox fixtures against live source so stale model names never reach a frame.
  show: repo, story
  move: repo -> story
  focus: repo
  set: Capture = 2x Retina good | Stage = — none | Master = — none | Gates = — none

step Direct: Lock tagline, motif, and beats [how]
  Write one tagline, a claims table, and a brand sheet. Pick a light editorial ==motif-to-motion== cut or a calibrated 3D matte hardware stage.
  tip Never repeat: Each film gets its own palette, motion verbs, and camera choreography.
  show: repo, story, stage
  move: story -> stage
  focus: story
  set: Capture = verified good | Stage = story data good | Master = — none | Gates = — none

step Render: Drive 2D or 3D frames by f(t) [how]
  Remotion renders deterministic ==1080p60 PNG== frames from pure time math — Hermite camera tracks, log-space zoom, and synchronous Three.js PBR.
  tip Anti-chrome PBR: Bead-blasted anodized aluminium uses low metalness and matte roughness, never mirror chrome.
  show: repo, story, stage, audio
  move: stage -> audio slow
  focus: stage
  set: Capture = verified good | Stage = 60fps PNG good | Master = — none | Gates = — none

step Sound: Synthesize fresh score and SFX [how]
  Compose a new timbre per film via zero-dep Node `make-audio.mjs` or Python, compress percussive buses, and master to ==-16 LUFS== (`<= -2 dBTP`).
  tip No-reuse check: Vary core instruments, percussion, and SFX recipes on every film.
  show: repo, story, stage, audio, gates
  move: audio -> gates store
  focus: audio
  set: Capture = verified good | Stage = 60fps PNG good | Master = -16 LUFS good | Gates = running warn

step Catch: 16 QA gates catch a defect [case]
  Automated gates verify H.264 High, explicit ==BT.709== colour tags, optical flow holds, overlaps, and Click-Frame Diffs — flagging issues before delivery.
  tip New cut only: Never overwrite a reviewed version; every fix round lands in a clean composition.
  show: repo, story, stage, audio, gates
  move: audio -> gates fail & gates -> story reply
  fail: gates
  cut: audio - gates
  focus: gates
  set: Capture = verified good | Stage = patch cut warn | Master = -16 LUFS good | Gates = 15/16 bad

step Ship: Pass 16/16 gates and deliver [recap]
  All 16 gates pass with zero overlaps, verified real-app frames, and clean loudness. Ship the ==MP4==, contact sheet, stills, QA table, and `CREDITS.md`.
  show: repo, story, stage, audio, gates, pack
  move: repo -> story, story -> stage, stage -> audio, audio -> gates store, gates -> pack store
  focus: pack
  set: Capture = verified good | Stage = 1080p60 good | Master = -16 LUFS good | Gates = 16/16 good
```

```callout ok Honest delivery
Every cut ships with its MP4, contact sheet, side-by-side stills, ffprobe + EBU R128 numbers, claims table, and honest notes on anything unverified or not yet listened to.
```
