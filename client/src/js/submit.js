// submit.js 

let bob = require("./status-message")
	
	//activates the function when a .btn is clicked
	$('.btn').click(function(e){
		console.log("button clicked")
		myFunction(e)});

	//every button id is associated with a script location
	export let $buttonList = {
		'prjPower': {url: 'api/projector/', data: {command: "on/off"}},
		'prjPicture':{url: 'api/projector/', data: {command: "mute/unmute"}},
		'scrnUp':{},
		'scrnStop':{},
		'scrnDown':{},
		'recordStart':{url: 'api/hyperdeck/', data: { command: "record" }},
		'recordStop':{url: 'api/hyperdeck/', data: { command: "stop" }}
		};


//Activates Script for each button
export function sendReq(e, callback) {

	//grabs button id
	let $buttonId = e.currentTarget.id;

	//grabs the script for each button from the list
	let $url = $buttonList[$buttonId].url;
	console.log($url)

	let $data = $buttonList[$buttonId].data;

	//makes the ajax call activating the script
		$.ajax({
			type: "POST",
			url: $url,
			data: $data,
			dataType: "json",
			success: (data) => {
				callback(data.code, data.message);
			}
		});
}
