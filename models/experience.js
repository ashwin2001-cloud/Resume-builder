const mongoose=require('mongoose');

const experienceSchema=new mongoose.Schema({
    organisation:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    designation:{
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
const Experience=mongoose.model('Experience',experienceSchema);
module.exports=Experience;