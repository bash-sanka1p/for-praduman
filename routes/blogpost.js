const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/userdetails");

const postSchema=mongoose.Schema({
    blogtext:String,
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
 }]
       
})


module.exports=mongoose.model("posts",postSchema);