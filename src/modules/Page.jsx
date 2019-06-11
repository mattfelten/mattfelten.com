import React from 'react';
import { Footer, Header } from './';

export const Page = ({children}) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);
