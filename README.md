Robotics Scouting Program
  2020 INFINITE RECHARGE COMPETITION

---
Java:
* The Java libraries we used are 
  * java.net.*
    * Used for creating and using the server throughout the program
  * java.time.localDate
    * Used to record and display the time of each cycle of the server
  * 
---
Javascript:
* The Javascript libraries we used are 
  * 
    * Used 
---
Made By:
* Matthew Adragna
* Benjamin Davidson
---
Goals :
---
*  Create Manageable data server
*  Use SQL or have easy way to view and sort through stats
*  Easy modification 
*  Offline data retention (cookies?)
*  Be able to easily correct mistakes through the website ( or in some way)
*  Should be able to see a timeline and change and delete data based on in
*  Should be able to save offline data and then send it to the server once connection is established and then delete it off local storage
---
Types of data :
---
*   Objective - () (putting something on the scale) - Can be Modified
*   Out of Field Interaction - (type) (Powerup blocks)
*   OneTimer - (boolean) (crossing the line in autonomous)
*   Timed Objects - (boolean / time)   (climb)
*   Opinionated Response - (int)  ( Driver score, robot score, defense score)
*   Technical data - (boolean ) (robot stopped working or didnt show up)
*   Ranking Points - (Int) (filling up the spaceship)
*   End of game addition - (justs adds points if conditions are met)
---
Modifier:
---
*   Autonomous/ sandstorm
*   Boost / downgrade
---
<<<<<<< HEAD
JSON Format:
----
Listed:
{Objectives ; "[]"}
=======
Data intake for 2020:
---
*  StartingPosition(int)
*  ballHighOuter(Objective)
*  ballHighAutonomous(Objective)
*  ballHighInner(Objective)
*  ballHighInnerAutonomous(Objective)
*  ballLow(Objective)
*  ballLowAutonomous(Objective)
*  diskSpun(timedObject)
*  climb(timedObject)
*  DriverRating(OpinionResponse)
*  RobotRating(OpinionResponse)
---
JSON FORMAT:
---
{"startPos": name,
"ballHighOuter" :
blah blah blah
}
>>>>>>> bc85bf6253d59990dbf0d2128d908e5d48f83ffd
