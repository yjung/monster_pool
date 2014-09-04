function erstelleBumper(loader, xPosition, yPosition, zPosition)
{
	var ColladaLoader = new THREE.ColladaLoader();

	ColladaLoader.load('assets/dae/bumper.dae', function(collada)
	{
		var modelScene = collada.scene.children[0].children[0];
		var modelGeometry = modelScene.geometry;
		/* Geometrie aus der .dae-Szene extrahieren*/
		var modelMaterial = modelScene.material;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		var bumper = new Physijs.SphereMesh(modelGeometry, 
		erstelleCelShadingMaterial(
    			"bumperMat",												// Bezeichnung
    			THREE.ImageUtils.loadTexture( "assets/dae/tex/bumper.jpg" ),// Textur
    			new THREE.Vector3(1,1,1)									// Farbe
    		),
 		0);

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
