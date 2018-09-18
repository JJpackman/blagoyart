const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.json');

gulp.task('webp', function() {
  return gulp.src(config.src.img + '/**/*.{png,jpg}')
    .pipe(plugins.plumber())
    .pipe(plugins.webp({
      quality: 90
    }))
    .pipe(gulp.dest(config.build.img));
});

gulp.task('webp:watch', function() {
  gulp.watch(config.src.img + '/**/*.{png,jpg}', ['webp']);
});
