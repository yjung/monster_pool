function orbit(richtung) {
	switch (richtung) {
		case "stop":
			console.log(richtung);
			// orbitControls.rotateLeft(0);
			// orbitControls.rotateRight=false;
			// orbitControls.rotateup=false;
			// orbitControls.rotateDown=false;
			// richtung = 0;
			break;
		case "links":
			// Blah
			console.log(richtung);
			richtung = (-0.1);
			break;
		case "mitte":
			// orbitControls.rotateLeft(0);
			// orbitControls.rotateRight=false;
			// orbitControls.rotateRight=false;
			// Blah
			console.log(richtung);
			// richtung = (0);
			break;
		case "rechts":
			// orbitControls.rotateLeft=false;
			orbitControls.rotateRight(1);
			// Blah
			console.log(richtung);
			// richtung =(0.1);
			break;
	}
};