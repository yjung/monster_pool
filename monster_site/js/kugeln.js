function ladeKugeln(){
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	ColladaLoader.load('assets/dae/kugeln.dae', function(collada) {

		var modelScene = collada.scene;
		var anzahlKugeln = modelScene.children.length;

		for ( i = 0; i < anzahlKugeln; i++) {
		var kugelName = modelScene.children[i].children[0].parent.name;
		var kugelPosition = modelScene.children[i].children[0].parent.position;
		var kugelGeometrie = modelScene.children[i].children[0].geometry;
		var kugelMaterial = modelScene.children[i].children[0].material;
		
		var kugel = new Physijs.SphereMesh(kugelGeometrie, Physijs.createMaterial((kugelMaterial),	0.1, 1.0),100);
		kugel.name="ball-"+i;
		// kugel.scale.set(0.25,0.25,0.25);
		kugel.position.x = kugelPosition.x * 0.25;
		kugel.position.y = kugelPosition.y * 0.25;
		kugel.position.z = kugelPosition.z * 0.25;
// 
		game.szene.add(kugel);
		
			kugel.addEventListener('collision', function(object) {
				patron= new RegExp("^ball"); //Pattern: The name starts with ball
				console.log("Comparacion con "+object.name+": "+patron.test(object.name));
				if((object === game.whiteBall)||(patron.test(object.name))){
					soundEffekt("ball-ball");
				}					
			  
		    });
		}
	});
};

