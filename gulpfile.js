var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

gulp.task('build', shell.task(
'gitbook build txt html'
));

gulp.task('deploy', function() {
return gulp.src('./html/**/*')
.pipe(ghPages());
});

gulp.task('deploypush', ['deploy'], function() {
  return gulp.src('./html/**/*')
  .pipe(ghPages(['git@github.com:ULL-ESIT-DSI-1617/primeros-pasos-en-nodejs-andrea-carlos-35l1.git']))
});


gulp.task('serve', shell.task(
  'gitbook serve txt html'
));
