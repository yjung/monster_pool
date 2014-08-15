/*
 Gives THREE.js Lambert Material a Toon / Cel look
 */

modifiziereLambertShading();

function celShadingGUIKontur() {
	// Ordner fuer die Cel-Shading-Einstellungen
	var celShadingKontur = game.debugGUI.addFolder('Cel-Shading (Kontur) - Mathias');

	// Parameter-Liste fuer das Cel-Shading
	var paramCelShadingKontur = {
		kontur : true,
		offset: 0.75,
		konturFarbe : [ 0, 0, 0, 1 ], // RGB with alpha
	};

	game.renderer.celShadingKontur = true; // Default = true
	// Post-Processingeintraege hinzufuegen
	game.debugGUI.kontur = celShadingKontur.add(paramCelShadingKontur, 'kontur').name("Kontur").listen();
	game.debugGUI.konturfarbe = celShadingKontur.addColor(paramCelShadingKontur, 'konturFarbe').name("Kontur-Farbe").listen();
	game.debugGUI.offset = celShadingKontur.add(paramCelShadingKontur, 'offset').min(0.0).max(2.0).step(0.01).name("Offset").listen();


	game.debugGUI.konturfarbe.onChange(function(value) {
		var neueFarbe = new THREE.Vector4(value[0]/255,value[1]/255,value[2]/255,value[3]/255);
		edgePass.uniforms.uBorderColor.value = neueFarbe;
		console.log(edgePass.uniforms.uBorderColor.value);
	});

	game.debugGUI.offset.onChange(function(value) {
		edgePass.uniforms.uOffset.value = value;
	});

	game.debugGUI.kontur.onFinishChange(function(value) {
		game.renderer.celShading = value;
	});


	celShadingKontur.open(); 	// Ordner standardmaessig oeffnen
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

function celShadingGUIShading(){
		// Ordner fuer die Cel-Shading-Einstellungen
	var celShadingShading = game.debugGUI.addFolder('Cel-Shading (Shading) - Mathias');

}