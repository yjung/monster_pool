CannyEdgePass = {
	
	// Die uniforms-Liste beinhaltet Programm-Input, der innerhalb eines Frames für alle Berrechnungen gleich bleibt-
	uniforms: {
		// tDiffuse ist von Three.js vorgegeben und enthaelt die Textur des vorangegangenen Shaders.
		"tDiffuse": { type: "t", value: null }, // Type 't' fuer Textur. 
		"opacity":  { type: "f", value: 1.0 },
		"uAspect": { type: "v2", value: new THREE.Vector2(parseFloat(window.innerWidth), parseFloat(window.innerHeight)) },
		"uKonturFarbe": { type: "v4", value: new THREE.Vector4(0.0, 0.0, 0.0, 1.0)},
		"uOffset": { type: "f", value: 0.3},
		"uThreshold": {type: "f", value: 0.05}
	},

	vertexShader: [
		
		// varying Variablen werden im Vertex-Shader deklariert und an den Fragment-Shader weiter gereicht.
		"varying vec2 vUv;", // vUv ist ein 2D-Vector mit UV-Koordinaten zum aktuellen Pixel fuer den Fragment Shader.

		"void main() {",
			"vUv = uv;",	// uv wird automatisch von Three.js bereitgestellt.
			// projectionmatrix modelViewMatrix und position werden von Three.js bereitgestellt.
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float opacity;",
		"uniform vec2 uAspect;",
		"uniform vec4 uKonturFarbe;",
		"uniform float uOffset;",
		"uniform float uThreshold;",
		
		// varying Variablen unterscheiden sich fuer jeden Pixel, der durchlaufen wird und werden vom Vertex-Shader entgegen genommen.
		"varying vec2 vUv;",	// UV-Koordinaten, die vom Vertex-Shader uebergeben wurden.
		"vec4 texel = texture2D( tDiffuse, vUv );",
		"vec4 gradientColor = vec4(0.0, 0.0, 0.0, 0.0);",
		// Eigene Variablendeklaration
		"vec2 offset  = uOffset / (uAspect / 1.0 );",

		"void main() {",
		"	vec2 pixelTop_Coord = vUv + vec2(0.0, offset.y);",
		"	vec2 pixelRight_Coord = vUv + vec2(offset.x, 0.0);",
		"	vec2 pixelBottom_Coord = vUv + vec2(0.0, -offset.y);",
		"	vec2 pixelLeft_Coord = vUv + vec2(-offset.x, 0.0);",
		"	vec2 gradient = vec2(length(texture2D(tDiffuse, pixelRight_Coord).xyz - texture2D(tDiffuse, pixelLeft_Coord).xyz), length(texture2D(tDiffuse, pixelTop_Coord).xyz - texture2D(tDiffuse, pixelBottom_Coord).xyz));",
		
		"	gradientColor = vec4(length(gradient));",
		" if(gradientColor.x < uThreshold && gradientColor.y < uThreshold && gradientColor.z < uThreshold){discard;}",
		"	else{gl_FragColor = vec4(mix( gradientColor, uKonturFarbe, 0.5));}",			
		"}"
	].join("\n")

};