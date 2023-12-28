import express from 'express';

import uploadVideoRouter from './upload-video-router';
import googleAuthRouter from './google-auth-router';
import userRouter from './user-router';

const router = express.Router();

export default (): express.Router => {
    uploadVideoRouter(router);
    googleAuthRouter(router);
    userRouter(router);

    return router;
}