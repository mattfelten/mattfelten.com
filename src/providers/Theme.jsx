import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../global';

export const Theme = ({children}) => {// Check for dark mode
	const darkMode = useDarkMode(false);
	const [theme, setTheme] = useState(light);

	React.useEffect(() => {
		setTheme(darkMode.value ? dark : light);
	}, [darkMode, darkMode.value]);

	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};
