// Queue einladen und initialisieren
function queueLaden() {
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	ColladaLoader.load('../assets/dae/queue_a02.dae', function(collada){
		queueMaterial = Physijs.createMaterial(lGreenT, 0, 0);
		console.log(collada.scene.children[0].geometry);
		
		// game.queue = new THREE.Mesh(geometry, mat[0]);
		// var dae = collada.scene.children[0];
		// dae.updateMatrix();
		// console.log(dae);
		game.queue = new Physijs.BoxMesh(collada.scene.children[0].geometry, queueMaterial, 0);
		// game.queue._physijs.collision_flags = 4;
		// COLLISION IST ZUM BUGFIXING NOCH DEAKTIVIERT
		game.szene.add(game.queue);
		// Queue zur Szene hinzufuegen
	});
};

// Aktualisierung der Queue-Position (Mainloop) in Abhaengigkeit zum aktuellen Modus
function queueAktualisieren() {

	// Rotationsmodus
	if (game.state === game.modus.orbitrotation) {

        // Lokale Variablen zur Positionsberechnung
        var radiusAbstand = new THREE.Vector3(10, 0, 10);         // KEINE AHNUNG OB DAS IRGENDWIE GEHT
        var abstand = 10;
        var richtungCam = new THREE.Vector3();                  // Vektor fuer

        var positionBall = new THREE.Vector3();
        var positionCam = new THREE.Vector3();

        var positionQueue = new THREE.Vector3();


        positionCam.copy(game.camera.position);                 // Position Kamera sichern
        positionBall.copy(game.whiteBall.position);             // Position Kugel sichern

        richtungCam.subVectors(positionCam, positionBall);      // Richtung zur Kamera
        richtungCam.normalize();                                // Richtung zur Kamera normalisiert

        richtungCam.multiplyScalar(15);
        console.log(richtungCam);

        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
        positionQueue.addVectors(positionBall, richtungCam);
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;


        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
        game.queue.position.copy(positionQueue);
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;


        var qZiel = new THREE.Quaternion();
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
        var qAusgang = game.queue.rotation._quaternion;
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;

        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
        THREE.Quaternion.slerp(qAusgang, game.camera.rotation._quaternion, qZiel, 1 * game.clock.getDelta());
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;

        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
        game.queue.rotation._quaternion.copy(qZiel);
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;


        game.orbitControls.Mittelpunkt.copy(game.whiteBall.position);
    }
		
		// ------------------------------------------------------------
	
	if (game.state === game.modus.statisch) {
          var richtungsvektor = new THREE.Vector3();
          richtungsvektor.subVectors(game.whiteBall.position, game.queue.position);

        game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;
//      game.queue.translateOnAxis(game.queue.localToWorld(richtungsvektor), game.mausPosition.y_gemapped * game.clock.getDelta());
		game.queue.translateOnAxis(richtungsvektor, game.mausPosition.y_gemapped * game.clock.getDelta());
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
	}

}