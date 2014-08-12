function spielEnden()
{
	
	$("#info").hide();
	$("#gameEnde").css("visibility","visible");
	$( "#finalScore" ).text(game.scoreCounter);
	//$("#viewport").children().remove();
	$("#viewport").css("visibility","hidden");
	console.log("Ende");
}
