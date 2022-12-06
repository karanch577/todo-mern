const express = require("express")
const { signup, signin, dashboard, signout } = require("../controllers/user")
const { auth } = require("../middleware/auth")
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/dashboard", auth, dashboard)
router.get("/signout", auth, signout)

module.exports = router
