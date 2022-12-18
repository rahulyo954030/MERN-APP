const BLOG  = require("../models/blogSchema")
const path = require('path')
const {Router} = require("express")
const { v4: uuidv4 } = require('uuid');
const multer = require("multer")
const fs  = require("fs")
const blogRouter  = Router()




// <----------------------- Get Request for Blog-----------------------------> //

blogRouter.get("/",async(req,res)=>{
    
    const PAGE_SIZE = 12
    const page = parseInt(req.query.page || 0)
    const total = await BLOG.countDocuments()
    const blog = await BLOG.find().limit(PAGE_SIZE).skip(PAGE_SIZE*page)
    try{
        res.status(200).send({"totalPages": Math.ceil(total/PAGE_SIZE),"blog" : blog})
    }
    catch(e){
        res.status(404).send({message: "Not Found", Error:e})
    }
})



// <----------------------- Post Request for Product-----------------------------> //
blogRouter.post("/", async(req,res)=>{
    

    const {image,title, category, description} = req.body
    const blog =  new BLOG({
        image,
        title,
        category,
        description
    })

     blog.save((e, success)=>{
                try{
                    return res.status(200).send({message : "Blog Added Successfully", blog: success["_doc"]}); 
                    }
                    catch(e){
                         return res.status(404).send({message : "Not Found", Error : e})
                    }
            }) 
     
})



module.exports = blogRouter
