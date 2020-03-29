import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Space Grotesk';
		src: url('./space-grotesk/SpaceGrotesk-Regular.woff2') format('woff2'),
			url('./space-grotesk/SpaceGrotesk-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Space Grotesk';
		src: url('./space-grotesk/SpaceGrotesk-Bold.woff2') format('woff2'),
			url('./space-grotesk/SpaceGrotesk-Bold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}

	body {
		background: ${props => props.theme.background};
		color: ${props => props.theme.textColor};
		font-size: ${props => props.theme.fontSize2};
		font-family: ${props => props.theme.fontFamily};
		line-height: ${props => props.theme.lineHeight};
		margin: 0;
		text-align: left;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`