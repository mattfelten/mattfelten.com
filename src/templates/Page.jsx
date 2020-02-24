import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../blocks';

const Banner = styled.a`
	background: #000;
	color: #fff;
	display: block;
	font-size: 16px;
	padding: 1em;
	text-align: center;
	text-decoration: none;
`;

export const Page = ({ element, props }) => {
	const headerProps = {
		location: props.location,
		rootPath: `${__PATH_PREFIX__}/`
	};

	return (
		<div>
			<Banner href="//2019.mattfelten.com">I'm building a new site. It's live to encourage me to finish. See the old one at http://2019.mattfelten.com</Banner>
			<Header {...headerProps} />
			{element}
			<Footer />
		</div>
	);
};

export default Page;
