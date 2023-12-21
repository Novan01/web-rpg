import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 3001;
const mongoURI = process.env.MONGO_URI;

const app = express();

//GET method - (request, response)
app.get('/', (req, res) => {
    console.log(req);
    return res.send('Hello World');
});


//basic connetion to the database
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Database connected');
        //PORT listen
        app.listen(PORT, () => { 
        console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    }); 