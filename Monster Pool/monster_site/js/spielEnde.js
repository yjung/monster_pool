function spielEnden()
{
	
	$("#info").hide();
	$("#einstellungContent").css("visibility","hidden");
	$("#einstellungStart").css("visibility","visible");
	$("#gameEnde").css("visibility","visible");
	$( "#finalScore" ).text(game.scoreCounter);
	$( "#contentwrapper" ).css("height","100%");
	//$("#viewport").children().remove();
	$("#viewport").css("visibility","hidden");
	console.log("Ende");
}
