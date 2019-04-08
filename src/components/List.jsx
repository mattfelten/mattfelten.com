import React from 'react';
import classnames from 'classnames';

export const List = ({ children, spacing=0 }) => {
	const ListClasses = classnames('List', {
		[`List--${spacing}`]: spacing !== 0
	});
	return (
		<ul className={ListClasses}>
			{ React.Children.map(children, child => (
				<li>{child}</li>
			)) }
		</ul>
	)
}
