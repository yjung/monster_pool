// Tisch einladen und initialisieren
function sceneLaden()
{
	raumLaden();
	erstelleUmgebungsCollider();
	lichterLaden();
}

function raumLaden()
{
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen

	material = new THREE.MeshLambertMaterial(
	{
		map : THREE.ImageUtils.loadTexture("assets/dae/tex/dielen.png")
	});

	ColladaLoader.load('assets/dae/raum_a05.dae', function(collada)
	{

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++)
		{
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			game.raum.i = new THREE.Mesh(modelGeometry, modelMaterial);
			game.raum.i.scale.set(0.25, 0.25, 0.25);

			// Collada Room zur Szene hinzufuegen
			game.szene.add(game.raum.i);

		}
	});

	// Bar laden
	ColladaLoader.load('assets/dae/bar.dae', function(collada)
	{

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++)
		{
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			var element = new THREE.Mesh(modelGeometry, modelMaterial);
			element.scale.set(0.25, 0.25, 0.25);

			// Collada Bar zur Szene hinzufuegen
			game.szene.add(element);
		}
	});

	// Moebel laden
	ColladaLoader.load('assets/dae/tischeStuehle_a01.dae', function(collada)
	{

		var modelScene = collada.scene;
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++)
		{
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			var element = new THREE.Mesh(modelGeometry, modelMaterial);
			element.scale.set(0.25, 0.25, 0.25);

			// Collada Tische und stuehle zur Szene hinzufuegen
			game.szene.add(element);
		}
	});
}

// Collider erstellen
function erstelleUmgebungsCollider()
{
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

	umgebungsCollider.addEventListener('collision', roomCollideEvent);
}

//Lade LampenObjekte (Spotlight lampe und Area Light Lampe)
function lichterLaden()
{
	var LightColladaLoader = new THREE.ColladaLoader();
	// Lampe fuer Spotlichter laden
	LightColladaLoader.load('assets/dae/lampeSpot.dae', function(collada) 
	{

		var modelScene = collada.scene;
		console.log(modelScene);
		var szenenbestandteile = modelScene.children.length;
		for (var i = 0; i < szenenbestandteile; i++) 
		{
			var modelGeometry = modelScene.children[i].children[0].geometry;
			// Geometrie aus der .dae-Szene extrahieren
			var modelMaterial = modelScene.children[i].children[0].material;

			var element = new THREE.Mesh(modelGeometry, modelMaterial);
			element.scale.set(0.25, 0.25, 0.25);

			// Collada Spotlight lampe zur Szene hinzufuegen
			game.szene.add(element);
		}
	})
	
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

function roomCollideEvent(object)
{
	if (object === game.whiteBall)
	{
		window.setTimeout(whiteCollideRoom, 3000);
	}
	else
	{
		monsterCollideRoom();
	}
}

function whiteCollideRoom()
{
	positionBall(0, 22, 15);
}

function monsterCollideRoom()
{
	monsterCounter -= 1;
	//Counter von 15 bis 0 aktualisieren
	console.log(monsterCounter);
}
