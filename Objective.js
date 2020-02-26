class Objective {
	constructor(nameIn,multIn,multModIn)
	{
		this.timeMod = 15000; // Time that modifier stops working, so for example autonomous ends at 15 seconds in
		this.name = nameIn;
		this.objectCountTotal = 0;
		this.objectCountModified = 0;
		this.pointValue = 0;
		this.mult = multIn;
		this.mult = multModIn;
		
	}
	constructor(nameIn,multModIn)
	{
		this.timeMod = 15000;
		this.name = nameIn;
		this.objectCountTotal = 0;
		this.objectCountModified = 0;
		this.pointValue = 0;
		this.mult = 1;
		this.mult = multModIn;
		
	}
	constructor(nameIn)
	{
		this.timeMod = 15000;
		this.name = nameIn;
		this.objectCountTotal = 0;
		this.objectCountModified = 0;
		this.pointValue = 0;
		this.mult = 1;
		this.multMod = 2;
		
	}
	
	increaseObject()
	{
		objectCount += pointValue * mult;
	}
	decreaseObject()
	{
		objectCount -= pointValue * mult;
	}
	increaseObjectMod()
	{
		objectCount += pointValue * multMod;
	}
	decreaseObjectMod()
	{
		objectCount -= pointValue * multMod;
	}
	 getPointValue()
	{
		return pointValue;
	}
}