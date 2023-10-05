// Importing the required modules
const express = require("express");
const app = express();
const cors = require("cors");

// Setting up CORS options
const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true,
    allowedHeaders: ["sessionId, content-type"],
    exposedHeaders: ["sessionId"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};

app.use(cors(corsOptions));

// Loading environment variables from .env file
require('dotenv').config({ path: './.env' });

// Connecting to the database
require('./configs/database.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up routes from 'post.route' module
app.use("/", require("./routes/post.route"));

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
