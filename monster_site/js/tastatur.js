function erstelleTastaturSteuerung() {
	return new THREEx.KeyboardState();
}

function checkKeyboard(){
	if(game.keyboard.pressed("x")){
		if(!game.whiteBall.inBewegung){
			console.log("Queue-Stoss");
			soundEffekt("ball-queue");
			applyForce(false, 50);
		}
	}

	if(game.keyboard.pressed("s")){
		console.log("Stop");
		stop();
	}

	if(game.keyboard.pressed("a")){
		console.log("Start");
		start();
	}
}
