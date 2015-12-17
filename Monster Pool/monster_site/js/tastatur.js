function erstelleTastaturSteuerung() {
	return new THREEx.KeyboardState();
}

function checkKeyboard(){
    if(!game.whiteBall.inBewegung){
	if(game.keyboard.pressed("x")){
            
        window.setInterval(console.log(game.whiteBall._physijs.linearVelocity.length()), 1000);
		//console.log(game.whiteBall);
			console.log("Queue-Stoss");
			soundEffekt("ball-queue");
			applyForce(false, 100);
		
            }
	}
        

	if(game.keyboard.pressed("s")){
		console.log("Stop");	
		// stop();
	}

	if(game.keyboard.pressed("a")){
		console.log("Start");
		// start();
	}
        if(game.keyboard.pressed("d")){
		console.log("neu");
                positionBall(0,18.75,15);
                
                

    }
}
