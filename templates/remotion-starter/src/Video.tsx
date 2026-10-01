import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {c} from './theme';
import {SCENES, XF, type SceneId} from './timeline';
import {S1Scene} from './scenes/S1';

export const SCENE_COMPONENTS: Record<SceneId, React.FC> = {
	s1: S1Scene,
};

/** Flat page background. No gradients, no glow. */
export const Backdrop: React.FC = () => <AbsoluteFill style={{background: c.bg}} />;

const Fade: React.FC<{dur: number; first: boolean; last: boolean; children: React.ReactNode}> = ({dur, first, last, children}) => {
	const f = useCurrentFrame();
	const cl = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
	const inO = first ? 1 : interpolate(f, [0, XF], [0, 1], cl);
	const outO = last ? 1 : interpolate(f, [dur - XF, dur], [1, 0], cl);
	return <AbsoluteFill style={{opacity: Math.min(inO, outO)}}>{children}</AbsoluteFill>;
};

/** Picture only (muted). Scenes crossfade over XF frames. */
export const FilmPicture: React.FC = () => (
	<AbsoluteFill>
		<Backdrop />
		{SCENES.map((s, i) => {
			const C = SCENE_COMPONENTS[s.id];
			return (
				<Sequence key={s.id} from={s.from} durationInFrames={s.dur} name={s.id}>
					<Fade dur={s.dur} first={i === 0} last={i === SCENES.length - 1}>
						<C />
					</Fade>
				</Sequence>
			);
		})}
	</AbsoluteFill>
);

export const SceneOnly: React.FC<{id: SceneId}> = ({id}) => {
	const C = SCENE_COMPONENTS[id];
	return (
		<AbsoluteFill>
			<Backdrop />
			<C />
		</AbsoluteFill>
	);
};
