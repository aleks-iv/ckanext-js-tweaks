const { resolve } = require("path");
const gulp = require("gulp");
const if_ = require("gulp-if");
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps");
const touch = require("gulp-touch-fd");
const cleanCss = require("gulp-clean-css");

const isDev = () => !!process.env.DEBUG;

const themeDir = resolve("ckanext/js_tweaks/theme");
const assetsDir = resolve("ckanext/js_tweaks/assets");

const build = () =>
  gulp
    .src(resolve(themeDir, "js-tweaks.less"))
    .pipe(if_(isDev, sourcemaps.init()))
    .pipe(less())
    .pipe(if_(() => !isDev(), cleanCss()))
    .pipe(if_(isDev, sourcemaps.write()))
    .pipe(gulp.dest(resolve(assetsDir, "css")))
    .pipe(touch());

const watch = () =>
  gulp.watch(resolve(themeDir, "*.less"), { ignoreInitial: false }, build);

exports.build = build;
exports.watch = watch;
