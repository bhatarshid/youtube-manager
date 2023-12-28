import express from 'express';

import { createNewUserService, getUserByIdService } from '../services/user-service';

export const createNewUser = async (req: express.Request, res: express.Response) => {
    try {
        const user = await createNewUserService(req.body);

        res.statusCode = 201;
        return res.send({
            "message": "User created successfully",
            user
        });
    }
    catch (error) {
        res.statusCode = error.statusCode || 500;
        return res.send({ error: error.message || "Internal server error" });
    }
}

export const getUserById = async (req: express.Request, res: express.Response) => {
    try {
        const user = await getUserByIdService(req.params.id);

        res.statusCode = 200;
        return res.send({ user });
    }
    catch (error) {
        res.statusCode = 500;
        return res.send({ error: 'Internal server error' });
    }
}