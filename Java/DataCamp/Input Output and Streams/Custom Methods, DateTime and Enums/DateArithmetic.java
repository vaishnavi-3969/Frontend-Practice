import java.time.LocalDate;

public public class DateArithmetic {
    public static void main(String[] args) {
    	// Get current date
        LocalDate today = LocalDate.now(); 
        
        // Add 10 days
        LocalDate futureDate = today.plusDays(10);
        
        // Subtract 5 days
        LocalDate pastDate = today.minusDays(5); 
        
        System.out.println(futureDate); 
        System.out.println(pastDate);
    }
}