import { Request, Response } from "express";
import prisma from '../prisma.client.js'


export async function getUsers(request: Request, response: Response) 
{
    const allUsers = await prisma.user.findMany({});
    response.json(allUsers);
}

export async function createUser(request: Request, response: Response)
{
    const req_data = request.body;

    try {
        const user = await prisma.user.create({
            data: {
                email: req_data.email,
                username: req_data.username,
                password: req_data.password,
            },
        });
        response.status(201).json({
            message: "user created",
            email: user.email,
            username: user.username,
            password: user.password, 
        })
    } catch (error) {
        console.log("Failed to create user: ", error);
        response.status(500).json({ error: "failed to create user"});
    }
}