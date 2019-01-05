const Projector = require("../models/projector/");
const projector = new Projector();
let settings = require("../settings.json");

async function projectorHandler(req, res) {
    try {
        switch (req.body.command) {
            case "status":
                res.send(await projector.status())

                break

            case "power on/off": {

                errorHandler(res, req, projector.onOff)
                break

            }

            case "vid mute/unmute": {
                errorHandler(res, req, projector.vidMute)
                break
            }

            case "commands":
                res.send({
                    "0": "status",
                    "1": "power on",
                    "2": "vid mute/unmute",
                    "3": "commands",
                    "instructions": 'use format { command: "command here" }'
                })
                break

            default:
                res.send('Your request was not understood.\r\n Please use { "command": "commands" } for a list of supported comamnds')
            } 
    } catch (err) {
        err ? console.log(err) : null
    }

}

module.exports = projectorHandler

async function errorHandler(res, req, callback) {
    //Try to turn the projector on...
    try {

        //Used to check if the state has changed when we turn it on
        let startStatus = (await projector.status()).state

        callback()

        //Waits for it to be turned on
        //If it times out then the server will chuck an error
        let n = 0//if it loops more than 15 times chuck an error (sorry kind of hacky)
        while (true) {

            let currentStatus = (await projector.status()).state

            if (startStatus != currentStatus) {
                res.send({
                    code: 200,
                    command: req.body.command,
                    status: currentStatus
                })

                break
                
            } else if (n >= 15) {
                throw {
                    "code": "400",
                    "error": "Projector refused to turn on"
                }
            } else {
                n++
            }
        }

    } catch (err) {
        res.send(err)
    }

}
