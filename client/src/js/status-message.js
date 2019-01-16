

//Function Defs 

export class StatusMessage {
    create(res, message, fadeDelay = 700) {
        //Creates the message
        $(".status-location").prepend("<div class='status-message'><p class='message'>" + message +"</p><div class='status-close'>x</div></div>")

        //Sees if it's a success or failure
        if (res == 200) { 
            //Success
            $(".status-message").addClass("status-message-success") 
        } else { 
            //Failure
            $(".status-message").addClass("status-message-failure") 
        }

        //Fades out the status message after a delay
        $('.status-message').delay( fadeDelay ).fadeOut( 1200 )
    }

        kill(e) {
            e.target.parentElement.remove() //removes the element when x is clicked
        }

}

