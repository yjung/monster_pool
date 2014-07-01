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
		else{
			game.renderer.render(game.szene, game.kamera);	// Falls Postprocessing aktiv, aber kein Effekt gesetzt normal rendern
		}

	}
    
    // game.renderer.render(game.szene, game.camera);      // Rendering
    updateStatistik(true, true);                        // Statistiken aktualisieren
    requestAnimationFrame(mainloop);                    // Mainloop erneut durchlaufen
};