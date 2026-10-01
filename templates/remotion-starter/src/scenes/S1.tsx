import {useCurrentFrame} from 'remotion';
import {c, fonts, NO_LIGATURES} from '../theme';
import {L} from '../layout';
import {S1} from '../copy';
import {typed, typedEnd} from '../anim';
import {Title} from '../components/Title';
import {Window} from '../components/Window';
import {MonoLine, Mark} from '../components/Mono';

// In-scene beats (scene-local frames). Keep them as named constants; Sound.tsx cues reference them.
export const S1_BEATS = {title: 6, window: 24, type: 50} as const;

/** Example scene: one headline + one light terminal running a real command. One idea per frame. */
export const S1Scene: React.FC = () => {
	const f = useCurrentFrame();
	const B = L.s1;
	const n = typed(S1.cmd.length, f, S1_BEATS.type);
	const outAt = typedEnd(S1.cmd.length, S1_BEATS.type) + 16;
	const size = B.term.mono!;
	return (
		<>
			<Title b={B.title} frame={f} at={S1_BEATS.title} text={S1.title} />
			<Window b={B.term} title={S1.window.title} meta={S1.window.meta} style={{opacity: Math.min(1, Math.max(0, (f - S1_BEATS.window) / 16))}}>
				<div style={{fontFamily: fonts.mono, fontSize: size, lineHeight: 1.6, color: c.ink, whiteSpace: 'pre', ...NO_LIGATURES}}>
					<span style={{color: c.accent}}>$ </span>
					{S1.cmd.slice(0, n)}
				</div>
				{S1.out.map((line, i) => (
					<MonoLine key={line} frame={f} at={outAt + i * 14} size={size} color={c.text2}>
						{line === S1.highlight ? <Mark frame={f} at={outAt + 60} text={line} /> : line}
					</MonoLine>
				))}
			</Window>
		</>
	);
};
