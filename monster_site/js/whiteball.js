// Weisse Kugel aus physikalischem Grundobjekt
function createWhiteBall(x,y,z) {
    // Grundobjekterzeugung mit Material aus angelegter Bibliothek
    game.whiteBall = new Physijs.SphereMesh(new THREE.SphereGeometry(1, 16, 16), pWhiteWireframeT, 100);
    // Initiale Positionierung in der Welt
    game.whiteBall.position.x = x;
    game.whiteBall.position.y = y;
    game.whiteBall.position.z = z;
    // Hinzufuegen zur Szene
    game.szene.add(game.whiteBall);
}