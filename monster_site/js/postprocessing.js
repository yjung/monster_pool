/** /////////////////////////////////////////////////////////////////////////////////
 * @author	Jaeger, Mathias
 * @function erstelleComposer() dient dazu die Shader für das Postprocessing 
 * 			zu erstellen und dem laneAssist.composer hinzuzufuegen. 
 /////////////////////////////////////////////////////////////////////////////////*/

function erstelleComposer() {
	
	// postprocessing
	var depthMaterial;
	var depthTarget;

	var pixelFormat = 1;
	if (window.devicePixelRatio !== undefined) {
		pixelFormat = window.devicePixelRatio;
	}

	var renderPass = new THREE.RenderPass(game.szene, game.kamera);
	
	var effectFilm = new THREE.FilmPass(0.8, 0.325, 256, false);
	effectFilm.renderToScreen = true;
	
	var effectcopy = new THREE.ShaderPass(THREE.CopyShader);
	effectcopy.renderToScreen = true;
	


	var parameters = {
		anisotropy : 32,
		minFilter : THREE.LinearFilter,
		magFilter : THREE.LinearFilter,
		format : THREE.RGBAFormat,
		stencilBuffer : false
	};
	var renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);

	game.composer = new THREE.EffectComposer(game.renderer, renderTarget);
	game.composer.setSize(game.breite, game.hoehe);
	
	
	game.composer.addPass(renderPass);
	game.composer.addPass(effectFilm);

}