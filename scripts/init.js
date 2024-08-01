const axios = require("axios");
const fs = require("fs");
const DATA_URL = "https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json";
const DATA_FILE = "data.json";

const fetchData = async () => {
	try {
		const response = await axios.get(DATA_URL);
		fs.writeFileSync(DATA_FILE, JSON.stringify(response.data, null, 2));
		console.log("Data saved to data.json");
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

fetchData();
