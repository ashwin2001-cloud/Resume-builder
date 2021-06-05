const express=require('express');
const router=express.Router();
const resumeController=require('../controllers/resume_controller');


router.post('/create',resumeController.create);
router.get('/',resumeController.resumePage);
console.log('resume router is working');
module.exports=router;