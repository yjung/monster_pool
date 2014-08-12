function neustarten()
{
	
	game.monsterCounter=15;
	game.scoreCounter=0;
	//animate = true;
	
	$( "#points" ).text(game.scoreCounter);
    $( "#balls" ).text(game.monsterCounter);                    
	$("#viewport").css("visibility","visible");
	ladeKugeln();
	//game.kamera.position.set(0,20,3);
	game.szene.remove( game.whiteBall);
	game.szene.remove( game.queue);
	queueLaden();
	createWhiteBall(0,22,15);
	//game.whiteBall.position.set(0,22,15);	
	mainloop();
	
}
