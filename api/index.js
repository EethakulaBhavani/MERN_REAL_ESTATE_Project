import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

const app=express();

app.listen(2105,()=>{
    console.log('Server is running on port 2105');
});

app.use('/api/user',userRouter);