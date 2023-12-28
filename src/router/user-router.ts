import express from 'express';

import { createNewUser, getUserById } from '../controllers/user-controller';

export default (router: express.Router) => {
    router.post('/user', createNewUser);
    router.get('/user/:id', getUserById);
}