import { StatusMessage } from "./src/js/status-message.js"
import { sendReq } from "./src/js/submit.js"

//Styles
require("./src/sass/main.scss")

let statusMessage = new StatusMessage()

$(document).ready(()=>{
    console.log('ready')

    //activates the function when a .btn is clicked
	$('.btn').click(function(e){
		sendReq(e, (code, message) => {
            statusMessage.create(code, message)
        })});

    //Use this instead of $(.status-close) becuase class is added dynamically
    $(document).on('click', ".status-close", function(e) { 
        e.target.parentElement.remove()
    });

})
