# Planets Project

This project is part of the Complete Node.js Developer course by Zero To Mastery. The goal of the Planets Project is to process and analyze data from the Kepler space telescope to identify potentially habitable exoplanets based on specific criteria.

## Table of contents

- [Planets Project](#planets-project)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Key functionality](#key-functionality)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Output Example](#output-example)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

The task is to process a CSV file containing Kepler data and identify potentially habitable exoplanets based on:
1. Confirmed planetary status.
2. Solar flux conditions within a habitable range.
3. Planetary radius suitable for rocky planets.

### Key functionality

The project reads raw CSV data and applies filters to identify habitable planets.
- Filters include:
  - Confirmed planets: koi_disposition = "CONFIRMED".
  - Solar flux range: koi_insol between 0.36 and 1.11.
  - Planetary radius: koi_prad < 1.6 Earth radii.
- Outputs the names of habitable planets and their count.

### Links

- Solution URL: [GitHub](https://github.com/dantvi/planets-project)

## My process

### Built with

- Node.js: Core platform for file reading and data manipulation.
- CSV-Parse: For parsing CSV files into structured data.
- File System (fs): To read the raw data file.

### What I learned

This project enhanced my understanding of:
- Node.js Streams:
  - Efficiently processing large data files using streams.
- CSV Parsing:
  - Leveraging the csv-parse library to convert raw CSV files into usable data.
- Data Filtering:
  - Applying logical conditions to extract meaningful subsets of data.

Here is the key logic for filtering habitable planets:

```js
function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}
```

### Output Example

```bash
[ 'Kepler-442b', 'Kepler-452b', ... ]
8 habitable planets found
```

### Continued development

In future iterations, I plan to:
- Store filtered data in a NoSQL database (e.g., MongoDB) for further analysis.
- Visualize the planetary data using libraries like D3.js or Chart.js.
- Expand the filtering criteria to include additional attributes, such as orbital period.

### Useful resources

- [Node.js Streams Documentation](https://nodejs.org/api/stream.html) - Essential for understanding stream-based processing.
- [CSV-Parse Library](https://csv.js.org/parse/) - Comprehensive guide on using the csv-parse library.
- [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/) - Inspiration and context for working with exoplanet data.

## Author

- GitHub - [@dantvi](https://github.com/dantvi)
- LinkedIn - [@danieltving](https://www.linkedin.com/in/danieltving/)

## Acknowledgments

Special thanks to Zero To Mastery for providing this course and to the developers of csv-parse for simplifying CSV data handling in Node.js projects. A huge thank you to NASA for the Kepler mission data and the detailed CSV file used in this project.
