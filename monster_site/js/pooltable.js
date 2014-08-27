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
    		), 0.1, 1.0);
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
		var collider = new Physijs.BoxMesh(colliderGeometrie, pTransparentT,0);
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
				
				//Paddel erstellen und animation anschmeißen
				// var paddleLeftConstraint = erstellePaddleJS(-10,18,-2, -1.7);
				// var paddleRightConstraint = erstellePaddleJS(10,18,2, 1.7);
				// console.log(paddleLeftConstraint);
				// paddleLeftConstraint.enableAngularMotor(-10, 2);
			                
			    // paddleRightConstraint.enableAngularMotor(-1 * -10, 2);
				// updateMotor();

	 // erstellePaddleMitAnimation();
 	 

};

// Physijs.scripts.worker = '../libs/physijs_worker.js';// Just a Test

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


// function createLeftFlipper()
// {
	// var loader = new THREE.JSONLoader();
   	// var flipperLeft;
   	// var paddle;
//    	   	
   	// enableMotor = false;
	// acceleration = 2;
	// velocity = -10;
// 	
	// loader.load('assets/json/paddle.js', function(geometry, materials){
		// // var paddleBump = new Physijs.BoxMesh(paddle, Physijs.createMaterial(new THREE.MeshPhongMaterial(
		// paddle = new Physijs.BoxMesh(geometry, new THREE.MeshFaceMaterial(materials), 0);
		// game.szene.add(paddle);
// 
		// // var flipperLeft = new Physijs.BoxMesh(geometry, Physijs.createMaterial(new THREE.MeshPhongMaterial({opacity : 0.6, transparent : true})), 0.3);
		// var flipperLeft = new Physijs.BoxMesh(paddle.geometry, paddle.material, 0.2);
			// flipperLeft.position.x = -9;
			// flipperLeft.position.y = 18;
			// flipperLeft.position.z = 0;
			// flipperLeft.castShadow = true;
			// game.szene.add(flipperLeft);
// 		
		// var flipperLeftPivot = new Physijs.SphereMesh(new THREE.SphereGeometry(1, 1, 1), pGreenT, 0);
			// flipperLeftPivot.position.x = -10;
			// flipperLeftPivot.position.y = 19;
			// flipperLeftPivot.position.z = 0;
			// flipperLeftPivot.rotation.y = 1.4;
			// flipperLeftPivot.castShadow = true;
			// game.szene.add(flipperLeftPivot);
// 	
		// // when looking at the axis, the axis of object two are used.
		// // so as long as that one is the same as the scene, no problems
		// // rotation and axis are relative to object2. If position == cube2.position it works as expected
		// hhconstraint = new Physijs.HingeConstraint(flipperLeft, flipperLeftPivot, flipperLeftPivot.position, new THREE.Vector3(0, 1, 0));
		// //            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
		// game.szene.addConstraint(hhconstraint);
// 	
		// hhconstraint.setLimits(-2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
		// -0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
		// 0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
		// 0 // controls bounce at limit (0.0 == no bounce)
		// );
		// if(enableMotor)
		// {	
		// hhconstraint.disableMotor();
		// hhconstraint.enableAngularMotor(velocity, acceleration);
		// }
		// else
		// {
			// hhconstraint.disableMotor();
		// }
// 		
		// return hhconstraint;
	// });//end Loader Load
// 
// 	
// };//end createLeftFlipper
// 
// function createRightFlipper()
// {
	// var loader = new THREE.JSONLoader();
   	// var flipperRight;
   	// var paddle;
//    	
   	// enableMotor = false;
	// acceleration = 2;
	// velocity = -10;
// 	
	// loader.load('assets/json/paddle.js', function(geometry, materials)
	// {
		// // var paddleBump = new Physijs.BoxMesh(paddle, Physijs.createMaterial(new THREE.MeshPhongMaterial(
		// paddle = new Physijs.BoxMesh(geometry, new THREE.MeshFaceMaterial(materials), 0);
		// game.szene.add(paddle);
// 
		// // var flipperLeft = new Physijs.BoxMesh(geometry, Physijs.createMaterial(new THREE.MeshPhongMaterial({opacity : 0.6, transparent : true})), 0.3);
		// var flipperRight = new Physijs.BoxMesh(paddle.geometry, paddle.material, 0.2);
			// flipperRight.position.x = 9;
			// flipperRight.position.y = 18;
			// flipperRight.position.z = 0;
			// flipperRight.rotation.y = 3.141592653589793;
			// flipperRight.castShadow = true;
			// game.szene.add(flipperRight);
// 		
		// var flipperRightPivot = new Physijs.SphereMesh(new THREE.SphereGeometry(1, 1, 1), pGreenT, 0);
			// flipperRightPivot.position.x = 10;
			// flipperRightPivot.position.y = 19;
			// flipperRightPivot.position.z = 0;
			// flipperRightPivot.rotation.y = 1.4;
			// flipperRightPivot.castShadow = true;
			// game.szene.add(flipperRightPivot);
// 	
		// // when looking at the axis, the axis of object two are used.
		// // so as long as that one is the same as the scene, no problems
		// // rotation and axis are relative to object2. If position == cube2.position it works as expected
		// hhconstraint = new Physijs.HingeConstraint(flipperRight, flipperRightPivot, flipperRightPivot.position, new THREE.Vector3(0, 1, 0));
		// //            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
		// game.szene.addConstraint(hhconstraint);
// 	
		// hhconstraint.setLimits(-2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
		// -0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
		// 0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
		// 0 // controls bounce at limit (0.0 == no bounce)
		// );
	// if(enableMotor)
	// {	
	// hhconstraint.disableMotor();
	// hhconstraint.enableAngularMotor(velocity, acceleration);
	// }
	// else
	// {
		// hhconstraint.disableMotor();
	// }
	// return hhconstraint;
	// });//end Loader Load
// 
// };//end createLeftFlipper
// 
// function controler()
// {
		// console.log(this);
		// this.enableMotor = false;
		// this.acceleration = 2;
		// this.velocity = -10;
		// this.updateMotor = function ()
		// {
			// if (controls.enableMotor) 
			// {
				// // velocity is the velocity we are going for.
				// // acceleration is how fast we're going to reach it
				// flipperLeftConstraint.disableMotor();
				// flipperLeftConstraint.enableAngularMotor(controls.velocity, controls.acceleration);
				// flipperRightConstraint.disableMotor();
				// flipperRightConstraint.enableAngularMotor(-1 * controls.velocity, controls.acceleration);
			// } else 
			// {
				// flipperLeftConstraint.disableMotor();
				// flipperRightConstraint.disableMotor();
			// }
		// };//end Update motor
// 		
// };//end Controls

function loadDatGUI()
{
var gui = new dat.GUI();
    gui.domElement.style.position = 'absolute';
    gui.domElement.style.top = '20px';
    gui.domElement.style.left = '20px';

    var hingeFolder = gui.addFolder('hinge');
    // hingeFolder.add(controls, "enableMotor").onChange(controls.updateMotor);

    // requestAnimationFrame(render);
    game.szene.simulate();	
}


// function createRightFlipper() 
// {
    // var flipperright = new Physijs.BoxMesh(
            // new THREE.CubeGeometry(12, 2, 2), Physijs.createMaterial(new THREE.MeshPhongMaterial(
                    // {opacity: 0.6, transparent: true}
            // )), 0.3
    // );
    // flipperright.position.x = 8;
    // flipperright.position.y = 2;
    // flipperright.position.z = 0;
    // flipperright.castShadow = true;
    // scene.add(flipperright);
    // var flipperLeftPivot = new Physijs.SphereMesh(
            // new THREE.CubeGeometry(1, 1, 1), ground_material, 0);
// 
    // flipperLeftPivot.position.y = 2;
    // flipperLeftPivot.position.x = 15;
    // flipperLeftPivot.position.z = 0;
    // flipperLeftPivot.rotation.y = 1.4;
    // flipperLeftPivot.castShadow = true;
// 
    // scene.add(flipperLeftPivot);
// 
    // // when looking at the axis, the axis of object two are used.
    // // so as long as that one is the same as the scene, no problems
    // // rotation and axis are relative to object2. If position == cube2.position it works as expected
    // var constraint = new Physijs.HingeConstraint(flipperright, flipperLeftPivot, flipperLeftPivot.position, new THREE.Vector3(0, 1, 0));
// //            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
    // scene.addConstraint(constraint);
// 
    // constraint.setLimits(
            // -2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
            // -0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
            // 0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
            // 0 // controls bounce at limit (0.0 == no bounce)
    // );
// 
    // return constraint;
// }



// function createRightFlipper()
// {
	// var flipperright = new Physijs.BoxMesh(new THREE.CubeGeometry(6,2,1), pBlueT);
	// flipperright.position.x = 6;
	// flipperright.position.y = 19;
	// flipperright.position.z = 0;
	// flipperright.castShadow = true;
	// game.szene.add(flipperright);
// 	
	// var flipperRightPivot = new Physijs.SphereMesh(new THREE.CubeGeometry(1, 1, 1), pGreenT, 0);
	// flipperRightPivot.position.x = 10;
	// flipperRightPivot.position.y = 19;
	// flipperRightPivot.position.z = 0;
	// flipperRightPivot.rotation.y = 1.4;
	// flipperRightPivot.castShadow = true;
	// game.szene.add(flipperRightPivot);
// 
	// // when looking at the axis, the axis of object two are used.
	// // so as long as that one is the same as the scene, no problems
	// // rotation and axis are relative to object2. If position == cube2.position it works as expected
	// var constraint2 = new Physijs.HingeConstraint(flipperright, flipperRightPivot, flipperRightPivot.position, new THREE.Vector3(0, 1, 0));
	// // var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
	// game.szene.addConstraint(constraint2);
// 
	// constraint.setLimits(-2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
	// -0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
	// 0.0, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
	// 100 // controls bounce at limit (0.0 == no bounce)
	// );
	// // constraint.setAngularLowerLimit(
		// // { 
			// // x: 0, 
			// // y: 0, 
			// // z: 0 
		// // });
// // 		
	// // constraint.setAngularUpperLimit(
	// // { 
		// // x: 3.1416, 
		// // y: 0, 
		// // z: 0 
	// // });
// 
	// return constraint;
// }//end createRightFlipper