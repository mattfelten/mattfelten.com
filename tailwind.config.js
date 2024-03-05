const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js,astro}'],
	theme: {
		variables: {
			DEFAULT: {
				color: {
					accent: '#3DDFC2',
					background: '#fafafa',
					text: '#25272c',
				},
			},
		},
		darkVariables: {
			DEFAULT: {
				color: {
					accent: '#00E0B8',
					background: '#000000',
					text: '#fafafa',
				},
			},
		},
		colors: {},
		textColor: {
			accent: 'var(--color-accent)',
			background: 'var(--color-background)',
			text: 'var(--color-text)',
		},
		backgroundColor: {
			accent: 'var(--color-accent)',
			background: 'var(--color-background)',
			text: 'var(--color-text)',
		},
		textDecorationColor: {
			accent: 'var(--color-accent)',
			background: 'var(--color-background)',
			text: 'var(--color-text)',
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
			8: '96px', // After this point, 16px steps is too small to be significant, and moves to 24px steps
			9: '120px',
			10: '144px',
			11: '168px',
			12: '192px',
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif'],
		},
		extend: {
			textDecorationThickness: {
				3: '3px',
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': 'var(--color-text)',
						'--tw-prose-headings': 'var(--color-text)',
						'--tw-prose-lead': 'var(--color-text)',
						'--tw-prose-links': 'var(--color-text)',
						'--tw-prose-bold': 'var(--color-text)',
						'--tw-prose-counters': 'var(--color-text)',
						'--tw-prose-bullets': 'var(--color-text)',
						'--tw-prose-hr': 'var(--color-text)',
						'--tw-prose-quotes': 'var(--color-text)',
						'--tw-prose-quote-borders': 'var(--color-text)',
						'--tw-prose-captions': 'var(--color-text)',
						'--tw-prose-code': 'var(--color-text)',
						'--tw-prose-pre-code': 'var(--color-text)',
						'--tw-prose-pre-bg': 'var(--color-text)',
						'--tw-prose-th-borders': 'var(--color-text)',
						'--tw-prose-td-borders': 'var(--color-text)',
						'--tw-prose-invert-body': 'var(--color-background)',
						'--tw-prose-invert-headings': 'var(--color-background)',
						'--tw-prose-invert-lead': 'var(--color-background)',
						'--tw-prose-invert-links': 'var(--color-background)',
						'--tw-prose-invert-bold': 'var(--color-background)',
						'--tw-prose-invert-counters': 'var(--color-background)',
						'--tw-prose-invert-bullets': 'var(--color-background)',
						'--tw-prose-invert-hr': 'var(--color-background)',
						'--tw-prose-invert-quotes': 'var(--color-background)',
						'--tw-prose-invert-quote-borders':
							'var(--color-background)',
						'--tw-prose-invert-captions': 'var(--color-background)',
						'--tw-prose-invert-code': 'var(--color-background)',
						'--tw-prose-invert-pre-code': 'var(--color-background)',
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders':
							'var(--color-background)',
						'--tw-prose-invert-td-borders':
							'var(--color-background)',
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@mertasan/tailwindcss-variables'),
		require('tailwindcss-line-length')({
			widths: {
				xs: '18em', // 300px at 1rem
				sm: '30em',
				md: '35em', // 560px at 1rem
				lg: '40em',
				xl: '50em', // 800px at 1rem
			},
		}),
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.hover': {
					transition: 'all',
					transitionDuration: '.1s',
					transitionTimingFunction: 'ease-in-out',
					'&:hover': {
						transform: `translateY(-${theme('spacing.[0.5]')})`,
					},
				},
			});
		}),
	],
};
