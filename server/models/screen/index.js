const request = require("request");
let url = "http://192.168.10.50:3000/api/screen/";

async function Request(req, res) {
    await request.post({url, form: (req.body)}, function(err,httpResponse,body){ 
        if (err) {
            res.send( err )
        }

        //for status
        


        res.send( body )
    })
}

module.exports = Request
