const BLOG  = require("../models/blogSchema")

const {Router} = require("express")
const multer = require("multer")
// const GridFsStorage = require("multer-gridfs-storage");
const blogRouter  = Router()

const image = multer({
      
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
       return cb(new Error("This is not a correct form of the file"))
       cb(undefined,true)
    }
})



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
blogRouter.post("/", image.single("image"), async(req,res)=>{
    
    if (req.file === undefined) return res.send("you must select a file.")
    else{
        const imgUrl = req.file.buffer
    const image = imgUrl
    console.log(image);
    const {title, category, description} = req.body
    const blog =  new BLOG({
        image,
        title,
        category,
        description
    })
    // return res.send(blog)
    await blog.save((e, success)=>{
                try{
                    return res.status(200).send({message : "Blog Added Successfully", blog: success["_doc"]}); 
                    }
                    catch(e){
                         return res.status(404).send({message : "Not Found", Error : e})
                    }
            }) 
    }
    

    

//     const { image,title, catagory, description} = req.body

   
//     const blog = await new BLOG({
//         image:imgUrl,
//         title,
//         catagory,
//         description
//     })
//    await blog.save((e, success)=>{
//         try{
//             return res.status(200).send({message : "Blog Added Successfully", blog: success["_doc"]}); 
//             }
//             catch(e){
//                  return res.status(404).send({message : "Not Found", Error : e})
//             }
//     })   
})

module.exports = blogRouter
