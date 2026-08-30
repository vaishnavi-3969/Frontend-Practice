class Main {
    public static void main(String[] args) {
        launchTestsAndPrint(ExchangeAppTest.class);
    }
}

class ExchangeAppTest {
    @Test
    void convert_throwsException_whenGetRateThrowsException() {
        EuropeanCentralBankServer bank = new EuropeanCentralBankServer();
        ExchangeApp exchangeApp = new ExchangeApp(bank);
        Exception expectedException = null;

        try {
            double result = exchangeApp.convertEuroTo("Invalid Currency", 1000);
        } catch (Exception e) {
        	expectedException = e;
        }
       	// Assert that the exception is an instance of the correct class
        assertInstanceOf(RuntimeException.class, expectedException);
        // Assert that the exception message is correct
        assertEquals("Currency not in ECB list: Invalid Currency", expectedException.getMessage());
    }
}

class Main {
    public static void main(String[] args) {
        launchMockitoTestsAndPrint(ExchangeAppTest.class);
    }
}

class ExchangeAppTest {
    @Test
    void convertEuroTo_convertsTST() {
        // Create a mock object for the EuropeanCentralBankServer
        EuropeanCentralBankServer bank = mock(EuropeanCentralBankServer.class);
        ExchangeApp exchangeApp = new ExchangeApp(bank);
        double euroAmount = 100;
        // Stub the mock to return a value for given input
        when(exchangeApp.convertEuroTo("TST", 100)).thenReturn(12345.0);

        double tstAmount = exchangeApp.convertEuroTo("TST", euroAmount);

        System.out.println("Converted " + euroAmount + " EUR to " + tstAmount + " TST.");
        // Assert on the exact expected value of tstAmount
        assertEquals(1234500, tstAmount);
    }
}