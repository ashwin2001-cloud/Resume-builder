const userInfo=require('../models/user-info');
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

    },function(err){
        if(err){
            console.log('error in populating user info db');
            return;
        }
        // res.cookie('user_email',req.body.email);
        console.log("homepage",req.cookies);
        
    });
   
    return res.redirect('/home');
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