const  app = require('./app')

require('dotenv').config({path:"./config.env"})


// Mongodb DB connection
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed:", error);
    });


const PORT = process.env.PORT

app.listen(PORT, function (){
    console.log(`App Run ${ process.env.PORT}`)
})