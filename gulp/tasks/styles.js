gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
mixins = require('postcss-mixins'),
cssimport = require('postcss-import');



gulp.task('style',function(){
  return gulp.src('./app/assets/style/style.css')
  .pipe(postcss([cssimport,mixins,cssvars,nested,autoprefixer]))
  .pipe(gulp.dest('./app/temp/style'));
});
