/**
 * @author Juan
 */


function loecherTrigger()
{
	//1. Collider-Boxen Erstellen (Ghosts)
	//1.1 6 Boxen erstellen (Wo?)
	lochColliderErstellen(0, 20, -20);
	lochColliderErstellen(-5, 20, -20);
	lochColliderErstellen(5, 20, -20);
	lochColliderErstellen(-5, 20, -15);
	lochColliderErstellen(5, 20, -15);

	//2. Kollission Registrieren (collission_flag=4)
	
	//3. Remove Kugel (game-szene remove)
	
	//4. Counter von 15 bis 0 aktualisieren
	
}

function lochColliderErstellen(x, y, z)
{
	//Create material with low restitution and friction
	var material = Physijs.createMaterial(new THREE.MeshPhongMaterial({
        color : 0x00FF00,
        wireframe : false
    }), 1, 0);  
    
	//Create geometry - Define Size (radiusTop, radiusBottom, height)
	var cyl = new THREE.CylinderGeometry(1,1,3);
	
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
	      game.szene.remove( object);
		  monsterCounter -= 1;
	      console.log(monsterCounter);
	  }
	  else
	  {
  		  console.log('BOLA BLANCA!!');
	  }
	  
    });
}
