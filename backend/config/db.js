const mongoose = require("mongoose")

exports.connectToDb = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((con) => {
        console.log(`DB is connected ${con.connection.host}`)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
}
