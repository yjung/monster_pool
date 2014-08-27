var requestID;
var animate = true;
// Abfangen von Benutzereingaben zum Anpassen der Szene
function benutzereingaben() {
	// Aktualisierung der Queue-Position
	checkKeyboard();
}

// Mainloop des Spiels von dem aus aktualisiert und gerendert wird
function mainloop() {
	updateHatching();
	benutzereingaben();
	// Benutzereingaben abfangen
	var delta = game.clock.getDelta();
	// Verstrichene Zeit messen
	TWEEN.update();
	// Interpolationsschritt von Animationstweens
	game.orbitControls.update(delta);
	// Steuerung in Zeitabhängigkeit aktualisieren
	game.szene.simulate(undefined, 20);
	// Physiksimulation

	// Animation fuer Test-Monster-Animation
	if (game.monsterBalls.animation) {
		game.monsterBalls.animation.update(0.01);
	}

	var screenWidth = window.innerWidth, screenHeight = window.innerHeight;


	if (!game.postProcessing) {// Falls Post-Processing deaktiviert
		game.renderer.render(game.szene, game.kamera);


	} else {// Postprocessing ist aktiviert
		if (game.renderer.filmEffect) {
			game.composerFilm.render();
		}
		if (game.renderer.bloomPass) {
			game.composerBloomPass.render();
		}
		if (game.renderer.custom) {
			game.composerCustom.render();
		} else {
			game.renderer.setViewport(0, 0, game.breite, game.hoehe);
			game.composerCelShading.render(delta);
			game.renderer.clear(false, false, false);	// (color, depth, stencil)
			game.renderer.setViewport(10, screenHeight - 160 - 120, 240, 140);
			game.renderer.render(game.szene, game.mapCamera);
		}

	}

	updateStatistik(true, true);
	// Statistiken aktualisieren

	// Iteriere über alle Controller der DebugGUI
	if (game.debugGUI)
		for (var i in game.debugGUI.__controllers) {
			game.debugGUI.__controllers[i].updateDisplay();
		}

	if ((animate) && (game.monsterCounter > 0)) {
		requestID = window.requestAnimationFrame(mainloop);
	} else {
		if (game.monsterCounter <= 0) {

			window.cancelAnimationFrame(requestID);
			requestID = undefined;
			game.clock.stop();
			spielEnden();
		}
	}
	// Mainloop erneut durchlaufen
};

// Start, um das Spiel nach Pausierung wieder anzufangen
function start() {
	console.log("hello start");
	if (!requestID) {
		animate = true;
		requestID = window.requestAnimationFrame(mainloop);

		console.log("Hello Loop");
	}
}

// Ermöglicht die Pausierung des Spiels
function stop() {
	console.log("hello stop" + requestID);
	if (requestID) {
		window.cancelAnimationFrame(requestID);
		requestID = undefined;
		animate = false;
		console.log("hello loop stop " + requestID);
	}
}