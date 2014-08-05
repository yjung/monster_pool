// Initialisierung der Lichtquellen fuer die gesamte Szene
function setupLights() {
	console.log("--Erstelle Lichtquellen.--");
	
	// Licht für die Bar
    var spotLight = new THREE.SpotLight(0xF7D358);      // Spotlichtquelle in weisser Lichtfarbe
    spotLight.position.set(400, 90, 150);                // Positionierung in der Szene
   spotLight.target = new THREE.Vector3(400,0,150); //wirft nen fehler
    spotLight.castShadow = true;						// Schattenwurf aktivieren
    spotLight.intensity = 0.75;                         
    game.szene.add(spotLight);                          // Lichtquelle zur Szene hinzufuegen


	//Licht für Billard Tisch
	var PooltableLightIntens = 0.5; // normal is 0.5

    // add spotlight for the PoolTable1
    var aufheller = new THREE.SpotLight(0xF3F781); 
    aufheller.position.set(00, 60, -40);
    // aufheller.target.position = new THREE.Object3D( 0, 0, 50);
    aufheller.intensity = PooltableLightIntens;
    aufheller.castShadow = true;
    game.szene.add(aufheller);

    // add spotlight for the PoolTable2
    var aufheller = new THREE.SpotLight(0xF3F781);
    aufheller.position.set(0, 60, 40);
    // aufheller.target.position = new THREE.Object3D( 0, 0, -200);
    aufheller.intensity = PooltableLightIntens;
    aufheller.castShadow = true;
    game.szene.add(aufheller);
    
     // add spotlight for the PoolTable3
    var aufheller = new THREE.SpotLight(0xF3F781);
    aufheller.position.set(0, 60, 00);
    // aufheller.target.position = new THREE.Object3D( 0, 0, -200);
    aufheller.intensity = PooltableLightIntens;
    aufheller.castShadow = true;
    game.szene.add(aufheller);
        
        
        
		var barlicht = new THREE.PointLight( 0xffffff, 1, 500 );
		barlicht.position.set( 50, 40, 25 );
		// game.szene.add( barlicht );
		
		


    var ambientLight = new THREE.AmbientLight(0x444444);// Ambiente Lichtquelle zum Aufhellen
    ambientLight.intensity = 0;
    // game.szene.add(ambientLight);                       // Lichtquelle zur Szene hinzufuegen
};