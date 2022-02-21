const gulp = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
var sass = require('gulp-sass')(require('sass'));

exports.style = tasks.style;
exports.libs_style = tasks.libs_style;
exports.build_js = tasks.build_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.svg_css = tasks.svg_css;
exports.svg_sprite = tasks.svg_sprite;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;


exports.default = gulp.parallel(
	exports.libs_style,
	exports.style,
	exports.libs_js,
	exports.dev_js,
	exports.rastr,
	exports.svg_css,
	exports.svg_sprite,
	exports.html,
	exports.bs_html,
	exports.watch
)
