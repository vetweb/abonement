const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');
const webpack = require('webpack-stream')

module.exports = function dev_js() {
	return src(['src/components/**/*.js', 'src/js/01_main.js'])
		.pipe(webpack({
			mode: 'production',
			performance: { hints: false },
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/env'],
							plugins: ['babel-plugin-root-import']
						}
					}
				]
			}
		})).on('error', function handleError() {
			this.emit('end')
		})
		.pipe(map.init())
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/js/'))
		.pipe(bs.stream())
}
