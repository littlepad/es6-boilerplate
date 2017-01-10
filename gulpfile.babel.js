import gulp from 'gulp';
import PATH from './gulp/config';
import js from './gulp/webpack';
import { lint, devLint } from './gulp/eslint';
import jsTest from './gulp/mocha';

gulp.task('js', () => js());
gulp.task('lint', () => lint());
gulp.task('devLint', () => devLint());
gulp.task('js-test', () => jsTest());

gulp.task('default', () => {
  gulp.watch(`${PATH.js}**/*.js`, ['lint', 'js']);
});
