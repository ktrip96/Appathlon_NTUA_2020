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
    },
    lang: Number,
    long: Number
})

const Area = mongoose.model('Area', areaSchema)
module.exports = Area
