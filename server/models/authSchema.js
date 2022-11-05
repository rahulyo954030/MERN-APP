const {model,Schema} = require("mongoose")


{/* <--------Login And Signup-------> */}
const authSchema = new Schema({
    username : String,
    email : String,
    password : String
})

const AUTH = model('authSchema',authSchema)
module.exports = AUTH
{/* <--------Login And Signup-------> */}





