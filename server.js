
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 5000;
const server = app.listen(port, listening);
function listening(){
    console.log(`running on localhost: ${port}`);
};

// GET route to send data
app.get('/all', (request, response) => {
  response.send(projectData);
});

app.post('/add', (request, response) => {
  projectData.date = request.body.date;
  projectData.temp = request.body.temp;
  projectData.feel = request.body.feel;
  response.send(projectData);
});
