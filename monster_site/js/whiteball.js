// Weisse Kugel aus physikalischem Grundobjekt
function createWhiteBall(x,y,z) {
	
	// erstelleCelShadingMaterial("whiteballMat");

    var friction = 10;      // low friction
    var restitution = 10;   // low restitution

    // Grundobjekterzeugung mit Material aus angelegter Bibliothek
    game.whiteBall = new Physijs.ConvexMesh(new THREE.SphereGeometry(0.75, 16, 16), Physijs.createMaterial(
    	erstelleCelShadingMaterial(
    		"whiteBallMat",						// Bezeichnung
    		THREE.ImageUtils.loadTexture("assets/dae/tex/weisseKugel.jpg"),								// Textur
    		new THREE.Vector3(1,1,1)		// Farbe
    		),
    1.0,0.1),5000);

    // Initiale Positionierung in der Welt
    game.whiteBall.position.x = x;
    game.whiteBall.position.y = y;
    game.whiteBall.position.z = z;

    // Hinzufuegen zur Szene
	game.gameObjects.push(game.whiteBall);
    game.szene.add(game.whiteBall);
}

function positionBall(x,y,z){
	game.whiteBall.position.x = x;
    game.whiteBall.position.y = y;
    game.whiteBall.position.z = z;
    game.whiteBall.__dirtyPosition = true;
    game.whiteBall.setAngularVelocity({z: 0, y: 0, x: 0 });
	game.whiteBall.setLinearVelocity({z: 0, y: 0, x: 0 });
	
}

function applyForce(bumperForce, faktor){
	if(faktor == undefined){faktor = 1;}
  	// effect = new THREE.Vector3( paramControls.stosskraftX * game.controlls.deltaY, paramControls.stosskraftY * game.controlls.deltaY, paramControls.stosskraftZ * game.controlls.deltaY);
  	effect = new THREE.Vector3( paramControls.stosskraftX * faktor, paramControls.stosskraftY * faktor, paramControls.stosskraftZ * faktor);
  	offset = new THREE.Vector3( paramControls.offsetX, paramControls.offsetY, paramControls.offsetZ );
  	
  	if(bumperForce){
  		bumperForce = new THREE.Vector3( bumperForce.x, 0, bumperForce.z);
		bumperForce.multiplyScalar(-10000000);
  		game.whiteBall.applyImpulse( bumperForce, offset );
  	}else{
  		game.whiteBall.applyImpulse( effect, offset );
  	}
  	
  	console.log(game.whiteBall);
};

function pruefeKugelBewegung(){
	var vergleichsVektor = new THREE.Vector3(0,0,0);
	
	if(game.whiteBall._physijs.angularVelocity.equals(vergleichsVektor) && game.whiteBall._physijs.linearVelocity.equals(vergleichsVektor)){
				game.whiteBall.inBewegung = false;
	}else{
				game.whiteBall.inBewegung = true;		
	}
	console.log(game.whiteBall.inBewegung);
}
