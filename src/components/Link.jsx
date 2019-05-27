import React from 'react';
import classnames from 'classnames';

export const Link = ({ as:El='a', className, ...props }) => {
	const LinkClasses = classnames('Link', className);
	return (
		<El className={LinkClasses} {...props}>{ props.children }</El>
	)
}
