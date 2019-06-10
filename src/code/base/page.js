import PropTypes from 'prop-types';
import React from 'react';

/**
 * The page layout component
 */
const Page = ({ title, stylesheet, header, main, footer, script, _relativeURL, _ID }) => (
	<html>
	<head>
		<title>{ title && `${title} &times; `}Matt Felten</title>
		<meta charSet="utf-8" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
		<link rel="stylesheet" href={ _relativeURL( `/assets/css/main.css`, _ID ) } />
		{
			stylesheet != undefined
				? ( <link rel="stylesheet" href={ _relativeURL( `/assets/css/${ stylesheet }.css`, _ID ) } /> )
				: null
		}
	</head>
	<body>
		<main>
			{ main }
		</main>

		<footer>
			{ footer }
		</footer>

		{
			script != undefined
				? ( <script src={ _relativeURL( `/assets/js/${ script }.js`, _ID ) } /> )
				: null
		}
	</body>
	</html>
);

Page.propTypes = {
/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
