const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide valid email",
        },
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        min: 6,
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
});

module.exports = mongoose.model("User", UserSchema);
