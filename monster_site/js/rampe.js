function erstelleRampe(loader, xPosition, yPosition, zPosition) {
	
	var ColladaLoader = new THREE.ColladaLoader();


	// Slider einladen
	ColladaLoader.load('assets/dae/rampeN.dae', function(collada) {

		var modelScene = collada.scene.children[0].children[0];
		var modelGeometry = modelScene.geometry;
		/* Geometrie aus der .dae-Szene extrahieren*/
		var modelMaterial = modelScene.material;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		var bumper = new THREE.Mesh(modelGeometry, modelMaterial);

		bumper.position.x = xPosition;
		bumper.position.y = yPosition;
		bumper.position.z = zPosition;

		game.szene.add(bumper);
		console.log(bumper);
	});

}

function erstelleRampeJS(PosX,PosY, PosZ, RotY){
	var loader = new THREE.JSONLoader();
	
	loader.load('assets/json/rampe.js', function(geometry, materials){
		var rampe = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
		
	/*	var rampe = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
			wireframe: true,
			color: 'blue'
		}));
		
	*/	
		rampe.position.x = PosX;
		rampe.position.y = PosY;
		rampe.position.z = PosZ;
		rampe.rotation.y = RotY;
		
		console.log("rampe");
		console.log(rampe);
		
		game.szene.add(rampe);
	});
}
