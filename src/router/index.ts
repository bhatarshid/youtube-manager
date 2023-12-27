import express from 'express';

import uploadVideoRouter from './upload-video-router';
import googleAuthRouter from './google-auth-router';

const router = express.Router();

export default (): express.Router => {
    uploadVideoRouter(router);
    googleAuthRouter(router)

    return router;
}