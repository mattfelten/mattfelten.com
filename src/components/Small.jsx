import React from 'react';
import classnames from 'classnames';

export const Small = ({ children, className }) => {
	const SmallClasses = classnames('Small', className);
	return (
		<span className={SmallClasses}>{children}</span>
	);
};
