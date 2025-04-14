import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
   _id: String,
   name: String,
   number: String,
   startDate: Date,       //adding dates to match actual courses 
   endDate: Date, 
   department: String,
   credits: Number,        
   description: String,
 },
 { collection: "courses" }
);
export default courseSchema;

