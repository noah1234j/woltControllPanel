$(document).ready(() => {
    
    //Sets up the location for the status messages
    $('body').prepend('<div class="status-location"></div>')

    $('button').click(()=>{statusMessage(true, "There was a ship once rolling gently on the sea that the savior made. All")})

    //Use this instead of $(.status-close) becuase class is added dynamically
    $(document).on('click', ".status-close", function(e) { killMessage(e)});



//Function Defs 

    //Handles the return from the server into a status message
    function statusMessage(res, message) {
        //Creates the message
        $(".status-location").prepend("<div class='status-message'><p class='message'>" + message +"</p><div class='status-close'>x</div></div>")

        //Sees if it's a success or failure
        if (res) { 
            //Success
            $(".status-message").addClass("status-message-success") 
        } else if (!res) { 
            //Failure
            $(".status-message").addClass("status-message-failure") 
        } else {
            //Other
            $(".status-message").addClass("status-message-failure") 
            console.log("Wierd Error... Have a look: " + res)
        }
 
        //Fades out the status message after a delay
        $('.status-message').delay( 7000 ).fadeOut( 1200 )
    }

    //Kills the message when the x is clicked
    function killMessage(e) {
        e.target.parentElement.remove() //removes the element when x is clicked
    }
})

