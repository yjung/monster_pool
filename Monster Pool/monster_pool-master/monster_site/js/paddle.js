function erstelleFlipper(enableMotor, PaddlePos, PivotPos, Rechts)
{
	var loader = new THREE.JSONLoader();
   	var flipper;
   	var paddle;
   	   	
   	this.enableMotor = enableMotor;
	acceleration = 2;
	velocity = -10;
	
	loader.load('assets/json/paddle.js', function(geometry, materials)
	{
		// var paddleBump = new Physijs.BoxMesh(paddle, Physijs.createMaterial(new THREE.MeshPhongMaterial(
		paddle = new Physijs.BoxMesh(geometry, new THREE.MeshFaceMaterial(materials), 0);
		game.szene.add(paddle);

		// var flipper = new Physijs.BoxMesh(geometry, Physijs.createMaterial(new THREE.MeshPhongMaterial({opacity : 0.6, transparent : true})), 0.3);
		var flipper = new Physijs.BoxMesh(paddle.geometry, paddle.material, 0.2);
			flipper.position.x = PaddlePos.x;
			flipper.position.y = PaddlePos.y;
			flipper.position.z = PaddlePos.z;
			if(Rechts)
			{flipper.rotation.y = 3.141592653589793;}
			flipper.castShadow = true;
			game.szene.add(flipper);
		
		var flipperPivot = new Physijs.SphereMesh(new THREE.SphereGeometry(1, 1, 1), pGreenT, 0);
			flipperPivot.position.x = PivotPos.x;
			flipperPivot.position.y = PivotPos.y;
			flipperPivot.position.z = PivotPos.z;
			flipperPivot.rotation.y = 1.4;
			flipperPivot.castShadow = true;
			game.szene.add(flipperPivot);
	
		// when looking at the axis, the axis of object two are used.
		// so as long as that one is the same as the scene, no problems
		// rotation and axis are relative to object2. If position == cube2.position it works as expected
		hhconstraint = new Physijs.HingeConstraint(flipper, flipperPivot, flipperPivot.position, new THREE.Vector3(0, 1, 0));
		//            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
		game.szene.addConstraint(hhconstraint);
	
		hhconstraint.setLimits(-2.2, // minimum angle of motion, in radiabpustenans, from the point object 1 starts (going back)
		-0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
		0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
		0 // controls bounce at limit (0.0 == no bounce)
		);
		if(enableMotor)
		{	
		hhconstraint.disableMotor();
		hhconstraint.enableAngularMotor(velocity, acceleration);
		}
		else
		{
			hhconstraint.disableMotor();
		}
		return hhconstraint;
	});
}
