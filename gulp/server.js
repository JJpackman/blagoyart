const gulp = require("gulp");
const config = require("../config.json");
const server = require("browser-sync").create();

gulp.task("server", function() {
  server.init({
    server: {
      baseDir: config.build.root + "/"
    },
    watch: true,
    notify: false
  });
});
