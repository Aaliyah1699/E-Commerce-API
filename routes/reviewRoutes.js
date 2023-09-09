const express = require("express");
const router = express.Router();
const {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
} = require("../controllers/reviewController");
const {
    authenticateUser,
    authorizePermissions,
} = require("../middleware/authentication");

router
    .route("/")
    .get(getAllReviews)
    .get(getSingleReview)
    .post([authenticateUser, authorizePermissions("admin")], createReview);

router
    .route("/:id")
    .patch([authenticateUser, authorizePermissions("admin")], updateReview)
    .delete([authenticateUser, authorizePermissions("admin")], deleteReview);

module.exports = router;
