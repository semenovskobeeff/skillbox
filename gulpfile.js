'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    debug = require('gulp-debug');

let paths = {
    blocks: 'blocks/',
    public: 'public/'
};

gulp.task('sass', function() {
    return gulp.src(paths.blocks + '*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(prefix({
                browsers: ['last 10 versions'],
    			cascade: true
            }))
            .pipe(concat('style.css'))
            .pipe(gulp.dest(paths.public + 'css/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.blocks + '*.scss', gulp.series('sass'));
});
