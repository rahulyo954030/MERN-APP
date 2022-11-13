const {model,Schema} =  require("mongoose")

const blogSchema = new Schema({
    title : String,
    image : String,
    catagory: {
        type : String, 
        emum : ["Entertainment", "Movie", "Sports", "Game", "Anime", "Adventure", "Action", "News", "Other"]
    }, 
    body: String,

}) 

const BLOG = model('blogSchema',blogSchema)
module.exports = BLOG