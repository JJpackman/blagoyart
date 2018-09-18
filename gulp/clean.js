const gulp = require('gulp');
const config = require('../config.json');

gulp.task('clean', function() {
  return require('del')(config.build.root);
});
