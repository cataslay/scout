import java.net.*;
import java.time.LocalDate;
public class server{
    public static void main(String []args){

        final ServerSocket server = new ServerSocket(args[0]); // initializes the serverSocket that will listen for client requests https://docs.oracle.com/javase/7/docs/api/java/net/ServerSocket.html

        for(String i : args)
        {
            System.out.println(i);// prints out starting conditions
        } 
        System.out.println("Listening for connection on port 8080 ....");

        while(true){//used to continually execute the code
            try {// As to not error out of the code
                Socket client = server.accept(); //Should be a blocking call until the server connects to the client https://docs.oracle.com/javase/7/docs/api/java/net/Socket.html 
            
                InputStreamReader isr = new InputStreamReader(socket.InputStream());
            
            
            
            
            
            } catch (Exception e) {
               System.out.println(localDate.now().toString() + "Error Occurred: Server was unable to recieve request from client " + client);
            }}
    }
}