let Request = require("../models/screen/index")

async function screenController(req, res) {
    await Request(req, res)
}

module.exports = screenController