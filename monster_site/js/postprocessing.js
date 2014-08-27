/** /////////////////////////////////////////////////////////////////////////////////
 * @author	Jaeger, Mathias
 * @function erstelleComposer() dient dazu die Shader für das Postprocessing 
 * 			zu erstellen und dem laneAssist.composer hinzuzufuegen. 
 /////////////////////////////////////////////////////////////////////////////////*/

function erstelleComposer() {

	var pixelFormat = 1;							// Pixelformat auf quadratisch festlegen
	if (window.devicePixelRatio !== undefined) {	// Ueberpruefen ob Geraet ein Pixelformat definiert
		pixelFormat = window.devicePixelRatio;		// Ggf. auf Geraete-Pixelformat setzen
	}

	var renderPass = new THREE.RenderPass(game.szene, game.kamera);	// Renderpass fuer Szene aus Kamera
	// var renderPassMap = new THREE.RenderPass(game.szene, game.mapCamera);

	var effektFilm = new THREE.FilmPass(0.8, 0.325, 256, false);	// Film-Effekt-Pass
	var effektBloomPass = new THREE.BloomPass(3, 25, 5, 256);		// Bloom-Effekt
	edgePass = new THREE.ShaderPass(CannyEdgePass);			// Custom-Shader
	edgePass.renderToScreen = true;

	game.motionBlur.hblur = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	game.motionBlur.vblur = new THREE.ShaderPass( THREE.VerticalBlurShader );
	game.motionBlur.vblur.renderToScreen = false;
	
	var customShader = new THREE.ShaderPass(CustomShader);			// Custom-Shader
	
	var effectcopy = new THREE.ShaderPass(THREE.CopyShader);		// Kopier-Shader fuer Effekte, die nicht selbst/direkt gerendert werden koennen
	effectcopy.renderToScreen = true;								// Als Letzten markieren bzw. final auf das Canvas rendern
	
	// Parameter fuer den Renderer festlegen
	var parameters = {
		anisotropy : game.renderer.getMaxAnisotropy(),	// Maximale Anzahl an Textur-Samples je nach Geraet
		minFilter : THREE.LinearFilter,		// Textur-Sampling falls Texel kleiner als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		magFilter : THREE.LinearFilter,		// Textur-Sampling falls Texel groesser als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		format : THREE.RGBAFormat,			// RGB-Farbraum mit zusaetzlichem Alpha
		stencilBuffer : false				// Stencil-Buffer deaktivieren
	};
	
	// Composer Film-Effekt
	var renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);	// Rendertarget-Objekt fuer Renderer-Initialisierung
	game.composerFilm = new THREE.EffectComposer(game.renderer, renderTarget);				// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.composerFilm.setSize(game.breite, game.hoehe);										// Groesse setzen
	
	game.composerFilm.addPass(renderPass);		// Normales Bild rendern
	game.composerFilm.addPass(effektFilm);		// Film-Effekt
	game.composerFilm.addPass(effectcopy);		// Standard-Copy-Shader zum finalen rendern
	
	// Composer Bloom-Effekt
	var renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);	// Rendertarget-Objekt fuer Renderer-Initialisierung
	game.composerBloomPass = new THREE.EffectComposer(game.renderer, renderTarget);			// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.composerBloomPass.setSize(game.breite, game.hoehe);								// Groesse setzen
	
	game.composerBloomPass.addPass(renderPass);		// Normales Bild rendern
	game.composerBloomPass.addPass(effektBloomPass);// Film-Effekt
	game.composerBloomPass.addPass(effectcopy);		// Standard-Copy-Shader zum finalen rendern
	
	// Composer CustomShader
	var renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);	// Rendertarget-Objekt fuer Renderer-Initialisierung
	game.composerCustom = new THREE.EffectComposer(game.renderer, renderTarget);			// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.composerCustom.setSize(game.breite, game.hoehe);									// Groesse setzen
	
	game.composerCustom.addPass(renderPass);		// Normales Bild rendern
	// game.composerCustom.addPass(customShader);		// Custom-Effekt
	game.composerCustom.addPass(game.motionBlur.hblur);
	game.composerCustom.addPass(game.motionBlur.vblur);
	game.composerCustom.addPass(effectcopy);		// Standard-Copy-Shader zum finalen rendern

}

function resizeComposer(){
	game.composerFilm.setSize(game.breite, game.hoehe);			// Composer fuer Film-Effekt in Groesse aktualisieren
	game.composerBloomPass.setSize(game.breite, game.hoehe);	// Composer fuer Bloom-Effekt in Groesse aktualisieren
	game.composerCelShading.setSize(game.breite, game.hoehe);		// Composer fuer Custom-Effekt in Groesse aktualisieren
	game.composerCustom.setSize(game.breite, game.hoehe);		// Composer fuer Custom-Effekt in Groesse aktualisieren
};