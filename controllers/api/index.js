const router = require('express').Router();
const fs = require("fs")
const path = require("path");
const db = path.join(__dirname, "../../db/db.json")
const ShortUniqueId = require("short-unique-id")


router.get('/notes', (req, res) => {
    const data = fs.readFileSync(db, "utf8")
    let obj = JSON.parse(data)
    res.json(obj)
    // Open JSON file
    // Need everything from file
    // Return result to user
});

router.post('/notes', (req, res) => {
    const idGen = new ShortUniqueId();
    const data = fs.readFileSync(db, "utf8")
    let obj = JSON.parse(data)
    // Get Notes Title from Request
    let title = req.body.title
    // Get notes text from request
    let text = req.body.text
    // Open JSON file
    // Read everything from file
    // Add new note to JSON
    let id = idGen()
    obj.push({"title": title, "text": text, "id": id})
    // Save File
    fs.writeFileSync(db, JSON.stringify(obj))
    res.json(obj)
});

router.get('/notes/:id', (req, res) => {
    const data = fs.readFileSync(db, "utf8")
    let id = req.params.id
    let obj = JSON.parse(data)
    let note = null
    obj.forEach(element => {
        if(element.id == id){
            note = element
        }
    });
    res.json(note)
});

router.delete('/notes/:id', (req, res) => {
    const data = fs.readFileSync(db, "utf8")
    let id = req.params.id
    let obj = JSON.parse(data)
    let note = null
    let newNotes = []
    obj.forEach(element => {
        if(element.id != id){
            newNotes.push(element)
        }
    });
    fs.writeFileSync(db, JSON.stringify(newNotes))
    res.json(newNotes)
});

module.exports=router