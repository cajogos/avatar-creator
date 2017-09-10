var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Mind the order of these files
var files = [
    'src/MiniYou.js',
    'src/Avatar.js',
    'src/Canvas.js',
    'src/Editor.js'
];

gulp.task('default', function () {
    return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('avatar-creator.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});