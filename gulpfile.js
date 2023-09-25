const { src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css (done) {
    src('src/scss/**/*.scss')
    .pipe( sass())
    .pipe( dest('build/css'))

    done();
}
exports.css = css;