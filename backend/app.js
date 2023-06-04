const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const authRoutes = require("./routes/auth");
const connectDB = require('./config/db');

async function startApp() {
    try {
        await connectDB();
        app.use(cors());
        app.use(express.json());

        app.get('/', (req, res) => {
            res.send("connected")
        });

        app.use("/api/auth", authRoutes);
        const server = app.listen(process.env.PORT, () => {
            console.log(`server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}

startApp();






