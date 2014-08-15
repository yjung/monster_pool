var grid = [
              '.','#','.','#','.','#','.','#','.','#','.',
              '.','.','#','.','#','.','#','.','#','.','.',
              '.','.','.','#','.','#','.','#','.','.','.',
              '.','.','.','.','#','.','#','.','.','.','.',
              '.','.','.','.','.','#','.','.','.','.','.',
           ];


function loadMonsters() {
  var x;
  var y;
  var z;
  loadMonster('assets/json/Bernd5Redu.js', 0xff0000, 'ball1', new THREE.Vector3(x, y, z));

  var geometry = new THREE.BoxGeometry( 8.5, 1.55, 6.25);
  var material = new THREE.MeshBasicMaterial(pWhiteWireframeT);
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x = 0;
  cube.position.y = 20;
  cube.position.z = -15;

  game.szene.add(cube);
}

function loadMonster(path, color, name, position) {

  console.log(path);
  console.log(color);
  console.log(name);

	var loader = new THREE.JSONLoader();

    loader.load(path, function (geometry, materials) {

    var glowMaterial = new THREE.ShaderMaterial( 
    {
        uniforms: 
      { 
        "c":   { type: "f", value: 0.0 },
        "p":   { type: "f", value: 10.0 },
        glowColor: { type: "c", value: new THREE.Color(color) },
        viewVector: { type: "v3", value: game.kamera.position }
      },
      // vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
      vertexShader:   GlowShader.vertexShader,
      fragmentShader: GlowShader.fragmentShader,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    }   );

    var sphere = new Physijs.SphereMesh(
        new THREE.SphereGeometry(0.75, 16, 16),
        glowMaterial,
        100
      );

    sphere.name = name;
    sphere.add(new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials)));

    sphere.addEventListener('collision', function( other_object,
      relative_velocity, relative_rotation, contact_normal ) {
        if (other_object === game.whiteBall || pattern.test(other_object.name)) {
             animiereMonsterSphere(sphere);
             soundEffekt("ball-ball");
        } 
      });

    console.log(typeof sphere.position);

    sphere.position = position;
    sphere.castShadow = true;

    game.szene.add(sphere);
    });
};

function animiereMonsterSphere (sphereObject) {
  var sphere = sphereObject;

  var cValue = sphere.material.uniforms["c"].value;
    var pValue = sphere.material.uniforms["p"].value;

    var currentValue = {
      cValue : sphere.material.uniforms["c"].value,
      pValue : sphere.material.uniforms["p"].value
    };

    var gradientTrans = {
      cValue: 0.0,
      pValue: 10.0
    };

    var gradientGlow = {
      cValue: 1.0,
      pValue: 0.2
    };

    tweenToGlow = new TWEEN.Tween(currentValue).to(gradientGlow, 20);
    tweenToTrans = new TWEEN.Tween(currentValue).to(gradientTrans, 1500);

    tweenToGlow.onUpdate(function() {
      sphere.material.uniforms["c"].value = currentValue.cValue;
      sphere.material.uniforms["p"].value = currentValue.pValue;
    });

    tweenToTrans.onUpdate(function() {
      sphere.material.uniforms["c"].value = currentValue.cValue;
      sphere.material.uniforms["p"].value = currentValue.pValue;
    });

    tweenToGlow.chain(tweenToTrans);
    //tweenToTrans.chain(tweenToGlow);

    tweenToGlow.start();
}

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