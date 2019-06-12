import React from 'react';
import classname from 'classnames';

export const SubSection = ({ children, className, type, ...props }) => {
	const SectionClasses = classname('SubSection', className, {
		[`SubSection--${type}`]: type,
	});
	return (
		<section className={SectionClasses} {...props}>
			{children}
		</section>
	)
};
