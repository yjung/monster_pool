function erstelleSlider(posStart, posZiel, rotStart, rotZiel) {

	var startPos = posStart;
	var zielPos = posZiel;
	var startRot = rotStart;
	var zielRot = rotZiel;

	var ColladaLoader = new THREE.ColladaLoader();
	// Collada-Loader erstellen

	ColladaLoader.load('assets/dae/slider.dae', function(collada) {

		var modelScene = collada.scene;

		var modelGeometry = modelScene.children[0].children[0].geometry;
		/* Geometrie aus der .dae-Szene extrahieren*/
		var modelMaterial = modelScene.children[0].children[0].material;
		// Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene

		var slider = new Physijs.BoxMesh(modelGeometry, modelMaterial, 0);

		slider.position = posStart;

		// Rotation
		startRot.x *= (Math.PI / 180);
		startRot.y *= (Math.PI / 180);
		startRot.z *= (Math.PI / 180);
		slider.rotation.x = startRot.x;
		slider.rotation.y = startRot.y;
		slider.rotation.z = startRot.z;

		animiereSlider(slider, posStart, posZiel, rotStart, rotZiel);

		game.szene.add(slider);
		// Collada Table Alpha zur Szene hinzufuegen
	});

};

function animiereSlider(sliderObjekt, startPos, zielPos, startRot, zielRot) {

	var slider = sliderObjekt;

	var xStart = startPos.x;
	var yStart = startPos.y;
	var zStart = startPos.z;
	var xZiel = zielPos.x;
	var yZiel = zielPos.y;
	var zZiel = zielPos.z;

	var aktuellerWert = {
		positionX : slider.position.x
	};

	var richtungZiel = {
		positionX : xZiel
	};

	var richtungStart = {
		positionX : xStart
	};

	tweenZuZiel = new TWEEN.Tween(aktuellerWert).to(richtungZiel, 1000);
	tweenZuStart = new TWEEN.Tween(aktuellerWert).to(richtungStart, 1000);

	tweenZuZiel.onUpdate(function() {
		slider.__dirtyPosition = true;
		slider.__dirtyRotation = true;
		slider.position.x = aktuellerWert.positionX;

	});

	tweenZuStart.onUpdate(function() {
		slider.__dirtyPosition = true;
		slider.__dirtyRotation = true;
		slider.position.x = aktuellerWert.positionX;
	});

	tweenZuZiel.chain(tweenZuStart);
	tweenZuStart.chain(tweenZuZiel);

	tweenZuZiel.start();
};
