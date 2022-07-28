const gulp= require('gulp');
const {parallel, watch}  = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
function buildStyles() {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/css'));
};
function watchers () {
    watch('./src/scss/**/*.scss', buildStyles);
}

exports.default = parallel(buildStyles,watchers);
