const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.json');

gulp.task('images', function() {
  const { imagemin } = plugins;

  return gulp.src(config.src.img + '/**/*.{png,jpg,svg}')
    .pipe(plugins.plumber())
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo({
        plugins: [
          {
            removeAttrs: { attrs: '(fill)' }
          }
        ]
      })
    ]))
    .pipe(gulp.dest(config.src.img));
});

gulp.task('images:watch', function() {
  gulp.watch(config.src.img + '/**/*.{png,jpg,svg}', ['images']);
});
