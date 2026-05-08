const asyncHandler = require ("express-async-handler");
const { registerUser, loginUser, currentUser } = require("../services/user.service");

const registerUserHandler = asyncHandler (async (req,res) => {
    const user = await registerUser (req.body);
    res.status(201).json(user)
})

const loginUserHandler = asyncHandler (async (req,res) => {
    const token = await loginUser (req.body);
    res.status(200).json(token);
})


const getUserHandler = async (req,res) => {
    const user = await currentUser (req.user.id);
    res.status(200).json(user);
};

module.exports = {registerUserHandler, loginUserHandler, getUserHandler};