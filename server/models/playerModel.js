import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Represents Player collection in MongoDB  
export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,  
        required: true
    },
    phone: {
        type: Number
    },
    iscoach: {
        type: Boolean,
        default: false
    },
    team: {
        type: String
    },
    image: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});