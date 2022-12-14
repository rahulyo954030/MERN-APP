const {model,Schema} =  require("mongoose")

const blogSchema = new Schema({
    
    image : String
    // { 
    //     data: Buffer, 
    //     contentType : String 
    // }
    ,
    title : { type:String},
    category: {
        required:true,
        type : String, 
        emum : ["Entertainment", "Movie", "Sports", "Game", "Anime", "Adventure", "Action", "News", "Other"]
    }, 
    description: { type:String}
 

},{
    timestamps:true
}) 

const BLOG = model('blogSchema',blogSchema)
module.exports = BLOG