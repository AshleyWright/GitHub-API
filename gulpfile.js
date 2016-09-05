const gulp    = require('gulp');
const webpack = require('webpack-stream');

gulp.task('build:js', function() {
	return gulp.src(['src/GitHub.js'])
	.pipe(webpack(require('./webpack.config')))
	.on('error', function () {
		this.emit('end');
	})
	.pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:js']);