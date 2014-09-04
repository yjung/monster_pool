/**
* @author Goebel, Juergen 
* 
* 
* Implementierung von Depth of Field.
* Dieser Shader basiert auf der Arbeit von nopjia
* https://github.com/nopjia/threejs-sandbox
*/



depthOfFieldShader =  {
	'hDOF': {

	  uniforms: {

		tDiffuse: { type: "t", value: 0, texture: null },
		tDepth  : { type: "t", value: 1, texture: null },
		focus   : { type: "f", value: 1.0 },
		maxblur : { type: "f", value: 1.0 },
		znear   : { type: "f", value: 0.1 },
		zfar    : { type: "f", value: 100.0 },
		h       : { type: "f", value: 1.0 / 512.0 }

	  },

	  vertexShader: [

	    "varying vec2 vUv;",

	    "void main() {",

	      "vUv = vec2( uv.x, 1.0 - uv.y );",
	      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

	    "}"

	  ].join("\n"),

	  fragmentShader: [

	    "uniform sampler2D tDiffuse;",
	    "uniform sampler2D tDepth;",
	    "uniform float focus;",
	    "uniform float maxblur;",
	    "uniform float h;",
	    "uniform float znear;",
	    "uniform float zfar;",

	    "varying vec2 vUv;",

	    "float linearize (float depth)",
	    "{",
			"return -zfar * znear / (depth * (zfar - znear) - zfar);",
		"}",

	    "void main() {",

	      // "float hf = h * maxblur * abs(texture2D(tDepth, vUv).x - focus);",
	      "float hf = h * maxblur * abs(linearize(texture2D(tDepth, vUv).y - focus));",

	      "vec4 sum = vec4( 0.0 );",

	      "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hf, vUv.y ) ) * 0.051;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hf, vUv.y ) ) * 0.0918;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hf, vUv.y ) ) * 0.12245;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hf, vUv.y ) ) * 0.1531;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x,            vUv.y ) ) * 0.1633;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hf, vUv.y ) ) * 0.1531;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hf, vUv.y ) ) * 0.12245;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hf, vUv.y ) ) * 0.0918;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hf, vUv.y ) ) * 0.051;",

	      "gl_FragColor = sum;",

	    "}"


	  ].join("\n")

	},

	'vDOF': {

	  uniforms: {

		tDiffuse: { type: "t", value: 0, texture: null },
		tDepth  : { type: "t", value: 1, texture: null },
		focus   : { type: "f", value: 1.0 },
		maxblur : { type: "f", value: 1.0 },
		znear   : { type: "f", value: 0.1 },
		zfar    : { type: "f", value: 100.0 },
		v       : { type: "f", value: 1.0 / 512.0 }

	  },

	  vertexShader: [

	    "varying vec2 vUv;",

	    "void main() {",

	      "vUv = vec2( uv.x, 1.0 - uv.y );",
	      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

	    "}"

	  ].join("\n"),

	  fragmentShader: [

	    "uniform sampler2D tDiffuse;",
	    "uniform sampler2D tDepth;",
	    "uniform float focus;",
	    "uniform float maxblur;",
	    "uniform float v;",
	    "uniform float znear;",
	    "uniform float zfar;",

	    "varying vec2 vUv;",

	    "float linearize (float depth)",
	    "{",
			"return -zfar * znear / (depth * (zfar - znear) - zfar);",
		"}",

	    "void main() {",

	      // "float vf = v * maxblur * abs(texture2D(tDepth, vUv).y - focus);",
	      "float vf = v * maxblur * abs(linearize(texture2D(tDepth, vUv).y - focus));",

	      "vec4 sum = vec4( 0.0 );",

	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vf ) ) * 0.051;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vf ) ) * 0.0918;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vf ) ) * 0.12245;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vf ) ) * 0.1531;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y            ) ) * 0.1633;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vf ) ) * 0.1531;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vf ) ) * 0.12245;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vf ) ) * 0.0918;",
	      "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vf ) ) * 0.051;",

	      "gl_FragColor = sum;",

	    "}"


	  ].join("\n")

	},

};