const express = require("express");
const userRouter = express.Router();
const {signin, signup} = require('../controllers/userController')

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

module.exports = userRouter;