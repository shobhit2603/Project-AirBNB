const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingsController = require("../controllers/listings.js");

//Index Route & Create Route - GET & POST
router.route("/")
    .get(wrapAsync(listingsController.index))
    .post(isLoggedIn, validateListing, wrapAsync(listingsController.createListing));

//New Route - GET
router.get("/new", isLoggedIn, listingsController.renderNewForm);

//Show, Update, and Delete Route - GET, PUT & DELETE
router.route("/:id")
    .get(wrapAsync(listingsController.showListing))
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingsController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingsController.deleteListing));

//Edit Route - GET
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.renderEditForm));

module.exports = router;