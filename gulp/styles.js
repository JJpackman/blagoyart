const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const config = require("../config.json");

gulp.task("styles", function() {
  return gulp
    .src(config.src.less + "/style.less")
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(plugins.cssimport())
    .pipe(plugins.postcss([require("autoprefixer")]))
    .pipe(gulp.dest(config.build.css))
    .pipe(plugins.csso())
    .pipe(plugins.rename("style.min.css"))
    .pipe(gulp.dest(config.build.css));
});

gulp.task("styles:watch", function() {
  gulp.watch(config.src.less + "/**/*.less", ["styles"]);
});
