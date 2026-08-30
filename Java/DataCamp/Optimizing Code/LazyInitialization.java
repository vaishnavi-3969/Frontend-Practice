public class Main {
    public static void main(String[] args) {}
}

class Database {
	// Create a property for DatabaseClient
    private DatabaseClient client;
    
    public DatabaseClient getClient() {
    	// Lazily connect to our database
        if (client == null) {
        	client.connect("https//our-database.com");
        }
        // Return only when connected
      	return client;
    }
}

// This class is simulating a real client connecting to a database
class DatabaseClient {
    public void connect(String connectionUrl) {}
}