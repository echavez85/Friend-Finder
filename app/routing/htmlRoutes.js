// Utilized Restaurants Example from NUEVA
// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {
    // GET Request for HTML
    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Default to home if no route found
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}