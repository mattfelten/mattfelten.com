import React from 'react';
import { Header, Footer } from '../blocks';
import { Block } from '../components';
import { GlobalStyles } from '../global';

export const Page = ({ element, props }) => {
	const headerProps = {
		location: props.location,
		rootPath: `${__PATH_PREFIX__}/`
	};

	return (
		<>
			<GlobalStyles />
			<Header {...headerProps} />
			<Block>
				{element}
			</Block>
			<Footer />
		</>
	);
};

export default Page;
