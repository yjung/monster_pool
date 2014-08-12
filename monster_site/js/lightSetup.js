// Initialisierung der Lichtquellen fuer die gesamte Szene
function setupLights() {
	console.log("--Erstelle Lichtquellen.--");

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
	barLight.intensity = 10;
	lichter.push(barLight);
	// Lichtquelle in die Sammlung einfuegen

	//Licht für Billard Tisch
	var PooltableLightIntens = 0.75;
	// normal is 0.5
	var PooltableLightColor = 0xF3F781;

	// add spotlight for the PoolTable1
	var poolLight = new THREE.SpotLight(PooltableLightColor);
	poolLight.name = "Ueber_Kugeln";
	poolLight.position.set(00, 60, -40);
	poolLight.target.position = new THREE.Vector3(0, 0, -40);
	poolLight.intensity = PooltableLightIntens;
	poolLight.castShadow = true;
	lichter.push(poolLight);
	// Lichtquelle in die Sammlung einfuegen

	// add spotlight for the PoolTable2
	var poolLight = new THREE.SpotLight(PooltableLightColor);
	poolLight.name = "Ueber_Startposition";
	poolLight.position.set(0, 60, 40);
	poolLight.target.position = new THREE.Vector3(0, 0, 40);
	poolLight.intensity = PooltableLightIntens;
	poolLight.castShadow = true;
	lichter.push(poolLight);
	// Lichtquelle in die Sammlung einfuegen

	// add spotlight for the PoolTable3
	var poolLight = new THREE.SpotLight(PooltableLightColor);
	poolLight.name = "Pooltisch-Mitte";
	poolLight.position.set(0, 60, 00);
	poolLight.target.position = new THREE.Vector3(0, 0, 0);
	poolLight.intensity = 1;
	poolLight.castShadow = true;
	lichter.push(poolLight);
	// Lichtquelle in die Sammlung einfuegen

	//Tischlichter
	var tischLightIntens = 2.0;
	var TischLightColor = 0xFF7F24;

	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tisch Ecke";
	tischLicht.position.set(-100, 60, -5);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = tischLightIntens;
	tischLicht.castShadow = true;
	lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen

	var tischLicht = new THREE.SpotLight(TischLightColor);
	tischLicht.name = "Tischgruppe Tuer";
	tischLicht.position.set(-100, 60, 60);
	tischLicht.target.position = new THREE.Vector3(tischLicht.position.x, 0, tischLicht.position.z);
	tischLicht.intensity = tischLightIntens;
	tischLicht.castShadow = true;
	lichter.push(tischLicht);
	// Lichtquelle in die Sammlung einfuegen

	//Licht zur allgemeinen raumaufhellung
	var ambientLight = new THREE.PointLight(PooltableLightColor, 0.51, 250);
	ambientLight.name = "Ambiente";
	ambientLight.intensity = 1;
	ambientLight.position.set(0, 0, 0);
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
			intensitaet = value;
			for (var i = 0; i < lichterSammlung.length; i++){
				if(lichterSammlung[i].name = bezeichner){					
					lichterSammlung[i].intensity = value;
				}
			}
		});
	}

	for (var i in game.debugGUI.__controllers) {
		game.debugGUI.__controllers[i].updateDisplay();
	}
};

