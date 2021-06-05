const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.minihome);
router.get('/home',homeController.home);
router.post('/create',homeController.usercreate);
router.post('/goback',homeController.deleteinfo);
router.use('/home/resume',require('./resume'));

console.log('router is working');
module.exports=router;