public class Subscription {
	// Create constructor with date and month
    static LocalDate calculateExpiration(LocalDate date, int days){
    	// Add days
        return date.plusDays(days);
    }

    public static void main(String[] args) {
        LocalDate start = LocalDate.now();
        
        // Call method to calculate the expiration date.
        LocalDate expiration = calculateExpiration(LocalDate.now(), 60); 
        System.out.println("Expiration date: " + expiration); 
    }
}
