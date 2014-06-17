var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css'),
	exec = require('child_process').exec;

gulp.task('less', function() {
	return gulp.src('source/assets/_less/site.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest('source/assets/css'));
});

gulp.task('watch', function () {
	gulp.watch('source/**/*.less', ['less','build']);

	// Basically recreating Jekyll's --watch flag
	gulp.watch([
		'source/**/*.html',
		'source/**/*.md'
		], ['build']);
});

gulp.task('build', function () {
	exec('jekyll build');
});

gulp.task('serve', function () {
	exec('jekyll serve');
});

gulp.task('default', ['serve', 'watch'], function() {
	setTimeout( function() {
		console.log('Server running at http://mattfelten.dev:4000');
		exec('open http://mattfelten.dev:4000');
	}, 1500);
});
