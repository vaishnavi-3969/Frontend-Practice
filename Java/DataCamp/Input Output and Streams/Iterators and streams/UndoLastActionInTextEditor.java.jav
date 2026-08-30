public class TextEditorUndo {
    public static void main(String[] args) {
        ArrayList<String> textHistory = new ArrayList<>();
        textHistory.add("Hello");
        textHistory.add("error");
        textHistory.add("world");

        // Create ListIterator starting from the end of the list
        ListIterator<String> it = textHistory.listIterator(textHistory.size());

        // Check if more elements are available in reverse order
        while (it.hasPrevious()) {
        	// Retrieve previous element
            String word = it.previous();
            if (word.equals("error")) {
                // Insert "correction" before "error"
                it.add("correction");
            }
        }

        System.out.println(textHistory);
    }
}
