const mongoose = require('mongoose');

const Schema = mongoose.Schema

const crimeSchema = new Schema({
    type: {
        type:String, 
        required:true
    }, 
    description: String, 
    // date: {
    //     type:Date,
    //     default:Date.now
    // }
})

const Crime = mongoose.model('Crime', crimeSchema)
module.exports = Crime
