const userInfo=require('../models/user-info');
const educationInfo=require('../models/education');
const experienceInfo=require('../models/experience');
const sociallinkInfo=require('../models/social-link');
const projectInfo=require('../models/project');
module.exports.minihome=function(req,res){


    return res.render('user');

}
module.exports.usercreate=function(req,res){
    
    res.cookie('user_email',req.body.email);

    

    userInfo.create({
        name:req.body.name,
        email:req.body.email,
        description:req.body.description,
        phone:req.body.phone

    },function(err, user){
        if(err){
            console.log('error in populating user info db');
            return;
        }
        // res.cookie('user_email',req.body.email);
        console.log("homepage",req.cookies);
        return res.render('home', {
            user:user
        });
        
    });
   
    
}
module.exports.home=function(req,res){
    console.log("homepage",req.cookies);
    userInfo.findOne({email : req.cookies.user_email},function(err,user){
        if(err){
            console.log('error in sending user info to home');
            return;
        }
        return res.render('home',{
            user:user
        });
    });
    
}

module.exports.deleteinfo= function(req, res){
    userInfo.deleteMany({}, function(err){
        if(err){
            console.log('error in deleting user information');
            return;
        }
        console.log('deleted');
    })

    educationInfo.deleteMany({}, function(err){
        if(err){
            console.log('error in deleting user information');
            return;
        }
        console.log('deleted');
    })

    experienceInfo.deleteMany({}, function(err){
        if(err){
            console.log('error in deleting user information');
            return;
        }
        console.log('deleted');
    })

    sociallinkInfo.deleteMany({}, function(err){
        if(err){
            console.log('error in deleting user information');
            return;
        }
        console.log('deleted');
    })

    projectInfo.deleteMany({}, function(err){
        if(err){
            console.log('error in deleting user information');
            return;
        }
        console.log('deleted');
    })

    return res.redirect('/');
}