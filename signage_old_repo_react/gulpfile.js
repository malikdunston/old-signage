'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var cache = require("gulp-cache");

var SCSS_WATCH = './src/assets/scss/**/*.scss';
var SCSS_SRC = './src/assets/scss/index.scss';
var SCSS_DEST = './src/assets/css';
 
function compile_scss() {
	return gulp.src(SCSS_SRC)
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(changed(SCSS_SRC))
		.pipe(gulp.dest(SCSS_DEST));
};

function watch_scss() {
        gulp.watch(SCSS_WATCH, compile_scss);
};

var projFiles = [
	"./**",
	"./**/**/**/*.html",
	"./**/**/**/*.js",
	"./**/**/**/*.php",
	"./**/**/**/*.css",
	"./**/**/**/*.scss",
	"./**/**/**/*.svg"
];

function clearCache() {
        gulp.watch(projFiles).on("change", gulp.parallel(
                cache.clearAll(),
		console.clear()
	));
};

gulp.task('default', gulp.parallel(clearCache, watch_scss));
 
exports.compile_scss = compile_scss;
exports.watch_scss = watch_scss;
exports.clearCache = clearCache;