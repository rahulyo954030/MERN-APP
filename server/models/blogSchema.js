const {model,Schema} =  require("mongoose")

const blogSchema = new Schema({
    
    image : String,
    title : String,
    catagory: {
        type : String, 
        emum : ["Entertainment", "Movie", "Sports", "Game", "Anime", "Adventure", "Action", "News", "Other"]
    }, 
    description: String,

}) 

const BLOG = model('blogSchema',blogSchema)
module.exports = BLOG