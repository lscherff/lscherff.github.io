var isInside = 0;
var fence;
var lat = 50.9214675;
var lon = 6.9607342;

function preload(){
	fence = new geoFence(lat, lon, 2.00, insideTheFence, outsideTheFence, 'km');
}

function setup() {
    console.log(content);
}


function draw() {
}

function insideTheFence(position){
	if (isInside<1) {
		isInside = 1;
		// do stuff only on change
	}
    document.getElementById('location-check').style.visibility = 'hidden';
    document.getElementById('not-inside').style.visibility = 'hidden';
	//document.getElementById("content").innerHTML = 'You are in. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(2);
}

function outsideTheFence(position) {
	if (isInside>-1) {
		isInside = -1;
		// do stuff only on change
	}
	//document.getElementById("content").innerHTML = 'You are out. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(2);
    document.getElementById('location-check').style.visibility = 'hidden';
    document.getElementById('inside').style.visibility = 'hidden';
    document.getElementById('not-inside').innerHTML += ' Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(2);
}
