/* Libary for physical materials.*/

var lWhiteBallP;

lWhiteBallP = Physijs.createMaterial(new THREE.MeshLambertMaterial({
	color : 0xffffff,
	ambient : 0xffffff,
}), 0.1, // friction
1.0 // restitution
);

