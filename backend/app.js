const express = require("express")
const app = express()
const todoRoutes = require("./routes/todo")

// DB connection
const { connectToDb } = require("./config/db")
connectToDb()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/", todoRoutes)



module.exports = app;