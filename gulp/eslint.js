const gulp = require('gulp');
const {PATH} = require('./config');
const eslint = require('gulp-eslint');

export function lint() {
  return gulp.src([PATH.js + '**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
}