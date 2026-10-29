import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Class } from '../models/Class';
import { User } from '../models/User';


export async function getClasses(request: Request, response: Response)
{
    try {
        const classes = await Class.find({});
        response.json(classes);
    } catch (error) {
        response.status(500).json({error})
    }
}

export async function createClass(request: Request, response: Response) {
    try {
        const teachers = request.body.teachers;
        // find the users that correspond to the emails passed in
        const foundUsers = await User.find({
            email: { $in: teachers }
        });

        if (foundUsers.length !== teachers.length) {
            return response.status(404).json({error: "One or more teacher emails do not exist in the database"});
        }

        const teacherIds = foundUsers.map(user => user.id);

        const classData = {
            ...request.body,
            teachers: teacherIds
        }

        const newClass = await Class.create(classData);
        response.status(201).json(newClass);
    } catch (error) {
        response.status(500).json({error});
    }
}