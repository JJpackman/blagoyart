const gulp = require("gulp");
const run = require("run-sequence");

gulp.task("start", function() {
  run("build", "watch", "server");
});
