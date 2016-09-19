gulp = require('gulp'),
cssimport = require('postcss-import'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
browserSync = require('browser-sync').create(),
cssvars = require('postcss-simple-vars');


gulp.task('default',function(){
  console.log("hooyeah");
});

gulp.task('html',function(){
  console.log("imagine sth useful");
});

gulp.task('style',function(){
  return gulp.src('./app/assets/style/style.css')
  .pipe(postcss([cssimport,cssvars,nested,autoprefixer]))
  .pipe(gulp.dest('./app/temp/style'));
});

gulp.task('watch',function(){
  browserSync.init({
    server:{
      baseDir: "app"
    }
  });

  watch('./app/index.html',function(){
    gulp.start('html');
  });

  watch('./app/assets/style/**/*.css',function(){
    gulp.start('style');
  });
});
