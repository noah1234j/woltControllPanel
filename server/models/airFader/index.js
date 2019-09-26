//////////////// IMPORTS AND DEFS //////////////////////

let url = "http://192.168.10.97:3000/api/airfader/";
let Request = require('request-promise')

////////////////////////////// MODEL /////////////////////

class afModel {
    async start() {
        return await request('start')
    }
    async stop() {
        return await request('stop')
    }
    async status() {
        return await request('stop')
    }
    async restart() {
        await request('stop');
        return await request('start');
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

module.exports = afModel
