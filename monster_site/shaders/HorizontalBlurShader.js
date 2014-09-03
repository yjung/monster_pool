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
		"alphaTex" :{ type: "t", value: THREE.ImageUtils.loadTexture( "shaders/img/Blurpower.jpg" ) }, // Lade alpha texture
		
		"offset": 	{ type: "f", value: 10.0},
		"brightness": { type: "f", value: 1.0}
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
		"uniform float offset;",
		"uniform float brightness;",
		

		"varying vec2 vUv;",

		"void main() {",
			"vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );", // unknown
			
			"vec4 texelNormal = texture2D(tDiffuse, vUv);",
			
			"vec4 texelBlur = vec4( 0.0 );",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x - 0.0*0.0, vUv.y ) ) * 0.1633;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;",
			// "vec4 texelAlphaMap = vec4(texture2D(alphaTex, vUv))",
			
			// "gl_FragColor = texelAlphaMap;",
			"gl_FragColor = vec4( mix( texelBlur.rgb, vec3(brightness), dot( uv, uv ) ), texelNormal.a );",
			
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x - 0.0*0.0, vUv.y ) ) * 0.1633)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918)*texture2D( alphaTex, vUv );",
			// "texelBlur += (texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051)*texture2D( alphaTex, vUv );",

			// "vec4 vUvCol= texture2D( alphaTex, vUv );",
			// "vec4 c = mix(texelBlur,vUvCol,1.0)",
			// "gl_FragColor = c;",
			
			// "gl_FragColor = texelBlur;",
		"}"
	].join("\n")

};
