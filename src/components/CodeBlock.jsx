import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const CodeBlock = ({ codeString, language, live, ...props }) => {
	if (live) {
		return (
			<LiveProvider code={codeString} noInline={false} {...props}>
				<LiveEditor />
				<LiveError />
				<LivePreview />
			</LiveProvider>
		);
	}
	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			{...props}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};
