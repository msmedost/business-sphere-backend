const mongoose = require("mongoose");




const connectDb = async () => {
    try {
        const URI = process.env.MONGOURI
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("Databse connection failed")
    }
}
module.exports = connectDb;




