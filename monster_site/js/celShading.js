/*
 Gives THREE.js Lambert Material a Toon / Cel look
 */

modifiziereLambertShading();

function celGUIerstellen() {
	// Ordner fuer die Cel-Shading-Einstellungen
	var celShading = game.debugGUI.addFolder('Cel-Shading - Mathias');

	// Parameter-Liste fuer das Cel-Shading
	var paramCelShading = {
		kontur : true,
		konturFarbe : [ 0, 0, 0, 1 ], // RGB with alpha
		strichstaerke : 0,
	};

	game.renderer.celShading = true;
	// Post-Processingeintraege hinzufuegen
	game.debugGUI.konturfarbe = celShading.addColor(paramCelShading, 'konturFarbe').name("Kontur-Farbe").listen();
	game.debugGUI.kontur = celShading.add(paramCelShading, 'kontur').listen();
	game.debugGUI.strichstaerke = celShading.add(paramCelShading, 'strichstaerke').min(0.0).max(10.0).step(0.01).listen().name("Kontur");


	game.debugGUI.konturfarbe.onChange(function(value) {
		var neueFarbe = new THREE.Vector4(value[0]/255,value[1]/255,value[2]/255,value[3]/255);
		edgePass.uniforms.uBorderColor.value = neueFarbe;
		console.log(edgePass.uniforms.uBorderColor.value);
	});

	game.debugGUI.kontur.onFinishChange(function(value) {
		game.renderer.celShading = value;
	});

	game.debugGUI.strichstaerke.onFinishChange(function(value) {
		console.log(value);
	});

	celShading.open();
	console.log(game.szene);
	// Ordner standardmaessig oeffnen
}

function modifiziereLambertShading() {
		/* Entfernen nicht benoetigter Leerzeichen. */
		THREE.ShaderLib['lambert'].fragmentShader = THREE.ShaderLib['lambert'].fragmentShader.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		THREE.ShaderLib['lambert'].fragmentShader = "uniform vec3 diffuse;\n" + THREE.ShaderLib['lambert'].fragmentShader.substr(0, THREE.ShaderLib['lambert'].fragmentShader.length - 1);
		THREE.ShaderLib['lambert'].fragmentShader += [
		
		"#ifdef USE_MAP",
		"	gl_FragColor = texture2D( map, vUv );",
		"#else",
		"	gl_FragColor = vec4(diffuse, 1.0);", 
		"#endif", 
		
		"	vec3 basecolor = vec3(gl_FragColor[0], gl_FragColor[1], gl_FragColor[2]);",
		"	float alpha = gl_FragColor[3];",
		"	float vlf = vLightFront[0];",

		// This version presevers colors, but looks less cartoonish (good with simple textures, colors)
		// "	if (vlf< 0.50) { gl_FragColor = vec4(mix( basecolor, vec3(0.0), 0.5), alpha); }",
		// "	if (vlf>=0.50) { gl_FragColor = vec4(mix( basecolor, vec3(0.0), 0.3), alpha); }", 
		// "	if (vlf>=0.75) { gl_FragColor = vec4(mix( basecolor, vec3(1.0), 0.0), alpha); }", 
		// "	if (vlf>=0.95) { gl_FragColor = vec4(mix( basecolor, vec3(1.0), 0.3), alpha); }",

		// This version looks more cartoonish, but washes colors out (looks good with complex textures)
		"	if (vlf< 0.25) { gl_FragColor = vec4(mix( basecolor, vec3(0.0), 0.5), alpha); }",
		 "	if (vlf>=0.25) { gl_FragColor = vec4(mix( basecolor, vec3(0.25), 0.5), alpha); }",
		 "	if (vlf>=0.50) { gl_FragColor = vec4(mix( basecolor, vec3(0.5), 0.5), alpha); }",
		 "	if (vlf>=0.75) { gl_FragColor = vec4(mix( basecolor, vec3(0.75), 0.5), alpha); }",

		"	gl_FragColor.xyz *= vLightFront;", "}"].join("\n");
}

function initialisiereCelShading(){
}