const build = require('rsuite-theme');
const outPutDir = 'assets/css';

build.importResources({
    paths: [
        'fonts/**/*.*'
    ],
    dist: outPutDir
});

build.palette({
    baseColor: '#a50006',
    src: 'css/rsuite.min.css',
    dist: `${outPutDir}/rsuite.min.css`
});
