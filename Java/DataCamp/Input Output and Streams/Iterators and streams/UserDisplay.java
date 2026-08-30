import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public public class UserDisplay {
    public static void main(String[] args) {
        List<String> usernames = new ArrayList<>();
        usernames.add("Alice123");
        usernames.add("BobTheCoder");
        usernames.add("CharlieDev");
        usernames.add("David99");

        // Convert list to Stream
        Stream<String> stream = usernames.stream();
        // Print each username
        stream.forEach(name -> System.out.println("User: " + name));
    }
} ProcessingUsernameForDisplay {
    
}
