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
	
	game.szene.add(colliderBox);
	
	
	colliderBox.addEventListener('collision', function(object) {
	  if(object !== game.whiteBall)
	  {	  	  
	      game.szene.remove( object); //3. Remove Kugel (game-szene remove)	  	
		  monsterCounter -= 1; //4. Counter von 15 bis 0 aktualisieren
		  scoreCounter += points;
	      console.log(monsterCounter);
	      console.log("scoreCounter:");
	      console.log(scoreCounter);
	  }
	  else
	  {
  		  console.log('BOLA BLANCA!!');
	  }
	  
    });
}
