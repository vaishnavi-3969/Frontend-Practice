public class CityProcessor {
    public static void main(String[] args) {
        List<String> cities = List.of("paris", "london", "new york", "paris");

        Set<String> uniqueUppercaseCities = cities.stream()
        	// Convert each city name to uppercase
            .map(city -> city.toUpperCase())
            // Collect the result and store in a Set
            .collect(Collectors.toSet());

        System.out.println(uniqueUppercaseCities);
    }
}

public class SalesCalculator {
    public static void main(String[] args) {
        List<Double> sales = List.of(200.0, 450.0, 700.0, 150.0, 300.0);

        double totalSalesAfterTax = sales.stream()
        	// Apply 10% tax increase to each transaction
            .map(amount -> amount * 1.1) 
            // Sum up all the updated sales values.
            .reduce(0.0, (sum, value) -> sum + value);

        System.out.println("Total Sales After Tax: $" + totalSalesAfterTax);
    }
}
