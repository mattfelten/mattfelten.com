import { createGlobalStyle } from 'styled-components';
import RegularWoff from './manrope/Manrope-Regular.woff';
import RegularWoff2 from './manrope/Manrope-Regular.woff2';
import BoldWoff from './manrope/Manrope-Bold.woff';
import BoldWoff2 from './manrope/Manrope-Bold.woff2';

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Manrope';
		src: url(${RegularWoff2}) format('woff2'),
			url(${RegularWoff}) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Manrope';
		src: url(${BoldWoff2}) format('woff2'),
			url(${BoldWoff}) format('woff');
		font-weight: bold;
		font-style: normal;
	}

	body {
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.textColor};
		font-size: ${props => props.theme.fontSize2};
		font-family: ${props => props.theme.fontFamily};
		line-height: ${props => props.theme.lineHeight};
		margin: 0;
		text-align: left;
		word-spacing: .05em;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		&::before,
		&::after {
			content: ' ';
			display: table;
		}
	}

	html {
		position: relative;

		&::after {
			content: "";
			background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png);
			opacity: .6;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			position: absolute;
			z-index: -1;
		}
	}
`
