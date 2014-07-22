CelShader = {

	uniforms: {

		"tDiffuse":  { type: "t", value: null },
		"rPower":  { type: "f", value: 0.2126},
		"gPower":  { type: "f", value: 0.7152},
		"bPower":  { type: "f", value: 0.0722},
		

	},

	vertexShader: [

		"varying vec2 vUv;",
		"varying vec3 vPosition;",
		"varying vec3 vNormal;",
		"varying vec4 vColor;",
		"varying vec2 vTexcoord;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform float rPower;",
		"uniform float gPower;",
		"uniform float bPower;",
		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D (tDiffuse, vUv);",

			"float gray = texel.r*rPower + texel.g*gPower + texel.b*bPower;",

			"gl_FragColor = vec4( vec3(gray), texel.w);",

		"}"

	].join("\n")

};
