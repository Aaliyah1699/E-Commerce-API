const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createProduct = (req, res) => {
    res.send("create product");
};

const getAllProducts = (req, res) => {
    res.send("all products");
};

const getSingleProduct = (req, res) => {
    res.send("single product");
};

const updateProduct = (req, res) => {
    res.send("update product");
};

const deleteProduct = (req, res) => {
    res.send("delete product");
};

const uploadImage = (req, res) => {
    res.send("upload image");
};

module.exports = {
    getAllProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    uploadImage,
    deleteProduct,
};
