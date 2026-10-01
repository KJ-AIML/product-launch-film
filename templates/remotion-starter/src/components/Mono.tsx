import type {CSSProperties, ReactNode} from 'react';
import {c, fonts, NO_LIGATURES} from '../theme';
import {ease} from '../anim';

/** A monospace line that fades in at `at`. Ligatures are always off. */
export const MonoLine: React.FC<{frame: number; at: number; size: number; color?: string; children: ReactNode; style?: CSSProperties}> = ({frame, at, size, color = c.ink, children, style}) => (
	<div style={{fontFamily: fonts.mono, fontSize: size, lineHeight: 1.6, color, whiteSpace: 'pre', opacity: ease(frame, at, 10), ...NO_LIGATURES, ...style}}>{children}</div>
);

/** Highlight a substring with a tint that grows in from `at`. The tint never includes leading/trailing spaces. */
export const Mark: React.FC<{frame: number; at: number; text: string; tint?: string; color?: string}> = ({frame, at, text, tint = c.accentTint, color = c.ink}) => {
	const p = ease(frame, at, 18);
	const t = text.trim();
	return (
		<span style={{backgroundImage: `linear-gradient(${tint}, ${tint})`, backgroundRepeat: 'no-repeat', backgroundSize: `${p * 100}% 100%`, color, fontWeight: p > 0.5 ? 600 : 400, borderRadius: 4}}>{t}</span>
	);
};
