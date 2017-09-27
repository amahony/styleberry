var atImport = require('postcss-import'),
    cssnano = require('cssnano'),
    cssnext = require('postcss-cssnext'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss');

var globs = {
  css: [
    './src/styleberry.css'
  ]
};

gulp.task('css', function() {
  return gulp
    .src(globs.css)
    .pipe(postcss([
      atImport(),
      cssnext()
    ]))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
  return gulp
    .src(globs.css)
    .pipe(postcss([
      atImport(),
      cssnext({warnForDuplicates:false}),
      cssnano()
    ]))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('./src/**/*.css', ['css']);
});
