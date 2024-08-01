// routes/index.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to get all data
router.get('/data', dataController.getData);

// Route to filter data
router.get('/data/filter', dataController.filterData);

// Route to sort data
router.get('/data/sort', dataController.sortData);

module.exports = router;