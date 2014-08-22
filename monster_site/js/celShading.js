
	// modifiziereLambertShading();

function celShadingGUIKontur() {
	// Ordner fuer die Cel-Shading-Einstellungen
	var celShadingKontur = game.debugGUI.addFolder('Cel-Shading (Kontur) - Mathias');

	// Parameter-Liste fuer das Cel-Shading
	var paramCelShadingKontur = {
		kontur : false,
		offset: 0.75,
		konturFarbe : [ 0, 0, 0, 1 ], // RGB with alpha
	};

	game.renderer.celShadingKontur = false; // Default = true
	// Post-Processingeintraege hinzufuegen
	game.debugGUI.kontur = celShadingKontur.add(paramCelShadingKontur, 'kontur').name("Kontur").listen();
	game.debugGUI.konturfarbe = celShadingKontur.addColor(paramCelShadingKontur, 'konturFarbe').name("Kontur-Farbe").listen();
	game.debugGUI.offset = celShadingKontur.add(paramCelShadingKontur, 'offset').min(0.0).max(2.0).step(0.01).name("Offset").listen();


	game.debugGUI.konturfarbe.onChange(function(value) {
		var neueFarbe = new THREE.Vector4(value[0]/255,value[1]/255,value[2]/255,value[3]/255);
		edgePass.uniforms.uBorderColor.value = neueFarbe;
		console.log(edgePass.uniforms.uBorderColor.value);
	});

	game.debugGUI.offset.onChange(function(value) {
		edgePass.uniforms.uOffset.value = value;
	});

	game.debugGUI.kontur.onFinishChange(function(value) {
		game.renderer.celShadingKontur = value;
	});


	celShadingKontur.open(); 	// Ordner standardmaessig oeffnen
};

function erstelleCelShadingMaterial(beschreibung, textur, farbe){
var shaderUniforms = THREE.UniformsUtils.clone( CelShader.uniforms );

var defines = {};
if(textur){	
	defines[ "USE_MAP" ] = true;
	shaderUniforms[ "map" ].value = textur;
}else{
	defines[ "USE_MAP" ] = false;
	shaderUniforms[ "diffuse" ].value = farbe;
}

	shaderUniforms[ "repeat" ].value.set( 2,2 );
	shaderUniforms[ "hatch1" ].value.wrapS = THREE.RepeatWrapping;
	shaderUniforms[ "hatch1" ].value.wrapT = THREE.RepeatWrapping;
	// game.celShadingMaterials[i].uniforms.hatch1.value.wrapS = game.celShadingMaterials[i].uniforms.hatch1.value.wrapT = THREE.RepeatWrapping;
	// game.celShadingMaterials[i].uniforms.hatch2.value.wrapS = game.celShadingMaterials[i].uniforms.hatch2.value.wrapT = THREE.RepeatWrapping;
	// game.celShadingMaterials[i].uniforms.hatch3.value.wrapS = game.celShadingMaterials[i].uniforms.hatch3.value.wrapT = THREE.RepeatWrapping;
	// game.celShadingMaterials[i].uniforms.hatch4.value.wrapS = game.celShadingMaterials[i].uniforms.hatch4.value.wrapT = THREE.RepeatWrapping;
	// game.celShadingMaterials[i].uniforms.hatch5.value.wrapS = game.celShadingMaterials[i].uniforms.hatch5.value.wrapT = THREE.RepeatWrapping;
	// game.celShadingMaterials[i].uniforms.hatch6.value.wrapS = game.celShadingMaterials[i].uniforms.hatch6.value.wrapT = THREE.RepeatWrapping;

	// shaderUniforms[ "diffuse" ].value = farbe;

game.celShadingMaterials.push(
	new THREE.ShaderMaterial({
                    name: beschreibung,
                    defines     : defines,
                    uniforms    : shaderUniforms,
                    vertexShader: CelShader.vertexShader,
                    fragmentShader: CelShader.fragmentShader,
                    fog:false,
                    lights:true
                })
	);
	
	return game.celShadingMaterials[game.celShadingMaterials.length-1];
};

function erstelleHatchingGUI(){
	// Ordner fuer die Cel-Shading-Einstellungen
	var celShadingHatching = game.debugGUI.addFolder('Cel-Shading (Hatching) - Mathias');

	var presets = {
    	'Default': { ambient: 8, diffuse: 100, specular: 100, rim: 46, shininess: 49, invertRim: false, displayOutline: false, inkColor: [ 72, 72, 164 ] },
        'Sketch': { ambient: 9.8, diffuse: 100, specular: 100, rim: 81, shininess: 12, invertRim: true, displayOutline: false, inkColor: [ 175, 175, 175 ] },
        'Classroom': { ambient: 13, diffuse: 27, specular: 100, rim: 76, shininess: 27, invertRim: false, displayOutline: true, inkColor: [ 41, 41, 202 ] },
        'Engraving': { ambient: 0, diffuse: 57, specular: 100, rim: 77, shininess: 15, invertRim: true, displayOutline: false, inkColor: [ 90, 120, 111 ] }
        };

	var Settings = function() {
		this.aktivieren = false;
		this.ambient = 1;
		this.diffuse = 100;
		this.specular = 100;
		this.rim = 0;
		this.shininess = 100;
		this.invertRim = false;
		this.displayOutline = false;
		this.inkColor = [ 0, 0, 90 ];
		this.preset = 0;
        };

        game.celShading.hatching.settings = new Settings();
        
	var presetSelector = {};
		for( var j in presets ) {
			presetSelector[ j ] = j;
		}
	game.celShading.hatching.aktivieren = celShadingHatching.add(game.celShading.hatching.settings, 'aktivieren', false ).listen();
	celShadingHatching.add(game.celShading.hatching.settings, 'preset', presetSelector );
	celShadingHatching.add(game.celShading.hatching.settings, 'ambient', 0.0, 100.0 );
	celShadingHatching.add(game.celShading.hatching.settings, 'diffuse', 0.0, 100.0 );
	celShadingHatching.add(game.celShading.hatching.settings, 'specular', 0.0, 100.0 );
	celShadingHatching.add(game.celShading.hatching.settings, 'rim', 0.0, 100.0 );
	celShadingHatching.add(game.celShading.hatching.settings, 'shininess', 1, 100 );
	celShadingHatching.add(game.celShading.hatching.settings, 'invertRim' );
	celShadingHatching.add(game.celShading.hatching.settings, 'displayOutline' );
	celShadingHatching.addColor(game.celShading.hatching.settings, 'inkColor' );
	
	game.celShading.hatching.aktivieren.onChange(function(value) {
		for(var i = 0; i < game.celShadingMaterials.length; i++){
		console.log(game.celShadingMaterials[i]);
		if(value){			
		game.celShadingMaterials[i].uniforms['hatchingAktiv'].value = 1;
		}else{
		game.celShadingMaterials[i].uniforms['hatchingAktiv'].value = 0;			
		}
	}
	});
	
		hatchingVoreinstellung( 'Default' );     
		
	function hatchingVoreinstellung( id ) {
		for( var j in presets[ id ] ) {
			game.celShading.hatching.settings[ j ] = presets[ id ][ j ];
		}
		game.celShading.hatching.settings.preset = id;
		game.celShading.hatching.settings.currentPreset = id;
	}; 
};

function updateHatching(){
	game.renderer.clear();
	for(var i = 0; i < game.celShadingMaterials.length; i++){

	
	var pId =  game.celShading.hatching.settings.preset;
	if( pId !=  game.celShading.hatching.settings.currentPreset ) hatchingVoreinstellung( pId );
            
	var time = Date.now() * 0.005;

	// console.log(game.celShadingMaterials.length);

    game.celShadingMaterials[i].uniforms.ambientWeight.value =  game.celShading.hatching.settings.ambient / 100;
    game.celShadingMaterials[i].uniforms.diffuseWeight.value =  game.celShading.hatching.settings.diffuse / 100;
    game.celShadingMaterials[i].uniforms.rimWeight.value =  game.celShading.hatching.settings.rim / 100;
    game.celShadingMaterials[i].uniforms.specularWeight.value =  game.celShading.hatching.settings.specular / 100;
	game.celShadingMaterials[i].uniforms.shininess.value =  game.celShading.hatching.settings.shininess;
	game.celShadingMaterials[i].uniforms.invertRim.value =  game.celShading.hatching.settings.invertRim?1:0;

	game.celShadingMaterials[i].uniforms.inkColor.value.set(  game.celShading.hatching.settings.inkColor[ 0 ] / 255,  game.celShading.hatching.settings.inkColor[ 1 ] / 255,  game.celShading.hatching.settings.inkColor[ 2 ] / 255, 1 );

		if( game.celShading.hatching.settings.displayOutline ) {
			game.celShadingMaterials[i].depthWrite = false;
			game.celShadingMaterials[i].uniforms.showOutline.value = 1;
			game.renderer.render( game.szene, game.kamera );
            }
            game.celShadingMaterials[i].depthWrite = true;
            game.celShadingMaterials[i].uniforms.showOutline.value = 0;
           }
};