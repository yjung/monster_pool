function erstelleRampe(loader, xPosition, yPosition, zPosition, yRotation) 
{
	
	var ColladaLoader = new THREE.ColladaLoader();


	// Slider einladen
	ColladaLoader.load('assets/dae/rampe_a03.dae', function(collada) 
	{

		var modelScene = collada.scene;
		console.log(modelScene);
		var rampenbestandteile = 1;
		var szenenbestandteile = modelScene.children.length;
		/* Geometrie aus der .dae-Szene extrahieren*/
		var modelGeometry = modelScene.children[0].children[0].geometry;
		var modelMaterial = modelScene.children[0].children[0].material;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		var rampe = new THREE.Mesh(modelGeometry, modelMaterial);

		rampe.position.x = xPosition;
		rampe.position.y = yPosition;
		rampe.position.z = zPosition;
		rampe.rotation.y = yRotation;
		rampe.scale.x = 50.0;
		rampe.scale.y = 50.0;
		rampe.scale.z = 50.0;
		game.szene.add(rampe);
		
		// Collider importieren
		for (var j = rampenbestandteile; j < szenenbestandteile; j++) 
		{
		var colliderObjekt = modelScene.children[j].children[0];
		// var colliderName = colliderObjekt.name;
		var colliderPosition = colliderObjekt.position;
		var colliderGeometrie = colliderObjekt.geometry;
		// var colliderMaterial = colliderObjekt.children[0].material;

		var collider = new Physijs.ConvexMesh(colliderGeometrie, pTransparentT,0);
		// collider.scale.set(0.25,0.25,0.25);
		collider.position.x = xPosition+colliderObjekt.position.x;
		collider.position.y = yPosition+colliderObjekt.position.y;
		collider.position.z = zPosition+colliderObjekt.position.z;
		collider.rotation.y = yRotation;
		collider.scale.x = 50.0;
		collider.scale.y = 50.0;
		collider.scale.z = 50.0;
		collider.rotation.x = 0.09086;
		game.szene.add(collider);
			console.log(collider);
			
		};
	});
};


// function erstelleRampeJS(PosX,PosY, PosZ, RotY){
	// var loader = new THREE.JSONLoader();
// 	
	// loader.load('assets/json/rampe.js', function(geometry, materials){
		// var rampe = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
// 		
	// /*	var rampe = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
			// wireframe: true,
			// color: 'blue'
		// }));
// 		
	// */	
		// rampe.position.x = PosX;
		// rampe.position.y = PosY;
		// rampe.position.z = PosZ;
		// rampe.rotation.y = RotY;
// 		
		// console.log("rampe");
		// console.log(rampe);
// 		
		// game.szene.add(rampe);
	// });
// }
