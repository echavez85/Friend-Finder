// Dependencies
const express = require("express");
const path = require("path");

// Set up Express
var app = express();

// Set Port
const PORT = process.env.PORT || 8080;

// Set up Express to handle data parsing
app.use(express.urlendcoded({ extended: true}));
app.use(express.json());

// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});

