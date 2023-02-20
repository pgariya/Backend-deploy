let express= require("express")
const { UserModel } = require("../models/user.model")
let bcrypt= require("bcrypt")
let jwt=require("jsonwebtoken")

let UserRouter= express.Router()


UserRouter.post("/register",async(req,res)=>{
   let {name,email,password,gender,age,city}= req.body;
  try{
    bcrypt.hash(password, 5, async(err, hash) =>{
        // Store hash in your password DB.
if(err){
    res.send("error in registering")
}else{
    let member= new UserModel({name,email,password:hash,gender,age,city})
    await member.save()
    res.send("register successfully")
}
    });
    
  }catch(err){
    res.send("error in Registering")
  }

   
})


UserRouter.post("/login",async(req,res)=>{
    let {email,password}= req.body;
   try{
     let member= await UserModel.find({email})

     if(member.length>0){

        bcrypt.compare(password, member[0].password, function(err, result) {
            // result == true
            if(result){
              let token= jwt.sign({co:"js"}, "masai")
              res.send({"msg":"Login Successfull", token:token})
            }else{
              res.send("check credintials")

            }
        });
     }else{
        res.send("wrong Credential")
     }
     
   }catch(err){
     res.send("error in Registering")
   }
 
    
 })





module.exports={
    UserRouter
}