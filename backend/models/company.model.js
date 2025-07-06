import mongoose from 'mongoose';
const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String,
        
    },
    location: {
        type: String,
        required: true
    },
    logo: {
        type: String, // URL or path to the logo file
        default: ""
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{ timestamps: true });