var isInside = 0;
var fence;
var lat = 50.9214675;
var lon = 6.9607342;
var content;

function preload(){
	fence = new geoFence(lat, lon, 0.04, insideTheFence, outsideTheFence, 'km');
}

function setup() {
    content = document.getElementsByTagName('body')[0].innerHTML;
    console.log(content);
}


function draw() {
}

function insideTheFence(position){
	if (isInside<1) {
		isInside = 1;
		// do stuff only on change
	}
	//document.getElementById("content").innerHTML = 'You are in. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(2);
    document.getElementsByTagName('body')[0].innerHTML = content;
}

function outsideTheFence(position) {
	if (isInside>-1) {
		isInside = -1;
		// do stuff only on change
	}
	//document.getElementById("content").innerHTML = 'You are out. Distance is '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'km').toFixed(2);
    document.getElementsByTagName('body')[0].innerHTML = 'nope.'
}
