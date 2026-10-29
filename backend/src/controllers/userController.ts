import { Request, Response } from "express";
import mongoose from 'mongoose';
import { User } from "../models/User";


export async function getUsers(request: Request, response: Response) 
{
    try {
        const users = await User.find({});
        response.json(users);
    } catch (error) {
        response.status(500).json({error: "Failed to fetch users" });
    }
}

export async function createUser(request: Request, response: Response)
{
    try {
        const { email, username, password } = request.body;
        const newUser = await User.create({ email, username, password });
        response.status(201).json(newUser);
    } catch (error) {
        response.status(500).json({ error: "Failed to create user" });
  }
}