import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import { Code, Link } from '../components';
import { preToCodeBlock } from 'mdx-utils';
import { theme, GlobalStyles } from '../global';

// components is its own object outside of render so that the references to
// components are stable
const components = {
	a: props => <Link {...props} to={props.href}/>,
	pre: preProps => {
		const props = preToCodeBlock(preProps)
		// if there's a codeString and some props, we passed the test
		if (props) {
			return <Code {...props} />
		} else {
			// it's possible to have a pre without a code in it
			return <pre {...preProps} />
		}
	},
}

export const Root = ({ element }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<MDXProvider components={components}>
			{element}
		</MDXProvider>
	</ThemeProvider>
);
