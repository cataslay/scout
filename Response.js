class Response {

	constructor(nameIn)
	{
		this.name = nameIn;
		this.values = [];
		this.scale = 0;	// The maximum and minimum can be changed on the javascript side
	}
	constructor(nameIn,values)
	{
		this.values = values;
		this.name = nameIn;
		this.scale = 0;	// The maximum and minimum can be changed on the javascript side
	}

	setScale(input){
		scale = input;
	}
	getScale(input){
		return scale;
	}
	makeElement(){
		var element = new Element();
	}
}