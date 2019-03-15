// let Scrn = require('../models/screen/index')
// let scrn = new Scrn()

// async function scrnHandler (req, res) {

//     req.body.endPoint = "/api/screen/"

//     switch (req.body.command) {
//         case "up":
//             if (await scrn.up() == "MOVING UP") {
//                 successHandler(req, res, "Success: The projector is successfully moving up")
//             } else {
//                 failHandler(req, res, "Error: The screen cannot move up")
//             }
//             break
//         case "down":
//             if (await scrn.down() == "MOVING DOWN") {
//                 successHandler(req, res, "Success: The screen is successfully moving down")
//             } else {
//                 failHandler(req, res, "Error: The screen cannot move down")
//             }
//             break
//         case "stop":
//             if (await scrn.stop() == "MANUALLY STOPPED") {
//                 successHandler(req, res, "Success: The projector has successfully stopped")
//             } else {
//                 failHandler(req, res, "Error: The screen cannot stop")
//             }
//             break
//         case "status":
//             successHandler(req, res, `The status of the projector is ${await scrn.status()}`)
//             break
//         default:
//             failHandler(req, res, "Error: Unknown Command, try up, down, status, stop")
//     }
// }

// function successHandler(req, res, msg) {
//     req.body.code = 200;
//     req.body.message = msg;
//     res.send ( req.body );
// }

// function failHandler(req, res, msg) {
//     req.body.code = 400;
//     req.body.message = msg;
//     res.send( req.body );
// }
// module.exports = scrnHandler
