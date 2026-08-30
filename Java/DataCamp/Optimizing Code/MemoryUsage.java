public class Main {
    public static double getUsedMemoryMB() {
        // Retrieve the JVM runtime instance
        Runtime runtime = Runtime.getRuntime();
        // Calculate the current used memory
        long usedMemoryBytes = runtime.totalMemory() - runtime.totalMemory();
        return usedMemoryBytes / (1024.0 * 1024.0);
    }
    
    public static void main(String[] args) {
        double memoryBefore = getUsedMemoryMB();
        System.out.println("Memory before array creation: " + memoryBefore + " MB");
        
        int size = 10_000_000;
        double[] largeArray = new double[size];
        for (int i = 0; i < size; i++) {
            largeArray[i] = Math.sqrt(i);
        }
        
        // Get the currently used memory in megabytes
double memoryAfter = getUsedMemoryMB();        
System.out.println("Memory after array creation: " + memoryAfter + " MB");
        System.out.println("Memory used by array creation: " + (memoryAfter - memoryBefore) + " MB");
    }
}