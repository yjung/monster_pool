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