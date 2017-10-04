const gulp = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");

const src = ["./src/**/*.{js,jsx}", "!./src/**/__tests__/**"];

const buildEs = () =>
  gulp
    .src(src)
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["react", "stage-2"],
        babelrc: false,
      }),
    )
    .pipe(gulp.dest("./es"));

const buildLib = () =>
  gulp
    .src(src)
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["react", "es2015", "stage-2"],
        babelrc: false,
      }),
    )
    .pipe(gulp.dest("./lib"));

const build = gulp.parallel(buildEs, buildLib);

module.exports = {
  build,
};
