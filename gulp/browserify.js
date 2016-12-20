import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import PATH from './config';

export default function js() {
  browserify({
    entries: [`${PATH.js}index.js`], debug: true,
  })
    .transform(babelify)
    .bundle()
    // eslint-disable-next-line no-console
    .on('error', err => console.log(`Error : ${err.message}`))
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(`${PATH.public}js/`));
}
