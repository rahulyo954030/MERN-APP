const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb://localhost:27017/mern")

mongoose.connection.on("connected",()=>{
    console.log("connected to database successfully,");
})

mongoose.connection.on("error",(err)=>{
    console.log("Error while connection to database:" + err );
})

mongoose.connection.on("disconnected",(err)=>{
    console.log("Mongodb connection disconnected");
})