
function makeMap(position) {

	//Find Lat + lng with geolocation, then do 
	var crd = position.coords;
	var lng = crd.longitude;
	var lat = crd.latitude;

	console.log(lat + " " + lng);

	var mapOptions = {
		center: new google.maps.LatLng(100, 100),
		zoom: 12
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"),
								  mapOptions);
}

function initialize() {
	navigator.geolocation.getCurrentPosition(makeMap);
}


google.maps.event.addDomListener(window, 'load', makeMap);