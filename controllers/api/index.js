const router = require("express").Router();
const userRoutes = require("./userRoutes");
// add api routes

router.use("/users", userRoutes);
module.exports = router;
