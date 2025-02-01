require('dotenv').config()
const mongoose = require("mongoose")

const connetion = mongoose.connect(`mongodb://localhost:27017/NodeJwt`)
module.exports = {
    connetion
}