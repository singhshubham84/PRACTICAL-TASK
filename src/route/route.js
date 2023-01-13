const express=require('express')
const router=express.Router();
const cityController=require('../controller/cityController')

router.post('/cityroute',cityController.cityRoute)

router.get('/citylist',cityController.getCityRoute)

router.post('/userroute',cityController.userRoute)

router.get('/getuserroute',cityController.getUserRoute)

router.patch('/updateuser/:userId',cityController.updateUserRoute)

module.exports=router