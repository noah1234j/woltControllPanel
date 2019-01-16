const Projector = require("../models/projector/");
const projector = new Projector();
let settings = require("../settings");

async function projectorHandler(req, res) {
    try {
        switch (req.body.command) {
            case "status":
                res.send(await projector.status())
                break

            case "on/off": {
                errorHandler(res, req, projector.onOff)
                break

            }

            case "mute/unmute": {
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

        let startStatus = await commandStatus()

        //Used to check if the state has changed when we turn it on

        await callback()

        //Status Interpreter...
        statusInterpreter = {
            COOLING1: "turned the projector off!",
            STARTUP1: "turned the projector on!",
            On: "muted the video!",
            Off: "unmuted the video!"
        }

        //Waits for it to be turned on
        //If it times out then the server will chuck an error
        let n = 0//if it loops more than 15 times chuck an error (sorry kind of hacky)
        while (true) {

            let currentStatus = await commandStatus()

            //Handles most requests
            if (startStatus != currentStatus) {
                res.send({
                    code: 200,
                    command: req.body.command,
                    status: currentStatus,
                    message: "You have successfully " + statusInterpreter[currentStatus]
                })

                break

            //Handles projector mute request if projector is off
            } else if (req.body.command == 'mute/unmute' && currentStatus != "POWER ON") {
                res.send({
                    code: 400,
                    command: req.body.command,
                    message: "The projector must be fully powered on."
                })

                break
            
            //Handles timout if the server state hasnt changed
            } else if (n >= 25) { 
                throw {
                    code: 400,
                    error: "Projector refused to respond."
                }

            } else {
                n++
            }
        }

    //Error Reporting
    } catch (err) {
        console.log(err)
        res.send({
            code: 400,
            error: err
        })
    }
    
    //I put this in a function because I didn't want to rewrite for different commands (DRY)
    async function commandStatus() {
        if (req.body.command == "mute/unmute") {
            return (await projector.status()).mute
        } else if (req.body.command == "on/off") {
            return (await projector.status()).state
        } else {
            return "Unknown Error in Projector Error Handler"
        }
    }

}
