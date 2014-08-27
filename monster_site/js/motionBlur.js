function initialisiereMotionBlur() {

	game.motionBlur = {};
	game.motionBlur.DeltaX = 0.0;
	game.motionBlur.DeltaY = 0.0;
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
	game.motionBlur.erweiterterCelComposer = new THREE.EffectComposer(game.renderer, renderTarget);
	// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.motionBlur.erweiterterCelComposer.setSize(game.breite, game.hoehe);
	// Groesse setzen
	
	game.motionBlur.erweiterterCelComposer.edgePass = new THREE.ShaderPass(CannyEdgePass);			// Custom-Shader
	game.motionBlur.erweiterterCelComposer.edgePass.renderToScreen = false;

	game.motionBlur.erweiterterCelComposer.effectcopy = new THREE.ShaderPass(THREE.CopyShader);		// Kopier-Shader fuer Effekte, die nicht selbst/direkt gerendert werden koennen
	game.motionBlur.erweiterterCelComposer.effectcopy.renderToScreen = true;								// Als Letzten markieren bzw. final auf das Canvas rendern	game.composerCelShading.addPass(effectcopy);

	var hblur = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	hblur.renderToScreen = false;
	
	var vblur = new THREE.ShaderPass( THREE.VerticalBlurShader );
	vblur.renderToScreen = false;
	
	var effectcopy = new THREE.ShaderPass(THREE.CopyShader);		// Kopier-Shader fuer Effekte, die nicht selbst/direkt gerendert werden koennen
	effectcopy.renderToScreen = true;								// Als Letzten markieren bzw. final auf das Canvas rendern	game.composerCelShading.addPass(effectcopy);

	game.motionBlur.erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
	game.motionBlur.erweiterterCelComposer.addPass(game.composerCelShading.effectcopy);			// Custom-Effekt

	if(game.debugGUI.kontur.object.kontur == true){	// Ueberpruefen ob das Cel-Shading derzeit mit Kontur verwendet wird (true ? false)
		game.motionBlur.erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
		game.motionBlur.erweiterterCelComposer.addPass(game.composerCelShading.edgePass);				// Custom-Effekt
		game.motionBlur.erweiterterCelComposer.addPass(hblur);
		game.motionBlur.erweiterterCelComposer.addPass(vblur);
		game.motionBlur.erweiterterCelComposer.addPass(game.composerCelShading.effectcopy);			// Custom-Effekt		
	} else{
		console.log("Motion-Blur ohne Kontur");
		game.motionBlur.erweiterterCelComposer.addPass(game.composerCelShading.renderPass);			// Normales Bild rendern
		game.motionBlur.erweiterterCelComposer.addPass(hblur);
		game.motionBlur.erweiterterCelComposer.addPass(vblur);
		game.motionBlur.erweiterterCelComposer.addPass(effectcopy);		// Standard-Copy-Shader zum finalen rendern
	}
	
	game.composerCelShading = game.motionBlur.erweiterterCelComposer;

}

function updateMotionBlur()
{
	if(game.composerCelShading.passes[4] && game.composerCelShading.passes[5]){		
	if(game.debugGUI.kontur.object.kontur == true)
	{	
			game.composerCelShading.passes[4].uniforms.h.value = (game.motionBlur.DeltaX*100)/ window.innerHeight;							
			game.composerCelShading.passes[5].uniforms.v.value = (game.motionBlur.DeltaY*100)/ window.innerWidth;									
	}else{		
			game.composerCelShading.passes[3].uniforms.h.value = (game.motionBlur.DeltaX*100)/ window.innerHeight;							
			game.composerCelShading.passes[4].uniforms.v.value = (game.motionBlur.DeltaY*100)/ window.innerWidth;									
	}
	}
			// console.log((game.motionBlur.DeltaY*1000)/ window.innerHeight);								
			// console.log(game.composerCelShading.passes[5]);		
	  // THREE.VerticalBlurShader.uniforms.v.value = (game.motionBlur.DeltaX*1000)/ window.innerWidth;
	  // THREE.HorizontalBlurShader.uniforms.h.value = (game.motionBlur.DeltaY*1000)/ window.innerHeight;

	// console.log("X Delta "+ (game.motionBlur.DeltaX*1000)/ window.innerWidth+" Y Delta "+ (game.motionBlur.DeltaY*1000)/ window.innerWidth);
};