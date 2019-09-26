// submit.js 

//let bob = require("./status-message")

	//activates the function when a .btn is clicked
	$('.btn').click(function(e){
		console.log("button clicked")
		myFunction(e)});

	//every button id is associated with a script location
	export let $buttonList = {
		'prjPower': {url: 'api/projector/', data: {command: "on/off"}},
		'prjPicture':{url: 'api/projector/', data: {command: "mute/unmute"}},
		'scrnUp':{url: '/api/screen/', data: {command: "up"}},
		'scrnStop':{url: "/api/screen/", data: {command: "stop"}},
		'scrnDown':{url: "/api/screen/", data: {command: "down"}},
		'recordStart':{url: 'api/hyperdeck/', data: { command: "record" }},
		'recordStop':{url: 'api/hyperdeck/', data: { command: "stop" }},
		'streamStart':{url: "api/stream/", data: { command: "start" }},
		'streamStop':{url: "api/stream/", data: { command: "stop" }},
		'airfaderStart':{url: "api/airfader/", data: { command: "start" }},
		'airfaderStop':{url: "api/airfader/", data: { command: "stop" }}
		};

//Activates Script for each button
export function sendReq(e, callback) {

	//grabs button ide
	let $buttonId = e.currentTarget.id;
	console.log($buttonId)

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
