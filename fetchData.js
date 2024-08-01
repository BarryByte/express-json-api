const axios = require('axios');
const fs = require('fs');

const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

axios.get(url)
    .then(response => {
        fs.writeFileSync('data.json', JSON.stringify(response.data));
        console.log('Data fetched and stored successfully.');
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
