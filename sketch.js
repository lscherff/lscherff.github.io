var isInside = 0;
var fence;
var lat = 37.8039;
var lon = -122.4173;

function setup(){
	fence = new geoFence(lat, lon, 0.03, insideTheFence, outsideTheFence, 'mi');
}


function draw() {
}

function insideTheFence(position){
	if (isInside<1) {
		isInside = 1;
		// do stuff only on change
	}
	document.getElementById("content").innerHTML = '37.803456 N, 122.417144 W. Negash Asegde: <a href="http://www.acheron.co/" target="_blank">Acheron</a>, Clare Bland: <a href="" target="_blank">Title</a>, Emma Carroll: <a href="" target="_blank">Title</a>, John Erbach: <a href="Final Icarus LLC.pdf" target="_blank">Icarus LLC</a>, Yelin Huang: <a href="" target="_blank">Title</a>, Josie Kidde: <a href="" target="_blank">Title</a>, Danny Murzhanov: <a href="" target="_blank">Title</a>, Nate Woodward: <a href="" target="_blank">Title</a>.';
}

function outsideTheFence(position) {
	if (isInside>-1) {
		isInside = -1;
		// do stuff only on change
	}
	document.getElementById("content").innerHTML = '37.803456 N, 122.417144 W is on show at SFAI, '+calcGeoDistance(position.latitude, position.longitude, lat, lon, 'mi').toFixed(2)+' miles from here.';
}
