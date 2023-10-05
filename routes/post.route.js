// Importing the required 'express' module
const router = require("express").Router();

// Importing the necessary functions from the 'post.controller' module
const {
    loginUser,
    signUser,
    createdBook 
} = require("../controllers/post.controller");

// Route for user registration
router.post("/sign", signUser);

// Route for user login
router.post("/login", loginUser);

// Route for creating a new book
router.post("/newbook", createdBook);

// Exporting the router module
module.exports = router;
