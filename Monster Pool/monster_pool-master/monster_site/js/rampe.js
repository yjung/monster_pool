function erstelleRampe(loader, xPosition, yPosition, zPosition, yRotation, rechts)
{

    var ColladaLoader = new THREE.ColladaLoader();
    var rechtsX = -0.250;
    var rechtsZ = 0.21;
    var linksX = 0.32;
    var linksZ = 0.31;

    // Slider einladen
    ColladaLoader.load('assets/dae/rampe_a04.dae', function (collada)
    {
        var modelScene = collada.scene;
        // console.log(modelScene);
        var rampenbestandteile = 1;
        var szenenbestandteile = modelScene.children.length;
        /* Geometrie aus der .dae-Szene extrahieren*/
        var modelGeometry = modelScene.children[0].children[0].geometry;
        var modelMaterial = modelScene.children[0].children[0].material;
        // Referenz auf Geometrie von Objekt 1 der eingeladenen .dae-Szene
        var rampe = new THREE.Mesh(modelGeometry, new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("assets/dae/tex/Rampe_Tex.png"), shading: THREE.SmoothShading})
//    	erstelleCelShadingMaterial(
//    		"rampeMat",						// Bezeichnung
//    		THREE.ImageUtils.loadTexture( "assets/dae/tex/Rampe_Tex.png" ),								// Textur
//    		new THREE.Vector3(1,1,1)		// Farbe
//    		)
                );
        // var rampe = new THREE.Mesh(modelGeometry, pBlueWireframeT);

        rampe.position.x = xPosition;
        rampe.position.y = yPosition;
        rampe.position.z = zPosition;
        rampe.rotation.y = yRotation;
        rampe.scale.x = 50.0;
        rampe.scale.y = 50.0;
        rampe.scale.z = 50.0;
        game.szene.add(rampe);

        var collider = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 4, 1.9), pTransparentT, 0);
        collider.position.y = rampe.position.y - 0.5;

        if (rechts == true)
        {
            collider.position.x = rampe.position.x + rechtsX;
            collider.position.z = rampe.position.z + rechtsZ;
        }
        else
        {
            collider.position.x = rampe.position.x + linksX;
            collider.position.z = rampe.position.z + linksZ;
        }

        collider.rotation.z = 1.33;
        collider.rotation.y = rampe.rotation.y;
        game.szene.add(collider);
    });
}
;