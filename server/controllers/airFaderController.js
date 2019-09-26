let code = require('../codes.json')
let Airfader = require("../models/airFader/index")
let airfader = new Airfader

async function airfaderController (req, res) {
    switch (req.body.command) {
        case "start":
            res.send( await airfader.restart() )
            break
        case "stop":
            res.send( await airfader.stop() )
            break
        case "status":
            res.send( await airfader.status() )
            break
        default:
            res.send( code.airfader.unknownCommand )
    }
}   

module.exports = airfaderController