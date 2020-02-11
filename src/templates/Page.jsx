import React from 'react';
import { Header, Footer } from '../blocks';

export const Page = ({ element, props }) => {
	const headerProps = {
		location: props.location,
		rootPath: `${__PATH_PREFIX__}/`
	};

	return (
		<div>
			<a href="//2019.mattfelten.com" style={{
				background: '#000',
				color: '#fff',
				display: 'block',
				fontSize: '16px',
				padding: '1em',
				textAlign: 'center',
				textDecoration: 'none'
			}}>I'm building a new site. It's live to encourage me to finish. See the old one at http://2019.mattfelten.com</a>
			<Header {...headerProps} />
			{element}
			<Footer />
		</div>
	);
};

export default Page;
