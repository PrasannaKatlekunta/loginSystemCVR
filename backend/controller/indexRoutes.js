const router = require("express").Router()
const registerRoutes = require("./registration")
const loginRoutes = require("./login");


router.use("/api/register", registerRoutes)
router.use("/api/login", loginRoutes);


module.exports = router