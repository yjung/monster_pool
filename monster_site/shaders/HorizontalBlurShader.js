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
		
		// "alphaTex": { type: "t", value: THREE.ImageUtils.loadTexture( "shaders/img/Blurpower.jpg" ) }, // Lade alpha texture
		
		"offset": 	{ type: "f", value: 0.5},
		"darkness": { type: "f", value: 1.0},
		"threshold": { type: "f", value: 0.1},
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
		
		"varying vec2 vUv;",

		// "uniform sampler2D alphaTex;",
		"uniform float offset;",
		"uniform float darkness;",
		"uniform float brightness;",

		"uniform float threshold;",

		"void main() {",
			"vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );", // unknown
			"vec4 texelNormal = texture2D(tDiffuse, vUv);",
			
			"vec4 sum = vec4( 0.0 );",
			
			"sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;",
			"sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;",
			"sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;",
			"sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;",
			"sum += texture2D( tDiffuse, vec2( vUv.x - 0.0*0.0, vUv.y ) ) * 0.1633;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;",
			
			"vec4 blurColor = sum;",
			"vec4 schwarz = vec4(0.0,0.0,0.0,1.0);",

			
			
			// Methode1
			"vec4 blendenColor1= vec4( mix( schwarz.rgb, vec3(brightness), dot( uv, uv ) ), texelNormal.a);", // sum un brightness tauschen für inverse
			"if((blendenColor1.r <= threshold) && (blendenColor1.g <= threshold) && (blendenColor1.b <= threshold))",
			"{",
				"gl_FragColor =texelNormal;",
				// "gl_FragColor =blurColor;",
			"}",
			"else",
			"{",
				// "gl_FragColor =texelNormal;",
				"gl_FragColor =blurColor;",
				// "discard;",
			"}",			
			
			// Methode2
			// "vec4 color = texture2D( tDiffuse, vUv );",
			// "float dist = distance( vUv, vec2( 0.5 ) );",
			// "color.rgb *= smoothstep( 0.8, offset * 0.799, dist *( darkness + offset ) );",
			// "vec4 blendenColor2 = color;",
			// "if((blendenColor2.r <= threshold) && (blendenColor2.g <= threshold) && (blendenColor2.b <= threshold))",
			// "{",
				// // "gl_FragColor =texelNormal;",
				// "gl_FragColor =blurColor;",
			// "}",
			// "else",
			// "{",
				// // "gl_FragColor =blurColor;",
				// "discard;",
			// "}",		

			
			// "vec4 differenz = schwarz + blendenColor1;",


			// Normales Bild mit Blur mischen
			// "vec4 mixColor = blurColor * differenz; ",
			// "if((mixColor.r <= threshold) && (mixColor.g <= threshold) && (mixColor.b <= threshold)){gl_FragColor = differenz;}else{discard;}",	gl_FragColor =texelNormal ;		
//Projeziert nur auf hetching nciht auf das gesamte bild
			// "gl_FragColor = blendenColor1;",
			
		"}"
	].join("\n")

};
