class TimedObject {

	constructor(nameIn)
	{
		this.name = nameIn
		this.isRecording = false;
		this.dateBegin = Date.now();
		this.timeElapsed = 0;
		this.dateStop = 0;
		this.achieved = false;
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
}