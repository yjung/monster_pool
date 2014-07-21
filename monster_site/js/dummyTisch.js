// Dummy-Tisch aus physikalischen Grundobjekten
function createDummyTisch() {
    // Grundflaeche
    var dummy_rot = Physijs.createMaterial(new THREE.MeshPhongMaterial({
        color : 0xFF0000,
        wireframe : false
    }), .9, .3);
    // Kurze Bande 1
    var dummy_gruen = Physijs.createMaterial(new THREE.MeshPhongMaterial({
        color : 0x00FF00,
        wireframe : false
    }), .9, .3);
    // Kurze Bande 2
    var dummy_blau = Physijs.createMaterial(new THREE.MeshPhongMaterial({
        color : 0x0000FF,
        wireframe : false
    }), .9, .3);
    // Lange Bande 1
    var dummy_gelb = Physijs.createMaterial(new THREE.MeshPhongMaterial({
        color : 0xFFFF00,
        wireframe : false
    }), .9, .3);
    // Lange Bande 2
    var dummy_cyan = Physijs.createMaterial(new THREE.MeshPhongMaterial({
        color : 0x00FFFF,
        wireframe : false
    }), .9, .3);

    var ground = new Physijs.BoxMesh(new THREE.CubeGeometry(23.5, 2, 51.45), dummy_rot, 0);
    ground.position.y = 17.175;

    var borderLeft = new Physijs.BoxMesh(new THREE.CubeGeometry(2, 3, 38), dummy_gruen, 0);
    borderLeft.position.x = -36;

    ground.add(borderLeft);

    var borderRight = new Physijs.BoxMesh(new THREE.CubeGeometry(2, 3, 38), dummy_blau, 0);
    borderRight.position.x = 38;
    borderRight.position.y = 2;
    // ground.add(borderRight);

    var borderBottom = new Physijs.BoxMesh(new THREE.CubeGeometry(75, 3, 2), dummy_gelb, 0);
    borderBottom.position.z = 18;
    borderBottom.position.y = 2;
    // ground.add(borderBottom);

    var borderTop = new Physijs.BoxMesh(new THREE.CubeGeometry(75, 3, 2), dummy_cyan, 0);
    borderTop.position.z = -18;
    borderTop.position.y = 2;
    // ground.add(borderTop);

    game.szene.add(ground);
}