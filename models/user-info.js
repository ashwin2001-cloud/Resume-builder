const mongoose=require('mongoose');

const infoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String

    },
    phone:{
        type:Number,
        unique:true
    },
    education:[{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Education'
    }],
    experience:[{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Experience'
    }],
    project:[{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Project'
    }],
    socialLink:[{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Social'
    }]


},
{timestamps:true}
);
const Info=mongoose.model('Info',infoSchema);
module.exports=Info;