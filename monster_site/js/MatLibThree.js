/* Libary for Three.js materials.

* Reusable Materials to include in WebGL-Applications
* First Lambert-, Second Phong-Materials
*
* initial:
* 	-l for Lambert
* 	-p for Phong
*
* extension:
* -T for Three.js-Material
* -P for Physi.js-Material
* */

// This variable has to be set up in the scene! Connection example: pChromeT.envMap = this.cubeTarget;
var cubeTarget;

// Lamberts
var lRedT, lGreenT, lBlueT, lGreyT, lWhiteT, lBlackT, lTransparentT;

var lChromeT;

var lRedWireframeT, lGreenWireframeT, lBlueWireframeT;

// Phongs
var pRedT, pGreenT, pBlueT, pGreyT, pWhiteT;

var pGreyReflectiveT;

var pChromeT;
var pWhiteMetalT;

var pBlackGlasT;

var pSilverBlueCarPaintT;

var pWhiteWireframeT, pRedWireframeT, pGreenWireframeT, pBlueWireframeT, pYellowWireframeT;

/* MeshLambertMaterial for non-shiny (Lambertian) surfaces, evaluated per vertex.

 .color : 				Diffuse color of the material. Default is white.
 .ambient : 			Ambient color of the material, multiplied by the color of the AmbientLight. Default is white.
 .emissive : 			Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
 .shading : 			How the triangles of a curved surface are rendered: as a smooth surface, as flat separate facets, or no shading at all. Options are THREE.SmoothShading (default), THREE.FlatShading, THREE.NoShading.
 .wireframe : 			Whether the triangles' edges are displayed instead of surfaces. Default is false.
 .wireframeLinewidth: 	Line thickness for wireframe mode. Default is 1.0. Due to limitations in the ANGLE layer, on Windows platforms linewidth will always be 1 regardless of the set value.
 .wireframeLinecap : 	Define appearance of line ends. Possible values are "butt", "round" and "square". Default is 'round'. This setting might not have any effect when used with certain renderers. For example, it is ignored with the WebGL renderer, but does work with the Canvas renderer.
 .wireframeLinejoin : 	Define appearance of line joints. Possible values are "round", "bevel" and "miter". Default is 'round'. This setting might not have any effect when used with certain renderers. For example, it is ignored with the WebGL renderer, but does work with the Canvas renderer.
 .vertexColors : 		Define whether the material uses vertex colors, or not. Default is false. This setting might not have any effect when used with certain renderers. For example, it is ignored with the Canvas renderer, but does work with the WebGL renderer.
 .fog : 				Define whether the material color is affected by global fog settings. Default is true. This setting might not have any effect when used with certain renderers. For example, it is ignored with the Canvas renderer, but does work with the WebGL renderer.
 .map : 				Set color texture map. Default is null.
 .lightMap : 			Set light map. Default is null.
 .specularMap : 		Since this material does not have a specular component, the specular value affects only how much of the environment map affects the surface. Default is null.
 .envMap : 				Set env map. Default is null.
 .reflectivity : 		How much the environment map affects the surface; also see "combine".
 .refractionRatio : 	The index of refraction for an environment map using THREE.CubeRefractionMapping. Default is 0.98.
 .combine : 			How to combine the result of the surface's color with the environment map, if any. Options are THREE.Multiply (default), THREE.MixOperation, THREE.AddOperation. If mix is chosen, the reflectivity is used to blend between the two colors.
 .skinning : 			Define whether the material uses skinning. Default is false.
 .morphTargets: 		Define whether the material uses morphTargets. Default is false.
 .wrapRGB
 .morphNormals
 .wrapAround
 */

lRedT = new THREE.MeshLambertMaterial({
	color : 0xff0000,
	ambient : 0xff0000
});

lGreenT = new THREE.MeshLambertMaterial({
	color : 0x00ff00,
	ambient : 0x00ff00
});

lBlueT = new THREE.MeshLambertMaterial({
	color : 0x0000ff,
	ambient : 0xff0000,
});

lGreyT = new THREE.MeshLambertMaterial({
	color : 0x777777,
	ambient : 0x777777
});

lDarkGreyT = new THREE.MeshLambertMaterial({
	color : 0x101010,
	ambient : 0x101010
});

lBlackT = new THREE.MeshLambertMaterial({
	color : 0x000000,
	ambient : 0x000000
});

lWhiteT = new THREE.MeshLambertMaterial({
	color : 0xffffff,
	ambient : 0xffffff
});

lChromeT = new THREE.MeshLambertMaterial({
	color : 0xffffff,
	ambient : 0xffffff,
	reflectivity : 0.75
});

lRedWireframeT = new THREE.MeshLambertMaterial({
	color : 0xff0000,
	ambient : 0xff0000,
	wireframe : true
});

lGreenWireframeT = new THREE.MeshLambertMaterial({
	color : 0x00ff00,
	ambient : 0x00ff00,
	wireframe : true
});

lBlueWireframeT = new THREE.MeshLambertMaterial({
	color : 0x0000ff,
	ambient : 0xff0000,
	wireframe : true
});

lTransparentT = new THREE.MeshLambertMaterial({
	color : 0xffffff,
	ambient : 0xffffff,
	transparent : true,
	opacity : 0,
	wireframe : false
});

lTransparentBlueBacksideT = new THREE.MeshLambertMaterial({
	color : 0xeeeeff,
	ambient : 0xeeeeff,
	transparent : true,
	opacity : 0.75,
	wireframe : false,
	side: THREE.BackSide
});
/* MeshPhongMaterial for shiny surfaces, evaluated per pixel.

 .color : 				Diffuse color of the material. Default is white.
 .ambient : 			Ambient color of the material, multiplied by the color of the AmbientLight. Default is white.
 .emissive : 			Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
 .specular : 			Specular color of the material, i.e., how shiny the material is and the color of its shine. Setting this the same color as the diffuse value (times some intensity) makes the material more metallic-looking; setting this to some gray makes the material look more plastic. Default is dark gray.
 .shininess : 			How shiny the specular highlight is; a higher value gives a sharper highlight. Default is 30.
 .shading : 			How the triangles of a curved surface are rendered: as a smooth surface, as flat separate facets, or no shading at all. Options are THREE.SmoothShading (default), THREE.FlatShading, THREE.NoShading.
 .wireframe : 			Whether the triangles' edges are displayed instead of surfaces. Default is false.
 .wireframeLinewidth : 	Line thickness for wireframe mode. Default is 1.0. Due to limitations in the ANGLE layer, on Windows platforms linewidth will always be 1 regardless of the set value.
 .wireframeLinecap : 	Define appearance of line ends. Possible values are "butt", "round" and "square". Default is 'round'. This setting might not have any effect when used with certain renderers. For example, it is ignored with the WebGL renderer, but does work with the Canvas renderer.
 .wireframeLinejoin : 	Define appearance of line joints. Possible values are "round", "bevel" and "miter". Default is 'round'. This setting might not have any effect when used with certain renderers. For example, it is ignored with the WebGL renderer, but does work with the Canvas renderer.
 .vertexColors : 		Define whether the material uses vertex colors, or not. Default is false. This setting might not have any effect when used with certain renderers. For example, it is ignored with the Canvas renderer, but does work with the WebGL renderer.
 .fog : 				Define whether the material color is affected by global fog settings. Default is true. This setting might not have any effect when used with certain renderers. For example, it is ignored with the Canvas renderer, but does work with the WebGL renderer.
 .map : 				Set color texture map. Default is null.
 .lightMap : 			Set light map. Default is null.
 .specularMap : 		The specular map value affects both how much the specular surface highlight contributes and how much of the environment map affects the surface. Default is null.
 .envMap : 				Set env map. Default is null.
 .reflectivity : 		How much the environment map affects the surface; also see "combine".
 .refractionRatio : 	The index of refraction for an environment map using THREE.CubeRefractionMapping. Default is 0.98.
 .combine : 			How to combine the result of the surface's color with the environment map, if any. Options are THREE.Multiply (default), THREE.MixOperation, THREE.AddOperation. If mix is chosen, the reflectivity is used to blend between the two colors.
 .skinning : 			Define whether the material uses skinning. Default is false.
 .morphTargets : 		Define whether the material uses morphTargets. Default is false.
 .normalScale
 .morphNormals
 .metal
 .bumpScale
 .wrapAround
 .perPixel
 .normalMap
 .bumpMap
 .wrapRGB
 */

pRedT = new THREE.MeshPhongMaterial({
	color : 0xff0000,
	ambient : 0xff0000,
	doubleSide: true,
});

pGreenT = new THREE.MeshPhongMaterial({
	color : 0x00ff00,
	ambient : 0x00ff00
});

pBlueT = new THREE.MeshPhongMaterial({
	color : 0x0000ff,
	ambient : 0x0000ff
});

pGreyT = new THREE.MeshPhongMaterial({
	color : 0x777777,
	ambient : 0x777777
});

pGreyReflectiveT = new THREE.MeshPhongMaterial({
	color : 0x777777,
	ambient : 0x777777,
	combine : THREE.Multiply,
	envMap : cubeTarget,
	reflectivity : 0.75,
});

pWhiteT = new THREE.MeshPhongMaterial({
	color : 0xffffff,
	ambient : 0xffffff
});

pBlackT = new THREE.MeshPhongMaterial({
	color : 0x000000,
	ambient : 0x000000,
// side: THREE.DoubleSide,
});

pChromeT = new THREE.MeshPhongMaterial({
	color : 0xffffff,
	ambient : 0xffffff,
	combine : THREE.Multiply,
	envMap : cubeTarget,
	reflectivity : 0.5,
	metal : true,
// side: THREE.DoubleSide,
});

var pWhiteMetalT= new THREE.MeshPhongMaterial({
	color : 0xffffff,
	ambient : 0xffffff,
	combine : THREE.Multiply,
	envMap : cubeTarget,
	reflectivity : 0.25,
	metal : true,
// side: THREE.DoubleSide,
});


pSilverBlueCarPaintT = new THREE.MeshPhongMaterial({
	color : 0xccccce,
	ambient : 0xddddff,
	emissive: 0x111112,
	combine : THREE.Multiply,
	envMap : cubeTarget,
	reflectivity : 0.2,
	metal : true,
// side: THREE.DoubleSide,
});

pBlackGlasT = new THREE.MeshPhongMaterial({
	color : 0x111111,
	ambient : 0x111111,
	combine : THREE.MixOperation,
	envMap : cubeTarget,
	reflectivity : 0.2,
	metal : false,
	// transparent : true,
	// opacity : 0.97,
// side: THREE.DoubleSide,
});

pWhiteWireframeT = new THREE.MeshPhongMaterial({
	color : 0xffffff,
	ambient : 0xff0000,
	wireframe : true
});


pRedWireframeT = new THREE.MeshPhongMaterial({
	color : 0xff0000,
	ambient : 0xff0000,
	wireframe : true
});

pGreenWireframeT = new THREE.MeshPhongMaterial({
	color : 0x00ff00,
	ambient : 0x00ff00,
	wireframe : true
});

pBlueWireframeT = new THREE.MeshPhongMaterial({
	color : 0x0000ff,
	ambient : 0xff0000,
	wireframe : true
});

pYellowWireframeT = new THREE.MeshPhongMaterial({
	color : 0xffff00,
	ambient : 0xffff00,
	wireframe : true
});
//var materialGround = new THREE.MeshPhongMaterial( { color: 0xff0000, ambient: 0xaaaaaa, specular: 0xaaaaaa, perPixel: true,  vertexColors: THREE.FaceColors } );