import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bookStore")
        console.log("mongoDB connected successfully")
    } catch (err) {
        console.log(err );

    }

}