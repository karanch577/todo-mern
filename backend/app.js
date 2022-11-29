const express = require("express")
const app = express()
const todoRoutes = require("./routes/todo")
const taskRoutes = require("./routes/task")

// DB connection
const { connectToDb } = require("./config/db")
connectToDb()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/", todoRoutes)
app.use("/", taskRoutes)



module.exports = app;