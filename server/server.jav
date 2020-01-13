import java.time.LocalDate;
import java.net.*;
public class Server implements Runnable{
    private Socket jasonsSock;

    public Server(Socket in){
        jasonsSock = in;
    }



    public static void main(String []args) throws IOException{

        final ServerSocket server = new ServerSocket(args[0]); 

        for(String i : args)
        {
            System.out.println(i);
        } 
        System.out.println("Listening for connection on port 8080 ....");
        try{
        while(true){
            Server servyBoi = new Server(server.accept());
                servyBoi.start();
             }
            }
         }


         @Override
         public void run(){
                BufferedReader buff = new BufferedReader(jasonSock.getOutputStream());


         }
}