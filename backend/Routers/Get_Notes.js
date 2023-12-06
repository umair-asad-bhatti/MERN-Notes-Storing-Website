const express = require('express')
const Note = require("../Modals/Notes")
const router = express.Router()

router.post("/", async (req, res) => {
    const { googleId } = req.body.User
    const result = await Note.find({ googleId })
    if (result)
        res.send(result[0]?.Notes)
})
module.exports = router