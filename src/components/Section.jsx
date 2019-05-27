import React from 'react';
import classname from 'classnames'

export const Section = React.forwardRef(({ title, children, className, type='text', ...props }, ref) => {
	const SectionClasses = classname('Section', className, `Section--${type}`);
	return (
		<div className={SectionClasses} {...props} ref={ref}>
			<div className="Section__wrap">
				<p><strong>{title}</strong></p>
				<div>
					{children}
				</div>
			</div>
		</div>
	)
});
