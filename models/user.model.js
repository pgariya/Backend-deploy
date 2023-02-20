let mongoose= require("mongoose")

let UserSchema= mongoose.Schema({
"name" : String,
"email" : String,
"gender" : String,
"password" : String,
"age" : Number,
"city" : String,
})

let UserModel= mongoose.model("user", UserSchema)

module.exports={
    UserModel
}