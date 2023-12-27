import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './router'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(cors({
    credentials: true,
}));

app.use('/api', router());

app.listen(process.env.PORT, () => { 
    console.log(`Server is listening on ${process.env.PORT}`)
})