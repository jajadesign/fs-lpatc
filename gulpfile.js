// gulp et path
var gulp = require('gulp');
var path = require('path');

// modules gulp
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var recess = require('gulp-recess');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// dossier pour les watcher et les tacks
var sourceCSS = 'assets/less/*.less' ;
var sourceJS = 'assets/js/*.js';

/* default task */
gulp.task('default',function() { });

/* watchers */
gulp.task('watch',function() {
 gulp.watch(sourceCSS,['CSS_files']);
 gulp.watch(sourceJS,['JS_files']);
});

/* fichier less */
gulp.task('CSS_files', function() {
  gulp.src(sourceCSS)
  /*.pipe(recess())*/
  .pipe(less())
  .pipe(minifyCSS())
  .pipe(gulp.dest('build/css'));
});

/* fichier js */
gulp.task('JS_files',function() {
  gulp.src(sourceJS)
  .pipe(uglify())
  .pipe(rename({suffix: '-min' }))
  .pipe(gulp.dest('build/js'));
});