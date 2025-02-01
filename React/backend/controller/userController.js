const { UserModel } = require("../model/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config()




const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
            name,
            email,
            password: hashedPassword
        })

        await user.save();
        res.status(200).json({ msg: "new user register successfully" })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: `User with email ${email} not found` });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Wrong password" });
        }

        const accessToken = jwt.sign(
            { user },
            process.env.secret_key, 
            { expiresIn: "15m" } 
        );

        const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.secret_key,
            { expiresIn: "7d" }
        );
      
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true, 
            secure: true, 
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });

        res.status(200).json({ msg: "Login successful", accessToken });

    } catch (error) {
        res.status(500).json({ msg: "Error logging in", error });
    }
}



//get all register user
const getalluser = async (req, res) => {

    try {
        const users = await UserModel.find({})
        res.status(200).json({ msg: "Get all user", users })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}



module.exports = {
    register,
    login,
    getalluser
}