public class IntReverser {
    
    public static int reverse(int input) {
        return 0;
    }

    public static class IntReverserTest {
    
        @Test
        public void testReverse_reversesNumber() {
            int input = 1234;
            // Write down the expected return value
            int expected = 4;

			// Call the reverse() method to obtain its actual return value
            int actual = IntReverser.reverse(input);

			// Write the arguments for the assert statement in the correct order
            assertEquals(expected, actual);
        }
    }

    public static void main(String[] args) {
		launchTestsAndPrint(IntReverserTest.class);
    }
}