// once everything is loaded, we run our Three.js stuff.
function initialisiere() {
    "use strict";                                                   // Strict-Mode 
	window.debugMode = 0;
	if(debugMode){
		console.log("--Initialisierung--");
	}
	
	window.game ={};


	$("#einstellungContent").css("visibility","visible");
	$("#einstellungStart").css("visibility","hidden");
	$("#viewport").css("visibility","visible");
	
	$("#info").remove();
	var name = $("#inputName").val();
	$( "#header" ).removeClass( "header-big" );
	$( "#header" ).addClass( "header-small" );
	$( "#imgHeader" ).removeClass( "imgBannerBig" );
	$( "#imgBanner" ).addClass( "imgBannerSmall" );
	$( "#navbar" ).removeClass( "navbarBig" );
	$( "#navbar" ).addClass( "navbarSmall" );
	
	$( "#scoreboard" ).css("right","0px");
			

	Physijs.scripts.worker = 'lib/physijs_worker.js';        // Physi.js-Worker einbinden
	Physijs.scripts.ammo = '../lib/ammo.js';                    // Bibliotheksverweis zu Ammo

    window.addEventListener('resize', onWindowResize, false);   // Eventlistener fuer Groessenaenderung
    
    //game.ballNumber is the variable to change, if we want to change the number of balls
    game.ballNumber=23;
	$( "#balls" ).text(game.ballNumber);
	
	// Cel-Shading-Namespace
	window.game.gameObjects = new Array();
	window.game.celShadingMaterials = new Array();

    
    window.game.monsterBalls = [];								// Sammlung fuer alle Monster im Spiel	
    game.monsterCounter=game.ballNumber; //Counter fuer Kugeln (Monster) im Spiel (wird in loecherTrigger.js und raumErstellen.js aktualisiert)
    game.scoreCounter=0; //Counter fuer Score vom Spiel (wird in loecherTrigger.js aktualisiert)
    
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

        x_d:0,					// Delta-X
        y_d:0					// Delta-Y
	};

	game.szene = new Physijs.Scene;             		// Erstellen einer Physi.js-Szene
	game.szene.fog = new THREE.Fog(0x000000, 1, 200);;             		// Erstellen einer Physi.js-Szene
	game.szene.setGravity(new THREE.Vector3(0,-10,0));	// Schwerkraft
	
	game.raum = new THREE.Object3D();          		// Tisch als GameObject initialisieren
	game.tisch = new THREE.Object3D();          		// Tisch als GameObject initialisieren


	game.queue = new THREE.Object3D();          		// Queue als GameObject initialisieren
	game.whiteBall = new THREE.Object3D();      		// Weisse Kugel als GameObject initialisieren

	// Kamera mit (fov, aspect, near, far) Blickrichtung ist Sache des Mainloops
	game.kamera = new THREE.PerspectiveCamera(45, (window.innerWidth) / (window.innerHeight - 160), 0.1, 1000);
    game.kamera.position.x = 0;                 // x-Position
    game.kamera.position.y = 20;                // y-Position
    game.kamera.position.z = 10;                // z-Position

	game.clock = new THREE.Clock();             // Uhr-Objekt zur internen Zeitmessung im Spiel

    // Initialisierung der Steurung
    game.keyboard = erstelleTastaturSteuerung();
	game.orbitControls = new OrbitControls(game.kamera, $('#viewport')[0]);    // Kamera und Canvas an Steuerung
    game.orbitControls.autoRotate = false;                                     // Auto-Rotate ausschalten
    
    console.log(game.orbitControls);
    
    // Canvas-Abmessungen zur Initialisierung des Renderes festhalten
	game.breite = Math.round($("#viewport").width());									// Volle Bildschirmbreite
	game.hoehe = ($(window).height() - $("#header").height()- $("#footer").height());	// Volle Bildschirmhoehe ohne Header und Footer
    // Initialisierung des Renderers
	game.renderer = setupRenderer(game.breite, game.hoehe);                    	// Renderer erstellen
    $("#viewport").append(game.renderer.domElement);                            // Rendererrückgabe an viewport-DIV
    onWindowResize();															// Einmaliger Aufruf zum Aktualisieren

    // Initialisierung des Canvas
    game.canvas = document.getElementsByTagName("canvas")[0];                   // Zeichenfläche der Anwendung sichern
    game.canvas.addEventListener('mousemove', function(event) {                 // Eventlistener fuer mousemove
        var rect = game.canvas.getBoundingClientRect();                         // Groesse der Zeichenflaeche auslesen
        game.mausPosition.x = event.clientX - rect.left;                        // Maus-x berechnen
        game.mausPosition.y = event.clientY - rect.top;                         // Maus-y berechnen

        game.mausPosition.x_n = rect.left / event.clientX;                      // Maus-x normalisieren
        game.mausPosition.y_n = rect.top / event.clientY;                       // Maus-y normalisieren

        game.mausPosition.x_gemapped = rect.left / event.clientX - 0.5;             // Maus-x normalisieren
        game.mausPosition.y_gemapped = rect.top / event.clientY - 0.5;              // Maus-y normalisieren

        game.mausPosition.x_d = game.mausPosition.x_n - game.mausPosition.x_last;	//  Delta-X
        game.mausPosition.y_d = game.mausPosition.y_n - game.mausPosition.y_last;	//  Delta-Y

        game.mausPosition.x_last = game.mausPosition.x_n;							// Letzte Position X
        game.mausPosition.y_last = game.mausPosition.y_n;							// Letzte Position Y


    }, false);

	createGUI();								// Debugging-GUI erstellen
	/* Post-Processing - Cel-Shading*/
	initialisiereCelShading();

	/* Post-Processing - Allgemein*/	
	// Motion-Blur
	initialisiereMotionBlur();
	erstelleComposer();				// Effekt-Composer erstellen
	game.postProcessing = true;	// Postprocessing standardmaessig deaktiviert
	
	setupLights();                              // Aufrufen externer Funktion zur Initialisierung der Lichtquellen

	/* Sound */
	game.ambientSound = new Audio();//document.createElement("audio");
	game.soundAn = false;
	
	/* Ambient Sound*/
	game.effectSound = false;

    /* Spielumgebung einladen */
	queueLaden();                               // Queue laden
    ladePooltable();                             // Nicht-Physisches, detailliertes Model des Tisches laden    
    ladeKugeln();                             // Nicht-Physisches, detailliertes Model des Tisches laden
    loecherTrigger();							//Lade die Triggers von den Loechern
    createWhiteBall(0,22,15);                    // Weisse Kugel aus physikalischem Grundobjekt an x,y erstellen
    sceneLaden();                        //Alpha Tisch aus Colada File Laden^
    loadMonsters();								// Lade ein Monster (Bernd)
    // ladeAnimation();
    erstelleStatistik(true,true);               // Statistiken zu Debugging-Zwecken in Spiel hinzufuegen


	// var achsendreibein = new THREE.AxisHelper(50);
	// achsendreibein.position.y = 20;
 //    game.szene.add(achsendreibein);   // Achsendreibein(groesse) zu Debugging-Zwecken in Spiel hinzufuegen

	erstelleMinimap();	
    /* Ende der Initialisierung / Aufruf des Mainloops */
	mainloop();
};
