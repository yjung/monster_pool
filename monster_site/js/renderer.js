/** /////////////////////////////////////////////////////////////////////////////////
 * @author	Jaeger, Mathias
 * @class 	setupRender.js dient dazu den WebGL-Renderer zu initialisieren und
 * 			aktualisieren.
 *//////////////////////////////////////////////////////////////////////////////////
function setupRenderer(breite, hoehe) {


	if (window.WebGLRenderingContext) {
		var renderer = new THREE.WebGLRenderer({
			antialias : true
		});
	} else {
		alert("NO WEBGL!");
		var renderer = new THREE.CanvasRenderer();
	}

	renderer.setSize(game.breite, game.hoehe);	// Renderer auf die Groesse des Fensters maximieren
	renderer.setClearColorHex(0x000, 1);  		// Hintergrundfarbe des Renderers festlegen
	renderer.domElement.style.zIndex = -1; 		// To allow render overlay on top of sprited sphere
	renderer.shadowMapEnabled = true;			// shadowMaps aktivieren
	renderer.autoClear = false;					// Kein Auto-Clear um Postprocessing zu ermoeglichen
	renderer.clear(false, true, false);			// clear(color, depth, stencil)
	
	renderer.filmEffect = false;
	renderer.bloomPass = false;
	
	return (renderer);							// render wird in game.renderer gesichert
};


// Anpassung des Fensters (bzw. Canvas)
function onWindowResize() {

	game.breite = Math.round($("#viewport").width());
	game.hoehe = ($(window).height() - $("#header").height()- $("#footer").height());
	
    game.kamera.aspect = game.breite / game.hoehe;    	// der Kamera auf Groessenaenderung
    game.kamera.updateProjectionMatrix();               // Projektionsmatrix der Kamera aktualisieren
    game.renderer.setSize(game.breite, game.hoehe);     // Renderer aktualisieren

	// Effekt-Composer in Groesse anpassen, falls diese schon vorhanden
	if(game.composerCustom){
	resizeComposer();
	}
};