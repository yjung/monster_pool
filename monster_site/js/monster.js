var grid = [
              '#','.','#','.','#','.','#','.','#',
              '~','#','.','#','.','#','.','#','~',
              '~','~','#','.','#','.','#','~','~',
              '~','~','~','#','.','#','~','~','~',
              '~','~','~','~','#','~','~','~','~',
           ];
var offset = 9;
var monsterAmount = 15;
var gridSymbols =  {
  '#': 1.5,
  '.': 0.25,
  '~': 0.75,
};
var monsterAssets = [
                  'assets/json/Bernd5Redu.js'
               ];
function loadMonsters() {
  var geometry = new THREE.BoxGeometry( 8.5, 1.55, 6.25);
  var material = new THREE.MeshBasicMaterial(pWhiteWireframeT);
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x = 0;
  cube.position.y = 18.75;
  cube.position.z = -15;
  game.szene.add(cube);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '0x';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color = parseInt(color);
    return color;
}

function prepareMonsters() {
  // get Random Monster asset
  // get random color
  // determine position of monster
  // load monster
}

function placeMonsters() {
  var gridPosition = new THREE.Vector3(0, 18.75, -15);
  var ballPosition = new THREE.Vector3(0, 0, 0);
  var j = 1;
  var k = 1;
  ballPosition.x += gridPosition.x;
  ballPosition.y += gridPosition.y;
  ballPosition.z += gridPosition.z;

  for (var i = 0; i < grid.length; i++) {
    if (i === 0) {
      console.log(k+".Reihe:");    
      switch (grid[i]) {
        case '#':
            console.log(grid[i]);    
            ballPosition.x += 1.5;
            j += 1;
            break;
        case '.':
            console.log(grid[i]);    
            ballPosition.x += 0.25; 
            break;
        case '~':
            console.log(grid[i]);    
            ballPosition.x += 0.75;
            break;
      }
    } else if ((i % offset) === 0) {
      ballPosition.z += 1.5;
      ballPosition.x = 0;
      k += 1;
      console.log(k+".Reihe:");
      switch (grid[i]) {
        case '#':
            console.log(grid[i]);    
            loadMonster('assets/json/Bernd5Redu.js', 0x0000ff, 'ball'+j, ballPosition);
            j += 1;
            break;
        case '.':
            console.log(grid[i]);    
            ballPosition.x += 0.25; 
            break;
        case '~':
            console.log(grid[i]);    
            ballPosition.x += 0.75;
            break;
      }
    }
    else {
      switch (grid[i]) {
        case '#':
            console.log(grid[i]);    
            loadMonster('assets/json/Bernd5Redu.js', 0x0000ff, 'ball'+j, ballPosition);
            ballPosition.x += 1.5;
            j += 1;
            break;
        case '.':
            console.log(grid[i]);    
            ballPosition.x += 0.25; 
            break;
        case '~':
            console.log(grid[i]);    
            ballPosition.x += 0.75;
            break;
      }
    }
  }
}

/*function changePosition(char, position) {
  if (char === )

  return position;
}
*/
function loadMonster(path, color, name) {

  console.log(path);
  console.log(color);
  monsterReturned = "Hello";


  var loader = new THREE.JSONLoader();
  loader.load(path, function (geometry, materials) {

  });

  return monsterReturned;
};

function loadMonsterMesh(url) {
  return function(geometry, materials) {
        // Glow-Material definieren
    var glowMaterial = new THREE.ShaderMaterial( 
    {
      uniforms: 
      { 
        "c":   { type: "f", value: 0.0 },
        "p":   { type: "f", value: 50.0 },
        glowColor: { type: "c", value: new THREE.Color(color) },
        viewVector: { type: "v3", value: game.kamera.position }
      },
      vertexShader:   GlowShader.vertexShader,
      fragmentShader: GlowShader.fragmentShader,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    // Erstelle Kugel fuer
    var sphere = new Physijs.ConvexMesh(
        new THREE.SphereGeometry(0.75, 16, 16),
        glowMaterial,
        100
      );
    sphere.add(new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials)));

    sphere.addEventListener('collision', function( other_object,
      relative_velocity, relative_rotation, contact_normal ) {
        if (other_object === game.whiteBall || pattern.test(other_object.name)) {
             animiereMonsterSphere(sphere);
             soundEffekt("ball-ball");
        } 
    });
  }
}

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
      pValue: 50.0
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
    game.monsterBalls.skinnedMesh = new THREE.SkinnedMesh (geometry, new THREE.MeshFaceMaterial(materials));

    var materials = game.monsterBalls.skinnedMesh.material.materials;

    for (var i = 0, length = materials.length; i < length; i++) {
      var mat = materials[i];
      mat.skinning = true;
    }

    game.monsterBalls.skinnedMesh.position.x = 5;
    game.monsterBalls.skinnedMesh.position.y = 30;
    game.monsterBalls.skinnedMesh.position.z = 10;

    // console.log("skinny");
    // console.log(game.monsterBalls.skinnedMesh);

    game.szene.add(game.monsterBalls.skinnedMesh);

    THREE.AnimationHandler.add(game.monsterBalls.skinnedMesh.geometry.animation);
    game.monsterBalls.animation = new THREE.Animation(game.monsterBalls.skinnedMesh, "ArmatureAction", THREE.AnimationHandler.CATMULLROM);
    game.monsterBalls.animation.play();
  });
}