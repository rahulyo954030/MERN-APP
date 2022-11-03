const AUTH = require("../models/authSchema")
const {Router} =  require("express")
const { model } = require("mongoose")

const authRouter = Router()

authRouter.post("/signup",(req,res)=>{
    const auth = new AUTH(req.body)
    auth.save((e,success)=>{
        try{
            res.status(201).send({message: "Signup Successfully", auth: success["_doc"]})
        }
        catch(e){
            res.status(404).send({message: "Error Occured"})
        }
    })
})

module.exports =  authRouter