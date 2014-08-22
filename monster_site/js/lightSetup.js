// Initialisierung der Lichtquellen fuer die gesamte Szene
function setupLights() {
	if(debugMode){		
		console.log("--Erstelle Lichtquellen.--");
	}

	var lichter = [];
	// Sammlung fuer alle Lichtquellen der Szene

	// Licht für die Bar
	var barLight = new THREE.SpotLight(0xF7D358);
	// Spotlichtquelle in weisser Lichtfarbe
	barLight.name = "Bar";
	barLight.position.set(50, 60, 40);
	// Positionierung in der Szene
	barLight.target.position = new THREE.Vector3(80, 20, 40);
	//wirft nen fehler
	barLight.castShadow = true;
	// Schattenwurf aktivieren
	barLight.intensity = 6;
	lichter.push(barLight);
	// Lichtquelle in die Sammlung einfuegen

	// normal is 0.5
	var PooltableLightColor = 0xF3F781;

	// add spotlight for the PoolTable1
	var UeberKugel = new THREE.SpotLight(PooltableLightColor);
	UeberKugel.name = "Ueber_Kugeln";
	UeberKugel.position.set(00, 60, -40);
	UeberKugel.target.position = new THREE.Vector3(0, 0, -40);
	UeberKugel.intensity = 0.7;
	UeberKugel.castShadow = true;
	lichter.push(UeberKugel);
	// Lichtquelle in die Sammlung einfuegen

	// add spotlight for the PoolTable2
	var UeberStart = new THREE.SpotLight(PooltableLightColor);
	UeberStart.name = "Ueber_Startposition";
	UeberStart.position.set(0, 60, 40);
	UeberStart.target.position = new THREE.Vector3(0, 0, 40);
	UeberStart.intensity = 0.7;
	UeberStart.castShadow = true;
	lichter.push(UeberStart);
	// Lichtquelle in die Sammlung einfuegen

	// add spotlight for the PoolTable3
	var UeberMitte = new THREE.SpotLight(PooltableLightColor);
	UeberMitte.name = "Pooltisch-Mitte";
	UeberMitte.position.set(0, 60, 00);
	UeberMitte.target.position = new THREE.Vector3(0, 0, 0);
	UeberMitte.intensity = 0.7;
	// UeberMitte.castShadow = true;
	lichter.push(UeberMitte);	// Lichtquelle in die Sammlung einfuegen

	//Tischlichter
	var TischLightColor = 0xFF7F24;
	var TischIntens = 2.5;

	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Ecke";
	tischLicht.position.set(-110, 60, 80);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = TischIntens;
	tischLicht.castShadow = true;
	lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Ecke2";
	tischLicht.position.set(-50, 60, 80);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = TischIntens;
	tischLicht.castShadow = true;
	lichter.push(tischLicht);

	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Mitte";
	tischLicht.position.set(-80, 60, 40);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = TischIntens;
	tischLicht.castShadow = true;
	lichter.push(tischLicht);

	// Lichtquelle in die Sammlung einfuegen
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tischgruppe Tuer";
	tischLicht.position.set(-100, 60, 0);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = TischIntens;
	tischLicht.castShadow = true;
	lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen
	
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Wand1";
	tischLicht.position.set(-50, 60, -80);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = TischIntens;
	tischLicht.castShadow = true;
	lichter.push(tischLicht);
	// // Lichtquelle in die Sammlung einfuegen
// 
	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Wand2";
	tischLicht.position.set(10, 60, -80);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = TischIntens;
	// tischLicht.castShadow = true;
	lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen
	//Licht zur allgemeinen raumaufhellung
	var ambientLight = new THREE.PointLight(PooltableLightColor, 0.51, 250);
	ambientLight.name = "Ambiente";
	ambientLight.intensity = 1;
	ambientLight.position.set(20, 60, 0);
	lichter.push(ambientLight);
	// Lichtquelle in die Sammlung einfuegen

	lichtquellenEinfuegen(lichter);
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

