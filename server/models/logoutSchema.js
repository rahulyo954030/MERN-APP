const {model,Schema} = require("mongoose")

{/* <--------Logout-------> */}
const logoutSchema = new Schema({
    email : String,
    password : String
})
const LOGOUT = model("logoutSchema", logoutSchema)

module.exports = LOGOUT
{/* <--------Logout-------> */}