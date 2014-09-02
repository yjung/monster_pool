// Queue einladen und initialisieren
function queueLaden() {
	var ColladaLoader = new THREE.ColladaLoader();
	// Collada-Loader erstellen
	// ColladaLoader.load('assets/dae/queue_a02.dae', function (collada) {  // Einladen der Datei mit Referenz "collada"
	ColladaLoader.load('assets/dae/queue.dae', function(collada) {// Einladen der Datei mit Referenz "collada"
		/* Geometrie aus der .dae-Szene extrahieren*/
		var daeGeometrie = collada.scene.children[0].children[0].geometry;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		var daeMaterial = collada.scene.children[0].children[0].material;
		/*Physikalischer Queue mit Physi.js*/
		var queueMaterial = daeMaterial;
		// Physi.js-Material initialisieren
		game.queue = new Physijs.CylinderMesh(daeGeometrie, erstelleCelShadingMaterial("queueMat", // Bezeichnung
		THREE.ImageUtils.loadTexture("assets/dae/tex/queue.jpg"), // Textur
		new THREE.Vector3(1, 1, 1)	// Farbe
		), 0);
		// Objekterzeugung
		game.queue._physijs.collision_flags = 4;
		// COLLISION IST ZUM BUGFIXING NOCH DEAKTIVIERT

		game.queue.rotation.copy(game.kamera.rotation);

		game.queue.scale.set(0.5, 0.5, 0.5);

		game.queue.stosskraftX = 0;
		game.queue.stosskraftY = 0;
		game.queue.stosskraftZ = 0;
		game.queue.offsetX = 0;
		game.queue.offsetY = 0;
		game.queue.offsetZ = 0;

		game.szene.add(game.queue);
		// Queue zur Szene hinzufuegen

		game.queue.addEventListener('collision', function(other_object, relative_velocity, relative_rotation, contact_normal) {
			if(other_object == game.whiteBall){				
				applyForce();
			}
		});
	});

};

/* Erstellt Listener zum Ueberpruefen ob gerade linke und rechte Maustaste parallel geklickt sind.*/
function erstelleMausKontrolle() {

	$(document).mousedown(function(e) {
		if (e.which == 1) {
			game.controlls.linkeTasteUnten = true;

		} else if (e.which == 3) {
			game.controlls.rechteTasteUnten = true;
		}
		if (game.controlls.linkeTasteUnten && game.controlls.rechteTasteUnten) {
			game.controlls.stossKontrolle = true;
		}
	});

	$(document).mouseup(function(e) {
		if (e.which == 1) {
			game.controlls.linkeTasteUnten = false;
			console.log("Links oben");
		} else if (e.which == 3) {
			game.controlls.rechteTasteUnten = false;
			console.log("Rechts oben");
		}
		game.controlls.stossKontrolle = false;
	});
};

function erstelleStossKontrolle() {
	game.controlls.last_position = {}, $(document).on('mousemove', function(event) {

		if ( typeof (game.controlls.last_position.x) != 'undefined') {

			game.controlls.deltaX = game.controlls.last_position.x - event.clientX;
			game.controlls.deltaY = game.controlls.last_position.y - event.clientY;

			if (Math.abs(game.controlls.deltaX) > Math.abs(game.controlls.eltaY) && game.controlls.deltaX > 0) {
			} else if (Math.abs(game.controlls.deltaX) > Math.abs(game.controlls.deltaY) && game.controlls.deltaX < 0) {
			} else if (Math.abs(game.controlls.deltaY) > Math.abs(game.controlls.deltaX) && game.controlls.deltaY > 0) {
			} else if (Math.abs(game.controlls.deltaY) > Math.abs(game.controlls.deltaX) && game.controlls.deltaY < 0) {
			}
		}

		game.controlls.last_position = {
			x : event.clientX,
			y : event.clientY
		};
	});
};

function stossKontrolle(deltaZeit) {
	stossRichtungErmitteln();

	var faktor = 0.5;

	game.queue.__dirtyRotation = true;
	game.queue.__dirtyPosition = true;
	console.log(game.queue);
	game.queue.position.x += game.controlls.stossRichtung.x * game.controlls.deltaY * deltaZeit * faktor;
	game.queue.position.y += game.controlls.stossRichtung.y * game.controlls.deltaY * deltaZeit * faktor;
	game.queue.position.z += game.controlls.stossRichtung.z * game.controlls.deltaY * deltaZeit * faktor;
	game.queue.__dirtyRotation = true;
	game.queue.__dirtyPosition = true;
};

function stossRichtungErmitteln() {
	var korrektur = new THREE.Vector3(game.kamera.position.x, game.whiteBall.position.y + 3, game.kamera.position.z);
	game.controlls.stossRichtung.subVectors(game.kamera.position, game.whiteBall.position);
};
