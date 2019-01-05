l// submit.js 
$(document).ready(function(){
	
	//activates the function when a .btn is clicked
	$('.btn').click(function(e){
		myFunction(e)});

	//every button id is associated with a script location
	var $buttonList = {
		'prjPower':'../../Server/Legacy/php/projector/on_off.php',
		'prjPicture':'../../Server/Legacy/php/projector/mute_unmute.php',
		'scrnUp':'../../Server/Legacy/php/screen/up.php',
		'scrnStop':'../php/screen/stop.php',
		'scrnDown':'../../Server/Legacy/php/screen/down.php',
		'recordStart':'../Server/Legacy/php/record.php',
		'recordStop':'../Server/Legacy/php/stop.php'
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
			successs: (data) => {
				console.log(data);
			}
		});
	}
});
