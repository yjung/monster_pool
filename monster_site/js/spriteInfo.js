function spriteErstellen(x, y, z, points)
{
	//spriteErstellen(13, 20, 1, 30);
	var canvasPoints = document.createElement('canvas');
	canvasPoints.width/=2;
	canvasPoints.height/=8;
	
	var context = canvasPoints.getContext('2d');
	//context.font = "Bold 20px Arial";
	context.font = "Bold 20px 'Comic Sans MS'";
	context.fillStyle = "rgba(255,255,255,0.95)";
    context.fillText('Points: '+points+'!', 5, 17);
    
    
    // canvas contents will be used for a texture
	var textureText = new THREE.Texture(canvasPoints);
	textureText.needsUpdate = true;
	var backmaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
	
	var materialText = new THREE.MeshBasicMaterial( {map: textureText, side:THREE.FrontSide } );
	
    materialText.transparent = false;

     var spriteFrontGeometry = new THREE.PlaneGeometry(canvasPoints.width/14, canvasPoints.height/14);
	 var spriteBackGeometry = new THREE.PlaneGeometry(canvasPoints.width/14, canvasPoints.height/14);
	 
	 spriteBackGeometry.applyMatrix( new THREE.Matrix4().makeRotationY( Math.PI ) );
	 
	 spriteObject = new THREE.Object3D();
	 
	 
	 spriteFrontMesh = new THREE.Mesh(spriteFrontGeometry, materialText );
	 spriteObject.add(spriteFrontMesh);
	 spriteBackMesh = new THREE.Mesh(spriteBackGeometry, materialText );
	 spriteObject.add( spriteBackMesh );
	 
	 spriteObject.position.set(x, y, z);
	 game.szene.add( spriteObject );

	window.setTimeout(function() {
		removeSprite(spriteObject);
		}, 2000);
}

function updateSprite(){
	//Update Sprite to look at camera
	var pLocal = new THREE.Vector3( 0, 0, -1 );
	var pWorld = pLocal.applyMatrix4( game.kamera.matrixWorld );
	var dir = pWorld.sub( game.kamera.position ).normalize();
	console.log(dir);
}
function removeSprite(spriteObject)
{
	game.szene.remove(spriteObject);
}

/*function escribirCanvas()
{
	$("#viewport").append("<canvas id='canvasPoints'></div>");
	var mainCanvas = document.getElementsByTagName("canvas")[0];
	var width = mainCanvas.width;
	var height= mainCanvas.height;	
	var canvasPoints = document.getElementById("canvasPoints");
	$("#canvasPoints").css("left",width/2-150);
	$("#canvasPoints").css("top",height/2-40);
	canvasPoints.width=60;
	canvasPoints.height=15;
	
	var context1 = canvasPoints.getContext('2d');
	context1.font = "Bold 10px Arial";
	context1.fillStyle = "rgba(255,0,0,0.95)";
    context1.fillText('Points: 50!', 0, 8);
}*/
