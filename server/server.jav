import java.time.LocalDate;
import java.net.*;
public class Server implements Runnable{
    //Final Variables
    private final static String blueAPI = "ALAp0Ow2FU4kebK98MBJJEa7IILZfS6HgVMtuwwODcLq1KeCPWyVKjGStP9VjKzP";
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
       
        public static String[] JSONtoArray(String jasonIn){

         }
         @Override
         public void run(){
             try{
                BufferedReader buff = new BufferedReader(jasonSock.getOutputStream());
             }
                
         }
}