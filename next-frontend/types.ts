import mongoose from "mongoose";

export interface IClass {
    _id?: string,
    name: string;
    shortTitle: string;
    blurb: string;
    imagePath: string;
    tags?: string[];
    classPagePath?: string;
    githubRepoLink?: string;
    teachers: mongoose.Types.ObjectId[];
    dates: string[];
    schools?: mongoose.Types.ObjectId[];
    isPublic: boolean;
}

export interface IUser {
    _id?: string,
    email: string;
    username: string;
    password: string;
}

export interface IEvent {
    _id?: string,
    name: string,
    category: string,
    descripton: string,
    tags: string[],
    imagePath: string,
    altText: string,
    date: string, 
    isPublic: boolean
    eventPagePath?: string
}

export interface ICalendarDayData {
    day: number,
    month: number, 
    year: number
    classes: IClass[],
    events: IEvent[]
}