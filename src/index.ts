import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/sample', (req, res) => {
    res.send('API is up')
})

app.listen(process.env.PORT, () => { 
    console.log(`Server is listening on ${process.env.PORT}`)
})