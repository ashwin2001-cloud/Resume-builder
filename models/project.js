const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    link:{
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
const Project=mongoose.model('Project',projectSchema);
module.exports=Project;