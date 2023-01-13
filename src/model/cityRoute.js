const mongoose= require('mongoose')
const cityRouteSchema=new mongoose.Schema({
    cityName:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number
    },
    mediaUrl:{
        type:String
    }
},{timestamps:true})

module.exports= mongoose.model('city',cityRouteSchema)