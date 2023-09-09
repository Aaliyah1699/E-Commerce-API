const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
    {
        rating: {
            type: Number,
        },
        title: {
            type: String,
        },
        comment: {
            type: String,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
