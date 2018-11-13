
//Someone already build me a library WOOT WOOT
var hyperdeckLib = require('hyperdeck-js-lib')

//Setting up the session
var hyperdeck = new hyperdeckLib.Hyperdeck('192.168.10.55')

//Initiating the session
hyperdeck.onConnected().then(()=>{

    //Alrighty we are connected Woot
    // Note: you do not have to wait for the connection before you start making requests.
    // Requests are buffered until the connection completes. If the connection fails, any
    // buffered requests will be rejected.
    hyperdeck.makeRequest('record').then((res)=>{
        if (res.code == 200) {
            hyperdeck.makeRequest('quit')
            return {
                code: 200,
                message: "Recording Successfully Stopped :)"
            }
        } else {
            return {
                code: 400,
                message: "Unknown Record Command :("
            }
        }
    })

    //If we lose connection or get an errorthis will tell us
    .catch(function(errResponse) {
        if (!errResponse) {
          console.error("The request failed because the hyperdeck connection was lost.");
        }
        else {
            console.error("The hyperdeck returned an error with status code "+errResponse.code+".");
          }
        });
   
        //This is asynchonous even handling... If we get status messages from the hyperdeck this will let us know...

        //all async messages
        hyperdeck.getNotifier().on("asynchronousEvent", function(response) {
            console.log("Got an asynchronous event with code "+response.code+".");
            console.log(response)
        });
   
        //async connection lost
        hyperdeck.getNotifier().on("connectionLost", function() {
            console.error("Connection lost.");
        });
    })
    
    //If the conneciton fails...
    .catch(function() {
        console.error("Failed to connect to hyperdeck.");
});
