const config = require("../config/env");
const mongoose = require('mongoose');


const connectDB =  async () => {
    const connState = mongoose.connection.readyState;
    if(connState === 1){
        console.log("already connected")
        return;
    }

    try{
        await mongoose.connect(config.DB_URI)
        console.log("MongoDB connected")

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;