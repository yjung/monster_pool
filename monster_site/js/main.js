// Anpassung des Fensters (bzw. Canvas)
function onWindowResize() {
    game.camera.aspect = (window.innerWidth - 211) / (window.innerHeight - 230);    // der Kamera auf Groessenaenderung
    game.camera.updateProjectionMatrix();                                           // Projektionsmatrix der Kamera aktualisieren
    game.renderer.setSize(window.innerWidth - 211, window.innerHeight - 230);       // Renderer aktualisieren
};

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
    game.renderer.render(game.szene, game.camera);      // Rendering
    updateStatistik(true, true);                        // Statistiken aktualisieren
    requestAnimationFrame(mainloop);                    // Mainloop erneut durchlaufen
};