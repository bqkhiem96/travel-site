gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();



gulp.task('watch',function(){
  notify: false,
  browserSync.init({
    server:{
      baseDir: "app"
    }
  });

  watch('./app/index.html',function(){
    browserSync.reload();
  });

  watch('./app/assets/style/**/*.css',function(){
    // gulp.start('style');
    gulp.start('cssInject');
  });
});


gulp.task('cssInject',['style'],function(){
  return gulp.src('./app/temp/style/style.css')
  .pipe(browserSync.stream());
});
