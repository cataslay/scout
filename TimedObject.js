class TimedObject {

	constructor(nameIn)
	{
		this.name = nameIn
		this.isRecording = false;
		this.dateBegin = Date.now();
		this.timeElapsed = 0;
		this.dateStop = 0;
		this.achieved = false;
		// this.stage = 0; For games where there can be multiple states for a timed objects, such as multiple heights to climb to
	}
	beginRecord()
	{
		dateBegin = Date.now();
		isRecording = true;
	}
	stopRecord()
	{
		if(this.isRecording){
		timeElapsed = (dateBegin / 1000) - (Date.now() / 1000);}
		isRecording = false;
	}
	reset()
	{
		timeElapsed = 0; 
		achieved = false;
		isRecording = false;
	}
	//need to make sure that these objects can be converted into JSON before sent over.
}