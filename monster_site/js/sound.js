/** /////////////////////////////////////////////////////////////////////////////////
 * @author		Jaeger, Mathias
 * @function 	sound.js dient dazu eine beim Aufruf uebergebene Sound-Datei
 * 				abzuspielen.
 * @param		dateiname dient als Uebergabeparameter zur Pfadbildung
 /////////////////////////////////////////////////////////////////////////////////*/

function soundEffekt(dateiname) {

	var sound = new Audio();
	sound.src = null;

	if (sound.canPlayType("audio/mpeg")) {
		sound.src = 'assets/audio/' + dateiname + '.mp3';
	} else if (sound.canPlayType('audio/ogg')) {
		sound.src = 'assets/audio/' + dateiname + '.ogg';
	}

	// Falls Datei gefunden, laden und abspielen
	if (sound.src) {
		sound.load();
		// Sobald soweit geladen, dass abspielbar
		sound.addEventListener('canplay', function() {
			// Abspielen
			sound.play();
		});
	}
};

function soundAmbience(dateiname) {
	game.ambientSound.src = null;

	if (game.ambientSound.canPlayType("audio/mpeg")) {
		game.ambientSound.src = 'assets/audio/' + dateiname + '.mp3';
	} else if (game.ambientSound.canPlayType('audio/ogg')) {
		game.ambientSound.src = 'assets/audio/' + dateiname + '.ogg';
	}

	// Falls Datei gefunden, laden und abspielen
	if (game.ambientSound.src) {
		game.ambientSound.load();
		// Sobald soweit geladen, dass abspielbar
		game.ambientSound.addEventListener('canplay', function() {
			// Abspielen
			if (game.soundAn) {
				game.ambientSound.volume = 0.5;
				game.ambientSound.play();
			}
		});
	}
	game.ambientSound.addEventListener('ended', function() {
		soundAmbience('ambience');
	}, false);
};