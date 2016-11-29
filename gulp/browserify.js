const gulp = require('gulp');
const PATH = require('./config').default;
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

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
