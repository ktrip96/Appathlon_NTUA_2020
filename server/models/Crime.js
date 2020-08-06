const mongoose = require('mongoose');

const Schema = mongoose.Schema

const crimeSchema = new Schema({
    type: {
        type:String, 
        required:true
    }, 
    description: {
        type:String, 
        required:true
    }, 
    area: {
        type:String, 
        required:true
    },
    verified: {
        type:Boolean,
        required:true,
        default:false
    },
    date: {
        type:Date,
        default:Date.now
    }
})

const Crime = mongoose.model('Crime', crimeSchema)
module.exports = Crime
