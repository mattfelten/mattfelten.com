const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js,astro}'],
	theme: {
		colors: {
			accent: '#3DDFC2',
			background: '#fafafa',
			text: '#25272c',
		},
		spacing: {
			px: '1px',
			0: '0',
			0.5: '4px', // Rare
			1: '8px',
			2: '16px',
			2.5: '20px', // Only use for icons
			3: '24px',
			4: '32px', // After this point, 8px steps is too small to be significant, and moves to 16px steps
			5: '48px',
			6: '64px',
			7: '80px',
		},
		fontFamily: {
			sans: ['Noto Sans', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				pattern: "url('/dot-grid.jpg')",
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.transition': {
					transitionDuration: '.1s',
					transitionTimingFunction: 'ease-in-out',
				},
				'.hover-up': {
					transform: `translateY(-${theme('spacing.[0.5]')})`,
				},
			});
		}),
	],
};
