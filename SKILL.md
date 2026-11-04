---
name: product-launch-film
description: >-
  Use when the user wants a short (30-75 s) launch, promo, demo or explainer
  film for their own software product, repo, CLI or app, built as code in
  Remotion from the real product at 60 fps with motion blur. Covers research,
  story, motif-driven style directions, reference-clip style studies, motion
  craft, original music and SFX with or without voice-over, EN/TH cuts, 16
  quality gates, and iteration on feedback. Full version with templates lives
  in the private repo github.com/KJ-AIML/product-launch-film.
---

# Product launch film (code-rendered)

Goal: a 40-70 s, 1920x1080 @ 60 fps film that looks hand-made and After-Effects smooth, shows only what the product really does, has its own look built from the product's brand, and does not read as AI slop.

Files in this skill (this repo):
- `templates/remotion-starter/`: a pinned Remotion project with a theme, copy, layout checker, contrast checker, stills/audit, VO, music and mastering scripts. Copy it, don't build from scratch.
- `references/checklist.md`: the anti-slop and review checklist. Run it before every delivery.
- `references/case-studies.md`: what went wrong and what fixed it on real projects. Read it once.
- `references/heli/`, `references/connectra/`: real concept docs, narration scripts, on-screen copy and layout checkers from those films, as worked examples.
- `references/sound-research.md`: sources, licences and techniques behind section 8 (Sound).
- `references/CHANGES-v2.md`: what changed from v1 and why.

If a previous film's `tools/` folder is at hand (render, encode, finish, flow, gates, audit, contact, master, make_audio), port it rather than rewrite it, and adapt paths; don't trust it blindly.

Default taste (applies unless the owner says otherwise):
- Light theme. Dark full frames read as AI slop; dark only as small islands or a brief bookend.
- Each film gets its own mood from its product's brand. Never the last film's look with new copy.
- Restrained, Linear-quality real UI and typography. Bold brand colour used with intent, not as decoration.
- Value-first story. Security and governance are a supporting beat unless they are the product.
- Honest: nothing invented; sample data labelled; unbuilt features labelled or left out.
- Offer a range of directions, recommend one, and take feedback literally.

## 1. Understand the product before designing anything
1. Read the real source: README, docs, CLI `--help` for every subcommand, UI code and styles, design docs and tokens, skills/config dirs, releases, git log. If there is a live website, read its copy, CSS and mock panels. Pin what you read (commit hash or fetch date) and cite file:line.
2. If the phase is unclear, write a short phase note first: built and working, partial, planned, each with a source. Only built features are shown as working.
3. Find the ONE idea that makes users' lives easier, a daily pain it removes. Usually not the most technical feature.
4. The owner's description of what the product is for beats your reading of the code.
5. Write a features-shown table (feature, source file/command, verified how: ran in sandbox / gallery render / code-read). Never invent features, metrics, stars, customers or capabilities; show real behaviour honestly (one-at-a-time calls as a fast cascade, not a broadcast).
6. Write a brand sheet before any scene: tokens with source, fonts and licences, mark paths, shape motif, motion tokens (site easings, "no bounce" rules), verbatim headlines, real vs concept table, brand bans.

## 2. Story first
1. One tagline before any visuals, built from the product's own words; use it as the climax title and end card.
2. 6-9 scenes, one beat each. Pick a skeleton on purpose:
   - Problem, reveal, proof: pain, "Meet", core moment, breadth, proof/trust, close. Default for a clear pain.
   - Demo-first: product doing the thing as a cold open, name, 2-3 moments, why it matters, CTA. For when the UI is the wow.
   - Full walkthrough: install, core use, each main feature, extensions, open-source close. For feature/demo films.
   - Manifesto / type-led: belief, tension, answer, what we do, how. For services; anchor with one labelled Concept example.
3. Keep the pain under ~25 % of runtime. The core moment must read in 3 s without sound.
4. Concrete, relatable scenario (a dev on Monday vs Tuesday; one person with ten machines).
5. One idea per frame, at most ~3 blocks, big headlines. If a frame needs a paragraph it is two frames or none.
6. Lock the story as data: a script file (lines, plan windows, per-language tokens) and a scenes file (order, per-language durations, internal cuts). Scenes read word times from the clock, never hard-code them.
7. Every on-screen string is verbatim, a trim, a plain name, connective glue ("Now", "Meet") or labelled example data. Keep a claims table (time, string, type, source) before building. A number on screen must be real (from the site or measured by you, with method noted).

## 3. Capture real output
- Run the CLI/app in a throwaway sandbox (temp HOME, scratch project, repo copy), never against the user's real config. Capture output verbatim; keep on-screen strings in one copy file with their source.
- Only demo repo/data may be fictional. Label it on screen in every shot it appears ("Sample data", "Example", "Concept", "Demo desktop, sample windows."). Mark omissions with an ellipsis; call excerpts excerpts.
- Unbuilt or partial features: leave them out, or label on screen "Coming soon" / "in development". Never present planned as shipped.
- Rebuild UI faithfully from the product's real components and tokens. If the app can't be launched, rebuild from source and its screenshots and say so in the notes. Third-party tools get generic panes, name as plain text, no logos. No prices unless the owner approves.

## 4. Visual direction
- Mood distinct from the user's other films; palette/type from the product's own brand, app theme or hero image. Extend the palette only with colours the brand already uses or that you derive for contrast (an "ink" variant of a fill colour), and write down why.
- Default to light. Dark terminal-on-black reads as AI slop unless the brand is dark. Use light terminal/editor panes; no dark code blocks inside light UI. A dark brand can be inverted: its background becomes the ink.
- Remove slop tells: pill/badge overload, glow, decorative gradients, glassmorphism, uniform card grids, nested boxes, fake metrics, fake logos, emoji, gratuitous checkmarks, grey placeholder bars, bouncy springs everywhere, every element entering at once with the same ease, particle midpoints that read as noise, effects that carry no story idea.
- Apply Jakub Krehel's UI skills (jakub.kr/skills): nested radius = inner + padding, shadow rings over borders (tinted rings, not glows), one filled primary button per panel, spacing over dividers, tabular numbers, weight >= 400 below 18px, `text-wrap: balance` on titles.
- Every text colour meets WCAG AA (4.5:1; 3:1 only for display >= 24px) on every surface; make labels darker than feels necessary. A brand colour that fails as text is used for fills or display size only.
- Readable on a phone: key labels >= 24px; honesty labels can be smaller but never faint; no 1px grey detail.
- Disable ligatures in code text (fontVariantLigatures none, calt/liga 0). Tabular numbers on anything that changes.
- No overlaps ever, including mid-animation. If captions would sit on UI during camera moves, slide a ground-coloured caption shelf over the shot.
- Rack focus (blur the background windows while a dialog is up) is fine when it carries meaning; never use CSS blur as fake motion blur.

## 5. Style direction
1. Draft 2-3 distinct directions before building. They must differ in style, signature device and use of colour, not just palette. Recommend one; the owner may pick another.
2. Menu to choose from (not a template): bold type-led (giant words, full-bleed brand beats), clean product-UI (macro push-ins, pointer), macro/camera-led (dives into a letter or button, whips, match cuts), motif-built colour fields, collage/system map, kinetic type on the beat, hero device (a code-built laptop/phone as the stage), data-viz on real numbers only, editorial paper.
3. Motif to motion (the strongest recipe so far):
   - Find one element the brand already owns, from source files: the shape inside the mark, a site hero animation, a UI primitive, a texture.
   - List its physical verbs (a pixel falls, pours, folds, floods; a ribbon tangles, ties, coils, threads; a ring closes, irises).
   - Map each beat to one verb in a table: beat, what the motif does, product idea it carries. If a beat has no honest verb, use the plainest treatment there.
   - Build colour fields and transitions out of the motif (quantised cells, flat stripes, dither), never gradients or glow.
   - Test: for every big move you can finish "this shows that the product...". Decoration-only moves get cut.
4. What won and what lost:
   - Winners kept one idea per frame, lots of light ground, big type, real UI, one bold colour used rarely but in big moments, and motion that never stops.
   - A motif works when it is organic and multi-tone (a ribbon shaded from the logo, a pixel unit, a ring/iris) and is the story's unit.
   - A motif fails when it becomes heavy flat geometry everywhere: large brand-colour sheets in most frames, small type, dense panels and repetitive holds. That cut scored far below the earlier, simpler type-led film it tried to replace.
   - "Followed the pattern too much" means: same ground, same wireframe panels, one flat accent, cut/slide every time. Fix with a new device per beat from this brand, not a new skin.
   - "Make it as attractive as X" means learn why X is attractive (colour area, physicality, constant travel), then build that from this brand.
5. Ambition check, on the storyboard and again on the preview contact sheet, with the previous film's sheet beside it: name >= 3 devices this film has that the last didn't, each with a story reason; one frame per beat worth posting as a still; signature device traced to the brand; a one-line "what's new" note in the storyboard. It never overrides a hard gate.
6. Reference-clip study (when the owner gives a clip):
   - Keep it internal and gitignored. Never copy its footage, frames, logo, characters, copy, music, colour or section order.
   - Extract frames at 0.1 s (`ffmpeg -vf fps=10`), tile into contact sheets, run optical flow and frame diffs (speed, hold share, cut count), and analyse audio (tempo by onset autocorrelation, onset grid, drops, loudness).
   - Write a study doc: look (ground, accent use, type size, framing, depth, devices), numbered motion vocabulary with timestamps, a shot table, sound design, and "why it works".
   - End with "take (style)" and "change (structure)": different framing, different order, our brand's colours and type, our own motif doing the reference's moves.

## 6. Motion
Every value is a pure function of (fractional) time. No state, `Math.random()` or `Date`; seeded PRNG only. This makes 60 fps true in-betweens, makes sub-frame blur samples exact, and lets any frame range re-render alone.
- Easing (cubic-bezier):
  - Entrances: out (0.16,1,0.3,1) or the brand's own site ease, e.g. (0.22,1,0.36,1); calm UI out (0.22,0.61,0.12,1).
  - Objects and moves that start and land at rest: inOut (0.65,0,0.35,1) or AE easy ease (0.333,0,0.667,1).
  - Camera travel: glide (0.6,0,0.25,1). Exits: in (0.55,0,1,0.45); exits accelerate into the cut.
  - Prefer the brand's motion tokens when it has them; write the choice down when it has none.
- Multi-key moves: a cubic Hermite track with monotone-limited slopes (Fritsch-Carlson/Butland) so velocity is continuous through pass-through keys. Chained per-segment eases stop at every key and read as stop-go judder. A real stop only where direction changes.
- Zoom keys interpolate in log space so a push feels constant-rate.
- Springs: closed-form in seconds (calm k170 c26, settle k260 c24, firm k420 c40), not frame-driven simulation. At most one small overshoot, only where the brand allows (a click, a landing). Pops: damped ease with ~12 % overshoot over ~24 frames.
- Camera: one continuous camera per beat. Holds get a linear push (`1 + 0.03*l`) and/or a lateral drift (-26 to -90 px/s); it never settles inside a shot. Flat full-bleed colour reads as still to optical flow: add lateral drift or a moving texture/glint, and let a background (dot grid, guides) drift on the film's absolute clock so matched cuts stay continuous.
- Reading holds: a headline stays >= 1.5 s after its last word lands (longer for Thai), while the camera keeps moving. Something new every 0.5-1 s.
- Parallax: layers at ~0.6x / 1x / 1.3x of the camera in collages and walls; never on text you need to read. Guides/grid lines that move with the camera make a push read as depth.
- Dives and match cuts: zoom `exp(log(Z) * dive)` with a cubic ease-in into the cut; take the dive origin from the deepest ink point of the letter (distance transform) so the background never flashes. Colour or shape continues across the cut.
- Whip pan: ~1,450 px with a wide symmetric velocity bell, blur on; a spiky peak smears.
- Text:
  - Words rise inside their own clip, 0.07 s apart over ~0.42 s, starting 3-4 frames before their clock time.
  - Giant word (400-640 px): grows from the baseline with a small overshoot, wiped out into the cut.
  - Other reveals: per-letter ink-in for short names; fill word by word from pale to ink for the key line; flip landing (rotateX 90, -14, 5, 0 over 0.36 s) for state changes, sparingly.
  - Kinetic type on the beat can part to open a slot for an inline object.
  - Type-on with a colour settle (new letter in accent, settling to ink over ~0.2 s); mono text scramble for a reveal.
- Typing:
  - Latin ~30 chars/s, Thai ~24 by grapheme. Land each character over 2 character-times with a linear overlapping fade plus a small rise, so ink changes every frame; hard steps leave duplicate frames.
  - Reserve the final width so centred text doesn't re-centre per keystroke. Use a caret.
- Cursor: a person's pointer, not an agent. Glide on a track, press = scale ~0.92-0.97 plus a click SFX, land on the control's lower-right so the label stays visible; fade it before full-bleed beats.
- Scene-to-scene: plan shape continuity in the storyboard (the end shape of A is the start shape of B):
  - Block collapses into a chip that seeds the next diagram; selection box grows into a window.
  - Iris from the button that was pressed; motif wipes (pixel/mosaic/stripe) that cover exactly one frame at full cover; radial flood from the object that changed.
  - Macro-to-wide pull-back that ends still moving; whip; hard cut on the beat.
  - Never crossfade two text layouts. Morph midpoints must not be mush; land a solid mark fast.
- Physical motion when the product's unit is a thing: gravity G ~2600 px/s^2 with per-item release times (never a slab), squash on landing, accelerating conveyor with content tied to position, card flip with a sine lift only when meaning changes.
- Beat sync: pick the BPM first and keep all scene beats in one beats file in frames (120 BPM = 30 frames per beat at 60 fps). Put events on the 8th-note grid; generate SFX cues from the same file; a low-end drop when the hero device or name lands.
- Motion blur on every frame of the final: 8 samples, 180-degree shutter (half a frame, 1/120 s).
  - Either a custom accumulation stack (N renders at sub-frame times, layer i at opacity 1/(i+1), exact average, sample window clamped to the current shot so nothing ghosts across a cut) or `@remotion/motion-blur` CameraMotionBlur (samples 8, shutterAngle 180). Both shipped well-rated films; the custom stack is exact and cut-aware.
  - Strobe rule: per-sample displacement ~ speed x (1/120 s) / 7. If a fast element shows discrete copies, slow or shorten the move, or give that shot more samples.
  - Cost: the final is ~8-13x a 1-sample preview (about 18 min for a 50 s film at concurrency 8 on the box). Previews and audits use 1 sample.
  - Canvas-drawn effects must redraw synchronously per sample. Keep `<Audio>` out of the stacked film; mux the master at encode.
- 60 fps: no integer-frame logic in scenes, no step changes held for 2+ frames (they become duplicates), solid full-cover frames last one frame at most.

## 7. Build (Remotion)
- One component per scene; separate theme/palette, copy, script, scenes/timeline, beats, layout and motion-helper files. Compositions: full film, muted picture, per scene, per language and per aspect (re-compose 9:16, never crop).
- New cut = new folder and compositions; never overwrite a version the user has seen; commit each locally.
- Pin all remotion packages to exactly 4.0.530 (4.0.531 CLI shipped an empty render-queue file that breaks Studio).
- One config file holds every number tools and gates read (fps, size, safe area, blur, encode, loudness, flow thresholds, brand pixel probes). Projects may tighten thresholds, never loosen silently.
- Load fonts before the first frame (FontFace + delayRender, or @remotion/google-fonts); record licences. Thai/second script goes after the Latin face in the same stack.
- Logos: copy SVG paths verbatim; PNG only at <= its native scale.
- Tag every text block and part with `data-box`; mount invisible blocks only when they start, so the overlap audit doesn't flag them. Measure clip-aware boxes.
- Render PNG frames (never JPEG), then encode once: full to tv range with a BT.709 matrix, H.264 High crf 18 (16 for flat-colour films), preset slow, AAC 48 kHz, +faststart. Write primaries/transfer tags into the stream (`h264_metadata` bsf or setparams); `-color_*` flags alone leave them unknown. Detect frame-name width (Remotion pads to the last frame's digit count).
- GL: swangle on a headless Linux box (deterministic). On a Mac, angle is far faster; verify by diffing a few frames against swangle.
- Long renders: detached (`setsid nohup bash tools/finish.sh <lang> > log 2>&1 &`), resumable in chunks (only missing frames), accept a frame range to patch, then master, encode, audit, flow, gates, contact sheet and stills. Keep STATUS.md with the exact resume command. Share CPU with other renders (lower concurrency).

## 8. Sound
Each film needs its own sound, not a re-seeded copy of the last one. Changing key, BPM or seed does not change timbre, and timbre is what the ear remembers. Never port the previous film's `make_audio.py` instruments or SFX functions; port only the mixing, ducking and mastering tools.

### 8.1 Pick the format
- No VO (music + SFX, on-screen type carries the story; best for multi-language and muted autoplay), VO with captions, or VO where the big type is the caption.
- No-VO variant: every line must be on screen and readable at its pace; retime per language; the score's sections follow the picture.

### 8.2 Sound palette per film (decide before writing any audio code)
1. Read the brand mood and the visual direction, then write a palette card in docs/sound.md: genre, 3-5 core instruments, drum/percussion source, texture, SFX material, tempo/metre, harmonic language, and one signature sound tied to the film's motif.
2. Choose from a wide menu (not a template; combine across rows):
   - Keys: felt or upright piano, sampled grand, celesta, toy piano, Wurlitzer, prepared piano, harmonium.
   - Mallets and bells: marimba, vibraphone, glockenspiel, kalimba, steel pan, tubular bells, gongs, singing bowls.
   - Strings: pizzicato quartet, plucked nylon or steel guitar, harp, koto-like pluck, bowed swells, cello ostinato.
   - Winds and breath: flute, clarinet, muted brass stabs, breath and whistles, harmonica.
   - Electronic: analog mono bass, glassy FM, granular textures, tape-warped pads, bitcrushed chip, modular blips, 808/909-style drums made from your own synthesis or CC0 samples.
   - Drums and percussion: lo-fi or brushed kit, hand percussion (shaker, cajon, frame drum), organic foley percussion (paper, keys, cups, wood, metal), claps and snaps, body percussion, glitch.
   - Regional colour where the brand fits it: Thai ranat, khim, pong lang, khaen, pi, gong circle; Japanese, Indonesian gamelan, West African kora/balafon, Latin. Use real recordings or careful models, with respect, never as a gimmick.
   - Genre directions: minimal piano + clicks, chamber pop, lo-fi hip hop, UK garage swing, French house filter, ambient/drone, math-rock guitar, synthwave (light), indie-folk pluck, afrobeat percussion, jazz trio, chiptune, musique concrete from product sounds.
3. Vary the music axes, not just key and BPM:
   - Metre and feel: 4/4 straight, shuffle, 6/8, 3/4, half-time, 7/8 for tension, free time for pads.
   - Tempo: anywhere from 70 to 140 BPM, chosen to fit the cut rhythm.
   - Harmony: avoid defaulting to the I - vi - IV - V loop. Use modal colour (Dorian, Lydian, Mixolydian), minor keys, pedal tones, two-chord vamps, chromatic mediants, quartal voicings, or no chords (rhythm + texture).
   - Form: not always sparse, riser, groove, breakdown, bloom. Try a single build that never drops, a hard stop and silence before the name, call and response with the SFX, or a motif that grows instrument by instrument.
4. Derive one signature sound from the motif (a ribbon as a bowed string glissando, pixels as granular clicks, a ring as a struck bowl, a cut corner as a paper slice) and use it at the climax and the close.
5. Write 2-3 short sound directions alongside the visual directions and recommend one, like the visual menu.

### 8.3 Reference-audio study (when the owner gives a reference or the brand has a sound)
- Keep the reference internal and gitignored. Never sample, loop, re-time, transcribe its melody or copy its arrangement.
- Analyse: tempo (onset autocorrelation), metre and swing, onset grid, section map, drops and silences, spectral centroid over time, low-band share, loudness and LRA. List the instrumentation by ear and by spectrogram.
- Write an SFX vocabulary table: event type, what the sound is made of (material, pitch, length, layers), sync rule (on the beat, on the frame, anticipating).
- Then make or source our own: the same roles and energy curve, different instruments, different notes, different structure. Note in docs/sound.md what was taken (feel, density, sync habits) and what was changed.

### 8.4 Music: make it, sample it, or license it
- Allowed sources, in order of preference:
  1. Original composition rendered with sampled CC0/MIT instruments (VSCO2 CE, VCSL, Karoryfer free, FluidR3 GM) through an SF2/SFZ player or a small numpy sampler.
  2. Original synthesis that is new for this film (new instruments written for the palette, not copied functions).
  3. Licensed library music whose licence covers company promos on every platform the film will go to (see the sources table).
- Mix approaches: sampled instruments for the main voice and synthesis for texture, or the reverse. At least one acoustic or recorded source per film.
- Humanise: velocity variation, timing offsets of a few ms, round-robin samples, real-room reverb (convolution with a CC0 impulse response) instead of the same synthetic IR.
- Change chords or texture on scene cuts; hold back under the proof beat; resolve on the close. Keep sections tied to the scenes file so a retime re-fits the music.

### 8.5 SFX design (layered, per film)
- SFX only on on-screen events, generated from the beats/cue file. A whoosh peaks on the move (start half its length early).
- Build each event from 2-3 layers: a transient (click, tap, snap), a body (the material: paper, wood, glass, plastic, metal, cloth, water), and optionally a tail (air, room, pitch-matched tone). Pick the material from the film's world (a paper film sounds like paper; a hardware product sounds like its buttons).
- Source layers from recorded CC0 or licensed sounds (Freesound CC0, Sonniss GDC, Kenney, Mixkit), then process them per film: pitch, stretch, EQ, saturation, reverse, granular, convolution. Never drop a raw library file in unprocessed (it also avoids Content ID matches on raw samples).
- Tune tonal SFX to the score's key; vary pitch and choose round robins so repeated events (typing, list ticks) never sound like a loop: at least 4-6 variants per repeated event, random-but-seeded choice, +/-1-2 semitones and +/-2 dB.
- Keep a short per-film SFX list in docs/sound.md: event, layers, source files, processing.
- No sub boom on the name by habit; choose the reveal sound from the palette (a struck bowl, a chord stab, a breath, a silence then a hit).

### 8.6 No-reuse check (before the final mix)
- List the previous 3 films' instruments, SFX recipes, key, BPM, metre and form from their docs/sound.md (or their make_audio.py). The new film must differ in: at least 3 of the 5 core instruments, the drum/percussion source, the click/tick/whoosh recipes, and either metre or form.
- Code check: no function body in the new audio code is identical to one in a previous film's audio code (hash the function bodies).
- Feature check: compute per-stem features (spectral centroid, flatness, onset rate, z-scored MFCC statistics across a corpus of all the films' stems, or a pretrained audio embedding) and flag the closest previous stem. Raw MFCC cosine is useless here (every pair scores 0.99+).
- Listen check: play 10 s of the new bed and SFX next to the last two films. If a listener (owner or agent with audio review) can't tell which is which, redo the palette. Until someone has listened, say so.

### 8.7 Narration (if any)
- Conversational, punchy, natural and energetic, second person, ~2.3-2.7 words/s (~125-145 wpm; 160 felt rushed); each line ends inside its scene with ~0.3 s air; fit the timeline to measured takes.
- Voice: audition 3-4 expressive voices on 1-2 lines; eleven_v4/v3 with audio tags, stability ~0.4, similarity 0.75, request stitching; 2-3 takes per line. Pronunciation: STT every take; if the product name is misheard, rephrase with context or drop it. Without listening, use prosody stats (pitch SD < ~2 semitones sounds read) and say nobody has listened yet.

### 8.8 Mix and master
- Mix: bed ~0.34, ducked to ~0.085 under speech with ~10-frame ramps; speech 9-14 dB above the bed; mix peak ~-6 dBFS before mastering. Keep stems (music, SFX, VO) for the no-reuse check and for fixes.
- Master: -16 LUFS integrated, true peak <= -2 dBTP, static gain + look-ahead limiter (~-3 dBFS ceiling), loop until within 0.15 LU. If the limiter works on >10% of samples or LRA collapses toward 2 LU, fix the mix. Report "checked by meters only" until someone listens.

### 8.9 Sources, licences and credits
- Use only sources whose licence covers commercial company promos on every target platform. Verify on the source's own licence page, save the date and URL, and keep the licence file or certificate with the project.
- Free and commercial-safe: Freesound CC0 (sign-up to download), Freesound CC-BY (credit each sound), Sonniss GDC bundles, Kenney (CC0), Mixkit SFX, Pixabay, VSCO2 CE / VCSL / Karoryfer free (CC0), FluidR3 GM (MIT), Salamander piano (CC-BY 3.0, credit), self-hosted Stable Audio Open (Community License, free under USD 1M revenue; mainly SFX/textures).
- Not allowed for company promos: Freesound CC-BY-NC and Sampling+, BBC Sound Effects RemArc (non-commercial), YouTube Audio Library standard licence outside YouTube, Uppbeat free/Basic plans, ElevenLabs free plan.
- Paid (ask the owner before spending or signing up): ElevenLabs paid plans (SFX not standalone; music rights per plan table), Uppbeat Pro/Business, BBC sounds via Pro Sound Effects, any stock library.
- Keep a credits table in CREDITS.md and docs/sound.md: file, source URL, author, licence, date fetched, processing, credit text if required. Put required credits in the post text or a credits page, as the licence asks.
- Never train or fine-tune on downloaded libraries whose licence bans it (Sonniss, Mixkit/Envato).
- Remotion is free for <= 3-person companies. Keep API keys in env only; never print, write or copy them.

## 9. Quality gates
Hard gates run on the finished MP4 and must all PASS; REVIEW rows need a written reason. Record the table in docs/qa.md.
1. Video codec/size: h264, 1920x1080.
2. Frame rate: 60/1.
3. Pixel format/range/matrix: yuv420p, tv, bt709.
4. Colour tags: primaries and transfer bt709.
5. Frame count = composition length.
6. Audio: AAC 48 kHz stereo.
7. Integrated loudness: -16 +/-0.5 LUFS.
8. True peak <= -2.0 dBTP.
9. Loudness range 3-12 LU (REVIEW for short clips).
10. Brand colour survives the encode: decode a full-bleed brand pixel tv to full; each channel within +/-4 (ground within +/-6).
11. Ground colour survives (second pixel probe on the stage/paper).
12. Longest hold <= 0.6 s: DIS optical flow, p95 < 30 px/s at 1920 scale, 1.5 frames either side of cuts ignored.
13. Held-time share <= 6 % (sum of each shot's longest hold).
14. Exact duplicate frames <= 0.2 %.
15. Layout overlaps = 0 in a DOM audit every 2nd-6th frame at 1 sample, mid-animation included.
16. Safe area: 0 grazes, or grazes only during camera moves (REVIEW, list them).
Also required, not automated: contrast script passes for every text/surface pair; claims table covers every string and every sample shot is labelled; brand fonts only (no serif fallback); a 200-300 frame contact sheet and one still per scene with no blank/half-empty frames, clipped glyphs, doubled text or ghosting across cuts; watch the final at 100 % twice for stutter, strobing and stop-go; ambition check written. The flow report's judder and dip counts are informational: use them to find where to look.

## 10. Bilingual and Thai cuts
- One scene file serves every language: Thai lines carry tokens plus a cue map from English cue words to token indices.
- Retime per language (Thai ran ~6-8 % longer); never speed text up.
- Thai: letter-spacing 0; leading 1.35 (1.45 for 2-line titles); rising-word clip padding ~0.32em top / 0.3em bottom and 1.4x travel so tone marks never peek; type by grapheme (`Intl.Segmenter`); no spaces between Thai phrases except next to Latin or digits.
- Take Thai copy from the product's own Thai where it exists; mark film-only lines and say they need a native review.
- A separate claims table per language; gate and verify each language's file.

## 11. Review, iterate, deliver
1. Loop: stills at half scale after each change, then layout audit to 0 overlaps, then 1-sample preview and flow gates (hold, share, duplicates), then detached 8-sample final, then gates; patch-render only failing ranges. Fix in data (durations, windows) before code.
2. Review your own stills and sheets critically (beauty, smoothness, readability, slop, contradictions between UI states) and iterate at least once with a re-render before showing. Name the weakest 3 seconds; fix or list them.
3. Check muted: the story makes sense without sound.
4. Delivery pack:
   - out/final/<name>.mp4
   - contact.jpg (250 frames)
   - key-stills.jpg plus 6-10 full-res stills
   - one still per scene
   - verify/gates table, ffprobe and ebur128 numbers, flow plot
   - storyboard (tagline, beats, what's new vs last film)
   - features/claims table with sources
   - CREDITS (fonts, music method, Remotion and TTS licences)
   - honest notes: unverified, code-read only, sample data, not listened, Thai not reviewed, weak spots
   - STATUS.md with rebuild commands
5. Take feedback literally per axis (story, colour, density, motion, voice, a specific component); keep exactly what they liked; next cut is a new composition.

## Appendix: starter scripts and tooling details
These come from the v1 repo method and still apply when using `templates/remotion-starter/`. Where they conflict with the sections above, the sections above win.

Build and review:
- **Layout checker** (`npm run check:layout`): pure geometry, no rendering. Every block is inside the safe
  area, no two blocks in a scene are closer than `MIN_GAP`, every monospace line fits its block (JetBrains
  Mono advance = 0.6 em), titles fit (estimate ~0.56 em per char for grotesks), and no pane's content is
  taller than its view. For radial/isometric layouts, also check spokes, labels and morph in-betweens
  (see `references/connectra/check-fleet.ts`). Run it on every change; it catches what eyes miss.
- **Stills + audit:** `npm run stills` (named review frames at full size) and `npm run audit` (every
  15 frames plus mid-animation extras, half size, ~200-300 JPGs). Tile them into contact sheets
  (`ffmpeg -pattern_type glob -i 'out/audit/*.jpg' -vf scale=384:-1,tile=6x8 sheet-%02d.jpg`) and look
  at every sheet for overlaps, cropping, blank or half-empty frames, and text that appears before the
  voice says it.
- Fonts load from Google Fonts at render time (network needed). Node ≥ 22.18 runs the `.ts` check
  scripts directly; keep them free of `.tsx` imports.
- Long renders on a remote/agent shell: keep the render in the foreground with a long timeout. Agent
  shells often kill background jobs when the call returns. Check that the log is still growing.

Voice-over and mastering:
- **Voice:** audition 3-4 expressive voices on 1-2 representative lines, not the whole script. Use
  `eleven_v4` (or v3) with audio tags (`[casual]`, `[confident]`, `[warm, confident]`), stability ~0.4,
  similarity 0.75, speaker boost, and request stitching (`previous_text`/`next_text`) so lines sound
  like one read. Generate 2-3 takes per line and pick per line.
- **Pronunciation check:** run every take back through speech-to-text (ElevenLabs `scribe_v1`;
  `scripts/vo/vo.py --stt`). If STT mishears the product name ("Heli" → "Healy"), rewrite the line so
  the name comes with context ("Heli-Harness") or drop it. Respellings are unreliable.
- **Prosody numbers when you can't listen:** `scripts/vo/prosody.py` reports pitch spread, loudness
  movement and words/s per take. Flat takes (pitch SD < ~2 st) sound read. Still tell the user nobody
  has listened yet.
- **VO cleanup:** `scripts/vo/process-vo.sh` does a high-pass, gentle compression and a soft limit. It
  lowers the crest ~3 dB so the master limiter barely works. It needs a full ffmpeg (Remotion's bundled
  one lacks `alimiter`).
- **Mix:** music bed ~0.34, ducked to ~0.085 under speech (≈ -12 dB; 12-frame down, 24-frame up). Speech
  should sit 9-14 dB above the bed. Expose stem switches (`--props='{"vo":false}'`) for checking.
- **Master:** `scripts/master-audio.mjs` measures EBU R128, applies one static gain to -16 LUFS integrated,
  then a transparent look-ahead limiter (sample ceiling -2.3 dB). It re-measures and trims, stream-copies
  the picture and muxes AAC. Targets: I = -16 ±0.5 LUFS, true peak ≤ -1.5 dBTP (aim ≤ -2). If the
  limiter is active on more than ~10% of samples, fix the mix instead.
