const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingsController = require("../controllers/listings.js");
const multer = require("multer");
const { cloudinary, storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Index Route & Create Route - GET & POST
router.route("/")
    .get(wrapAsync(listingsController.index))
    .post(
        isLoggedIn,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingsController.createListing)
    );

//New Route - GET
router.get("/new", isLoggedIn, listingsController.renderNewForm);

// Category Filter Route - must be above "/:id"
router.get("/category/:categoryName", wrapAsync(listingsController.showListingsByCategory));

//Show, Update, and Delete Route - GET, PUT & DELETE
router.route("/:id")
    .get(wrapAsync(listingsController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingsController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingsController.deleteListing));

//Edit Route - GET
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.renderEditForm));

module.exports = router;