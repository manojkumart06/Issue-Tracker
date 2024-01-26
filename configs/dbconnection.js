require('dotenv').config();
const mongoose = require("mongoose")

// Making Connection with mongoDB
const connectDb = async ()=>{
    try{
        //const connect = await mongoose.connect("mongodb://localhost/issue_tracker");
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected: ", connect.connection.name)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}
// Exporting the function 
module.exports = connectDb;
