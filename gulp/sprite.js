const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.json');

gulp.task('sprite', function() {
  return gulp.src(config.src.img + '/**/*.svg')
    .pipe(plugins.plumber())
    .pipe(plugins.rename({
      prefix: 'icon-'
    }))
    .pipe(plugins.svgstore({
      inlineSvg: true
    }))
    .pipe(plugins.rename('sprite.svg'))
    .pipe(gulp.dest(config.build.img));
});

gulp.task('sprite:watch', function() {
  gulp.watch(config.src.img + '/**/icon-*.svg', ['sprite']);
});

