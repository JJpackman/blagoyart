const gulp = require("gulp");
const config = require("../config.json");

gulp.task("html", function() {
  return gulp
    .src(config.src.root + "/*.html")
    .pipe(gulp.dest(config.build.root));
});

gulp.task("html:watch", function() {
  gulp.watch(config.src.root + "/*.html", ["html"]);
});
