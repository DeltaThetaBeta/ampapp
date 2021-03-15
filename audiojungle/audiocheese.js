// init variables
var debug = document.getElementById("debug");
var music = document.getElementById("theMusic");
var btntxt = document.getElementById("toggleBtn");
var currentVolume = document.getElementById("currentVolume");
var slider = document.getElementById("volumeIn");
var divVolume;
var musicSatus = false;

// Play/Pause button
music.onplaying = function() {onPlaying();};
function onPlaying() {
  musicSatus = true;
  btntxt.innerHTML = "Pause The Music";
}

// use Play/Pause button
document.getElementById("toggleBtn").addEventListener("click", toggleMusic);
function toggleMusic() {
	if (musicSatus) {
		music.pause();
    btntxt.innerHTML = "Play The Music";
    musicSatus = false;
	} else {
		music.play();
	}
}


// get current volume
function getVolume() {
  if (Math.floor(music.volume*100) == 0) {
		currentVolume.innerHTML = "THE AUDIO IS MUTED!";
		slider.value = 0;
	} else {
		currentVolume.innerHTML = "Current Volume is "+Math.floor(music.volume*100)+"%";
		slider.value = (music.volume*100).toFixed(2);
	}
}

// set the default volume
function setDefaultVolume() {
	music.volume = 0.1;
	getVolume();
}

// mute the volume
function setMuteVolume() {
	music.volume = 0.0;
	getVolume();
}

// set full volume
function setFullVolume() {
	music.volume = 1.0;
	getVolume();
}

// slider set and get volume
slider.oninput = function() {
	divVolume = (slider.value/100).toFixed(2);
  	music.volume = divVolume;
	getVolume();
};

// get current playing file name
function songName() {
	var splitURL = music.currentSrc.split("/");
	var fileName = splitURL[splitURL.length - 1];
	var songName = fileName.replace(".mp3", "");
	document.getElementById("currentlyPlaying").innerHTML = "Playing: "+songName;

}
music.ontimeupdate = function() {songProgress();};
// Song Progress Bar
function songProgress() {
	var songLength = music.duration;
	var songTime = music.currentTime;
	document.getElementById("songTime").style.width = ((songTime/songLength) * 100).toFixed(2)+"%";
	document.getElementById("songTime").innerHTML = Math.floor(songTime);
}

// DEBUG


/*
music.onabort = function() {
    alert("abort");
};

music.onerror = function() {
    alert("error");
};

music.onstalled = function() {
    alert("Media data is not available");
};

music.onsuspend = function() {
    alert("Media suspend");
}; */
