import { createGlobalStyle } from 'styled-components';
import RegularWoff from './space-grotesk/SpaceGrotesk-Regular.woff';
import RegularWoff2 from './space-grotesk/SpaceGrotesk-Regular.woff2';
import BoldWoff from './space-grotesk/SpaceGrotesk-Bold.woff';
import BoldWoff2 from './space-grotesk/SpaceGrotesk-Bold.woff2';

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Space Grotesk';
		src: url(${RegularWoff2}) format('woff2'),
			url(${RegularWoff}) format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Space Grotesk';
		src: url(${BoldWoff2}) format('woff2'),
			url(${BoldWoff}) format('woff');
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
