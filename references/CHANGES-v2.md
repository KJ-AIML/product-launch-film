# product-launch-film v2: changes and sources

All sources are on the box under /workspace. Read-only; nothing in /home/box/agent-data/workflows was edited.

## Structure
- Kept original sections 1-7 in order and wording, renumbered to fit new sections: 1 Understand, 2 Story, 3 Capture, 4 Visual direction, 5 Style direction (NEW), 6 Motion (NEW), 7 Build (was 5), 8 Sound (was 6), 9 Quality gates (NEW), 10 Bilingual/Thai (NEW), 11 Review, iterate, deliver (was 7).
- Added a "Default taste" preamble (owner's standing preferences, generic wording). Source: samo-film/BRIEF.md and soryva-film/BRIEF.md tech-spec lines; memory facts on the 10/10 film.
- Goal length widened 40-60 s -> 40-70 s: samo-film is 68.0 s (samo-film/docs/qa.md).
- New pointer: port a previous film's tools/ folder. Source: samo-film/BRIEF.md "Method 2" (ref-tools/).

## 1. Understand
- Pin commit/fetch date, cite file:line: launch-film-course/COURSE.md 2.1; talvyn-holo-style/BRAND.md header.
- Phase note (built/partial/planned): soryva-film/BRIEF.md Step 0; soryva-film-out/docs/phase.md.
- "Verified how" column (ran / gallery render / code-read): soryva-film-out/docs/storyboard.md "Verified?" column; samo-film/docs/notes.md.
- Brand sheet before scenes: COURSE.md 3.6; talvyn-holo-style/BRAND.md.

## 2. Story
- 6-9 scenes and four skeletons (incl. full walkthrough): COURSE.md 2.3; samo-film/BRIEF.md goal + docs/storyboard.md.
- Pain <= 25 % runtime, core moment in 3 s muted: COURSE.md 2.3, 4.1, 8.3.
- At most ~3 blocks per frame: soryva-film-out/docs/storyboard.md timing rules; plf-repo/references/checklist.md.
- Story as data (script.json/scenes.json, clock): COURSE.md 2.6, 5.7; talvyn-holo-style/README.md.
- On-screen copy types + claims table, real numbers only: COURSE.md 2.4; talvyn-holo-style/docs/claims.md.

## 3. Capture
- Label sample data in every shot, example label strings: COURSE.md 2.5; soryva-film-out/docs/qa.md ("Demo desktop, sample windows."); samo-film/docs/notes.md.
- "Coming soon / in development" rule: soryva-film/BRIEF.md + BRIEF-ADDENDUM.md item 4; soryva-film-out/docs/notes.md (end card "macOS companion · in development").
- Rebuild from source when app can't launch, say so: samo-film/docs/notes.md ("Not run, rebuilt from code").
- No prices unless approved: talvyn-holo-style/BRAND.md "Real vs concept"; COURSE.md 2.5.

## 4. Visual direction
- Palette extension only from brand or derived ink, with reasons; invert dark brand: COURSE.md 3.1, 11.3 (memctrl).
- Extra slop tells (glass, fake logos, placeholder bars, same-ease entrances, noisy particle midpoints, meaningless effects): COURSE.md 4.7.
- Tinted shadow rings; text-wrap balance: COURSE.md 11.4; plf-repo/SKILL.md section 4.
- Brand colour failing AA -> fills/display only: COURSE.md 3.5 (tealDark), 11.3 (peri).
- Phone legibility (>= 24 px key labels): COURSE.md 5.5; soryva-film-out/docs/qa.md "Known minor points".
- Caption shelf: samo-film/docs/notes.md, samo-film/src/scenes/Session.tsx:95, docs/qa.md iteration 1.
- Rack focus allowed with meaning, no CSS blur as motion blur: soryva-film-out/docs/qa.md round 1 item 2; COURSE.md 5.5.

## 5. Style direction (new)
- 2-3 distinct directions, recommend one: COURSE.md 4.9 A5, 9.1; talvyn-v2-film/docs/directions.md; paycomplai-v2-film/docs/directions.md.
- Direction menu: COURSE.md 4.2; hero device from soryva-film-out/docs/storyboard.md (CSS 3D MacBook, soryva-film/src/components/MacBook.tsx).
- Motif-to-motion recipe: COURSE.md 4.10, 11.2; paycomplai-v2-film/docs/directions.md (ribbon verbs table); samo-film/docs/storyboard.md (ring/iris motif).
- Winners vs losers:
  - Holo-style 10/10 and v2 "much worse": memory fact 2026-10-27; visual comparison of talvyn-holo-style/out/final/contact-en.jpg vs talvyn-v2-film/out/final/contact-en.jpg (my reading, see "Unsure").
  - PayComplAI v2 ribbon rated very good: memory 2026-10-27; paycomplai-v2-film/docs/directions.md.
  - "Followed the pattern too much" / "make it as attractive as X": COURSE.md 11.1.
- Ambition check A1-A6 condensed: COURSE.md 4.9.
- Reference-clip study method and take/change split: soryva-film/BRIEF-ADDENDUM.md; soryva-film/docs/reference-study.md; soryva-film/tools/ref_analyse.py, ref_plot.py; mesh-film/docs/reference-study.md; talvyn-holo-style/docs/technique-map.md.

## 6. Motion (new)
- Pure function of time, seeded PRNG: COURSE.md 5.1; talvyn-holo-style/src/lib/anim.ts; samo-film/src/anim.ts header.
- Easing values: talvyn-holo-style/src/lib/anim.ts (site, object, out, in, soft); samo-film/src/anim.ts (OUT 0.22,0.61,0.12,1; EASY 0.333,0,0.667,1; GLIDE 0.6,0,0.25,1); soryva-film/src/anim.ts.
- Hermite track with continuous velocity: talvyn-holo-style/src/lib/anim.ts track(); samo-film/src/anim.ts track(); COURSE.md 5.2.
- Log-space zoom: samo-film/src/anim.ts trackScale.
- Closed-form springs and values: talvyn-holo-style/src/lib/anim.ts springAt/SPR; COURSE.md 5.3. Pop overshoot: soryva-film/src/anim.ts pop().
- Camera never settles, push/drift values, flat colour drift, glint on solid fields, absolute-clock background drift: COURSE.md 5.2 flow rules; mesh-film/src/Film.tsx:15 (Glint); soryva-film-out/docs/qa.md round 2; samo-film/docs/qa.md iteration 4.
- Reading hold >= 1.5 s with moving camera, new thing every 0.5-1 s: soryva-film-out/docs/storyboard.md timing rules; plf-repo/references/checklist.md; COURSE.md 5.2 rule 3.
- Parallax ratios: COURSE.md 4.4. Moving guides as depth: mesh-film/docs/reference-study.md "Look".
- Dive + inkpoint origin, match cut: COURSE.md 4.4; talvyn-holo-style/tools/inkpoint.py; docs/technique-map.md S04.
- Whip pan numbers: COURSE.md 4.4.
- Text reveals (stagger 0.07/0.42, giant word, ink-in, word fill, flip landing, slot parting): COURSE.md 4.3, 4.4, 10; talvyn-holo-style/docs/storyboard.md; soryva-film/docs/reference-study.md. Type-on colour settle, scramble: mesh-film/docs/reference-study.md items 1, 13.
- Typing rates and overlapping fade, reserved width: COURSE.md 5.5, 7.2.
- Cursor: COURSE.md 4.3; soryva-film-out/docs/qa.md round 3 (lower-right landing); samo-film/docs/qa.md iteration 5 (fade before iris); mesh-film/docs/reference-study.md item 15.
- Scene transitions (shape continuity, chip seeding, box-to-window, iris, one-frame full cover, floods, no text crossfade): COURSE.md 4.5; samo-film/docs/storyboard.md "Transitions"; mesh-film/docs/reference-study.md items 3, 5, 7; soryva-film-out/docs/qa.md round 2.
- Physical motion values: COURSE.md 4.4, 11.5 (memctrl).
- Beat sync, beats file, cues from same file, drop on hero: soryva-film/src/beats.ts; soryva-film/tools/cues.ts; soryva-film-out/docs/storyboard.md; soryva-film/docs/reference-study.md.
- Motion blur both approaches, clamp to shot, strobe rule: talvyn-holo-style/src/Main.tsx; samo-film/src/Film.tsx:61 (CameraMotionBlur); COURSE.md 5.4.
- Blur render cost: talvyn-holo-style/logs-final-en.txt (1072.8 s, 8 samples, 3036 frames) vs logs-fq-en.txt (82.5 s, 1 sample, same frames) = ~13x; COURSE.md 5.4 says ~8x.
- 60 fps duplicates: COURSE.md 5.5 typing fix; samo-film/docs/qa.md iteration 3.

## 7. Build
- Per-language/aspect compositions, 9:16 re-compose: COURSE.md 6.2.
- Single config of thresholds, never loosen: samo-film/film.config.json; samo-film/tools/gates.py docstring.
- FontFace + delayRender, Thai after Latin: COURSE.md 3.2. (Old rule "fonts from Google Fonts at render" softened: later films ship local font files.)
- data-box audit, conditional mount, clip-aware boxes: talvyn-holo-style/src/Main.tsx; mesh-film/STATUS.md step 6b; soryva-film/STATUS.md; soryva-film-out/docs/qa.md layout.
- Encode chain, bt709 primaries/transfer tagging, frame-name width: soryva-film/tools/encode.sh; samo-film/tools/encode.sh (h264_metadata bsf); soryva-film-out/docs/qa.md round 3; COURSE.md 6.3. crf 16 option: COURSE.md 6.3.
- swangle vs angle: COURSE.md 6.1, 5.5; soryva-film-out/docs/qa.md "Render notes".
- Detached resumable finish.sh, STATUS.md resume, CPU sharing: talvyn-holo-style/tools/finish.sh; COURSE.md 6.4; soryva-film/BRIEF.md "CPU sharing". This replaces plf-repo/SKILL.md's "keep long renders in the foreground", which later films did not follow.

## 8. Sound
- VO/no-VO choice and no-VO section plan: COURSE.md 4.6, 7.1; talvyn-holo-style/README.md; samo-film/docs/storyboard.md "Sound".
- Own key/BPM per film: COURSE.md 7.1 (D maj 118, A maj 96, Eb maj 108), samo 96 BPM, soryva 120 BPM.
- SFX from cue file, whoosh timing: COURSE.md 7.2; soryva-film/tools/cues.ts.
- wpm figures: COURSE.md 2.6.
- Mix ramps, -6 dBFS pre-master, limiter ceiling, 0.15 LU loop, LRA warning: COURSE.md 7.3, 7.4.
- Existing VO rules kept as-is.

## 9. Quality gates (new)
- 16 gates generalised from soryva-film-out/docs/qa.md (16/16) and samo-film/docs/qa.md (15/15; same list minus the colour-tag gate), implemented in samo-film/tools/gates.py and soryva-film/tools/gates.py. Thresholds from samo-film/film.config.json.
- Non-automated checks: COURSE.md 8.1 G6-G11, 8.3.

## 10. Bilingual / Thai (new)
- COURSE.md 2.6, 5.6; talvyn-holo-style/README.md (EN 50.6 s, TH 53.6 s), talvyn-v2-film/STATUS.md (EN 53.0, TH 57.3), docs/claims-th.md.

## 11. Review, iterate, deliver
- Iteration loop: COURSE.md 8.4.
- Contradiction-between-UI-states check: soryva-film-out/docs/qa.md round 1 item 1.
- Delivery pack: samo-film/BRIEF.md "Final deliverables"; soryva-film-out/ contents; COURSE.md 8.5.

## Removed or softened
- "Fonts load from Google Fonts at render" -> generalised to load-before-first-frame (local files or google-fonts).
- plf-repo checklist "crossfades" as a default motion -> crossfade rarely, never between two text layouts (COURSE.md 4.5).
- "Exactly one accent" (plf-repo checklist) -> one bold colour used rarely, palette may extend with brand/derived colours (memctrl, PayComplAI v2).
