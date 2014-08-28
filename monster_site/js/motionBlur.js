function initialisiereMotionBlur() {

	game.motionBlur = {};
	game.motionBlur.DeltaX = 0.0;
	game.motionBlur.DeltaY = 0.0;
	game.motionBlur.BlurFaktorX = 25;
	game.motionBlur.BlurFaktorY = 300;
	erstelleMotionBlurGUI();
};

function erstelleMotionBlurGUI() 
{
	// Ordner fuer die Motion-Blur-Einstellungen
	var motionBlur = game.debugGUI.addFolder('Motion-Blur - Sebastian');

	var parameterMotionBlur = 
	{
		aktivieren : false,
		BlurIntensX : 25,
		BlurIntensY : 300
	};
	
	game.motionBlur.aktivieren = motionBlur.add(parameterMotionBlur, "aktivieren").listen();
	motionBlur.open();				
	game.motionBlur.aktivieren.onFinishChange(function(value) 
	{
		if(value){												// Falls Haekchen gesetzt			
			erstelleMotionBlurComposer();						// Erweitere den bisherigen Composer um den Blur-Effekt
		}else{													// andernfalls
			var kontur = game.debugGUI.kontur.object.kontur; 	// Ueberpruefen ob das Cel-Shading derzeit mit Kontur verwendet wird (true ? false)
			erstelleCelShadingComposer(kontur);					// Entsprechend der Ueberpruefung den Standard-CelShading-Composer wiederherstellen
		}
	});
	game.motionBlur.BlurIntensX = motionBlur.add(parameterMotionBlur, 'BlurIntensX').min(0.0).max(100.0).step(5.0).name("Blur IntensitätX").listen();
	game.motionBlur.BlurIntensX.onChange(function(value)
	{
		game.motionBlur.BlurFaktorX = value;
	});
	game.motionBlur.BlurIntensY = motionBlur.add(parameterMotionBlur, 'BlurIntensY').min(0.0).max(900.0).step(5.0).name("Blur IntensitätY").listen();
	game.motionBlur.BlurIntensY.onChange(function(value)
	{
		game.motionBlur.BlurFaktorY = value;
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
	if(game.composerCelShading.passes[4] && game.composerCelShading.passes[5])
	{		
		if(game.debugGUI.kontur.object.kontur == true)
		{	
			game.composerCelShading.passes[4].uniforms.h.value = (game.motionBlur.DeltaX*game.motionBlur.BlurFaktorX)/ window.innerHeight;							
			game.composerCelShading.passes[5].uniforms.v.value = (game.motionBlur.DeltaY*game.motionBlur.BlurFaktorY)/ window.innerWidth;									
		}else
		{		
			game.composerCelShading.passes[3].uniforms.h.value = (game.motionBlur.DeltaX*game.motionBlur.BlurFaktorX)/ window.innerHeight;							
			game.composerCelShading.passes[4].uniforms.v.value = (game.motionBlur.DeltaY*game.motionBlur.BlurFaktorY)/ window.innerWidth;									
		}
	}
};

function generateDataTexture(width, height, color)
{
	var size = With * height;
	var data = new Unit8Array(3 * size);
	
	var r = Math.floor( color.r * 255);
	var g = Math.floor( color.g * 255);
	var b = Math.floor( color.b * 255);
	
	
	for (var i=0; i < size; i++)
	{
		data [i*3	] = r;
		data [i*3+1	] = g;
		data [i*3+2	] = b;
	}
	
	var texture = new Three.DataTexture(data,width, height, Three.RGBFormat);
	texture.needUpdate = true;
	return texture;
}
