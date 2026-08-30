public class ContactUpdater {
    public static void main(String[] args) {
        ArrayList<String> contacts = new ArrayList<>();
        contacts.add("Alice");
        contacts.add("Jon");
        contacts.add("Charlie");

        // Create ListIterator for the contacts list
        ListIterator<String> it = contacts.listIterator();

        // Check if more elements are available
        while (it.hasNext()) {
        	// Retrieve next element
            String name = it.next();
            if (name.equals("Jon")) {
                // Update element to "John"
                it.set("John");
            }
        }

        System.out.println(contacts);
    }
}
