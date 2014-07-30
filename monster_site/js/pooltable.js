// Tisch einladen und initialisieren
function ladePooltable()/* Tisch falsch rotiert (steht hochkant): Gedreht beine fehlen (Export error oder altes File¿)*/
{
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	ColladaLoader.load('assets/dae/pooltable.dae', function(collada) {

		var modelScene = collada.scene;
		var tischbestandteile = 6; 												// Aktuell besteht das Tischmodell aus 7 Einzelteilen 
		var szenenbestandteile = modelScene.children.length;					// Abfragen wieiviel Objekte noch folgen (Das sind Collider)

		for ( i = 0; i < tischbestandteile; i++) {								// Fuer alle Tischteile
		var modelGeometry = modelScene.children[i].children[0].geometry; 		// Geometrie aus der .dae-Szene extrahieren
		var modelMaterial = modelScene.children[i].children[0].material;		// Material aus der .dae-Szene extrahieren
		
		game.tisch.i = new THREE.Mesh(modelGeometry, modelMaterial);			// Einzelteile zusammenfuegen
		game.tisch.i.scale.set(0.25,0.25,0.25);									// FIX: Sollte im dae-File behoben werden!

		game.szene.add(game.tisch.i); 											// Collada-Table zur Szene hinzufuegen
		}
		
		// Collider importieren
		for ( j = tischbestandteile; j < szenenbestandteile; j++) {
		var colliderObjekt = modelScene.children[j].children[0].parent.children[0].parent;
		var colliderName = colliderObjekt.name;
		var colliderPosition = colliderObjekt.position;
		var colliderGeometrie = colliderObjekt.children[0].geometry;
		var colliderMaterial = colliderObjekt.children[0].material;

		var collider = new Physijs.BoxMesh(colliderGeometrie, colliderMaterial,0);
		collider.scale.set(0.25,0.25,0.25);
		collider.position.x = colliderPosition.x * 0.25;
		collider.position.y = colliderPosition.y * 0.25;
		collider.position.z = colliderPosition.z * 0.25;

		game.szene.add(collider);
		// Collada Table Alpha zur Szene hinzufuegen
		}
	});
	erstelleHindernisse(ColladaLoader);
};

function erstelleHindernisse(ColladaLoader){
	
	var posStart = new THREE.Vector3(8,17,22);	// Startpunkt Slider-Animation
	var posZiel = new THREE.Vector3(-8,17,22);	// Endpunkt Slider-Animation
	var rotStart = new THREE.Vector3(0,110,0);	// Startrotation Slider-Animation
	var rotZiel = new THREE.Vector3(0,70,0);	// Endrotation Slider-Animation
	
	erstelleSlider(posStart, posZiel, rotStart, rotZiel);
	// erstelleBumper(ColladaLoader, 2, 18, 0);

};

