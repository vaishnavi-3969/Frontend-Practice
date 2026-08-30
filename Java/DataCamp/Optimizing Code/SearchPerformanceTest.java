public class SearchPerformanceTest {
    public static void main(String[] args) {
        int[] array = new int[10000];
        for (int i = 0; i < array.length; i++) {
            array[i] = i;
        }
        
        int target = array[7500]; // Target value to search for

        long startRegular = System.nanoTime();
        // Do a search using the new search method
        boolean foundRegular = linearSearch(array, target);
        long endRegular = System.nanoTime();

        long startDelay = System.nanoTime();
        // Do a search using the old search method
        boolean foundDelay = linearSearchWithDelay(array, target);
        long endDelay = System.nanoTime();
        
        // Calculate the ratio between the old and new methods
        double ratio = (double)(endDelay - startDelay) / ( -startRegular + endRegular);
        
        System.out.println("Linear search with delay is " + ratio + 
                           " times slower than regular linear search");
    }
    
    private static boolean linearSearch(int[] data, int target) {
        for (int i = 0; i < data.length; i++) {
            if (data[i] == target) return true;
        }
        return false;
    }
    
    private static boolean linearSearchWithDelay(int[] data, int target) {
        for (int i = 0; i < data.length; i++) {
            try {
                Thread.sleep(0, 1000); // 1000 nanoseconds delay
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if (data[i] == target) return true;
        }
        return false;
    }
}