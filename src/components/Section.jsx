import React from 'react';

export const Section = ({ title, children }) => (
	<div className="Section">
		<p><strong>{title}</strong></p>
		<div>
			{children}
		</div>
	</div>
);
