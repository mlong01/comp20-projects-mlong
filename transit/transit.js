//Variables for XML stuff that's struggling mightily
//Perhaps because of frame of reference?

var req;
var trainSched = [];
var tLine;


function initialize() {
	//map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	findData();
	makeMap();
	navigator.geolocation.getCurrentPosition(makeMap);
}


function makeMap() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMap);
	} else {
		alert("Geolocation is not supported by your browser");
	}
}


function createMap(position) {
	var mylat = position.coords.latitude;
	var mylng = position.coords.longitude;
	
	//CORRECT CODE, commenting out because currently working in Georgia, which is difficult
	//var myLoc = new google.maps.LatLng(mylat, mylng);

	var myLoc = new google.maps.LatLng(42.4183, -71.1067)

	var mapOptions = {
		center: myLoc,
		zoom  : 12
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	
	//draw info stuff
	makeMarkers(map, myLoc);
}


function makeMarkers(map, myLoc) {
	var meMarker = new google.maps.marker({
		position: myLoc,
		title: "My Location",
	});

	meMarker.setMap(map);
}


function findData() {
	console.log("In findData");

	req = new XMLHttpRequest();
	req.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	req.onreadystatechange = dataReady;
	req.send(null);
}



function dataReady() { 
	// The readyState numbers:
	// 0 = not initialized
	// 1 = Set up
	// 2 = Sent
	// 3 = In progress
	// 4 = Complete

	if (req.readyState == 4 && req.status == 200) { 
		trainSched = JSON.parse(req.responseText); 
		tLine = trainSched['line']; 
 	} 
	else if (req.readyState == 4 && req.status == 500){ 
		alert("Data Retrieval Error - Please refresh page");
	} 
	console.log(tLine);
}