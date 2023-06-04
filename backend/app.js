const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });

const server = app.listen(process.env.PORT, ()=>{
    console.log(`server listening on port ${process.env.PORT}`);
})



