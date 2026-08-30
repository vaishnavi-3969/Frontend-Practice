public class Main {
    public static void main(String[] args) {
		launchTestsAndPrint(UsernameValidatorTest.class);
    }
}

class UsernameValidator {
    public static boolean isValidUsername(String username) {
                return username != null && !username.isEmpty() && !username.contains(" ") && username.length() >= 3;
    }
}

class UsernameValidatorTest {

    @Test
    void isValidUsername_returnsTrue_whenValidUsername() {
        String username = "john_doe";
        boolean actual = UsernameValidator.isValidUsername(username);
        assertTrue(actual);
    }

    @Test
    void isValidUsername_returnsFalse_whenSpaces() {
        String username = "john doe";
        boolean actual = UsernameValidator.isValidUsername(username);
        assertFalse(actual);
    }

    @Test
    void isValidUsername_returnsFalse_whenShortUsername() {
        // Enter a username that is too short
        String username = "i";
        boolean actual = UsernameValidator.isValidUsername(username);
        assertFalse(actual);
    }

    @Test
    void isValidUsername_returnsFalse_whenNull() {
    	String username = null;
        // Pass the username to isValidUsername 
        boolean actual = UsernameValidator.isValidUsername(username);
        // Verify the username is invalid
        assertFalse(actual);
    }
}