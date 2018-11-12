$(document).ready(() => {
    console.log('document ready')
    var message = "Success Something Happened"
    $("body").prepend("<div class='status-message'><p class='message'>" + message +"</p><div class='status-close'>x</div></div>")
})

