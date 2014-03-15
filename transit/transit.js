/*comment 1 for commit*/

function initialize() {
	findData();
	navigator.geolocation.getCurrentPosition(makeMap);
}


function makeMap(position) {

	//Why do I always get an error, saying it can't read latitude,
	//even though it can because the map finds my location?

	var mapOptions = {
		//temp coded out to allow local testing
		/*
		center: new google.maps.LatLng(position.coords.latitude, 
									   position.coords.longitude),
		*/
		center: new google.maps.LatLng(42.413, 
									   -71.1067),
		zoom: 12
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"),
								  mapOptions);
}



//Given the technical difficulties with XML requests, JSON strings will be hard-
//coded in for the time being

function findData() {
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

	if (req.readyState == 4 && req.status == 200) { 
		trainSched = JSON.parse(req.responseText); 
		tLine = trainSched['line']; 
 	} 
	else if (req.readyState == 4 && req.status == 500){ 
		alert("Data Retrieval Error - Please refresh page");
	} 

	console.log(tLine);	
	console.log(trainSched['line']);
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
*/
function placeStations(station) {

	parsed = JSON.parse(stations);
	length = parsed.length;

	console.log(stations);
	console.log(length);

}

google.maps.event.addDomListener(window, 'load', makeMap);

