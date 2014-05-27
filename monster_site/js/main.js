// Anpassung des Fensters (bzw. Canvas)
function onWindowResize() {
    game.camera.aspect = (window.innerWidth - 211) / (window.innerHeight - 230);    // der Kamera auf Groessenaenderung
    game.camera.updateProjectionMatrix();                                           // Projektionsmatrix der Kamera aktualisieren
    game.renderer.setSize(window.innerWidth - 211, window.innerHeight - 230);       // Renderer aktualisieren
};



// Mainloop des Spiels von dem aus aktualisiert und gerendert wird
function mainloop() {

    var delta = game.clock.getDelta();
    orbitControls.rotateLeft(richtung);
    orbitControls.update(delta);

    queueAktualisieren();
    game.renderer.render(game.szene, game.camera);
    stats.update(game.renderer);
    statsX.update(game.renderer);
    game.szene.simulate(undefined, 1);

    requestAnimationFrame(mainloop);
};