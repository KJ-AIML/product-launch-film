# Case studies

Three real films made with this method, and the feedback loops that shaped the skill.
The Connectra feedback is reconstructed from its commit messages and README, which say what each cut
changed. The Heli-Harness and AGY Swap feedback is quoted from the owner. The full concept docs, narration scripts and copy are in `references/connectra/` and `references/heli/`.

## Connectra: v1 → v4 (one person, a fleet of machines, any AI agent)

| Cut | What it was | Feedback / problem | What changed |
|---|---|---|---|
| v1 | First Remotion draft. Dark, 7 scenes, 50 s, generic components. | Looked generic and AI-made: fake metrics, chips, gratuitous checkmarks, made-up UI. | → v2 |
| v2 | Same beats, components rebuilt from the real desktop app (`App.tsx`/`styles.css`) and the website panels, with the product's own icon set and no emoji. | Faithful but still dark. The dark terminal look read as slop. | → v3 as a new composition |
| v3 | Light editorial cut: warm paper, near-black ink, huge type, soft shadows, slow camera, an isometric fleet of minis, one violet accent. Then a sound version: ElevenLabs "George" (`eleven_multilingual_v2`), synthesized score + SFX, -16 LUFS master. | Labels too faint, fleet labels and terminals overlapping, the approval panel had a dark code block, stacked badges and nested borders, and the narration sounded read. | → v4 |
| v4 | Krehel UI rules applied. AA contrast tokens (ink3 3.2:1 → 6.3:1). The fleet ring was rebuilt from pure geometry with an overlap checker (`check-fleet.ts`). A calm light approval card with one filled button. A conversational script voiced by "Liam" on `eleven_v4` with audio tags and stitching, and the music re-ducked to 0.085. | Accepted as the reference style for Connectra. | |

Lessons:
- Rebuild the real UI; don't decorate a generic one.
- Light themes win; dark code blocks inside light UI are a slop tell on their own.
- Contrast has to be measured, not eyeballed. "Slightly faint" grey labels fail AA and look cheap.
- Overlaps only show up mid-animation, so check geometry in code and look at dense audit sheets.
- Narration: an expressive model plus audio tags plus a conversational rewrite beat a "storyteller"
  voice reading formal copy.

## Heli-Harness: v1 → v2 (a harness for AI coding CLIs)

| Cut | What it was | Feedback | What changed |
|---|---|---|---|
| v1 | Dark "night flight deck". The story was governance: one rulebook, the agent asks, the human grants, a hard floor of never-run commands. Real hook/CLI output from a sandbox. Voice "Chris" on `eleven_v4`. | **Loved:** the voice (Chris) and the storytelling mood and pacing. **Rejected:** the content ("Heli is not just push-blocking") and the dark style ("instantly reads as AI slop"). Two scenes were too dense. | → v2, new composition, v1 kept |
| v2 | "Switch tools. Keep the thread." A fix starts in Claude Code, two attempts fail, Codex opens the next day blank. Heli's task record (`current-task.md`) is injected at SessionStart in every CLI. The skills (verify-premise, fix-loop) and the two-strike hook stop a third blind patch. "Done" needs recorded passing evidence. Governance became one supporting beat. Light "clear air" theme: cool white, navy ink, cobalt from the repo hero image, light terminal panes, Schibsted Grotesk + JetBrains Mono, a 2 px "thread" motif. Same voice and delivery, new conversational script. | (pending) | |

Lessons:
- The most technical or security-flavoured feature is rarely the story. Ask "what does this make
  easier every day?" and build the film around that.
- Keep what was praised exactly as it was (voice, delivery settings, pacing), and change only the axes
  that were criticised.
- STT caught a pronunciation problem nobody could hear: "Heli" alone was transcribed as "Healy" in two
  takes. The line was rewritten so the bare name never appears.
- Fewer elements per frame: start a lone panel centred, then slide it aside when its partner arrives.
  Don't leave half the frame empty waiting for it.
- A render that is backgrounded in an agent shell can be killed when the call returns. Render in the
  foreground with a long timeout and check that the log is still growing.

## AGY Swap: v1 → v3 (zero-friction account switching — 3D hero-device single-take loop)

A 21 s, no-VO, seamless single-take 3D studio showcase inspired by macro hardware launch demos: a floating Space Black MacBook Pro 16" glides through a continuous camera choreography while demonstrating real macOS menu-bar & GPUI account switching, quick-action menus, and app settings.

| Cut | What it was | Feedback / problem | What changed |
|---|---|---|---|
| v1 | 28 s single-take Three.js MacBook Pro in Remotion (`1080p60`). Hand-drawn HTML Canvas UI (`2048×1332`), synth-wave pad + soft blips via zero-dep Node `Float64Array` WAV. | **Problem:** chassis looked like polished chrome (`metalness: 0.88, roughness: 0.27`), wallpaper turned blurry under macro zoom, pacing felt slightly slow, and synth SFX felt too plain. | → v2 |
| v2 | Tightened to crisp 21.0 s (1260 frames) with snappier camera beats, matte Space Black chassis (`metalness: 0.38, roughness: 0.56`), crisp procedural 2× macro-safe wallpaper, warm acoustic marimba + mechanical keycap/trackpad click score (`compressBus` kept master limiter <5% active). | **Owner forced a frame-by-frame audit against the real app and a real MacBook:** hand-drawn Canvas UI drifted from the actual GPUI binary (wrong App Settings layout, missing toolbar buttons, cursor click slightly off hitbox), keyboard looked boxy/generic instead of a real 79-key backlit MacBook Pro, and sandbox fixture still showed outdated model IDs (`claude-sonnet-4-5`, `gpt-5.2-codex`). | → v3 |
| v3 | Captured 100% real 2× Retina PNG states straight from the compiled Rust GPUI app (`--sandbox`), composited onto the 3D display texture with live 60 fps cursor & LED socket overlays; updated sandbox model catalogue to exact live models (`Gemini 4 Neon / Hydrogen / Carbon`, `Claude Opus 5.5 / Sonnet 5.5`, `GPT-OSS 120B`); rebuilt MacBook Pro 16" with 79 backlit keys, Inverted-T arrows, circular Touch ID ring, recessed dark key well, laser-drilled micro-dot speaker grilles, thin matte bezel + notch, and side MagSafe/USB-C/HDMI ports; verified with Click-Frame Audit (`t-1f, t, t+1f`) and side-by-side Real-App Frame Diff. Mastered to `-16.09 LUFS`, `-2.1 dBTP`, BT.709, seamless 21.0 s loop. | **Accepted ("โหจารย์").** Promoted straight into `SKILL.md` v2.1 and `references/3d-device-stage.md`. | Shipped |

Lessons:
- **Real binary capture beats hand-redrawn Canvas UI every time.** Hand-drawing native UI guarantees subtle drift in layouts, buttons, and typography that viewers spot immediately. Capture 2× Retina sandbox states from the real binary and animate only live overlays (cursor, pressed state, LEDs).
- **Anodized metal is matte, not chrome.** High `metalness` + low `roughness` under studio lighting turns Space Black into a mirror. Bead-blasted aluminium sits around `metalness: 0.30–0.45`, `roughness: 0.50–0.65` with subtle surface grain.
- **Hardware micro-details sell photorealism.** A real MacBook Pro reads instantly only when the 79-key backlit layout, Inverted-T arrow cluster, circular Touch ID ring, recessed key well, micro-dot speaker grilles, and thin matte display bezel are physically right.
- **Audit sandbox fixtures against live source.** Even a running binary lies if its mock fixture carries last season's model names.
- **Click-Frame Audit replaces DOM `data-box` for WebGL scenes.** Inspect `t-1f, t, t+1f` around every click and diff a rendered video frame side-by-side against a real app screenshot before calling it done.
- **Zero-dependency Node `Float64Array` + `compressBus` unlocks portable audio.** No Python/numpy needed; per-bus envelope compression keeps punchy marimba/mechanical scores cleanly below 10% master limiter activity at `-16 LUFS`.
