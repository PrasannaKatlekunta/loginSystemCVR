const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
const indexRoutes = require("./controller/indexRoutes")

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true // Allow cookies to be sent along with the request
}));
app.use(morgan('dev'))


mongoose.connect('mongodb://127.0.0.1:27017/attendance')
app.listen(3001, () => console.log("Server is Running"))
app.use("/", indexRoutes)