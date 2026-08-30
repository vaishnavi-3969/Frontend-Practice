class CacheDataManager {  

    public static void main(String[] args) {  
        try {  
			// Create a File object
            File cacheFile = new File("cache.txt");  

            // Check if the file exists
            if (cacheFile.exists()) {  
            	// Attempt to delete the file
                if (cacheFile.delete()) {  
                    System.out.println("Old cache file deleted successfully.");  
                } else {  
                    System.out.println("Failed to delete the old cache file.");  
                }  
            }  

            // Create the file for cache.txt
            if (cacheFile.createNewFile()) {  
                System.out.println("New cache file created successfully.");  
            } else {  
                System.out.println("Failed to create the new cache file.");  
            }  

        } catch (IOException e) {  
            System.out.println("An error occurred: " + e.getMessage());  
        }  
    }  
}