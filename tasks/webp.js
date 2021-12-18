const {
	src
} = require('gulp');
const webpConv = require('gulp-webp');
const changed = require('gulp-changed');
const multiDest = require('gulp-multi-dest');
const plumber = require('gulp-plumber');

module.exports = function webp() {
	return src('build/new/img/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('build/new/img', {
			extension: '.webp'
		}))
		.pipe(webpConv())
		.pipe(multiDest(['src/images', 'build/new/img']))
}
