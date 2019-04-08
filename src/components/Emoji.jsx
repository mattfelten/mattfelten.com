import React from 'react';

export const Emoji = ({ emoji, label }) => (
	<span role="img" aria-label={`${label} emoji`}>{emoji}</span>
);
