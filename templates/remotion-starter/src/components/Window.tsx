import type {CSSProperties, ReactNode} from 'react';
import {c, fonts, radius} from '../theme';
import {WIN_HEADER, type Block} from '../layout';

/** Light terminal / editor / agent pane: white surface, shadow ring instead of a border, quiet header strip.
 *  Never put a dark code block inside a light UI. */
export const Window: React.FC<{b: Block; title: string; meta?: string; style?: CSSProperties; children: ReactNode}> = ({b, title, meta, style, children}) => (
	<div
		style={{
			position: 'absolute',
			left: b.x,
			top: b.y,
			width: b.w,
			height: b.h,
			background: c.panel,
			borderRadius: radius.win,
			boxShadow: `0 0 0 1px ${c.ring}, ${c.shadow}`,
			overflow: 'hidden',
			...style,
		}}
	>
		<div
			style={{
				height: WIN_HEADER,
				display: 'flex',
				alignItems: 'center',
				padding: '0 22px',
				background: c.head,
				boxShadow: `inset 0 -1px 0 ${c.hairline}`,
				fontFamily: fonts.sans,
				fontSize: 19,
				fontWeight: 600,
				color: c.ink,
			}}
		>
			<span>{title}</span>
			{meta ? <span style={{marginLeft: 'auto', fontSize: 17, fontWeight: 400, color: c.text3}}>{meta}</span> : null}
		</div>
		<div style={{position: 'absolute', left: b.pad ?? 0, right: b.pad ?? 0, top: WIN_HEADER + (b.pad ?? 0), bottom: b.pad ?? 0, overflow: 'hidden'}}>{children}</div>
	</div>
);
