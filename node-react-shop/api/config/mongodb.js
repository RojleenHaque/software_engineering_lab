// //config/mongodb
// import mongoose from "mongoose";

// const connectDB= async ()=>{
//     mongoose.connection.on('connected',()=>
//     {
// console.log("Mongodb connected")
//     })

//     await mongoose.connect(`$process.env.MONGOOSEDB_URI`)
// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.MONGOOSEDB_URI);

    // Log when connected to MongoDB
    mongoose.connection.on('connected', () => {
      console.log("MongoDB connected successfully");
    });

    // Check for errors during connection
    mongoose.connection.on('error', (err) => {
      console.error("MongoDB connection error:", err);
    });

    // Check if the connection is open
    mongoose.connection.on('open', () => {
      console.log("MongoDB connection is open.");
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
