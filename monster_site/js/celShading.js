/** /////////////////////////////////////////////////////////////////////////////////
 * @author	Jaeger, Mathias
 *
 * 		 	celShading.js dient dazu das Cel-Shading zu initialisieren und die damit
 * 			verbundenen Funktionen zu sammeln. Der als THREE.ShaderMaterial erzeugten
 * 			Materialien (Sammlung: game.celShadingMaterials) nutzen den Shader unter:
 * 			"shaders/CelShader.js"
 *//////////////////////////////////////////////////////////////////////////////////

/* Sammlung der einzelnen notwendigen Schritte, fuer das Cel-Shading.*/
function initialisiereCelShading() {
	/* Namespaces schaffen. */
	window.game.celShading = {};
	// CelShading-NameSpace
	window.game.celShading.kontur = true;
	// CelShading-Hatching-NameSpace
	window.game.celShading.hatching = {};
	// CelShading-Hatching-NameSpace

	erstelleCelShadingComposer(true);
	// initialisiereCSKontur();			// TODO
	initialisiereCelShadingHatching();
	// celShadingGUIShading();					// TODO
	celShadingGUIKontur();
	celShadingGUIHatching();
};

function erstelleCelShadingComposer(kontur) {
	// Parameter fuer den Renderer festlegen
	var parameters = {
		anisotropy : game.renderer.getMaxAnisotropy(), // Maximale Anzahl an Textur-Samples je nach Geraet
		minFilter : THREE.LinearFilter, // Textur-Sampling falls Texel kleiner als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		magFilter : THREE.LinearFilter, // Textur-Sampling falls Texel groesser als Pixel. THREE.LinearFilter nimmt Interpolation der nähesten vier.
		format : THREE.RGBAFormat, // RGB-Farbraum mit zusaetzlichem Alpha
		stencilBuffer : false	// Stencil-Buffer deaktivieren
	};

	var renderTarget = new THREE.WebGLRenderTarget(game.breite, game.hoehe, parameters);
	// Rendertarget-Objekt fuer Renderer-Initialisierung
	game.composerCelShading = new THREE.EffectComposer(game.renderer, renderTarget);
	// Effect-Composer mit Renderer und Rendertarget-Objekt initialisieren
	game.composerCelShading.setSize(game.breite, game.hoehe);
	// Groesse setzen
	game.composerCelShading.renderPass = new THREE.RenderPass(game.szene, game.kamera);
	// Renderpass fuer Szene aus Kamera

	game.composerCelShading.edgePass = new THREE.ShaderPass(CannyEdgePass);
	// Custom-Shader
	game.composerCelShading.edgePass.renderToScreen = false;

	game.composerCelShading.effectcopy = new THREE.ShaderPass(THREE.CopyShader);
	// Kopier-Shader fuer Effekte, die nicht selbst/direkt gerendert werden koennen
	game.composerCelShading.effectcopy.renderToScreen = true;
	// Als Letzten markieren bzw. final auf das Canvas rendern	game.composerCelShading.addPass(effectcopy);

	game.composerCelShading.addPass(game.composerCelShading.renderPass);
	// Normales Bild rendern
	game.composerCelShading.addPass(game.composerCelShading.effectcopy);
	// Custom-Effekt
	if (kontur) {
		game.composerCelShading.addPass(game.composerCelShading.renderPass);
		// Normales Bild rendern
		game.composerCelShading.addPass(game.composerCelShading.edgePass);
		// Custom-Effekt
		game.composerCelShading.addPass(game.composerCelShading.effectcopy);
		// Custom-Effekt
	}

	// game.composerCelShading.addPass(effectcopy);		// Standard-Copy-Shader zum finalen rendern

};
/* Hatching-Texturen werden initial einmal geladen und beim Erstellen von Cel-Shading-Materialien aus dem Namespace heraus referenziert.*/
function initialisiereCelShadingHatching() {
	game.celShading.hatching.hatch1 = THREE.ImageUtils.loadTexture("shaders/img/hatch_0.jpg");
	game.celShading.hatching.hatch2 = THREE.ImageUtils.loadTexture("shaders/img/hatch_1.jpg");
	game.celShading.hatching.hatch3 = THREE.ImageUtils.loadTexture("shaders/img/hatch_2.jpg");
	game.celShading.hatching.hatch4 = THREE.ImageUtils.loadTexture("shaders/img/hatch_3.jpg");
	game.celShading.hatching.hatch5 = THREE.ImageUtils.loadTexture("shaders/img/hatch_4.jpg");
	game.celShading.hatching.hatch6 = THREE.ImageUtils.loadTexture("shaders/img/hatch_5.jpg");
};

/* Cel-Shading wird ueber ein eigenes Shader-Material erzeugt. Dieses muss Objekten mit Parametern als Material zugewiesen werden.*/
function erstelleCelShadingMaterial(beschreibung, textur, farbe) {
	// var shaderUniforms = THREE.UniformsUtils.clone( CelShader.uniforms );

	var defines = {};
	if (textur) {
		defines["USE_MAP"] = true;
		// shaderUniforms["map"].value = textur;
	} else {
		defines["USE_MAP"] = false;
		// shaderUniforms["diffuse"].value = farbe;
	}

	game.celShadingMaterials.push(new THREE.ShaderMaterial({
		name : beschreibung,
		defines : defines,
		uniforms : {
			// THREE.UniformsLib[ "common" ]
			"diffuse" : {
				type : "c",
				value : farbe
			},
			"opacity" : {
				type : "f",
				value : 1.0
			},
			"map" : {
				type : "t",
				value : textur
			},
			"offsetRepeat" : {
				type : "v4",
				value : new THREE.Vector4(0, 0, 1, 1)
			},
			"lightMap" : {
				type : "t",
				value : null
			},
			"specularMap" : {
				type : "t",
				value : null
			},
			"envMap" : {
				type : "t",
				value : null
			},
			"flipEnvMap" : {
				type : "f",
				value : -1
			},
			"useRefract" : {
				type : "i",
				value : 0
			},
			"reflectivity" : {
				type : "f",
				value : 1.0
			},
			"refractionRatio" : {
				type : "f",
				value : 0.98
			},
			"combine" : {
				type : "i",
				value : 0
			},
			"morphTargetInfluences" : {
				type : "f",
				value : 0
			},

			//THREE.UniformsLib[ "fog" ]
			"fogDensity" : {
				type : "f",
				value : 0.00025
			},
			"fogNear" : {
				type : "f",
				value : 1
			},
			"fogFar" : {
				type : "f",
				value : 2000
			},
			"fogColor" : {
				type : "c",
				value : new THREE.Color(0xffffff)
			},

			// THREE.UniformsLib[ "lights" ]
			"ambientLightColor" : {
				type : "fv",
				value : []
			},
			"directionalLightDirection" : {
				type : "fv",
				value : []
			},
			"directionalLightColor" : {
				type : "fv",
				value : []
			},
			"hemisphereLightDirection" : {
				type : "fv",
				value : []
			},
			"hemisphereLightSkyColor" : {
				type : "fv",
				value : []
			},
			"hemisphereLightGroundColor" : {
				type : "fv",
				value : []
			},
			"pointLightColor" : {
				type : "fv",
				value : []
			},
			"pointLightPosition" : {
				type : "fv",
				value : []
			},
			"pointLightDistance" : {
				type : "fv1",
				value : []
			},
			"spotLightColor" : {
				type : "fv",
				value : []
			},
			"spotLightPosition" : {
				type : "fv",
				value : []
			},
			"spotLightDirection" : {
				type : "fv",
				value : []
			},
			"spotLightDistance" : {
				type : "fv1",
				value : []
			},
			"spotLightAngleCos" : {
				type : "fv1",
				value : []
			},
			"spotLightExponent" : {
				type : "fv1",
				value : []
			},

			// THREE.UniformsLib[ "shadowmap" ]
			"shadowMap" : {
				type : "tv",
				value : []
			},
			"shadowMapSize" : {
				type : "v2v",
				value : []
			},
			"shadowBias" : {
				type : "fv1",
				value : []
			},
			"shadowDarkness" : {
				type : "fv1",
				value : []
			},
			"shadowMatrix" : {
				type : "m4v",
				value : []
			},

			// Hatching-spezifische Uniforms
			"ambient" : {
				type : "c",
				value : new THREE.Color(0xffffff)
			},
			"emissive" : {
				type : "c",
				value : new THREE.Color(0x000000)
			},
			"wrapRGB" : {
				type : "v3",
				value : new THREE.Vector3(1, 1, 1)
			},
			"diffuse" : {
				type : "v3",
				value : new THREE.Vector3(1, 1, 1)
			},
			"hatchingAktiv" : {
				type : "f",
				value : 0
			},
			"showOutline" : {
				type : "f",
				value : 0
			},
			"ambientWeight" : {
				type : "f",
				value : 0
			},
			"diffuseWeight" : {
				type : "f",
				value : 1
			},
			"rimWeight" : {
				type : "f",
				value : 1
			},
			"specularWeight" : {
				type : "f",
				value : 1
			},
			"shininess" : {
				type : "f",
				value : 1
			},
			"invertRim" : {
				type : "i",
				value : 0
			},
			"inkColor" : {
				type : 'v4',
				value : new THREE.Vector3(0, 0, 0)
			},
			"resolution" : {
				type : 'v2',
				value : new THREE.Vector2(0, 0)
			},
			"bkgResolution" : {
				type : 'v2',
				value : new THREE.Vector2(0, 0)
			},
			"lightPosition" : {
				type : 'v3',
				value : new THREE.Vector3(0, 100, 0)
			},
			"hatch1" : {
				type : 't',
				value : game.celShading.hatching.hatch1
			},
			"hatch2" : {
				type : 't',
				value : game.celShading.hatching.hatch2
			},
			"hatch3" : {
				type : 't',
				value : game.celShading.hatching.hatch3
			},
			"hatch4" : {
				type : 't',
				value : game.celShading.hatching.hatch4
			},
			"hatch5" : {
				type : 't',
				value : game.celShading.hatching.hatch5
			},
			"hatch6" : {
				type : 't',
				value : game.celShading.hatching.hatch6
			},
			"repeat" : {
				type : 'v2',
				value : new THREE.Vector2(0, 0)
			},
			"paper" : {
				type : 't',
				value : THREE.ImageUtils.loadTexture("shaders/img/paper.jpg")
			}
		},
		vertexShader : CelShader.vertexShader,
		fragmentShader : CelShader.fragmentShader,
		fog : false,
		lights : true
	}));

	var aktuellesMaterial = game.celShadingMaterials[game.celShadingMaterials.length - 1];

	aktuellesMaterial.uniforms.repeat.value.set(3, 3);
	aktuellesMaterial.uniforms.hatch1.value.wrapS = aktuellesMaterial.uniforms.hatch1.value.wrapT = THREE.RepeatWrapping;
	aktuellesMaterial.uniforms.hatch2.value.wrapS = aktuellesMaterial.uniforms.hatch2.value.wrapT = THREE.RepeatWrapping;
	aktuellesMaterial.uniforms.hatch3.value.wrapS = aktuellesMaterial.uniforms.hatch3.value.wrapT = THREE.RepeatWrapping;
	aktuellesMaterial.uniforms.hatch4.value.wrapS = aktuellesMaterial.uniforms.hatch4.value.wrapT = THREE.RepeatWrapping;

	aktuellesMaterial.uniforms.hatch5.value.wrapS = aktuellesMaterial.uniforms.hatch5.value.wrapT = THREE.RepeatWrapping;
	aktuellesMaterial.uniforms.hatch6.value.wrapS = aktuellesMaterial.uniforms.hatch6.value.wrapT = THREE.RepeatWrapping;

	return aktuellesMaterial;
};

// Ordner fuer die Cel-Shading-Einstellungen zur Kontur ueber GUI
function celShadingGUIShading() {
}	;// TODO
// Ordner fuer die Cel-Shading-Einstellungen zur Kontur ueber GUI
function celShadingGUIKontur() {
	var celShadingKontur = game.debugGUI.addFolder('Cel-Shading (Kontur) - Mathias');

	// Parameter-Liste fuer das Cel-Shading
	var paramCelShadingKontur = {
		edgeDetection : ["Canny", "TODO"],
		kontur : true,
		offset : 0.3,
		konturFarbe : [0, 0, 0, 1], // RGB with alpha
	};

	game.renderer.celShadingKontur = true;
	// Default = true
	// Post-Processingeintraege hinzufuegen
	game.debugGUI.edgeDetection = celShadingKontur.add(paramCelShadingKontur, 'edgeDetection', ['Canny', 'TODO']).name("Edge-Detection");
	game.debugGUI.kontur = celShadingKontur.add(paramCelShadingKontur, 'kontur').name("Kontur").listen();
	game.debugGUI.konturfarbe = celShadingKontur.addColor(paramCelShadingKontur, 'konturFarbe').name("Kontur-Farbe").listen();
	game.debugGUI.offset = celShadingKontur.add(paramCelShadingKontur, 'offset').min(0.0).max(2.0).step(0.01).name("Offset").listen();

	game.debugGUI.konturfarbe.onChange(function(value) {
		if (game.debugGUI.kontur.object.kontur) {
			console.log("1");
			// Pruefen ob Kontur aktiv
			var neueFarbe = new THREE.Vector4(value[0] / 255, value[1] / 255, value[2] / 255, value[3] / 255);
			game.composerCelShading.edgePass.uniforms.uKonturFarbe.value = neueFarbe;
		} else {
			console.log("2");
			game.debugGUI.kontur.object.kontur = true;
			console.log(game.debugGUI.kontur);
			// Pruefen ob Kontur aktiv
			erstelleCelShadingComposer(true);
			var neueFarbe = new THREE.Vector4(value[0] / 255, value[1] / 255, value[2] / 255, value[3] / 255);
			game.composerCelShading.edgePass.uniforms.uKonturFarbe.value = neueFarbe;
		}
		//game.composerCelShading.passes[3].uniforms.uBorderColor.value = neueFarbe;
		//console.log(game.composerCelShading.passes[3]);
	});

	game.debugGUI.offset.onChange(function(value) {
		game.composerCelShading.edgePass.uniforms.uOffset.value = value;
	});

	game.debugGUI.kontur.onFinishChange(function(value) {

			game.celShading.kontur = value;
			if (game.celShading.kontur == true) {
				game.composerCelShading = null;
				erstelleCelShadingComposer(true);
			} else {
				game.composerCelShading = null;
				erstelleCelShadingComposer(false);
			}
			
			if (game.motionBlur.aktivieren.object.aktivieren == true) {
			erstelleMotionBlurComposer();
		}
		
	});

	celShadingKontur.close();
	// Ordner standardmaessig oeffnen oder geschlossen
};
// Ordner fuer die Cel-Shading-Einstellungen zum Hatching ueber GUI
function celShadingGUIHatching() {
	// Ordner fuer die Cel-Shading-Einstellungen
	var celShadingHatching = game.debugGUI.addFolder('Cel-Shading (Hatching) - Mathias');

	var presets = {
		'Default' : {
			ambient : 8,
			diffuse : 100,
			specular : 100,
			rim : 46,
			shininess : 49,
			invertRim : false,
			displayOutline : false,
			inkColor : [72, 72, 164]
		},
		'Sketch' : {
			ambient : 9.8,
			diffuse : 100,
			specular : 100,
			rim : 81,
			shininess : 12,
			invertRim : true,
			displayOutline : false,
			inkColor : [175, 175, 175]
		},
		'Classroom' : {
			ambient : 13,
			diffuse : 27,
			specular : 100,
			rim : 76,
			shininess : 27,
			invertRim : false,
			displayOutline : true,
			inkColor : [41, 41, 202]
		},
		'Engraving' : {
			ambient : 0,
			diffuse : 57,
			specular : 100,
			rim : 77,
			shininess : 15,
			invertRim : true,
			displayOutline : false,
			inkColor : [90, 120, 111]
		}
	};
	var Settings = function() {
		this.ambient = 8.7;
		this.diffuse = 7;
		this.specular = 22;
		this.rim = 100;
		this.shininess = 13;
		this.invertRim = false;
		this.displayOutline = false;
		this.inkColor = [255, 255, 255];
		this.preset = 0;
	};

	game.celShading.hatching.settings = new Settings();

	// game.celShading.hatching.aktivieren = celShadingHatching.add(game.celShading.hatching.settings, 'aktivieren', false ).listen();
	game.celShading.hatching.ambient = celShadingHatching.add(game.celShading.hatching.settings, 'ambient', 0.0, 100.0).listen();
	game.celShading.hatching.diffuse = celShadingHatching.add(game.celShading.hatching.settings, 'diffuse', 0.0, 100.0);
	game.celShading.hatching.specular = celShadingHatching.add(game.celShading.hatching.settings, 'specular', 0.0, 100.0);
	game.celShading.hatching.rim = celShadingHatching.add(game.celShading.hatching.settings, 'rim', 0.0, 100.0);
	game.celShading.hatching.shininess = celShadingHatching.add(game.celShading.hatching.settings, 'shininess', 1, 100);
	game.celShading.hatching.invertRim = celShadingHatching.add(game.celShading.hatching.settings, 'invertRim');
	game.celShading.hatching.displayOutline = celShadingHatching.add(game.celShading.hatching.settings, 'displayOutline');
	game.celShading.hatching.inkColor = celShadingHatching.addColor(game.celShading.hatching.settings, 'inkColor');

	// game.celShading.hatching.aktivieren.onChange(function(value) {
	// for(var i = 0; i < game.celShadingMaterials.length; i++){
	// console.log(game.celShadingMaterials[i]);
	// if(value){
	// game.celShadingMaterials[i].uniforms['hatchingAktiv'].value = 1;
	// }else{
	// game.celShadingMaterials[i].uniforms['hatchingAktiv'].value = 0;
	// }
	// }
	// });

	// game.celShading.hatching.ambient.onFinishChange(function(value) {
	// for(var i = 0; i < game.celShadingMaterials.length; i++){
	// game.celShadingMaterials[i].uniforms['ambient'].value = value;
	// console.log(game.celShadingMaterials[i]);
	// }
	// });
	game.celShading.hatching.diffuse.onFinishChange(function(value) {
		console.log(game.celShadingMaterials);
	});

};
// Uniform-Variablen fuer die Aktualisierung des Hatching-Effekts beim CelShadings. Wird bei jedem Rendering aufgerufen.
function updateHatching() {
	for (var i = 0; i < game.celShadingMaterials.length; i++) {
		game.celShadingMaterials[i].uniforms.ambientWeight.value = game.celShading.hatching.settings.ambient / 100;
		game.celShadingMaterials[i].uniforms.diffuseWeight.value = game.celShading.hatching.settings.diffuse / 100;
		game.celShadingMaterials[i].uniforms.rimWeight.value = game.celShading.hatching.settings.rim / 100;
		game.celShadingMaterials[i].uniforms.specularWeight.value = game.celShading.hatching.settings.specular / 100;
		game.celShadingMaterials[i].uniforms.shininess.value = game.celShading.hatching.settings.shininess;
		game.celShadingMaterials[i].uniforms.invertRim.value = game.celShading.hatching.settings.invertRim ? 1 : 0;
		game.celShadingMaterials[i].uniforms.inkColor.value.set(game.celShading.hatching.settings.inkColor[0] / 255, game.celShading.hatching.settings.inkColor[1] / 255, game.celShading.hatching.settings.inkColor[2] / 255, 1);
	}
};