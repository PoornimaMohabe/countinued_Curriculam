const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
})


const UserModel = mongoose.model("users", userschema)

module.exports = {
    UserModel
}