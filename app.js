require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// packages

// database

// routers

// middleware

const port = process.env.PORT || 4000;
const start = async () => {
    try {
        app.listen(() => {
            console.log(port, `server listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();
