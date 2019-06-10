import React from 'react';
import classnames from 'classnames';

export const List = ({ children, className, spacing=0, columns=1, ...props }) => {
	const ListClasses = classnames('List', className, {
		[`List--${spacing}`]: spacing !== 0,
		[`List--columns-${columns}`]: columns !== 1
	});
	return (
		<ul className={ListClasses} {...props}>
			{ React.Children.map(children, child => (
				<li>{child}</li>
			)) }
		</ul>
	)
}
