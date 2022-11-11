const AUTH = require("../models/authSchema")
const {Router} =  require("express")
const jwt = require("jsonwebtoken")

const authRouter = Router()

{/* <------------------------Signup---------------------------> */}
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
{/* <------------------------Signup---------------------------> */}


{/* <------------------------Login---------------------------> */}
authRouter.post("/login", async(req,res)=>{
    const {_id,username, email, password} = req.body;
    const validUser = await AUTH.find({email, password});
    if(validUser.length <1 || !validUser ){
        return res.status(401).send({message: "Invalid Credentials"})
    }
    // token 1
    const token = jwt.sign({
        _id : _id,
        username : username,
        email:email,
    }, 
    "SECRET",{
        expiresIn: "1 hour"
    })
     // token 2
    const refreshToken = jwt.sign({
        username
    },
    "REFRESHPASSWORD",{
        expiresIn : "30days"
    })
    
    return res.send({message: "login successfully", token : token, refreshToken: refreshToken,_id })
})

authRouter.post("/newToken", (req,res)=>{
    const refreshToken = req.headers["authorization"].split(" ")[1];
    const validation = jwt.verify(refreshToken, "REFRESHPASSWORD");
    if(validation){
        const newPrimaryToken = jwt.sign({username},"SECRET",{
          expiresIn: "1 hour"  
        })
        return res.send({ token : newPrimaryToken })
    }
})

authRouter.get("/profile/:id", async(req,res)=>{
const {id} = req.params;
const token = req.headers["authorization"].split(" ")[1];
try{
    const verification = jwt.verify(token, "SECRET")
    if(verification){
        const user = await AUTH.findOne({_id: id});
        res.send({profile:"userprofile"})
    }
    else{
        return res.status(401).send("Unauthorized")
    }
}
catch{
    return res.status(401).send("Unauthorized")
}
})

{/* <------------------------Login---------------------------> */}





module.exports =  authRouter