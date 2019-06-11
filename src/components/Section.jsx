import React from 'react';
import classname from 'classnames';

export const Section = React.forwardRef(({ title, children, className, type='text', padding='default', ...props }, ref) => {
	const SectionClasses = classname('Section', className, `Section--${type}`, `Section--padding-${padding}`);
	return (
		<section className={SectionClasses} {...props} ref={ref}>
			{title && <p className="Section__title"><strong>{title}</strong></p>}
			<div className="Section__content">
				{children}
			</div>
		</section>
	)
});

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
