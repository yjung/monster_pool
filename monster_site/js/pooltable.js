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
			modelMaterial = Physijs.createMaterial((modelMaterial),	0.1, 1.0);}
		
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
		var collider = new Physijs.BoxMesh(colliderGeometrie, pTransparentT,0);
		collider.position = colliderPosition;
		game.szene.add(collider); 		// Collada Table Alpha zur Szene hinzufuegen
		}
	});
	erstelleHindernisse(ColladaLoader);
}

function erstelleHindernisse(ColladaLoader){
	
	if(debugMode){
		console.log("--Lade Hindernisse--");
	}
	
	var posStart = new THREE.Vector3(8,17,22);	// Startpunkt Slider-Animation
	var posZiel = new THREE.Vector3(-8,17,22);	// Endpunkt Slider-Animation
	var rotStart = new THREE.Vector3(0,110,0);	// Startrotation Slider-Animation
	var rotZiel = new THREE.Vector3(0,70,0);	// Endrotation Slider-Animation
	
	// erstelleSlider(posStart, posZiel, rotStart, rotZiel);
	

	
				// erstelleRampe(ColladaLoader, -10, 22, 22);
				// erstelleRampeJS(9,18,20, 2.2);
				// erstelleRampeJS(-9,18,20, 0.8);
				
				
				//Paddel erstellen und animation anschmeißen
				// var paddleLeftConstraint = erstellePaddleJS(-10,18,-2, -1.7);
				// var paddleRightConstraint = erstellePaddleJS(10,18,2, 1.7);
				// console.log(paddleLeftConstraint);
				// paddleLeftConstraint.enableAngularMotor(-10, 2);
			                
			    // paddleRightConstraint.enableAngularMotor(-1 * -10, 2);
				// updateMotor();
				

	
	
	 
 	 
	erstelleBumper(ColladaLoader, 12, 18, -21);
	erstelleBumper(ColladaLoader, 10, 18, -22);
	erstelleBumper(ColladaLoader, 9, 18, -24);
	
	erstelleBumper(ColladaLoader, -12, 18, -21);
	erstelleBumper(ColladaLoader, -10, 18, -22);
	erstelleBumper(ColladaLoader, -9, 18, -24);
	 
	 erstelleRampe(ColladaLoader, 9,18,-20, 3.9269908169872414, true); 	//Rechte Rampe
	 erstelleRampe(ColladaLoader, -9,18,-20, -0.7853981633974483, false);	//Linke Rampe

};
function stuff()
{
var initScene, render, applyForce, setMousePosition, mouse_position,
        ground_material, box_material,
        projector, renderer, render_stats, physics_stats, scene, ground, light, camera, box, boxes = [];


    
    var meshes = [];

    var flipperLeftConstraint = createLeftFlipper();
    var flipperRightConstraint = createRightFlipper();

  

    var controls = new function () 
   {
        this.enableMotor = false;
        this.acceleration = 2;
        this.velocity = -10;

        this.enableConeTwistMotor = false;
        this.motorTargetX = 0;
        this.motorTargetY = 0;
        this.motorTargetZ = 0;


        this.updateMotor = function () 
        {
            if (controls.enableMotor) {
                // velocity is the velocity we are going for.
                // acceleration is how fast we're going to reach it
                flipperLeftConstraint.disableMotor();
                flipperLeftConstraint.enableAngularMotor(controls.velocity, controls.acceleration);
                flipperRightConstraint.disableMotor();
                flipperRightConstraint.enableAngularMotor(-1 * controls.velocity, controls.acceleration);
            } else {
                flipperLeftConstraint.disableMotor();
                flipperRightConstraint.disableMotor();
            }
        };



        this.clearMeshes = function () 
        {
            meshes.forEach(function (e) {
                scene.remove(e);
            });
            meshes = [];
        };


    };

    controls.updateMotor();

    var gui = new dat.GUI();
    gui.domElement.style.position = 'absolute';
    gui.domElement.style.top = '20px';
    gui.domElement.style.left = '20px';

    var generalFolder = gui.addFolder('general');
    generalFolder.add(controls, "acceleration", 0, 15).onChange(controls.updateMotor);
    generalFolder.add(controls, "velocity", -10, 10).onChange(controls.updateMotor);

    var hingeFolder = gui.addFolder('hinge');
    hingeFolder.add(controls, "enableMotor").onChange(controls.updateMotor);

 
 
   

    requestAnimationFrame(render);
    scene.simulate();
};

function createLeftFlipper() {
    var flipperLeft = new Physijs.BoxMesh(
            new THREE.CubeGeometry(12, 2, 2), Physijs.createMaterial(new THREE.MeshPhongMaterial(
                    {opacity: 0.6, transparent: true}
            )), 0.3
    );
    flipperLeft.position.x = -6;
    flipperLeft.position.y = 2;
    flipperLeft.position.z = 0;
    flipperLeft.castShadow = true;
    scene.add(flipperLeft);
    var flipperLeftPivot = new Physijs.SphereMesh(
            new THREE.CubeGeometry(1, 1, 1), ground_material, 0);

    flipperLeftPivot.position.y = 1;
    flipperLeftPivot.position.x = -15;
    flipperLeftPivot.position.z = 0;
    flipperLeftPivot.rotation.y = 1.4;
    flipperLeftPivot.castShadow = true;

    scene.add(flipperLeftPivot);

    // when looking at the axis, the axis of object two are used.
    // so as long as that one is the same as the scene, no problems
    // rotation and axis are relative to object2. If position == cube2.position it works as expected
    var constraint = new Physijs.HingeConstraint(flipperLeft, flipperLeftPivot, flipperLeftPivot.position, new THREE.Vector3(0, 1, 0));
//            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
    scene.addConstraint(constraint);

    constraint.setLimits(
            -2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
            -0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
            0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
            0 // controls bounce at limit (0.0 == no bounce)
    );

    return constraint;
}

function createRightFlipper() 
{
    var flipperright = new Physijs.BoxMesh(
            new THREE.CubeGeometry(12, 2, 2), Physijs.createMaterial(new THREE.MeshPhongMaterial(
                    {opacity: 0.6, transparent: true}
            )), 0.3
    );
    flipperright.position.x = 8;
    flipperright.position.y = 2;
    flipperright.position.z = 0;
    flipperright.castShadow = true;
    scene.add(flipperright);
    var flipperLeftPivot = new Physijs.SphereMesh(
            new THREE.CubeGeometry(1, 1, 1), ground_material, 0);

    flipperLeftPivot.position.y = 2;
    flipperLeftPivot.position.x = 15;
    flipperLeftPivot.position.z = 0;
    flipperLeftPivot.rotation.y = 1.4;
    flipperLeftPivot.castShadow = true;

    scene.add(flipperLeftPivot);

    // when looking at the axis, the axis of object two are used.
    // so as long as that one is the same as the scene, no problems
    // rotation and axis are relative to object2. If position == cube2.position it works as expected
    var constraint = new Physijs.HingeConstraint(flipperright, flipperLeftPivot, flipperLeftPivot.position, new THREE.Vector3(0, 1, 0));
//            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
    scene.addConstraint(constraint);

    constraint.setLimits(
            -2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
            -0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
            0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
            0 // controls bounce at limit (0.0 == no bounce)
    );

    return constraint;
}

