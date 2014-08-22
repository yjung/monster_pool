

CelShader = {

uniforms: THREE.UniformsUtils.merge( [
    THREE.UniformsLib[ "common" ],
    THREE.UniformsLib[ "fog" ],
    THREE.UniformsLib[ "lights" ],
    THREE.UniformsLib[ "shadowmap" ],
    {
        "ambient"  : { type: "c", value: new THREE.Color( 0xffffff ) },
        "emissive" : { type: "c", value: new THREE.Color( 0x000000 ) },
        "wrapRGB"  : { type: "v3", value: new THREE.Vector3( 1, 1, 1 ) },
        "diffuse"  : { type: "v3", value: new THREE.Vector3( 1, 1, 1 ) },
        "hatchingAktiv"  : { type: "f", value: 0},
        "showOutline": { type: 'f', value: 0 },
		"ambientWeight": { type: 'f', value : 0 },
		"diffuseWeight": { type: 'f', value : 1 },
		"rimWeight": { type: 'f', value : 1 },
		"specularWeight": { type: 'f', value : 1 },
		"shininess": { type: 'f', value : 1 },
		"invertRim": { type: 'i', value: 0 },
		"inkColor": { type: 'v4', value: new THREE.Vector3( 0, 0,0 ) },
		"resolution": { type: 'v2', value: new THREE.Vector2( 0, 0 ) },
		"bkgResolution": { type: 'v2', value: new THREE.Vector2( 0, 0 ) },
		"lightPosition": { type: 'v3', value: new THREE.Vector3( -100, 100, 0 ) },
		"hatch1": { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/hatch_0.jpg") },
		"hatch2": { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/hatch_1.jpg") },
		"hatch3": { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/hatch_2.jpg") },
		"hatch4": { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/hatch_3.jpg") },
		"hatch5": { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/hatch_4.jpg") },
		"hatch6": { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/hatch_5.jpg") },
		"paper": { type: 't', value: THREE.ImageUtils.loadTexture("shaders/img/paper.jpg") },
		"repeat": { type: 'v2', value: new THREE.Vector2( 1, 1 ) }
    }
]),

vertexShader: [

    "#define LAMBERT",
	
	"varying vec3 vNormal;		//Hatching",		
	"varying vec2 vUvHatching;	//Hatching",
	"varying float depth;		//Hatching",
	"varying vec3 vPosition;	//Hatching",
	"varying float nDotVP;		//Hatching",
	"varying vec3 pos;			//Hatching",
    
    "uniform vec2 repeat;		//Hatching",
	"uniform vec3 lightPosition;//Hatching",
	"uniform float showOutline;	//Hatching",
    
    "varying vec3 vLightFront;",

    "#ifdef DOUBLE_SIDED",

        "varying vec3 vLightBack;",

    "#endif",

    THREE.ShaderChunk[ "map_pars_vertex" ],
    THREE.ShaderChunk[ "lightmap_pars_vertex" ],
    THREE.ShaderChunk[ "envmap_pars_vertex" ],
    THREE.ShaderChunk[ "lights_lambert_pars_vertex" ],
    THREE.ShaderChunk[ "color_pars_vertex" ],
    THREE.ShaderChunk[ "morphtarget_pars_vertex" ],
    THREE.ShaderChunk[ "skinning_pars_vertex" ],
    THREE.ShaderChunk[ "shadowmap_pars_vertex" ],

    "void main() {",

        THREE.ShaderChunk[ "map_vertex" ],
        THREE.ShaderChunk[ "lightmap_vertex" ],
        THREE.ShaderChunk[ "color_vertex" ],

        THREE.ShaderChunk[ "morphnormal_vertex" ],
        THREE.ShaderChunk[ "skinbase_vertex" ],
        THREE.ShaderChunk[ "skinnormal_vertex" ],
        THREE.ShaderChunk[ "defaultnormal_vertex" ],

        THREE.ShaderChunk[ "morphtarget_vertex" ],
        THREE.ShaderChunk[ "skinning_vertex" ],
        THREE.ShaderChunk[ "default_vertex" ],

        THREE.ShaderChunk[ "worldpos_vertex" ],
        THREE.ShaderChunk[ "envmap_vertex" ],
        THREE.ShaderChunk[ "lights_lambert_vertex" ],
        THREE.ShaderChunk[ "shadowmap_vertex" ],

		"//Hatching-Code",
		"float w = 1.;",
		"vec3 posInc = vec3( 0. );",
		"if( showOutline == 1. ) posInc = w * normal;",

			"vUvHatching = repeat * uv;",

			"vec4 mvPositionHatching = modelViewMatrix * vec4( position + posInc, 1.0 );",
			"vPosition = mvPositionHatching.xyz;",
			"gl_Position = projectionMatrix * mvPositionHatching;",
			"pos = gl_Position.xyz;",

			"vNormal = normalMatrix * normal;",
			"depth = ( length( position.xyz ) / 90. );",
			"depth = .5 + .5 * depth;",

			"nDotVP = max( 0., dot( vNormal, normalize( vec3( lightPosition ) ) ) );",
    "}"

].join("\n"),

fragmentShader: [
	"uniform vec3 diffuse;",
    "uniform float opacity;",
    "uniform float hatchingAktiv;	//Hatching",
	"uniform sampler2D hatch1;		//Hatching",
	"uniform sampler2D hatch2;		//Hatching",
	"uniform sampler2D hatch3;		//Hatching",
	"uniform sampler2D hatch4;		//Hatching",
	"uniform sampler2D hatch5;		//Hatching",
	"uniform sampler2D hatch6;		//Hatching",
	"uniform sampler2D paper;		//Hatching",
	"uniform vec2 resolution;		//Hatching",
	"uniform vec2 bkgResolution;	//Hatching",
	"uniform vec3 lightPosition;	//Hatching",
	"uniform float ambientWeight;	//Hatching",
	"uniform float diffuseWeight;	//Hatching",
	"uniform float rimWeight;		//Hatching",
	"uniform float specularWeight;	//Hatching",
	"uniform float shininess;		//Hatching",
	"uniform int invertRim;			//Hatching",
	"uniform float showOutline;		//Hatching",
	"uniform vec4 inkColor;			//Hatching",
	
	"vec3 color = vec3(1.,0.,1.);	//Hatching",
	"vec3 lightColor = vec3(1.);	//Hatching",

    "varying vec3 vLightFront;",
    "varying vec2 vUvHatching;		//Hatching",
	"varying vec3 vNormal;			//Hatching",
	"varying float depth;			//Hatching",
	"varying vec3 vPosition;		//Hatching",
	"varying float nDotVP;			//Hatching",
	"varying vec3 pos;				//Hatching",

    "#ifdef DOUBLE_SIDED",

        "varying vec3 vLightBack;",

    "#endif",

    THREE.ShaderChunk[ "color_pars_fragment" ],
    THREE.ShaderChunk[ "map_pars_fragment" ],
    THREE.ShaderChunk[ "lightmap_pars_fragment" ],
    THREE.ShaderChunk[ "envmap_pars_fragment" ],
    THREE.ShaderChunk[ "fog_pars_fragment" ],
    THREE.ShaderChunk[ "shadowmap_pars_fragment" ],
    THREE.ShaderChunk[ "specularmap_pars_fragment" ],



	"vec4 shade() {",

		"float diffuse = nDotVP;",
		"float specular = 0.;",
		"float ambient = 1.;",

		"vec3 n = normalize( vNormal );",

		"vec3 r = -reflect(lightPosition, n);",
		"r = normalize(r);",
		"vec3 v = -vPosition.xyz;",
		"v = normalize(v);",
		"float nDotHV = max( 0., dot( r, v ) );",

		"if( nDotVP != 0. ) specular = pow ( nDotHV, shininess );",
		"float rim = max( 0., abs( dot( n, normalize( -vPosition.xyz ) ) ) );",
		"if( invertRim == 1 ) rim = 1. - rim;",

			"float shading = ambientWeight * ambient + diffuseWeight * diffuse + rimWeight * rim + specularWeight * specular;",

			"vec4 c;",
			"float step = 1. / 6.;",

			"if( shading <= step ){",
			"c = mix( texture2D( hatch6, vUvHatching ), texture2D( hatch5, vUvHatching ), 6. * shading );",
			"}",
			"if( shading > step && shading <= 2. * step ){",
			"c = mix( texture2D( hatch5, vUvHatching ), texture2D( hatch4, vUvHatching) , 6. * ( shading - step ) );",
			"}",
			"if( shading > 2. * step && shading <= 3. * step ){",
			"c = mix( texture2D( hatch4, vUvHatching ), texture2D( hatch3, vUvHatching ), 6. * ( shading - 2. * step ) );",
			"}",
			"if( shading > 3. * step && shading <= 4. * step ){",
			"c = mix( texture2D( hatch3, vUvHatching ), texture2D( hatch2, vUvHatching ), 6. * ( shading - 3. * step ) );",
			"}",
			"if( shading > 4. * step && shading <= 5. * step ){",
			"c = mix( texture2D( hatch2, vUvHatching ), texture2D( hatch1, vUvHatching ), 6. * ( shading - 4. * step ) );",
			"}",
			"if( shading > 5. * step ){",
			"c = mix( texture2D( hatch1, vUvHatching ), vec4( 1. ), 6. * ( shading - 5. * step ) );",
			"}",

			"vec4 src = mix( mix( inkColor, vec4( 1. ), c.r ), c, .5 );",


			"return src;",
			"}",




    "void main() {",

        "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",

        THREE.ShaderChunk[ "map_fragment" ],
        THREE.ShaderChunk[ "alphatest_fragment" ],
        THREE.ShaderChunk[ "specularmap_fragment" ],

        "#ifdef DOUBLE_SIDED",

            //"float isFront = float( gl_FrontFacing );",
            //"gl_FragColor.xyz *= isFront * vLightFront + ( 1.0 - isFront ) * vLightBack;",

            "if ( gl_FrontFacing )",
                "gl_FragColor.xyz *= vLightFront;",
            "else",
                "gl_FragColor.xyz *= vLightBack;",

        "#else",

            "gl_FragColor.xyz *= vLightFront;",

        "#endif",

        THREE.ShaderChunk[ "lightmap_fragment" ],
        THREE.ShaderChunk[ "color_fragment" ],
        THREE.ShaderChunk[ "envmap_fragment" ],
        THREE.ShaderChunk[ "shadowmap_fragment" ],

        THREE.ShaderChunk[ "linear_to_gamma_fragment" ],

        THREE.ShaderChunk[ "fog_fragment" ],

		"#ifdef USE_MAP",
		"	gl_FragColor *= texture2D( map, vUv );",
		"#else",
		"	gl_FragColor *= vec4(diffuse, 1.0);", 
		"#endif", 
		
		"	vec3 basecolor = vec3(gl_FragColor[0], gl_FragColor[1], gl_FragColor[2]);",
		"	float alpha = gl_FragColor[3];",
		"	float vlf = vLightFront[0];",

		// This version presevers colors, but looks less cartoonish (good with simple textures, colors)
		// "	if (vlf< 0.50) { gl_FragColor = vec4(mix( basecolor, vec3(0.0), 0.5), alpha); }",
		// "	if (vlf>=0.50) { gl_FragColor = vec4(mix( basecolor, vec3(0.0), 0.3), alpha); }", 
		// "	if (vlf>=0.75) { gl_FragColor = vec4(mix( basecolor, vec3(1.0), 0.0), alpha); }", 
		// "	if (vlf>=0.95) { gl_FragColor = vec4(mix( basecolor, vec3(1.0), 0.3), alpha); }",

		// This version looks more cartoonish, but washes colors out (looks good with complex textures)
		"	if (vlf< 0.25) { gl_FragColor = vec4(mix( basecolor, vec3(0.0), 0.5), alpha); }",
		 "	if (vlf>=0.25) { gl_FragColor = vec4(mix( basecolor, vec3(0.25), 0.5), alpha); }",
		 "	if (vlf>=0.50) { gl_FragColor = vec4(mix( basecolor, vec3(0.5), 0.5), alpha); }",
		 "	if (vlf>=0.75) { gl_FragColor = vec4(mix( basecolor, vec3(0.75), 0.5), alpha); }",

		"	gl_FragColor.xyz *= vLightFront;",
			"vec3 temp = gl_FragColor.xyz;",
		
		
		"// Hatching-Part",
		"if(hatchingAktiv > 0.0){", 
		
			"vec2 nUV = vec2( mod( gl_FragCoord.x, bkgResolution.x ) / bkgResolution.x, mod( gl_FragCoord.y, bkgResolution.y ) / bkgResolution.y );",
			"vec4 dst = vec4( texture2D( paper, nUV ).rgb, 1. );",
			"vec4 src;",


			"src = ( .5 * inkColor ) * vec4( showOutline ) + vec4( 1. - showOutline ) * shade();",

			"vec4 c = src * dst;",
			"gl_FragColor = vec4(mix(temp, c.rgb, 1.0), alpha);",


		"}",
    "}"

].join("\n")

};