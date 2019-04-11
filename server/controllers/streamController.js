let codes = require("../codes.json")
let Stream = require("../models/stream/index.js")
let stream = new Stream

async function streamController(req, res) {
    
    switch (req.body.command) {
        case "start":
            res.send ( await stream.start() )
            break
        case "stop":
            res.send ( await stream.stop() )
            break
        case "status":
            res.send ( await stream.status() )
            break
        default:
            res.send ( codes.stream.unknownCommand )
    }
}

module.exports = streamController