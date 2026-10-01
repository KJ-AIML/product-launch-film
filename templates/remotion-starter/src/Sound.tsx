import {Audio, Sequence, interpolate, staticFile} from 'remotion';
import {FilmPicture} from './Video';
import {FPS, sceneFrom, type SceneId} from './timeline';
import manifest from './vo-manifest.json';
import audio from './audio.json';

/**
 * Film = picture + narration (vo-manifest.json) + music bed + SFX (audio.json, from scripts/make-audio.py).
 * With empty manifests it renders silent, so the starter works before any audio exists.
 * Stem checks: --props='{"vo":false}' or '{"bed":false}'.
 */
const MUSIC_BED = 0.34;
const MUSIC_DUCKED = 0.085; // ≈ -12 dB under speech
type Line = {id: string; start: number; file: string; seconds: number; speechEnd: number; gain?: number};
const LINES = (manifest as {lines: Line[]}).lines;
const MUSIC = (audio as {music: string | null}).music;
const SFX = new Set((audio as {sfx: string[]}).sfx);

const musicVolume = (f: number) => {
	let v = MUSIC_BED;
	for (const l of LINES) {
		const a = l.start - 10;
		const b = l.start + Math.round(l.speechEnd * FPS) + 8;
		v = Math.min(v, interpolate(f, [a - 12, a, b, b + 24], [MUSIC_BED, MUSIC_DUCKED, MUSIC_DUCKED, MUSIC_BED], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
	}
	return v;
};

type Cue = {at: number; sfx: string; vol: number};
const at = (s: SceneId, local: number) => sceneFrom(s) + local;
/** Every cue is tied to an on-screen event (scene-local beat frames from the scene files). */
export const CUES: Cue[] = [
	{at: at('s1', 50), sfx: 'tick', vol: 0.12},
	{at: at('s1', 140), sfx: 'allow', vol: 0.16},
];

export const Film: React.FC<{vo?: boolean; bed?: boolean}> = ({vo = true, bed = true}) => (
	<>
		<FilmPicture />
		{bed && MUSIC ? <Audio src={staticFile(MUSIC)} volume={musicVolume} /> : null}
		{vo &&
			LINES.map((l) => (
				<Sequence key={l.id} from={l.start} durationInFrames={Math.ceil(l.seconds * FPS) + 30} name={`VO ${l.id}`}>
					<Audio src={staticFile(l.file)} volume={l.gain ?? 1} />
				</Sequence>
			))}
		{bed &&
			CUES.filter((q) => SFX.has(q.sfx)).map((q, i) => (
				<Sequence key={`${q.sfx}-${i}`} from={q.at} durationInFrames={FPS * 4} name={`SFX ${q.sfx}`}>
					<Audio src={staticFile(`audio/sfx/${q.sfx}.wav`)} volume={q.vol} />
				</Sequence>
			))}
	</>
);
