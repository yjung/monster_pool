var requestID;
var animate = true;
// Abfangen von Benutzereingaben zum Anpassen der Szene
function benutzereingaben(){
    // HIER ERGAENZEN
    queueAktualisieren();       // Aktualisierung der Queue-Position
    checkKeyboard();
}

// Mainloop des Spiels von dem aus aktualisiert und gerendert wird
function mainloop() {
    benutzereingaben();                                 // Benutzereingaben abfangen
    var delta = game.clock.getDelta();                  // Verstrichene Zeit messen
    game.orbitControls.update(delta);                   // Steuerung in Zeitabhängigkeit aktualisieren
    game.szene.simulate(undefined, 1);                  // Physiksimulation
    
    
    // game.renderer.clear(true, false, false);				// (color, depth, stencil)
    if (!game.postProcessing) {								// Falls Post-Processing deaktiviert
			game.renderer.render(game.szene, game.kamera);	// Szene normal rendern
	} else {												// Postprocessing ist aktiviert
		if(game.renderer.filmEffect){			
			game.composerFilm.render(delta);
		}
		if(game.renderer.bloomPass){
			game.composerBloomPass.render(delta);	
		}
		if(game.renderer.custom){
			game.composerCustom.render(delta);
		}
		else{
			game.renderer.render(game.szene, game.kamera);	// Falls Postprocessing aktiv, aber kein Effekt gesetzt normal rendern
		}

	}
    
    // game.renderer.render(game.szene, game.camera);      // Rendering
    updateStatistik(true, true);                        // Statistiken aktualisieren
    
    // Iteriere über alle Controller der DebugGUI
  	if (game.debugGUI)
  	for (var i in game.debugGUI.__controllers) {
    	game.debugGUI.__controllers[i].updateDisplay();
  	}

    if (animate) {
        requestID = window.requestAnimationFrame(mainloop);     
    }
                       // Mainloop erneut durchlaufen
};

function start() {
    console.log("hello start");
    if (!requestID) {
        animate = true;
        requestID = window.requestAnimationFrame(mainloop); 

        console.log("Hello Loop");
    }
}

function stop() {
    console.log("hello stop" + requestID);
    if (requestID) {
        window.cancelAnimationFrame(requestID);
        requestID = undefined;
        animate = false;
        console.log("hello loop stop " + requestID);
    }
}