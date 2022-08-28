const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create(); //server and reload

//add config
const path = require('./config/path.js');
const app = require('./config/app.js');


//tasks
const clear = require('./tasks/clear');
const pug = require('./tasks/pug');
const stylus = require('./tasks/stylus');
const script = require('./tasks/script');
const img = require('./tasks/img');
const font = require('./tasks/font');

const copyCssLibs = require('./tasks/copyCssLibs');
const copyJsLibs = require('./tasks/copyJsLibs');


//server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        },
        port: 8000
    })
}


//watcher
const watcher = () => {
    watch(path.pug.watch, pug).on('all', browserSync.reload);

    watch(path.stylus.watch, stylus).on('all', browserSync.reload);
    watch(path.script.watch, script).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);

    watch(path.copyCssLibs.watch, copyCssLibs).on('all', browserSync.reload);
    watch(path.copyJsLibs.watch, copyJsLibs).on('all', browserSync.reload);
}

const build = series(
    clear,
    copyCssLibs,
    copyJsLibs,
    parallel(pug, stylus, script, img, font)
);

const dev = series(
    build,
    parallel(watcher, server)
);


//export tascs
exports.pug = pug;
//styles
exports.stylus = stylus;

exports.script = script;

exports.img = img;
exports.font = font;

exports.copyCssLibs = copyCssLibs;
exports.copyJsLibs = copyJsLibs;


exports.default = app.isProd ? build : dev;
