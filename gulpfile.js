const { src, dest, series, watch } = require(`gulp`),
    babel = require(`gulp-babel`),
    htmlValidator = require(`gulp-htmlmin`),
    jsCompressor = require(`gulp-uglify`),
    jsValidator = require(`gulp-eslint`),
    browserSync = require(`browser-sync`),
    cssValidator = require(`gulp-clean-css`),
    reload = browserSync.reload;

let browserChoice = `default`;

// for working with chrome (different syntax than example since development is on Arch Linux, 
// this is the cmd to start chrome on Arch)
async function chrome () {
    browserChoice = `google-chrome-stable`;
}

let validateHTML = () => {
    return src([
        `html/*.html`,
        `html/**/*.html`])
        .pipe(htmlValidator(undefined));
};

let validateCSS = () => {
    return src([
        `css/*.css`,
        `css/**/*.css`])
        .pipe(cssValidator(undefined));
};

let validateJS = () => {
    return src([
        `js/*.js`,
        `js/**/*.js`])
        .pipe(jsValidator())
        .pipe(jsValidator.formatEach(`compact`));
};

let compressHTML = () => {
    return src([`html/*.html`,`html/**/*.html`])
        .pipe(htmlValidator({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressCSS = () => {
    return src([`css/*.css`,`css/**/*.css`])
        .pipe(htmlValidator({collapseWhitespace: true}))
        .pipe(dest(`prod/css`));
};

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/js`));
};

let transpileJSForProd = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `.`,
                `html`
            ]
        }
    });

    watch(`html/*.html`, validateHTML).on(`change`, reload);
    watch(`css/*.css`, validateCSS).on(`change`, reload);
    watch(`js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);
};

exports.chrome = series(chrome, serve);
exports.validateHTML = validateHTML;
exports.validateCSS = validateCSS;
exports.validateJS = validateJS;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = series(
    validateHTML,
    validateCSS,
    validateJS,
    transpileJSForDev,
    serve
);