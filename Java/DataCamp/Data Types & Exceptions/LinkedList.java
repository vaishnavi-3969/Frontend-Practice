public class Averaging {

	public static void main(String[] args) {
    	// Create a LinkList of Doubles using parameterized constructor
		LinkedList<Double> prices = new LinkedList<Double>();
		prices.add(5.60);
        // Add 9.65 to the end of the list
		prices.addLast(9.65);
		prices.add(3.40);
        // Add 1.35 to the start of the list
		prices.addFirst(1.35);
        System.out.println(prices);
		Double total = 0.0;
        
        // Use for each to loop through all the prices
		for (Double price : prices) {
			total += price;
		}
		System.out.println("Average price: " + total/prices.size());
	}
}
