//////////////// IMPORTS AND DEFS //////////////////////

let url = "http://192.168.10.96:3000/api/stream/";
let codes = (require('../../codes.json')).stream
let Request = require('request-promise')

////////////////////////////// MODEL /////////////////////

class streamModel {
    async start() {
        try {
            await request('start')
            return codes.successStart
        } catch {
            return codes.failure
        }
    }
    async stop() {
        try {
            await request('stop')
            return codes.successStop
        } catch {
            return codes.failure
        }
    }
    async status() {
        try {
            let msg = (await request('status')).message
            codes.statusSuccess.message = `The status of your projector is ${msg}`
            return codes.successStatus
        } catch {
            return codes.failure
        }
    }
}

////////////////////////FUNCTION DEFS///////////////////////////////

async function request(cmd) {
    let options = {
        method: "POST",
        uri: url,
        json: true,
        body: {
            "command": cmd
        }
    }
    try {
        return await Request(options)
    } catch (err) {
        return err
    }
}

/////////////////////////////EXPORT/////////////////////////////////

module.exports = streamModel
