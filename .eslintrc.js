module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		graphql: false,
	},
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react'],
};
