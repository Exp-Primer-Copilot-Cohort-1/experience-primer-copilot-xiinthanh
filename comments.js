// Create web server
// Run server
// Create a new comment
// Get all comments
// Get a single comment
// Update a comment
// Delete a comment
// Run server
// Test with Postman

// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Run server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a new comment
const comments = [];
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send('Comment is added to the database');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  res.send(comment);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  comments[id] = newComment;
  res.send('Comment has been updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.send('Comment has been deleted');
});

// Run server
// Test with Postman
// Create a