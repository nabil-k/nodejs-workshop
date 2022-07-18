const express = require('express');
const bodyParser = require('body-parser')
const users = require('./routes/user/user');
const app = express();
const port = 3000;

// parse application/json
app.use(bodyParser.json())

// Root endpoints
app.get('/', (req, res) => {
  res.send('Hello World!').status(200);
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
  console.log(req.body);
});

// User endpoints
app.use('/user', users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
