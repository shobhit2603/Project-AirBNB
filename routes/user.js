const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

//Signup route - GET & POST
router.route("/signup")
    .get(userController.renderSignup)
    .post(wrapAsync(userController.signup));

//Login route - GET & POST
router.route("/login")
    .get(userController.renderLogin)
    .post(saveRedirectUrl, passport.authenticate("local", {
        failureRedirect: '/login',
        failureFlash: true
    }), userController.login);

//Logout route - GET
router.get("/logout", userController.logout);

module.exports = router;