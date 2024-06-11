const express = require("express");
const routerUser = express.Router();
const userController = require("../controllers/userController");

// GET USERS - http://localhost:3050/users
routerUser.get("/", userController.findAllUsers);

//ADD A USER - http://localhost:3050/users/register
routerUser.post("/register", userController.addUser);

//FIND ALL USERS - http://localhost:3050/users/allusers
routerUser.get("/allusers", userController.findAllUsers);

module.exports = routerUser;
