// Tisch einladen und initialisieren
function raumLaden()/* Tisch falsch rotiert (steht hochkant): Gedreht beine fehlen (Export error oder altes File¿)*/
{
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	
	material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture("assets/dae/tex/dielen.png") });
	
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
};