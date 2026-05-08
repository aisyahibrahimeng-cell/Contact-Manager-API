const {Router} = require ("express");
const { registerUserHandler, loginUserHandler, getUserHandler } = require("../controllers/user.controller");
const validateToken = require("../middleware/validateTokenHandler.middleware");

const router = Router();


router.route("/register").post(registerUserHandler)
router.route("/login").post(loginUserHandler)
router.route("/current").get(validateToken,getUserHandler)

module.exports = router;