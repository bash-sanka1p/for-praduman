const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/userdetails");

const contactSchema=mongoose.Schema({
   name:String,
   email:String,
   phone:Number,
   subject:String,
   message:String       
})


module.exports=mongoose.model("contact",contactSchema);