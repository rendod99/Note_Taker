var notesData = require("../db/db");



module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {

        notesData.push(req.body);
        res.json(req.body);

    });

    app.delete("/api/notes/:id", function (req, res) {



    });

};