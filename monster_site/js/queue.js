// Queue einladen und initialisieren
function queueLaden() {
    var ColladaLoader = new THREE.ColladaLoader();                          // Collada-Loader erstellen
    // ColladaLoader.load('assets/dae/queue_a02.dae', function (collada) {  // Einladen der Datei mit Referenz "collada"
    ColladaLoader.load('assets/dae/queue.dae', function (collada) {  // Einladen der Datei mit Referenz "collada"
        /* Geometrie aus der .dae-Szene extrahieren*/
        var daeGeometrie = collada.scene.children[0].children[0].geometry;  // Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		var daeMaterial = collada.scene.children[0].children[0].material;
        /*Physikalischer Queue mit Physi.js*/
        var queueMaterial = daeMaterial;         // Physi.js-Material initialisieren
        game.queue = new Physijs.CylinderMesh(daeGeometrie, queueMaterial, 0);   // Objekterzeugung
        game.queue._physijs.collision_flags = 4; 		                    // COLLISION IST ZUM BUGFIXING NOCH DEAKTIVIERT

        //game.queue.useQuaternion = true;

        game.queue.rotation.copy(game.kamera.rotation);

game.queue.scale.set( 0.5, 0.5, 0.5 );

		game.queue.stosskraftX = 0;
		game.queue.stosskraftY = 0;
		game.queue.stosskraftZ = 0;
		game.queue.offsetX = 0;
		game.queue.offsetY = 0;
		game.queue.offsetZ = 0;
		
        game.szene.add(game.queue);                                         // Queue zur Szene hinzufuegen
    });
};