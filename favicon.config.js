module.exports = {
	input: './src/assets/favicon.svg', // Required. override cli options.
	output: './public/favicons', // Required. override cli options.
	template: './src/layouts/favicon.html', // Default is the same as output, default name is meta.html.
	config: {
		// The options are the same as https://github.com/itgalaxy/favicons#usage
		path: '/favicons/',
		icons: {
			android: false,
			appleIcon: false,
			appleStartup: false,
			coast: false,
			favicons: true,
			firefox: false,
			windows: false,
			yandex: false,
		},
	},
};
