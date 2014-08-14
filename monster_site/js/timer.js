function setTimer(message, seconds)
{
	$("#viewport").append("<div id='divTimer'></div>");
	var canvas = document.getElementsByTagName("canvas")[0];
	var width = canvas.width;
	var height= canvas.height;	
	$( "#divTimer" ).css("left",width/2-150);
	$( "#divTimer" ).css("top",height/2-40);
	$( "#divTimer" ).text(message);
	$("#divTimer").append("<div id='divSeconds'></div>");
	updateTimer(seconds);
	
	function updateTimer()
	{
		if(seconds<=0)
		{
			removeTimer();
		}
		else
		{
			if(seconds>1)
			{
				text="seconds";
			}
			else
			{
				text="second";
			}
			$("#divSeconds").text(seconds+" "+text);
			seconds-=1;
			window.setTimeout(updateTimer, 1000);
		}
	}
}

function removeTimer()
{
	$( "#divTimer" ).detach();
}
