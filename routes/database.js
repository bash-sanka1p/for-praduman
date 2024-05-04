const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/userdetails");
const plm=require("passport-local-mongoose");
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String ,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:true
    } ] 
})

userSchema.plugin(plm)
module.exports=mongoose.model("user",userSchema);