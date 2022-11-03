const PRODUCT =  require("../models/productSchema")

const {Router} = require("express")

const productRouter = Router()

// <----------------------- Post Request for Product-----------------------------> //
productRouter.post("/",async(req,res)=>{
    const product = await new PRODUCT(req.body)
    await  product.save((e,success)=>{
        try{
            res.status(200).send({message : "Product added Successfully", product: success["_doc"]})
        }
        catch(e){
            res.status(404).send({message : "Not Found", Error : e})
        }
    })
})

// <----------------------- Get Request for Product-----------------------------> //
productRouter.get("/",async(req,res)=>{
    const product = await PRODUCT.find()
        try{
            res.status(200).send(product)
        }
        catch(e){
            res.status(404).send({message : "Not Found", Error : e})
        }
    
})

module.exports =  productRouter