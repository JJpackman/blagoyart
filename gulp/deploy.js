const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const config = require("../config.json");

gulp.task("deploy", function() {
  return gulp.src(config.build.root + "/**/*").pipe(plugins.ghPages());
});
