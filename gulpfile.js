var gulp       = require('gulp');
var csso       = require('gulp-csso');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass')(require('sass'));
var plumber    = require('gulp-plumber');
var cp         = require('child_process');
var browserSync = require('browser-sync').create();

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

/*
 * Build the Jekyll Site
 */
function jekyllBuild(done) {
  return cp.spawn(jekyllCommand, ['build'], { stdio: 'inherit' }).on('close', done);
}

/*
 * Reload browserSync
 */
function reload(done) {
  browserSync.reload();
  done();
}

/*
 * Build Jekyll and launch browser-sync
 */
function serve(done) {
  browserSync.init({
    server: { baseDir: '_site' }
  });
  done();
}

/*
 * Compile and minify sass
 */
function compileSass() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('assets/css/'));
}

/*
 * Copy fonts
 */
function fonts() {
  return gulp.src('src/fonts/**/*.{ttf,woff,woff2}')
    .pipe(plumber())
    .pipe(gulp.dest('assets/fonts/'));
}

/*
 * Compile and minify js
 */
function js() {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
}

/*
 * Watch for changes
 */
function watch() {
  gulp.watch('src/styles/**/*.scss', gulp.series(compileSass, jekyllBuild, reload));
  gulp.watch('src/js/**/*.js',       gulp.series(js, jekyllBuild, reload));
  gulp.watch('src/fonts/**/*.{ttf,woff,woff2}', fonts);
  gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html'], gulp.series(jekyllBuild, reload));
}

exports.js      = js;
exports.sass    = compileSass;
exports.fonts   = fonts;
exports.build   = gulp.series(js, compileSass, fonts, jekyllBuild);
exports.default = gulp.series(js, compileSass, fonts, jekyllBuild, serve, watch);
