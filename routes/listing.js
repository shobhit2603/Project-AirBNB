const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingsController = require("../controllers/listings.js");

//Index Route - GET
router.get("/", wrapAsync(listingsController.index));

//New Route - GET
router.get("/new", isLoggedIn, listingsController.renderNewForm);

//Show Route - GET
router.get("/:id", wrapAsync(listingsController.showListing));

//Create Route - POST
router.post("/", isLoggedIn, validateListing, wrapAsync(listingsController.createListing));

//Edit Route - GET
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.renderEditForm));

//Update Route - PUT
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingsController.updateListing));

//Delete Route - DELETE
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingsController.deleteListing));

module.exports = router;