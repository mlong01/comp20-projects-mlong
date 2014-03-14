/*comment 1 for commit*/

function makeMap(position) {

	var mapOptions = {
		center: new google.maps.LatLng(position.coords.latitude, 
									   position.coords.longitude),
		zoom: 12
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"),
								  mapOptions);
}

function initialize() {
	navigator.geolocation.getCurrentPosition(makeMap);
}


google.maps.event.addDomListener(window, 'load', makeMap);