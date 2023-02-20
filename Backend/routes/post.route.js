let express= require("express")
const { PostModel } = require("../models/post.model")

let PostRouter= express.Router()


PostRouter.get("/", (req,res)=>{

    res.send("Post succesccfully")
})

PostRouter.post("/create", async(req,res)=>{
  let payload= req.body;
 try{
    let post = new PostModel(payload)
    await post.save()
      res.send("Post successfully")
 }catch(err){
    res.send("does not able to post")
 }
})


PostRouter.delete("/delete/:id", async(req,res)=>{
    let postid= req.params.id;

    try{
        await PostModel.findByIdAndDelete({_id:postid})
    res.send("Successfully deleted")
    }catch(err){
        res.send("does not able to delete")
    }

})


PostRouter.patch("/update/:id", async(req,res)=>{
    let postid= req.params.id;
   let payload= req.body
    try{
        await PostModel.findByIdAndUpdate({_id:postid}, payload)
    res.send("Successfully Updated")
    }catch(err){
        res.send("does not able to delete")
    }

})





module.exports={PostRouter}