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

		"uniform float offset;",
		"uniform float darkness;",
		"uniform float brightness;",

		"uniform float threshold;",

		"void main() {",
			"vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );",
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
			
		// Methode1 mit harter Blende
			// "vec4 schwarz = vec4(0.0,0.0,0.0,1.0);",
			// "vec4 blendenColor1= vec4( mix( schwarz.rgb, vec3(brightness), dot( uv, uv ) ), texelNormal.a);", // texelBlur un brightness tauschen für inverse
			// "if((blendenColor1.r <= threshold) && (blendenColor1.g <= threshold) && (blendenColor1.b <= threshold))",
			// "{",
				// "gl_FragColor =texelNormal;",
			// "}",
			// "else",
			// "{",
				// "gl_FragColor =texelBlur;",
			// "}",			
			
		//Methode2 mit weicher Blende
			"vec4 blurNormalMix= vec4( (mix( texelNormal.rgb, texelBlur.rgb, dot( uv, uv ) )/2.0), texelNormal.a);", // Mischt TexelBlur mit den Normalen
			"gl_FragColor = blurNormalMix;",
		"}"
	].join("\n")

};
