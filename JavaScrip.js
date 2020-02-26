
var t;
var pastActionsInverse = [];
var objs = {highBall : new Objective("highBall"), highBallInner : new Objective("highBallInner",2), lowBall : new Objective("lowBall")};
var resps = {bot : new Response("bot"), driveTrain : new Response("driveTrain") , climbPos : new Response("climbPos"), driving : new Response("driving")};
var techs = {death : new Response("drive"), baseLine : new Technical("baseline")};
var timed = {climb: new TimedObject("climb"), colorRec: new TimedObject("colorRecognition"), rotControl: new TimedObject("rotControl")};
// Make the code auto fill out html elements according to whats in the sets and then use those html elements to use their representative functions for what they are.


// function decreaseLow(){ 
    
//     document.getElementById("low").innerHTML = autoLow + --lowCounter;
// }
// function increaseLow(){
//     document.getElementById("low").innerHTML = autoLow + ++lowCounter;
// }
// function decreaseHigh() {  
//     if(highCounter != 0)
//         {
//             document.getElementById("high").innerHTML = autoHigh + --highCounter;
//         }
// }
// function increaseHigh(){
//     document.getElementById("high").innerHTML = autoHigh + ++highCounter;
// }
// function setAutoLow()
// {
//     if(document.getElementById("verLow").checked == true)
//         {
//             autoLow = lowCounter;
//             lowCounter = 0;
//         }
//     else
//         {
//             lowCounter = lowCounter + autoLow;
//             autoLow = 0;
//         }
// }
// function setAutoHigh()
// {
//     if(document.getElementById("verHigh").checked == true)
//         {
//             autoHigh = highCounter;
//         highCounter = 0;
//         }
//     else
//         {
//             highCounter = highCounter + autoHigh;
//             autoHigh = 0;
//         }
// }

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

// function calcInfo(){
//     finalColor = "N/A";
//     finalClimb = "N/A";
//     finalRot = "N/A";
//     if(document.getElementById("verLow").checked == true){
//        totalPoints += autoLow * 2;
//        }
    
//     if(document.getElementById("verHigh").checked == true)
//         {
//             totalPoints += autoHigh * 4;
//         }
    
//     if(document.getElementById("verHigh").checked == true || document.getElementById("verLow").checked == true)
//         {
//             baseLine = true;
//             totalPoints += 5
//         }
//     totalPoints += (lowCounter) + (highCounter * 2);
//     if(document.getElementById("verRotate").checked == true)
//         {
//             rotational = true;
//             finalRot = getTime(time_sw1);;
//             totalPoints += 10    
//         }
//     if(document.getElementById("verColor").checked == true)
//         {
//             colorSelect = true;
//             finalColor = getTime(time_sw2);
//             totalPoints += 20;
//         }
//     if(document.getElementById("verClimb").checked == true)
//         {
//             climb = true;
//             finalClimb = getTime(time_sw3);
//             totalPoints += 30//Check to see if i need to sub 5 from this because the climb includes park points   
//         }
//     totalRot += time_sw1;
//     totalColor += time_sw2;
//     totalClimb += time_sw3;
//     totalRot = getTime(totalRot)
//     totalColor = getTime(totalColor);
//     totalClimb = getTime(totalClimb);
//     driving = document.getElementById("driving").options[document.getElementById("driving").selectedIndex].text; 
//     bot = document.getElementById("bot").options[document.getElementById("bot").selectedIndex].text; 
//     driveTrain = document.getElementById("dTrain").options[document.getElementById("dTrain").selectedIndex].text; 
//     climbPos =document.getElementById("climbPos").options[document.getElementById("climbPos").selectedIndex].text; 
//     death = document.getElementById("die").options[document.getElementById("die").selectedIndex].text; 
// }

function pushInfo(){
   var JSONout = ""; // does reset everythingor j refersh the page?
}
  //Do the json bro
    // var myObj =
    //     { 
    //         "Autonomous" : [
    //         {
    //             "Low" : autoLow,
    //             "High" : autoHigh
    //         }
    //         ],
    //         "Teleop":[
    //         {
    //         "Points": [
    //             {
    //                 "From Balls":
    //                     {
    //                         "Low Container": lowCounter,
    //                         "High Container": highCounter,
    //                     "Total Points": lowCounter * 2 + highCounter * 4,
    //                     },
    //                 "Total Points":totalPoints
    //             }
    //         ],
    //         "Elements": [
    //             {
    //                 "Climb": 
    //                     {
    //                         "Time to Climb": finalClimb,
    //                         "Total Time to Climb": totalClimb,
    //                         "Success": climb,
    //                     },
    //                 "Rotaion":
    //                     {
    //                         "Time to Rotate": finalRot,
    //                         "Total Time to Rotate": totalRot,
    //                         "Success": rotational,
    //                     },
    //                  "Color":
    //                     {
    //                         "Time to Select Color": finalColor,
    //                         "Total Time to Select Color": totalColor,
    //                         "Success": colorSelect,
    //                     }
    //             }
    //         ],
    //         "Opinion":
    //             {
    //                 "Driving": driving,
    //                 "Bot": bot,
    //                 "Drive Train": driveTrain,
    //                 "Climbing Position": climbPos,
    //                 "Did it Die?": death,
    //             }
    //         }
    //         ]
    //     }


//Classes from here on
class Objective {
	constructor(nameIn,multIn,multModIn)
	{
		this.timeMod = 13500; // Time that modifier stops working, so for example autonomous ends at 15 seconds in
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
	
	increaseObject(time)
	{
		objectCount += pointValue * (time > timeMod)? mult : multMod;
	}
	decreaseObject(time)
	{
		objectCount += pointValue * (time > timeMod)? mult : multMod;
	}
	// increaseObjectMod() // modified point values such as autonomous
	// {
	// 	objectCount += pointValue * multMod;
	// }
	// decreaseObjectMod()
	// {
	// 	objectCount -= pointValue * multMod;
	// }
	 getPointValue()
	{
		return pointValue;
	}
	makeElement(){
        document.getElementById("divObj");
        var element = document.createElement("div", {id : this.name + "div"});
        element.appendChild(document.createElement(
            "btn",
            {
                id: this.name + "downButton",
                onClick: this.increaseObject
                }))
        element.appendChild(document.createElement(
                    "div",
                    {
                        id: this.name + "Display"
                    }))
         
        element.appendChild(document.createElement(
                    "btn",
                    {onClick: this.increaseObject,
                         id: this.name + "UpButton"}))

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