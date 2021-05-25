const mongoose=require('mongoose');

const educationSchema=new mongoose.Schema({
    degree:{
        type:String,
        required:true
    },
    institute:{
        type:String,
        required:true
    },
    
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Info'
    }
},{
    timestamps:true
});
const Education=mongoose.model('Education',educationSchema);
module.exports=Education;