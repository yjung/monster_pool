// Tisch einladen und initialisieren
function sceneLaden() {
	raumLaden();
	erstelleUmgebungsCollider();
	// lichterLaden();
}

function raumLaden() {
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen

	material = new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture("assets/dae/tex/dielen.png")
	});

	ColladaLoader.load('assets/dae/raum.dae', function(collada) {

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++) {
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;
			game.raum.i = new THREE.Mesh(modelGeometry, modelMaterial);
			game.raum.i.scale.set(0.25, 0.25, 0.25);
			game.raum.i.receiveShadow = true;
			// Collada Room zur Szene hinzufuegen
			game.szene.add(game.raum.i);

		}
	});

	// Bar laden
	ColladaLoader.load('assets/dae/bar.dae', function(collada) {

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++) {
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			var element = new THREE.Mesh(modelGeometry, modelMaterial);
			// element.scale.set(0.25, 0.25, 0.25);
			element.receiveShadow = true;
			// Collada Bar zur Szene hinzufuegen
			game.szene.add(element);
		}
	});

	// Girlande laden

	var texture = THREE.ImageUtils.loadTexture('assets/dae/tex/girlande.png', {}, function() {
		var plane = new THREE.PlaneGeometry( 100, 20 );
		texture.needsUpdate = true;		// important
		// uniforms
		var uniforms = {
			        color: { type: "c", value: new THREE.Color( 0x000 ) }, // material is "red"
			texture : {
				type : "t",
				value : texture
			},
		};

		// attributes
		var attributes = {
		};

		// material
		var material = new THREE.ShaderMaterial({
			attributes : attributes,
			uniforms : uniforms,
			vertexShader : document.getElementById('TransparentVS').textContent,
			fragmentShader : document.getElementById('TransparentFS').textContent
		});
		
		var girlande = new THREE.Mesh(plane, material);

		girlande.position.x = -80;
		girlande.position.y = 40;
		girlande.position.z = -60;

		girlande.rotation.y = 0.785;

		var girlande2 = new THREE.Mesh(plane, material);
		girlande2.position.x = 80;
		girlande2.position.y = 32.5;
		girlande2.position.z = 40;

		girlande2.rotation.y = -1.57;
		// Collada Bar zur Szene hinzufuegen
		game.szene.add(girlande);
		game.szene.add(girlande2);
	});

	// Moebel laden
	ColladaLoader.load('assets/dae/tischeStuehle.dae', function(collada) {

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++) {
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			var element = new THREE.Mesh(modelGeometry, modelMaterial);
			element.scale.set(0.25, 0.25, 0.25);
			element.receiveShadow = true;
			// Collada Tische und stuehle zur Szene hinzufuegen
			game.szene.add(element);
		}
	});
}

// Collider erstellen
function erstelleUmgebungsCollider() {
	// Boden
	var umgebungsCollider = new Physijs.BoxMesh(new THREE.BoxGeometry(240, 1, 200), pTransparentT, 0);

	// Eingangswand
	var eingangsWand = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 50, 200), pTransparentT, 0);
	eingangsWand.position.x = -120;
	umgebungsCollider.add(eingangsWand);

	// Thekenwand
	var thekenWand = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 50, 200), pTransparentT, 0);
	thekenWand.position.x = 120;
	umgebungsCollider.add(thekenWand);

	// Fensterwand
	var fensterWand = new Physijs.BoxMesh(new THREE.BoxGeometry(240, 50, 2), pTransparentT, 0);
	fensterWand.position.z = 90;
	umgebungsCollider.add(fensterWand);

	// Eckwand
	var eckWand = new Physijs.BoxMesh(new THREE.BoxGeometry(240, 50, 2), pTransparentT, 0);
	eckWand.position.z = -90;
	umgebungsCollider.add(eckWand);

	// Ecke
	var ecke = new Physijs.BoxMesh(new THREE.BoxGeometry(65, 50, 2), pTransparentT, 0);
	ecke.rotation.y = -0.78;
	ecke.position.z = -65;
	ecke.position.x = 95;
	umgebungsCollider.add(ecke);

	game.szene.add(umgebungsCollider);

	umgebungsCollider.addEventListener('collision', roomCollideEvent);
}

//Lade LampenObjekte (Spotlight lampe und Area Light Lampe)
function lichterLaden() {
	var LightColladaLoader = new THREE.ColladaLoader();
	// Lampe fuer Spotlichter laden
	LightColladaLoader.load('assets/dae/lampeSpot.dae', function(collada) {

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++) {
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			var element = new THREE.Mesh(modelGeometry, modelMaterial);
			element.scale.set(0.25, 0.25, 0.25);

			// Collada Spotlight lampe zur Szene hinzufuegen
			game.szene.add(element);
		}
	});

	// //Lampe fuer Flaechenlichter laden
	// LightColladaLoader.load('assets/dae/lampeArea.dae', function(collada) {

	// var modelScene = collada.scene;
	// console.log(modelScene);
	// var szenenbestandteile = modelScene.children.length;
	// for (var i = 0; i < szenenbestandteile; i++) {
	// var modelGeometry = modelScene.children[i].children[0].geometry;
	// // Geometrie aus der .dae-Szene extrahieren
	// var modelMaterial = modelScene.children[i].children[0].material;

	// var element = new THREE.Mesh(modelGeometry, modelMaterial);
	// // element.scale.set(0.25, 0.25, 0.25);
	// // Collada Area Light lampe zur Szene hinzufuegen
	// game.szene.add(element);
	// }
	// })
}

function roomCollideEvent(object) {
	if (object === game.whiteBall) {
		window.setTimeout(whiteCollideRoom, 3000);
		setTimer("White Ball fell down! Wait: ", 3);
	} else {
		monsterCollideRoom();
	}
}

function whiteCollideRoom() {
	positionBall(0, 22, 15);
}

function monsterCollideRoom() {
	game.monsterCounter -= 1;
	//Counter von 15 bis 0 aktualisieren
	$("#balls").text(game.monsterCounter);
}
