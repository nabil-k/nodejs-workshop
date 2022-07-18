
const express = require('express');
const userRouter = express.Router();

// url: http://localhost:3000/user
userRouter.put('/', (req, res) => {
    res.send('Got a PUT request at /user');
});

// url: http://localhost:3000/user/inventory
userRouter.delete('/inventory', (req, res) => {
  res.send('Got a DELETE request at /user/inventory');
});

module.exports = userRouter;
  