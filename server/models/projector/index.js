commands = {
  status: "http://192.168.10.110/cgi-bin/webctrl_user.cgi?&t:26,c:12,p:132075",
  projectorOn: "http://192.168.10.110/cgi-bin/webctrl_user.cgi?&t:26,c:5,p:196614s",
  vidMute: "http://192.168.10.110/cgi-bin/webctrl_user.cgi?&t:26,c:5,p:196625"
};
const request = require("request");

class ProjectorHandler {
    onOff() { //i3 is key in status object
        return new Promise ((resolve, reject) => {
            request.post(commands.projectorOn, (err, res, body) => {
                err ? reject(err) : resolve(parseJSON(body))
            })
        })

    }

    vidMute() { //i6 is key in status object
        return new Promise((resolve, reject) => {
            request.post(commands.vidMute, (err, res, body) => {
                err ? reject(err) : resolve(parseJSON(body))
            })
        })
    }


    status() {
        return new Promise((resolve, reject) => {
            request.post(commands.status, (err, res, body) => {
                if (err) {
                    reject(err)
                } else {
                    let data = parseJSON(body) //Parses the json

                    let status = {
                        "name": data.i1, //Name
                        "serial": data.i2,
                        "state": data.i3, //Power State
                        "mute": data.i6 //Vid Mute State
                    }

                    resolve(status)
                }
            });
        })
    }
}

module.exports = ProjectorHandler;


function parseJSON (body) {
    string = body.substring(3, body.length - 4)
    return JSON.parse(string)
}