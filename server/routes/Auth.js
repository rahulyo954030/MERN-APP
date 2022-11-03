const AUTH = require("../models/authSchema")
const {Router} =  require("express")
const jwt = require("jsonwebtoken")

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

authRouter.post("/login", async(req,res)=>{
    const {_id, username, email, password} =  req.body
    const validuser = await AUTH.find({_id, username, password})
    if(validuser==null){
        return res.send({message : "User Not Valid"})
    }

    const token =jwt.sign(
        {_id, username,email},
        "SECRET",
        {expiresIn:"1 hour"}
    )

    const refreshToken =jwt.sign(
        {_id, username},
        "REFRESHPASSWORD",
        {expiresIn:"30 days"}
    )
   return res.status(200).send({message: "Login Successfully", token: token, refreshToken: refreshToken})
})


module.exports =  authRouter