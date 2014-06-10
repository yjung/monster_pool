// Weisse Kugel aus physikalischem Grundobjekt
function createWhiteBall(x,y,z) {

    var friction = .2;      // low friction
    var restitution = 0;   // low restitution

    var material = Physijs.createMaterial(
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
        friction,
        restitution
    );

    // Grundobjekterzeugung mit Material aus angelegter Bibliothek
    game.whiteBall = new Physijs.SphereMesh(new THREE.SphereGeometry(1, 16, 16), material, 1000);
    // Initiale Positionierung in der Welt
    game.whiteBall.position.x = x;
    game.whiteBall.position.y = y;
    game.whiteBall.position.z = z;
    // Hinzufuegen zur Szene
    game.szene.add(game.whiteBall);
}