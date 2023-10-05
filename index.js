const express = require("express");
const app = express();
const cors = require("cors");



const corsOptions = {
    origin: ["http://loclahost:5173"],
    Credentials: true,
    alloedHeaders: ["sessionsId,content-type"],
    exposedHeaders: "sessionID",
    method: "POST,GET,DELETE,PUT,PATCH,HEAD",
    preFlightContinue: false,
};

app.use(cors(corsOptions));

require('dotenv').config({ path: './.env' });

require('./configs/database.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/post.route"));

app.listen(process.env.PORT, () => {
    console.log(`server start port ${process.env.PORT}`);
})