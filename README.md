
# Express JSON API

## Project Overview

This project is a Node.js backend API that fetches, filters, and sorts JSON data from a remote source. It demonstrates the use of Express.js, Axios for HTTP requests, and basic data manipulation techniques. The API can be tested using tools like Postman.

## Features

- Fetch data from a remote JSON source
- Filter data based on a specified criterion
- Sort data by different fields
- Cache data to reduce the number of external requests

## Screencasts

- Fetching the data from the source


https://github.com/user-attachments/assets/e45f6eb8-feac-4c6a-a6fa-b52444f2e039

- Filtering data
  

https://github.com/user-attachments/assets/59ecf9de-f762-4822-92f4-e062e12308d1


- Sorting data by different fields


https://github.com/user-attachments/assets/2d0035ba-2195-49fb-8719-13702416c21f



- 

## Setup and Installation

Follow these steps to run this project on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository

1. Open your terminal or command prompt.
2. Clone the repository using the following command:

   ```bash
   git clone https://github.com/BarryByte/express-json-api.git
   ```
   
3. Navigate into the project directory:

   ```bash
   cd express-json-api
   ```

### Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

### One-time fetching the JSON data from URL

```bash
node scripts/init.js
```

### Run the Application

1. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

### Test the Endpoints

You can test the API endpoints using [Postman](https://www.postman.com/) or any other API client.

- **Fetch All Data**:
  - **Method**: GET
  - **URL**: `http://localhost:3000/api/data`

- **Filter Data**:
  - **Method**: GET
  - **URL**: `http://localhost:3000/api/data/filter?filter=<language>`
  - **Query Parameter**: `filter` (e.g., `Hindi`)

- **Sort Data**:
  - **Method**: GET
  - **URL**: `http://localhost:3000/api/data/sort?sortOrder=<field>_<asc|desc>`
  - **Query Parameter**: `sortOrder` (e.g., `name_asc`)

## Code Structure

- **`app.js`**: Entry point for the application, sets up Express server and middleware.
- **`controllers/dataController.js`**: Contains logic for fetching, filtering, and sorting data.
- **`routes/index.js`**: Defines the API routes.
- **`scripts/init.js`**: Script for fetching and saving data to a local file (if applicable).

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.


