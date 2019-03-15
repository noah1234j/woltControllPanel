// let Scrn = require('../models/screen/index')
// let scrn = new Scrn()

// async function scrnHandler (req, res) {

//     req.body.endPoint = "/api/screen/"

//     switch (req.body.command) {
<<<<<<< HEAD
//         case "up":
=======
//         case "up": 
>>>>>>> 157791766bb5e0d7bd1283e371be6ef0da9faec8
//             if (await scrn.up() == "MOVING UP") {
//                 successHandler(req, res, "Success: The projector is successfully moving up")
//             } else {
//                 failHandler(req, res, "Error: The screen cannot move up")
//             }
//             break
<<<<<<< HEAD
//         case "down":
=======
//         case "down": 
>>>>>>> 157791766bb5e0d7bd1283e371be6ef0da9faec8
//             if (await scrn.down() == "MOVING DOWN") {
//                 successHandler(req, res, "Success: The screen is successfully moving down")
//             } else {
//                 failHandler(req, res, "Error: The screen cannot move down")
//             }
//             break
<<<<<<< HEAD
//         case "stop":
=======
//         case "stop": 
>>>>>>> 157791766bb5e0d7bd1283e371be6ef0da9faec8
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
