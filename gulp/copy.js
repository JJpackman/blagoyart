const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const config = require("../config.json");

gulp.task("copy", function() {
  return gulp
    .src(
      [
        config.src.img + "/**/*.{png,jpg}",
        config.src.fonts + "/**/*.{woff,woff2,ttf}"
      ],
      {
        base: "src"
      }
    )
    .pipe(plugins.plumber())
    .pipe(gulp.dest(config.build.root));
});
