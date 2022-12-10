const BLOG  = require("../models/blogSchema")

const {Router} = require("express")

const blogRouter  = Router()

// <----------------------- Get Request for Blog-----------------------------> //

blogRouter.get("/", async(req,res)=>{
    // const { page = 1, limit = 12 } = req.query;
    // const blog = await BLOG.find().limit(limit * 1).skip((page - 1) * limit);
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
    const blog = await new BLOG(req.body)
    await blog.save((e, success)=>{
        try{
            return res.status(200).send({message : "Blog Added Successfully", blog: success["_doc"]}); 
            }
            catch(e){
                 return res.status(404).send({message : "Not Found", Error : e})
            }
    })   
})

module.exports = blogRouter
