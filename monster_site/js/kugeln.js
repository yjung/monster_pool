function ladeKugeln(){
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	ColladaLoader.load('assets/dae/kugeln.dae', function(collada) {

		var modelScene = collada.scene;
		var anzahlKugeln = modelScene.children.length;

		console.log(anzahlKugeln);
		// for ( i = 0; i < tischbestandteile; i++) {
		// var modelGeometry = modelScene.children[i].children[0].geometry;
		// var modelMaterial = modelScene.children[i].children[0].material;
		// /* Geometrie aus der .dae-Szene extrahieren*/
		// // Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
// 		
// 
		// game.tisch.i = new THREE.Mesh(modelGeometry, modelMaterial);
		// game.tisch.i.scale.set(0.25,0.25,0.25);
// 
		// game.szene.add(game.tisch.i);
		// // Collada Table Alpha zur Szene hinzufuegen
		// }
// 		
		// // Collider importieren
		for ( i = 0; i < anzahlKugeln; i++) {
		var kugelName = modelScene.children[i].children[0].parent.name;
		var kugelPosition = modelScene.children[i].children[0].parent.position;
		var kugelGeometrie = modelScene.children[i].children[0].geometry;
		var kugelMaterial = modelScene.children[i].children[0].material;
		console.log(modelScene.children[i].children[0]);
		
		var kugel = new Physijs.SphereMesh(kugelGeometrie, kugelMaterial,100);

		// kugel.scale.set(0.25,0.25,0.25);
		kugel.position.x = kugelPosition.x * 0.25;
		kugel.position.y = kugelPosition.y * 0.25;
		kugel.position.z = kugelPosition.z * 0.25;
// 
		game.szene.add(kugel);
		}
	});
};

