'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var named = require('vinyl-named');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./config/webpack.config.js');

gulp.task('clean' , function(){
	return gulp.src(['build/scripts/**/*.js' , 'build/scripts/**/*.map'] ,{read:false}).pipe(clean());
});

gulp.task('default' ,['clean'] , function(){
  return gulp.src(['src/**/*.js'])
  	.pipe(named())
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/scripts'));
});