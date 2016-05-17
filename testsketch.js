var isInside = 0;
var fence;
var lat = 37.785878;
var lon = -122.400419;

function setup(){
	fence = new geoFence(lat, lon, 0.04, insideTheFence, outsideTheFence, 'mi');
}


function draw() {
}

function insideTheFence(position){
	if (isInside<1) {
		isInside = 1;
		// do stuff only on change
	}
	document.getElementById("content").innerHTML = 'You are in. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'mi').toFixed(2);
}

function outsideTheFence(position) {
	if (isInside>-1) {
		isInside = -1;
		// do stuff only on change
	}
	document.getElementById("content").innerHTML = 'You are out. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'mi').toFixed(2);
}