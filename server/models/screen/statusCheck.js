const request = require("request");
let url = "http://192.168.10.50:3000/api/screen/";

function status() {
    return new Promise((resolve, rej) => {
        request.post(url, {
            json: {
                command: "status"
            }
        }, (error, res, body) => {
            if (error) {
                rej(error)
                return
            }
            resolve(body)
        })
    })
}

module.exports = status
