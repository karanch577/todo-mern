const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const todoRoutes = require("./routes/todo")
const taskRoutes = require("./routes/task")
const userRoutes = require("./routes/user")

// DB connection
const { connectToDb } = require("./config/db")
connectToDb()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser())
app.use(cors())

// routes
app.get("/", (req, res) => {
    res.send("server is working")
})
app.use("/", todoRoutes)
app.use("/", taskRoutes)
app.use("/user", userRoutes)



module.exports = app;