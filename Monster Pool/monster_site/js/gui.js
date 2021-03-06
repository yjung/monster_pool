function createGUI() {
	if(debugMode){		
		console.log("--Erstelle Debug-GUI.--");
	}
	
	game.debugGUI = new dat.GUI({
		autoPlace : false, // Eigene Platzierung ermoeglichen
		width : 250	// Breite etwas reduzieren
	});

	// Vater-Div abrufen und gui anhaengen
	var vaterContainer = document.getElementById('viewport');
	vaterContainer.appendChild(game.debugGUI.domElement);

	game.debugGUI.domElement.style.position = "fixed";
	// Eigene Positionierung
	game.debugGUI.domElement.style.bottom = "40px";

	// Ordner fuer die Kategorien erstellen
	var controls = game.debugGUI.addFolder('Controls');
	var options = game.debugGUI.addFolder('Options');

	paramControls = {
		stosskraftX : 0, // Muss initial 0.01 sein um float zu bekommen
		// stosskraftY : 0, // Muss initial 0.01 sein um float zu bekommen
		stosskraftZ : -1000, // Muss initial 0.01 sein um float zu bekommen
		offsetX : 0.01, // Muss initial 0.01 sein um float zu bekommen
		offsetY : 0.01, // Muss initial 0.01 sein um float zu bekommen
		offsetZ : 0.01	// Muss initial 0.01 sein um float zu bekommen
	};

	paramOptions = {
		vollbild : false,
		sound : false,
		effectSound : false,
	};

	// Steuerungseintraege hinzufuegen
	game.debugGUI.stosskraftX = controls.add(paramControls, 'stosskraftX').min(0).max(1000).step(1).listen().name("Stosskraft-X");
	// game.debugGUI.stosskraftY = controls.add(paramControls, 'stosskraftY').min(0).max(1000).step(1).listen().name("Stosskraft-Y");
	game.debugGUI.stosskraftZ = controls.add(paramControls, 'stosskraftZ').min(0).max(1000).step(1).listen().name("Stosskraft-Z");
	game.debugGUI.offsetX = controls.add(paramControls, 'offsetX').min(-1.0).max(1.0).step(0.01).listen().name("Offset-X");
	game.debugGUI.offsetY = controls.add(paramControls, 'offsetY').min(-1.0).max(1.0).step(0.01).listen().name("Offset-Y");
	game.debugGUI.offsetZ = controls.add(paramControls, 'offsetZ').min(-1.0).max(1.0).step(0.01).listen().name("Offset-Z");

	// Optionen-Eintraege hinzufuegen
	game.debugGUI.vollbild = options.add(paramOptions, 'vollbild').listen().name("Vollbildmodus");
	game.debugGUI.sound = options.add(paramOptions, 'sound').listen().name("Sound");
	game.debugGUI.effectSound = options.add(paramOptions, 'effectSound').listen().name("Sound Effects");

	game.debugGUI.autoListen = true;

	// Event on change in 'effectX'
	game.debugGUI.stosskraftX.onFinishChange(function(value) {
		stosskraftX = value;
		game.queue.stosskraftX = value;
	});

	// Event on change in 'effectY'
	// game.debugGUI.stosskraftY.onFinishChange(function(value) {
		// stosskraftY = value;
		// game.queue.stosskraftY = value;
	// });

	// Event on change in 'effectZ'
	game.debugGUI.stosskraftZ.onFinishChange(function(value) {
		stosskraftZ = value;
		game.queue.stosskraftZ = value;
	});

	// Event on change in 'offsetX'
	game.debugGUI.offsetX.onFinishChange(function(value) {
		offsetX = value;
		game.queue.offsetX = value;
	});

	// Event on change in 'offsetY'
	game.debugGUI.offsetY.onFinishChange(function(value) {
		offsetY = value;
		game.queue.offsetY = value;
	});

	// Event on change in 'offsetZ'
	game.debugGUI.offsetZ.onFinishChange(function(value) {
		offsetZ = value;
		game.queue.offsetZ = value;
	});

	game.debugGUI.vollbild.onChange(function(value) {
		game.vollbild = value;
		if (value && THREEx.FullScreen.available() && !THREEx.FullScreen.activated()) {
			THREEx.FullScreen.request(document.getElementById("viewport"));
			$( "#viewport" ).addClass( "vollbild" );
			$( "canvas" ).addClass( "vollbild" );
			onWindowResize();
			
		} else {
			THREEx.FullScreen.cancel();
			$( "#viewport" ).removeClass( "vollbild" );
			$( "canvas" ).removeClass( "vollbild" );
			$( "canvas" ).addClass( "canvas" );
			onWindowResize();
		}
	});

	game.debugGUI.sound.onChange(function(value) {
		game.soundAn = value;
		if (!value) {
			game.ambientSound.volume = 0;
		}
		if (value) {
			soundAmbience('ambience');
			game.ambientSound.volume = 0.5;
		}
	});
	
		game.debugGUI.effectSound.onChange(function(value) {
		game.effectSound = value;
	});

	// GUI im Allgemeinen standardmaessig oeffnen
	game.debugGUI.closed = true;
	controls.close();
	// Kontrollleiste geschlossen

};
