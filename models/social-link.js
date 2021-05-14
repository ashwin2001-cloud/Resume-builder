const mongoose=require('mongoose');

const socialLink=new mongoose.Schema({
    link:{
        type:String

    },
    name:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Info'
    }



},{
    timestamps:true
});
const Social=mongoose.model("Social",socialLink);
module.exports=Social;