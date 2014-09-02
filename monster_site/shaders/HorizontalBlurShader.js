/**
* @author Bittner, Sebastian 
* 
* 
* Implementierung eines Motionblurs in Horizontaler Richtung.
* Dieser shader basiert auf der arbeit von zz85 / http://www.lab4games.net/zz85/blog
*/

HorizontalBlurShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"h":        { type: "f", value: 1.0 / 512.0 },
		"alphaTex" :{ type: "t", value: THREE.ImageUtils.loadTexture( "shaders/img/Blurpower.jpg" ) } // Lade alpha texture
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float h;",
		"uniform sampler2D alphaTex;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 sum = vec4( 0.0 );",

			// "sum += texture2D( alphaTex, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;",
			// "sum += texture2D( alphaTex, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;",
			// "sum += texture2D( alphaTex, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;",
			// "sum += texture2D( alphaTex, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;",
			// "sum += texture2D( alphaTex, vec2( vUv.x - 0.0*0.0, vUv.y ) ) * 0.1633;",
			// "sum += texture2D( alphaTex, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;",
			// "sum += texture2D( alphaTex, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;",
			// "sum += texture2D( alphaTex, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;",
			// "sum += texture2D( alphaTex, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;",
			
			"sum += (texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x - 0.0*0.0, vUv.y ) ) * 0.1633)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918)*texture2D( alphaTex, vUv );",
			"sum += (texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051)*texture2D( alphaTex, vUv );",

			// "vec4 vUvCol= texture2D( alphaTex, vUv );",
			
			// "vec4 c = mix(sum,vUvCol,1.0)",
			
			// "gl_FragColor = c;",
			"gl_FragColor = sum;",

		"}"
	// "	c = mix( texture2D( hatch6, vUvHatching ), texture2D( hatch5, vUvHatching ), 6. * shading );}",
	
	// "vec3 mixColor = hatchingColor.rgb * celColor.rgb; ",
	// "gl_FragColor = vec4(mixColor.rgb, 1.0);",
	].join("\n")

};
