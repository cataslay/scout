var lowCounter = 0;
var highCounter = 0;
var autoLow = 0;
var autoHigh = 0;
var totalRot = 0; 
var totalColor = 0;
var totalClimb = 0; 
var finalRot, finalColor, finalClimb; 
var t;
var totalPoints = 0;
var baseLine = false;
var climb = false;
var rotational = false;
var colorSelect = false;
var driving, bot, driveTrain, climbPos, death;
function decreaseLow(){ 
    if (lowCounter != 0) {
            document.getElementById("low").innerHTML = autoLow + --lowCounter;
        }
}
function increaseLow(){
    document.getElementById("low").innerHTML = autoLow + ++lowCounter;
}
function decreaseHigh() {  
    if(highCounter != 0)
        {
            document.getElementById("high").innerHTML = autoHigh + --highCounter;
        }
}
function increaseHigh(){
    document.getElementById("high").innerHTML = autoHigh + ++highCounter;
}
function setAutoLow()
{
    if(document.getElementById("verLow").checked == true)
        {
            autoLow = lowCounter;
            lowCounter = 0;
        }
    else
        {
            lowCounter = lowCounter + autoLow;
            autoLow = 0;
        }
}
function setAutoHigh()
{
    if(document.getElementById("verHigh").checked == true)
        {
            autoHigh = highCounter;
        highCounter = 0;
        }
    else
        {
            highCounter = highCounter + autoHigh;
            autoHigh = 0;
        }
}

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
    document.getElementById("second").innerHTML =seconds; 
}
if(t == 135000){
    autoHigh = highCounter;
    autoLow = lowCounter;
    highCounter = 0;
    lowCounter = 0;
}
if (t < 0) {  
		document.getElementById("gameTimeBox").innerHTML = "Game Over!";
		document.getElementById("minute").innerHTML ='0' ; 
		document.getElementById("second").innerHTML = '0'; } 
}, 1000); 
}

function calcInfo(){
    finalColor = "N/A";
    finalClimb = "N/A";
    finalRot = "N/A";
    if(document.getElementById("verLow").checked == true){
       totalPoints += autoLow * 2;
       }
    
    if(document.getElementById("verHigh").checked == true)
        {
            totalPoints += autoHigh * 4;
        }
    
    if(document.getElementById("verHigh").checked == true || document.getElementById("verLow").checked == true)
        {
            baseLine = true;
            totalPoints += 5
        }
    totalPoints += (lowCounter) + (highCounter * 2);
    if(document.getElementById("verRotate").checked == true)
        {
            rotational = true;
            finalRot = getTime(time_sw1);;
            totalPoints += 10    
        }
    if(document.getElementById("verColor").checked == true)
        {
            colorSelect = true;
            finalColor = getTime(time_sw2);
            totalPoints += 20;
        }
    if(document.getElementById("verClimb").checked == true)
        {
            climb = true;
            finalClimb = getTime(time_sw3);
            totalPoints += 30//Check to see if i need to sub 5 from this because the climb includes park points   
        }
    totalRot += time_sw1;
    totalColor += time_sw2;
    totalClimb += time_sw3;
    totalRot = getTime(totalRot)
    totalColor = getTime(totalColor);
    totalClimb = getTime(totalClimb);
    driving = document.getElementById("driving").options[document.getElementById("driving").selectedIndex].text; 
    bot = document.getElementById("bot").options[document.getElementById("bot").selectedIndex].text; 
    driveTrain = document.getElementById("dTrain").options[document.getElementById("dTrain").selectedIndex].text; 
    climbPos =document.getElementById("climbPos").options[document.getElementById("climbPos").selectedIndex].text; 
    death = document.getElementById("die").options[document.getElementById("die").selectedIndex].text; 
}

function pushInfo(){
    //Do the json bro
    var myObj =
        { 
            "Autonomous" : [
            {
                "Low" : autoLow,
                "High" : autoHigh
            }
            ],
            "Teleop":[
            {
            "Points": [
                {
                    "From Balls":
                        {
                            "Low Container": lowCounter,
                            "High Container": highCounter,
                        "Total Points": lowCounter * 2 + highCounter * 4,
                        },
                    "Total Points":totalPoints
                }
            ],
            "Elements": [
                {
                    "Climb": 
                        {
                            "Time to Climb": finalClimb,
                            "Total Time to Climb": totalClimb,
                            "Success": climb,
                        },
                    "Rotaion":
                        {
                            "Time to Rotate": finalRot,
                            "Total Time to Rotate": totalRot,
                            "Success": rotational,
                        },
                     "Color":
                        {
                            "Time to Select Color": finalColor,
                            "Total Time to Select Color": totalColor,
                            "Success": colorSelect,
                        }
                }
            ],
            "Opinion":
                {
                    "Driving": driving,
                    "Bot": bot,
                    "Drive Train": driveTrain,
                    "Climbing Position": climbPos,
                    "Did it Die?": death,
                }
            }
            ]
        }
    var myJSON = JSON.stringify(myObj); // does reset everythingor j refersh the page?
}

