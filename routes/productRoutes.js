const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    uploadImage,
    deleteProduct,
} = require("../controllers/productController");
const {
    authenticateUser,
    authorizePermissions,
} = require("../middleware/authentication");

router
    .route("/")
    .get(getAllProducts)
    .post([authenticateUser, authorizePermissions("admin")], createProduct);

router
    .route("/:id")
    .get(getSingleProduct)
    .patch([authenticateUser, authorizePermissions("admin")], updateProduct)
    .delete([authenticateUser, authorizePermissions("admin")], deleteProduct);

router
    .route("/uploadImage")
    .post([authenticateUser, authorizePermissions("admin")], uploadImage);

module.exports = router;
