import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../blocks';
import { Block } from '../components';

export const Page = ({ element, props }) => {
	const headerProps = {
		location: props.location,
		rootPath: `${__PATH_PREFIX__}/`
	};

	return (
		<div>
			<Header {...headerProps} />
			<Block>
				{element}
			</Block>
			<Footer />
		</div>
	);
};

export default Page;
