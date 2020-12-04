const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrackerSchema = Schema({
   text:{
       type: String,
       trim: true,
       required: [true, 'Please add some text']
   },
   amount: {
       type:Number,
       required:[true, 'Please add a positive or negative number']
   },
   createdAt:{
       type:Date,
       default: Date.now
   }
})

module.exports = mongoose.model('Tracker', TrackerSchema)