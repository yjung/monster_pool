
var JSONloader = new THREE.JSONLoader();

function tischLaden() {

	JSONloader.load('../assets/json/snooker_a01.js', function(geometry, mat) {
		game.tisch = new THREE.Mesh(geometry, mat[0]);

		game.tisch.scale.x = .5;
		game.tisch.scale.y = .5;
		game.tisch.scale.z = .5;

		game.tisch.position.x = -30;
		game.tisch.position.z = 15;

		game.szene.add(game.tisch);

	}, '../assets/tex/');

};

function queueLaden() {

	JSONloader.load('../assets/json/queue_a02.js', function(geometry, mat) {
		queueMaterial = Physijs.createMaterial(lGreenT, 0, 0);
		// game.queue = new THREE.Mesh(geometry, mat[0]);
		game.queue = new Physijs.BoxMesh(geometry, queueMaterial, 0);
		
		game.queue.scale.x = .25;
		game.queue.scale.y = .25;
		game.queue.scale.z = .25;

		game.queue._physijs.collision_flags = 4;
		game.szene.add(game.queue);

	}, '../assets/tex');

};

