/* Libary for physical materials.*/

var lWhiteBallP;

lWhiteBallP = Physijs.createMaterial(new THREE.MeshLambertMaterial({
	color : 0xffffff,
	ambient : 0xffffff,
}), 1.0, // friction
1.0 // restitution
);

lFrictionMatP = Physijs.createMaterial(new THREE.MeshLambertMaterial({
	color : 0xffffff,
	ambient : 0xffffff,
	transparent : true,
	opacity : 0,
	wireframe : false
}), 1.0, // friction
0.0 // restitution
);

