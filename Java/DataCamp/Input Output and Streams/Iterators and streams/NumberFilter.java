import java.util.HashSet;

public public class NumberFilter {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);

        // Create a new Iterator object
        Iterator<Integer> it = numbers.iterator();
        
        // Check if more elements exist
        while (it.hasNext()) {
        	// Retrieve next element
        	int current = it.next();
            if (current > 25) {
            	// Remove the retrieved element
                it.remove();
            }
        }

        System.out.println(numbers);
    }
} Iterator {
    
}
