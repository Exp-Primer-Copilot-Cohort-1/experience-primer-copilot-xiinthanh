// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Set up a route to listen on http://localhost:3000/comments
app.get('/comments', (req, res) => {
    res.send('Comments route');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Path: index.js
// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Set up a route to listen on http://localhost:3000
app.get('/', (req, res) => {
    res.send('Home route');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});