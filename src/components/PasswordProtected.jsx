import { useState, useEffect } from 'react';

import { RxArrowRight } from 'react-icons/rx';

export const PasswordProtected = ({ children, password }) => {
	const placeholder = 'Password';
	const [unlocked, setUnlocked] = useState(false);
	const [value, setValue] = useState(placeholder);
	if (!password) return null;

	useEffect(() => {
		const loc = new URL(window.location);
		const urlParams = new URLSearchParams(loc.search);
		if (!urlParams.has('p')) return;

		const urlPassword = urlParams.get('p');

		setUnlocked(password === urlPassword);

		urlParams.delete('p');
		history.replaceState({}, '', loc.pathname);
	}, []);

	const change = e => {
		setValue(e.target.value || placeholder);
		if (e.target.value === password) setUnlocked(true);
	};

	const submit = e => {
		e.preventDefault();
		const typed = e.target.elements.password.value;

		if (typed === password) setUnlocked(true);
	};
	return (
		<>
			{!unlocked && (
				<div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
					<form
						onSubmit={submit}
						className="max-w-xs flex gap-2 text-4xl"
					>
						<div className="relative text-transparent inline-flex leading-normal">
							{value}
							<input
								type="text"
								name="password"
								placeholder={placeholder}
								className="leading-normal bg-transparent text-strong focus:outline-none absolute top-0 left-0 bottom-0 right-0"
								autoFocus
								onChange={change}
							/>
						</div>

						<button className="text-weak hover:text-accent focus-visible:text-accent">
							<RxArrowRight />
						</button>
					</form>
				</div>
			)}
			{unlocked && children}
		</>
	);
};
