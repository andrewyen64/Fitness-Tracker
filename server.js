// Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// Setup Port and Express
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

// Sets up Express to handle JSON data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Connects to MongoDB with Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", { useNewUrlParser: true, useUnifiedTopology: true, });

// HTML and API Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`App running on port: ${PORT}!`);

});