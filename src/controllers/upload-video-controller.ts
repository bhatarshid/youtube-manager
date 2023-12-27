import express from 'express';

import { uploadVideoOnYoutubeService } from '../services/upload-video-service'


export const uploadVideoOnYoutube = async (req: express.Request, res: express.Response) => {
    try {
        const response = await uploadVideoOnYoutubeService(req.body, req.file.buffer);
        return res.send(response);
    }
    catch (error) {
        res.statusCode = error.statusCode || 500
        return res.send({
            error: error.message || 'Internal server error'
        })
    }
}