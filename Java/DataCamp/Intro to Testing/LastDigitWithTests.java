public class LastDigitWithTests {
  public static void main(String[] args) {
    launchTestsAndPrint(LastDigitTest.class);
  }
}

class LastDigit {
    public static int lastDigit(int a) {
        return Math.abs(a) % 10;
    }
}

class LastDigitTest {

    @ParameterizedTest
    // Use the correct annotation for a pair of integer inputs
    @CsvSource(value = {"2025, 5", "-2025, 5", "2020, 0"}) 
    // Write the corresponding argument types for the test method
    void testLastDigit(int number, int expected) {
        int actual = LastDigit.lastDigit(number);

        assertEquals(expected, actual);
    }
}