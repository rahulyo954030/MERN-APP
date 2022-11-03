const {model,Schema} = require("mongoose")

const authSchema = new Schema({
    username : String,
    email : String,
    password : String
})

const AUTH = model('authSchema',authSchema)

module.exports = AUTH

