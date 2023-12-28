import express from 'express';

import { generateAuthUrl, getNewToken } from '../controllers/google-auth-controller';

export default (router: express.Router) => {
    router.post('/google/generate-url', generateAuthUrl)
    router.post('/google/get-token', getNewToken)
}