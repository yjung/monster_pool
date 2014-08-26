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
		erstelleMotionBlurComposer();
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
	game.composerCelShading = new THREE.EffectComposer(game.renderer, renderTarget);
	// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.composerCelShading.setSize(game.breite, game.hoehe);
	// Groesse setzen
	var renderPass = new THREE.RenderPass(game.szene, game.kamera);	// Renderpass fuer Szene aus Kamera
	game.composerCelShading.addPass(renderPass);
	// Normales Bild rendern
	// Custom-Effekt
	game.composerCelShading.addPass(game.motionBlur.hblur);
	game.composerCelShading.addPass(game.motionBlur.vblur);
	game.composerCelShading.addPass(edgePass);
	game.composerCelShading.addPass(effectcopy);
}
