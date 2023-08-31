require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// packages

// database
const connectDB = require("./db/connect");

// routers

// middleware

const port = process.env.PORT || 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(() => {
            console.log(port, `server listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();
