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
    
    // game.renderer.clear(true, false, false);
    if (!game.postProcessing) {
			game.renderer.render(game.szene, game.kamera);
			// (color, depth, stencil)
	} else {
		console.log(delta);
		game.composer.render(delta);

	}
    
    // game.renderer.render(game.szene, game.camera);      // Rendering
    updateStatistik(true, true);                        // Statistiken aktualisieren
    requestAnimationFrame(mainloop);                    // Mainloop erneut durchlaufen
};