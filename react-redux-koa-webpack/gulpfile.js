'use strict';

var path = require('path');
var gulp = require('gulp');
var clean = require('gulp-clean');
var named = require('vinyl-named');
var plumber = require('gulp-plumber');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./config/webpack.config.js');

gulp.task('clean' , function(){
	return gulp.src(['build/scripts/**/*.js' , 'build/scripts/**/*.map'] ,{read:false}).pipe(clean());
});

gulp.task('default' ,['clean'] , function(){
  return gulp.src(['src/scripts/**/*.js'] , {base:'src/scripts'})
  	.pipe(named(function(file){
  		return path.relative(path.join(file.cwd,file.base),file.history[0]).replace(/.js$/,'');
  	}))
  	.pipe(plumber())
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/scripts'));
});