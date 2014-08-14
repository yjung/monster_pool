function ladeMonster() {

	var loader = new THREE.JSONLoader();

    loader.load('assets/json/Bernd5Redu.js', function (geometry, materials) {

      var sphere = new Physijs.SphereMesh(
        new THREE.SphereGeometry(0.75, 16, 16),
        pTransparentT,
        100
      );

    sphere.add(new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials)));

    sphere.position.x = 5;
    sphere.position.y = 30;
    sphere.position.z = 0;
    sphere.castShadow = true;

    game.szene.add(sphere);
    });
};

function ladeAnimation() { 

  var loader = new THREE.JSONLoader(); 
  loader.load("assets/json/cubeTutorial_004.js", function (geometry, materials) {
    game.monster.skinnedMesh = new THREE.SkinnedMesh (geometry, new THREE.MeshFaceMaterial(materials));

    var materials = game.monster.skinnedMesh.material.materials;

    for (var i = 0, length = materials.length; i < length; i++) {
      var mat = materials[i];
      mat.skinning = true;
    }

    game.monster.skinnedMesh.position.x = 5;
    game.monster.skinnedMesh.position.y = 30;
    game.monster.skinnedMesh.position.z = 10;

    // console.log("skinny");
    // console.log(game.monster.skinnedMesh);

    game.szene.add(game.monster.skinnedMesh);

    THREE.AnimationHandler.add(game.monster.skinnedMesh.geometry.animation);
    game.monster.animation = new THREE.Animation(game.monster.skinnedMesh, "ArmatureAction", THREE.AnimationHandler.CATMULLROM);
    game.monster.animation.play();
  });
}