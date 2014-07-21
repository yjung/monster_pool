function erstelleTastaturSteuerung() {
	return new THREEx.KeyboardState();
}

function checkKeyboard(){
	if(game.keyboard.pressed("x")){
		console.log("Queue-Stoss");
		applyForce();
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
