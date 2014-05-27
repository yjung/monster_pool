// Weisse Kugel aus physikalischem Grundobjekt
function createWhiteBall(x,y) {
    // Grundobjekterzeugung mit Material aus angelegter Bibliothek
    game.whiteBall = new Physijs.SphereMesh(new THREE.SphereGeometry(1, 16, 16), pWhiteT, 1);
    // Initiale Positionierung in der Welt
    game.whiteBall.position.x = 0;
    game.whiteBall.position.y = 20;
    // Hinzufuegen zur Szene
    game.szene.add(game.whiteBall);
}