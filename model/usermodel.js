import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        }
})

const usermodel = mongoose.model('User', userSchema);
export default usermodel;