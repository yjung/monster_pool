// Queue einladen und initialisieren
function queueLaden() {
    var ColladaLoader = new THREE.ColladaLoader();
    // JSON-Loader erstellen
    ColladaLoader.load('../assets/dae/queue_a02.dae', function (collada) {

        /**/
        var dae = collada.scene.children[0];                    // Referenz auf Objekt 1 der eingeladenen .dae-Szene
        dae.updateMatrix();                                     // Matrix nach Extraktion aus .dae-Szene aktualisieren

        /*Physikalischer Queue mit Physi.js*/
//        queueMaterial = Physijs.createMaterial(lGreenT, 0, 0);    // Physi.js-Material initialisieren
//        game.queue = new Physijs.BoxMesh(collada.scene.children[0].geometry, queueMaterial, 0); // Objekterzeugung
//        game.queue._physijs.collision_flags = 4; 		// COLLISION IST ZUM BUGFIXING NOCH DEAKTIVIERT


        /* Nicht physikalischer Queue mit Three.js*/
        game.queue = new THREE.Mesh(dae.geometry, lGreenT);     // Objekterzeugng


        game.szene.add(game.queue);                             // Queue zur Szene hinzufuegen
    });
};

// Aktualisierung der Queue-Position (Mainloop) in Abhaengigkeit zum aktuellen Modus
function queueAktualisieren() {

    // Rotationsmodus
    if (game.state === game.modus.orbitrotation) {

        game.orbitControls.Mittelpunkt.copy(game.whiteBall.position); // Mittelpunkt der Orbitrotation auf der Kugel

        /* Lokale Variablen zur Positionsberechnung initialisieren*/
        var richtungCam = new THREE.Vector3();                  // Vektor fuer Richtung initialisieren
        var positionBall = new THREE.Vector3();                 // Vektor Position Kugel initialisieren
        var positionCam = new THREE.Vector3();                  // Vektor Position Kamera initialisieren
        var positionQueue = new THREE.Vector3();                // Vektor Position Queue initialisieren

        /* Positionen der Objekte in Vektorvariablen sichern.*/
        positionCam.copy(game.camera.position);                 // Position Kamera sichern
        positionBall.copy(game.whiteBall.position);             // Position Kugel sichern

        /* Richtungsvektor fuer Queuepositionierung bestimmen*/
        richtungCam.subVectors(positionCam, positionBall);      // Richtung zur Kamera berrechnen
        richtungCam.normalize();                                // Richtung zur Kamera normalisiert

        /* Sicherheitsabstand zur Kugel*/
        richtungCam.multiplyScalar(15);                         // Verlaengerung des Normalisierten Richtungsvektors

        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
        positionQueue.addVectors(positionBall, richtungCam);    // Addition Richtungsvektor und Position in Welt
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;


        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
        game.queue.position.copy(positionQueue);                // Zuweisung der berrechneten Position an den Queue
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
        game.queue.rotation._quaternion.copy(game.camera.rotation._quaternion);
//        THREE.Quaternion.slerp(qAusgang, game.camera.rotation._quaternion, qZiel, 1 * game.clock.getDelta());
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;

        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
//        game.queue.rotation._quaternion.copy(qZiel);
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
    }

    // ------------------------------------------------------------

    if (game.state === game.modus.statisch) {
        var richtungsvektor = new THREE.Vector3();
        richtungsvektor.subVectors(game.queue.position, game.whiteBall.position);

//        var kamerablick = new THREE.Vector3( game.camera.matrix.elements[8], game.camera.matrix.elements[9], game.camera.matrix.elements[10]);
//        kamerablick = game.queue.worldToLocal(kamerablick);
//        richtungsvektor = game.queue.worldToLocal(richtungsvektor);
//
//        console.log(kamerablick);

        var zRichtung = new THREE.Vector3(0,0,1);

        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
//        game.queue.translateOnAxis(richtungsvektor, game.mausPosition.y_d * 20);
//		game.queue.translateOnAxis(game.camera.rotation, game.mausPosition.y_d * 10);
        game.queue.translateOnAxis (zRichtung, (game.mausPosition.y_d + game.mausPosition.x_d) * -10);
        game.queue.__dirtyRotation = true;
        game.queue.__dirtyPosition = true;
    }

}