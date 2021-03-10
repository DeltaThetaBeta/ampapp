var visibility = false;
document.getElementById("enginevis").addEventListener("click", engineVisibility);
function engineVisibility() {
	var engines = document.getElementsByClassName('engine');
	var engine;
	var btntxt = document.getElementById("enginevis");
	if (visibility == true) {
		for (engine = 0; engine < engines.length; engine++){
			engines[engine].style.visibility='hidden';
			btntxt.innerHTML = "Show Engines";
			visibility = false;
		}
	} else if (visibility == false){
		for (engine = 0; engine < engines.length; engine++){
			engines[engine].style.visibility='visible';
			btntxt.innerHTML = "Hide Engines";
			visibility = true;
		}
	}
}