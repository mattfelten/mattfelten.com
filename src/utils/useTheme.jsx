import React, { useState } from 'react';
import { light, dark } from '../global';

export function useTheme() {
	if (typeof window === 'undefined') return light;

	// Check for dark mode
	const mq = window.matchMedia('(prefers-color-scheme: dark)');
	const [useDarkTheme, setDark] = useState(mq.matches);

	mq.addEventListener('change', (e) => {
		setDark(e.matches);
	});

	//if (useDarkTheme) return dark;
	return ( useDarkTheme ? dark : light );
}
