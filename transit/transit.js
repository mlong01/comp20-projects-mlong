/*comment for committing*/
function makeMap(position) {

	//Find Lat + lng with geolocation, then do 
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

	console.log(lat + " " + lng);

	var mapOptions = {
		center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		zoom: 12
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"),
								  mapOptions);
}

function initialize() {
	navigator.geolocation.getCurrentPosition(makeMap);
}


google.maps.event.addDomListener(window, 'load', makeMap);