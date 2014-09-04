// Tisch einladen und initialisieren
function ladePooltable()/* Tisch falsch rotiert (steht hochkant): Gedreht beine fehlen (Export error oder altes File¿)*/
{
	if(debugMode){
		console.log("--Lade Billardtisch--");
	}
	
	var ColladaLoader = new THREE.ColladaLoader();
	// JSON-Loader erstellen
	ColladaLoader.load('assets/dae/pooltable.dae', function(collada) {

		var modelScene = collada.scene;
		var tischbestandteile = 6; 												// Aktuell besteht das Tischmodell aus 7 Einzelteilen 
		var szenenbestandteile = modelScene.children.length;					// Abfragen wieiviel Objekte noch folgen (Das sind Collider)

		for (var i = 0; i < tischbestandteile; i++) {								// Fuer alle Tischteile
		var modelGeometry = modelScene.children[i].children[0].geometry; 		// Geometrie aus der .dae-Szene extrahieren
		var modelMaterial = modelScene.children[i].children[0].material;		// Material aus der .dae-Szene extrahieren
		
		// Erstes Objekt ist die Filzflaeche. Fuer dieses wird ein Physijs-Material benoetigt.
		if(i==0){
			modelMaterial = Physijs.createMaterial(
    			erstelleCelShadingMaterial(
    				"filzMat",						// Bezeichnung
    				THREE.ImageUtils.loadTexture("assets/dae/tex/filz.jpg"),								// Textur
    				new THREE.Vector3(1,1,1)		// Farbe
    		), 1.0, 1.0);
    	}else{
			var diffuseColor = modelScene.children[i].children[0].material.color;
    		
    		modelMaterial = erstelleCelShadingMaterial(
    			"filzMat",						// Bezeichnung
    			false,							// Textur
				new THREE.Vector3(diffuseColor.r,diffuseColor.g,diffuseColor.b)		// Farbe
    		);
    	}
		game.tisch.i = new THREE.Mesh(modelGeometry, modelMaterial);			// Einzelteile zusammenfuegen
		game.szene.add(game.tisch.i); 											// Collada-Table zur Szene hinzufuegen
		}
		
		// Collider importieren
		for (var j = tischbestandteile; j < szenenbestandteile; j++) {
		var colliderObjekt = modelScene.children[j].children[0].parent.children[0].parent;
		var colliderName = colliderObjekt.name;
		var colliderPosition = colliderObjekt.position;
		var colliderGeometrie = colliderObjekt.children[0].geometry;
		// var colliderMaterial = colliderObjekt.children[0].material;
		var collider = new Physijs.BoxMesh(colliderGeometrie, lFrictionMatP,0);
		collider.position = colliderPosition;
		game.szene.add(collider); 		// Collada Table Alpha zur Szene hinzufuegen
		};
	});
	erstelleHindernisse(ColladaLoader);
};

function erstelleHindernisse(ColladaLoader){
	
	if(debugMode){
		console.log("--Lade Hindernisse--");
	}
	
	var posStart = new THREE.Vector3(8,18,22);	// Startpunkt Slider-Animation
	var posZiel = new THREE.Vector3(-8,18,22);	// Endpunkt Slider-Animation
	var rotStart = new THREE.Vector3(0,110,0);	// Startrotation Slider-Animation
	var rotZiel = new THREE.Vector3(0,70,0);	// Endrotation Slider-Animation
	
	erstelleSlider(posStart, posZiel, rotStart, rotZiel);	//Erstellt Slider und started Animation

	//2er Bumper lösung
	erstelleBumper(ColladaLoader, 12, 18, -22.5);
	erstelleBumper(ColladaLoader, 10.5, 18, -24);
	
	erstelleBumper(ColladaLoader, -12, 18, -22.5);
	erstelleBumper(ColladaLoader, -10.5, 18, -24);
	
	////3er Bumper Version
	// erstelleBumper(ColladaLoader, 12, 18, -21);
	// erstelleBumper(ColladaLoader, 10, 18, -22);
	// erstelleBumper(ColladaLoader, 9, 18, -24);
	
	// erstelleBumper(ColladaLoader, -12, 18, -21);
	// erstelleBumper(ColladaLoader, -10, 18,-22);
	// erstelleBumper(ColladaLoader, -9, 18, -24);
 
	erstelleRampe(ColladaLoader, 9,18,-20, 3.9269908169872414, true); 	//Rechte Rampe
	erstelleRampe(ColladaLoader, -9,18,-20, -0.7853981633974483, false);	//Linke Rampe


	 // erstellePaddleMitAnimation();
 	 

};

function erstellePaddleMitAnimation()
{
	/**erstelleflipper (enablemotor, PaddlePos, PivotPos, rechts);**/
	var flipperLeftConstraint = erstelleFlipper(false, new THREE.Vector3(-8,19,20),new THREE.Vector3(-10,19,20),false);
	var flipperRightConstraint = erstelleFlipper(false, new THREE.Vector3(8,19,20),new THREE.Vector3(10,19,20),true);

	// var controls = controler();
	// controls.updateMotor;
		// controler.updateMotor();
	
	loadDatGUI();

};//end Stuff 

function loadDatGUI() //Erstellt 2te GUI für den Motor
{
var gui = new dat.GUI();
    gui.domElement.style.position = 'absolute';
    gui.domElement.style.top = '20px';
    gui.domElement.style.left = '20px';

    var hingeFolder = gui.addFolder('hinge');
    hingeFolder.add(controls, "enableMotor").onChange(controls.updateMotor);
    game.szene.simulate();	
}