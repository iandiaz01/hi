const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3005;

// Middleware to parse the body of HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));

// A route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// A POST route to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received submission from ${name} with email ${email}`);
  res.send(`Thank you ${name}, we have received your form submission.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
