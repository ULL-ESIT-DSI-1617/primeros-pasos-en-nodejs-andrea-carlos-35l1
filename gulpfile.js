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
})

//
//gulp.task('deploypush', ['dp'], shell.task(
//  'rm -rf html'
//  ));
//  
//gulp.task('dp', ['deploy'], function() {
//  return gulp.src('./html/**/*')
//  .pipe(ghPages(['git@github.com:ULL-ESIT-DSI-1617/primeros-pasos-en-nodejs-andrea-carlos-35l1.git']))
//});

gulp.task('deploygb', shell.task([
    'cd txt'+
    ';'+
    'git add .'+
    ';'+
    'git commit -m "Actualizando gitbook"'+
    ';'+
    'git push https://git.gitbook.com/alu0100826999/book2-carlos-andrea.git master'
    ]));

gulp.task('serve', shell.task(
  'gitbook serve txt html'
));

gulp.task('serveiaas', shell.task([
    'ssh usuario@10.6.129.232 node /home/usuario/dsi/primeros-pasos-en-nodejs-andrea-carlos-35l1/server.js'
]))
