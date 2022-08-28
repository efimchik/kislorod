const fs = require('fs'); //parser json

const isProd = process.argv.includes('--prod');
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    pug: {
        pretty: isDev, //off minify html in pug
        locals: {
            meta: JSON.parse(fs.readFileSync('./src/json/сonfig.json', 'utf8'))
        }
    },

    webp: {
        quality: 70,
        method: 6
    },

    autoprefixer: {
        overrideBrowserslist: ['last 3 versions'],
        cascade: true
    },

    babel: {
        presets: [
            '@babel/preset-env'
        ]
    },

    webpack: {
        mode: isProd ? 'production' : 'development'
    },

    fonter: {
        formats: [ 'ttf', 'woff', 'eot', 'svg']
    }
}