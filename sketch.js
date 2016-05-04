var isInside = 0;
var fence;
var lat = 37.8039;
var lon = -122.4173;

function setup(){
	fence = new geoFence(lat, lon, 0.05, insideTheFence, outsideTheFence, 'mi');
}


function draw() {
}

function insideTheFence(position){
	if (isInside<1) {
		isInside = 1;
		// do stuff only on change
	}
	document.getElementById("content").innerHTML = 'Nothing here yet.';
}

function outsideTheFence(position) {
	if (isInside>-1) {
		isInside = -1;
		// do stuff only on change
	}
	document.getElementById("content").innerHTML = '7.803456 N, 122.417144 W is on show at SFAI, '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'mi').toFixed(2)+' miles from here.';
}
