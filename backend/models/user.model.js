// import e from "express";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true,
    },
    profile:{
        bio:{type: String},
        skills: [{ type: String }],
        resume: { type: String }, // URL or path to the resume file
        resumeOriginalName: { type: String }, // Original name of the resume file
        company:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}, // Reference to the Company model
        profilePhoto:{type:String,default:""}
    },
},{timestamps: true});
export default mongoose.model('User', userSchema);