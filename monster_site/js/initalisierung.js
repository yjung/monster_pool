// once everything is loaded, we run our Three.js stuff.
function initialisiere() {

	Physijs.scripts.worker = '../lib/physijs_worker.js';
	Physijs.scripts.ammo = '../lib/ammo.js';

	// Globalen Namespace schaffen
	window.game = {};

	game.modus = {
		statisch : 0,
		orbitrotation : 1,
		zoom : 2,
		// pan : 3
	};
	
	game.state = game.modus.orbitrotation;

	// Mausposition in der Anwendung
	game.mausPosition = {
		x : 0,
		y : 0,
		//normaliesiert
		x_n:0,
		y_n:0
	};

	game.szene = new Physijs.Scene;
	game.tisch = new THREE.Object3D();
	game.queue = new THREE.Object3D();
	game.whiteBall = new THREE.Object3D();

	// create a camera, which defines where we're looking at.
	game.camera = new THREE.PerspectiveCamera(45, (window.innerWidth - 211) / (window.innerHeight - 230), 0.1, 1000);
	var clock = new THREE.Clock();

	orbitControls = new THREE.OrbitControls(game.camera, $('#viewport')[0]);
	orbitControls.autoRotate = false;
	console.log(orbitControls);
	richtung = 0;

	// create a render and set the size
	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColorHex(0xEEEEEE);
	renderer.setSize(window.innerWidth - 211, window.innerHeight - 230);
	renderer.setClearColorHex(0x000, 1);
	renderer.domElement.style.zIndex = -1;

	var axes = new THREE.AxisHelper(20);
	game.szene.add(axes);

	// position and point the camera to the center of the szene
	game.camera.position.x = 0;
	game.camera.position.y = 60;
	game.camera.position.z = 10;
	game.camera.lookAt(game.szene.position);

	// var tisch = new tischLaden();
	//tischLaden();
	queueLaden();

	createDummyTisch();
	createWhiteBall();
	// Dummy-Tisch
	function createDummyTisch() {
		var dummy_rot = Physijs.createMaterial(new THREE.MeshPhongMaterial({
			color : 0xFF0000
		}), .9, .3);
		var dummy_gruen = Physijs.createMaterial(new THREE.MeshPhongMaterial({
			color : 0x00FF00
		}), .9, .3);
		var dummy_blau = Physijs.createMaterial(new THREE.MeshPhongMaterial({
			color : 0x0000FF
		}), .9, .3);
		var dummy_gelb = Physijs.createMaterial(new THREE.MeshPhongMaterial({
			color : 0xFFFF00
		}), .9, .3);
		var dummy_cyan = Physijs.createMaterial(new THREE.MeshPhongMaterial({
			color : 0x00FFFF
		}), .9, .3);

		var ground = new Physijs.BoxMesh(new THREE.CubeGeometry(75, 5, 38), dummy_rot, 0);
		ground.position.y = 14;

		var borderLeft = new Physijs.BoxMesh(new THREE.CubeGeometry(2, 3, 38), dummy_gruen, 0);
		borderLeft.position.x = -36;
		borderLeft.position.y = 2;
		ground.add(borderLeft);

		var borderRight = new Physijs.BoxMesh(new THREE.CubeGeometry(2, 3, 38), dummy_blau, 0);
		borderRight.position.x = 38;
		borderRight.position.y = 2;
		ground.add(borderRight);

		var borderBottom = new Physijs.BoxMesh(new THREE.CubeGeometry(75, 3, 2), dummy_gelb, 0);
		borderBottom.position.z = 18;
		borderBottom.position.y = 2;
		ground.add(borderBottom);

		var borderTop = new Physijs.BoxMesh(new THREE.CubeGeometry(75, 3, 2), dummy_cyan, 0);
		borderTop.position.z = -18;
		borderTop.position.y = 2;
		ground.add(borderTop);

		game.szene.add(ground);
	}

	function createWhiteBall() {
		var dummy_white = Physijs.createMaterial(new THREE.MeshPhongMaterial({
			color : 0xFFFFFF
		}), .9, .3);

		game.whiteBall = new Physijs.SphereMesh(new THREE.SphereGeometry(1, 16, 16), dummy_white, 1);
		game.whiteBall.position.x = 0;
		game.whiteBall.position.y = 20;

		game.szene.add(game.whiteBall);
	}

	setupLights();

	// add the output of the renderer to the html element
	$("#viewport").append(renderer.domElement);

	// Zeichenfläche der Anwendung
	game.canvas = document.getElementsByTagName("canvas")[0];

	game.canvas.addEventListener('mousemove', function(event) {
		var rect = game.canvas.getBoundingClientRect();
		game.mausPosition.x = event.clientX - rect.left;
		game.mausPosition.y = event.clientY - rect.top;
		
		game.mausPosition.x_n = rect.left / event.clientX;
		game.mausPosition.y_n = rect.top / event.clientY;
	}, false);

	// Anzeige zur Kontrolle der Performance des Rendering erstellen, positionieren, anhaengen
	statsX = new THREEx.RendererStats();
	statsX.domElement.style.position = 'absolute';
	statsX.domElement.style.right = "0px";
	statsX.domElement.style.top = '40px';
	statsX.domElement.style.zIndex = 2000;
	$('#viewport').append(statsX.domElement);

	// Anzeige zur Kontrolle der Performance des Rendering erstellen, positionieren, anhaengen
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.right = "0px";
	stats.domElement.style.top = '0px';
	stats.domElement.style.zIndex = 2000;
	$('#viewport').append(stats.domElement);

	window.addEventListener('resize', onWindowResize, false);

	function queueAktualisieren() {

		if (game.state === game.modus.orbitrotation) {
			// console.log("rotation");
			var radiusAbstand = new THREE.Vector3(1.5, 1, 1.5);
			var position = new THREE.Vector3();
			var positionCam = new THREE.Vector3();
			var positionBall = new THREE.Vector3();
			positionCam.copy(game.camera.position);
			positionBall.copy(game.whiteBall.position);
			position = positionCam.sub(positionBall).normalize().add(game.whiteBall.position);

			game.queue.position.x = position.x;
			game.queue.position.y = game.whiteBall.position.y;
			game.queue.position.z = position.z;

			var qZiel = new THREE.Quaternion();
			var qAusgang = game.queue.rotation._quaternion;
			THREE.Quaternion.slerp(qAusgang, game.camera._quaternion, qZiel, 0.07);

			game.queue.__dirtyPosition = true;
			game.queue.__dirtyRotation = true;
			game.queue.rotation._quaternion.copy(qZiel);
			game.queue.__dirtyPosition = true;
			game.queue.__dirtyRotation = true;

			orbitControls.Mittelpunkt.x = game.whiteBall.position.x;
			orbitControls.Mittelpunkt.y = game.whiteBall.position.y;
			orbitControls.Mittelpunkt.z = game.whiteBall.position.z;
		}
		if(game.state === game.modus.statisch){
			 console.log(game.mausPosition.y_n);

			game.queue.__dirtyPosition = true;
			game.queue.__dirtyRotation = true;			
			game.queue.position.lerp(game.whiteBall.position, (game.mausPosition.y_n*4));
			game.queue.__dirtyPosition = true;
			game.queue.__dirtyRotation = true;
			
		}
	}

	function onWindowResize() {
		game.camera.aspect = (window.innerWidth - 211) / (window.innerHeight - 230);
		game.camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth - 211, window.innerHeight - 230);

	};

	function render() {

		var delta = clock.getDelta();
		orbitControls.rotateLeft(richtung);
		orbitControls.update(delta);

		queueAktualisieren();

		requestAnimationFrame(render);
		renderer.render(game.szene, game.camera);
		stats.update(renderer);
		statsX.update(renderer);
		game.szene.simulate(undefined, 1);

	};
	render();
};
