// Queue einladen und initialisieren
function queueLaden() {
    var JSONloader = new THREE.JSONLoader();        // JSON-Loader erstellen
    JSONloader.load('../assets/json/queue_a02.js', function(geometry, mat) {
        queueMaterial = Physijs.createMaterial(lGreenT, 0, 0);
        // game.queue = new THREE.Mesh(geometry, mat[0]);
        game.queue = new Physijs.BoxMesh(geometry, queueMaterial, 0);

        game.queue.scale.x = .25;                   // (Noch IM 3D-MODELL AENDERN!)
        game.queue.scale.y = .25;                   // (Noch IM 3D-MODELL AENDERN!)
        game.queue.scale.z = .25;                   // (Noch IM 3D-MODELL AENDERN!)

        game.queue._physijs.collision_flags = 4;    // COLLISION IST ZUM BUGFIXING NOCH DEAKTIVIERT
        game.szene.add(game.queue);                 // Queue zur Szene hinzufuegen
    }, '../assets/tex');                            // Verweis auf Verzeichnis mit verwendeten Texturen
};

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