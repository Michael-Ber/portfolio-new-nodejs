import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import mailerRouter from './routes/mailer.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT;

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/", mailerRouter);

async function start() {
    try {
        app.listen(PORT, () => console.log(`server listening port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();