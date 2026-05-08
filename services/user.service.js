const bcrypt = require ("bcryptjs")
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.model");

const registerUser =  async (data) => {
    const { username, email, password } = data;
    if (!username || !email || !password) {
        throw new Error("All fields are mandatory!");
    }
    
    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
        throw new Error("User already registered!");
    }

    const user = await userModel.create({
    username,
    email,
    password, 
  });

    return{
    _id: user.id,
    username: user.username,
    email: user.email,
  };
}

const loginUser = async (data) => {
    const {email,password} = data;
    const user = await userModel.findOne ({email});
    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const accessToken = jwt.sign ({
        user: {
            username: user.username,
            email: user.email,
            id: user._id,
            },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
    )
    return { accessToken }
}

const currentUser =  async (userId) => {
    const user = await userModel.findById(userId).select("-password"); // omit password
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

module.exports = {registerUser, loginUser, currentUser}