const mongoose = require("mongoose");
require('dotenv').config()
module.exports=dbConfig

async function dbConfig(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected")
}

