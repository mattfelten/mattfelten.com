const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		variables: {
			DEFAULT: {
				color: {
					accent: '#3DDFC2',
					background: '#fafafa',
					default: '#374151',
					strong: '#111827',
					subdued: '#6B7280',
					weak: '#9CA3AF',
				},
			},
		},
		darkVariables: {
			DEFAULT: {
				color: {
					accent: '#00E0B8',
					background: '#000000',
					default: '#F3F4F6',
					strong: '#F9FAFB',
					subdued: '#9CA3AF',
					weak: '#4B5563',
				},
			},
		},
		colors: {},
		textColor: {
			accent: 'var(--color-accent)',
			background: 'var(--color-background)',
			default: 'var(--color-default)',
			strong: 'var(--color-strong)',
			subdued: 'var(--color-subdued)',
			weak: 'var(--color-weak)',
			transparent: 'transparent',
		},
		backgroundColor: {
			accent: 'var(--color-accent)',
			background: 'var(--color-background)',
			default: 'var(--color-default)',
			strong: 'var(--color-strong)',
			subdued: 'var(--color-subdued)',
			weak: 'var(--color-weak)',
			transparent: 'transparent',
		},
		textDecorationColor: {
			accent: 'var(--color-accent)',
			background: 'var(--color-background)',
			default: 'var(--color-default)',
			strong: 'var(--color-strong)',
			subdued: 'var(--color-subdued)',
			weak: 'var(--color-weak)',
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
			sans: [
				'Nudica',
				'-apple-system',
				'system-ui',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'sans-serif',
			],
		},
		extend: {
			textDecorationThickness: {
				3: '3px',
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': 'var(--color-default)',
						'--tw-prose-headings': 'var(--color-strong)',
						'--tw-prose-lead': 'var(--color-default)',
						'--tw-prose-links': 'var(--color-default)',
						'--tw-prose-bold': 'var(--color-default)',
						'--tw-prose-counters': 'var(--color-default)',
						'--tw-prose-bullets': 'var(--color-default)',
						'--tw-prose-hr': 'var(--color-default)',
						'--tw-prose-quotes': 'var(--color-default)',
						'--tw-prose-quote-borders': 'var(--color-default)',
						'--tw-prose-captions': 'var(--color-default)',
						'--tw-prose-code': 'var(--color-default)',
						'--tw-prose-pre-code': 'var(--color-default)',
						'--tw-prose-pre-bg': 'var(--color-default)',
						'--tw-prose-th-borders': 'var(--color-default)',
						'--tw-prose-td-borders': 'var(--color-default)',
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
