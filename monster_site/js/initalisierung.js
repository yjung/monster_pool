// once everything is loaded, we run our Three.js stuff.
function initialisiere() {

	Physijs.scripts.worker = '../lib/physijs_worker.js';        // Physi.js-Worker einbinden
	Physijs.scripts.ammo = '../lib/ammo.js';                    // Bibliotheksverweis zu Ammo
    window.game = {};                                           // Globalen Namespace schaffen
    window.addEventListener('resize', onWindowResize, false);   // Eventlistener fuer Groessenaenderung
    
    game.breite = document.getElementById("viewport").clientWidth;
	game.hoehe = document.getElementById("viewport").clientHeight;
	
	

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
		y_n:0,                  // normalisierter Y-Wert

        x_last:0,               // letzter X-Wert
        y_last:0,               // Letzter Y-Wert

        x_d:0,
        y_d:0
	};

	game.szene = new Physijs.Scene;             		// Erstellen einer Physi.js-Szene
	game.szene.setGravity(new THREE.Vector3(0,-10,0));	// Schwerkraft
//	game.tisch = new THREE.Object3D();          		// Tisch als GameObject initialisieren
    game.ColadaTisch = new THREE.Object3D();          		// Tisch als GameObject initialisieren

	game.queue = new THREE.Object3D();          		// Queue als GameObject initialisieren
	game.whiteBall = new THREE.Object3D();      		// Weisse Kugel als GameObject initialisieren

	// Kamera mit (fov, aspect, near, far) Blickrichtung ist Sache des Mainloops
	game.kamera = new THREE.PerspectiveCamera(45, (window.innerWidth - 211) / (window.innerHeight - 230), 0.1, 1000);
    game.kamera.position.x = 0;                 // x-Position
    game.kamera.position.y = 20;                // y-Position
    game.kamera.position.z = 10;                // z-Position


	game.clock = new THREE.Clock();             // Uhr-Objekt zur internen Zeitmessung im Spiel

    // Initialisierung der Steurung
    game.keyboard = erstelleTastaturSteuerung();
	game.orbitControls = new OrbitControls(game.kamera, $('#viewport')[0]);    // Kamera und Canvas an Steuerung
    game.orbitControls.autoRotate = false;                                     // Auto-Rotate ausschalten
    // Initialisierung des Renderers
	// console.log(game.breite);                                 // Renderer erstellen
	// console.log(game.hoehe);                                 // Renderer erstellen
	game.renderer = setupRenderer(game.breite, game.hoehe);                                  // Renderer erstellen

    $("#viewport").append(game.renderer.domElement);                            // Rendererrückgabe an viewport-DIV

    // Initialisierung des Canvas
    game.canvas = document.getElementsByTagName("canvas")[0];                   // Zeichenfläche der Anwendung sichern
    game.canvas.addEventListener('mousemove', function(event) {                 // Eventlistener fuer mousemove
        var rect = game.canvas.getBoundingClientRect();                         // Groesse der Zeichenflaeche auslesen
        game.mausPosition.x = event.clientX - rect.left;                        // Maus-x berechnen
        game.mausPosition.y = event.clientY - rect.top;                         // Maus-y berechnen

        game.mausPosition.x_n = rect.left / event.clientX;                      // Maus-x normalisieren
        game.mausPosition.y_n = rect.top / event.clientY;                       // Maus-y normalisieren

        game.mausPosition.x_gemapped = rect.left / event.clientX - 0.5;                      // Maus-x normalisieren
        game.mausPosition.y_gemapped = rect.top / event.clientY - 0.5;                       // Maus-y normalisieren

        game.mausPosition.x_d = game.mausPosition.x_n - game.mausPosition.x_last;
        game.mausPosition.y_d = game.mausPosition.y_n - game.mausPosition.y_last;

        game.mausPosition.x_last = game.mausPosition.x_n;
        game.mausPosition.y_last = game.mausPosition.y_n;


    }, false);

	/* Post-Processing */
	game.postProcessing = false;
	game.effect;
	erstelleComposer();



    /* Spielumgebung einladen */
	queueLaden();                               // Queue laden
    //tischLaden();                             // Nicht-Physisches, detailliertes Model des Tisches laden
    createDummyTisch();                         // Dummy-Tisch aus physikalischen Grundobjekten erstellen
    // ColadaTischLaden();                               //Alpha Tisch aus Colada File Laden
    createWhiteBall(0,18,0);                      // Weisse Kugel aus physikalischem Grundobjekt an x,y erstellen
	setupLights();                              // Aufrufen externer Funktion zur Initialisierung der Lichtquellen
    erstelleStatistik(true,true);               // Statistiken zu Debugging-Zwecken in Spiel hinzufuegen

	createGUI();

    game.szene.add(new THREE.AxisHelper(50));   // Achsendreibein(groesse) zu Debugging-Zwecken in Spiel hinzufuegen

    /* Ende der Initialisierung / Aufruf des Mainloops */
	mainloop();
};
