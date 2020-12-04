const mongoose = require('mongoose')
const {MONGOURL} = require('./keys')
mongoose.set("useFindAndModify", false)
const connectDB = async ()=>{
    try{
      const conn = await mongoose.connect(MONGOURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
      console.log(`mongoooDB connected ${conn.connection.host}`.cyan.underline.bold)
    }
    catch(err){
         if(err){
             console.log(`ERROR: ${err.message}`.red)
             process.exit(1)
         }
    }
}
module.exports = connectDB
