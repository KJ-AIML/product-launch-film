---
title: How product-launch-film Works
subtitle: From real software repo and sandbox captures to a 16-gate verified 1080p60 MP4
eyebrow: Production Pipeline
theme: auto
cols: 3
---

Lead: `product-launch-film` turns a real codebase into an After-Effects-smooth 1080p60 launch film in Remotion — capturing genuine CLI/app output in a sandbox, driving every frame from pure time math, mastering original audio to -16 LUFS, and gating delivery through 16 automated checks.

## A From repo to verified 60fps master {span=3}

**How to read this:** Follow a launch film through all four stages — from reading the real codebase and capturing sandbox proof to rendering, EBU R128 mastering, and passing all 16 quality gates.

```isokit
{
  "title": "Code-Rendered Launch Film Pipeline",
  "subtitle": "Real product proof in, verified 1080p60 BT.709 master out.",
  "meta": ["Remotion 4.0.530", "16 QA Gates"],
  "legend": [
    { "kind": "req", "label": "source / capture" },
    { "kind": "write", "label": "render / master" },
    { "kind": "push", "label": "QA gate pass" }
  ],
  "metrics": [
    { "key": "fps", "label": "Frame rate", "unit": " fps" },
    { "key": "lufs", "label": "Master", "unit": " LUFS" },
    { "key": "gates", "label": "Gates", "unit": "/16" }
  ],
  "components": {
    "repo":     { "type": "block", "x": -13, "y": 0,  "color": "blue",   "glyph": "code",   "label": ["Real Repo", "& Sandbox"], "pills": "below" },
    "story":    { "type": "block", "x": -1,  "y": 0,  "color": "orange", "glyph": "layers", "label": ["Story, Motif", "& Style"], "pills": "below" },
    "remotion": { "type": "block", "x": -1,  "y": 12, "color": "teal",   "glyph": "window", "label": ["Remotion", "2D / 3D"] },
    "audio":    { "type": "block", "x": 12,  "y": 0,  "color": "purple", "glyph": "zap",    "label": ["Audio Synth", "& -16 LUFS"], "pills": "below" },
    "qa":       { "type": "block", "x": 12,  "y": 12, "color": "green",  "glyph": "shield", "label": ["16 QA Gates", "BT.709 MP4"] }
  },
  "wires": {
    "capture": { "from": "repo",     "to": "story",    "pts": ["repo", "story"], "label": "Real UI & CLI" },
    "build":   { "from": "story",    "to": "remotion", "pts": ["story", "remotion"], "label": "Pure time(t)" },
    "score":   { "from": "story",    "to": "audio",    "pts": ["story", "audio"], "label": "Beat cues" },
    "mux":     { "from": "audio",    "to": "qa",       "pts": ["audio", "qa"], "label": "AAC 48 kHz" },
    "verify":  { "from": "remotion", "to": "qa",       "pts": ["remotion", "qa"], "label": "PNG -> H.264" }
  },
  "goals": [
    { "text": "Capture real binary/CLI output in a throwaway sandbox first", "at": 1 },
    { "text": "Render 2D editorial or 3D Three.js hero hardware at deterministic 60 fps", "at": 2 },
    { "text": "Pass all 16 codec, colour, loudness, flow, and overlap gates", "at": 4 }
  ],
  "steps": [
    {
      "short": "Capture",
      "chapter": "setup",
      "title": "Read the real repo and capture sandbox proof",
      "body": [
        "Every claim traces to source (`file:line`), every CLI excerpt runs in an isolated sandbox, and desktop apps capture 2x Retina screenshots directly from the real binary.",
        "No invented stats, no stale model names, and sample data is labelled explicitly."
      ],
      "changes": ["+ Real repo & sandbox capture", "+ Tagline & claims table", "+ Brand sheet"],
      "metrics": { "fps": 60, "lufs": -16, "gates": 16 },
      "scene": {
        "entities": {
          "repo":     { "use": "repo",     "cpu": 0.24, "tags": [{ "text": "2x Retina", "tone": "blue", "icon": "eye" }] },
          "story":    { "use": "story",    "cpu": 0.30, "tags": [{ "text": "Motif -> Motion", "tone": "amber", "icon": "sparkles" }] },
          "remotion": { "use": "remotion", "cpu": 0.42, "tags": [{ "text": "2D / 3D PBR", "tone": "blue", "icon": "cpu" }] },
          "audio":    { "use": "audio",    "cpu": 0.28, "tags": [{ "text": "No-reuse", "tone": "violet", "icon": "zap" }] },
          "qa":       { "use": "qa",       "cpu": 0.34, "tags": [{ "text": "16/16 PASS", "tone": "green", "icon": "check" }] }
        },
        "links": ["capture", "build", "score", "mux", "verify"],
        "flows": [
          { "route": ["capture", "build"], "kind": "req", "rate": 1.6 },
          { "route": ["score", "mux"], "kind": "write", "rate": 1.4 },
          { "route": ["verify"], "kind": "push", "rate": 1.5 }
        ]
      }
    },
    {
      "short": "Direct",
      "chapter": "solution",
      "title": "Choose a distinct motif and 2D or 3D stage",
      "body": [
        "Draft 2–3 distinct style directions: light editorial type-led, motif-built colour fields, or a single-take **3D Hero Device** (Three.js PBR MacBook/phone with live binary captures).",
        "Every camera move uses Fritsch-Carlson Hermite tracks, log-space zoom, and pure `f(t)` timing."
      ],
      "changes": ["~ Hermite camera & log zoom", "~ 2D editorial or 3D PBR stage", "~ Stills + click-frame check"],
      "metrics": { "fps": 60, "lufs": -16, "gates": 16 },
      "scene": {
        "entities": {
          "repo":     { "use": "repo",     "cpu": 0.14 },
          "story":    { "use": "story",    "cpu": 0.48, "tags": [{ "text": "Hermite f(t)", "tone": "amber", "icon": "route" }] },
          "remotion": { "use": "remotion", "cpu": 0.56, "tags": [{ "text": "PNG @ 60fps", "tone": "blue", "icon": "window" }] }
        },
        "links": ["capture", "build"],
        "flows": [{ "route": ["capture", "build"], "kind": "req", "rate": 1.9 }]
      }
    },
    {
      "short": "Sound",
      "chapter": "technique",
      "title": "Synthesize a fresh palette and master to -16 LUFS",
      "body": [
        "Generate an original score and frame-locked tactile SFX via Python or zero-dependency Node.js (`make-audio.mjs`), with a strict no-reuse check across films.",
        "Optional ElevenLabs VO runs through STT pronunciation verification and `master-audio.mjs` hits `-16 ±0.5 LUFS` with true peak `<= -2.0 dBTP`."
      ],
      "changes": ["+ Original score & tactile SFX", "~ Bus compression (<10% limiter)", "~ EBU R128 -16 LUFS master"],
      "metrics": { "fps": 60, "lufs": -16, "gates": 16 },
      "scene": {
        "entities": {
          "story":    { "use": "story",    "cpu": 0.22 },
          "audio":    { "use": "audio",    "cpu": 0.52, "tags": [{ "text": "-16 LUFS", "tone": "violet", "icon": "gauge" }] },
          "qa":       { "use": "qa",       "cpu": 0.30 }
        },
        "links": ["score", "mux"],
        "flows": [{ "route": ["score", "mux"], "kind": "write", "rate": 1.8 }]
      }
    },
    {
      "short": "16 Gates",
      "chapter": "recap",
      "title": "Verify 16 quality gates and ship the delivery pack",
      "body": [
        "Encode PNG frames once into `yuv420p` H.264 High with explicit `BT.709` primaries/transfer bitstream tags, verify optical flow holds, contrast, overlaps, and click frames.",
        "Never overwrite a reviewed cut — every feedback round becomes a clean versioned composition."
      ],
      "changes": ["+ Explicit BT.709 color tags", "+ Contact sheet & side-by-side audit", "+ Ready to ship"],
      "metrics": { "fps": 60, "lufs": -16, "gates": 16 },
      "scene": {
        "entities": {
          "repo":     { "use": "repo",     "cpu": 0.14 },
          "story":    { "use": "story",    "cpu": 0.20 },
          "remotion": { "use": "remotion", "cpu": 0.28 },
          "audio":    { "use": "audio",    "cpu": 0.20 },
          "qa":       { "use": "qa",       "cpu": 0.44, "tags": [{ "text": "16/16 PASS", "tone": "green", "icon": "circleCheck" }] }
        },
        "links": ["capture", "build", "score", "mux", "verify"],
        "flows": [{ "route": ["verify"], "kind": "push", "rate": 1.8 }]
      }
    }
  ]
}
```

```callout ok Honest delivery
Every cut ships with its MP4, contact sheet, side-by-side stills, ffprobe + EBU R128 numbers, claims table, and honest notes on anything unverified or not yet listened to.
```
