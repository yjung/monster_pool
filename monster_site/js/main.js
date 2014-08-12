var requestID;
var animate = true;
// Abfangen von Benutzereingaben zum Anpassen der Szene
function benutzereingaben() {
	// HIER ERGAENZEN
	queueAktualisieren();
	// Aktualisierung der Queue-Position
	checkKeyboard();
}

// Mainloop des Spiels von dem aus aktualisiert und gerendert wird
function mainloop() {
	benutzereingaben();
	// Benutzereingaben abfangen
	var delta = game.clock.getDelta();
	// Verstrichene Zeit messen
	TWEEN.update();
	// Interpolationsschritt von Animationstweens
	game.orbitControls.update(delta);
	// Steuerung in Zeitabhängigkeit aktualisieren
	game.szene.simulate(undefined, 1);
	// Physiksimulation

	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;

	game.renderer.clear(true, false, false);
	// (color, depth, stencil)
	if (!game.postProcessing) {// Falls Post-Processing deaktiviert
		if (game.monster.animation) {
			game.monster.animation.update(0.01);
		}
		game.renderer.setViewport(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
		game.renderer.clear();
		game.renderer.render(game.szene, game.kamera);
		// Falls Postprocessing aktiv, aber kein Effekt gesetzt normal rendern
		game.renderer.clear(false, true, false);
		// Depth-Cache muss noch entleert werden
		game.renderer.setViewport(10, SCREEN_HEIGHT - 160 - 120, 240, 140);
		game.renderer.render(game.szene, game.mapCamera);

	} else {// Postprocessing ist aktiviert
		if (game.renderer.filmEffect) {
			game.composerFilm.render();
		}
		if (game.renderer.bloomPass) {
			game.composerBloomPass.render();
		}
		if (game.renderer.celShading) {
			game.composerCelShading.render();
		}
		if (game.renderer.custom) {
			game.composerCustom.render();
		} else {
			game.renderer.setViewport(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
			game.renderer.render(game.szene, game.kamera);

		}

	}

	updateStatistik(true, true);
	// Statistiken aktualisieren

	// Iteriere über alle Controller der DebugGUI
	if (game.debugGUI)
		for (var i in game.debugGUI.__controllers) {
			game.debugGUI.__controllers[i].updateDisplay();
		}

	if ((animate)&&(game.monsterCounter>0)) {
		requestID = window.requestAnimationFrame(mainloop);
	}
	else
	{
		if(game.monsterCounter<=0)
		{
			
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