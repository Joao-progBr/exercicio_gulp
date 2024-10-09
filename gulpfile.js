const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const maps = require('gulp-sourcemaps')
const compJs = require('gulp-uglify')
const imgmin = require('gulp-imagemin')

function compSass(){
    return gulp.src('./source/style/main.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./maps'))
    .pipe(gulp.dest('./build/style'))
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(compJs())
    .pipe(gulp.dest('./build/scripts'))
}

function compImg(){
    return gulp.src('./source/images/*')
    .pipe(imgmin())
    .pipe(gulp.dest('./build/images'))
}


// exports.sass = compSass;
// exports.js = comprimeJs;
// exports.imgMin = compImg  
exports.default = function(){
    gulp.watch('./source/style/*.scss',{ignoreInitial:false} ,gulp.series(compSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimeJs))
    gulp.watch('./source/images/*', {ignoreInitial:false},gulp.series(compImg))
}