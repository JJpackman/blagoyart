const gulp = require("gulp");
const run = require("run-sequence");

gulp.task("build", function() {
  run("clean", "images", "copy", "sprite", "webp", "scripts", "styles", "html");
});
