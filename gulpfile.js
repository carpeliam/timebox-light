var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('build', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('assets/app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['build']);
});

gulp.task('serve', ['build', 'connect', 'watch']);
