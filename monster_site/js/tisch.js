// Tisch einladen und initialisieren
function tischLaden() {
    var JSONloader = new THREE.JSONLoader();        // JSON-Loader erstellen
	JSONloader.load('../assets/json/snooker_a01.js', function(geometry, mat) {
		game.tisch = new THREE.Mesh(geometry, mat[0]);
		game.tisch.scale.x = .5;        // (Noch IM 3D-MODELL AENDERN!)
		game.tisch.scale.y = .5;        // (Noch IM 3D-MODELL AENDERN!)
		game.tisch.scale.z = .5;        // (Noch IM 3D-MODELL AENDERN!)

		game.tisch.position.x = -30;    // (Noch IM 3D-MODELL AENDERN!)
		game.tisch.position.z = 15;     // (Noch IM 3D-MODELL AENDERN!)

		game.szene.add(game.tisch);     // Tisch zur Szene hinzufuegen
	}, '../assets/tex/');               // Verweis auf Verzeichnis der Texturen
};

