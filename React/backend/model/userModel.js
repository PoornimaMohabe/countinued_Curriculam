const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})


const UserModel = mongoose.model("NodeJwt", userschema)

module.exports = {
    UserModel
}