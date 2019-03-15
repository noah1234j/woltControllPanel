// const gpio = require('onoff').Gpio
// const down = new gpio(14, 'low')
// const up = new gpio(15, 'low')
// const fs = require('fs')
// let on = 0
// let off = 1
// let settings = require('../../settings.json')
// let settingsLocation = "../../settings.json"

// class screenController {
//     async status() {
//         return await settings.projector.status
//     }

//     async up() {
//         up.writeSync(off)
//         down.writeSync(off)

//         up.writeSync(on)

//         setTimeout(() => {
//             up.writeSync(off)
//             changeStatus("UP", settings)
//         }, settings.projector.upTime * 1000)

//         return await changeStatus("MOVING UP", settings)
//     }

//     async down() {
//         up.writeSync(off)
//         down.writeSync(off)

//         down.writeSync(on)

//         setTimeout(() => {
//             down.writeSync(off)
//             changeStatus("DOWN", settings)
//         }, settings.projector.downTime * 1000)

//         return await changeStatus("MOVING DOWN", settings)
//     }

//     async stop() {
//         up.writeSync(off)
//         down.writeSync(off)

//         return await changeStatus("MANUALLY STOPPED", settings)
//     }
// }

// function changeStatus(val, settings) {
//     try {
//         settings.projector.status = val
//         settings = JSON.stringify(settings)
//         fs.writeFileSync(settingsLocation, settings)
//         return val
//     } catch (err) {
//         return err
//     }
// }

// module.exports = screenController
