function erstelleMinimap(){
    // Minimap-Kamera
    var left = window.innerWidth / -36;
    var right = window.innerWidth / 36;
    var top = window.innerHeight / 36;
    var bottom = window.innerHeight / -36;
    var near = -500;
    var far = 1000;
    
    // Konsolenausgabe zum Testen der oberen Werte
    // console.log("left: "+left);
    // console.log("right: "+right);
    // console.log("top: "+top);
    // console.log("bottom: "+bottom);
    // console.log("near: "+near);
    // console.log("far: "+far);
    
    

    
    // Erstellung der Minimap-Kamera
    game.mapCamera = new THREE.OrthographicCamera(left, right, top, bottom, near, far); 
    // game.mapCamera.up = new THREE.Vector3(0,0,-1);		// Veränderter Up-Vektor, -1 in Z-Richtung, um "genordet" zu sein
    game.mapCamera.lookAt(new THREE.Vector3(0,-1,0));	// Blickrichtung nach unten
	game.mapCamera.position.y = -100;					// y-Position: Egal welcher Eintrag, kein Unterschied,
														// außer bei sehr hohen Werten, 
														// dann außerhalb der Szene.

	// console.log("mapCamera.position.x: "+ game.mapCamera.position.x);
	// console.log("mapCamera.position.y: "+ game.mapCamera.position.y);
	// console.log("mapCamera.position.z: "+ game.mapCamera.position.z);
	
}