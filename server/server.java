
import java.util.*;
import java.net.*;
import java.io.*;
import java.util.Date;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
//import org.apache.poi.ss.usermodel.Cell;
//import org.apache.poi.xssf.usermodel.XSSFRow;
//import org.apache.poi.xssf.usermodel.XSSFSheet;
//import org.apache.poi.xssf.usermodel.XSSFWorkbook;

 public class Server implements Runnable{
    //Database files
    // public static final File file = new File("worksheet.xlsx"); // File being written to 
    // public static final XSSFWorkbook dataSheet = new XSSFWorkbook();
    static final String DEFAULT_FILE = "blue1.html";
	static final String FILE_NOT_FOUND = "redirect.html";




    //Final Variables
    // public static matchData = [matchNum: 0];
    private final static String blueAPI = "https://www.thebluealliance.com/api/ALAp0Ow2FU4kebK98MBJJEa7IILZfS6HgVMtuwwODcLq1KeCPWyVKjGStP9VjKzP";
    // Instance Variables
    private Socket jasonsSock;
    // Static Runtime Variable
    // public static String gameData[];
    public static Vector<String> gameData = new Vector<>();
    //Constructor for the new thread which is constructed each time a new connection is formed
    public Server(Socket in){
        jasonsSock = in;
    }


    
    // Main method that loops looking for the next connection
    public static void main(String []args) throws IOException{
        for(String i : args)
        {
            System.out.println(i); // Will print out starting args
        } 
        final ServerSocket server = new ServerSocket(8080); 
        System.out.println("Listening for connection on port 8080 ....");

        try{
        while(true){
           Server servyBoi = new Server(server.accept()); 
            Thread y = new Thread(servyBoi);//; creates a thread with the received connection
                y.start(); //runs the thread
       }
            }catch(IOException e){System.out.println(new Date() + " : Thread Exception : " + e);}
         }
        
         public static void setToWorksheet(Set in){
                
        }
   

         @Override
         public void run(){
             try{
                BufferedReader buff = new BufferedReader(new InputStreamReader(jasonsSock.getInputStream()));
                String JSON = buff.readLine();
                System.out.println("RUN() L4: JSON : " + JSON);
                setToWorksheet(JSON_TO_MAP(JSON));
                }
                catch(IOException ioe){
                 System.out.println(new Date() +" : "+ ioe);
             }
                
         }
             
       public static Map JSON_TO_MAP(String JSON){
         String identities[] = {"Team Number","Starting Position","Computer Number","Computer Color","Low","High","Low Container","High Container","Total Points","Total Points Again","Time to Climb", "Total Time to Climb", "SuccessClimb","Time to Rotate","SuccessRotate","Time to Select Color","Total Time to Select Color","SuccessColor","Driving","BotScore","Drive Train","Climbing Position","Did it Die?"}; // Basically hardcoded for now, change it so that it has the ability to accept any type of object that is created on the javascript side
         Map<String,String> info = new HashMap<>(); // whats being worked on
    for(String i : identities){ // this is basically hard coded, fix this later, maybe send all values through a huge array instead of through object notation and make the javascript side handle the differentiations between useful and unuseful objects
        //String i = "Team Number";
        if(JSON.contains(i)){
            String data = JSON.substring(JSON.indexOf(i) + i.length() + 3); 
            data = (data.indexOf("}") > data.indexOf(","))? data.substring(0,data.indexOf(",")) : data.substring(0,data.indexOf("}"));    
            info.put(i,data);
    }
        else
            System.out.println("Improper Identity : " + i);
    }
    
    return info;}
              
    
    }