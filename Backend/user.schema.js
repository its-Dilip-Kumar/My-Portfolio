const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
    },
    subject:{
        type:String,
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema);
module.exports=User;