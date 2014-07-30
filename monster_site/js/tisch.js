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
	ColladaLoader.load('assets/dae/pooltable_a04.dae', function(collada) {

		var modelScene = collada.scene;
		var tischbestandteile = 6; 						// Aktuell besteht das Tischmodell aus 7 Einzelteilen 
		var szenenbestandteile = modelScene.children.length;

		for ( i = 0; i < tischbestandteile; i++) {
		var modelGeometry = modelScene.children[i].children[0].geometry;
		var modelMaterial = modelScene.children[i].children[0].material;
		/* Geometrie aus der .dae-Szene extrahieren*/
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		

		game.tisch.i = new THREE.Mesh(modelGeometry, modelMaterial);
		game.tisch.i.scale.set(0.25,0.25,0.25);

		game.szene.add(game.tisch.i);
		// Collada Table Alpha zur Szene hinzufuegen
		}
		
		// Collider importieren
		for ( j = tischbestandteile; j < szenenbestandteile; j++) {
		var colliderObjekt = modelScene.children[j].children[0].parent.children[0].parent;
		var colliderName = colliderObjekt.name;
		var colliderPosition = colliderObjekt.position;
		var colliderGeometrie = colliderObjekt.children[0].geometry;
		var colliderMaterial = colliderObjekt.children[0].material;

		var collider = new Physijs.BoxMesh(colliderGeometrie, colliderMaterial,0);
		collider.scale.set(0.25,0.25,0.25);
		collider.position.x = colliderPosition.x * 0.25;
		collider.position.y = colliderPosition.y * 0.25;
		collider.position.z = colliderPosition.z * 0.25;

		game.szene.add(collider);
		// Collada Table Alpha zur Szene hinzufuegen
		}
	});
	erstelleHindernisse(ColladaLoader);
};

function erstelleHindernisse(ColladaLoader){
	
	var posStart = new THREE.Vector3(8,17,22);	// Startpunkt Slider-Animation
	var posZiel = new THREE.Vector3(-8,17,22);	// Endpunkt Slider-Animation
	var rotStart = new THREE.Vector3(0,110,0);	// Startrotation Slider-Animation
	var rotZiel = new THREE.Vector3(0,70,0);	// Endrotation Slider-Animation
	
	erstelleSlider(posStart, posZiel, rotStart, rotZiel);
	// erstelleBumper(ColladaLoader, 2, 18, 0);

	// // Bumper einladen
	// ColladaLoader.load('assets/dae/bumper.dae', function(collada) {
		// var bumper = new THREE.Mesh(collada.scene.children[0].children[0].geometry, collada.scene.children[0].children[0].material);
// 
		// bumper.position.y = 20;
// 		
		// game.szene.add(bumper); // Collada Table Alpha zur Szene hinzufuegen	
// });	
};

