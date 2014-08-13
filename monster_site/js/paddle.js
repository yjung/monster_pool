function erstellePaddleJS(PosX, PosY, PosZ, RotY)
{
	var loader = new THREE.JSONLoader();
   	var paddle;
	loader.load('assets/json/paddle.js', function(geometry, materials)
	{
		// var paddleBump = new Physijs.BoxMesh(paddle, Physijs.createMaterial(new THREE.MeshPhongMaterial(
		paddle = new Physijs.BoxMesh(geometry, new THREE.MeshFaceMaterial(materials), 0);
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
		console.log("paddle: v");
		console.log(paddle);
		console.log("//Paddleend: ^");
	});
		
		var paddleLeftPivot = new Physijs.SphereMesh(new THREE.CubeGeometry(1, 1, 1), lGreenT, 0);

		paddleLeftPivot.position.x = PosX;
		paddleLeftPivot.position.y = PosY;
		paddleLeftPivot.position.z = PosZ;
		paddleLeftPivot.rotation.y = 1.4;
		paddleLeftPivot.castShadow = true;
		
		game.szene.add(paddleLeftPivot);

		var constraint = new Physijs.HingeConstraint(paddle, paddleLeftPivot, paddleLeftPivot.position, new THREE.Vector3(0, 1, 0));
		//            var constraint = new Physijs.HingeConstraint(cube1, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
		game.szene.addConstraint(constraint);

		constraint.setLimits
		(
			-2.2, // minimum angle of motion, in radians, from the point object 1 starts (going back)
			-0.6, // maximum angle of motion, in radians, from the point object 1 starts (going forward)
			0.1, // applied as a factor to constraint error, how big the kantelpunt is moved when a constraint is hit
			1 // controls bounce at limit (0.0 == no bounce)
		);

		return constraint;
}//end ErstellePaddleJS

