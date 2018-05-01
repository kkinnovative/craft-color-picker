// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('src/resources/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/resources/dist'));
});

gulp.task('scripts', function() {
    gulp.src('src/resources/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/resources/dist'));
});

gulp.task('default', ['sass', 'scripts'], function() {
    gulp.watch('src/resources/*.scss', ['sass']);
    gulp.watch('src/resources/*.js', ['scripts']);
})