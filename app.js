// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Currently not using fronted, so no need to serve static files
app.use(express.static("public"));

// Routes
const routes = require("./routes");
app.use("/api", routes);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
