/**
 * @author Juan
 */


function loecherTrigger()
{
	//1. Collider-Boxen Erstellen (Ghosts)
	//1.1 6 Boxen erstellen (Wo?)	
	lochColliderErstellen(-13, 16, -25, 30);
	lochColliderErstellen(13, 16, -25, 30);
	lochColliderErstellen(-13, 16, 1, 10);
	lochColliderErstellen(13, 16, 1, 10);
	lochColliderErstellen(-13, 16, 26, 30);
	lochColliderErstellen(13, 16, 26, 30);
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
			soundEffekt("ball-loch");	
		  	window.setTimeout(whiteCollideHole, 2000);
		  	setTimer("White Ball is in the hole! Wait: ",2);
		 }
		 else
		 {
		 	monsterCollideHole(object);
		 }
	  
    });
    
     function whiteCollideHole() {
 	
  		  positionBall(0,22,15);	
	  
    }

	function monsterCollideHole(object){
		  game.szene.remove( object); //3. Remove Kugel (game-szene remove)	  	
		  game.monsterCounter -= 1; //4. Counter von 15 bis 0 aktualisieren
		  game.scoreCounter += points;
		  spriteErstellen(x, y+5, z, points);
		  console.log('x='+x);
		  console.log('y='+y);
		  console.log('z='+z);
		  console.log('points='+points);
		  $( "#points" ).text(game.scoreCounter);
		  $( "#balls" ).text(game.monsterCounter);
		  soundEffekt("ball-loch");
	
	}
}
