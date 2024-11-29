import mongoose from "mongoose";

const connectDB =async(DATABASEURL)=>{
    const DB_OPTIONS={
        dbname: 'Portfolio'
    }
   const data=await mongoose.connect(DATABASEURL, DB_OPTIONS)
   if (data){
    console.log("connection Successfully");
    
   }
}

export default connectDB
