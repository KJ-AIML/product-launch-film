import {Composition} from 'remotion';
import {Film} from './Sound';
import {FilmPicture, SceneOnly} from './Video';
import {SCENES, TOTAL} from './timeline';
import {VIDEO} from './theme';

// Keep every version the user has seen: a new cut gets its own folder (src/v2/) and its own ids here.
export const RemotionRoot: React.FC = () => (
	<>
		<Composition id="Film" component={Film} durationInFrames={TOTAL} {...VIDEO} defaultProps={{vo: true, bed: true}} />
		<Composition id="FilmPicture" component={FilmPicture} durationInFrames={TOTAL} {...VIDEO} />
		{SCENES.map((s) => (
			<Composition key={s.id} id={`Scene-${s.id}`} component={SceneOnly} durationInFrames={s.dur} {...VIDEO} defaultProps={{id: s.id}} />
		))}
	</>
);
