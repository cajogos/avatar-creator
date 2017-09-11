let gulp = require('gulp');
let babel = require('gulp-babel');
let sourcemaps = require('gulp-sourcemaps');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

// Mind the order of these files
const files = [
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
        .pipe(concat('avatar-creator.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});