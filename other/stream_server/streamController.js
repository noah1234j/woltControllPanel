let code = require('./codes.json')
let Stream = require('./stream_model/index')
let stream = new Stream

async function streamController (req, res) {
  switch (req.body.command) {
    case "start":
      res.send( await stream.start() )
      break
    case "stop":
      res.send( await stream.stop() )
      break
    case "status":
      res.send( await stream.status() )
      break
    default: 
      res.send( code.unknown )
  }
}

module.exports = streamController