document.addEventListener('DOMContentLoaded', function () {
  	document.querySelector('#checkSoundEffects').addEventListener('change', function(){
        if (this.checked) {
            console.log('checked se');
            game.effectSound = true;
        }else{
        	console.log('unchecked se');
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
            console.log('checked s');
            soundAmbience('ambience');
			game.ambientSound.volume = 0.5;
            game.soundAn = true;
        }else{
        	console.log('unchecked s');
        	game.ambientSound.volume = 0;
        	game.soundAn = false;
        }
    });
});

    
