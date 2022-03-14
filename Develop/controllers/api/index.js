const router = require('express').Router();
const fs = require("fs")
const path = require("path");
const db = path.join(__dirname, "../../db/db.json")

router.get('/notes', (req, res) => {
    console.log("Hello2")
    const data = fs.readFileSync(db, "utf8")
    console.log(data)
    let obj = JSON.parse(data)
    res.json(obj)
    // Open JSON file
    // Need everything from file
    // Return result to user
});

router.post('/notes', (req, res) => {
    console.log("Goodbye")
    // Get Notes Title from Request
    // Get notes text from request
    // Open JSON file
    // Read everything from file
    // Add new not to JSON
    // Save File
});

module.exports=router