var grids = {
              "triangle": { 
                        "grid": [
                          "#",".","#",".","#",".","#",".","#",
                          "~","#",".","#",".","#",".","#","~",
                          "~","~","#",".","#",".","#","~","~",
                          "~","~","~","#",".","#","~","~","~",
                          "~","~","~","~","#","~","~","~","~"
                        ],
                        "gridSymbols": {
                          "#": 1.5,
                          ".": 0.25,
                          "~": 0.75
                        },
                        "offset": 9,
                        "gridPosition": {
                          "x": -4.25,
                          "y": 18.75,
                          "z": -18
                        },
                        "placeSymbol": "#",
                        "rowDistance": 1.5
                      },
              
              "triangleReversed": { 
                        "grid": [
                          "~","~","~","~","#","~","~","~","~",
                          "~","~","~","#",".","#","~","~","~",
                          "~","~","#",".","#",".","#","~","~",
                          "~","#",".","#",".","#",".","#","~",
                          "#",".","#",".","#",".","#",".","#"
                         ],
                        "gridSymbols": {
                          "#": 1.5,
                          ".": 0.25,
                          "~": 0.75
                        },
                        "offset": 9,
                        "gridPosition": {
                          "x": -5.25,
                          "y": 18.75,
                          "z": -18
                        },
                        "placeSymbol": "#",
                        "rowDistance" : 1.5
                      },

              "block": { 
                        "grid": [
                          "#",".","#",".","#",".","#",".","#",
                          "#",".","#",".","#",".","#",".","#",
                          "#",".","#",".","#",".","#",".","#",
                          "#",".","#",".","#",".","#",".","#",
                          "#",".","#",".","#",".","#",".","#"
                         ],
                        "gridSymbols": {
                          "#": 1.5,
                          ".": 0.25,
                          "~": 0.75
                        },
                        "offset": 9,
                        "gridPosition": {
                          "x": -5.25,
                          "y": 18.75,
                          "z": -18
                        },
                        "placeSymbol": "#",
                        "rowDistance" : 1.5
                      },

              "chess": { 
                        "grid": [
                          "#","+","#","+","#","+","#","+","#",
                          "+","#","+","#","+","#","+","#","+",
                          "#","+","#","+","#","+","#","+","#",
                          "+","#","+","#","+","#","+","#","+",
                          "#","+","#","+","#","+","#","+","#"
                         ],
                        "gridSymbols": {
                          "#": 1.5,
                          ".": 0.25,
                          "~": 0.75
                        },
                        "offset": 9,
                        "gridPosition": {
                          "x": -5.25,
                          "y": 18.75,
                          "z": -18
                        },
                        "placeSymbol": "#",
                        "rowDistance" : 1.5
                      },
              
              "diamond": { 
                        "grid": [
                          "~","~","~","~","#","~","~","~","~",
                          "~","~","~","#",".","#","~","~","~",
                          "~","~","#",".","#",".","#","~","~",
                          "~","#",".","#",".","#",".","#","~",
                          "#",".","#",".","#",".","#",".","#",
                          "~","#",".","#",".","#",".","#","~",
                          "~","~","#",".","#",".","#","~","~",
                          "~","~","~","#",".","#","~","~","~",
                          "~","~","~","~","#","~","~","~","~"
                         ],
                        "gridSymbols": {
                          "#": 1.5,
                          ".": 0.25,
                          "~": 0.75
                        },
                        "offset": 9,
                        "gridPosition": {
                          "x": -5.25,
                          "y": 18.75,
                          "z": -18
                        },
                        "placeSymbol": "#",
                        "rowDistance" : 1.5
                      },
              
              "diamondWithHole": { 
                        "grid": [
                          "~","~","~","~","#","~","~","~","~",
                          "~","~","~","#",".","#","~","~","~",
                          "~","~","#",".","#",".","#","~","~",
                          "~","#",".","#",".","#",".","#","~",
                          "#",".","+",".","#",".","+",".","#",
                          "~","#",".","#",".","#",".","#","~",
                          "~","~","#",".","#",".","#","~","~",
                          "~","~","~","#",".","#","~","~","~",
                          "~","~","~","~","#","~","~","~","~"
                         ],
                        "gridSymbols": {
                          "#": 1.5,
                          ".": 0.25,
                          "~": 0.75,
                          "+": 1.5
                        },
                        "offset": 9,
                        "gridPosition": {
                          "x": -5.25,
                          "y": 18.75,
                          "z": -18
                        },
                        "placeSymbol": "#",
                        "rowDistance" : 1.5
                      },

              "spaceInvader": { 
                        "grid": [
                          "+","+","#",".","+","+","+","+","+","#",".","+","+","+","+","+","+","+","+","+","+",
                          "+","+","+","#","+","+","+","#","+","+","+","+","+","+","+","+","+","+","+","+","+",
                          "+","+","#",".","#",".","#",".","#",".","#",".","#",".","#","+","+","+","+","+","+",
                          "+","#",".","#",".","+","#",".","#",".","#",".","+","#",".","#","+","+","+","+","+",
                          "#",".","#",".","#",".","#",".","#",".","#",".","#",".","#",".","#",".","#",".","#",
                          "#",".","+","#",".","#",".","#",".","#",".","#",".","#",".","#",".","+","#",".","+",
                          "#",".","+","#",".","+","+","+","+","+","#",".","+","+","#",".","+","+","+","+","+",
                          "+","+","+","#",".","#",".","+","#",".","#",".","+","+","+","+","+","+","+","+","+"
                         ],
                        "gridSymbols": {
                          "#": 1.5,
                          ".": 0.25,
                          "+": 1.5
                        },
                        "offset": 21,
                        "gridPosition": {
                          "x": -10.5,
                          "y": 18.75,
                          "z": -10
                        },
                        "placeSymbol": "#",
                        "rowDistance" : 1.75
                      }
}

var chosenGrid    = grids["triangle"];
var grid          = chosenGrid["grid"];
var offset        = chosenGrid["offset"];
var gridPosition  = chosenGrid["gridPosition"];
var gridSymbols   = chosenGrid["gridSymbols"];
var rowDistance   = chosenGrid["rowDistance"];
var placeSymbol   = chosenGrid["placeSymbol"];
var ballMargin    = chosenGrid["ballMargin"];

var ballname      = "ball";
var monsterAssets = [
                  "assets/json/Bernd5Redu.js",
                  "assets/json/Sumoaqua.js",
    ];
var colorPalettes = {
                      "c64": [
                        0x000000,
                        0xffffff,
                        0x883932,
                        0x67b6bd,
                        0x8b3f96,
                        0x55a049,
                        0x40318d,
                        0xbfce72,
                        0x8b5429,
                        0x574200,
                        0xb86962,
                        0x505050,
                        0x787878,
                        0x94e089,
                        0x7869c4,
                        0x9f9f9f
                      ]
};
var chosenPalette = colorPalettes["c64"];

function loadMonsters() {
  var ballPosition = new THREE.Vector3(0, 0, 0);
  var i = 0;
  var j = 1;
  ballPosition.x += gridPosition.x;
  ballPosition.y += gridPosition.y;
  ballPosition.z += gridPosition.z;

  for (var i = 0; i < grid.length; i++) {
    if (i === 0) {
      ballPosition.x += gridSymbols[grid[i]];
    }
    else if (i % offset === 0) {
      ballPosition.x = gridPosition.x;
      ballPosition.z += rowDistance;
      ballPosition.x += gridSymbols[grid[i]];
    }
    else {
      ballPosition.x += gridSymbols[grid[i]];
    }

    if (grid[i] === placeSymbol) {
      loadMonster(
            monsterAssets[Math.floor(Math.random() * monsterAssets.length)],
            chosenPalette[Math.floor(Math.random() * chosenPalette.length)],
            ballname+j,
            ballPosition.clone()
      );
      j += 1;
    }
  }

/*  ballPosition.x += gridSymbols[grid[i]];
  do {
    if (i % offset === 0) {
      ballPosition.x = gridPosition.x;
      ballPosition.z += rowDistance;
      ballPosition.x += gridSymbols[grid[i]];
    }
    else {
      ballPosition.x += gridSymbols[grid[i]];
    }

    if (grid[i] === placeSymbol) {
      loadMonster(
            monsterAssets[Math.floor(Math.random() * monsterAssets.length)],
            chosenPalette[Math.floor(Math.random() * chosenPalette.length)],
            ballname+j,
            ballPosition.clone()
      );
      j += 1;
    }
  i += 1;
  } while (i < grid.length);*/
}
 
function loadMonster(path, color, name, position) {
  var pattern = new RegExp("^ball");
  var loader = new THREE.JSONLoader();
  loader.load(path, function (geometry, materials) {
      var glowMaterial = new THREE.ShaderMaterial( 
      {
        uniforms: 
        { 
          "c":   { type: "f", value: 0.5 },
          "p":   { type: "f", value: 10.0 },
          glowColor: { type: "c", value: new THREE.Color(color) },
          // viewVector: { type: "v3", value: game.kamera.position }
          viewVector: { type: "v3", value: new THREE.Vector3(20,20,20) }
        },
        vertexShader:   GlowShader.vertexShader,
        fragmentShader: GlowShader.fragmentShader,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      var sphere = new Physijs.ConvexMesh(
          new THREE.SphereGeometry(0.75, 16, 16),
          glowMaterial,
          100
        );
      sphere.add(new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials)));

      sphere.addEventListener("collision", function( other_object,
        relative_velocity, relative_rotation, contact_normal ) {
          if (other_object === game.whiteBall || pattern.test(other_object.name)) {
               animiereMonsterSphere(sphere);
               soundEffekt("ball-ball");
          } 
      });

      sphere.position = position;

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