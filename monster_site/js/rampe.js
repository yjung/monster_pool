function erstelleRampe(loader, xPosition, yPosition, zPosition, yRotation) 
{
	
	var ColladaLoader = new THREE.ColladaLoader();


	// Slider einladen
	ColladaLoader.load('assets/dae/rampe.dae', function(collada) 
	{

		var modelScene = collada.scene;
		var rampenbestandteile = 1;
		var szenenbestandteile = modelScene.children.length;
		/* Geometrie aus der .dae-Szene extrahieren*/
		var modelGeometry = modelScene.children[0].children[0].geometry;
		var modelMaterial = modelScene.children[0].children[0].material;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
		var rampe = new THREE.Mesh(modelGeometry, pBlueWireframeT);

		rampe.position.x = xPosition;
		rampe.position.y = yPosition;
		rampe.position.z = zPosition;
		rampe.rotation.y = yRotation;
		game.szene.add(rampe);
		
		// Collider importieren
		for (var j = rampenbestandteile; j < szenenbestandteile; j++) 
		{
		var colliderObjekt = modelScene.children[j].children[0];
		// var colliderName = colliderObjekt.name;
		var colliderPosition = colliderObjekt.position;
		var colliderGeometrie = colliderObjekt.geometry;
		// var colliderMaterial = colliderObjekt.children[0].material;

		var collider = new Physijs.BoxMesh(colliderGeometrie, pBlueWireframeT,0);
		// collider.scale.set(0.25,0.25,0.25);
		collider.position.x = colliderPosition.x;
		collider.position.y = colliderPosition.y;
		collider.position.z = colliderPosition.z;

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
