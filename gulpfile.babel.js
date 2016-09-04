const gulp = require('gulp');
const {PATH} = require('./gulp/config');
const {js} = require('./gulp/browserify');
const {lint} = require('./gulp/eslint');

gulp.task('js', () => js());
gulp.task('lint', () => lint());

gulp.task('default', () => {
  gulp.watch(PATH.js + '**/*.js', ['lint', 'js']);
});
