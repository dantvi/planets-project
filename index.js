const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

// Reading raw data from the file and parsing the data to an array with objects
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
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

