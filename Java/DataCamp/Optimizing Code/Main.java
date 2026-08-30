public class Main {
    public static void main(String[] args) {
        // Get the start time
        long startTime = System.nanoTime();
        
        String result = "";
        for (int i = 0; i < 10000; i++) {
            // Add the current number to the result string
            result += i;
        }
        
        // Get the end time
        long endTime = System.nanoTime();
        
        // Calculate the duration
        long durationInNanos = endTime - startTime;
        double durationInMillis = durationInNanos / 1_000_000.0;
        
        System.out.println("String concatenation took: " + durationInMillis + " ms");
        System.out.println("Final string length: " + result.length());
    }
}