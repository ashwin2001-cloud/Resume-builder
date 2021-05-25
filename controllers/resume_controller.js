const userInfo=require('../models/user-info');
const Education=require('../models/education');
const Experience=require('../models/experience');
const Project=require('../models/project');
const Social=require('../models/social-link');


module.exports.create=function(req,res){
    //console.log(req.params);
    console.log(req.body);
    // console.log(req.body.phone);
    // console.log(req.params.phone);
    console.log(req.body.curuser);
    res.cookie('user_id',req.body.curuser);
    
    userInfo.findById(req.body.curuser,function(err,current_user){
        if(err){
             console.log('error in fetching user info ');
             return;
         }
         if(current_user){
             console.log(current_user);
            Education.create({
                degree:req.body.degree,
                institute:req.body.institute,
                startDate:req.body.edstart,
                endDate:req.body.edend,
                user:req.body.curuser
            },function(err,userEducation){
                if(err){
                    console.log("error in populating education DB");
                    return;
                }
                console.log('education added');
                current_user.education.push(userEducation);
                
                
                
            });
            Experience.create({
                organisation:req.body.organisation,
                description:req.body.exdescription,
                designation:req.body.designation,
                startDate:req.body.exstart,
                endDate:req.body.exend,
                user:req.body.curuser
            },function(err,userExperience){
                if(err){
                    console.log("error in populating experience DB");
                    return;
                }
                console.log('experience added');
                current_user.experience.push(userExperience);
                
                
                
                
            });
            Social.create({
                link:req.body.userlink,
                name:req.body.linktitle,
                user:req.body.curuser
            },function(err,userLink){
                if(err){
                    console.log("error in populating the links");
                    return;

                }
                current_user.socialLink.push(userLink);
                
                
            });
            Project.create({
                title:req.body.title,
                description:req.body.projectdescription,
                link:req.body.link,
                user:req.body.curuser
                
            },function(err,userProject){
                if(err){
                    console.log("error in populating project DB");
                    return;
                }
                current_user.project.push(userProject);
                current_user.save();
                
                
            
            });
            
            
            
            
            

         }
     });
     

    return res.redirect('/home/resume');
}
module.exports.resumePage=function(req,res){
    console.log("resumepage",req.cookies);
    // userInfo.findOne({email:req.cookies.user_email},function(err,user){
    //     if(err){
    //         console.log('error in sending user info to home');
    //         return;
    //     }
    //     return res.render('resume',{
    //         user:user
    //     });
    // });
    userInfo.findOne({email:req.cookies.user_email})
    .populate('education')
    .populate('experience')
    .populate('socialLink')
    .populate('project')
    .exec(function(err,user){
        if(err){
            console.log("error in displaying info");
            return;
        }
        console.log(user);
        return res.render('resume',{
            user:user
        });
    })
    

}