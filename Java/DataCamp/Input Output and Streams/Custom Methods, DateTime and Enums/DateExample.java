public class DateExample {
    public static void main(String[] args) {
    	// Get current date
        LocalDate date = LocalDate.now(); 
        System.out.println("Current date in default format: " + date); 
     
        // Define format with pattern dd-MM-yyyy
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy"); 
        
        // Format and print date
        System.out.println(date.format(formatter)); 
        
        // Parse a text into a string 
        LocalDate parseDate = LocalDate.parse("2025-02-10");
        
        System.out.println("Parse the text into date: " + parseDate); 
    }
}