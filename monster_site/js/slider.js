function erstelleSlider(loader, xPosition, yPosition, zPosition) {
	var colladaLoader = loader;

	// Slider einladen
	colladaLoader.load('assets/dae/slider.dae', function(collada) {

		var modelScene = collada.scene;

		var modelGeometry = modelScene.children[0].children[0].geometry;
		/* Geometrie aus der .dae-Szene extrahieren*/
		var modelMaterial = modelScene.children[0].children[0].material;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene

		var slider = new THREE.Mesh(modelGeometry, modelMaterial);

		slider.position.y = 20;

		game.szene.add(slider);
		// Collada Table Alpha zur Szene hinzufuegen
	});

}
