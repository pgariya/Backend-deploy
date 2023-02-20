let mongoose= require("mongoose")

let PostSchema= mongoose.Schema({
    title : String,
    body : String,
    device : String,
    no_if_comments : Number,
})

let PostModel= mongoose.model("post", PostSchema)

module.exports={
    PostModel
}