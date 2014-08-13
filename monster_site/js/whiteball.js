// Weisse Kugel aus physikalischem Grundobjekt
function createWhiteBall(x,y,z) {

    var friction = 10;      // low friction
    var restitution = 10;   // low restitution

    // Grundobjekterzeugung mit Material aus angelegter Bibliothek
    game.whiteBall = new Physijs.ConvexMesh(new THREE.SphereGeometry(0.75, 16, 16), lWhiteBallP, 100);
    // Initiale Positionierung in der Welt
    game.whiteBall.position.x = x;
    game.whiteBall.position.y = y;
    game.whiteBall.position.z = z;

    // Hinzufuegen zur Szene
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

function applyForce(){
  	effect = new THREE.Vector3( paramControls.stosskraftX, paramControls.stosskraftY, paramControls.stosskraftZ);
  	offset = new THREE.Vector3( paramControls.offsetX, paramControls.offsetY, paramControls.offsetZ );
  	game.whiteBall.applyImpulse( effect, offset );
};