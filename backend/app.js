const express = require('express')
const cors = require('cors')
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();
const userController = require('./controllers/usercontroller')

const app = express();
const authRoutes = require("./routes/auth");
const Food = require('./models/food.model');
const connectDB = require('./config/db');

async function startApp() {
    try {
        await connectDB();
        app.use(cors());
        app.use(express.json());

        app.get('/', (req, res) => {
            res.send("connected")
        });
        // Food.find({})
        //     .then(foodItems => {
        //         console.log('Food items:', foodItems);
        //     })
        //     .catch(error => {
        //         console.error('Error getting food items:', error);
        //     });
        // app.post('/register', userController.register);
        // app.use("/api/auth", authRoutes);
        const server = app.listen(process.env.PORT, () => {
            console.log(`server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}

startApp();






