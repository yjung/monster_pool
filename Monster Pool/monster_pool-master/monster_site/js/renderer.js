/** /////////////////////////////////////////////////////////////////////////////////
 * @author	Jaeger, Mathias
 * @class 	setupRender.js dient dazu den WebGL-Renderer zu initialisieren und
 * 			aktualisieren.
 *//////////////////////////////////////////////////////////////////////////////////0
function setupRenderer(breite, hoehe) {
	if(debugMode){
	console.log("--Initialisiere Renderer.--");		
	}
	if (window.WebGLRenderingContext) {				// Falls WebGL verfuegbar
		var renderer = new THREE.WebGLRenderer({	// Renderer intialisieren
			antialias : true						// antialias standardmaessig an
		});
	} else {												// ohne WebGL
		alert("Browser nicht kompatibel! Bitte updaten!");	// Warnung ausgeben
		var renderer = new THREE.WebGLRenderer()//CanvasRenderer();			// und Fallback auf Software-Rendering 
	}

	renderer.setSize(game.breite, game.hoehe);	// Renderer auf die Groesse des Fensters maximieren
	renderer.setClearColor(0x000, 1);  			// Hintergrundfarbe des Renderers festlegen
												// Auf setClearColor() geändert, weil setClearColorHex() veraltet ist
	renderer.domElement.style.zIndex = -1; 		// To allow render overlay on top of sprited sphere
	renderer.shadowMapEnabled = true;			// shadowMaps aktivieren
        //renderer.shadowMap.type = Three.BasicShadowMap;
	renderer.autoClear = false;					// Kein Auto-Clear um Postprocessing zu ermoeglichen
	renderer.clear(false, true, false);			// clear(color, depth, stencil)
	
	renderer.filmEffect = false;				
	renderer.bloomPass = false;
	
	return (renderer);							// render wird in game.renderer gesichert
};


// Anpassung des Fensters (bzw. Canvas)
function onWindowResize() {

	game.breite = Math.round($("#viewport").width());									// Volle Bildschirmbreite
	game.hoehe = ($(window).height() - $("#header").height()- $("#footer").height());	// Volle Bildschirmhoehe ohne Header und Footer
	
    game.kamera.aspect = game.breite / game.hoehe;    	// der Kamera auf Groessenaenderung
    game.kamera.updateProjectionMatrix();               // Projektionsmatrix der Kamera aktualisieren
    game.renderer.setSize(game.breite, game.hoehe);     // Renderer aktualisieren

	// Effekt-Composer in Groesse anpassen, falls diese schon vorhanden
	if(game.composerCustom){
	resizeComposer();			// Composer in Groesse aktualisieren
	}
};