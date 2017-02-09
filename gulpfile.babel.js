import gulp from 'gulp';
import path from 'path';

// var gulp = require('gulp');
// var path = require('path');

const $ = require('gulp-load-plugins')(); //gulp-load-plugins brings in a function so we need to execute it. it will load all modules which starts with gulp-
// so we don't need to require them separately

gulp.task('server:build', () => {
    return gulp.src('./src/server/**/*.js') // specifying a glob to select all js file from dir and sub dir.
    .pipe($.changed('./build')) // change prevent recompilying a file that isn't changed. 
    .pipe($.sourcemaps.init()) // will initialize source sourcemaps
    .pipe($.babel()) // we are piping in the result of invoking babel()
    .pipe($.sourcemaps.write('.', {sourceRoot : path.join(__dirname, 'src', 'server')})) // by this time all our source code is compiled by babel and 
    // babel will work ith sourcemaps to generate sourcemaps which we need to write it src/server directory. . represents the current root directory,
    // second parameter is an absolute path where we want to write our sourcemaps
    .pipe(gulp.dest('./build')); // dump all the output to build dir.
});