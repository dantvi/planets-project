const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('kepler_data.csv')
    // Reading raw data from the file, the data needs to be parsed
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log('resultsArray:', results);
        console.log('done');
    });
