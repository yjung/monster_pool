function setupLights(){

	// add spotlight for the shadows
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(0, 100, 0);
	spotLight.castShadow = true;
	game.szene.add(spotLight);

	// add subtle ambient lighting
	var ambiColor = "#111";
	var ambientLight = new THREE.AmbientLight(ambiColor);
	game.szene.add(ambientLight);
};