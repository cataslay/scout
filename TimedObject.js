class TimedObject {

	constructor()
	{
		
	}

	var timeElapsed = 0;
	var dateBegin;
	
	if("Start input is recieved")
	{
		dateBegin = Date.now();
	}
	if("Stop input is recieved")
	{
		timeElapsed = (dateBegin / 1000) - (Date.now() / 1000);
	}
	if("reset input")
	{
		timeElapsed = 0;
	}
}