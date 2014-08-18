var requestID;
var animate = true;
// Abfangen von Benutzereingaben zum Anpassen der Szene
function benutzereingaben() {
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

	// Animation fuer Test-Monster-Animation
	if (game.monsterBalls.animation) {
				game.monsterBalls.animation.update(0.01);
	}

	var screenWidth = window.innerWidth, screenHeight = window.innerHeight;

	game.renderer.clear(true, false, false);
	// (color, depth, stencil)
	if (!game.postProcessing) {// Falls Post-Processing deaktiviert
		
		game.renderer.render(game.szene, game.kamera);
		// Falls Postprocessing aktiv, aber kein Effekt gesetzt normal rendern
		game.renderer.clear(false, true, false);
		// Depth-Cache muss noch entleert werden
		game.renderer.setViewport(10, screenHeight - 160 - 120, 240, 140);
		game.renderer.render(game.szene, game.mapCamera);

	} else {// Postprocessing ist aktiviert
		if (game.renderer.filmEffect) {
			game.composerFilm.render();
		}
		if (game.renderer.bloomPass) {
			game.composerBloomPass.render();
		}
		if (game.renderer.celShadingKontur) {
			// Code fuer Minimap bisher auskommentiert
			//game.renderer.setViewport(0, 0, screenWidth, screenHeight);
			//game.renderer.clear(false, true, false);
			game.composerCelShading.render();
			game.renderer.clear(false, false, false);
			game.renderer.setViewport(10, screenHeight - 160 - 120, 240, 140);
			// // game.mapComposerCelShading.render();
			game.renderer.render(game.szene, game.mapCamera);

		}
		if (game.renderer.custom) {
			game.composerCustom.render();
		} else {
			game.renderer.setViewport(0, 0, screenWidth, screenHeight);
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