import java.sql.*;
public class scoutSQL{
    public static final string serverName = "scoutTest";
    public static void (String gameIn){
        try(
            Connection connie = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/" + serverName + "?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
                    "cata", "robotics"); 
                    Statement stmt = conn.createStatement();){
                        for(String s : args)
                        stmt.executeQuery(s);
                    }
                }
                catch(SQLException ex) {
         ex.printStackTrace();
                
                
    }
JSON FORMAT
{
    
}