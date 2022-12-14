const BLOG  = require("../models/blogSchema")
const path = require('path')
const {Router} = require("express")
const { v4: uuidv4 } = require('uuid');
const multer = require("multer")
const fs  = require("fs")
const blogRouter  = Router()

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './storage')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now()+'-'+Math.round(Math.random() *1E9)
//       cb(null, file.fieldname+'-'+uniqueSuffix+"."+"jpg")
//     }
//   })
  
//   const upload = multer({ storage, storage })

//Upload Setting

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './storage');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });



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
blogRouter.post("/", upload.single('image'),async(req,res)=>{
    
//    let Image = req.file.filename
    const {title, category, description} = req.body
    const blog =  new BLOG({
        image :req.file.filename
        // {
        //     data:fs.readFileSync("storage/"+req.file.filename),
        //     contentType:"image/png"
        // }
        ,
        title,
        category,
        description
    })
    // return res.send(blog)
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
