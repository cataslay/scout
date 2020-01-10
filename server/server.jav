import java.net.*;
import java.time.LocalDate;
public class server{
    public static void main(String []args){
        final ServerSocket server = new ServerSocket(args[0]); // initializes the server
        for(String i : args){System.out.println(i);} // prints out starting conditions
        System.out.println("Listening for connection on port 8080 ....");
        while(true){
            try {
                Socket client = server.accept();
                
            } catch (Exception e) {
               System.out.println(localDate.now().toString() + "Error Occurred: Server was unable to recieve request from client " + client);
            }}
    }
}