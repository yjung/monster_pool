/** /////////////////////////////////////////////////////////////////////////////////
 * @author	Jaeger, Mathias
 * @class 	setupRender.js dient dazu den WebGL-Renderer zu initialisieren und
 * 			aktualisieren.
 *//////////////////////////////////////////////////////////////////////////////////
function setupRenderer(breite, hoehe) {
	if (window.WebGLRenderingContext) {
		renderer = new THREE.WebGLRenderer({
			antialias : true
		});
	} else {
		alert("NO WEBGL!");
		renderer = new THREE.CanvasRenderer();
	}

	// Renderer auf die Groesse des Fensters maximieren
	renderer.setSize(breite, hoehe);
	// Hintergrundfarbe des Renderers festlegen
	renderer.setClearColor(0x000000);
	// shadowMaps aktivieren
	renderer.shadowMapEnabled = true;
	// To allow render overlay on top of sprited sphere
	renderer.autoClear = false;
	renderer.clear(false, true, false);
	return (renderer);
};
