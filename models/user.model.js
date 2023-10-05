const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserModel = new schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('user', UserModel);
