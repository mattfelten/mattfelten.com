const withMdxFm = require('next-mdx-frontmatter')({
	extension: /\.mdx?$/,
});

module.exports = withMdxFm({
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	webpack: function (config) {
		config.module.rules.push({
			test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
					name: '[name].[ext]'
				}
			}
		})
		return config
	}
});
