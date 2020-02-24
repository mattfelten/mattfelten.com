import { css } from 'styled-components'

export const ListReset = css`
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;

	&, li { box-sizing: border-box; }

	li {
		margin-bottom: 1.5em;
	}

	li:last-child { margin-bottom: 0; }
`;
