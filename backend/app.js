const express = require('express')
const cors = require('cors')
const router = express.Router();
require('dotenv').config();
const registerController = require('./controllers/userRegisterController')
const loginController = require('./controllers/userLoginController')
const authenticator = require('./middleware/checkAuth')

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
        app.post('/register', registerController.register);
        app.post('/verify', registerController.verify);
        app.post('/login', loginController.login);
        app.use(authenticator);
        // app.use("/api/auth", authRoutes);
        const server = app.listen(process.env.PORT, () => {
            console.log(`server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}

startApp();






