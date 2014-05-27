// Initialisierung der Lichtquellen fuer die gesamte Szene
function setupLights() {
    var spotLight = new THREE.SpotLight(0xffffff);      // Spotlichtquelle in weisser Lichtfarbe
    spotLight.position.set(0, 100, 0);                  // Positionierung in der Szene
    spotLight.castShadow = true;                        // Schattenwurf aktivieren
    game.szene.add(spotLight);                          // Lichtquelle zur Szene hinzufuegen

    var ambientLight = new THREE.AmbientLight(0x111111);// Ambiente Lichtquelle zum Aufhellen
    game.szene.add(ambientLight);                       // Lichtquelle zur Szene hinzufuegen
};