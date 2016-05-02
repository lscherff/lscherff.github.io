var isInside = 0;
var fence;
var lat = 37.7807391;
var lon = -122.2413131

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
	document.getElementById("content").innerHTML = 'You are here. '+position.latitude+', '+position.longitude+', distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'mi');
}

function outsideTheFence(position) {
	if (isInside>-1) {
		isInside = -1;
		// do stuff only on change
	}
	document.getElementById("content").innerHTML = 'The NAME show is only on display at SFAI. Go there. (You are at '+position.latitude+', '+position.longitude+', distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'mi')+')';
}