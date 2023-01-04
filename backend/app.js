const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const todoRoutes = require("./routes/todo")
const taskRoutes = require("./routes/task")
const userRoutes = require("./routes/user")
const path = require("path")

// DB connection
const { connectToDb } = require("./config/db")
connectToDb()

const corsConfig = {
    origin: true,
    credentials: true,
  };
  
  app.use(cors(corsConfig));
  app.options('*', cors(corsConfig))
// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser())

// routes
app.use("/api", todoRoutes)
app.use("/api", taskRoutes)
app.use("/api/user", userRoutes)

// serving the frontend

app.use(express.static(path.join(__dirname, './build')))
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./build/index.html"),
    function(err) {
      res.status(500).send(err)
    }
  )
})

module.exports = app;