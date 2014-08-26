function neustarten()
{
	
	game.monsterCounter=game.ballNumber;
	game.scoreCounter=0;
	//animate = true;
	$("#einstellungContent").css("visibility","visible");
	$("#einstellungStart").css("visibility","hidden");
	$( "#points" ).text(game.scoreCounter);
    $( "#balls" ).text(game.ballNumber);
    $("#gameEnde").css("visibility","hidden");                    
	$("#viewport").css("visibility","visible");
	removeAllBalls();
	ladeKugeln();
	loadMonsters();	
	//game.kamera.position.set(0,20,3);
	game.szene.remove( game.whiteBall);
	game.szene.remove( game.queue);
	queueLaden();
	createWhiteBall(0,22,15);
	//game.whiteBall.position.set(0,22,15);	
	//mainloop();
	
}

function removeAllBalls(){
	//console.log(game.ballNumber);
	for(i=0;i<game.ballNumber;i++)
	{
		object = game.szene.getObjectByName('ball-'+i);
		if(typeof(object) !== 'undefined'){
			game.szene.remove( object);
		}
	}
}
