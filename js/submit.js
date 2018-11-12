// submit.js 
$(document).ready(function(){
	
	//activates the function when a .btn is clicked
	$('.btn').click(function(e){
		myFunction(e)});

	//every button id is associated with a script location
	var $buttonList = {
		'prjPower':'../php/projector/on_off.php',
		'prjPicture':'../php/projector/mute_unmute.php',
		'scrnUp':'../php/screen/up.php',
		'scrnStop':'../php/screen/stop.php',
		'scrnDown':'../php/screen/down.php',
		'recordStart':'../php/blkmagic/record.php',
		'recordStop':'../php/blkmagic/stop.php'
		};

//Activates Script for each button
function myFunction(e) {

	//grabs button id
	var $button = e.currentTarget.id;

	//grabs the script for each button from the list
	var $url = $buttonList[$button];

	//makes the ajax call activating the script
		$.ajax({
			type: "POST",
			url: $url,
			data: {},
			successs: function() {
				console.log('success');
			}
		});
	}
});
