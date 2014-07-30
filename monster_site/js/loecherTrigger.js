/**
 * @author Juan
 */


function loecherTrigger()
{
	//1. Collider-Boxen Erstellen (Ghosts)
	//1.1 6 Boxen erstellen (Wo?)
	lochColliderErstellen(-13, 16, -25);
	lochColliderErstellen(13, 16, -25);
	lochColliderErstellen(-13, 16, 1);
	lochColliderErstellen(13, 16, 1);
	lochColliderErstellen(-13, 16, 26);
	lochColliderErstellen(13, 16, 26);
	
	
	//Zum Testen
	lochColliderErstellen(0, 20, -20);
	lochColliderErstellen(0, 21, -20);
	lochColliderErstellen(0, 22, -20);
	lochColliderErstellen(0, 23, -20);
	
}

function lochColliderErstellen(x, y, z)
{
	//Create material with low restitution and friction
	var material = Physijs.createMaterial(new THREE.MeshPhongMaterial({
        color : 0x00FF00,
        wireframe : false
    }), 1, 0);  
    
	//Create geometry - Define Size (radiusTop, radiusBottom, height)
	var cyl = new THREE.CylinderGeometry(1.7,1.7,1);
	
	//Create Box
	var colliderBox = new Physijs.BoxMesh(cyl, material, 0);
	
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
	      console.log(monsterCounter);
	  }
	  else
	  {
  		  console.log('BOLA BLANCA!!');
	  }
	  
    });
}
