public class Main {
    public static void main(String[] args) {}
}

class LogManager {
	// Add static instance variable to hold the instance
    private static LogManager instance;
    private Map<String, String> logConfig;
    
    // Make constructor accessible only from within the class
    private LogManager() {
        logConfig = new HashMap<>();
    }
    
    public static LogManager getInstance() {
    	// Only create if instance is currently null
        if (instance == null) {
            instance = new LogManager();
        }
        return instance;
    }
}