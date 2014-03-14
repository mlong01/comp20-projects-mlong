/*comment 1 for commit*/

function initialize() {
	navigator.geolocation.getCurrentPosition(makeMap);
	findData();
}


function makeMap(position) {

	//Why do I always get an error, saying it can't read latitude,
	//even though it can because the map finds my location?

	var mapOptions = {
		center: new google.maps.LatLng(position.coords.latitude, 
									   position.coords.longitude),
		zoom: 12
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"),
								  mapOptions);
}


function findData() {
	var req = new XMLHttpRequest();
	req.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	console.log(req.readyState);
	console.log(req.responseText);
	req.onreadystatechange = dataReady(req);
	req.send();
	console.log(req.readyState);
	console.log(req.responseText);
	console.log(req.readyState);
	console.log(req.responseText);
	console.log(req.readyState);
	console.log(req.responseText);

}



function dataReady(req) { 
	if (req.readyState == 4 && req.status == 200) { 
		trainSched = JSON.parse(req.responseText); 
		tLine = trainSched.line; 
		locateClosestStation(); 
		markStations(); 
		drawLines(); } 
	else if (req.readyState == 4 && req.status == 500){ 
		getTrains(); 
	} 

	console.log(req.responseText);
}


google.maps.event.addDomListener(window, 'load', makeMap);

