const gulp = require('gulp');
const PATH = require('./gulp/config').default;
const js = require('./gulp/browserify').default;
const { lint, devLint } = require('./gulp/eslint');
const jsTest = require('./gulp/mocha').default;

gulp.task('js', () => js());
gulp.task('lint', () => lint());
gulp.task('devLint', () => devLint());
gulp.task('js-test', () => jsTest());

gulp.task('default', () => {
  gulp.watch(`${PATH.js}**/*.js`, ['lint', 'js']);
});
