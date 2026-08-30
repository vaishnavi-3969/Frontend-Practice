public class Main {
    public static void main(String[] args) {
		launchTestsAndPrint(UsernameValidatorTest.class);
    }
}

class UsernameValidatorTest {
	
    // Annotate with the correct annotation for parameterized test
    @ParameterizedTest 
    // Add the annotation for inputting a null input
    @NullSource
    // Add the annotation for inputting values and the type of the inputs
    @ValueSource(strings = {"john doe", "jd"}) 
    void isValidUsername_returnsFalse_whenSpaces(String username) {
        boolean actual = UsernameValidator.isValidUsername(username);

        assertFalse(actual);
    }
}