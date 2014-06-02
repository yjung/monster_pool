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
	// if (game.state === game.modus.orbitrotation) {

		// Lokale Variablen zur Positionsberechnung
		var radiusAbstand = new THREE.Vector3(2, 2, 2);
		var richtungCam = new THREE.Vector3();
		var richtungCam = new THREE.Vector3();
		var positionBall = new THREE.Vector3();
		
		var positionQueue = new THREE.Vector3();

		// Positionsberechnung
		positionBall.copy((game.whiteBall.position)).negate();
		// positionBall.y -= 10;
		richtungCam = positionBall.add(game.camera.position);
		richtungCam.normalize();

		richtungCam.multiply(radiusAbstand);


		//Aktuelle Position addieren
		richtungCam.add(game.whiteBall.position);

		// richtungCam.y = game.whiteBall.position.y + 2;



		// game.queue.__dirtyPosition = true;
		game.queue.position = richtungCam;
		// game.queue.position.y += 2;
		// game.queue.__dirtyPosition = true;

		
		var qZiel = new THREE.Quaternion();
		var qAusgang = game.queue.rotation._quaternion;
		
		THREE.Quaternion.slerp(qAusgang, game.camera.rotation._quaternion, qZiel, 0.07);

		game.queue.__dirtyRotation = true;
		game.queue.rotation._quaternion.copy(qZiel);
		game.queue.__dirtyRotation = true;
		
		game.queue.rotation._x *= 0.5;
		game.queue.rotation._y *= 0.5;
		
		console.log(game.queue.rotation);

		game.orbitControls.Mittelpunkt.x = game.whiteBall.position.x;
		game.orbitControls.Mittelpunkt.y = game.whiteBall.position.y;
		game.orbitControls.Mittelpunkt.z = game.whiteBall.position.z;
		
		// ------------------------------------------------------------
	
	if (game.state === game.modus.statisch) {
		var richtungsvektor = new THREE.Vector3();
		richtungsvektor.set(
			game.whiteBall.position.x - game.queue.position.x, //
			game.whiteBall.position.y - game.queue.position.y, 
			game.whiteBall.position.y - game.queue.position.z
		);

		game.queue.__dirtyPosition = true;
		game.queue.position.x = game.queue.position.x / richtungsvektor.x * game.mausPosition.y_n + game.queue.position.x;
		// game.queue.position.y = game.queue.position.x / richtungsvektor.y * game.mausPosition.y_n + game.queue.position.y;
		game.queue.position.z = game.queue.position.x / richtungsvektor.z * game.mausPosition.y_n + game.queue.position.z;
		game.queue.__dirtyPosition = true;
	}

}