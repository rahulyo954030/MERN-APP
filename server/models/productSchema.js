const {model,Schema} =  require("mongoose")

const productSchema = new Schema({
    
    image : String,
    name : String,
    price: Number,
    catagory: {
        type : String, 
        emum : ["Electronic", "Clothes", "utensils", "Other"]
    }, 
    description: String,

}) 

const PRODUCT = model('productSchema',productSchema)
module.exports = PRODUCT