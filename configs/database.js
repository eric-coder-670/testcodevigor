const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connect to server"))
    .catch((err) => console.log("not connect", err));