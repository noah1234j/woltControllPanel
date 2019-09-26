const Projector = require("../models/projector/");
const projector = new Projector();
let status = require('../status.json');
let jsonHelper = require('./jsonhelper.js')
let json = new jsonHelper
let statusLocation = "../status.json";
let screenStatus = require('../models/screen/statusCheck.js')

async function update(){
    try {
        //Hyperdeck
        status.video_recording = (json.read('../models/hyperdeck/status.json')).hyperdeck

        //Screen
        status.screen_status = await screenStatus()

        // Projector
        projector.status().then((prj) => {
            status.projector_power = prj.state
            status.projector_mute = prj.mute
            json.write(statusLocation, status)
        })

    } catch (err) {
        console.log(err)
    } finally {}
}

update()