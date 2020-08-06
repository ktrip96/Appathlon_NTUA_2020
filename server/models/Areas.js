const mongoose = require('mongoose');

const Schema = mongoose.Schema

const areaSchema = new Schema({
    name: {
        type:String, 
        required:true
    }, 
    validCrimes: {
        type:Number,
        default: 0
    },
    postedCrimes:{
        type: Number,
        default: 0
    }
    // date: {
    //     type:Date,
    //     default:Date.now
    // }
})

const Area = mongoose.model('Area', areaSchema)
module.exports = Area
