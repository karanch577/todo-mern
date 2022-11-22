const mongoose = require("mongoose")

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((con) => {
        console.log(`DB is connected ${con.connection.host}`)
    })
}

module.exports = connectToDb;