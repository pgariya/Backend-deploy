
let jwt= require("jsonwebtoken")
let authentication= (req,res,next)=>{

    let token= req.headers.authorization

    console.log("inside middle ware")

    if(token){
        jwt.verify(token, "masai", (err,decoded)=>{
            if(decoded){
                next()
            }else{
                res.send("Please Login")
            }
        })
    }else{
        res.send("token does not generated")
    }


}

module.exports={authentication}