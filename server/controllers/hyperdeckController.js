const Hyperdeck = require("../models/hyperdeck/index");

module.exports = hyperdeckController;

async function hyperdeckController(req, res) {
  
  let hyperdeck = new Hyperdeck();

  try {
    //Connecting
    await hyperdeck.connect()

    //Which Command
    switch (req.body.command) {
      case "record": {
        let response = await hyperdeck.record(); //sends the command to the hyperdeck and gets the res
        response.command = req.body.command; //adds the command that you send to that json
        res.send(response); //sends the response
        break;
      }

      case "stop": {
        let response = await hyperdeck.stop();
        response.command = req.body.command;
        res.send(response);
        break;
      }

      case "kill": {
        let response = await hyperdeck.kill();
        response.command = req.body.command;
        res.send(response);
        break;
      }

      default: {
        let response = await hyperdeck.customRequest(req.body.command);
        response.command = req.body.command;
        res.send(response);
      }
    }

    //Error Handling
  } catch (err) {
    if (err) {
      res.send(err);
    }
  } finally {
    await hyperdeck.kill();
  }
}
