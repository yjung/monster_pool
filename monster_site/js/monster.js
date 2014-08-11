function ladeMonster() {

	var loader = new THREE.JSONLoader();

    loader.load('assets/json/bernd.js', function (geometry, materials) {

      game.monster.bernd = new Physijs.SphereMesh(
        geometry,
        new THREE.MeshFaceMaterial(materials),
        100
      );

      game.monster.bernd.rotation.y = -Math.PI / 2;

      for (var i = 0; i < materials.length; i++) {
        var mat = materials[i];
      }
      console.log(game.monster.bernd);

    game.monster.bernd.position.x = 5;
    game.monster.bernd.position.y = 30;
    game.monster.bernd.position.z = 0;

    game.szene.add(game.monster.bernd);
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