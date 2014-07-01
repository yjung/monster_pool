function erstelleTastaturSteuerung() {
	return new THREEx.KeyboardState();
}

function checkKeyboard(){
	if(game.keyboard.pressed("x")){
		console.log("Queue-Stoss");
		applyForce();
	}
}
