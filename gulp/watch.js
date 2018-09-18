const gulp = require("gulp");
const run = require("run-sequence");

gulp.task("watch", function() {
  run(
    "styles:watch",
    "scripts:watch",
    "images:watch",
    "webp:watch",
    "sprite:watch",
    "html:watch"
  );
});
