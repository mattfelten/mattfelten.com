import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import { Code, Hr, Link } from '../components';
import { H2, List, ListItem } from '../typography';
import { preToCodeBlock } from 'mdx-utils';
import { theme } from '../global';

// components is its own object outside of render so that the references to
// components are stable
const components = {
	h2: props => <H2 {...props} />,
	a: props => <Link {...props} />,
	hr: props => <Hr {...props} />,
	pre: props => {
		const convertedProps = preToCodeBlock(props);
		// if there's a codeString and some props, we passed the test
		if (convertedProps) {
			return <Code {...convertedProps} />;
		} else {
			// it's possible to have a pre without a code in it
			return <pre {...props} />;
		}
	},
	ul: props => <List {...props} />,
	li: props => <ListItem {...props} />,
};

export const Root = ({ element }) => (
	<ThemeProvider theme={theme}>
		<MDXProvider components={components}>{element}</MDXProvider>
	</ThemeProvider>
);
