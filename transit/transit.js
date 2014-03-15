//Variables for XML stuff that's struggling mightily
//Perhaps because of frame of reference?

var req;
var trainSched = [];
var tLine;

var START = 0;
var BLUE_END  = 12;
var ORAN_END  = 19;
//red should go 0-12, then 13-16, then 17-21
var RED_END_1 = 12;
var RED_ST_2  = 13;
var RED_END_2 = 16;
var RED_ST_3  = 17;
var RED_END_3 = 21;

var image = 'MBTA.png';



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
    var meMarker = new google.maps.Marker({
		position: myLoc,
		title: "My Location",
	});

	meMarker.setMap(map);

	//function located at bottom of code so as not to make giant divide
	var stations = makeStationArray();

	drawMarkers(map, stations);
	//drawLines(map, stations);
}


function drawMarkers(map, stations) {
	var last = 0;
	
	if(tLine == "red") {
		last = RED_END_3;
	} else if(tLine == "blue") {
		last = BLUE_END;
	} else if (tLine == "orange") {
		last = ORAN_END;
	}

	for(var i = START; i < last; i++) {
		var loc = new google.maps.LatLng(stations[i]['Lat'], stations[i]['Long']);
		
		var toPlace = new google.maps.Marker({
			position: loc,
			title: stations[i]['Station'],
			icon: image
		});

		toPlace.setMap(map);
	}
}


function drawLines(map, stations) {
	var locArray;
	var last = 0;
	var color = '#FFFFFF'

	if(tLine == "red") {
		drawRedLine(map, stations);
	} else if (tLine == "blue") {
		last = BLUE_END;
		color = '#0000FF';
	} else if (tLine == "orange") {
		last = ORAN_END;
		color = '#FF3300';
	}

	for(var i = START; i < ORAN_END; i++) {
			locArray[i] = new google.maps.LatLng(stations[i]['Lat'], stations[i]['Long']);
	}

	var colorLine = new google.maps.polyline({
		path: locArray,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6
	});

	colorLine.setMap(map);
}



function drawRedLine(map, stations) {
	var color = '#FF0000';
	var firstLine;
	var secondLine;
	var thirdLine;
	var i;
	var arCnt = 0;

	for(i = START; i <= RED_END_1; i++) {
		firstLine[arCnt] = new google.maps.LatLng(stations[i]['Lat'], stations[i]['Long']);
		arCnt++;
	}

	arCnt = 0;

	for(i = RED_ST_2; i <= RED_END_2; i++) {
		secondLine[arCnt] = new google.maps.LatLng(stations[i]['Lat'], stations[i]['Long']);
		arCnt++;
	}
	
	arCnt = 0;

		for(i = RED_ST_3; i <= RED_END_3; i++) {
		thirdLine[arCnt] = new google.maps.LatLng(stations[i]['Lat'], stations[i]['Long']);
		arCnt++;
	}

	var colorLine1 = new google.maps.polyline({
		path: firstLine,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6
	});

	var colorLine2 = new google.maps.polyline({
		path: secondLine,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6
	});

	var colorLine3 = new google.maps.polyline({
		path: thirdLine,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6
	});

	colorLine1.setMap(map);
	colorLine2.setMap(map);
	colorLine3.setMap(map);
	
}



function findData() {
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
}



function makeStationArray() {
	if(tLine == "red") {
		var stations = [
		{
    		"Line":"Red",
    		"Station":"Alewife",
    		"Lat":42.395428,
    		"Long":-71.142483
  		},
  		{
   		 	"Line":"Red",
    		"Station":"Davis",
    		"Lat":42.39674,
    		"Long":-71.121815
  		},
  		{
    		"Line":"Red",
    		"Station":"Porter Square",
    		"Lat":42.3884,
    		"Long":-71.119149
  		},
  		{
    		"Line":"Red",
    		"Station":"Harvard Square",
    		"Lat":42.373362,
    		"Long":-71.118956
  		},
  		{
    		"Line":"Red",
    		"Station":"Central Square",
    		"Lat":42.365486,
    		"Long":-71.103802
  		},
  		{
    		"Line":"Red",
    		"Station":"Kendall/MIT",
    		"Lat":42.36249079,
    		"Long":-71.08617653
  		},
  		{
    		"Line":"Red",
    		"Station":"Charles/MGH",
    		"Lat":42.361166,
    		"Long":-71.070628
  		},
  		{
    		"Line":"Red",
    		"Station":"Park Street",
    		"Lat":42.35639457,
    		"Long":-71.0624242
  		},
  		{
    		"Line":"Red",
    		"Station":"Downtown Crossing",
    		"Lat":42.355518,
    		"Long":-71.060225
  		},
  		{
    		"Line":"Red",
    		"Station":"South Station",
    		"Lat":42.352271,
    		"Long":-71.055242
  		},
  		{
    		"Line":"Red",
    		"Station":"Broadway",
    		"Lat":42.342622,
    		"Long":-71.056967
  		},
  		{
    		"Line":"Red",
    		"Station":"Andrew",
    		"Lat":42.330154,
    		"Long":-71.057655
  		},
  		{
    		"Line":"Red",
    		"Station":"JFK/UMass",
    		"Lat":42.320685,
    		"Long":-71.052391
  		},
  		{
    		"Line":"Red",
    		"Station":"Savin Hill",
    		"Lat":42.31129,
    		"Long":-71.053331
  		},
  		{
    		"Line":"Red",
    		"Station":"Fields Corner",
    		"Lat":42.300093,
    		"Long":-71.061667
  		},
  		{
    		"Line":"Red",
    		"Station":"Shawmut",
    		"Lat":42.29312583,
    		"Long":-71.06573796
  		},
  		{
    		"Line":"Red",
    		"Station":"Ashmont",
    		"Lat":42.284652,
    		"Long":-71.064489
  		},
  		{
    		"Line":"Red",
    		"Station":"North Quincy",
    		"Lat":42.275275,
    		"Long":-71.029583
  		},
  		{
    		"Line":"Red",
    		"Station":"Wollaston",
    		"Lat":42.2665139,
    		"Long":-71.0203369
  		},
  		{
    		"Line":"Red",
    		"Station":"Quincy Center",
    		"Lat":42.251809,
    		"Long":-71.005409
  		},
  		{
    		"Line":"Red",
    		"Station":"Quincy Adams",
    		"Lat":42.233391,
    		"Long":-71.007153
  		},
  		{
    		"Line":"Red",
    		"Station":"Braintree",
    		"Lat":42.2078543,
    		"Long":-71.0011385
  		},]
	} else if (tLine == "blue") {
		var stations = [
		{
	    	"Line":"Blue",
	    	"Station":"Bowdoin",
	   	 	"Lat":42.361365,
	    	"Long":-71.062037
  		},
	  	{
    		"Line":"Blue",
    		"Station":"Government Center",
    		"Lat":42.359705,
    		"Long":-71.059215
  		},
  		{
    		"Line":"Blue",
    		"Station":"State Street",
    		"Lat":42.358978,
    		"Long":-71.057598
  		},
  		{
    		"Line":"Blue",
    		"Station":"Aquarium",
    		"Lat":42.359784,
    		"Long":-71.051652
  		},
  		{
    		"Line":"Blue",
    		"Station":"Maverick",
    		"Lat":42.36911856,
    		"Long":-71.03952958
  		},
  		{
    		"Line":"Blue",
    		"Station":"Airport",
    		"Lat":42.374262,
    		"Long":-71.030395
  		},
  		{
    		"Line":"Blue",
    		"Station":"Wood Island",
    		"Lat":42.3796403,
    		"Long":-71.02286539
  		},
  		{
    		"Line":"Blue",
    		"Station":"Orient Heights",
    		"Lat":42.386867,
    		"Long":-71.004736
  		},
  		{
    		"Line":"Blue",
    		"Station":"Suffolk Downs",
    		"Lat":42.39050067,
    		"Long":-70.99712259
  		},
  		{
    		"Line":"Blue",
    		"Station":"Beachmont",
    		"Lat":42.39754234,
    		"Long":-70.99231944
  		},
  		{
    		"Line":"Blue",
    		"Station":"Revere Beach",
    		"Lat":42.40784254,
    		"Long":-70.99253321
  		},
  		{
    		"Line":"Blue",
    		"Station":"Wonderland",
    		"Lat":42.41342,
    		"Long":-70.991648
  		},]

	} else if (tLine == "orange") {
		var stations = [
		{
    		"Line":"Orange",
    		"Station":"Oak Grove",
    		"Lat":42.43668,
    		"Long":-71.071097
  		},
  		{
    		"Line":"Orange",
    		"Station":"Malden Center",
    		"Lat":42.426632,
    		"Long":-71.07411
  		},
  		{
    		"Line":"Orange",
    		"Station":"Wellington",
    		"Lat":42.40237,
    		"Long":-71.077082
  		},
  		{
    		"Line":"Orange",
    		"Station":"Sullivan",
    		"Lat":42.383975,
    		"Long":-71.076994
  		},
  		{
    		"Line":"Orange",
    		"Station":"Community College",
    		"Lat":42.373622,
    		"Long":-71.069533
  		},
  		{
    		"Line":"Orange",
    		"Station":"North Station",
    		"Lat":42.365577,
    		"Long":-71.06129
  		},
  		{
    		"Line":"Orange",
    		"Station":"Haymarket",
    		"Lat":42.363021,
    		"Long":-71.05829
  		},
  		{
    		"Line":"Orange",
    		"Station":"State Street",
    		"Lat":42.358978,
    		"Long":-71.057598
  		},
  		{
    		"Line":"Orange",
    		"Station":"Downtown Crossing",
    		"Lat":42.355518,
    		"Long":-71.060225
  		},
  		{
    		"Line":"Orange",
    		"Station":"Chinatown",
    		"Lat":42.352547,
    		"Long":-71.062752
  		},
  		{
    		"Line":"Orange",
    		"Station":"Tufts Medical",
    		"Lat":42.349662,
    		"Long":-71.063917
  		},
  		{
    		"Line":"Orange",
			"Station":"Back Bay",
    		"Lat":42.34735,
    		"Long":-71.075727
  		},
  		{
    		"Line":"Orange",
    		"Station":"Mass Ave",
    		"Lat":42.341512,
    		"Long":-71.083423
  		},
  		{
    		"Line":"Orange",
    		"Station":"Ruggles",
    		"Lat":42.336377,
    		"Long":-71.088961
  		},
  		{
    		"Line":"Orange",
    		"Station":"Roxbury Crossing",
   		 	"Lat":42.331397,
    		"Long":-71.095451
  		},
  		{
    		"Line":"Orange",
    		"Station":"Jackson Square",
    		"Lat":42.323132,
    		"Long":-71.099592
  		},
  		{
    		"Line":"Orange",
    		"Station":"Stony Brook",
    		"Lat":42.317062,
    		"Long":-71.104248
  		},
  		{
    		"Line":"Orange",
    		"Station":"Green Street",
    		"Lat":42.310525,
    		"Long":-71.107414
  		},
  		{
    		"Line":"Orange",
    		"Station":"Forest Hills",
    		"Lat":42.300523,
    		"Long":-71.113686
  		},]

	}

	return stations;

}

