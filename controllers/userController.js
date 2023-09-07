const getAllUsers = async (req, res) => {
    res.send("all users");
};
const getSingleUser = async (req, res) => {
    res.send("single user");
};
const showCurrentUser = async (req, res) => {
    res.send("current user");
};
const updateUser = async (req, res) => {
    res.send(req.body);
};
const updateUserPassword = async (req, res) => {
    res.send(req.body);
};

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
};
