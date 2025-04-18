const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

const port = 3000;

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("Hello this is Port 3000");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

//404 Error Handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

//Error Handler Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!" } = err;
    res.status(status).render("error.ejs", { message });
});

app.listen(port, () => {
    console.log(`Server is Started!\nVisit http://localhost:${port}/listings`);
});