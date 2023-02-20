let express= require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middleware/authentication");
const { PostRouter } = require("./routes/post.route");
const { UserRouter } = require("./routes/user.route");
require('dotenv').config()

let app= express();
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("home page")
})

app.use("/users", UserRouter)
app.use(authentication)
app.use("/posts", PostRouter)



app.listen(process.env.PORT,async()=>{
   try{
    await connection
    console.log(`server is running at ${process.env.PORT}`)
   }catch(err){
     console.log("server is not running")
   }
})



// {
//     "name": "Prakash",
//     "email":"p@gmail.com",
//     "gender":"Male",
//     "password":"prakash",
//     "age":24,
//     "city":"Hld"
    
//   }