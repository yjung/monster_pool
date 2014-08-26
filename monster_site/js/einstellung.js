document.addEventListener('DOMContentLoaded', function () {
  	document.querySelector('#checkSoundEffects').addEventListener('change', function(){
        if (this.checked) {
            game.effectSound = true;
        }else{
        	game.effectSound = false;
        }
    });
    
    // document.querySelector('#checkFullscreen').addEventListener('change', function(){
        // if (this.checked) {
            // value=true;
        // }else{
        	// value=false;
        // }
        // if (value && THREEx.FullScreen.available() && !THREEx.FullScreen.activated()) {
			// THREEx.FullScreen.request(document.getElementById("viewport"));
			// $( "#viewport" ).addClass( "vollbild" );
			// $( "canvas" ).addClass( "vollbild" );
			// onWindowResize();
// 			
		// } else {
			// THREEx.FullScreen.cancel();
			// $( "#viewport" ).removeClass( "vollbild" );
			// $( "canvas" ).removeClass( "vollbild" );
			// $( "canvas" ).addClass( "canvas" );
			// onWindowResize();
		// }
    // });
    
    document.querySelector('#checkSound').addEventListener('change', function(){
        if (this.checked) {
            soundAmbience('ambience');
			game.ambientSound.volume = 0.5;
            game.soundAn = true;
        }else{
        	game.ambientSound.volume = 0;
        	game.soundAn = false;
        }
    });
});

    
