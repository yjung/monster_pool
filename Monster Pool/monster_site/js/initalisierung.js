// once everything is loaded, we run our Three.js stuff.
function initialisiere() {
    "use strict";                                                   // Strict-Mode 
    window.debugMode = 0;
    if (debugMode) {
        console.log("--Initialisierung--");
    }

    window.game = {};
    game.delta;


    $("#einstellungContent").css("visibility", "visible");
    $("#einstellungStart").css("visibility", "hidden");
    $("#viewport").css("visibility", "visible");

    $("#info").remove();
    var name = $("#inputName").val();
    $("#header").removeClass("header-big");
    $("#header").addClass("header-small");
    $("#imgHeader").removeClass("imgBannerBig");
    $("#imgBanner").addClass("imgBannerSmall");
    $("#navbar").removeClass("navbarBig");
    $("#navbar").addClass("navbarSmall");

    $("#scoreboard").css("right", "0px");


    Physijs.scripts.worker = 'lib/physijs_worker.js';        // Physi.js-Worker einbinden
    Physijs.scripts.ammo = '../lib/ammo.js';                    // Bibliotheksverweis zu Ammo

    window.addEventListener('resize', onWindowResize, false);   // Eventlistener fuer Groessenaenderung

    //game.ballNumber is the variable to change, if we want to change the number of balls
    game.ballNumber = 23;
    $("#balls").text(game.ballNumber);

    // Cel-Shading-Namespace
    window.game.gameObjects = new Array();
    window.game.celShadingMaterials = new Array();


    window.game.monsterBalls = [];								// Sammlung fuer alle Monster im Spiel	
    game.monsterCounter = game.ballNumber; //Counter fuer Kugeln (Monster) im Spiel (wird in loecherTrigger.js und raumErstellen.js aktualisiert)
    game.scoreCounter = 0; //Counter fuer Score vom Spiel (wird in loecherTrigger.js aktualisiert)

    game.szene = new Physijs.Scene;             		// Erstellen einer Physi.js-Szene
    game.szene.setGravity(new THREE.Vector3(0, -10, 0));	// Schwerkraft
    game.depthMaterial = new THREE.MeshDepthMaterial();
    game.szene.overrideMaterial = game.depthMaterial;

    game.raum = new THREE.Object3D();          		// Tisch als GameObject initialisieren
    game.tisch = new THREE.Object3D();          		// Tisch als GameObject initialisieren


    game.queue = new THREE.Object3D();          		// Queue als GameObject initialisieren
    game.whiteBall = new THREE.Object3D();      		// Weisse Kugel als GameObject initialisieren
    game.whiteBall.inBewegung = false;

    // Kamera mit (fov, aspect, near, far) Blickrichtung ist Sache des Mainloops
    game.kamera = new THREE.PerspectiveCamera(45, (window.innerWidth) / (window.innerHeight - 160), 0.1, 1000);
    game.kamera.position.x = 0;                 // x-Position
    game.kamera.position.y = 20;                // y-Position
    game.kamera.position.z = 30;                // z-Position

    game.clock = new THREE.Clock();             // Uhr-Objekt zur internen Zeitmessung im Spiel

    // Initialisierung der Steurung
    game.keyboard = erstelleTastaturSteuerung();
    game.orbitControls = new OrbitControls(game.kamera, $('#viewport')[0]);    // Kamera und Canvas an Steuerung
    game.orbitControls.autoRotate = false;      // Auto-Rotate ausschalten
    erstelleMausKontrolle();
    erstelleStossKontrolle();

    // Canvas-Abmessungen zur Initialisierung des Renderes festhalten
    game.breite = Math.round($("#viewport").width());									// Volle Bildschirmbreite
    game.hoehe = ($(window).height() - $("#header").height() - $("#footer").height());	// Volle Bildschirmhoehe ohne Header und Footer
    // Initialisierung des Renderers
    game.renderer = setupRenderer(game.breite, game.hoehe);                    	// Renderer erstellen
    $("#viewport").append(game.renderer.domElement);                            // Rendererrückgabe an viewport-DIV
    onWindowResize();															// Einmaliger Aufruf zum Aktualisieren

    // Initialisierung des Canvas
    game.canvas = document.getElementsByTagName("canvas")[0];                   // Zeichenfläche der Anwendung sichern

    createGUI();								// Debugging-GUI erstellen
    /* Post-Processing - Cel-Shading*/
    game.postProcessing = true;	// Postprocessing standardmaessig deaktiviert
    initialisiereCelShading();

    // Motion-Blur
    //initialisiereMotionBlur();

    // Depth of Field
    //initializeDOF();

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
    createWhiteBall(0, 18.75, 15);                    // Weisse Kugel aus physikalischem Grundobjekt an x,y erstellen
    sceneLaden();                        //Alpha Tisch aus Colada File Laden^
    loadMonsters();								// Lade ein Monster (Bernd)
    // ladeAnimation();
    erstelleStatistik(/*true, true*/);               // Statistiken zu Debugging-Zwecken in Spiel hinzufuegen


//	 var achsendreibein = new THREE.AxisHelper(50);
//	 achsendreibein.position.y = 20;
//     game.szene.add(achsendreibein);   // Achsendreibein(groesse) zu Debugging-Zwecken in Spiel hinzufuegen

    //erstelleMinimap();
    pruefeKugelBewegung();
    var timerId = setInterval(pruefeKugelBewegung, 100);
    /* Ende der Initialisierung / Aufruf des Mainloops */
    mainloop();
}
