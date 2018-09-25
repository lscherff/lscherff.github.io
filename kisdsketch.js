var isInside = 0;
var fence;

function preload(){
	fence = new geoFence(lat, lon, radius, insideTheFence, outsideTheFence, 'km');
}

function setup() {
}


function draw() {
}

function insideTheFence(position){
	if (isInside<1) {
		isInside = 1;
		// do stuff only on change
	}
    document.getElementById('location-check').style.visibility = 'hidden';
    document.getElementById('inside').style.visibility = 'visible';
    document.getElementById('not-inside').style.visibility = 'hidden';
	//document.getElementById("content").innerHTML = 'You are in. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(2);
}

function outsideTheFence(position) {
	if (isInside>-1) {
		isInside = -1;
		// do stuff only on change
	}
	document.getElementById('location-check').style.visibility = 'hidden';
    document.getElementById('inside').style.visibility = 'hidden';
    document.getElementById('not-inside').style.visibility = 'visible';
    document.getElementById('not-inside').innerHTML = 'You are out. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(2);
}
