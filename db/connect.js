const mongoose = require("mongoose");

const connectDB = (url) => {
    return mongoose.connect(url);
};

modules.exports = connectDB;
