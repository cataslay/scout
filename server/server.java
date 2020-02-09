package sql;
import java.util.LocalDateTime;
import java.net.*;
import java.io.IOException;
import java.util.StringTokenizer;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
// import org.apache.poi.ss.usermodel.Cell;
// import org.apache.poi.xssf.usermodel.XSSFRow;
// import org.apache.poi.xssf.usermodel.XSSFSheet;
// import org.apache.poi.xssf.usermodel.XSSFWorkbook;
public class Server implements Thread{
    //Database files
    // public static final File file = new File("worksheet.xlsx"); // File being written to 
    // public static final XSSFWorkbook dataSheet = new XSSFWorkbook();
    




    //Final Variables
    private final static String blueAPI = "https://www.thebluealliance.com/api/ALAp0Ow2FU4kebK98MBJJEa7IILZfS6HgVMtuwwODcLq1KeCPWyVKjGStP9VjKzP";
    // Instance Variables
    private Socket jasonsSock;
    // Static Runtime Variable
    public static String gameData[];
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
        final ServerSocket server = new ServerSocket(String.parseInt(args[0])); 
        System.out.println("Listening for connection on port 8080 ....");

        try{
        while(true){
           Server servyBoi = new Server(server.accept()); //; creates a thread with the received connection
                servyBoi.start(); //runs the thread
       }
            }catch(Exception e){System.out.println(LocalDateTime.now() + " : Thread Exception : " + e);}
         }
        
        // public static void setToWorksheet(Set in){
                
        // }
   

         @Override
         public void run(){
             try{
                BufferedReader buff = new BufferedReader(jasonSocks.getOutputStream());
                String JSON = buff.readLine();
                System.out.println("RUN() L4: JSON : " + JSON);
                setToWorksheet(JSON_TO_SET(JSON));
                }
             catch(IOException ioe){
                 System.out.println(LocalDateTime.now() +" : "+ ioe);
             }
                
         }
             
        public static Set JSON_TO_SET(String jasonIn){//
            HashSet<String,String> info = new TreeMap<>();
           spltJSON = JSON.split(",");
           for (String i : spltJSON){
            colon = i.indexOf(":");
            info.add(i.subString(0,colon));
            


           }
        }
}
