const express = require("express")
const app = express()



// DB connection
const { connectToDb } = require("./config/db")
connectToDb()

module.exports = app;