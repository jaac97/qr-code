const gulp= require('gulp');
const {parallel}  = require('gulp')

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
    gulp.watch('./src/sass/**/*.scss', buildStyles);
    // gulp.watch('./src/images/**/*', convertWebp)
}
exports.default = parallel(buildStyles,watchers);
