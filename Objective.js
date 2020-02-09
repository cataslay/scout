class Objective {
	constructor(nameIn)
	{
		this.name = nameIn;
		this.objectCountTotal = 0;
		this.objectCountModified = 0;
		this.pointValue = 0;
		
	}
	
	increaseObject()
	{
		objectCount +=pointValue;
	}
	increaseObjectMod(mult){
		objectCountModified += pointValue * multi;
	}
	 getPointValue()
	{
		return pointValue;
	}
}