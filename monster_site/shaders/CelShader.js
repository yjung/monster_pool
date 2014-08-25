

CelShader = {

uniforms: THREE.UniformsUtils.merge( [
	{
	// THREE.UniformsLib[ "common" ]
		"diffuse" : { type: "c", value: new THREE.Color( 0xeeeeee ) },
		"opacity" : { type: "f", value: 1.0 },
		"map" : { type: "t", value: null },
		"offsetRepeat" : { type: "v4", value: new THREE.Vector4( 0, 0, 1, 1 ) },
		"lightMap" : { type: "t", value: null },
		"specularMap" : { type: "t", value: null },
		"envMap" : { type: "t", value: null },
		"flipEnvMap" : { type: "f", value: -1 },
		"useRefract" : { type: "i", value: 0 },
		"reflectivity" : { type: "f", value: 1.0 },
		"refractionRatio" : { type: "f", value: 0.98 },
		"combine" : { type: "i", value: 0 },
		"morphTargetInfluences" : { type: "f", value: 0 },
	// THREE.UniformsLib[ "fog" ]
    	"fogDensity" : { type: "f", value: 0.00025 },
		"fogNear" : { type: "f", value: 1 },
		"fogFar" : { type: "f", value: 2000 },
		"fogColor" : { type: "c", value: new THREE.Color( 0xffffff ) },
	// THREE.UniformsLib[ "lights" ]
		"ambientLightColor" : { type: "fv", value: [] },
		"directionalLightDirection" : { type: "fv", value: [] },
		"directionalLightColor" : { type: "fv", value: [] },
		"hemisphereLightDirection" : { type: "fv", value: [] },
		"hemisphereLightSkyColor" : { type: "fv", value: [] },
		"hemisphereLightGroundColor" : { type: "fv", value: [] },
		"pointLightColor" : { type: "fv", value: [] },
		"pointLightPosition" : { type: "fv", value: [] },
		"pointLightDistance" : { type: "fv1", value: [] },
		"spotLightColor" : { type: "fv", value: [] },
		"spotLightPosition" : { type: "fv", value: [] },
		"spotLightDirection" : { type: "fv", value: [] },
		"spotLightDistance" : { type: "fv1", value: [] },
		"spotLightAngleCos" : { type: "fv1", value: [] },
		"spotLightExponent" : { type: "fv1", value: [] },
	// THREE.UniformsLib[ "shadowmap" ]
		"shadowMap": { type: "tv", value: [] },
		"shadowMapSize": { type: "v2v", value: [] },
		"shadowBias" : { type: "fv1", value: [] },
		"shadowDarkness": { type: "fv1", value: [] },
		"shadowMatrix" : { type: "m4v", value: [] },
						    
	// Hatching-spezifischer Code
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

	// THREE.ShaderChunk[ "map_pars_vertex" ]
	"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )",
	"	varying vec2 vUv;",
	"	uniform vec4 offsetRepeat;",
	"#endif",    

	// THREE.ShaderChunk[ "lightmap_pars_vertex" ]
		"#ifdef USE_LIGHTMAP",
		"	varying vec2 vUv2;",
		"#endif",
	
	// THREE.ShaderChunk[ "envmap_pars_vertex" ]
		"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )",
		"	varying vec3 vReflect;",
		"	uniform float refractionRatio;",
		"	uniform bool useRefract;",
		"#endif",
		    
	// THREE.ShaderChunk[ "lights_lambert_pars_vertex" ]
		"uniform vec3 ambient;",
		"uniform vec3 diffuse;",
		"uniform vec3 emissive;",
		"uniform vec3 ambientLightColor;",
		"#if MAX_DIR_LIGHTS > 0",
		"	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];",
		"	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];",
		"#endif",
		"#if MAX_HEMI_LIGHTS > 0",
		"	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];",
		"	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];",
		"	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];",
		"#endif",
		"#if MAX_POINT_LIGHTS > 0",
		"	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];",
		"	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];",
		"	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];",
		"#endif",
		"#if MAX_SPOT_LIGHTS > 0",
		"	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];",
		"	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];",
		"	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];",
		"	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];",
		"	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];",
		"	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];",
		"#endif",
		"#ifdef WRAP_AROUND",
		"	uniform vec3 wrapRGB;",
		"#endif",

	// THREE.ShaderChunk[ "color_pars_vertex" ]
		"#ifdef USE_COLOR",
		"	varying vec3 vColor;",
		"#endif",    

	// THREE.ShaderChunk[ "morphtarget_pars_vertex" ]
		"#ifdef USE_MORPHTARGETS",
		"	#ifndef USE_MORPHNORMALS",
		"	uniform float morphTargetInfluences[ 8 ];",
		"	#else",
		"	uniform float morphTargetInfluences[ 4 ];",
		"	#endif",
		"#endif",    

	// THREE.ShaderChunk[ "skinning_pars_vertex" ]
		"#ifdef USE_SKINNING",
		"	#ifdef BONE_TEXTURE",
		"		uniform sampler2D boneTexture;",
		"		uniform int boneTextureWidth;",
		"		uniform int boneTextureHeight;",
		"		mat4 getBoneMatrix( const in float i ) {",
		"			float j = i * 4.0;",
		"			float x = mod( j, float( boneTextureWidth ) );",
		"			float y = floor( j / float( boneTextureWidth ) );",
		"			float dx = 1.0 / float( boneTextureWidth );",
		"			float dy = 1.0 / float( boneTextureHeight );",
		"			y = dy * ( y + 0.5 );",
		"			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );",
		"			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );",
		"			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );",
		"			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );",
		"			mat4 bone = mat4( v1, v2, v3, v4 );",
		"			return bone;",
		"		}",
		"	#else",
		"		uniform mat4 boneGlobalMatrices[ MAX_BONES ];",
		"		mat4 getBoneMatrix( const in float i ) {",
		"			mat4 bone = boneGlobalMatrices[ int(i) ];",
		"			return bone;",
		"		}",
		"	#endif",
		"#endif",

	// THREE.ShaderChunk[ "shadowmap_pars_vertex" ]
		"#ifdef USE_SHADOWMAP",
		"	varying vec4 vShadowCoord[ MAX_SHADOWS ];",
		"	uniform mat4 shadowMatrix[ MAX_SHADOWS ];",
		"#endif",

	"void main() {",

		// THREE.ShaderChunk[ "map_vertex" ]
			"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )",
			"	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;",
			"#endif",

		// THREE.ShaderChunk[ "lightmap_vertex" ]
			"#ifdef USE_LIGHTMAP",
			"	vUv2 = uv2;",
			"#endif",

		// THREE.ShaderChunk[ "color_vertex" ]
			"#ifdef USE_COLOR",
			"	#ifdef GAMMA_INPUT",
			"		vColor = color * color;",
			"	#else",
			"		vColor = color;",
			"	#endif",
			"#endif",

		// THREE.ShaderChunk[ "morphnormal_vertex" ]
			"#ifdef USE_MORPHNORMALS",
			"	vec3 morphedNormal = vec3( 0.0 );",
			"	morphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];",
			"	morphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];",
			"	morphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];",
			"	morphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];",
			"	morphedNormal += normal;",
			"#endif",
			
		// THREE.ShaderChunk[ "skinbase_vertex" ]
			"#ifdef USE_SKINNING",
			"	mat4 boneMatX = getBoneMatrix( skinIndex.x );",
			"	mat4 boneMatY = getBoneMatrix( skinIndex.y );",
			"	mat4 boneMatZ = getBoneMatrix( skinIndex.z );",
			"	mat4 boneMatW = getBoneMatrix( skinIndex.w );",
			"#endif",
			
		// THREE.ShaderChunk[ "skinnormal_vertex" ]
			"#ifdef USE_SKINNING",
			"	mat4 skinMatrix = skinWeight.x * boneMatX;",
			"	skinMatrix 	+= skinWeight.y * boneMatY;",
			"	skinMatrix 	+= skinWeight.z * boneMatZ;",
			"	skinMatrix 	+= skinWeight.w * boneMatW;",
			"	#ifdef USE_MORPHNORMALS",
			"	vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );",
			"	#else",
			"	vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );",
			"	#endif",
			"#endif",
			
		// THREE.ShaderChunk[ "defaultnormal_vertex" ]
			"vec3 objectNormal;",
			"#ifdef USE_SKINNING",
			"	objectNormal = skinnedNormal.xyz;",
			"#endif",
			"#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )",
			"	objectNormal = morphedNormal;",
			"#endif",
			"#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )",
			"	objectNormal = normal;",
			"#endif",
			"#ifdef FLIP_SIDED",
			"	objectNormal = -objectNormal;",
			"#endif",
			"vec3 transformedNormal = normalMatrix * objectNormal;",

		// THREE.ShaderChunk[ "morphtarget_vertex" ]
			"#ifdef USE_MORPHTARGETS",
			"	vec3 morphed = vec3( 0.0 );",
			"	morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];",
			"	morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];",
			"	morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];",
			"	morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];",
			"	#ifndef USE_MORPHNORMALS",
			"	morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];",
			"	morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];",
			"	morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];",
			"	morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];",
			"	#endif",
			"	morphed += position;",
			"#endif",

		// THREE.ShaderChunk[ "skinning_vertex" ]
			"#ifdef USE_SKINNING",
			"	#ifdef USE_MORPHTARGETS",
			"	vec4 skinVertex = vec4( morphed, 1.0 );",
			"	#else",
			"	vec4 skinVertex = vec4( position, 1.0 );",
			"	#endif",
			"	vec4 skinned  = boneMatX * skinVertex * skinWeight.x;",
			"	skinned      += boneMatY * skinVertex * skinWeight.y;",
			"	skinned      += boneMatZ * skinVertex * skinWeight.z;",
			"	skinned      += boneMatW * skinVertex * skinWeight.w;",
			"#endif",
			
		// THREE.ShaderChunk[ "default_vertex" ]
			"vec4 mvPosition;",
			"#ifdef USE_SKINNING",
			"	mvPosition = modelViewMatrix * skinned;",
			"#endif",
			"#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )",
			"	mvPosition = modelViewMatrix * vec4( morphed, 1.0 );",
			"#endif",
			"#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )",
			"	mvPosition = modelViewMatrix * vec4( position, 1.0 );",
			"#endif",
			"gl_Position = projectionMatrix * mvPosition;",

		// THREE.ShaderChunk[ "worldpos_vertex" ]
			"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )",
			"	#ifdef USE_SKINNING",
			"		vec4 worldPosition = modelMatrix * skinned;",
			"	#endif",
			"	#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )",
			"		vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );",
			"	#endif",
			"	#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )",
			"		vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
			"	#endif",
			"#endif",
			
		// THREE.ShaderChunk[ "envmap_vertex" ]
			"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )",
			"	vec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;",
			"	worldNormal = normalize( worldNormal );",
			"	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );",
			"	if ( useRefract ) {",
			"		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );",
			"	} else {",
			"		vReflect = reflect( cameraToVertex, worldNormal );",
			"	}",
			"#endif",
		
		// THREE.ShaderChunk[ "lights_lambert_vertex" ]
			"vLightFront = vec3( 0.0 );",
			"#ifdef DOUBLE_SIDED",
			"	vLightBack = vec3( 0.0 );",
			"#endif",
			"transformedNormal = normalize( transformedNormal );",
			"#if MAX_DIR_LIGHTS > 0",
			"for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {",
			"	vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );",
			"	vec3 dirVector = normalize( lDirection.xyz );",
			"	float dotProduct = dot( transformedNormal, dirVector );",
			"	vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",
			"	#ifdef DOUBLE_SIDED",
			"		vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",
			"		#ifdef WRAP_AROUND",
			"			vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );",
			"		#endif",
			"	#endif",
			"	#ifdef WRAP_AROUND",
			"		vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );",
			"		directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );",
			"		#ifdef DOUBLE_SIDED",
			"			directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );",
			"		#endif",
			"	#endif",
			"	vLightFront += directionalLightColor[ i ] * directionalLightWeighting;",
			"	#ifdef DOUBLE_SIDED",
			"		vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;",
			"	#endif",
			"}",
			"#endif",
			"#if MAX_POINT_LIGHTS > 0",
			"	for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {",
			"		vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );",
			"		vec3 lVector = lPosition.xyz - mvPosition.xyz;",
			"		float lDistance = 1.0;",
			"		if ( pointLightDistance[ i ] > 0.0 )",
			"			lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );",
			"		lVector = normalize( lVector );",
			"		float dotProduct = dot( transformedNormal, lVector );",
			"		vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );",
			"		#ifdef DOUBLE_SIDED",
			"			vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",
			"			#ifdef WRAP_AROUND",
			"				vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );",
			"			#endif",
			"		#endif",
			"		#ifdef WRAP_AROUND",
			"			vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );",
			"			pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );",
			"			#ifdef DOUBLE_SIDED",
			"				pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );",
			"			#endif",
			"		#endif",
			"		vLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;",
			"		#ifdef DOUBLE_SIDED",
			"			vLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;",
			"		#endif",
			"	}",
			"#endif",
			"#if MAX_SPOT_LIGHTS > 0",
			"	for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {",
			"		vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );",
			"		vec3 lVector = lPosition.xyz - mvPosition.xyz;",
			"		float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );",
			"		if ( spotEffect > spotLightAngleCos[ i ] ) {",
			"			spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );",
			"			float lDistance = 1.0;",
			"			if ( spotLightDistance[ i ] > 0.0 )",
			"				lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );",
			"			lVector = normalize( lVector );",
			"			float dotProduct = dot( transformedNormal, lVector );",
			"			vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );",
			"			#ifdef DOUBLE_SIDED",
			"				vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",
			"				#ifdef WRAP_AROUND",
			"					vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );",
			"				#endif",
			"			#endif",
			"			#ifdef WRAP_AROUND",
			"				vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );",
			"				spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );",
			"				#ifdef DOUBLE_SIDED",
			"					spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );",
			"				#endif",
			"			#endif",
			"			vLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;",
			"			#ifdef DOUBLE_SIDED",
			"				vLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;",
			"			#endif",
			"		}",
			"	}",
			"#endif",
			"#if MAX_HEMI_LIGHTS > 0",
			"	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {",
			"		vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );",
			"		vec3 lVector = normalize( lDirection.xyz );",
			"		float dotProduct = dot( transformedNormal, lVector );",
			"		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;",
			"		float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;",
			"		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );",
			"		#ifdef DOUBLE_SIDED",
			"			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );",
			"		#endif",
			"	}",
			"#endif",
			"vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;",
			"#ifdef DOUBLE_SIDED",
			"	vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;",
			"#endif",
		
		// THREE.ShaderChunk[ "shadowmap_vertex" ]
 			"#ifdef USE_SHADOWMAP",
			"	for( int i = 0; i < MAX_SHADOWS; i ++ ) {",
			"		vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;",
			"	}",
			"#endif",

		"//	Hatching-spezifischer Code",
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

	// THREE.ShaderChunk[ "color_pars_fragment" ]
		"#ifdef USE_COLOR",
		"	varying vec3 vColor;",
		"#endif",
	
    // THREE.ShaderChunk[ "map_pars_fragment" ]
		"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )",
		"	varying vec2 vUv;",
		"#endif",
		"#ifdef USE_MAP",
		"	uniform sampler2D map;",
		"#endif",
		
    // THREE.ShaderChunk[ "lightmap_pars_fragment" ]
		"#ifdef USE_LIGHTMAP",
		"	varying vec2 vUv2;",
		"	uniform sampler2D lightMap;",
		"#endif",
		
    // THREE.ShaderChunk[ "envmap_pars_fragment" ]
		"#ifdef USE_ENVMAP",
		"	uniform float reflectivity;",
		"	uniform samplerCube envMap;",
		"	uniform float flipEnvMap;",
		"	uniform int combine;",
		"	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )",
		"		uniform bool useRefract;",
		"		uniform float refractionRatio;",
		"	#else",
		"		varying vec3 vReflect;",
		"	#endif",
		"#endif",
    
    // THREE.ShaderChunk[ "fog_pars_fragment" ]
		"#ifdef USE_FOG",
		"	uniform vec3 fogColor;",
		"	#ifdef FOG_EXP2",
		"		uniform float fogDensity;",
		"	#else",
		"		uniform float fogNear;",
		"		uniform float fogFar;",
		"	#endif",
		"#endif",
		
    // THREE.ShaderChunk[ "shadowmap_pars_fragment" ]
		"#ifdef USE_SHADOWMAP",
		"	uniform sampler2D shadowMap[ MAX_SHADOWS ];",
		"	uniform vec2 shadowMapSize[ MAX_SHADOWS ];",
		"	uniform float shadowDarkness[ MAX_SHADOWS ];",
		"	uniform float shadowBias[ MAX_SHADOWS ];",
		"	varying vec4 vShadowCoord[ MAX_SHADOWS ];",
		"	float unpackDepth( const in vec4 rgba_depth ) {",
		"		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
		"		float depth = dot( rgba_depth, bit_shift );",
		"		return depth;",
		"	}",
		"#endif",
		
    // THREE.ShaderChunk[ "specularmap_pars_fragment" ]
		"#ifdef USE_SPECULARMAP",
		"	uniform sampler2D specularMap;",
		"#endif",


	// Hatching-Funktion
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
			"	c = mix( texture2D( hatch6, vUvHatching ), texture2D( hatch5, vUvHatching ), 6. * shading );}",
			"if( shading > step && shading <= 2. * step ){",
			"	c = mix( texture2D( hatch5, vUvHatching ), texture2D( hatch4, vUvHatching) , 6. * ( shading - step ) );}",
			"if( shading > 2. * step && shading <= 3. * step ){",
			"	c = mix( texture2D( hatch4, vUvHatching ), texture2D( hatch3, vUvHatching ), 6. * ( shading - 2. * step ) );}",
			"if( shading > 3. * step && shading <= 4. * step ){",
			"	c = mix( texture2D( hatch3, vUvHatching ), texture2D( hatch2, vUvHatching ), 6. * ( shading - 3. * step ) );}",
			"if( shading > 4. * step && shading <= 5. * step ){",
			"	c = mix( texture2D( hatch2, vUvHatching ), texture2D( hatch1, vUvHatching ), 6. * ( shading - 4. * step ) );}",
			"if( shading > 5. * step ){",
			"	c = mix( texture2D( hatch1, vUvHatching ), vec4( 1. ), 6. * ( shading - 5. * step ) );}",

			"vec4 src = mix( mix( inkColor, vec4( 1. ), c.r ), c, .5 );",

			"return src;",
			"}",




	"void main() {",

		"gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",

		// THREE.ShaderChunk[ "map_fragment" ]
			"#ifdef USE_MAP",
			"	vec4 texelColor = texture2D( map, vUv );",
			"	#ifdef GAMMA_INPUT",
			"		texelColor.xyz *= texelColor.xyz;",
			"	#endif",
			"	gl_FragColor = gl_FragColor * texelColor;",
			"#endif",
		
        // THREE.ShaderChunk[ "alphatest_fragment" ]
			"#ifdef ALPHATEST",
			"	if ( gl_FragColor.a < ALPHATEST ) discard;",
			"#endif",
        
        // THREE.ShaderChunk[ "specularmap_fragment" ]
			"float specularStrength;",
			"#ifdef USE_SPECULARMAP",
			"	vec4 texelSpecular = texture2D( specularMap, vUv );",
			"	specularStrength = texelSpecular.r;",
			"#else",
			"	specularStrength = 1.0;",
			"#endif",
		

        "#ifdef DOUBLE_SIDED",
            "if ( gl_FrontFacing )",
                "gl_FragColor.xyz *= vLightFront;",
            "else",
                "gl_FragColor.xyz *= vLightBack;",
        "#else",
            "gl_FragColor.xyz *= vLightFront;",
        "#endif",

        // THREE.ShaderChunk[ "lightmap_fragment" ]
			"#ifdef USE_LIGHTMAP",
			"	gl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );",
			"#endif",
		
        // THREE.ShaderChunk[ "color_fragment" ]
			"#ifdef USE_COLOR",
			"	gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );",
			"#endif",
		
        // THREE.ShaderChunk[ "envmap_fragment" ]
			"#ifdef USE_ENVMAP",
			"	vec3 reflectVec;",
			"	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )",
			"		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );",
			"		vec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );",
			"		if ( useRefract ) {",
			"			reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );",
			"		} else { ",
			"			reflectVec = reflect( cameraToVertex, worldNormal );",
			"		}",
			"	#else",
			"		reflectVec = vReflect;",
			"	#endif",
			"	#ifdef DOUBLE_SIDED",
			"		float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );",
			"		vec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );",
			"	#else",
			"		vec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );",
			"	#endif",
			"	#ifdef GAMMA_INPUT",
			"		cubeColor.xyz *= cubeColor.xyz;",
			"	#endif",
			"	if ( combine == 1 ) {",
			"		gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );",
			"	} else if ( combine == 2 ) {",
			"		gl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;",
			"	} else {",
			"		gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );",
			"	}",
			"#endif",
        
        // THREE.ShaderChunk[ "shadowmap_fragment" ]
			"#ifdef USE_SHADOWMAP",
			"	#ifdef SHADOWMAP_DEBUG",

			"		vec3 frustumColors[3];",
			"		frustumColors[0] = vec3( 1.0, 0.5, 0.0 );",
			"		frustumColors[1] = vec3( 0.0, 1.0, 0.8 );",
			"		frustumColors[2] = vec3( 0.0, 0.5, 1.0 );",
			"	#endif",
			"	#ifdef SHADOWMAP_CASCADE",
			"		int inFrustumCount = 0;",
			"	#endif",
			"	float fDepth;",
			"	vec3 shadowColor = vec3( 1.0 );",
			"	for( int i = 0; i < MAX_SHADOWS; i ++ ) {",
			"		vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;",
			"		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );",
			"		bool inFrustum = all( inFrustumVec );",
			"		#ifdef SHADOWMAP_CASCADE",
			"			inFrustumCount += int( inFrustum );",
			"			bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );",
			"		#else",
			"			bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );",
			"		#endif",
			"		bool frustumTest = all( frustumTestVec );",
			"		if ( frustumTest ) {",
			"			shadowCoord.z += shadowBias[ i ];",
			"			#if defined( SHADOWMAP_TYPE_PCF )",
			"				float shadow = 0.0;",
			"				const float shadowDelta = 1.0 / 9.0;",

			"				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;",
			"				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;",

			"				float dx0 = -1.25 * xPixelOffset;",
			"				float dy0 = -1.25 * yPixelOffset;",
			"				float dx1 = 1.25 * xPixelOffset;",
			"				float dy1 = 1.25 * yPixelOffset;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );",
			"				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",

			"				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );",

			"			#elif defined( SHADOWMAP_TYPE_PCF_SOFT )",
			"				float shadow = 0.0;",

			"				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;",
			"				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;",

			"				float dx0 = -1.0 * xPixelOffset;",
			"				float dy0 = -1.0 * yPixelOffset;",
			"				float dx1 = 1.0 * xPixelOffset;",
			"				float dy1 = 1.0 * yPixelOffset;",

			"				mat3 shadowKernel;",
			"				mat3 depthKernel;",

			"				depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );",
			"				depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );",
			"				depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );",
			"				depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );",
			"				depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );",
			"				depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );",
			"				depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );",
			"				depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );",
			"				depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );",
		
			"				vec3 shadowZ = vec3( shadowCoord.z );",
		
			"				shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));",
			"				shadowKernel[0] *= vec3(0.25);",
			"				shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));",
			"				shadowKernel[1] *= vec3(0.25);",
			"				shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));",
			"				shadowKernel[2] *= vec3(0.25);",
			"				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );",
			"				shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );",
			"				shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );",
			"				vec4 shadowValues;",
			"				shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );",
			"				shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );",
			"				shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );",
			"				shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );",
			"				shadow = dot( shadowValues, vec4( 1.0 ) );",
			"				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );",
			"			#else",
			"				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );",
			"				float fDepth = unpackDepth( rgbaDepth );",
			"				if ( fDepth < shadowCoord.z )",
			"					shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );",
			"			#endif",
			"		}",
			"		#ifdef SHADOWMAP_DEBUG",
			"			#ifdef SHADOWMAP_CASCADE",
			"				if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];",
			"			#else",
			"				if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];",
			"			#endif",
			"		#endif",
			"	}",
			"	#ifdef GAMMA_OUTPUT",
			"		shadowColor *= shadowColor;",
			"	#endif",
			"	gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;",
			"#endif",
		

        // THREE.ShaderChunk[ "linear_to_gamma_fragment" ]
			"#ifdef GAMMA_OUTPUT",
			"	gl_FragColor.xyz = sqrt( gl_FragColor.xyz );",
			"#endif",

        // THREE.ShaderChunk[ "fog_fragment" ]
			"#ifdef USE_FOG",
			"	#ifdef USE_LOGDEPTHBUF_EXT",
			"		float depth = gl_FragDepthEXT / gl_FragCoord.w;",
			"	#else",
			"		float depth = gl_FragCoord.z / gl_FragCoord.w;",
			"	#endif",
			"	#ifdef FOG_EXP2",
			"		const float LOG2 = 1.442695;",
			"		float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );",
			"		fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );",
			"	#else",
			"		float fogFactor = smoothstep( fogNear, fogFar, depth );",
			"	#endif",
			"	gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
			"#endif",


	// Cel-Shading-Bestandteile

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
		"	if (vlf < 0.25) { gl_FragColor = vec4(mix( basecolor, vec3(0.0), 0.5), alpha); }",
		"	if (vlf >= 0.25) { gl_FragColor = vec4(mix( basecolor, vec3(0.25), 0.5), alpha); }",
		"	if (vlf >= 0.50) { gl_FragColor = vec4(mix( basecolor, vec3(0.5), 0.5), alpha); }",
		"	if (vlf >= 0.75) { gl_FragColor = vec4(mix( basecolor, vec3(0.75), 0.5), alpha); }",

		"	gl_FragColor.xyz *= vLightFront;",
		"	vec3 temp = gl_FragColor.xyz;",
		
		
		"// Hatching-Part",
		// "if(hatchingAktiv > 0.0){", 
		
			// "vec2 nUV = vec2( mod( gl_FragCoord.x, bkgResolution.x ) / bkgResolution.x, mod( gl_FragCoord.y, bkgResolution.y ) / bkgResolution.y );",
			// "vec4 dst = vec4( texture2D( paper, nUV ).rgb, 1. );",
			// "vec4 src;",
// 			
			// "src = vec4( 1. ) * shade();",
// 
			// "vec4 c = src / dst;",
			// "gl_FragColor = vec4( c.rgb, 1. );",
			// "temp = src.xyz * temp;",

			// "gl_FragColor *= src;",
		"}",
    // "}"

].join("\n")

};