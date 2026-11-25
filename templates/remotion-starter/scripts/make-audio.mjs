// Zero-dependency Node.js stereo WAV synthesizer starter (48 kHz, 16-bit PCM).
// Use whenever Python/numpy is unavailable or for fast (<0.5 s) deterministic audio iteration.
// IMPORTANT (SKILL.md Section 8.6 — No-Reuse rule):
//   Treat this file as an infrastructure starter (WAV writer, seeded PRNG, per-bus soft peak tamer).
//   Always design a fresh instrument palette, harmony, metre, and SFX material for each new film!
import {mkdirSync, writeFileSync} from 'node:fs';

const SR = 48000;
const DUR = 20.0; // match your composition duration in seconds
const N = Math.round(SR * DUR);

// Separate music and SFX buses so percussive transients can be tamed independently
// before summing (keeps scripts/master-audio.mjs limiter activity well under 10%).
const musicL = new Float64Array(N);
const musicR = new Float64Array(N);
const sfxL = new Float64Array(N);
const sfxR = new Float64Array(N);

// Deterministic seeded PRNG (Mulberry32) — never use Math.random()
let seed = 0x5a7f_19c3;
const rand = () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const randSigned = () => rand() * 2 - 1;
const midiToHz = (m) => 440 * Math.pow(2, (m - 69) / 12);

const addTo = (bL, bR, idx, vl, vr) => {
  if (idx >= 0 && idx < N) {
    bL[idx] += vl;
    bR[idx] += vr;
  }
};

// Soft envelope-following bus compressor (reduces spiky percussive crests cleanly without harsh clipping)
function compressBus(bL, bR, threshold = 0.22, ratio = 4.5, attackMs = 2, releaseMs = 70) {
  const atk = Math.exp(-1 / ((attackMs / 1000) * SR));
  const rel = Math.exp(-1 / ((releaseMs / 1000) * SR));
  let env = 0;
  for (let i = 0; i < N; i++) {
    const level = Math.max(Math.abs(bL[i]), Math.abs(bR[i]));
    env = level > env ? atk * env + (1 - atk) * level : rel * env + (1 - rel) * level;
    if (env > threshold) {
      const target = threshold + (env - threshold) / ratio;
      const g = target / env;
      bL[i] *= g;
      bR[i] *= g;
    }
  }
}

// --- Example minimal starter voices (replace per film's docs/sound.md palette!) ---
function addStarterPad(startSec, durSec, midis, amp) {
  const s0 = Math.round(startSec * SR);
  const len = Math.round(durSec * SR);
  const freqs = midis.map(midiToHz);
  for (let i = 0; i < len; i++) {
    const t = i / SR;
    const env = Math.min(1, t / 0.55) * Math.min(1, (durSec - t) / 0.65);
    let sumL = 0;
    let sumR = 0;
    for (let k = 0; k < freqs.length; k++) {
      const f = freqs[k];
      sumL += Math.sin(2 * Math.PI * f * (1 - 0.0008 * k) * t);
      sumR += Math.sin(2 * Math.PI * f * (1 + 0.0008 * k) * t);
    }
    const g = (env * amp) / freqs.length;
    addTo(musicL, musicR, s0 + i, sumL * g, sumR * g);
  }
}

function addStarterPluck(startSec, midi, amp, pan = 0) {
  const f = midiToHz(midi);
  const s0 = Math.round(startSec * SR);
  const len = Math.round(0.65 * SR);
  const gL = Math.cos(((pan + 1) * Math.PI) / 4) * amp;
  const gR = Math.sin(((pan + 1) * Math.PI) / 4) * amp;
  for (let i = 0; i < len; i++) {
    const t = i / SR;
    const atk = Math.min(1, t / 0.006);
    const body = Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 4.4);
    const overtone = Math.sin(2 * Math.PI * f * 3.98 * t) * Math.exp(-t * 22) * 0.16;
    const s = (body + overtone) * atk;
    addTo(musicL, musicR, s0 + i, s * gL, s * gR);
  }
}

function addStarterClick(startSec, amp) {
  const s0 = Math.round(startSec * SR);
  const len = Math.round(0.028 * SR);
  const pitch = 0.95 + rand() * 0.1;
  for (let i = 0; i < len; i++) {
    const t = i / SR;
    const s =
      (Math.sin(2 * Math.PI * 2400 * pitch * t) * Math.exp(-t * 420) +
        Math.sin(2 * Math.PI * 580 * pitch * t) * Math.exp(-t * 170) * 0.6 +
        randSigned() * Math.exp(-t * 680) * 0.14) *
      amp;
    addTo(sfxL, sfxR, s0 + i, s, s);
  }
}

// Example 120 BPM F-Lydian sketch with a natural intro -> build -> resolve dynamic arc
// (replace with your film's timeline-driven score & cues)
const chords = [
  [53, 57, 60, 64, 67],
  [55, 59, 62, 64, 69],
  [50, 57, 60, 64, 69],
  [48, 55, 59, 62, 64],
];
const sectionGain = (t) => (t < 4.0 ? 0.52 : t < 15.0 ? 1.0 : 0.62);

for (let bar = 0; bar < Math.floor(DUR / 2); bar++) {
  const t0 = bar * 2.0;
  const ch = chords[bar % chords.length];
  addStarterPad(t0, 2.25, [ch[0] - 12, ch[1], ch[2], ch[4]], 0.18 * sectionGain(t0));
}
for (let beat = 0; beat < Math.floor(DUR * 2) - 2; beat++) {
  const t = beat * 0.5;
  const dyn = sectionGain(t);
  const ch = chords[Math.floor(beat / 4) % chords.length];
  const note = ch[beat % ch.length];
  addStarterPluck(t, note, (beat % 4 === 0 ? 0.14 : 0.095) * dyn, ((beat % 5) - 2) * 0.2);
  if (beat % 4 === 0) addStarterPluck(t, ch[0] - 12, 0.16 * dyn, 0);
}
for (const cueSec of [2.5, 6.0, 10.0, 14.5]) {
  addStarterClick(cueSec, 0.18);
}

// Tame percussive crests cleanly before summing so master-audio.mjs limiter works < 10%
compressBus(musicL, musicR, 0.15, 5.5, 1.5, 65);
compressBus(sfxL, sfxR, 0.18, 4.5, 1, 45);

const outL = new Float64Array(N);
const outR = new Float64Array(N);
let peak = 0;
const fadeSamples = Math.round(0.10 * SR);
for (let i = 0; i < N; i++) {
  let g = 1;
  if (i < fadeSamples) g = i / fadeSamples;
  else if (i > N - fadeSamples) g = (N - i) / fadeSamples;
  outL[i] = Math.tanh((musicL[i] + sfxL[i]) * g * 1.15);
  outR[i] = Math.tanh((musicR[i] + sfxR[i]) * g * 1.15);
  peak = Math.max(peak, Math.abs(outL[i]), Math.abs(outR[i]));
}
const norm = peak > 1e-4 ? 0.50 / peak : 1; // ~-6 dBFS headroom before mastering

// Write 16-bit PCM Stereo WAV
const dataBytes = N * 4;
const buf = Buffer.alloc(44 + dataBytes);
buf.write('RIFF', 0);
buf.writeUInt32LE(36 + dataBytes, 4);
buf.write('WAVE', 8);
buf.write('fmt ', 12);
buf.writeUInt32LE(16, 16);
buf.writeUInt16LE(1, 20);
buf.writeUInt16LE(2, 22);
buf.writeUInt32LE(SR, 24);
buf.writeUInt32LE(SR * 4, 28);
buf.writeUInt16LE(4, 32);
buf.writeUInt16LE(16, 34);
buf.write('data', 36);
buf.writeUInt32LE(dataBytes, 40);

for (let i = 0; i < N; i++) {
  const sL = Math.max(-32768, Math.min(32767, Math.round(outL[i] * norm * 32767)));
  const sR = Math.max(-32768, Math.min(32767, Math.round(outR[i] * norm * 32767)));
  buf.writeInt16LE(sL, 44 + i * 4);
  buf.writeInt16LE(sR, 44 + i * 4 + 2);
}

mkdirSync('public/audio', {recursive: true});
writeFileSync('public/audio/mix.wav', buf);
console.log(`Generated public/audio/mix.wav (${DUR}s @ ${SR}Hz stereo, ${(buf.length / 1048576).toFixed(2)} MB)`);
