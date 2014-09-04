/**
* @author Bittner, Sebastian 
*  
* Implementierung eines Motionblurs.
* motionBlur.JS dient der aktualisierung der Delta-Bewegung in Vertikaler und Horizontaler Richtung.
* Je nach Geschwindigkeit der Bewegung in Horizontaler und Vertikaler Richutng werden die jeweiligen Shader-UniformVariablen gesetzt.
*/

function initialisiereMotionBlur() {

	game.motionBlur = {};
	game.motionBlur.DeltaX = 0.0;
	game.motionBlur.DeltaY = 0.0;
	game.motionBlur.BlurFaktorX = 145;
	game.motionBlur.BlurFaktorY = 10;
	game.motionBlur.offset = 2.0;
	game.motionBlur.threshold = 0.5;
	erstelleMotionBlurGUI();
	
	
	//TODOO Generate Alpha Picture Wird aktuell im Shader direkt geladen
	// game.motionBlur.hatching.hatch6 = THREE.ImageUtils.loadTexture("shaders/img/hatch_5.jpg");
	
};

function erstelleMotionBlurGUI() 
{
	// Ordner fuer die Motion-Blur-Einstellungen
	var motionBlur = game.debugGUI.addFolder('Motion-Blur - Sebastian');
	var parameterMotionBlur = 
	{
		aktivieren : false,
		BlurIntensX : game.motionBlur.BlurFaktorX,
		BlurIntensY : game.motionBlur.BlurFaktorY,
		threshold : game.motionBlur.threshold,
		offset: game.motionBlur.offset
	};
	game.motionBlur.aktivieren = motionBlur.add(parameterMotionBlur, "aktivieren").listen();
	motionBlur.open();				
	game.motionBlur.aktivieren.onFinishChange(function(value) 
	{
		if(value){												// Falls Haekchen gesetzt			
			erstelleMotionBlurComposer();						// Erweitere den bisherigen Composer um den Blur-Effekt
		}else{													// andernfalls
			var kontur = game.debugGUI.kontur.object.kontur; 	// Ueberpruefen ob das Cel-Shading derzeit mit Kontur verwendet wird (true ? false)
			erstelleCelShadingComposer(kontur, "Canny");					// Entsprechend der Ueberpruefung den Standard-CelShading-Composer wiederherstellen
		}
	});
	game.motionBlur.BlurIntensX = motionBlur.add(parameterMotionBlur, 'BlurIntensX').min(0.0).max(900.0).step(5.0).name("Blur IntensitätX").listen();
	game.motionBlur.BlurIntensX.onChange(function(value)
	{
		game.motionBlur.BlurFaktorX = value;
	});
	game.motionBlur.BlurIntensY = motionBlur.add(parameterMotionBlur, 'BlurIntensY').min(0.0).max(100.0).step(5.0).name("Blur IntensitätY").listen();
	game.motionBlur.BlurIntensY.onChange(function(value)
	{
		game.motionBlur.BlurFaktorY = value;
	});
	
	game.motionBlur.offset = motionBlur.add(parameterMotionBlur, 'offset').min(0.0).max(3.0).step(0.1).name("Blur Blende").listen();
	game.motionBlur.offset.onChange(function(value)
	{
		game.motionBlur.offset = value;
	});
	game.motionBlur.threshold = motionBlur.add(parameterMotionBlur, 'threshold').min(0.0).max(1.0).step(0.01).name("Blur Threshold").listen();
	game.motionBlur.threshold.onChange(function(value)
	{
		game.motionBlur.threshold = value;
	});
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

	var hblur = new THREE.ShaderPass(HorizontalBlurShader);
	hblur.uniforms.offset.value = 0.1;
	hblur.renderToScreen = false;
	
	var vblur = new THREE.ShaderPass(VerticalBlurShader);
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
	// console.log(window.innerWidth +" "+ window.innerHeight);
	if(game.composerCelShading.passes[4] && game.composerCelShading.passes[5])
	{		
		if(game.debugGUI.kontur.object.kontur == true)
		{	
			game.composerCelShading.passes[4].uniforms.offset.value = game.motionBlur.offset;								
			game.composerCelShading.passes[4].uniforms.threshold.value = game.motionBlur.threshold;								
			game.composerCelShading.passes[4].uniforms.h.value = (game.motionBlur.DeltaX*game.motionBlur.BlurFaktorX)/ window.innerHeight;
			game.composerCelShading.passes[5].uniforms.v.value = (game.motionBlur.DeltaY*game.motionBlur.BlurFaktorY)/ window.innerWidth;									
		}else
		{		
			game.composerCelShading.passes[3].uniforms.offset.value = game.motionBlur.offset;							
			game.composerCelShading.passes[4].uniforms.threshold.value = game.motionBlur.threshold;								
			game.composerCelShading.passes[3].uniforms.h.value = (game.motionBlur.DeltaX*game.motionBlur.BlurFaktorX)/ window.innerHeight;	
			game.composerCelShading.passes[4].uniforms.v.value = (game.motionBlur.DeltaY*game.motionBlur.BlurFaktorY)/ window.innerWidth;									
		}
	}
};