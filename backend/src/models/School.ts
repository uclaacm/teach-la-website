import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
    name: {type: String, required: true},
    websiteLink: {type: String, required: true},
})

export const School = mongoose.model('School', schoolSchema);