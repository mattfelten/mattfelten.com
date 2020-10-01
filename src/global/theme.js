// Define what props.theme will look like
export const light = {
	accent: '#3DDFC2',
	background: '#fafafa',
	backgroundImage: 'dot-grid.jpg',
	baseFontSize: '4vw',
	baseFontSizeMin: '16px',
	baseFontSizeMax: '24px',
	fontFamily: "'Manrope', sans-serif",
	fontSize1: '0.66666rem',
	fontSize2: '1rem',
	fontSize3: '1.3333rem',
	fontSize4: '1.875rem',
	lineHeight: 1.7,
	lineHeightSmall: 1.4,
	maxWidth: '37em',
	spacing0: '0px',
	spacingHalf: '4px',
	spacing1: '.3333rem',
	spacing2: '0.6666rem',
	spacing3: '1rem',
	spacing4: '1.3333rem',
	spacing5: '2rem',
	spacing6: '2.6666rem',
	spacing7: '4rem',
	spacing8: '5.3333rem',
	spacing9: '6.6666rem',
	subtle: '#8F9093',
	textColor: '#25272c',
	transformScale: 1.06,
	transition: '.1s ease-in-out',
};

export const dark = {
	...light,
	background: light.textColor,
	backgroundImage: 'dot-grid.dark.jpg',
	textColor: light.background
}
