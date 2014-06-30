function createGUI() {
	console.log("--Erstelle Debug-GUI.--");
	game.debugGUI = new dat.GUI({
		autoPlace : false, // Eigene Platzierung ermoeglichen
		width : 220	// Breite etwas reduzieren
	});

	// Vater-Div abrufen und gui anhaengen
	var vaterContainer = document.getElementById('viewport');
	vaterContainer.appendChild(game.debugGUI.domElement);

	game.debugGUI.domElement.style.position = "absolute";
	// Eigene Positionierung
	game.debugGUI.domElement.style.bottom = "0";

	// Ordner fuer die Kategorien erstellen
	var controls = game.debugGUI.addFolder('Controls');
	var postprocessing = game.debugGUI.addFolder('Postprocessing');

	parameter = {
		stosskraftX : 0,
		stosskraftY : 0,
		stosskraftZ : 0,
		offsetX : 0,
		offsetY : 0,
		offsetZ : 0
	};

	game.debugGUI.stosskraftX = controls.add(parameter, 'stosskraftX').min(0).max(1000).step(1).listen().name("Stosskraft-X");
	game.debugGUI.stosskraftY = controls.add(parameter, 'stosskraftY').min(0).max(1000).step(1).listen().name("Stosskraft-Y");
	game.debugGUI.stosskraftZ = controls.add(parameter, 'stosskraftZ').min(0).max(1000).step(1).listen().name("Stosskraft-Z");

	game.debugGUI.offsetX = controls.add(parameter, 'offsetX').min(0).max(1).step(0.01).listen().name("Offset-X");
	game.debugGUI.offsetY = controls.add(parameter, 'offsetY').min(0).max(1).step(0.01).listen().name("Offset-Y");
	game.debugGUI.offsetZ = controls.add(parameter, 'offsetZ').min(0).max(1).step(0.01).listen().name("Offset-Z");

	// Event on change in 'effectX'
	game.debugGUI.stosskraftX.onChange(function(value) {
		stosskraftX = value;
		game.queue.stosskraftX = value;
	});

	// Event on change in 'effectY'
	game.debugGUI.stosskraftY.onChange(function(value) {
		stosskraftY = value;
		game.queue.stosskraftY = value;
	});

	// Event on change in 'effectZ'
	game.debugGUI.stosskraftZ.onChange(function(value) {
		stosskraftZ = value;
				game.queue.stosskraftZ = value;
	});

	// Event on change in 'offsetX'
	game.debugGUI.offsetX.onChange(function(value) {
		offsetX = value;
				game.queue.offsetX = value;
	});

	// Event on change in 'offsetY'
	game.debugGUI.offsetY.onChange(function(value) {
		offsetY = value;
		game.queue.offsetY = value;
	});

	// Event on change in 'offsetZ'
	game.debugGUI.offsetZ.onChange(function(value) {
		offsetZ = value;
		game.queue.offsetZ = value;
	});

	// controls.add(parameter, 'fX').min(0).max(1000).step(1).onFinishChange(function() {
	// // refresh based on the new value of params.interation
	// });


	// GUI im Allgemeinen standardmaessig oeffnen
	game.debugGUI.closed = false;
	// Kontrollleiste anzeigen
	// Ordner standardmaessig oeffnen
	controls.open();
	postprocessing.close();
};
