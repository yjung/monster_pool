function erstellePaddleJS(PosX,PosY, PosZ, RotY){
	var loader = new THREE.JSONLoader();
	
	loader.load('assets/json/paddle.js', function(geometry, materials){
		var paddle = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
		
		// var paddle = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
			// wireframe: true,
			// color: 'blue'
		// }));
		
	
		paddle.position.x = PosX;
		paddle.position.y = PosY;
		paddle.position.z = PosZ;
		paddle.rotation.y = RotY;
		
		console.log("paddle");
		console.log(paddle);
		
		game.szene.add(paddle);
	});
}