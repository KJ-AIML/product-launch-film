# Sound research: why the films sound the same, what to use instead

Date: 4 Nov 2026 (ICT). Box-only, read-only audit. Licence terms read on each source's own page on this date unless marked "unverified".

## 1. Audit: what is shared and repetitive

Scripts audited: talvyn-holo-style, soryva-film, samo-film, memctrl-film, paycomplai-v2-film, mesh-film (all `tools/make_audio.py`), plus talvyn-v2/v3-film, paycomplai-holo-style, plf-repo/connectra-v4/make-audio.py and plf-repo/templates/remotion-starter/scripts/make-audio.py. Heli and connectra folders hold only rendered MP4s, VO and stems; their score code is the plf-repo scripts.

### 1.1 The same script, copied
- samo-film and mesh-film `make_audio.py` are byte-identical (md5 e6de700d...). The `ref-tools/` copies inside soryva-film and samo-film are the same file.
- talvyn-v2-film and talvyn-v3-film `make_audio.py` are byte-identical (md5 181eb2e9...).
- Function-level hashing across the six main scripts: `kick`, `click`, `pluck`, `bass`, `shaker` are identical bodies in talvyn-holo, samo and mesh. `tick` is identical in memctrl and paycomplai-v2. `boom`, `whoosh`, `noise_sweep`, `felt`, `mallet`, `rhodes`, `chip`, `slice_`, `thock`, `fold_`, `snap` are identical in samo and mesh.
- Only the score.json (key, BPM, seed) changes between these films; the instruments, SFX and arrangement engine don't.

### 1.2 The same voices (every film is pure numpy synthesis, zero recorded sound)
- Keys: FM "Rhodes-style" (sine carrier + decaying mod index) or an additive "felt piano". In 7 of 9 scores.
- Arpeggio: additive or Karplus-Strong pluck, marimba-like mallet, or an 8-bit pulse "chip". In all of them.
- Bass: a sine sub. In all of them.
- Drums: the same kick recipe in every film (sine sweep from ~150-170 Hz down to 45-50 Hz, ~0.42 s, exp decay), a high-passed white-noise shaker (7-7.5 kHz HP, 0.08-0.09 s), and sometimes a noise snap, clap or brush.
- Space: the same synthetic decaying-noise impulse response reverb.
- Pads: a detuned additive pad (memctrl, paycomplai-v2, soryva, connectra).

### 1.3 The same SFX recipes
- tick/click: a 2.4-2.6 kHz sine burst + high-passed noise, 20-30 ms, exp decay (all films).
- whoosh: band-passed noise 300-5000 Hz with a Gaussian envelope (dur 0.45, peak 0.5) (all films).
- boom/sub: sine sweep 98 to 38 Hz, 1.5-1.6 s (all films).
- riser: noise sweep 300 to 9000 Hz, 1 s, into a scene start.
- chime/bloom: a few FM bell or sine partials.
- Measured: the median spectral centroid of the SFX stem is 3093 Hz (talvyn-holo), 3092 Hz (samo), 3187 Hz (mesh), 2449 Hz (memctrl). Only paycomplai-v2 differs (1095 Hz, because of its wood/brush/twang set). In other words, the same click and tick dominate.

### 1.4 The same harmony, tempo and form
- Every score is in a major key and loops some form of I - vi - IV - V with added 7ths/9ths: talvyn D (D Bm G A), mesh D (same chords as talvyn), memctrl Eb (Eb Cm Ab Bb), paycomplai-holo A (A F#m D E), paycomplai-v2 F (F Dm Bb C), samo F (F Dm Bb C7), soryva A (Amaj9 F#m9 Dmaj9 E6, plus a few colour chords), talvyn-v2 F.
- BPM range 96-120 (96, 100, 104, 108, 112, 116, 118, 120), with steady 4/4, kick on 1 and 3, shaker 8ths, and a light swing.
- Form is the same template every time: sparse intro under the pain, noise riser into the reveal, a "bloom" on the name, groove, a beatless breakdown under the proof, groove again, a bloom on the tagline, tail.
- Mix chain: bed ~0.34 + SFX, peak -6 dBFS, the same master.sh loop to -16 LUFS. Fine to keep; it isn't what makes them sound the same.

### 1.5 Why it happened
- The skill and the course both say "original seeded synthesis, change key/BPM/seed". So each film changed only those knobs. Key and tempo changes don't change timbre, and timbre is what the ear recognises.
- The tools/ folder was ported from film to film, so `make_audio.py` came along with it.
- No recorded material (foley, real instruments, room sound) was ever allowed into the pipeline, so every sound came from the same few oscillators and white noise.
- Nobody listened before delivery ("checked by meters only" in every QA doc), so the repetition was never caught.

Note on measurement: a naive MFCC mean/std cosine across the stems gives 0.99+ for every pair, so it can't tell anything apart. A no-reuse check needs features z-scored across a corpus of films (or a pretrained audio embedding), plus a recipe list and a listen.

## 2. Sources (verified on the source's own page unless marked)

Columns: commercial use in a small company's promo film (social, site, ads), attribution, sign-up, cost.

| Source | What | Commercial | Attribution | Sign-up | Cost | Licence page / notes |
|---|---|---|---|---|---|---|
| Freesound, CC0 only | SFX, foley, field recordings, loops, single instrument hits | yes | no | yes (to download) | free | https://freesound.org/help/faq/ . Filter by licence = CC0. Watch for raw-sample Content ID claims; process every sound. |
| Freesound, CC-BY 4.0 | same | yes | yes, per sound: "title" by user (URL), CC BY 4.0 | yes | free | Same page. Keep a credits list; a link to a credits page is acceptable. |
| Freesound, CC-BY-NC and Sampling+ | same | NO | - | - | - | Avoid. NC bans commercial use; Sampling+ bans advertising. |
| Sonniss GDC Game Audio Bundles (2015-2024, 2026) | ~200 GB pro SFX libraries | yes, "royalty free and commercially usable" in games, film, TV, ads, YouTube | no | no | free | https://sonniss.com/gameaudiogdc . Can't redistribute as SFX; no AI/ML training. The GDC 2026 page URL wasn't found (404 on my guess); use the archive page. |
| Pixabay (music + SFX) | music tracks, SFX | yes, incl. ads | no | download may need a free account | free | https://pixabay.com/service/license-summary/ . No standalone resale; a few tracks are in YouTube Content ID, so keep the licence certificate to dispute a claim. |
| Mixkit Sound Effects Free License | SFX | yes, incl. ads, TV, games | no | no | free | https://mixkit.co/license/ (sfxFree). No standalone redistribution; don't register in Content ID. Music has a separate licence I did not read: verify before use. |
| Kenney audio packs | UI, interface, impact, digital sounds | yes | no | no | free | https://kenney.nl/support : "all game assets on the asset pages are public domain licensed (CC0)". |
| Versilian VSCO 2 Community Edition | orchestral samples (strings, winds, brass, percussion, keys), SFZ | yes | no | no | free | GitHub repo licence CC0-1.0; versilian-studios.com/vsco-community states CC0. |
| Versilian Community Sample Library (VCSL) | broad multisampled instruments (mallets, percussion, keys, world), SFZ | yes | no | no | free | https://versilian-studios.com/vcsl/ (CC0 per search summary; spot-check the page before use). |
| Karoryfer free libraries | odd and noisy acoustic instruments, SFZ | yes | no | no | free | karoryfer-samples free page: "All our free sample libraries are under a Creative Commons Zero license" (except Marie Ork). Paid libraries are separate. |
| FluidR3_GM SoundFont | full General MIDI set (piano, guitars, strings, kit, ethnic) | yes | no (keep the licence file) | no | free | Debian fluid-soundfont copyright: MIT. A dated GM sound; use it for sketches, layering or processed parts. |
| Salamander Grand Piano (SFZ) | sampled Yamaha C5 | yes | YES, CC-BY 3.0 (credit Alexander Holm) | no | free | github.com/sfzinstruments/SalamanderGrandPiano LICENSE = CC BY 3.0. |
| Stable Audio Open 1.0 (self-hosted model) | text-to-SFX/ambience/loops, up to 47 s | yes if annual revenue < USD 1M (Community License); Enterprise above | no | Hugging Face account to download weights; commercial use may require registering with Stability (FAQ wording) | free under 1M | https://huggingface.co/stabilityai/stable-audio-open-1.0 and https://stability.ai/license . Best for SFX/textures, weak at music. Needs a GPU in practice; the box has no torch and likely no GPU. |
| ElevenLabs Sound Effects / Music, free plan | text-to-SFX, text-to-music | NO | yes ("elevenlabs.io"/"11.ai" in title; "Eleven Music") | yes | free | https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform |
| ElevenLabs, paid plans | same | yes (SFX: not standalone or as a library; Music: rights table per plan, Scale needs < 10 employees, Business < 50; film/TV limits) | per agreement | yes | PAID | https://elevenlabs.io/creative-terms (Exhibit 4), https://elevenlabs.io/music-terms (Exhibit A). Beta features: no commercial use. Ask KJ before spending. |
| Uppbeat Free / Essentials / Creator (Basic License) | music, SFX | NO for client work or paid ads; solo creators' own channels only | yes, a per-video credit code | yes | free / paid | https://uppbeat.io/uppbeat-basic-license , blog plan table. Not fit for a company promo. |
| Uppbeat Pro / Business | music, SFX, WAV | yes, incl. client work and paid ads | no | yes | PAID (Pro $14.99-24.99/mo, Business $34.99/mo yearly, per their blog) | Ask first. |
| YouTube Audio Library | music, SFX | standard licence: YouTube videos only (monetized OK); CC-BY tracks elsewhere with credit | standard: no; CC tracks: yes | YouTube Studio | free | https://support.google.com/youtube/answer/3376882 . Not cleared for X, site or ads under the standard licence. Avoid for cross-posted promos. |
| BBC Sound Effects (RemArc) | 33k archive SFX | NO (non-commercial, personal, research, education only) | yes | no | free | https://sound-effects.bbcrewind.co.uk/licensing . Commercial licences via Pro Sound Effects (PAID, ~$5 per sound per their blog). |
| Thai instruments | ranat, khim, pi, khaen | - | - | - | - | No CC0 multisampled Thai instrument library was found. Options: CC0 single hits on Freesound (search "ranat", "khim", "khaen", "gong thai"), synthesising inharmonic xylophone/gong models, or recording. A "Lao Khaen" soundfont exists on polyphone.io: licence unverified. |

Top picks (free and safe for commercial use): Freesound CC0 (plus CC-BY with a credits list), Sonniss GDC bundles, Kenney, Mixkit SFX, Pixabay, VSCO2 CE / VCSL / Karoryfer CC0 (sampled instruments), FluidR3 (MIT). Salamander piano if a credit line is OK.

Costs money (ask first): ElevenLabs paid plans (SFX/music), Uppbeat Pro/Business, BBC SFX via Pro Sound Effects, Stability Enterprise only above USD 1M revenue.

## 3. Box tooling check (nothing installed)

| Tool | Status on box | Install (if approved) | Notes |
|---|---|---|---|
| numpy, scipy, soundfile | installed | - | current pipeline |
| ffmpeg | installed, with rubberband, afir (convolution reverb with a real IR), ladspa, lv2, aecho, afftfilt filters | - | can already pitch/time-stretch samples (rubberband) and convolve with recorded CC0 impulse responses (afir) |
| librosa | present but broken (llvmlite shared lib fails to load) | `pip install --user --force-reinstall llvmlite numba` | would give tempo, onset, chroma for reference studies |
| fluidsynth (CLI) | not installed; Debian trixie has 2.4.4 | `sudo apt-get update && sudo apt-get install -y fluidsynth` (+ `fluid-soundfont-gm` ~140 MB for FluidR3) | renders MIDI + SF2 to WAV: `fluidsynth -ni -F out.wav -r 48000 font.sf2 song.mid` |
| pyfluidsynth | not installed; PyPI 1.4.0 | `pip install --user pyfluidsynth` (needs libfluidsynth from apt) | |
| pretty_midi / mido | not installed | `pip install --user pretty_midi mido` | write MIDI from the beats/cue file |
| sfizz (SFZ player) | not in Debian; GitHub releases / OBS builds | build from source or OBS repo | alternative: a ~80-line numpy SFZ reader (parse regions, pick sample by key/velocity, resample, envelope), no install needed |
| pedalboard (Spotify) | not installed; PyPI 0.9.26 wheel for cp313 downloads (5 MB) | `pip install --user pedalboard` | reverb, delay, chorus, phaser, distortion, compressor, pitch shift, plus loading VST3/LV2 plugins; GPLv3 (tooling only, doesn't affect the audio) |
| sox, timidity | not installed; in Debian | apt | optional |
| Stable Audio Open | no torch; GPU unknown/unlikely | `pip install stable-audio-tools` + HF weights (~several GB) | heavy; CPU generation would be very slow. Not recommended on the box. |
| Disk | 46 GB free on / | - | one Sonniss year is 23-48 GB; download only selected parts |

Practical path with no installs: CC0 samples (Freesound, Sonniss, Kenney, VSCO2/VCSL/Karoryfer WAVs) loaded with soundfile, a minimal numpy SFZ reader for multisampled instruments, ffmpeg rubberband/afir for pitch, stretch and real-room reverb. Lightweight installs that unlock most of the rest: fluidsynth (apt) and pedalboard (pip).
