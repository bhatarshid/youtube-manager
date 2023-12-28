import express from 'express';
import multer from 'multer'

import { uploadVideoOnYoutube } from '../controllers/upload-video-controller';

const upload = multer({ storage: multer.memoryStorage() })

export default (router: express.Router) => {
    router.post('/youtube/upload', upload.single('video'), uploadVideoOnYoutube);
}