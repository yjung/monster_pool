// Tisch einladen und initialisieren
function raumLaden()/* Tisch falsch rotiert (steht hochkant): Gedreht beine fehlen (Export error oder altes File¿)*/
{
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen

	material = new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture("assets/dae/tex/dielen.png")
	});

	ColladaLoader.load('assets/dae/raum_a05.dae', function(collada) {

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for ( i = 0; i < szenenbestandteile; i++) {
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			game.raum.i = new THREE.Mesh(modelGeometry, modelMaterial);
			game.raum.i.scale.set(0.25, 0.25, 0.25);

			// Collada Table Alpha zur Szene hinzufuegen
			game.szene.add(game.raum.i);

		}
	});

	// Moebel laden
	ColladaLoader.load('assets/dae/tischeStuehle_a01.dae', function(collada) {

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for ( i = 0; i < szenenbestandteile; i++) {
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			var element = new THREE.Mesh(modelGeometry, modelMaterial);
			element.scale.set(0.25, 0.25, 0.25);

			// Collada Table Alpha zur Szene hinzufuegen
			game.szene.add(element);
		}
	});
	erstelleUmgebungsCollider();
};

// Collider erstellen
function erstelleUmgebungsCollider() {
	// Boden
	var umgebungsCollider = new Physijs.BoxMesh(new THREE.CubeGeometry(240, 1, 200), lTransparentT, 0);

	// Eingangswand
	var eingangsWand = new Physijs.BoxMesh(new THREE.CubeGeometry(2, 50, 200), lTransparentT, 0);
	eingangsWand.position.x = -120;
	umgebungsCollider.add(eingangsWand);

	// Thekenwand
	var thekenWand = new Physijs.BoxMesh(new THREE.CubeGeometry(2, 50, 200), lTransparentT, 0);
	thekenWand.position.x = 120;
	umgebungsCollider.add(thekenWand);

	// Fensterwand
	var fensterWand = new Physijs.BoxMesh(new THREE.CubeGeometry(240, 50, 2), lTransparentT, 0);
	fensterWand.position.z = 90;
	umgebungsCollider.add(fensterWand);

	// Eckwand
	var eckWand = new Physijs.BoxMesh(new THREE.CubeGeometry(240, 50, 2), lTransparentT, 0);
	eckWand.position.z = -90;
	umgebungsCollider.add(eckWand);

	// Ecke
	var ecke = new Physijs.BoxMesh(new THREE.CubeGeometry(65, 50, 2), lTransparentT, 0);
	ecke.rotation.y = -0.78;
	ecke.position.z = -65;
	ecke.position.x = 95;
	umgebungsCollider.add(ecke);

	game.szene.add(umgebungsCollider);
}
