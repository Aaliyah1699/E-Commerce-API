const User = require("../models/User");
const customError = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { custom } = require("joi");

const getAllUsers = async (req, res) => {
    const users = await User.find({ role: "user" }).select("-password");

    res.status(StatusCodes.OK).json({ users });
};
const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).select("-password");

    if (!user) {
        throw new customError.NotFoundError(`No user with id ${req.params.id}`);
    }
    res.status(StatusCodes.OK).json({ user });
};
const showCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ user: req.user });
};
const updateUser = async (req, res) => {
    res.send(req.body);
};
const updateUserPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        throw new CustomError.BadRequestError("Please provide both values");
    }

    const user = await User.findOne({ _id: req.user.userId });

    const isPasswordCorrect = await user.comparePassword(oldPassword);
    if (!isPasswordCorrect) {
        throw new customError.UnauthenticatedError("Invalid Credentials");
    }
    user.password = newPassword;

    await user.save();
    res.status(StatusCodes.OK).json({ msg: "Password Updated!" });
};

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
};
