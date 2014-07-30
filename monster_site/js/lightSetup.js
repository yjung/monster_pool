// Initialisierung der Lichtquellen fuer die gesamte Szene
function setupLights() {
    var spotLight = new THREE.SpotLight(0xffffff);      // Spotlichtquelle in weisser Lichtfarbe
    spotLight.position.set(0, 100, 0);                  // Positionierung in der Szene
    spotLight.castShadow = true;                        // Schattenwurf aktivieren
    game.szene.add(spotLight);                          // Lichtquelle zur Szene hinzufuegen


        // add spotlight for the shadows
        var aufheller = new THREE.SpotLight(0xffffff);
        aufheller.position.set(0, 40, 60);
        // aufheller.target.position = new THREE.Object3D( 0, 0, -200);
        aufheller.intensity = 1;
        game.szene.add(aufheller);

        // add spotlight for the shadows
        var aufheller = new THREE.SpotLight(0xffffff);
        aufheller.position.set(60, 40, 0);
        // aufheller.target.position = new THREE.Object3D( 0, 0, -200);
        aufheller.intensity = 1;
        game.szene.add(aufheller);


    var ambientLight = new THREE.AmbientLight(0x444444);// Ambiente Lichtquelle zum Aufhellen
    game.szene.add(ambientLight);                       // Lichtquelle zur Szene hinzufuegen
};