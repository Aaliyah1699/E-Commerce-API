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
const { getSingleProductReviews } = require("../controllers/reviewController");

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

router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
