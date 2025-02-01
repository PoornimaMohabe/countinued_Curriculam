const { UserModel } = require("../model/userModel");



const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new UserModel({
            name,
            email,
            password
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
        if (!email) {
            res.status(200).json({ msg: `User with email id ${email} is not found` })
        }
        else if (email) {
            const user = await UserModel.findOne({ email })
            if (user.password == password) {
                res.status(200).json({ msg: `User login successfull` })
            }
            else {
                res.status(200).json({ msg: `Wrong password` })
            }

        }
        else {
            res.status(200).json({ msg: `Wrong credentials` })
        }

    } catch (error) {
        res.status(500).json({ msg: error })
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