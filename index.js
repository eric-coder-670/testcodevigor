const express = require('express');
const app = express();

const cors = require("cors");

const corsOptions = {
  origin: 'http://localhost:3000',
  Credentials: true,
  alloedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionID"],
  method: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preFlightContinue: false,

};

app.use(cors(corsOptions));


require('dotenv').config({ path: './.env' });
const PORT = process.env.PORT || 3000;

require('./configs/database');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/post.route"));

app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
});
