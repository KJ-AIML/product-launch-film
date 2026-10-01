import {c, fonts} from '../theme';
import {ease, rise} from '../anim';
import type {Block} from '../layout';

/** One big confident headline (optional sub line). Balanced wrapping; fades out at `out` if given. */
export const Title: React.FC<{b: Block; frame: number; at: number; text: string; sub?: string; size?: number; align?: 'left' | 'center'; out?: number}> = ({b, frame, at, text, sub, size = 60, align = 'left', out}) => {
	const p = ease(frame, at, 22);
	const q = ease(frame, at + 10, 22);
	const o = out === undefined ? 1 : 1 - ease(frame, out, 14);
	return (
		<div style={{position: 'absolute', left: b.x, top: b.y, width: b.w, textAlign: align, fontFamily: fonts.sans, opacity: o}}>
			<div style={{...rise(p), fontSize: size, fontWeight: 600, lineHeight: 1.06, letterSpacing: '-0.025em', color: c.ink, textWrap: 'balance'}}>{text}</div>
			{sub ? <div style={{...rise(q), marginTop: 18, fontSize: Math.round(size * 0.4), fontWeight: 400, lineHeight: 1.4, color: c.text2, textWrap: 'pretty'}}>{sub}</div> : null}
		</div>
	);
};
