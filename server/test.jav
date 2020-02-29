public class test{

public static void main(String [] args){
String test ="{ 
    \"Bot Info\" : [
        {
       \"Team Number\": teamNum,
       \"Starting Position\": startPos
        }
   ],
   \"Technical\" : [
   {
       \"Low\" : autoLow,
       \"High\" : autoHigh
   }
   ],
   \"Objective\":[

   ],
   \"Response\":[
       {
           \"Driving\": driving,
           \"Bot\": bot,
           \"Drive Train\": driveTrain,
           \"Climbing Position\": climbPos,
           \"Did it Die?\": death,
       }
   }],
   \"Objective\":[

   ]"
   console.log(JSON_TO_MAP(test));
}





public static Set JSON_TO_MAP(String jasonIn){//
    HashMap<String,String> info = new TreeMap<>();
   String spltJSON = JSON.split("],");
   System.out.println(spltJSON);
//    for (String i : spltJSON){
//     colon = i.indexOf(":");
//     info.add(i.subString(0,colon));
    


   }
}