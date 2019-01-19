// These were derived from the Restaurant Example in NUEVA
// Load Data
var friendData = require("../data/friends");

// Routing
module.exports = function(app) {
    // GET Request for API
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    })

    // POST Request for API
    app.post("/api/friends", (req, res) => {
        res.json(friendData);
    })
};