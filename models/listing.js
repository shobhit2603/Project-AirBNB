const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://4kwallpapers.com/images/walls/thumbs_3t/14811.jpg",
            set: (v) =>
                v === ""
                    ? "https://4kwallpapers.com/images/walls/thumbs_3t/14811.jpg"
                    : v,
        },
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;