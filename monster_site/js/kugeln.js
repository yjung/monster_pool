function ladeKugeln(){
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	ColladaLoader.load('assets/dae/kugeln_a04.dae', function(collada) {

		var modelScene = collada.scene;
		var anzahlKugeln = modelScene.children.length;

		var kugelMaterial = modelScene.children[0].children[0].material;
		var texturAtlas = THREE.ImageUtils.loadTexture(kugelMaterial.map.sourceFile); // Textur
		for ( i = 0; i < anzahlKugeln; i++) {
		var kugelName = modelScene.children[i].children[0].parent.name;
		var kugelPosition = modelScene.children[i].children[0].parent.position;
		var kugelGeometrie = modelScene.children[i].children[0].geometry;
		
		var kugel = new Physijs.SphereMesh(kugelGeometrie, Physijs.createMaterial(
			erstelleCelShadingMaterial(kugelName, // Bezeichnung
			texturAtlas,
			new THREE.Vector3(1, 1, 1)	// Farbe
		),
		0.1, 1.0),800);
		kugel.name="ball-"+i;
		kugel.position.x = kugelPosition.x * 0.25;
		kugel.position.y = kugelPosition.y * 0.25;
		kugel.position.z = kugelPosition.z * 0.25;
// 
		game.szene.add(kugel);
		
			kugel.addEventListener('collision', function(object) {
				pattern = new RegExp("^ball"); //Pattern: The name starts with ball
				// console.log("Comparacion con "+object.name+": "+pattern.test(object.name));
				if((object === game.whiteBall)||(pattern.test(object.name))){
					soundEffekt("ball-ball");
				}					
			  
		    });
		}
	});
};

