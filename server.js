const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8001;

// loading the dummy data
let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// API endpoint to serve the data
app.get('/api/data', (req, res) => {
    let filteredData = [...data];

    if (req.query.filter) {
        filteredData = filteredData.filter(item => item.name.includes(req.query.filter));
    }

    if (req.query.sort) {
        const sortField = req.query.sort;
        filteredData.sort((a, b) => (a[sortField] > b[sortField]) ? 1 : -1);
    }

    res.json(filteredData);
});

// port is listening on "PORT"
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
