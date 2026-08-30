public class CompanyEmailFilter {
    public static void main(String[] args) {
        List<String> emails = new ArrayList<>();
        emails.add("alice@company.com");
        emails.add("bob@gmail.com");
        emails.add("charlie@company.com");
        emails.add("david@yahoo.com");

        // Convert list to Stream
        Stream<String> stream = emails.stream();
        long count = stream
        	// Filter email ends with "@company.com"
            .filter(email -> email.endsWith("@company.com"))
            // Count matching emails
            .count();
        
        System.out.println("Total company emails: " + count);
    }
}
