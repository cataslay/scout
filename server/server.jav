import java.net.*;
import java.time.LocalDate;
public class server{
    public static void main(String []args) throws IOException{

        final ServerSocket server = new ServerSocket(args[0]); 

        for(String i : args)
        {
            System.out.println(i);
        } 
        System.out.println("Listening for connection on port 8080 ....");

        while(true){ try(Socket client = server.accept()) {
        
            
                InputStreamReader isr = new InputStreamReader(socket.InputStream());
                BufferedReader buff = new BufferedReader(isr);
                String lineIn = buff.readLine();

                while(lineIn != null){
                    System.out.println(lineIn);
                    lineIn= buff.readLine();
                }

            } catch (Exception e) {
               System.out.println(localDate.now().toString() + "Error Occurred: Server was unable to recieve request from client "); 
               }
            }
         }
}