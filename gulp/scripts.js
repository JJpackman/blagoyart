const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('../config.json');
const es = require('event-stream');

gulp.task('scripts', function() {
  return es.merge(
      gulp.src(config.js)
        .pipe(plugins.plumber())
        .pipe(plugins.concat('script.js'))
        .pipe(plugins.babel({
          presets: ['es2015']
        }))
        .pipe(gulp.dest(config.build.js))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({
          extname: '.min.js'
        })),
      gulp.src(config.src.js + '/svg4everybody.min.js')
    )
    .pipe(gulp.dest(config.build.js));
});

gulp.task('scripts:watch', function() {
  gulp.watch(config.src.js + '/**/*.js', ['scripts']);
});
