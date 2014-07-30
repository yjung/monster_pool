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
		
		zielRot.x *= (Math.PI / 180);
		zielRot.y *= (Math.PI / 180);
		zielRot.z *= (Math.PI / 180);
		
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

	var xStartPos = startPos.x;
	var yStartPos = startPos.y;
	var zStartPos = startPos.z;
	var xZielPos = zielPos.x;
	var yZielPos = zielPos.y;
	var zZielPos = zielPos.z;
	
	var xStartRot = startRot.x;
	var yStartRot = startRot.y;
	var zStartRot = startRot.z;
	var xZielRot = zielRot.x;
	var yZielRot = zielRot.y;
	var zZielRot = zielRot.z;

	var aktuellerWert = {
		positionX : slider.position.x,
		positionY : slider.position.y,
		positionZ : slider.position.z,

		rotationX : slider.rotation.x,
		rotationY : slider.rotation.y,
		rotationZ : slider.rotation.z
	};

	var richtungZiel = {
		positionX : xZielPos,
		positionY : yZielPos,
		positionZ : zZielPos,
		
		rotationX : xZielRot,
		rotationY : yZielRot,
		rotationZ : zZielRot,
	};

	var richtungStart = {
		positionX : xStartPos,
		positionY : yStartPos,
		positionZ : zStartPos,
		
		rotationX : xStartRot,
		rotationY : yStartRot,
		rotationZ : zStartRot,
	};

	tweenZuZiel = new TWEEN.Tween(aktuellerWert).to(richtungZiel, 1000).easing(TWEEN.Easing.Elastic.InOut);
	tweenZuStart = new TWEEN.Tween(aktuellerWert).to(richtungStart, 1000).easing(TWEEN.Easing.Elastic.InOut);

	tweenZuZiel.onUpdate(function() {
		slider.__dirtyPosition = true;
		slider.__dirtyRotation = true;
		slider.position.x = aktuellerWert.positionX;
		slider.position.y = aktuellerWert.positionY;
		slider.position.z = aktuellerWert.positionZ;
		
		slider.rotation.x = aktuellerWert.rotationX;
		slider.rotation.y = aktuellerWert.rotationY;
		slider.rotation.z = aktuellerWert.rotationZ;

	});

	tweenZuStart.onUpdate(function() {
		slider.__dirtyPosition = true;
		slider.__dirtyRotation = true;
		slider.position.x = aktuellerWert.positionX;
		slider.position.y = aktuellerWert.positionY;
		slider.position.z = aktuellerWert.positionZ;
		
		slider.rotation.x = aktuellerWert.rotationX;
		slider.rotation.y = aktuellerWert.rotationY;
		slider.rotation.z = aktuellerWert.rotationZ;
	});

	tweenZuZiel.chain(tweenZuStart);
	tweenZuStart.chain(tweenZuZiel);

	tweenZuZiel.start();
};
