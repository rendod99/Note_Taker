var notesData = require("../db/db");
const fs = require("fs");


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {

        notesData.push(req.body);
        res.json(notesData);


    });

    app.delete("/api/notes/:id", function (req, res) {


        var noteId = req.params.id;

        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;

            const readNotes = JSON.parse(data);
            console.log(readNotes);

            function checkNotes(readNotes) {
                if (readNotes.id !== noteId) {
                    return readNotes;
                };
            }
            const newAllNotes = readNotes.filter(checkNotes);

            fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), function (err) {
                if (err) throw err;
                res.json(newAllNotes);

            });
        });
    });
};