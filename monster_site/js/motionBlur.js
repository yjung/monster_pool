function initialisiereMotionBlur() {

	game.motionBlur = {};

	erstelleMotionBlurGUI();
};

function erstelleMotionBlurGUI() {
	// Ordner fuer die Motion-Blur-Einstellungen
	var motionBlur = game.debugGUI.addFolder('Motion-Blur - Sebastian');

	var parameterMotionBlur = {
		aktivieren : false
	};

	game.motionBlur.aktivieren = motionBlur.add(parameterMotionBlur, "aktivieren").listen();

	game.motionBlur.aktivieren.onFinishChange(function(value) {
		if(value){												// Falls Haekchen gesetzt			
			erstelleMotionBlurComposer();						// Erweitere den bisherigen Composer um den Blur-Effekt
		}else{													// andernfalls
			var kontur = game.debugGUI.kontur.object.kontur; 	// Ueberpruefen ob das Cel-Shading derzeit mit Kontur verwendet wird (true ? false)
			erstelleCelShadingComposer(kontur);					// Entsprechend der Ueberpruefung den Standard-CelShading-Composer wiederherstellen
		}								
	});

	motionBlur.open();
	// Fuer Debugging geoeffnet
};

function erstelleMotionBlurComposer() {
	// Parameter fuer den Renderer festlegen
	var parameters = {
		anisotropy : game.renderer.getMaxAnisotropy(),	// Maximale Anzahl an Textur-Samples je nach Geraet
		minFilter : THREE.LinearFilter,		// Textur-Sampling falls Texel kleiner als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		magFilter : THREE.LinearFilter,		// Textur-Sampling falls Texel groesser als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		format : THREE.RGBAFormat,			// RGB-Farbraum mit zusaetzlichem Alpha
		stencilBuffer : false				// Stencil-Buffer deaktivieren
	};
	var renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);
	
	
	// Rendertarget-Objekt fuer Renderer-Initialisierung
	var erweiterterCelComposer = new THREE.EffectComposer(game.renderer, renderTarget);
	// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	erweiterterCelComposer.setSize(game.breite, game.hoehe);
	// Groesse setzen
	
	erweiterterCelComposer.edgePass = new THREE.ShaderPass(CannyEdgePass);			// Custom-Shader
	erweiterterCelComposer.edgePass.renderToScreen = false;

	erweiterterCelComposer.effectcopy = new THREE.ShaderPass(THREE.CopyShader);		// Kopier-Shader fuer Effekte, die nicht selbst/direkt gerendert werden koennen
	erweiterterCelComposer.effectcopy.renderToScreen = true;								// Als Letzten markieren bzw. final auf das Canvas rendern	game.composerCelShading.addPass(effectcopy);

	var hblur = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	hblur.renderToScreen = false;
	
	var vblur = new THREE.ShaderPass( THREE.VerticalBlurShader );
	vblur.renderToScreen = false;
	
	var effectcopy = new THREE.ShaderPass(THREE.CopyShader);		// Kopier-Shader fuer Effekte, die nicht selbst/direkt gerendert werden koennen
	effectcopy.renderToScreen = true;								// Als Letzten markieren bzw. final auf das Canvas rendern	game.composerCelShading.addPass(effectcopy);

	erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
	erweiterterCelComposer.addPass(game.composerCelShading.effectcopy);			// Custom-Effekt

	if(game.debugGUI.kontur.object.kontur == true){	// Ueberpruefen ob das Cel-Shading derzeit mit Kontur verwendet wird (true ? false)
		erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
		erweiterterCelComposer.addPass(game.composerCelShading.edgePass);				// Custom-Effekt
		erweiterterCelComposer.addPass(hblur);
		erweiterterCelComposer.addPass(vblur);
		erweiterterCelComposer.addPass(game.composerCelShading.effectcopy);			// Custom-Effekt		
	} else{
		console.log("Motion-Blur ohne Kontur");
		erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
		erweiterterCelComposer.addPass(hblur);
		erweiterterCelComposer.addPass(vblur);
		erweiterterCelComposer.addPass(effectcopy);		// Standard-Copy-Shader zum finalen rendern
	}
	
	game.composerCelShading = erweiterterCelComposer;

}
