// Tisch einladen und initialisieren
function ColadaTischLaden()/* Tisch falsch rotiert (steht hochkant): Gedreht beine fehlen (Export error oder altes File¿)*/
{
    var ColladaLoader = new THREE.ColladaLoader();
    // JSON-Loader erstellen
    ColladaLoader.load('../assets/dae/Tisch_alpha.dae', function (collada)
    {
        ColadaTischMaterial = Physijs.createMaterial(lGreenT, 0, 0);
        console.log(collada.scene.children[0].geometry);

        // game.cTable = new THREE.Mesh(geometry, mat[0]);
        // var dae = collada.scene.children[0];
        // dae.updateMatrix();
        // console.log(dae);
        game.ColadaTisch = new Physijs.BoxMesh(collada.scene.children[0].geometry, ColadaTischMaterial, 0);
        // game.ColadaTisch._physijs.collision_flags = 4;
        // COLLISION IST ZUM BUGFIXING NOCH DEAKTIVIERT
        game.szene.add(game.ColadaTisch);
        // Collada Table Alpha zur Szene hinzufuegen
    });
};

