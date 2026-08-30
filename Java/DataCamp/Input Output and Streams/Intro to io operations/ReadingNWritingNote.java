class FileReadWrite {

    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("note.txt");
            // Write "Start from the beginning" to the file
            fw.____("Start from the beginning");
            fw.close();

            // Create a FileWriter in append mode
            FileWriter fwAppendMode = new ____("note.txt", ____);

            // Add " Add to the end" to the end of file
            fwAppendMode.____(" Add to the end");
            fwAppendMode.close();

            FileReader fr = new FileReader("note.txt");
            int character;
            
            // Read the file content character by character
            while ((character = fr.____()) != -1) {
                System.out.print((char) character);
            }
            fr.close();
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}