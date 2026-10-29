import mongoose from 'mongoose';
import { User  } from './User';
import { School } from './School';


// including this to fix some Typescript error I was getting

export interface IClass {
    name: string;
    shortTitle: string;
    blurb: string;
    imagePath: string;
    tags?: string[];
    classPagePath?: string;
    githubRepoLink?: string;
    teachers: mongoose.Types.ObjectId[];
    dates: Date[];
    schools?: mongoose.Types.ObjectId[];
    isPublic: boolean;
}

const classSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    shortTitle: {type: String, required: true},
    blurb: {type: String, required: true},
    imagePath: {type: String, required: true}, // stores the path on the server to the image for the class
    tags: {type: [String], required: false},
    classPagePath: {type: String, required: false},
    githubRepoLink: {type: String, required: false},
    teachers: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    dates: {type: [Date], required: true},
    schools: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'School'},
    isPublic: {type: Boolean, required: true}
})


export const Class = mongoose.model<IClass>('Class', classSchema)