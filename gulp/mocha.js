const gulp = require('gulp');
const PATH = require('./config');
const mocha = require('gulp-mocha');
const espower = require('gulp-espower');

export function jsTest() {
  return gulp.src(`${PATH.js}spec/**/*.js`, { read: false })
    .pipe(espower())
    .pipe(mocha());
}
