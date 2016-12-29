var gulp = require('gulp'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    path = require('path');
  
  gulp.task("path", function(){
    console.log(path.join(__dirname));
  });
  
var inputDir = ['src'];   
var outputDir = ['build'];

var sass = 'src/**/*.scss';
 

gulp.task('style', function() {
  gulp.src('src/**/*.scss')
    .pipe(compass({
      //project: path.join(__dirname),
      sass: 'src/sass',
      css: 'build/css',
      style: 'compressed'     
    }))
    .pipe(gulp.dest('build/css'));    
});


gulp.task('scripts', function(){
  return gulp.src(['src/js/plugins.js', 'src/js/script.js'])
    .pipe(browserify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js'));
});


gulp.task('watch', function(){
 gulp.watch(sass, ['style']);
 gulp.watch('src/js/*.js', ['scripts']);
});


gulp.task('default', ['watch'], function() {
   gulp.start('style');
   gulp.start('scripts');
 });