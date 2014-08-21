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
        "hatchingAktiv"  : { type: "f", value: 0}
    }
]),

vertexShader: [

    "#define LAMBERT",

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

    "}"

].join("\n"),

fragmentShader: [
	"uniform vec3 diffuse;\n",
    "uniform float opacity;",

    "varying vec3 vLightFront;",

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

    "}"

].join("\n")

};