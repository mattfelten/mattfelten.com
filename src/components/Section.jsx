import React from 'react';
import classname from 'classnames'

export const Section = React.forwardRef(({ title, children, className, type='text', padding='default', ...props }, ref) => {
	const SectionClasses = classname('Section', className, `Section--${type}`, `Section--padding-${padding}`);
	return (
		<div className={SectionClasses} {...props} ref={ref}>
			<div className="Section__wrap">
				<p className="Section__title"><strong>{title}</strong></p>
				<div className="Section__content">
					{children}
				</div>
			</div>
		</div>
	)
});
