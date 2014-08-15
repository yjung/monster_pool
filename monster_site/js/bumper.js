function erstelleBumper(loader, xPosition, yPosition, zPosition)
{

	var ColladaLoader = new THREE.ColladaLoader();

	// Slider einladen
	ColladaLoader.load('assets/dae/bumper.dae', function(collada)
	{

		var modelScene = collada.scene.children[0].children[0];
		var modelGeometry = modelScene.geometry;
		/* Geometrie aus der .dae-Szene extrahieren*/
		var modelMaterial = modelScene.material;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		var bumper = new Physijs.SphereMesh(modelGeometry, modelMaterial, 0);

		bumper.position.x = xPosition;
		bumper.position.y = yPosition;
		bumper.position.z = zPosition;

		// Event zum Bumpen
		bumper.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal )  
		{
			console.log(contact_normal);
			
			applyForce(true);
		});




		game.szene.add(bumper);

	});

}
