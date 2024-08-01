// controllers/dataController.js
const axios = require('axios');
const DATA_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

let dataCache = null;

const fetchData = async () => {
  try {
    const response = await axios.get(DATA_URL);
    dataCache = response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

exports.getData = async (req, res) => {
  if (!dataCache) {
    try {
      await fetchData();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  res.json(dataCache);
};

exports.filterData = async (req, res) => {
  if (!dataCache) {
    try {
      await fetchData();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  const { filter } = req.query;
  const filteredData = dataCache.filter(item => item.language === filter);
  res.json(filteredData);
};

exports.sortData = async (req, res) => {
  if (!dataCache) {
    try {
      await fetchData();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  const { sortOrder } = req.query;
  const sortedData = [...dataCache].sort((a, b) => {
    const [field, order] = sortOrder.split('_');
    const aValue = (a[field] || '').toString();
    const bValue = (b[field] || '').toString();

    if (order === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
  res.json(sortedData);
};
