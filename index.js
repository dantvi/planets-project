const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

// Checks if the planet is confirmed as well as light conditions and planet size
function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

// Reading raw data from the file and parsing the data to an array with objects
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found`);
    });

