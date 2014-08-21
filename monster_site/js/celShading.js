
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
}

function celShadingGUIShading(){

}

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
	
	var id = 'hatch_';

	hatchingMaterial = new THREE.ShaderMaterial( {
		uniforms:{
		showOutline: { type: 'f', value: 0 },
		ambientWeight: { type: 'f', value : 0 },
		diffuseWeight: { type: 'f', value : 1 },
		rimWeight: { type: 'f', value : 1 },
		specularWeight: { type: 'f', value : 1 },
		shininess: { type: 'f', value : 1 },
		invertRim: { type: 'i', value: 0 },
		inkColor: { type: 'v4', value: new THREE.Vector3( 0, 0,0 ) },
		resolution: { type: 'v2', value: new THREE.Vector2( 0, 0 ) },
		bkgResolution: { type: 'v2', value: new THREE.Vector2( 0, 0 ) },
		lightPosition: { type: 'v3', value: new THREE.Vector3( -100, 100, 0 ) },
		hatch1: { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/" + id + '0.jpg' ) },
		hatch2: { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/" + id + '1.jpg' ) },
		hatch3: { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/" + id + '2.jpg' ) },
		hatch4: { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/" + id + '3.jpg' ) },
		hatch5: { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/" + id + '4.jpg' ) },
		hatch6: { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/" + id + '5.jpg' ) },
		repeat: { type: 'v2', value: new THREE.Vector2( 0, 0 ) }
	},
		vertexShader:   document.getElementById( 'hatchingVS' ).textContent,
		fragmentShader: document.getElementById( 'hatchingFS' ).textContent
	});
	
		hatchingMaterial.uniforms.repeat.value.set( 1,1 );
		hatchingMaterial.uniforms.hatch1.value.wrapS = hatchingMaterial.uniforms.hatch1.value.wrapT = THREE.RepeatWrapping;
		hatchingMaterial.uniforms.hatch2.value.wrapS = hatchingMaterial.uniforms.hatch2.value.wrapT = THREE.RepeatWrapping;
		hatchingMaterial.uniforms.hatch3.value.wrapS = hatchingMaterial.uniforms.hatch3.value.wrapT = THREE.RepeatWrapping;
		hatchingMaterial.uniforms.hatch4.value.wrapS = hatchingMaterial.uniforms.hatch4.value.wrapT = THREE.RepeatWrapping;
		hatchingMaterial.uniforms.hatch5.value.wrapS = hatchingMaterial.uniforms.hatch5.value.wrapT = THREE.RepeatWrapping;
		hatchingMaterial.uniforms.hatch6.value.wrapS = hatchingMaterial.uniforms.hatch6.value.wrapT = THREE.RepeatWrapping;
		
		hatchingVoreinstellung( 'Default' );     
		
		function hatchingVoreinstellung( id ) {
			for( var j in presets[ id ] ) {
				game.celShading.hatching.settings[ j ] = presets[ id ][ j ];
            }
			game.celShading.hatching.settings.preset = id;
			game.celShading.hatching.settings.currentPreset = id;
        }; 
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
};

    
function dummyTexturhinzufuegen()
{
    var dummyTexture = new THREE.DataTexture( new Uint8Array( [ 255, 255, 255 ] ), 1, 1, THREE.RGBFormat );
	dummyTexture.needsUpdate = true;

	game.szene.traverse(function (node){
		// console.log("traverse")
    	// console.log(node);
    	if ( node.material && node.material.map == null) {
        	node.material.map = dummyTexture;
        	node.material.needsUpdate = true;

    		node.geometry.computeBoundingBox();

    		var max     = node.geometry.boundingBox.max;
    		var min     = node.geometry.boundingBox.min;

    		var offset  = new THREE.Vector2(0 - min.x, 0 - min.y);
    		var range   = new THREE.Vector2(max.x - min.x, max.y - min.y);

    		node.geometry.faceVertexUvs[0] = [];
    		var faces = node.geometry.faces;

    		for (i = 0; i < node.geometry.faces.length ; i++) {

      			var v1 = node.geometry.vertices[faces[i].a];
      			var v2 = node.geometry.vertices[faces[i].b];
      			var v3 = node.geometry.vertices[faces[i].c];

      			node.geometry.faceVertexUvs[0].push([
        		new THREE.Vector2( ( v1.x + offset.x ) / range.x , ( v1.y + offset.y ) / range.y ),
        		new THREE.Vector2( ( v2.x + offset.x ) / range.x , ( v2.y + offset.y ) / range.y ),
        		new THREE.Vector2( ( v3.x + offset.x ) / range.x , ( v3.y + offset.y ) / range.y )]);
			}

			node.geometry.uvsNeedUpdate = true;
			node.geometry.buffersNeedUpdate = true;
		}
	});
	mainloop();
};


function updateHatching(){
	var pId =  game.celShading.hatching.settings.preset;
	if( pId !=  game.celShading.hatching.settings.currentPreset ) hatchingVoreinstellung( pId );
            
	var time = Date.now() * 0.005;

	// nlat = Math.max( - 85, Math.min( 85, nlat ) );

	// lat += ( nlat - lat ) * .1;
    // lon += ( nlon - lon ) * .1;

    // phi = ( 90 - lat ) * Math.PI / 180;
    // theta = lon * Math.PI / 180;

    hatchingMaterial.uniforms.ambientWeight.value =  game.celShading.hatching.settings.ambient / 100;
    hatchingMaterial.uniforms.diffuseWeight.value =  game.celShading.hatching.settings.diffuse / 100;
    hatchingMaterial.uniforms.rimWeight.value =  game.celShading.hatching.settings.rim / 100;
    hatchingMaterial.uniforms.specularWeight.value =  game.celShading.hatching.settings.specular / 100;
            hatchingMaterial.uniforms.shininess.value =  game.celShading.hatching.settings.shininess;
            hatchingMaterial.uniforms.invertRim.value =  game.celShading.hatching.settings.invertRim?1:0;

            /*var c = hexToRgb(  game.celShading.hatching.settings.inkColor );
            hatchingMaterial.uniforms.inkColor.value.set( c.r / 255, c.g / 255, c.b / 255, 1 );
            outlineMaterial.uniforms.inkColor.value.set( c.r / 255, c.g / 255, c.b / 255, 1 );*/

            hatchingMaterial.uniforms.inkColor.value.set(  game.celShading.hatching.settings.inkColor[ 0 ] / 255,  game.celShading.hatching.settings.inkColor[ 1 ] / 255,  game.celShading.hatching.settings.inkColor[ 2 ] / 255, 1 );

            // if( mesh ) {
                // mesh.rotation.x += .01;
                // mesh.rotation.y += .005;
                // mesh.rotation.z += .007;
// 
                // var t = .001 * Date.now();
                // mesh.material.uniforms.lightPosition.value.x = 100 * Math.cos( t );
                // mesh.material.uniforms.lightPosition.value.z = 100 * Math.sin( t );
            // }

            game.renderer.clear();
            if(  game.celShading.hatching.settings.displayOutline ) {
                hatchingMaterial.depthWrite = false;
                hatchingMaterial.uniforms.showOutline.value = 1;
                game.renderer.render( game.szene, game.kamera );
            }
            hatchingMaterial.depthWrite = true;
            hatchingMaterial.uniforms.showOutline.value = 0;
            

};