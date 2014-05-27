// once everything is loaded, we run our Three.js stuff.
function initialisiere() {

	Physijs.scripts.worker = '../lib/physijs_worker.js';    // Physi.js-Worker einbinden
	Physijs.scripts.ammo = '../lib/ammo.js';                // Bibliotheksverweis zu Ammo
	window.game = {};                                       // Globalen Namespace schaffen

	game.modus = {
		statisch : 0,           // Position ist fixiert
		orbitrotation : 1,      // Position rotiert um weisse Kugel
		zoom : 2,               // Zoom (optional)
		// pan : 3              // Verschieben (optional, BRAUCHT BUGFIXING)
	};

	game.state = game.modus.orbitrotation; // Initial auf Rotationsmodus setzen

	// Mausposition in der Anwendung tracken
	game.mausPosition = {
		x : 0,                  // eingelesener X-Wert
		y : 0,                  // eingelesener Y-Wert
		x_n:0,                  // normalisierter X-Wert
		y_n:0                   // normalisierter Y-Wert
	};

	game.szene = new Physijs.Scene;             // Erstellen einer Physi.js-Szene
	game.tisch = new THREE.Object3D();          // Tisch als GameObject initialisieren
	game.queue = new THREE.Object3D();          // Queue als GameObject initialisieren
	game.whiteBall = new THREE.Object3D();      // Weisse Kugel als GameObject initialisieren

	// Kamera (fov, aspect, near, far)
	game.camera = new THREE.PerspectiveCamera(45, (window.innerWidth - 211) / (window.innerHeight - 230), 0.1, 1000);
	game.clock = new THREE.Clock();

	orbitControls = new THREE.OrbitControls(game.camera, $('#viewport')[0]);
	orbitControls.autoRotate = false;
	console.log(orbitControls);
	richtung = 0;

	// create a render and set the size
	game.renderer = new THREE.WebGLRenderer();

    game.renderer.setClearColorHex(0xEEEEEE);
    game.renderer.setSize(window.innerWidth - 211, window.innerHeight - 230);
    game.renderer.setClearColorHex(0x000, 1);
    game.renderer.domElement.style.zIndex = -1;

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

	createDummyTisch();         // Dummy-Tisch aus physikalischen Grundobjekten
    createWhiteBall(0,20);      // Weisse Kugel aus physikalischem Grundobjekt an x,y

    // Aufrufen externer Funktion zur Initialisierung der Lichtquellen
	setupLights();

	// add the output of the renderer to the html element
	$("#viewport").append(game.renderer.domElement);

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



    // Ende der Initialisierung / Aufruf des Mainloops
	mainloop();
};
