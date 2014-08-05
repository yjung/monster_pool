// Initialisierung der Lichtquellen fuer die gesamte Szene
function setupLights() 
{
	console.log("--Erstelle Lichtquellen.--");
	
	// Licht für die Bar
    var barLight = new THREE.SpotLight(0xF7D358);      			// Spotlichtquelle in weisser Lichtfarbe
    barLight.position.set(80, 90, 50);                			// Positionierung in der Szene
    barLight.target.position = new THREE.Vector3(80,0,50); 		//wirft nen fehler
    barLight.castShadow = true;									// Schattenwurf aktivieren
    barLight.intensity = 0.75;                         
    game.szene.add(barLight);                          			// Lichtquelle zur Szene hinzufuegen


	//Licht für Billard Tisch
	var PooltableLightIntens = 0.75; // normal is 0.5
	var PooltableLightColor = 0xF3F781;
    // add spotlight for the PoolTable1
    var poolLight = new THREE.SpotLight(PooltableLightColor); 
    poolLight.position.set(00, 60, -40);
    poolLight.target.position = new THREE.Vector3( 0, 0, -40);
    poolLight.intensity = PooltableLightIntens;
    poolLight.castShadow = true;
    game.szene.add(poolLight);

    // add spotlight for the PoolTable2
    var poolLight = new THREE.SpotLight(PooltableLightColor);
    poolLight.position.set(0, 60, 40);
    poolLight.target.position = new THREE.Vector3( 0, 0, 40);
    poolLight.intensity = PooltableLightIntens;
    poolLight.castShadow = true;
    game.szene.add(poolLight);
    
     // add spotlight for the PoolTable3
    var poolLight = new THREE.SpotLight(PooltableLightColor);
    poolLight.position.set(0, 60, 00);
    poolLight.target.position = new THREE.Vector3( 0, 0, 0);
    poolLight.intensity = PooltableLightIntens;
    poolLight.castShadow = true;
    game.szene.add(poolLight);
        
  	//Tischlichter
  	var tischLightIntens = 2.0;
  	var TischLightColor = 0xFF7F24;
    
    var tischLicht = new THREE.SpotLight(TischLightColor); 
    tischLicht.position.set(-100, 60, -5);
    tischLicht.target.position = new THREE.Vector3( tischLicht.position.x, 0, tischLicht.position.z);
    tischLicht.intensity = tischLightIntens;
    tischLicht.castShadow = true;
    game.szene.add(tischLicht);  
    
    var tischLicht = new THREE.SpotLight(TischLightColor); 
    tischLicht.position.set(-100, 60, 60);
    tischLicht.target.position = new THREE.Vector3( tischLicht.position.x, 0, tischLicht.position.z);
    tischLicht.intensity = tischLightIntens;
    tischLicht.castShadow = true;
    game.szene.add(tischLicht);     
        
    //Licht zur allgemeinen raumaufhellung  
	var ambientLight = new THREE.PointLight( PooltableLightColor, 0.51, 250 );
	ambientLight.position.set( 0, 0, 0 );
	game.szene.add(ambientLight);

};