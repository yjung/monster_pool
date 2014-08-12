/**
 * @author Juan
 */


function loecherTrigger()
{
	//1. Collider-Boxen Erstellen (Ghosts)
	//1.1 6 Boxen erstellen (Wo?)	
	lochColliderErstellen(-13, 16, -25, 30);
	lochColliderErstellen(13, 16, -25, 30);
	lochColliderErstellen(-13, 16, 1, 20);
	lochColliderErstellen(13, 16, 1, 20);
	lochColliderErstellen(-13, 16, 26, 10);
	lochColliderErstellen(13, 16, 26, 10);
}

function lochColliderErstellen(x, y, z, points)
{
	//Create geometry - Define Size (radiusTop, radiusBottom, height)
	var cyl = new THREE.CylinderGeometry(1.7,1.7,1);
	
	//Create Box
	var colliderBox = new Physijs.BoxMesh(cyl, lTransparentT, 0);
	
	//Position Box
	colliderBox.position.x=x;
	colliderBox.position.y=y;
	colliderBox.position.z=z;
	
	colliderBox.collision_flags = 4;
	game.szene.add(colliderBox);
	
	
	colliderBox.addEventListener('collision', function(object) {
		if(object === game.whiteBall){
		  	window.setTimeout(whiteCollideHole, 2000);
		 }
		 else
		 {
		 	game.szene.remove( object); //3. Remove Kugel (game-szene remove)	  	
		  game.monsterCounter -= 1; //4. Counter von 15 bis 0 aktualisieren
		  game.scoreCounter += points;
		  $( "#points" ).text(game.scoreCounter);
		  $( "#balls" ).text(game.monsterCounter);
	      /*console.log(monsterCounter);
	      console.log("scoreCounter:");
	      console.log(scoreCounter);*/
		 	//monsterCollideHole(object);
		 }
	  
    });
    
     function whiteCollideHole() {
 	
  		  console.log('BOLA BLANCA!!');
  		  positionBall(0,22,15);
	  
    }

	function monsterCollideHole(object){
		  game.szene.remove( object); //3. Remove Kugel (game-szene remove)	  	
		  game.monsterCounter -= 1; //4. Counter von 15 bis 0 aktualisieren
		  game.scoreCounter += points;
		  $( "#points" ).text(scoreCounter);
		  $( "#balls" ).text(monsterCounter);
	      console.log(monsterCounter);
	      console.log("scoreCounter:");
	      console.log(scoreCounter);
	
	}
}
