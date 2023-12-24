import express from 'express'

import { generateAuthUrlService, getNewTokenService } from '../services/google-auth-service'

export const generateAuthUrl = async (req: express.Request, res: express.Response) => {
    try {
        const authUrl = await generateAuthUrlService();
        res.statusCode = 200
        return res.send({
            message: 'Auth URL generated successfully.',
            url: authUrl
        })
    }
    catch (error) {
        console.log(error)
        res.statusCode = 500;
        return res.send({ error: 'Internal server error'})
    }
}

export const getNewToken = async (req: express.Request, res: express.Response) => {
    try {
        if(!req.query.code){
            throw new Error('Please provide the code')
        }
        const code = req.query.code
        const { oauth2Client, token } = await getNewTokenService(code)

        res.statusCode = 200;
        return res.send({ oauth2Client, token });
    }
    catch (error) {
        console.log(error)
        res.statusCode = 500
        return res.send({ error: 'Internal server error'})
    }
}