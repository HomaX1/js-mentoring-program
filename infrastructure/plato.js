/* global require */
const plato = require('plato');
const files = [
    './index.js'
];
const outputDir = './report';
const options = {
    title: 'My start page',
    eslint: './.eslint.js'
};

let callback = function (report){
    const reportSection = document.querySelector('.report');

    reportSection.insertAdjacentHTML('afterBegin',
        `<p>Total eslint: ${options.eslint}</p>`);
// once done the analysis,
// execute this
};

plato.inspect(files, outputDir, options, callback);

//you can use the reports in the callback.
// function callback(reports) {
//     let overview = plato.getOverviewReport(reports);
//
//     let { total, average } = overview.summary;
//
//     let output = `total
//     ----------------------
//     eslint: ${total.eslint}
//     sloc: ${total.sloc}
//     maintainability: ${total.maintainability}
//     average
//     ----------------------
//     eslint: ${average.eslint}
//     sloc: ${average.sloc}
//     maintainability: ${average.maintainability}`;
//
//     console.log(output);
// }

//usage is plato.inspect
// plato.inspect(src, outputDir, platoArgs, callback);