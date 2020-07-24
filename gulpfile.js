/* eslint-disable */
const gulp = require("gulp");
const sync = require("browser-sync").create();
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin')
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const replace = require('gulp-replace');
const eslint = require('gulp-eslint');
const prettier = require('gulp-prettier');

sass.compiler = require("node-sass");

const html = () =>
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true, }))
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream());

const styles = () =>
    gulp.src("./src/styles/styles.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist"))
        .pipe(sync.stream());

const scripts = () =>
    gulp.src('./src/scripts/index.js')
        .pipe(sourcemaps.init())
        // .pipe(eslint())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(sourcemaps.write('.'))
        // .pipe(terser())
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream());

const images = () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))

const copy = () =>
    gulp.src([
        'src/fonts/**/*',
        'src/libs/**/*'
    ], {
        base: 'src'
    })
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream({
            once: true
        }));

const paths = () =>
    gulp.src('dist/*.html')
        .pipe(replace('./styles/styles.scss', 'styles.css'))
        .pipe(replace('./scripts/index.js', 'index.js'))
        .pipe(gulp.dest('dist'));


const server = () => {
    sync.init({
        ui: false,
        notify: false,
        server: {
            baseDir: 'dist'
        }
    });
};

const watch = () => {
    gulp.watch('src/*.html', gulp.series(html, paths));
    gulp.watch('src/styles/**/*.scss', styles);
    gulp.watch('src/scripts/**/*.js', scripts);
    gulp.watch('src/images/**/*', images)
    gulp.watch('src/fonts/**/*', copy);
};

const prebuild = gulp.series(gulp.parallel(html, styles, scripts, images, copy), paths);

const dev = gulp.series(
    gulp.parallel(
        html,
        styles,
        scripts,
        images,
        copy,
    ),
    paths,
    gulp.parallel(
        watch,
        server,
    ),
);

module.exports = {
    watch,
    prebuild,
    dev,
}