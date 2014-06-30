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
	
	effectFilm = new THREE.FilmPass(0.8, 0.325, 256, false);	// Film-Effekt-Pass
	
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
	
	var renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);	// Rendertarget-Objekt fuer Renderer-Initialisierung
	game.composer = new THREE.EffectComposer(game.renderer, renderTarget);	// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.composer.setSize(game.breite, game.hoehe);							// Groesse setzen
	
	game.composer.addPass(renderPass);		// Normales Bild rendern
	game.composer.addPass(effectFilm);		// Film-Effekt
	game.composer.addPass(effectcopy);		// Standard-Copy-Shader zum finalen rendern

}