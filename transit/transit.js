//Variables relating to the making of the map
//Mostly initialization - to be overwritten
var mylat = 0;
var mylng = 0;
var myLoc = new google.maps.LatLng(mylat, mylng);
var mapOptions = {
	center: myLoc,
	zoom  : 12
};
var map;


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
	mylat = position.coords.latitude;
	mylng = position.coords.longitude;
	myLoc = new google.maps.LatLng(mylat, mylng);
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	//draw info stuff
}

//Given the technical difficulties with XML requests, JSON strings will be hard-
//coded in for the time being

function findData() {
	console.log("In findData");
	var req = new XMLHttpRequest();
	req.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	req.onreadystatechange = dataReady;
	req.send(null);
}



function dataReady(req) { 
	// The readyState numbers:
	// 0 = not initialized
	// 1 = Set up
	// 2 = Sent
	// 3 = In progress
	// 4 = Complete

	console.log("in dataReady");

	if (req.readyState == 4 && req.status == 200) { 
		console.log("4 and 200");
		trainSched = JSON.parse(req.responseText); 
		tLine = trainSched['line']; 
 	} 
	else if (req.readyState == 4 && req.status == 500){ 
		console.log("4 and 500");
		alert("Data Retrieval Error - Please refresh page");
	} 
	console.log("Shoulda seen some numbers by now");
}

/*
function findData() {
	station = 'red';

	if(station == 'red') {
		placeStations('red');
	} else if (station == 'blue') {
		placeStations('blue');
	} else if (station == 'orange') {
		placeStations('orange');
	} else {
		//handle error
	}

}

function placeStations(station) {

	parsed = JSON.parse(stations);
	length = parsed.length;

	console.log(stations);
	console.log(length);

}

google.maps.event.addDomListener(window, 'load', makeMap);

*/