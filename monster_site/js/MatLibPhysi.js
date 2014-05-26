/* Libary for physical materials.*/


var ground;


ground = Physijs.createMaterial(new THREE.MeshPhongMaterial({
					color : 0xff0000

				}), 1, // high friction
				.7 // low restitution
				);




//var materialGround = new THREE.MeshPhongMaterial( { color: 0xff0000, ambient: 0xaaaaaa, specular: 0xaaaaaa, perPixel: true,  vertexColors: THREE.FaceColors } );