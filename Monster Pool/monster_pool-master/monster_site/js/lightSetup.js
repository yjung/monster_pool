// Initialisierung der Lichtquellen fuer die gesamte Szene
function setupLights() {
	if(debugMode){		
		console.log("--Erstelle Lichtquellen.--");
	}

	game.lichter = [];
	// Sammlung fuer alle Lichtquellen der Szene

	// Licht für die Bar
	var barLight = new THREE.SpotLight(0xF7D358);
	// Spotlichtquelle in weisser Lichtfarbe
	barLight.name = "Bar";
	barLight.position.set(30, 60, 40);
	// Positionierung in der Szene
	barLight.target.position = new THREE.Vector3(80, 20, 40);
	//wirft nen fehler
	barLight.castShadow = true;
	// Schattenwurf aktivieren
	barLight.intensity = 5;
	game.lichter.push(barLight);
	// Lichtquelle in die Sammlung einfuegen

	// normal is 0.5
	var PooltableLightColor = 0xF3F781;

	// add spotlight for the PoolTable1
	var UeberKugel = new THREE.SpotLight(PooltableLightColor);
	UeberKugel.name = "Ueber_Kugeln";
	UeberKugel.position.set(00, 60, -15);
	UeberKugel.target.position = new THREE.Vector3(0, 0, -15);
	UeberKugel.intensity = 0.5;
	// UeberKugel.castShadow = true;
	game.lichter.push(UeberKugel);
	// Lichtquelle in die Sammlung einfuegen

	// add spotlight for the PoolTable2
	var UeberStart = new THREE.SpotLight(PooltableLightColor);
	UeberStart.name = "Ueber_Startposition";
	UeberStart.position.set(0, 60, 15);
	UeberStart.target.position = new THREE.Vector3(0, 0, 15);
	UeberStart.intensity = 0.5;
	// UeberStart.castShadow = true;
	game.lichter.push(UeberStart);
	// Lichtquelle in die Sammlung einfuegen

	// add spotlight for the PoolTable3
	var UeberMitte = new THREE.SpotLight(PooltableLightColor);
	UeberMitte.name = "Pooltisch-Mitte";
	UeberMitte.position.set(0, 60, 0);
	UeberMitte.target.position = new THREE.Vector3(0, 0, 0);
	UeberMitte.intensity = 0.5;
	// UeberMitte.castShadow = true;
	game.lichter.push(UeberMitte);	// Lichtquelle in die Sammlung einfuegen

	//Tischlichter
	var TischLightColor = 0xFF7F24;
	var TischIntens = 2.0;

	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Ecke";
	tischLicht.position.set(-110, 60, 70);
	tischLicht.target.position = new THREE.Vector3(-110, 0, 70);
	tischLicht.intensity = 3.9;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);
	
	// Lichtquelle in die Sammlung einfuegen
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Ecke2";
	tischLicht.position.set(-65, 60, 85);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = 3.3;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);

	// Lichtquelle in die Sammlung einfuegen
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Ecke3";
	tischLicht.position.set(0, 60, 85);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = 3.3;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);

	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Mitte";
	tischLicht.position.set(-80, 60, 40);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = 2.1;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);

	// Lichtquelle in die Sammlung einfuegen
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tischgruppe Tuer";
	tischLicht.position.set(-100, 60, 0);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = 3.5;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen
	
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Wand1";
	tischLicht.position.set(-50, 60, -90);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = 3.2;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);
	// // Lichtquelle in die Sammlung einfuegen
// 
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Wand2";
	tischLicht.position.set(10, 60, -80);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = 3.6;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen

	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Wand3";
	tischLicht.position.set(75, 60, -55);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = 3.6;
	// tischLicht.castShadow = true;
	game.lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen
	
	
	//Licht zur allgemeinen raumaufhellung
	var ambientLight = new THREE.PointLight(PooltableLightColor, 0.51, 250);
	ambientLight.name = "Ambiente";
	ambientLight.intensity = 1.6;
	ambientLight.position.set(0, 60, 0);
	game.lichter.push(ambientLight);
	// Lichtquelle in die Sammlung einfuegen

	lichtquellenEinfuegen(game.lichter);
	// Einfuegen der Lichtquellen in die Szene
};

/*Fuegt alle erstellen Lichtquellen aus der Sammlung in die Spielzene ein.*/
function lichtquellenEinfuegen(lichterSammlung) {
	for (var i = 0; i < lichterSammlung.length; i++) {
		game.szene.add(lichterSammlung[i]);
	}
	lichtGUIerstellen(lichterSammlung);
};

/*Fuegt der Debugging-GUI Zugriffsmoeglichkeiten auf die Lichtquelle hinzu*/
function lichtGUIerstellen(lichterSammlung) {
	var lichtquellen = game.debugGUI.addFolder('Lichtquellen - Intensitaet');

	for (var i = 0; i < lichterSammlung.length; i++) {

		var paramLicht = {
			intensitaet : lichterSammlung[i].intensity,
		};
		var bezeichner = lichterSammlung[i].name;
		game.debugGUI.bezeichner = lichtquellen.add(paramLicht, 'intensitaet').min(0).max(10).step(0.1).listen().name(lichterSammlung[i].name);

		// Event on change in 'offsetZ'
		game.debugGUI.bezeichner.onChange(function(value) {
			// console.log(this);
			var listenName = this.__li.textContent;
			for (var i = 0; i < lichterSammlung.length; i++){
				if(lichterSammlung[i].name == listenName)				
					lichterSammlung[i].intensity = value;
			}
		});
	}

	for (var i in game.debugGUI.__controllers) {
		game.debugGUI.__controllers[i].updateDisplay();
	}
};

