const express = require("express");
const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config();
const jobRouter = require('./route/job')

const app = express();
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zjwpx5s.mongodb.net/`)
.then(() => {
    console.log("Database connection success");
})
.catch((err) => {
    console.log("Database connection failed",err);
})


app.use(express.json())
app.use("/api/v1/job/",jobRouter)


app.listen(5000,() => console.log("Server is started"))