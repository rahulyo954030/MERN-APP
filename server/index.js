const express  = require("express")
const connection  = require("./database/db")
const blogRouter = require("./routes/blog")
const productRouter = require("./routes/product")
const authRouter = require("./routes/Auth")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/blog",blogRouter)
app.use("/product",productRouter)
app.use("/auth",authRouter)


app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.listen(8080, async()=>{
    await connection
    console.log("server started at http://localhost:8080");
})