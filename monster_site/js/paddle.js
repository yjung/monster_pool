function erstellePaddleJS(PosX, PosY, PosZ, RotY)
{
	var loader = new THREE.JSONLoader();

	loader.load('assets/json/paddle.js', function(geometry, materials)
	{
		// var paddleBump = new Physijs.BoxMesh(paddle, Physijs.createMaterial(new THREE.MeshPhongMaterial(
		var paddle = new Physijs.BoxMesh(geometry, new THREE.MeshFaceMaterial(materials),0);
		//Physijs.createMaterial(new THREE.MeshBasicMaterial(
		// {
			// opacity : 0.6,
			// wireframe: true,
			// color: 'blue',
			// transparent : false
		// })), 0.3);
		
		paddle.position.x = PosX;
		paddle.position.y = PosY;
		paddle.position.z = PosZ;
		paddle.rotation.y = RotY;
		paddle.castShadow = true;
		game.szene.add(paddle);
		console.log("paddle");
		console.log(paddle);
	
		var paddleLeftPivot = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), pTransparentT, 0);

		paddleLeftPivot.position.x = PosX;
		paddleLeftPivot.position.y = PosY;
		paddleLeftPivot.position.z = PosZ;
		paddleLeftPivot.rotation.y = 1.4;
		paddleLeftPivot.castShadow = true;
		game.szene.add(paddleLeftPivot);
		
		var constraint = new Physijs.HingeConstraint(paddle, paddleLeftPivot, paddleLeftPivot.position, new THREE.Vector3(0, 1, 0));
		//            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
		game.szene.addConstraint(constraint);

		constraint.setLimits(-2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
		-0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
		0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
		0 // controls bounce at limit (0.0 == no bounce)
		);

	return constraint;
	});
}

function createLeftFlipper()
{
	var flipperLeft = new Physijs.BoxMesh(new THREE.BoxGeometry(12, 2, 2), Physijs.createMaterial(new THREE.MeshPhongMaterial(
	{
		opacity : 0.6,
		transparent : true
	})), 0.3);
	flipperLeft.position.x = -6;
	flipperLeft.position.y = 22;
	flipperLeft.position.z = 0;
	flipperLeft.castShadow = true;
	scene.add(flipperLeft);
	var flipperLeftPivot = new Physijs.SphereMesh(new THREE.BoxGeometry(1, 1, 1), ground_material, 0);



	flipperLeftPivot.position.y = 21;
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

	constraint.setLimits(-2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
	-0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
	0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
	0 // controls bounce at limit (0.0 == no bounce)
	);

	return constraint;
}
