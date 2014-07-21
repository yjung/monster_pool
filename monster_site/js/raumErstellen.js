// Tisch einladen und initialisieren
function raumLaden()/* Tisch falsch rotiert (steht hochkant): Gedreht beine fehlen (Export error oder altes File¿)*/
{
	// var ColladaLoader = new THREE.ColladaLoader();
	// // JSON-Loader erstellen
	// ColladaLoader.load('assets/dae/raum_a01.dae', function (collada)
	// {
	//
	// var modelScene = collada.scene;
	// var modelGeometry = modelScene.children[0].children[0].geometry;
	// var modelMaterial = modelScene.children[0].children[0].material;
	// /* Geometrie aus der .dae-Szene extrahieren*/
	// var daeGeometrie = collada.scene.children[0].children[0].geometry;  // Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
	//
	//
	// var tempWhite = new THREE.MeshPhongMaterial({
	// color : 0xFFFFFF,
	// wireframe : false
	// });
	//
	// game.raum = new THREE.Mesh(modelGeometry, modelMaterial);
	//
	// game.raum.scale.set(0.5,0.5,0.5);
	//
	// game.szene.add(game.raum);         // Collada Table Alpha zur Szene hinzufuegen
	// console.log("Raum geladen");
	// });
	plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial({
		color : 0xe0e0e0
	}));

	plane.rotation.x = -90 * (Math.PI / 180);

	game.szene.add(plane);
};

