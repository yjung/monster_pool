// // Tisch einladen und initialisieren
// function tischLaden() {
// var JSONloader = new THREE.JSONLoader();        // JSON-Loader erstellen
// JSONloader.load('../assets/json/snooker_a01.js', function(geometry, mat) {
// game.tisch = new THREE.Mesh(geometry, mat[0]);
// game.tisch.scale.x = .5;        // (Noch IM 3D-MODELL AENDERN!)
// game.tisch.scale.y = .5;        // (Noch IM 3D-MODELL AENDERN!)
// game.tisch.scale.z = .5;        // (Noch IM 3D-MODELL AENDERN!)
//
// game.tisch.position.x = -30;    // (Noch IM 3D-MODELL AENDERN!)
// game.tisch.position.z = 15;     // (Noch IM 3D-MODELL AENDERN!)
//
// game.szene.add(game.tisch);     // Tisch zur Szene hinzufuegen
// }, '../assets/tex/');               // Verweis auf Verzeichnis der Texturen
// };

// Tisch einladen und initialisieren
function tischLaden()/* Tisch falsch rotiert (steht hochkant): Gedreht beine fehlen (Export error oder altes File¿)*/
{
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	ColladaLoader.load('assets/dae/pooltable_a02.dae', function(collada) {

		var modelScene = collada.scene;
		var einzelteile = modelScene.children.length;
		console.log(modelScene);

		for ( i = 0; i < einzelteile; i++) {
		console.log(i);
		var modelGeometry = modelScene.children[i].children[0].geometry;
		var modelMaterial = modelScene.children[i].children[0].material;
		/* Geometrie aus der .dae-Szene extrahieren*/
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene

		var tempWhite = new THREE.MeshPhongMaterial({
			color : 0xFFFFFF,
			wireframe : false
		});

		game.tisch.i = new THREE.Mesh(modelGeometry, modelMaterial);

		game.tisch.i.scale.set(0.25,0.25,0.25);

		game.szene.add(game.tisch.i);
		// Collada Table Alpha zur Szene hinzufuegen
		}

	});
};

