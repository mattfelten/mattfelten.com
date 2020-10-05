import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { CodeBlock, Hr, Link } from '../components';
import { Blockquote, Code, H2, List, ListItem } from '../typography';

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
			return <CodeBlock {...convertedProps} />;
		} else {
			// it's possible to have a pre without a code in it
			return <pre {...props} />;
		}
	},
	ul: props => <List {...props} />,
	li: props => <ListItem {...props} />,
	blockquote: props => <Blockquote {...props} />,
	inlineCode: props => <Code {...props} />,
};

export const MDX = ({children}) => <MDXProvider components={components}>{children}</MDXProvider>;
