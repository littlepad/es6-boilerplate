import gulp from 'gulp';
import mocha from 'gulp-mocha';
import espower from 'gulp-espower';
import PATH from './config';

export default function jsTest() {
  return gulp.src(`${PATH.js}spec/**/*.js`, { read: false })
    .pipe(espower())
    .pipe(mocha());
}
