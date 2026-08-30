class DirectoryManager {

    public static void main(String[] args) {
        try {
            // Create a File object to represent the directory
            File notesDir = new File("notes");
            
            // Create a directory in the system
            if (notesDir.mkdir()) {
                System.out.println("Directory 'notes' created successfully");
            }

            // Retrieve and print the relative path of the directory
            System.out.println("Relative Path: " + notesDir.getPath());

        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}