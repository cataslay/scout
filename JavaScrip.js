
var t;
var pastActionsInverse = [];
var objs = {highBall : new Objective("highBall"), highBallInner : new Objective("highBallInner",2), lowBall : new Objective("lowBall")};
var resps = {bot : new Response("bot"), driveTrain : new Response("driveTrain") , climbPos : new Response("climbPos"), driving : new Response("driving")};
var techs = {death : new Response("drive"), baseLine : new Technical("baseline")};
var timed = {climb: new TimedObject("climb"), colorRec: new TimedObject("colorRecognition"), rotControl: new TimedObject("rotControl")};
// Make the code auto fill out html elements according to whats in the sets and then use those html elements to use their representative functions for what they are.
var status_sw1 = 0;
var status_sw2 = 0;
var status_sw3 = 0;

var time_sw1 = 0;
var time_sw2 = 0;
var time_sw3 = 0;

var startBtn1 = document.getElementById("start1");
var startBtn2 = document.getElementById("start2");
var startBtn3 = document.getElementById("start3");

var timerLabel1 = document.getElementById("timerLabel1");
var timerLabel2 = document.getElementById("timerLabel2");
var timerLabel3 = document.getElementById("timerLabel3");

var moveAllBtn = document.getElementById("moveAllBtn");
function onLoad(){
    for(element in obj){
        
    }
}
function changeColor(obj){
    var btn = obj.id;
    if(document.getElementById(btn).innerHTML == "Start")
         {
            if(t <= 30000 || btn == 'start1' || btn == 'start2')
            {
                document.getElementById(btn).style.backgroundColor = "red";
                document.getElementById(btn).innerHTML = "Stop";
            }
         }
    else
         {
            document.getElementById(btn).style.backgroundColor = "lawngreen";
            document.getElementById(btn).innerHTML = "Start";
         }
}

function resetColor(id){
    if(document.getElementById(id).innerHTML == "Stop")
    {
        document.getElementById(id).style.backgroundColor = "lawngreen";
        document.getElementById(id).innerHTML = "Start";
    }
}
function hover(obj)
{
    var temp = obj.id;
    if(document.getElementById(temp).innerHTML == "Start")
         {
            document.getElementById(temp).style.backgroundColor = "#5FBF00";
         }
    else
         {
            document.getElementById(temp).style.backgroundColor = "#BC0000";
         }
}

function noHover(obj)
{
    var temp = obj.id;
    if(document.getElementById(temp).innerHTML == "Start")
         {
            document.getElementById(temp).style.backgroundColor = "lawngreen";
         }
    else
         {
            document.getElementById(temp).style.backgroundColor = "red";
         }
}

function start_stop(obj) {

    var stopwatch = obj.id;
    if (stopwatch == 'start1') {
        if (status_sw1 == 0) {
            status_sw1 = 1;
            timer1();
        } else {
            status_sw1 = 0;
        }               
    }

    if (stopwatch == 'start2') {
        if (status_sw2 == 0) {
            status_sw2 = 1;
            timer2();
        } else {
            status_sw2 = 0;
        }               
    }

    if (stopwatch == 'start3' && t <= 30000) {
        if (status_sw3 == 0) {
            status_sw3 = 1;
            timer3();
        } else {
            status_sw3 = 0;
        }               
    }

    if (obj.value == "START") {
        obj.value = "STOP";

    } else {
        obj.value = "START";
    }
}


function reset(obj) {
    var stopwatch = obj.id;
    if (stopwatch == 'reset1') {
        resetColor("start1");
        status_sw1 = 0;
        totalRot += time_sw1;
        time_sw1 = 0;
        startBtn1.value = "START";
        timerLabel1.innerHTML = "00:00.00";
    }

    if (stopwatch == 'reset2') {
        resetColor("start2");
        status_sw2 = 0;
        totalColor += time_sw2;
        time_sw2 = 0;
        startBtn2.value = "START";
        timerLabel2.innerHTML = "00:00.00";
    }

    if (stopwatch == 'reset3')  {
        resetColor("start3");
        status_sw3 = 0;
        totalClimb += time_sw3;
        time_sw3 = 0;
        startBtn3.value = "START";
        timerLabel3.innerHTML = "00:00.00";
    }

}

function timer1() {
    if (status_sw1 == 1) {
        setTimeout(function(){
            time_sw1++;
            timerLabel1.innerHTML = getTime(time_sw1);
            timer1();
        }, 10);
    }
    checkAllBtn();
}

function timer2() {
    if (status_sw2 == 1) {
        setTimeout(function(){
            time_sw2++;
            timerLabel2.innerHTML = getTime(time_sw2);
            timer2();
        }, 10);
    }
    checkAllBtn();
}

function timer3() {
    if (status_sw3 == 1) {
        setTimeout(function(){
            time_sw3++;
            timerLabel3.innerHTML = getTime(time_sw3);
            timer3();
        }, 10);
    }
    checkAllBtn();
}

function getTime(time) {

    var min = Math.floor(time/100/60);
    var sec = Math.floor(time/100);
    var mSec = time%100;

    if (min < 10) {
        min = "0" + min;
    }
    if (sec >= 60) {
        sec = sec % 60;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ":" + sec + "." + mSec;

}

function startGame()
{
    autoTime = true;
var deadline = Date.now() + 151000; 

var x = setInterval(function() { 

var now = new Date().getTime(); 
 t = deadline - now; 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("minute").innerHTML = minutes;
if(seconds < 10){
    document.getElementById("second").innerHTML = "0" + seconds;
}
else{
    document.getElementById("second").innerHTML = seconds; 
}
if(t == 135000){
    !autoTime;
}
}, 1000); 
 
    document.getElementById("gameTimeBox").innerHTML = "Game Over!";
    document.getElementById("minute").innerHTML ='0' ; 
    document.getElementById("second").innerHTML = '0'; 

}

function pushInfo(){
   var JSONout = ""; // convert objects to json here
}
//Classes from here on
class Objective {
	constructor(nameIn,multIn,multModIn)
	{
		this.timeMod = 135000; // Time that modifier stops working, so for example autonomous ends at 15 seconds in
		this.name = nameIn;
		this.objectCountTotal = 0;
		this.objectCountModified = 0;
		this.pointValue = 0;
		this.mult = multIn;
		this.mult = multModIn;
		
	}
	constructor(nameIn,multModIn)
	{
		this.timeMod = 135000;
		this.name = nameIn;
		this.objectCountTotal = 0;
		this.objectCountModified = 0;
		this.pointValue = 0;
		this.mult = 1;
		this.mult = multModIn;
		
	}
	constructor(nameIn)
	{
		this.timeMod = 135000;
		this.name = nameIn;
		this.objectCountTotal = 0;
		this.objectCountModified = 0;
		this.pointValue = 0;
		this.mult = 1;
		this.multMod = 2;
		
	}
	
	increaseObject(time)
	{
		objectCount += pointValue * (time > timeMod)? mult : multMod;
	}
	decreaseObject(time)
	{
		objectCount += pointValue * (time > timeMod)? mult : multMod;
    }
    
	 getPointValue()
	{
		return pointValue;
	}
	makeElement(){
        var element = document.createElement(
            "div", {
            id : this.name,
            class : outerObject
        });
        let y  = document.createElement(
            "div" , {
                id : this.name, class: innerObject
            });
            y.textContent += this.name;
            element.appendChild(y);
        y.appendChild(document.createElement(
            "btn",
            {
                id: this.name + "IncreaseButton",
                onClick: this.increaseObject,
                class : objButton
                }));
        y.appendChild(document.createElement(
             "div",
                {
                     id: this.name + "Display",
                     href : "#",
                     class : display
                 }));
         
        y.appendChild(document.createElement(
            "btn",
            {
                id: this.name + "DecreaseButton",
                onClick: this.decreaseObject,
                class : objButton
                }));

	}
}

class Response {

	constructor(nameIn,values)
	{
        this.values = values; // these are the available responses for the column, this is for dropdown menu creation, we assume value[0] = N/A so that we can factor it when we are checking data
		this.name = nameIn;
		this.scale = 0;	

    }
    constructor(nameIn)
	{
        this.values = ["N/A","Horrible","Bad","Neutral","Good","Great"];
		this.name = nameIn;
		this.scale = 0;	

	}
	setScale(input){
		scale = input;
	}
	getScale(){
		return scale;
    }
    createElement(){

    }
}

class Technical {
	constructor(nameIn)
	{
		this.name = nameIn;
		this.bool = false;
	
	}
		setBool(inBool){
			bool = inBool;
        }
    createElement(){

    }
}

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
    createElement(){

    }
	//need to make sure that these objects can be converted into JSON before sent over.
}