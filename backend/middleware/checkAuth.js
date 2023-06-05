const jwt = require('jsonwebtoken')
require('dotenv').config();
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = {
            username: decodedToken.username,
            userId: decodedToken.userId
        };
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};