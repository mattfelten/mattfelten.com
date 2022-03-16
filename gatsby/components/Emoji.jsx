import React from 'react';

const ariaLabels = {
	'💪': 'flexed bicep',
	'📝': 'memo',
	'📨': 'incoming envelope',
	'🎁': 'present',
	'✅': 'check mark',
	'✏️': 'pencil',
};

const generateAriaLabel = emoji => {
	const label = ariaLabels[emoji];
	if (label) return label;

	console.error(`Emoji not found. Make emoji label for ${emoji}`);
};

export const Emoji = ({ emoji }) => (
	<span role="img" aria-label={generateAriaLabel(emoji)}>
		{emoji}
	</span>
);
