import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    tags: {type: [String], required: true},
    imagePath: {type: String, required: true}, // path to image on server
    altText: {type: String, required: true},
    date: {type: Date, required: true},
    isPublic: {type: Boolean, required: true},
    eventPagePath: {type: String, required: false}
});

export const TeachEvent = mongoose.model('TeachEvent', eventSchema)