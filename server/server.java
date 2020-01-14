import java.util.Date;
import java.net.*;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
public class Server implements Runnable{
    //Database files
    public static final File file = new File('worksheet.xlsx'); // File being written to 
    public static final XSSFWorkbook dataSheet = new XSSFWorkbook();





    //Final Variables
    private final static String blueAPI = "https://www.thebluealliance.com/ALAp0Ow2FU4kebK98MBJJEa7IILZfS6HgVMtuwwODcLq1KeCPWyVKjGStP9VjKzP";
    // Instance Variables
    private Socket jasonsSock;
    // Static Runtime Variables
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
        final ServerSocket server = new ServerSocket(args[0]); 
        System.out.println("Listening for connection on port 8080 ....");

        try{
        while(true){
            Server servyBoi = new Server(server.accept()); // creates a thread with the received connection
                servyBoi.start(); //runs the thread
             }
            }
         }
        
        public static void setToWorksheet(Set in){
                

        }
       
        public static Set JSON_TO_SET(String jasonIn){// 
            // TreeMap<Integer,String> info = new TreeMap<>();
            StringTokeniser jason = new StringTokeniser(jasonIn,"{},");
            



         }

         @Override
         public void run(){
             try{
                BufferedReader buff = new BufferedReader(jasonSock.getOutputStream());
                String JSON = buff.readLine();
                System.out.println("RUN() L3: JSON : " +JSON);
                


             }
             catch(IOException ioe){
                 System.out.println(Date.now() +" : "+ ioe);
             }
                
         }
}
