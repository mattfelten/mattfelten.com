import React from 'react';
import { Header, Footer } from '../blocks';
import { Block } from '../components';
import { GlobalStyles } from '../global';
import { Theme } from '../providers';

export const Page = ({ element, props }) => {
	const headerProps = {
		location: props.location,
		rootPath: `${__PATH_PREFIX__}/`,
	};

	return (
		<>
			<Theme>
				<GlobalStyles />
				<Header {...headerProps} />
				<Block>{element}</Block>
				<Footer />
			</Theme>
		</>
	);
};

export default Page;
