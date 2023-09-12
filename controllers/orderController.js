const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Order = require("../models/Order");

const createOrder = async (req, res) => {
    res.send("create order");
};

const getAllOrders = async (req, res) => {
    res.send("get all orders");
};

const getSingleOrder = async (req, res) => {
    res.send("single order");
};

const getCurrentUserOrders = async (req, res) => {
    res.send("current user orders");
};

const updateOrder = async (req, res) => {
    res.send("update order");
};

module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    updateOrder,
};
