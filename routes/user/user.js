
const express = require('express');
const userRouter = express.Router();

userRouter.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
  })
  
userRouter.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
})

module.exports = userRouter;
  