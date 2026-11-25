import { Request, Response } from "express";
import { User } from "../models/User.js";

export async function login(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return response.json("No record existed");
        }
        if (user.password === password) {
            return response.json("Success");
        }
        return response.json("The password is incorrect");
    } catch (error) {
        return response.status(500).json({ error: "Login failed" });
    }
}

export async function register(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
        const existing = await User.findOne({ email });
        if (existing) {
            return response.status(409).json({ error: "Email already registered" });
        }

        const user = await User.create({
            email,
            username: name,
            password,
        });
        return response.status(201).json(user);
    } catch (error) {
        return response.status(500).json({ error: "Failed to create user" });
    }
}
