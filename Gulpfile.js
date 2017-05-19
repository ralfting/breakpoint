var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./sass/demo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('example/'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
