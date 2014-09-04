function initializeDOF () {
	game.depthOfField = {};
	game.depthOfField.depthMaterial = new THREE.MeshDepthMaterial();
	createDOFGUI();
};

function createDOFGUI () {
	var depthOfField = game.debugGUI.addFolder("Depth Of Field - Jürgen");
	var parameterDOF = {
		aktivieren  : false,
		focalLength : 35,
		
		hDOFtDiffuse: 1.0,
		hDOFtDepth  : 1.0,
		hDOFfocus   : 1.0,
		hDOFmaxblur : 1.0,
		hDOFznear   : 1.0,
		hDOFzfar    : 1.0,
		hDOFh       : 1.0 / 512.0,
		
		vDOFtDiffuse: 1.0,
		vDOFtDepth  : 1.0,
		vDOFfocus   : 1.0,
		vDOFmaxblur : 1.0,
		vDOFznear   : 1.0,
		vDOFzfar    : 1.0,
		vDOFv       : 1.0 / 512.0
	};
	game.depthOfField.aktivieren = depthOfField.add(parameterDOF, "aktivieren").listen();
	depthOfField.open();
	game.depthOfField.aktivieren.onFinishChange(function(value) 
	{
		if(value){												// Falls Haekchen gesetzt			
			createDOFComposer();						// Erweitere den bisherigen Composer um den Blur-Effekt
		}else{													// andernfalls
			var kontur = game.debugGUI.kontur.object.kontur; 	// Ueberpruefen ob das Cel-Shading derzeit mit Kontur verwendet wird (true ? false)
			erstelleCelShadingComposer(kontur, "Canny");					// Entsprechend der Ueberpruefung den Standard-CelShading-Composer wiederherstellen
		}
	});
	game.depthOfField.focalLength = depthOfField.add(parameterDOF, "focalLength").min(1.0).max(200.0).step(1.0).name("focalLength").listen();
	game.depthOfField.focalLength.onChange(function(value) {
			// game.composerCelShading.passes[4].uniforms.znear.value = value;
			// game.composerCelShading.passes[5].uniforms.znear.value = value;
				game.kamera.setLens(value);
		});


	game.depthOfField.vDOFznear = depthOfField.add(parameterDOF, "vDOFznear").min(0.1).max(2.0).step(0.1).name("znear").listen();
	game.depthOfField.vDOFznear.onChange(function(value) {
			game.composerCelShading.passes[4].uniforms.znear.value = value;
			game.composerCelShading.passes[5].uniforms.znear.value = value;
		});
	game.depthOfField.vDOFzfar = depthOfField.add(parameterDOF, "vDOFzfar").min(0.1).max(2.0).step(0.1).name("zfar").listen();
	game.depthOfField.vDOFzfar.onChange(function(value) {
			game.composerCelShading.passes[4].uniforms.zfar.value = value;
			game.composerCelShading.passes[5].uniforms.zfar.value = value;
		});

	game.depthOfField.hDOFtDiffuse = depthOfField.add(parameterDOF, "hDOFtDiffuse").min(0.1).max(2.0).step(0.1).name("tDiffuse").listen();
	game.depthOfField.hDOFtDiffuse.onChange(function(value) {
			game.composerCelShading.passes[4].uniforms.tDiffuse.value = value;
			game.composerCelShading.passes[5].uniforms.tDiffuse.value = value;
		});
	game.depthOfField.hDOFtDepth = depthOfField.add(parameterDOF, "hDOFtDepth").min(0.1).max(2.0).step(0.1).name("tdepth").listen();
	game.depthOfField.hDOFtDepth.onChange(function(value) {
			game.composerCelShading.passes[4].uniforms.tDepth.value = value;
			game.composerCelShading.passes[5].uniforms.tDepth.value = value;
		});
	game.depthOfField.hDOFfocus = depthOfField.add(parameterDOF, "hDOFfocus").min(0.1).max(2.0).step(0.1).name("Focus").listen();
	game.depthOfField.hDOFfocus.onChange(function(value) {
			game.composerCelShading.passes[4].uniforms.focus.value = value;
			game.composerCelShading.passes[5].uniforms.focus.value = value;
		});
	game.depthOfField.hDOFmaxblur = depthOfField.add(parameterDOF, "hDOFmaxblur").min(0.1).max(2.0).step(0.1).name("maxblur").listen();
	game.depthOfField.hDOFmaxblur.onChange(function(value) {
			game.composerCelShading.passes[4].uniforms.maxblur.value = value;
			game.composerCelShading.passes[5].uniforms.maxblur.value = value;
		});
	game.depthOfField.hDOFh = depthOfField.add(parameterDOF, "hDOFh").min(0.001).max(0.002).step(0.0001).name("h").listen();
	game.depthOfField.hDOFh.onChange(function(value) {
			game.composerCelShading.passes[4].uniforms.h.value = value;
			game.composerCelShading.passes[5].uniforms.v.value = value;
		});

};

function createDOFComposer () {
	var parameters = {
		anisotropy : game.renderer.getMaxAnisotropy(),	// Maximale Anzahl an Textur-Samples je nach Geraet
		minFilter : THREE.LinearFilter,		// Textur-Sampling falls Texel kleiner als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		magFilter : THREE.LinearFilter,		// Textur-Sampling falls Texel groesser als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		format : THREE.RGBAFormat,			// RGB-Farbraum mit zusaetzlichem Alpha
		stencilBuffer : false,				// Stencil-Buffer deaktivieren
		depthBuffer : true				// Stencil-Buffer deaktivieren
	};
	game.depthOfField.renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);

	// Rendertarget-Objekt fuer Renderer-Initialisierung
	game.depthOfField.erweiterterCelComposer = new THREE.EffectComposer(game.renderer, game.depthOfField.renderTarget);
	// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.depthOfField.erweiterterCelComposer.setSize(game.breite, game.hoehe);
	// Groesse setzen
	
	game.depthOfField.erweiterterCelComposer.edgePass = new THREE.ShaderPass(CannyEdgePass);			// Custom-Shader
	game.depthOfField.erweiterterCelComposer.edgePass.renderToScreen = false;

	game.depthOfField.erweiterterCelComposer.effectcopy = new THREE.ShaderPass(THREE.CopyShader);		// Kopier-Shader fuer Effekte, die nicht selbst/direkt gerendert werden koennen
	game.depthOfField.erweiterterCelComposer.effectcopy.renderToScreen = true;								// Als Letzten markieren bzw. final auf das Canvas rendern	game.composerCelShading.addPass(effectcopy);

	var hDOF = new THREE.ShaderPass(depthOfFieldShader["hDOF"]);
	hDOF.uniforms[ "tDepth" ].texture = game.depthOfField.renderTarget;
	hDOF.uniforms[ "focus" ].value = 1.0;
	hDOF.uniforms[ "maxblur" ].value = 2.0;
	hDOF.uniforms[ "h" ].value = 1.0/game.breite;

	var vDOF = new THREE.ShaderPass(depthOfFieldShader["vDOF"]);
	vDOF.uniforms[ "tDepth" ].texture = game.depthOfField.renderTarget;
	vDOF.uniforms[ "focus" ].value = 1.0;
	vDOF.uniforms[ "maxblur" ].value = 2.0;
	vDOF.uniforms[ "v" ].value = 1.0/game.hoehe;
	vDOF.renderToScreen = true;

	var effectcopy = new THREE.ShaderPass(THREE.CopyShader);
	effectcopy.renderToScreen = true;

	game.depthOfField.erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
	game.depthOfField.erweiterterCelComposer.addPass(game.composerCelShading.effectcopy);			// Custom-Effekt
	// game.depthOfField.erweiterterCelComposer.addPass(hDOF);
	// game.depthOfField.erweiterterCelComposer.addPass(vDOF);
	
	if(game.debugGUI.kontur.object.kontur == true){	// Ueberpruefen ob das Cel-Shading derzeit mit Kontur verwendet wird (true ? false)
		game.depthOfField.erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
		game.depthOfField.erweiterterCelComposer.addPass(game.composerCelShading.edgePass);				// Custom-Effekt	
		game.depthOfField.erweiterterCelComposer.addPass(hDOF);
		game.depthOfField.erweiterterCelComposer.addPass(vDOF);
	} else{
		console.log("Depth of Field ohne Kontur");
		game.depthOfField.erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
		game.depthOfField.erweiterterCelComposer.addPass(hDOF);
		game.depthOfField.erweiterterCelComposer.addPass(vDOF);

	}
	game.composerCelShading = game.depthOfField.erweiterterCelComposer;

		console.log("Depth of Field");
	console.log(game.composerCelShading);

};