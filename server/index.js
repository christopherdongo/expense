const app = require('./app')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/dbs')

//conexion de mongodb
 connectDB();
app.listen( PORT ,()=>{
    console.log("SERVER IS RUNNING ON", PORT)
})

