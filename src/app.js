require("dotenv").config();

const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://hayotbek:hayotbek@cluster0.pjvrqnh.mongodb.net/?retryWrites=true&w=majority")


const app = require("express")


const http = require("http").Server(app)




const userRoute = require("./routes/userRoute")

app.use('/', userRoute)


http.listen(3000, () => console.log(" -- Server running "))