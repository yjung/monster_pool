/**
* @author Bittner, Sebastian 
* 
* 
* Implementierung eines Motionblurs in Vertikaler Richtung.
* Dieser shader basiert auf der arbeit von zz85 / http://www.lab4games.net/zz85/blog
*/

VerticalBlurShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"v":        { type: "f", value: 1.0 / 512.0 },
		
		"offset": 	{ type: "f", value: 1.7},
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
		"uniform float v;",

		"varying vec2 vUv;",
		
		"uniform float offset;",
		"uniform float brightness;",
		"uniform float threshold;",

		"void main() {",

			"vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );",
			"vec4 texelNormal = texture2D(tDiffuse, vUv);",

			"vec4 texelBlur = vec4( 0.0 );",


			"texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.1018;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.14545;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1571;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 0.0*0.0 ) ) * 0.1633;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1571;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.14545;",
			"texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.1018;",

			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 6.0 * v ) ) * 0.041;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 5.0 * v ) ) * 0.046;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 0.0*0.0 ) ) * 0.1633;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 5.0 * v ) ) * 0.046;",
			// "texelBlur += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 6.0 * v ) ) * 0.041;",
			

		// Methode1 mit harter Blende
			// "vec4 schwarz = vec4(0.0,0.0,0.0,1.0);",
			// "vec4 blendenColor1= vec4( mix( schwarz.rgb, vec3(brightness), dot( uv, uv ) ), texelNormal.a);", erstellen einer schwarz weiß Blende in form einer ellipse
			// "if((blendenColor1.r <= threshold) && (blendenColor1.g <= threshold) && (blendenColor1.b <= threshold))",
			// "{",
				// "gl_FragColor =texelNormal;",
			// "}",
			// "else",
			// "{",
				// "gl_FragColor =texelBlur;",
			// "}",			
			
		//Methode2 mit weicher Blende
			"vec4 blurNormalMix= vec4( mix( texelNormal.rgb, texelBlur.rgb, dot( uv, uv ) ), texelNormal.a);", // Mischt TexelBlur mit den Normalen in form einer ellipse
			"gl_FragColor = blurNormalMix;",

		"}"

	].join("\n")

};
